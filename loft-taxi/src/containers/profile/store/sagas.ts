import { SagaIterator } from "redux-saga";
import { take, call, put } from "redux-saga/effects";
import { requestFailure } from "../../../store/actions";
import { getProfileFetch, updateProfileFetch } from "./api";
import {
  ProfileActionTypes,
  getProfileSuccess,
  updateProfileSuccess
} from "./actions";

export function* getProfileSaga(): SagaIterator {
  while (true) {
    yield take(ProfileActionTypes.GET_PROFILE);
    try {
      const data = yield call(getProfileFetch);

      yield put(getProfileSuccess(data));
    } catch (error) {
      yield put(requestFailure(error));
    }
  }
}

export function* updateProfileSaga(): SagaIterator {
  while (true) {
    const { payload } = yield take(ProfileActionTypes.UPDATE_PROFILE);
    try {
      const data = yield call(updateProfileFetch, payload);

      if (data.success) {
        yield put(updateProfileSuccess(payload));
      } else {
        yield put(requestFailure(data));
      }
    } catch (error) {
      yield put(requestFailure(error));
    }
  }
}
