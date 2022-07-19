import axios, { Method } from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
    baseURL: 'http://localhost:8080'
});

instance.interceptors.response.use(
    res => res.data,
    e => {
        const { data } = e.response;

        if (data) {
            if (data.errors) {
                alert(data.errors[0].defaultMessage);
            } else {
                alert(data.message);
            }

            throw e;
        } else {
            alert('토큰 정보가 유효하지 않습니다.');

            window.location.href = '/sign';
        }
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

    return instance.request({
        method,
        url,
        data,
        params,
        headers
    });
};

const get = (url: string, params?: any, headers?: any, auth?: boolean) => init('GET', url, null, params, headers, auth);

const post = (url: string, data?: any, params?: any, headers?: any, auth?: boolean) => init('POST', url, data, params, headers, auth);

const del = (url: string, data?: any, params?: any, headers?: any, auth?: boolean) => init('DELETE', url, data, params, headers, auth);

export const signUp = (id: string, pw: string, nickname: string) => post('user', { id, pw, nickname });

export const signIn = (id: string, pw: string) => post('user/login', { id, pw });

export const findUser = (userId: string) => get('user', { userId }, null, true);

export const friendRequest = (userIdx: number) => post('friend/request', { userIdx }, null, null, true);

export const getFriend = () => get('friend', null, null, true);

export const getFriendReceive = () => get('friend/request', null, null, true);

export const friendAccept = (idx: number) => del('friend/request', { idx, key: 0 }, null, null, true);

export const getMe = () => get('user/profile', null, null, true);

export const getQuizCnt = () => get('quiz/count', null, null, true);

export const getFriendCnt = () => get('friend/count', null, null, true);

export const saveQuiz = (data: any) => post('quiz', data, null, null, true);
