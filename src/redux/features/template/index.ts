import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { templateModel } from '@models/template'
import { FilterModel } from '@models/filter';

export const templateApi = createApi({
  reducerPath: "templateApi",
  baseQuery: fetchBaseQuery({ baseUrl: 'https://633fac66d1fcddf69ca7402e.mockapi.io/' }),
  endpoints: (build) => ({
    fetchTemplate: build.query<Array<templateModel>, FilterModel>({
      query: (filter) => `Template?page=${filter.page}&limit=${filter.limit}`,
    })
  })
})

export const { useFetchTemplateQuery } = templateApi;