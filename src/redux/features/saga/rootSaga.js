import { takeLatest } from "redux-saga/effects";
import { fetchCardData } from "../cardData/fetchCardData";

function* rootSaga() {
  yield takeLatest("cardData/fetchRequested", fetchCardData);
}

export { rootSaga };
