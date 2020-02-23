import { SagaIterator } from "redux-saga";
import { take, call, put } from "redux-saga/effects";
import { requestFailure } from "../../../store/actions";
import { getAddressesListFetch, getRouteFetch } from "./api";
import {
  AddressesListActionTypes,
  getAddressesListSuccess,
  RouteActionTypes,
  getRouteSuccess
} from "./actions";

export function* getAddressesListSaga(): SagaIterator {
  while (true) {
    yield take(AddressesListActionTypes.GET_ADDRESSES_LIST);

    try {
      const data = yield call(getAddressesListFetch);

      yield put(getAddressesListSuccess(data));
    } catch (error) {
      yield put(requestFailure(error));
    }
  }
}

export function* getRouteSaga(): SagaIterator {
  while (true) {
    const { payload } = yield take(RouteActionTypes.GET_ROUTE);

    try {
      const data = yield call(getRouteFetch, payload);

      yield put(getRouteSuccess(data));
    } catch (error) {
      yield put(requestFailure(error));
    }
  }
}
