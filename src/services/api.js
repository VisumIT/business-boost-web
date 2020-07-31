import axios from 'axios'

const TOKEN_KEY = '@Company:token';
const getToken = () => {
    return JSON.parse(localStorage.getItem(TOKEN_KEY));
}

const api = axios.create({
    baseURL:"http://localhost:8080",
    headers : {
        "Authorization": `${getToken()}`
    }
})

export default api