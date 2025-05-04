"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { useInView } from "react-intersection-observer";

const YEARS = 4;

interface DataPoint {
  year: number;
  month: number;
  ppm: number;
}

export default function KeelingCurveRecent() {
  const svgRef = useRef<SVGSVGElement>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const [data, setData] = useState<DataPoint[] | null>(null);

  useEffect(() => {
    d3.csv("/data/co2_monthly.csv", (d: any) => {
      const year = parseFloat(d["decimal date"]);
      const month = parseFloat(d["month"]);
      const ppm = parseFloat(d["average"]);
      return !isNaN(year) && !isNaN(month) && !isNaN(ppm)
        ? { year, month, ppm }
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
        d3.min(data, (d) => d.ppm)! - 2,
        d3.max(data, (d) => d.ppm)! + 2,
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

    const line = d3
      .line<DataPoint>()
      .x((d) => x(d.year))
      .y((d) => y(d.ppm));

    const path = svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#3b82f6")
      .attr("stroke-width", 2)
      .attr("d", line);

    const totalLength = (path.node() as SVGPathElement).getTotalLength();

    path
      .attr("stroke-dasharray", totalLength)
      .attr("stroke-dashoffset", totalLength)
      .transition()
      .duration(2500)
      .ease(d3.easeCubicInOut)
      .attr("stroke-dashoffset", 0)
      .on("end", () => {
        // Label Summer and Winter
        let delay = 0;
        data.forEach((d, i) => {
          if (d.month == 1) {
            svg
              .append("text")
              .attr("x", x(d.year))
              .attr("y", y(d.ppm) - 10)
              .attr("fill", "#f97316")
              .attr("font-size", "10px")
              .attr("text-anchor", "middle")
              .style("opacity", 0)
              .text("Winter")
              .transition()
              .delay(delay)
              .duration(1000)
              .style("opacity", 1);
            delay += 200;
          } else if (d.month == 7) {
            svg
              .append("text")
              .attr("x", x(d.year))
              .attr("y", y(d.ppm) + 15)
              .attr("fill", "#0ea5e9")
              .attr("font-size", "10px")
              .attr("text-anchor", "middle")
              .style("opacity", 0)
              .text("Summer")
              .transition()
              .delay(delay)
              .duration(1000)
              .style("opacity", 1);
            delay += 200;
          }
        });
      });

    // Title and labels
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", margin.top - 20)
      .attr("text-anchor", "middle")
      .attr("font-size", "16px")
      // .attr("font-weight", "bold")
      .text("Recent CO₂ Levels (Last 5 Years)");

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
