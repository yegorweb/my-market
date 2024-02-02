import defu from "defu"
import { UseFetchOptions } from "nuxt/app"

export const useFetchApi = (url, options = {}) => {
  const config = useRuntimeConfig()

  const defaults = {
    baseURL: config.public.apiBase,
    async onRequest({ options }) {
      if (process.server || !localStorage.getItem('token'))
        return
      
      options.headers = options.headers || {}
      options.headers.authorization = `Bearer ${data.value.token}`
    },
    async onResponseError({ response }) {
      if (response.status == 401) {
        await useAuth().refresh()
      }
    }
  }
  // for nice deep defaults, please use unjs/defu
  const params = defu(options, defaults)

  return useFetch(url, params)
}

