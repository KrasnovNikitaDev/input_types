import { all, call, put, takeEvery } from 'redux-saga/effects'
import {name, phoneNumber, mail, ip, nickname, typeError} from './actions'


function* workerSaga(actionCreator, action){
    let  str = '';
    yield call (() => action.value.forEach(i => str += String.fromCharCode(i)));
    yield str;
    yield put(actionCreator(str));
}

    
function* typeErrorSaga(){
    yield put(typeError())
}

function* clearStoreSaga(){
    yield put({type: 'CLEAR-STORE'})
}


function* watcherSaga(){
    yield takeEvery('ACTION-SET-NAME', workerSaga, name)
    yield takeEvery('ACTION-SET-PHONE-NUMBER', workerSaga, phoneNumber)
    yield takeEvery('ACTION-SET-IP', workerSaga,  ip)
    yield takeEvery('ACTION-SET-NICKNAME', workerSaga,  nickname)
    yield takeEvery('ACTION-SET-MAIL', workerSaga,  mail)
    yield takeEvery('ACTION-SET-TYPE-ERROR', typeErrorSaga)
    yield takeEvery('SET-CLEAR-STORE', clearStoreSaga)
}

export function* saga(){
    yield all([
        watcherSaga(),
    ])}



