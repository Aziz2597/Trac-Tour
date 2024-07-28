import { baseApiSlice } from "../../api/baseApiSlice";

export const routesApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createRoute: builder.mutation({
      query: (newRoute) => ({
        url: "/routes",
        method: "POST",
        body: newRoute,
      }),
      invalidatesTags: ["Routes"],
    }),
    getSuggestions: builder.query({
      query: (query) => `/routes/suggestions?q=${query}`,
    }),
    getRoutes: builder.query({
      query: () => "/routes",
      providesTags: ["Routes"],
    }),
    likeRoute: builder.mutation({
      query: ({ routeId, like }) => ({
        url: `/routes/like/${routeId}`,
        method: "PUT",
        body: { like },
      }),
      invalidatesTags: ["Routes"],
    }),
    getRoute: builder.query({
			query: (id) => `/routes/${id}`,
			providesTags: ['Routes'],
		}),
    getComments: builder.query({
      query: (routeId) => `/routes/${routeId}/comments`,
      providesTags: ["Comments"],
    }),
    postComment: builder.mutation({
      query: ({ routeId, comment }) => ({
        url: `/routes/${routeId}/comment`,
        method: "POST",
        body: comment,
      }),
      invalidatesTags: ["Comments"],
    }),
  }),
});

export const {
  useCreateRouteMutation,
  useLazyGetSuggestionsQuery,
  useGetRoutesQuery,
  useGetRouteQuery,
  useLikeRouteMutation,
  useGetCommentsQuery,
  usePostCommentMutation,
} = routesApiSlice;
