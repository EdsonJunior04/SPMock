import axios from 'axios'

const api = axios.create({
    baseURL: 'https://620554f2161670001741b901.mockapi.io'
})

export default api;