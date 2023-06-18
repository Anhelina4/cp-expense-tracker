import _ from "lodash";

const getSum = (transaction, type) => {
  const amountSum = _(transaction)
    .groupBy("type")
    .map((typeArr, key) => {
      // array with amount forEach category
      if (!type) {
        return _.sumBy(typeArr, "amount");
      }
      //   object with keys
      return {
        type: key,
        color: typeArr[0].color,
        total: _.sumBy(typeArr, "amount"),
        _id: typeArr?.[0]?._id,
      };
    })
    .value();
  return amountSum;
};

export default getSum;
