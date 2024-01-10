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
import { useSelector } from "react-redux";
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
  const { data } = useSelector((store) => store.business);
  

  const supplier = Array.from(new Set(data?.map((item) => item.Supplier)));
  const groupedData = data.reduce((acc, entry) => {
    const supplier = entry.Supplier;
    const emissions = entry.Emissions;
    if (!acc[supplier]) {
      acc[supplier] = {
        Supplier: supplier,
        TotalEmissions: 0,
      };
    }
    acc[supplier].TotalEmissions += emissions;
    return acc;
  }, {});

  const emissions = Object.values(groupedData).map(
    (item) => item.TotalEmissions
  );
  const totalSum = emissions.reduce((sum, value) => sum + value, 0);
  const percentageDistribution = emissions.map(
    (value) => `${((value / totalSum) * 100).toFixed(1)}`
  );
  const dodata = {
    labels: supplier,
    datasets: [
      {
        label: "Emissions in Percentage",
        data: percentageDistribution,
        backgroundColor: [
          "#7C95EA",
          "#544B8D",
          "#FFC400",
          "#3BB85E",
          "#ff8fab",
          "#bc4749",
          "#06d6a0",
          "#FFD700",
          "#FF6F40",
          "#556B2F",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {};
  return <Doughnut data={dodata} options={options} />;
};

export const BarChart = () => {
  const { data } = useSelector((store) => store.business);

  const months = Array.from(new Set(data?.map((item) => item.Month)));
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
    <div className="w-[946px] h-[447px]  ml-[20px] mb-[10px] ">
      <Bar data={chartData} options={options} />
    </div>
  );
};
