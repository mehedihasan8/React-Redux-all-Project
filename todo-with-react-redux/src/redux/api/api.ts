import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getDate: builder.query({
      query: () => ({
        url: "/posts",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetDateQuery } = baseApi;
