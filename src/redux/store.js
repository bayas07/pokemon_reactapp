import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import cardDataSlice from "./features/cardData/cardDataSlice";
import { rootSaga } from "./features/saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cardData: cardDataSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([sagaMiddleware]),
});

sagaMiddleware.run(rootSaga);

export default store;
