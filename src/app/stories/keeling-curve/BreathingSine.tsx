// "use client";

// import { useEffect, useRef } from "react";
// import * as d3 from "d3";

// export default function BreathingSine() {
//   const svgRef = useRef<SVGSVGElement>(null);

//   useEffect(() => {
//     const width = 800;
//     const height = 200;
//     const markerX = width / 2;
//     const amplitude = 60;
//     const frequency = 0.02;

//     const svg = d3
//       .select(svgRef.current)
//       .attr("width", width)
//       .attr("height", height);

//     const solidLinePath = svg
//       .append("path")
//       .attr("fill", "none")
//       .attr("stroke", "#06b6d4")
//       .attr("stroke-width", 2);

//     const dashedLinePath = svg
//       .append("path")
//       .attr("fill", "none")
//       .attr("stroke", "#06b6d4")
//       .attr("stroke-width", 2)
//       // .attr("stroke-dasharray", "6 4")
//       .attr("opacity", 0.2);

//     svg
//       .append("line")
//       .attr("x1", markerX)
//       .attr("x2", markerX)
//       .attr("y1", 0)
//       .attr("y2", height)
//       .attr("stroke", "#9ca3af")
//       .attr("stroke-dasharray", "4 2");

//     const markerDot = svg
//       .append("circle")
//       .attr("cx", markerX)
//       .attr("r", 6)
//       .attr("fill", "#f59e0b");

//     let offset = 0;

//     function render() {
//       const fullData = d3.range(0, width).map((x) => {
//         const t = x + offset;
//         return [x, height / 2 - amplitude * Math.sin(t * frequency)];
//       });

//       const solidData = fullData.slice(0, markerX + 1);
//       const dashedData = fullData.slice(markerX);

//       const pathGen = d3
//         .line<[number, number]>()
//         .x((d) => d[0])
//         .y((d) => d[1]);

//       solidLinePath.attr("d", pathGen(solidData));
//       dashedLinePath.attr("d", pathGen(dashedData));

//       const markerY =
//         height / 2 - amplitude * Math.sin((markerX + offset) * frequency);
//       markerDot.attr("cy", markerY);

//       offset += 1;
//       requestAnimationFrame(render);
//     }

//     render();
//   }, []);

//   return (
//     <div className="flex justify-center items-center py-32 bg-white">
//       <svg ref={svgRef} className="w-full max-w-4xl h-48" />
//     </div>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function BreathingSine() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const height = 200;
    const amplitude = 60;
    const frequency = 0.02;

    let width = containerRef.current.clientWidth;
    let markerX = width / 2;
    let offset = 0;

    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

    // Clear any pre-existing elements in case of HMR (hot reload)
    svg.selectAll("*").remove();

    // Create elements once
    const solidLinePath = svg
      .append("path")
      .attr("fill", "none")
      .attr("stroke", "#06b6d4")
      .attr("stroke-width", 2);

    const dashedLinePath = svg
      .append("path")
      .attr("fill", "none")
      .attr("stroke", "#06b6d4")
      .attr("stroke-width", 2)
      // .attr("stroke-dasharray", "6 4")
      .attr("opacity", 0.2);

    const markerLine = svg
      .append("line")
      .attr("stroke", "#9ca3af")
      .attr("stroke-dasharray", "4 2");

    const markerDot = svg.append("circle").attr("r", 6).attr("fill", "#f59e0b");

    // Separate function to update layout only (NOT create new elements)
    function updateLayout() {
      width = containerRef.current?.clientWidth || 800;
      markerX = width / 2;
      svg.attr("viewBox", `0 0 ${width} ${height}`);
      markerLine
        .attr("x1", markerX)
        .attr("x2", markerX)
        .attr("y1", 0)
        .attr("y2", height);
    }

    window.addEventListener("resize", updateLayout);
    updateLayout(); // Initial layout

    // Animation loop
    function animate() {
      const fullData = d3.range(0, width).map((x) => {
        const t = x + offset;
        return [x, height / 2 - amplitude * Math.sin(t * frequency)];
      });

      const solidData = fullData.slice(0, markerX + 1);
      const dashedData = fullData.slice(markerX);

      const pathGen = d3
        .line<[number, number]>()
        .x((d) => d[0])
        .y((d) => d[1]);

      solidLinePath.attr("d", pathGen(solidData));
      dashedLinePath.attr("d", pathGen(dashedData));

      const markerY =
        height / 2 - amplitude * Math.sin((markerX + offset) * frequency);
      markerDot.attr("cx", markerX).attr("cy", markerY);

      offset += 1;
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", updateLayout);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full py-24 bg-white">
      <svg ref={svgRef} className="w-full h-48 sm:h-56 md:h-64" />
    </div>
  );
}
