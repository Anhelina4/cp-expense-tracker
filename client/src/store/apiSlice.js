import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURI = "https://expense-tracker-hsnb.onrender.com";

export const apiSlice = createApi({
  // fn make request to server, its a wrapper for fetch fn
  baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
  //   specify endpoints. Builder is used to build a query
  endpoints: (builder) => ({
    // get request all categories for this endpoint
    getCategories: builder.query({
      query: () => "/api/categories",
      providesTags: ["categories"],
    }),
    // get request for Stats
    getStats: builder.query({
      query: () => "/api/Stats",
      providesTags: ["transaction"],
    }),

    // post request for Transaction
    addTransaction: builder.mutation({
      query: (initialData) => ({
        url: "/api/transaction",
        method: "POST",
        body: initialData,
      }),
      invalidatesTags: ["transaction"],
    }),

    // delete request for Transaction
    deleteTransaction: builder.mutation({
      query: (_id) => ({
        url: "/api/transaction",
        method: "DELETE",
        body: _id,
      }),
      invalidatesTags: ["transaction"],
    }),
  }),
});

export default apiSlice;
