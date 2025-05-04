"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function CarbonCycleBreath() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 600;
    const height = 200;
    const margin = { top: 20, bottom: 20, left: 20, right: 20 };

    svg
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

    svg.selectAll("*").remove();

    const steps = 200;
    const points = d3.range(0, steps).map((i) => {
      const t = i / (steps - 1);
      const x = t * 2 * Math.PI;
      const y = (Math.sin(x - Math.PI / 2) + 1) / 2;
      return { t, y };
    });

    const xScale = d3
      .scaleLinear()
      .domain([0, 1])
      .range([margin.left, width - margin.right]);
    const yScale = d3
      .scaleLinear()
      .domain([0, 1])
      .range([height - margin.bottom, margin.top]);

    const line = d3
      .line<{ t: number; y: number }>()
      .x((d) => xScale(d.t))
      .y((d) => yScale(d.y))
      .curve(d3.curveBasis);

    const area = d3
      .area<{ t: number; y: number }>()
      .x((d) => xScale(d.t))
      .y0(yScale(0))
      .y1((d) => yScale(d.y))
      .curve(d3.curveBasis);

    const defs = svg.append("defs");

    defs
      .append("linearGradient")
      .attr("id", "area-gradient")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "100%")
      .attr("y2", "0%")
      .selectAll("stop")
      .data([
        { offset: "0%", color: "#3b82f6", opacity: 0.4 },
        { offset: "100%", color: "#f97316", opacity: 0.4 },
      ])
      .enter()
      .append("stop")
      .attr("offset", (d) => d.offset)
      .attr("stop-color", (d) => d.color)
      .attr("stop-opacity", (d) => d.opacity);

    defs
      .append("linearGradient")
      .attr("id", "stroke-gradient")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "100%")
      .attr("y2", "0%")
      .selectAll("stop")
      .data([
        { offset: "0%", color: "#3b82f6" },
        { offset: "100%", color: "#f97316" },
      ])
      .enter()
      .append("stop")
      .attr("offset", (d) => d.offset)
      .attr("stop-color", (d) => d.color);

    const duration = 2000;
    const pausePoint = 0.5; // halfway through the wave

    svg
      .append("path")
      .datum(points)
      .attr("d", area)
      .attr("fill", "url(#area-gradient)");

    const linePath = svg
      .append("path")
      .datum(points)
      .attr("fill", "none")
      .attr("stroke", "url(#stroke-gradient)")
      .attr("stroke-width", 3)
      .attr("d", line);

    const totalLength = (linePath.node() as SVGPathElement).getTotalLength();
    const pauseLength = totalLength * pausePoint;

    linePath
      .attr("stroke-dasharray", totalLength)
      .attr("stroke-dashoffset", totalLength)
      .transition()
      .duration(duration * pausePoint)
      .ease(d3.easeCubicInOut)
      .attr("stroke-dashoffset", totalLength - pauseLength)
      .on("end", () => {
        svg
          .append("text")
          .attr("x", xScale(0.2))
          .attr("y", yScale(0.8))
          .attr("fill", "#334155")
          .attr("font-size", "14px")
          .attr("text-anchor", "middle")
          .style("opacity", 0)
          .text("Winter rise")
          .transition()
          .duration(1000)
          .style("opacity", 1)
          .on("end", () => {
            linePath
              .transition()
              .duration(duration * (1 - pausePoint))
              .ease(d3.easeCubicInOut)
              .attr("stroke-dashoffset", 0);

            svg
              .append("text")
              .attr("x", xScale(0.8))
              .attr("y", yScale(0.8))
              .attr("fill", "#334155")
              .attr("font-size", "14px")
              .attr("text-anchor", "middle")
              .style("opacity", 0)
              .text("Summer fall")
              .transition()
              .delay(duration * (1 - pausePoint))
              .duration(1000)
              .style("opacity", 1);
          });
      });
  }, []);

  return <svg ref={svgRef} className="w-full" />;
}
