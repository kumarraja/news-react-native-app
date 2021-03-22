import { all } from 'redux-saga/effects';
import { newsSagas, authSagas } from './sagas';

export default function* rootSaga() {
    yield all([
        newsSagas(),
        authSagas(),
    ]);
}