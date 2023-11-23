import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://hey-tech-server.vercel.app/",
  }),

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/product",
    }),
    getSingleProducts: builder.query({
      query: (id) => `/product/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductsQuery } = apiSlice;
