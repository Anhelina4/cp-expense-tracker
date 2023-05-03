import { ArcElement, Chart } from "chart.js";

import { Doughnut } from "react-chartjs-2";
import { Labels } from "../../components";
import React from "react";

Chart.register(ArcElement);

const Graph = () => {
  const config = {
    data: {
      datasets: [
        {
          label: "My First Dataset",
          data: [300, 50, 100],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
          hoverOffset: 4,
          borderRadius: 30,
          spacing: 8,
        },
      ],
    },
    options: {
      cutout: 115,
    },
  };

  return (
    <div className="flex flex-col">
      <div classNme="item">
        <div className="chart relative">
          <Doughnut {...config}></Doughnut>
          <h3 className="mb-4 font-bold title">
            <span className="block">Total</span>
            <span className="block text-3xl text-emerald-400">${0}</span>
          </h3>
        </div>
      </div>
      <div className="py-10 gap-4">
        <Labels />
      </div>
    </div>
  );
};

export default Graph;
