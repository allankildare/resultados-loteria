import axios from 'axios'
import { API_ENDPOINT } from '../services/endpoints'

export const apiClient = axios.create({
    baseURL: API_ENDPOINT,
    headers: {
        'Content-type': 'application/json'
    }
})
