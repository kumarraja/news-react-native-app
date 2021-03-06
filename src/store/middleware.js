/* eslint-disable prettier/prettier */
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();

// ======================================================
// Middleware Configuration
// ======================================================
const middleware = [sagaMiddleware];

/* istanbul ignore next */
if (process.env.NODE_ENV === 'development') {
    const { createLogger } = require('redux-logger');
    const invariant = require('redux-immutable-state-invariant').default;
    middleware.push(invariant());
    middleware.push(createLogger({ collapsed: true }));
}

export default middleware;
