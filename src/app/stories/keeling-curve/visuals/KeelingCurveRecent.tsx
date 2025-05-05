"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { useInView } from "react-intersection-observer";

const YEARS = 4;

interface DataPoint {
  year: number;
  month: number;
  avg: number;
  trend: number;
}

export default function KeelingCurveRecent() {
  const svgRef = useRef<SVGSVGElement>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const [data, setData] = useState<DataPoint[] | null>(null);

  useEffect(() => {
    d3.csv("/data/co2_monthly.csv", (d: any) => {
      const year = parseFloat(d["decimal date"]);
      const month = parseFloat(d["month"]);
      const avg = parseFloat(d["average"]);
      const trend = parseFloat(d["deseasonalized"]);
      return !isNaN(year) && !isNaN(month) && !isNaN(avg) && !isNaN(trend)
        ? { year, month, avg, trend }
        : null;
    }).then((parsed) => {
      const clean = parsed.filter((d) => d !== null) as DataPoint[];
      const latest = Math.floor(d3.max(clean, (d) => d.year));
      const filtered = clean.filter((d) => d.year >= latest - YEARS);
      setData(filtered);
    });
  }, []);

  useEffect(() => {
    if (!inView || !svgRef.current || !data) return;

    const width = 700;
    const height = 400;
    const margin = { top: 40, right: 20, bottom: 40, left: 60 };

    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

    const x = d3
      .scaleLinear()
      .domain(d3.extent(data, (d) => d.year) as [number, number])
      .range([margin.left, width - margin.right]);

    const y = d3
      .scaleLinear()
      .domain([
        d3.min(data, (d) => d.avg)! - 2,
        d3.max(data, (d) => d.avg)! + 2,
      ])
      .range([height - margin.bottom, margin.top]);

    svg.selectAll("*").remove();

    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(
        d3
          .axisBottom(x)
          .tickValues([...new Set(data.map((d) => Math.floor(d.year)))])
          .tickFormat(d3.format("d")),
      );

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

    // --- Line 1: Monthly Average ---
    const line1 = d3
      .line<DataPoint>()
      .x((d) => x(d.year))
      .y((d) => y(d.avg));

    const path1 = svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#06b6d4")
      .attr("stroke-width", 2)
      .attr("d", line1);

    const totalLength1 = (path1.node() as SVGPathElement).getTotalLength();

    path1
      .attr("stroke-dasharray", totalLength1)
      .attr("stroke-dashoffset", totalLength1)
      .transition()
      .duration(2500)
      .ease(d3.easeCubicInOut)
      .attr("stroke-dashoffset", 0);

    // --- Line 2: Deseasonalized ---
    const line2 = d3
      .line<DataPoint>()
      .x((d) => x(d.year))
      .y((d) => y(d.trend));

    const path2 = svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#f59e0b")
      .attr("stroke-width", 1)
      .attr("d", line2);

    const totalLength2 = (path2.node() as SVGPathElement).getTotalLength();

    path2
      .attr("stroke-dasharray", totalLength2)
      .attr("stroke-dashoffset", totalLength2)
      .transition()
      .delay(1000) // optional: stagger start
      .duration(2500)
      .ease(d3.easeCubicInOut)
      .attr("stroke-dashoffset", 0);

    // Legend
    const legend = svg
      .append("g")
      .attr("transform", `translate(${margin.left + 50}, ${margin.top + 20})`);

    legend
      .append("line")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", 24)
      .attr("y2", 0)
      .attr("stroke", "#06b6d4")
      .attr("stroke-width", 2);

    legend
      .append("text")
      .attr("x", 32)
      .attr("y", 4)
      .attr("font-size", "12px")
      .attr("fill", "#334155") // Tailwind slate-700
      .text("Monthly Average");

    legend
      .append("line")
      .attr("x1", 0)
      .attr("y1", 20)
      .attr("x2", 24)
      .attr("y2", 20)
      .attr("stroke", "#f59e0b")
      .attr("stroke-width", 1);
    // .attr("stroke-dasharray", "4 2");

    legend
      .append("text")
      .attr("x", 32)
      .attr("y", 24)
      .attr("font-size", "12px")
      .attr("fill", "#334155")
      .text("Trend");

    // Title and labels
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", margin.top - 20)
      .attr("text-anchor", "middle")
      .attr("font-size", "16px")
      // .attr("font-weight", "bold")
      .text(`Recent CO₂ Levels (Last ${YEARS} Years)`);

    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", height - 4)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .text("Year");

    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -height / 2)
      .attr("y", 16)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .text("CO₂ Concentration (ppm)");
  }, [inView, data]);

  return (
    <div ref={ref} className="w-full">
      <svg ref={svgRef} className="w-full" />
    </div>
  );
}
