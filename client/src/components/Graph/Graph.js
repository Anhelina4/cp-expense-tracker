import { ArcElement, Chart } from "chart.js";
import { getChartData, getTotal } from "../../helpers";

import { Doughnut } from "react-chartjs-2";
import React from "react";
import { Stats } from "../../components";
import apiSlice from "../../store/apiSlice";

Chart.register(ArcElement);

const Graph = () => {
  // we specified getCategories fn, but RTK query adds 'use' and 'query' to the name of the fn
  const { data, isFetching, isSuccess, isError } = apiSlice.useGetStatsQuery();

  let result;
  let total;
  if (isFetching) {
    result = <div>Fetching...</div>;
  } else if (isSuccess) {
    result = <Doughnut {...getChartData(data)}></Doughnut>;
    total = getTotal(data);
  } else if (isError) {
    result = <div>Error</div>;
  }

  return (
    <div className="flex flex-col">
      <div classNme="item">
        <div className="chart relative">
          {result}
          <h3 className="mb-4 font-bold title">
            <span className="block">Total</span>
            <span className="block text-3xl text-emerald-400">${total}</span>
          </h3>
        </div>
      </div>
      <div className="py-10 gap-4">
        <Stats />
      </div>
    </div>
  );
};

export default Graph;
