import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register required chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Client's Original Cost", "Cost Saved (30%)"],
    datasets: [
      {
        data: [70, 30], // 70% for original cost, 30% for savings
        backgroundColor: ["#4CAFC8", "#fff"], // Your color palette
        borderColor: ["#4CAFC8", "#fff"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#4CAFC8",
        },
      },
    },
  };

  return (
    <>
      <div
        className="container"
        style={{
          padding: "20px",
          minHeight: "auto",
          paddingBottom: 0
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
            maxWidth: "420px",
            height: "60vh", // Responsive height
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Pie data={data} options={options} />
        </div>
      </div>
    </>
  );
};

export default PieChart;
