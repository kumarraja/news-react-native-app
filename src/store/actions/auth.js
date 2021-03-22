import { types } from '../contants';

export const login = (data) => {
    return {
        type: types.USER_LOGIN_START,
        payload: data,
    };
};

export const signUp = (data) => {
    return {
        type: types.USER_SIGNUP_START,
        payload: data,
    };
};

export const logout = () => {
    return {
        type: types.USER_LOGOUT_START,
    };
};
