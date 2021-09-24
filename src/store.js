import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import rootReduser from'./redusers'

export default () => {
    return createStore(rootReduser, applyMiddleware(logger));
};
