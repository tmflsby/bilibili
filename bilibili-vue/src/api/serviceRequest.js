import axios from "axios";

const serviceRequest = axios.create({
  baseURL: "http://localhost:8080/",
  timeout: 5000
})

// request interceptor
serviceRequest.interceptors.request.use(
  config => {
    // do something before request is sent
    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
serviceRequest.interceptors.response.use(
  response => {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText || "Error"))
    } else {
      return response.data
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default serviceRequest
