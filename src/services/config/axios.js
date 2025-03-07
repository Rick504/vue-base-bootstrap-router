import axios from 'axios'
import Cookies from 'js-cookie'

function options(url) {
  return {
    baseURL: url,
    timeout: 10000,
  }
}

const http = axios.create({ ...options(import.meta.env.VITE_BASE_URL_BACKEND) })
const httpEmails = axios.create({ ...options(import.meta.env.VITE_BASE_URL_SERVICE_EMAILS) })

const authInterceptor = (config) => {
  const token = Cookies.get('Authorization')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}

const errorInterceptor = (error) => Promise.reject(error)
const responseInterceptor = async (response) => {
  const token = response.data?.token

  const tokenRememberEmailLogin = response.data?.user?.tokenRememberEmailLogin

  if (tokenRememberEmailLogin) {
    Cookies.set('remember_me', token, { expires: 30, secure: true })
  }

  if (token) {
    Cookies.set('Authorization', token, { expires: 1 / 24, secure: true }) // 1 hora
  }
  return response
}

const responseErrorInterceptor = (error) => {
  console.error('Erro global de resposta:', error.response)
  return Promise.reject(error)
}

http.interceptors.request.use(authInterceptor, errorInterceptor)
http.interceptors.response.use(responseInterceptor, responseErrorInterceptor)

export { http, httpEmails }
