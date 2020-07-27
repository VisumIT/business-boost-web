import axios from 'axios'

const api = axios.create({
    baseURL: 'http://52.3.253.2:8080',
})

export default api