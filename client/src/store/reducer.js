import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  transaction: [],
};

// slice of state
export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    // callback fn for getting transaction, 1 reducer
    getTransactions: (state) => {
      // get transaction code
    },
  },
});

// this allows to dispatch actions
export const { getTransactions } = expenseSlice.actions;
export default expenseSlice.reducer;
