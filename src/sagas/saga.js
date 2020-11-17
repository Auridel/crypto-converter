import {takeEvery, call, put} from "redux-saga/effects";
import {PUT_DATA} from "../actions/actions";


async function fetchData() {
    return await fetch("https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD")
        .then(res => res.json())
        .catch(e => console.log(e))
}


function* getDataAsync() {
    const data = yield call(fetchData);
    yield put(PUT_DATA(data.Data));
}

export function* dataWatcher() {
    yield takeEvery("ASK_DATA", getDataAsync);
}