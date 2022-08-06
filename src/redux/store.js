import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import authSliceReducer from "./features/auth/authSlice";
import cardDataReducer from "./features/cardData/cardDataSlice";
import { rootSaga } from "./features/saga/rootSaga";
import searchedCardReducer from "./features/SearchedCard/searchedCardSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cardData: cardDataReducer,
    searchedCardData: searchedCardReducer,
    authData: authSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([sagaMiddleware]),
});

sagaMiddleware.run(rootSaga);

export default store;
