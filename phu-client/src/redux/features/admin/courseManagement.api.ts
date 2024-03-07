import { TSemester } from "../../../types/couresManagement.type";
import { TQueryParam, TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRegestionSemester: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args?.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/semester-registrations",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["semester"],

      transformResponse: (res: TResponseRedux<TSemester[]>) => {
        return {
          data: res?.data,
          meta: res?.meta,
        };
      },
    }),

    addRegistrationSemester: builder.mutation({
      query: (data) => ({
        url: "/semester-registrations/create-semester-registration",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["semester"],
    }),

    updateRegistrationSemester: builder.mutation({
      query: (args) => ({
        url: `/semester-registrations/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ["semester"],
    }),
  }),
});

export const {
  useAddRegistrationSemesterMutation,
  useGetAllRegestionSemesterQuery,
  useUpdateRegistrationSemesterMutation,
} = courseManagementApi;
