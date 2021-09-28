import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading'
import write, { writeSaga } from './write';

const rootReducer = combineReducers({
    // auth,
    loading,
    write,
})

export function* rootSaga(){
    yield all([writeSaga()]);
}

export default rootReducer;
