import { PayloadAction } from '@reduxjs/toolkit';
import CounterSaga from "./counterSaga"
import { all, delay, put, takeEvery, takeLatest } from "redux-saga/effects"
import { increment, incrementSaga, incrementSagaSuccess } from '../features/counter/counterSlice';
function* log(action: PayloadAction<number>) {
  console.log('wait 2s')
  yield delay(1500);
  console.log('waited')
  yield put(incrementSagaSuccess(action.payload))
}
function* hello() {
  console.log('hello', increment())
  yield takeEvery(incrementSaga.toString(), log)
  // listen all action then log it. depending on type of action
  // yield takeEvery('*', log)
}
export default function* RootSaga() {
  console.log("root middleware")
  // this line same combine in reducer
  yield all([
    hello(), CounterSaga()
  ])
}