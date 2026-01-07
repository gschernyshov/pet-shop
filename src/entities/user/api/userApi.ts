import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RegisterRequest, RegisterResponse } from '../model/types'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (body) => ({
        url: '/register',
        method: 'POST',
        body,
      })
    })
  })
})

export const { useRegisterUserMutation } = userApi
