import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { templateModel } from '@models/template'
import { FilterModel } from '@models/Filter';

export const templateApi = createApi({
  reducerPath: "templateApi",
  baseQuery: fetchBaseQuery({ baseUrl: 'https://633fac66d1fcddf69ca7402e.mockapi.io/' }),
  endpoints: (build) => ({
    fetchTemplate: build.query<Array<templateModel>, FilterModel>({
      query: (filter) => {
        const params = new URLSearchParams("");
        Object.entries(filter).forEach(([key, value]) => {
          params.set(key , value as string);
        })
        return `Template?${params.toString()}`
      },
    })
  })
})

export const { useFetchTemplateQuery } = templateApi;