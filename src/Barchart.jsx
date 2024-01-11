// import React from "react";
// import { Bar, Chart } from "react-chartjs-2";
// import { useSelector } from "react-redux";
// export const BarChart = () => {
//   const { data } = useSelector((store) => store.business);
//   const months = Array.from(new Set(data?.map((item) => item.Month)));
//   const emissionsFor2023 = data
//     .filter((item) => item.Year === 2023)
//     .map((item) => item.Emissions);

//   const emissionsFor2022 = data
//     .filter((item) => item.Year === 2022)
//     .map((item) => item.Emissions);

//   const chartData = {
//     labels: months,
//     datasets: [
//       {
//         label: "Emissions-2023",
//         data: emissionsFor2023,

//         backgroundColor: "#3a86ff",
//       },
//       {
//         label: "Emissions-2022",
//         data: emissionsFor2022,

//         backgroundColor: "#84a98c",
//         borderWidth: 1,
//       },
//       {
//         label: "R/E 2022",
//         borderColor: "rgb(255, 205, 86)",
//         data: emissionsFor2022,
//         type: "line",
//       },
//       {
//         label: "R/E 2023",
//         borderColor: "rgb(54, 162, 235)",
//         data: emissionsFor2023,
//         type: "line",
//       },
//     ],
//   };
//   const options = {
//     scales: {
//       y: {
//         ticks: {
//           callback: function (value) {
//             return value + " CO2";
//           },
//         },
//       },
//     },
//   };

//   return (
//     <div className="w-[946px] h-[447px]  ml-[20px] mb-[10px] ">
//       <Bar type="bar" data={data} options={options} />
//     </div>
//   );
// };
