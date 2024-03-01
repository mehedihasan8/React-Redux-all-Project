import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: () => ({
        url: "/academic-semesters",
        method: "GET",
      }),
    }),
    addAcademicSemester: builder.mutation({
      query: () => ({
        url: "/academic-semesters/create-acadenuc-semesters",
        method: "POST",
      }),
    }),
  }),
});

export const { useGetAllSemestersQuery } = academicManagementApi;
