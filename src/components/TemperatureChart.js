import { useRef, useEffect } from "react";
import * as d3 from "d3";

const TemperatureChart = ({ completeForecast }) => {
  const svgRefLine = useRef();

  useEffect(() => {
    let dataArr = [];
    let tickArr = [];
    completeForecast.forEach((obj, index) => {
      dataArr.push(parseInt(obj.temperature));
      //if (index ===0 || index%2 != 0) {
      tickArr.push(obj.name);
      //}
      //else {
      //tickArr.push('');
      //}
    });
    console.log("Line Chart Data: ", dataArr);
    console.log("Tick Arr: ", tickArr);

    //setting up svg
    const w = 500;
    const h = 100;
    const svg = d3
      .select(svgRefLine.current)
      .attr("width", w)
      .attr("height", h)
      .style("margin-top", "40px")
      .style("margin-bottom", "50px")
      .style("overflow", "visible");
    // setting the scaling
    const xScale = d3.scaleLinear().domain([0, 13]).range([0, w]);
    const yScale = d3.scaleLinear().domain([0, h]).range([h, 0]);
    const generateScaledLine = d3
      .line()
      .x((d, i) => xScale(i))
      .y(yScale);

    const xAxis = d3
      .axisBottom(xScale)
      .ticks(14)
      .tickFormat((d, i) => tickArr[i]);

    const yAxis = d3.axisLeft(yScale).ticks(5);
    svg
      .append("g")
      .call(xAxis)
      .classed("xticks", true)
      .attr("transform", `translate(0, ${h}) `);
    svg.append("g").call(yAxis);
    svg
      .append("text")
      .attr("x", 250)
      .attr("y", -25)
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .style("text-style", "italic")
      .style("stroke", "white")
      .style("fill", "white")

      .text("Temperature");
    // setting the data for the svg
    svg
      .selectAll(".xticks text")
      .attr("transform", "translate(-10,5) rotate(-65)")
      .attr("text-anchor", "end");

    svg
      .selectAll(".line")
      .data([dataArr])
      .join("path")
      .attr("d", (d) => generateScaledLine(d))
      .attr("fill", "none")
      .attr("stroke-width", "2")
      .attr("stroke", "orange");
  }, [completeForecast]);

  return (
    <div className="svg-container">
      <svg ref={svgRefLine}></svg>
    </div>
  );
};

export default TemperatureChart;
