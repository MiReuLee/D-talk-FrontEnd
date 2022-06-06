import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080'
});

instance.interceptors.response.use(res => res.data);

const get = async (url: string, params?: any) => {
    const result = await instance.get(url, { params });

    return result;
};

const post = (url: string, data?: any, params?: any) => instance.post(url, data, { params });

export const signUp = (id: string, pw: string, nickname: string) => post('user', { id, pw, nickname });

export const signIn = (id: string, pw: string) => post('user/login', { id, pw });
