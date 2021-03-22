import { types } from '../contants';

const initialState = {
    user: null,
    isLoggedIn: false,
    isLoading: false,
    isError: false,
    errorMsg: '',
};

export const AuthReducer = (state = initialState, action = {}) => {

    switch (action.type) {
        case types.LOGIN_SUCCESS: {
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true,
                isLoading: false,
                isError: false,
                errorMsg: '',
            };
        }

        case types.LOGIN_ERROR: {
            return {
                ...state,
                user: null,
                isLoggedIn: false,
                isLoading: false,
                isError: true,
                errorMsg: action.payload.msg,
            };
        }

        case types.SIGNUP_SUCCESS: {
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true,
                isLoading: false,
                isError: false,
                errorMsg: '',
            };
        }

        case types.SIGNUP_ERROR: {
            return {
                ...state,
                user: null,
                isLoggedIn: false,
                isLoading: false,
                isError: true,
                errorMsg: action.payload.msg,
            };
        }
        case types.USER_LOGOUT_START: {
            return {
                ...state,
                user: null,
                isLoggedIn: false,
                isLoading: false,
                isError: false,
                errorMsg: '',
            };
        }


        default: {
            return state;
        }
    }
};
