export const StatsItem = (props) => {
  const { data } = props;

  return data ? (
    <div className="Stats flex justify-between mb-3">
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
