import axios from 'axios'
import { getToken } from '../services/auth-service'
// const token = getToken()
export default axios.create({
    baseURL:"http://localhost:8080", 
    
});