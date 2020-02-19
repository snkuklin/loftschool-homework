import { Saga } from "redux-saga";
import { all, spawn } from "redux-saga/effects";
import { registrationSaga, loginSaga } from "../containers/auth/store";

const sagaWatcher = (saga: Saga): Saga => {
  return function* watcher() {
    while (true) {
      try {
        yield saga();
      } catch (error) {
        console.log(error);
      }
    }
  };
};

export default function* RootSaga() {
  yield all(
    [registrationSaga, loginSaga].map(saga => spawn(sagaWatcher(saga)))
  );
}
