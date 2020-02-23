import { all } from "redux-saga/effects";
import { loginSaga, registrationSaga } from "../containers/auth/store";
import { getProfileSaga, updateProfileSaga } from "../containers/profile/store";
import { getAddressesListSaga, getRouteSaga } from "../containers/map/store";

export default function* RootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    getProfileSaga(),
    updateProfileSaga(),
    getAddressesListSaga(),
    getRouteSaga()
  ]);
}
