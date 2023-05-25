import React from "react";
import apiSlice from "../../store/apiSlice";
import { getLabelPercentage } from "../../helpers";
export const Labels = () => {
  // we specified getCategories fn, but RTK query adds 'use' and 'query' to the name of the fn
  const { data, isFetching, isSuccess, isError } = apiSlice.useGetLabelsQuery();

  let result;
  if (isFetching) {
    result = <div>Fetching...</div>;
  } else if (isSuccess) {
    console.log("data", data);
    result = getLabelPercentage(data)?.map((item, index) => (
      <Label key={index} data={item} />
    ));
  } else if (isError) {
    result = <div>Error</div>;
  }

  return <>{result}</>;
};

export const Label = (props) => {
  const { data } = props;

  return data ? (
    <div className="labels flex justify-between mb-3">
      <div className="flex">
        <div
          className="w-2 h-2 rounded py-3  mr-1"
          style={{ background: data?.color }}></div>
        <h3>{data?.type || ""}</h3>
      </div>
      <div className="font-bold">{Math.round(data?.percent) || 0}%</div>
    </div>
  ) : (
    <></>
  );
};
