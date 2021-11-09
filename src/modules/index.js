import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading'
import write, { writeSaga } from './write';
import post, { postSaga } from './post';
import posts, { postsSaga } from './posts';

const rootReducer = combineReducers({
    // auth,
    loading,
    write,
    post,
    posts,
})

export function* rootSaga(){
    yield all([writeSaga(), postSaga(), postsSaga()]);
}

export default rootReducer;
