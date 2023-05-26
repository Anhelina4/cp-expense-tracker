import React from "react";
import { StatsItem } from "./StatsItem";
import apiSlice from "../../store/apiSlice";
import { getStatsPercentage } from "../../helpers";

const Stats = () => {
  // we specified getCategories fn, but RTK query adds 'use' and 'query' to the name of the fn
  const { data, isFetching, isSuccess, isError } = apiSlice.useGetStatsQuery();

  let result;
  if (isFetching) {
    result = <div>Fetching...</div>;
  } else if (isSuccess) {
    result = getStatsPercentage(data)?.map((item, index) => (
      <StatsItem key={index} data={item} />
    ));
  } else if (isError) {
    result = <div>Error</div>;
  }

  return <>{result}</>;
};

export default Stats;
