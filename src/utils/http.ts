import axios from 'axios'
import { store } from '../redux'

const http = axios.create({
   baseURL: 'http://127.0.0.1:3024',
   headers: {
    authorization: 'Bearer v3ryt0ps3cr3tt0k3n#432'
   }
})

http.interceptors.request.use(config => {
   const token = store.getState().authentication.profile?.token

   if (token)
      config.headers.Authorization = `Bearear ${token}`

   return config
})

export default http