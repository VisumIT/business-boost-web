import axios from 'axios'

const TOKEN_KEY = '@Company:token';
const getToken = () => {
    return JSON.parse(localStorage.getItem(TOKEN_KEY));
}

const api = axios.create({
    baseURL:"http://100.26.210.109:8080/",
    headers : {
        "Authorization": `${getToken()}`
    }
})

export default api