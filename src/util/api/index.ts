import axios, { Method } from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
    baseURL: 'http://localhost:8080'
});

instance.interceptors.response.use(
    res => res.data,
    e => {
        const { data } = e.response;

        if (data.errors) {
            alert(data.errors[0].defaultMessage);
        } else {
            alert(data.message);
        }

        throw e;
    }
);

const init = (
    method: Method,
    url: string,
    data?: any,
    params?: any,
    _headers?: any,
    auth = false
) => {
    const headers = _headers || {};

    if (auth) {
        Object.assign(headers, { 'X-AUTH-TOKEN': Cookies.get('token') });
    }

    console.log(method,
        url,
        data,
        params,
        headers)

    instance.request({
        method,
        url,
        data,
        params,
        headers
    });
};

const get = (url: string, params?: any, headers?: any, auth?: boolean) => init('GET', url, null, params, headers, auth);

const post = (url: string, data?: any, params?: any) => instance.post(url, data, { params });

export const signUp = (id: string, pw: string, nickname: string) => post('user', { id, pw, nickname });

export const signIn = (id: string, pw: string) => post('user/login', { id, pw });

export const findUser = (userId: string) => get('user', { userId }, null, true);
