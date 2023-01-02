import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { templateModel } from '@models/template'

export const templateApi = createApi({
  reducerPath: "templateApi",
  baseQuery: fetchBaseQuery({ baseUrl: 'https://633fac66d1fcddf69ca7402e.mockapi.io/' }),
  endpoints: (build) => ({
    fetchTemplate: build.query<Array<templateModel>, void>({
      query: () => 'Template'
    })
  })
})

export const { useFetchTemplateQuery } = templateApi;