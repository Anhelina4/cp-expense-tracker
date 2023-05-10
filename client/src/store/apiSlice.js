import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURI = "http://localhost:8080";

export const apiSlice = createApi({
  // fn make request to server, its a wrapper for fetch fn
  baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
  //   specify endpoints. Builder is used to build a query
  endpoints: (builder) => ({
    // get request all categories for this endpoint
    getCategories: builder.query({ query: () => "/api/categories" }),
  }),
});

export default apiSlice;
