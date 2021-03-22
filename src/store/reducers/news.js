import { types } from '../contants';

const initialState = {
    news: [],
    isLoading: false,
    isError: false,
    errorMsg: '',
};

export const NewsReducer = (state = initialState, action = {}) => {

    switch (action.type) {
        case types.GET_NEWS_SUCCESS: {
            return {
                ...state,
                news: action.payload,
                isLoading: false,
                isError: false,
                errorMsg: '',
            };
        }

        case types.GET_NEWS_ERROR: {
            return {
                ...state,
                news: [],
                isLoading: false,
                isError: true,
                errorMsg: action.payload.msg,
            };
        }


        default: {
            return state;
        }
    }
};
