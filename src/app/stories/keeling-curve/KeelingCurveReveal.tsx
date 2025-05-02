"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { useInView } from "react-intersection-observer";

export default function KeelingCurveReveal() {
  const svgRef = useRef<SVGSVGElement>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  useEffect(() => {
    if (!inView || !svgRef.current) return;

    const width = 700;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 40, left: 60 };

    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

    // Sample data – replace with real CO₂ data later
    const data = Array.from({ length: 65 }, (_, i) => ({
      year: 1958 + i,
      ppm: 315 + i * 1.6 + Math.sin(i * 0.2) * 2, // mock curve
    }));

    const x = d3
      .scaleLinear()
      .domain(d3.extent(data, (d) => d.year) as [number, number])
      .range([margin.left, width - margin.right]);

    const y = d3
      .scaleLinear()
      .domain([300, d3.max(data, (d) => d.ppm)! + 10])
      .range([height - margin.bottom, margin.top]);

    svg.selectAll("*").remove();

    // Axes
    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).ticks(6).tickFormat(d3.format("d")));

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

    // Line
    const path = d3
      .line<{ year: number; ppm: number }>()
      .x((d) => x(d.year))
      .y((d) => y(d.ppm));

    const linePath = svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#3b82f6")
      .attr("stroke-width", 2)
      .attr("d", path);

    // Animate path draw
    const totalLength = (linePath.node() as SVGPathElement).getTotalLength();

    linePath
      .attr("stroke-dasharray", totalLength)
      .attr("stroke-dashoffset", totalLength)
      .transition()
      .duration(2000)
      .ease(d3.easeCubicInOut)
      .attr("stroke-dashoffset", 0);
  }, [inView]);

  return (
    <div ref={ref}>
      <svg ref={svgRef} className="w-full h-72" />
    </div>
  );
}
