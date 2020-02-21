import { SagaIterator } from "redux-saga";
import { take, call, put } from "redux-saga/effects";
import { registrationFetch, loginFetch } from "./api";
import { loginSuccess, registrationSuccess, AuthActionTypes } from "./actions";
import { onRequestFailure } from "../../../store/actions";

export function* loginSaga(): SagaIterator {
  while (true) {
    const { input } = yield take(AuthActionTypes.LOGIN);

    try {
      const payload = yield call(loginFetch, input);

      if (payload.success) {
        yield put(loginSuccess(payload));
      } else {
        yield put(onRequestFailure(payload));
      }
    } catch (error) {
      yield put(onRequestFailure(error));
    }
  }
}

export function* registrationSaga(): SagaIterator {
  while (true) {
    const { input } = yield take(AuthActionTypes.REGISTRATION);
    try {
      const payload = yield call(registrationFetch, input);

      if (payload.success) {
        yield put(registrationSuccess(payload));
      } else {
        yield put(onRequestFailure(payload));
      }
    } catch (error) {
      yield put(onRequestFailure(error));
    }
  }
}
