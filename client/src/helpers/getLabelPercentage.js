import _ from "lodash";
import { getSum } from "../helpers";

const getLabelPercentage = (transaction) => {
  const categorySum = getSum(transaction, true);

  const totalSum = _.sum(getSum(transaction));

  const percent = _(categorySum)
    .map((categoryObj) =>
      _.assign(categoryObj, { percent: (100 * categoryObj.total) / totalSum })
    )
    .value();

  return percent;
};

export default getLabelPercentage;
