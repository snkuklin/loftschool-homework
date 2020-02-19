import { SagaIterator } from "redux-saga";
import { take, call, put } from "redux-saga/effects";
import { registrationFetch, loginFetch } from "./api";
import { login, registration, authSuccess } from "./actions";
import { onRequestFailure } from "../../../store/actions";

export function* loginSaga(): SagaIterator {
  const { input } = yield take(login);

  try {
    const payload = yield call(loginFetch, input);

    if (payload.success) {
      yield put(authSuccess(payload));
    } else {
      yield put(onRequestFailure(payload));
    }
  } catch (error) {
    yield put(onRequestFailure(error));
  }
}

export function* registrationSaga(): SagaIterator {
  const { input } = yield take(registration);

  try {
    const payload = yield call(registrationFetch, input);

    if (payload.success) {
      yield put(authSuccess(payload));
    } else {
      yield put(onRequestFailure(payload));
    }
  } catch (error) {
    yield put(onRequestFailure(error));
  }
}
