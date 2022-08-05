import { takeLatest } from "redux-saga/effects";
import { fetchCardData } from "../cardData/fetchCardData";
import { fetchSearchedCardData } from "../SearchedCard/fetchSearchedCardData";

function* rootSaga() {
  yield takeLatest("cardData/fetchRequested", fetchCardData);
  yield takeLatest("cardData/fetchMoreCardData", fetchCardData);
  yield takeLatest("searchedCardData/fetchRequested", fetchSearchedCardData);
}

export { rootSaga };
