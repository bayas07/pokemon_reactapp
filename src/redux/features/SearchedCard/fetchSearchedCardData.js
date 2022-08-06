import { put } from "redux-saga/effects";
import { searchedCardSliceActions } from "./searchedCardSlice";

function* fetchSearchedCardData({ payload }) {
  try {
    yield put(searchedCardSliceActions.fetchStarted());
    const results = yield fetchCardData(
      `https://pokeapi.co/api/v2/pokemon/${payload}`
    );
    yield put(searchedCardSliceActions.fetchSuccess(results));
  } catch (err) {
    if (err.message.includes("Unexpected token")) {
      yield put(searchedCardSliceActions.setEmptyResults());
    } else if (err) {
      yield put(searchedCardSliceActions.fetchRejected());
    }
  }
}

const fetchCardData = async (url) => {
  const responce = await fetch(url);
  const data = await responce.json();
  return data;
};

export { fetchSearchedCardData };
