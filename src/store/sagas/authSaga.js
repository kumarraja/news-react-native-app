import { put, call, all, takeEvery } from 'redux-saga/effects';
import { types } from '../contants';
import { Auth } from '../../services';


function* login(action) {
    try {
        const { data, error } = yield call(Auth.login, action.payload);
        if (data && !error) {
            yield put({
                type: types.LOGIN_SUCCESS,
                payload: data,
            });
        } else {
            yield put({
                type: types.LOGIN_ERROR,
                payload: { error, msg: "error occured while user login" },
            });
        }

    } catch (error) {
        yield put({
            type: types.LOGIN_ERROR,
            payload: { error, msg: "error occured while user login" },
        });
    }
};

function* signUp(action) {
    try {
        const { data, error } = yield call(Auth.signUp, action.payload);
        if (data && !error) {
            yield put({
                type: types.SIGNUP_SUCCESS,
                payload: data,
            });
        } else {
            yield put({
                type: types.SIGNUP_ERROR,
                payload: { error, msg: 'error occured at the time of user registations' },
            });
        }
    } catch (error) {
        yield put({
            type: types.SIGNUP_ERROR,
            payload: { error, msg: 'error occured at the time of user registations' },
        });
    }
}

export function* authSagas() {
    yield all([
        takeEvery(types.USER_LOGIN_START, login),
        takeEvery(types.USER_SIGNUP_START, signUp),
    ]);
}
