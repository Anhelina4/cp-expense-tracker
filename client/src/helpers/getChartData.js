import _ from "lodash";
import { getSum } from "../helpers";

const getChartData = (transaction, custom) => {
  const dataStats = getSum(transaction);
  const bgs = _.uniq(_.map(transaction, (item) => item.color));

  const config = {
    data: {
      datasets: [
        {
          StatsItem: "My First Dataset",
          data: dataStats,
          backgroundColor: bgs,
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
  return custom ? custom : config;
};

export default getChartData;
