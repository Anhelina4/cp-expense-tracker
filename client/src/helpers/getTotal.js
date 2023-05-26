import _ from "lodash";
import { getSum } from "../helpers";

const getTotal = (transaction) => {
  return _.sum(getSum(transaction));
};

export default getTotal;
