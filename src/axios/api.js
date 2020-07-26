import axios from 'axios'
import { getToken } from '../services/auth-service'
// const token = getToken()
export default axios.create({
    baseURL:"http://52.3.253.2:8080", 
    
});