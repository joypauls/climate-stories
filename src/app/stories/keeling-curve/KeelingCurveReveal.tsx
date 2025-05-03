"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { useInView } from "react-intersection-observer";

interface DataPoint {
  year: number;
  trend: number;
  avg: number;
}

export default function KeelingCurveReveal() {
  const svgRef = useRef<SVGSVGElement>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const [data, setData] = useState<DataPoint[] | null>(null);

  // 1. Load the CSV
  useEffect(() => {
    d3.csv("/data/co2_monthly.csv", (d: any) => {
      const year = parseFloat(d["decimal date"]);
      const trend = parseFloat(d["deseasonalized"]);
      const avg = parseFloat(d["average"]);
      return !isNaN(year) && !isNaN(trend) && !isNaN(avg)
        ? { year, trend, avg }
        : null;
    }).then((parsed) => {
      const filtered = parsed.filter((d) => d !== null) as DataPoint[];
      setData(filtered);
    });
  }, []);

  // 2. Draw chart
  useEffect(() => {
    if (!inView || !svgRef.current || !data) return;

    const width = 700;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 40, left: 60 };

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
        300,
        d3.max(data, (d) => Math.max(d.ppm ?? 0, d.trend, d.avg))! + 10,
      ])
      .range([height - margin.bottom, margin.top]);

    svg.selectAll("*").remove();

    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).ticks(6).tickFormat(d3.format("d")));

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

    // Line generators
    const lineTrend = d3
      .line<DataPoint>()
      .x((d) => x(d.year))
      .y((d) => y(d.trend));

    const lineAvg = d3
      .line<DataPoint>()
      .x((d) => x(d.year))
      .y((d) => y(d.avg));

    // --- Line 1: Smoothed Trend ---
    const path1 = svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#06b6d4")
      .attr("stroke-width", 2)
      .attr("d", lineAvg);

    const total1 = (path1.node() as SVGPathElement).getTotalLength();

    path1
      .attr("stroke-dasharray", total1)
      .attr("stroke-dashoffset", total1)
      .transition()
      .duration(2000)
      .ease(d3.easeCubicInOut)
      .attr("stroke-dashoffset", 0);

    // --- Line 2: Monthly Average ---
    const path2 = svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#f59e0b")
      .attr("stroke-width", 1)
      // .attr("opacity", 0.7)
      // .attr("stroke-dasharray", "4 2")
      .attr("d", lineTrend);

    const total2 = (path2.node() as SVGPathElement).getTotalLength();

    path2
      .attr("stroke-dasharray", total2)
      .attr("stroke-dashoffset", total2)
      .transition()
      .delay(1000) // optional: stagger start
      .duration(2000)
      .ease(d3.easeCubicInOut)
      .attr("stroke-dashoffset", 0);

    // --- Legend Group ---
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

    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", margin.top - 8) // position above the chart area
      .attr("text-anchor", "middle")
      .attr("fill", "#1e293b") // Tailwind slate-800
      .attr("font-size", "16px")
      // .attr("font-weight", "bold")
      .text("Atmospheric CO₂ at Mauna Loa Observatory");

    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("x", width / 2)
      .attr("y", height - 4)
      .attr("fill", "#334155") // Tailwind slate-700
      .attr("font-size", "12px")
      .text("Year");

    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("transform", `rotate(-90)`)
      .attr("x", -height / 2)
      .attr("y", 16)
      .attr("fill", "#334155")
      .attr("font-size", "12px")
      .text("CO₂ Concentration (ppm)");
  }, [inView, data]);

  return (
    <div ref={ref}>
      <svg ref={svgRef} className="w-full" />
    </div>
  );
}
