import React from "react";
import { Chart } from "react-google-charts";

export const PieChart3D = () => {
  const data = [
    ["Category", "Percentage"],
    ["COST AFTER HIRING FROM US (70%)", 70],
    ["ESTIMATED COST SAVED (30%)", 30],
  ];

  const options = {
    is3D: true,
    backgroundColor: "black",
    legend: {
      textStyle: { color: "#4CAFC8", fontSize: 12 },
    },
    titleTextStyle: {
      color: "#4CAFC8",
      fontSize: 18,
    },
    pieSliceTextStyle: {
      color: "#000",
    },
    slices: {
      0: { color: "#4CAFC8" },
      1: { color: "#fff" },
    },
  };

  return (
    <>
      <div
        className="container"
        style={{
          padding: "20px",
          minHeight: "auto",
          paddingBottom: 0,
        }}
      >
        <h1
          style={{
            color: "#fff",
            fontFamily: "HeadingFont",
            fontSize: "clamp(14px, 5.8vw, 28px)",
            margin: "0",
            display: "block",
            width: "100%",
            maxWidth: "1024px",
            textTransform: "uppercase",
          }}
        >
          Cost Saving upto 30%
        </h1>
        <p
          style={{
            color: "#fff",
            display: "block",
            width: "100%",
            maxWidth: "1024px",
          }}
        >
          Reduce expenses by up to 30% compared to local hires, while gaining
          access to a highly skilled, dedicated, and cost-efficient global
          talent pool. Our streamlined processes, flexible contracts, and
          tax-free services ensure maximum savings without compromising on
          quality or productivity.
        </p>
      </div>
      <div
        style={{
          backgroundColor: "black",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1024px",
            height: "60vh", // Responsive height
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
          />
        </div>
      </div>
    </>
  );
};
