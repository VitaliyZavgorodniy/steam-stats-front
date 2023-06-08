import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IPlayerData } from "interfaces/IPlayerData";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BACKEND_URL }),
  endpoints: (builder) => ({
    getProfileById: builder.query<IPlayerData, string>({
      query: (id) => `/steam-api/user/${id}`,
    }),
  }),
});

export const { useGetProfileByIdQuery } = profileApi;
