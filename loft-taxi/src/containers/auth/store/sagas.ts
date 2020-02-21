import { SagaIterator } from "redux-saga";
import { take, call, put } from "redux-saga/effects";
import { registrationFetch, loginFetch } from "./api";
import { loginSuccess, registrationSuccess, AuthActionTypes } from "./actions";
import { requestFailure } from "../../../store/actions";

export function* loginSaga(): SagaIterator {
  while (true) {
    const { payload } = yield take(AuthActionTypes.LOGIN);

    try {
      const data = yield call(loginFetch, payload);

      if (data.success) {
        yield put(loginSuccess(data));
      } else {
        yield put(requestFailure(data));
      }
    } catch (error) {
      yield put(requestFailure(error));
    }
  }
}

export function* registrationSaga(): SagaIterator {
  while (true) {
    const { payload } = yield take(AuthActionTypes.REGISTRATION);
    try {
      const data = yield call(registrationFetch, payload);

      if (data.success) {
        yield put(registrationSuccess(data));
      } else {
        yield put(requestFailure(data));
      }
    } catch (error) {
      yield put(requestFailure(error));
    }
  }
}
