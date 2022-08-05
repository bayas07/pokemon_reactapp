import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import cardDataReducer from "./features/cardData/cardDataSlice";
import { rootSaga } from "./features/saga/rootSaga";
import searchedCardReducer from "./features/SearchedCard/searchedCardSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cardData: cardDataReducer,
    searchedCardData: searchedCardReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([sagaMiddleware]),
});

sagaMiddleware.run(rootSaga);

export default store;
