import axios from 'axios';
import { LOGIN_USER } from './types';

export function loginUser(data) {
    const request = axios.post('/api/login', data)
    .then(res => res.data);

    return {
        type: LOGIN_USER,
        payload: request
    };
}