import { put } from "redux-saga/effects";
import { cardDataSliceActions } from "./cardDataSlice";

function* fetchCardData({ payload }) {
  try {
    yield put(cardDataSliceActions.fetchStarted());
    const responce = yield fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0"
    );

    const { results, next } = yield responce.json();
    yield put(cardDataSliceActions.setNextPage(next));
    const PokemonData = yield Promise.all(
      results.map(({ url }) => fetchPokemonData(url))
    );
    const PokemonDataResults = yield PokemonData;
    yield put(cardDataSliceActions.fetchSuccess(PokemonDataResults));
  } catch (err) {
    yield put(cardDataSliceActions.fetchRejected());
  }
}

const fetchPokemonData = async (url) => {
  const responce = await fetch(url);
  const data = await responce.json();
  return data;
};

export { fetchCardData };
