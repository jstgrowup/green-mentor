import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
  BarElement,
} from "chart.js";
import { Line, Doughnut, Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
  BarElement
);
export const LineChart = () => {
  const labels = ["Subham dey", "asda", "dasda", "aewqer"];
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Yearly Views",
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "Views",
        data: [1, 2, 3, 4, 5],
        borderColor: "rgba(107,70,193,0.5)",
        backgroundColor: "#6b46c1",
      },
    ],
  };
  return (
    <Line options={options} data={data}>
      Chart
    </Line>
  );
};
export const DonoughtChart = () => {
  const data = {
    labels: ["subscribed", "unsubscribed"],
    datasets: [
      {
        label: "Views",
        data: [3, 20],
        borderColor: ["rgb(62,12,171)", "rgb(214,43,129)"],
        backgroundColor: ["rgb(62,12,171)", "rgb(214,43,129)"],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut data={data} />;
};

export const BarChart = ({ data }) => {
  // {
  //     "Date": "4/1/22",
  //     "Month": "Jan",
  //     "Year": 2022,
  //     "Supplier": "Reliance",
  //     "Emissions": 1698,
  //     "Revenue": 203456,
  //     "R/E": 120,
  //     "YOY R/E Change": null
  // }

  const months = Array.from(new Set(data.map((item) => item.Month)));
  const emissionsFor2023 = data
    .filter((item) => item.Year === 2023)
    .map((item) => item.Emissions);

  const emissionsFor2022 = data
    .filter((item) => item.Year === 2022)
    .map((item) => item.Emissions);

  const chartData = {
    labels: months,
    datasets: [
      {
        label: "Emissions-2023",
        data: emissionsFor2023,

        backgroundColor: "#3a86ff",
      },
      {
        label: "Emissions-2022",
        data: emissionsFor2022,

        backgroundColor: "#84a98c",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        ticks: {
          callback: function (value) {
            return value + " CO2";
          },
        },
      },
    },
  };

  return (
    <div className="w-[946px] h-[447px] border border-black ml-[20px] mb-[10px]">
      <Bar data={chartData} options={options} />
    </div>
  );
};
