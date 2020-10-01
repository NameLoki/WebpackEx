import axios from 'axios';
import { LOGIN_USER, SING_UP } from './types';

export function loginUser(data) {
    const request = axios.post('/api/login', data)
    .then(res => res.data);

    console.log(data);

    console.log(axios.get('/api/userList')
    .then(res => res.data));

    return {
        type: LOGIN_USER,
        payload: request
    };
}

export function singupUser(data) {
    const request = axios.post('/api/singup', data)
    .then(res => res.data);

    console.log(request);

    return {
        type: SING_UP,
        data: request
    };
}