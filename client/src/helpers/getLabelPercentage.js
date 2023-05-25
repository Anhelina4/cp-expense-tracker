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
      };
    })
    .value();
  return amountSum;
};
const getLabelPercentage = (transaction) => {
  const categorySum = getSum(transaction, true);
  console.log("categorySum", categorySum);
  const totalSum = _.sum(getSum(transaction));
  console.log("totalSum", totalSum);
  const percent = _(categorySum)
    ?.map((categoryObj) =>
      _.assign(categoryObj, { percent: (100 * categoryObj.total) / totalSum })
    )
    .value();

  return percent;
};

export default getLabelPercentage;
