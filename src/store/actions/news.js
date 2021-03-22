import { types } from '../contants';

export const getNews = (data) => {
    return {
        type: types.GET_NEWS_START,
        payload: data,
    }
}