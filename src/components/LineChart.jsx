import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register required chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {
    labels: [
      "Frontend Developer",
      "Mobile Application Developer",
      "Data Scientist",
      "Full Stack Developer",
      "Machine Learning Engineer",
      "DevOps Engineer",
      "Backend Developer",
    ],
    datasets: [
      {
        label: "Actual Cost (Annual EUR)",
        data: [50000, 53500, 63000, 52000, 60000, 58000, 52500],
        borderColor: "#fff",
        backgroundColor: "#fff",
        tension: 0.4,
      },
      {
        label: "Estimated Cost (Annual EUR)",
        data: [36000, 38000, 50000, 37000, 48000, 41000, 38000],
        borderColor: "#4CAFC8",
        backgroundColor: "#4CAFC8",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#4CAFC8",
        },
      },
      title: {
        display: true,
        text: "Comparison of Actual and Estimated Annual Job Costs",
        color: "#4CAFC8",
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#4CAFC8",
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: "#4CAFC8",
        },
        grid: {
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
          }}
        >
          Cost Comparison
        </h1>
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
            maxWidth: "800px",
            height: "60vh", // Responsive height
          }}
        >
          <Line data={data} options={options} />
        </div>
      </div>
    </>
  );
};

export default LineChart;
