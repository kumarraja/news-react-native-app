import { put, call, all, takeEvery } from 'redux-saga/effects';

import { types } from '../contants';
import { News } from '../../services';

function* getNews(action) {
    try {
        const { data, error } = yield call(News.getNews, action.payload);
        console.log('getnews saga...', { data, error });
        if (data && !error) {
            yield put({
                type: types.GET_NEWS_SUCCESS,
                payload: data,
            });

        } else {
            yield put({
                type: types.GET_NEWS_ERROR,
                payload: { error, msg: "error occured while getting news articles" },
            });
        }

    } catch (error) {
        yield put({
            type: types.GET_NEWS_ERROR,
            payload: { error, msg: "error occured while getting news articles" },
        });
    }
}

export function* newsSagas() {
    yield all([
        takeEvery(types.GET_NEWS_START, getNews),
    ]);
}