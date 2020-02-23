import { AddressesList, RouteState } from "./types";
import {
  AddressesListActionTypes,
  AddressesListAction,
  RouteActionTypes,
  RouteAction
} from "./actions";

const initialRouteState: RouteState = {
  isLoading: false,
  route: []
};

const addressesReducer = (
  state = [],
  action: AddressesListAction
): AddressesList => {
  if (action.type === AddressesListActionTypes.GET_ADDRESSES_LIST_SUCCESS) {
    return action.payload || [];
  }
  return state;
};

const routeReducer = (
  state = initialRouteState,
  action: RouteAction
): RouteState => {
  switch (action.type) {
    case RouteActionTypes.GET_ROUTE:
      return {
        ...state,
        isLoading: true,
        route: []
      };
    case RouteActionTypes.GET_ROUTE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        route: action.payload
      };
    default:
      return {
        ...state,
        isLoading: false,
        route: []
      };
  }
};

export { addressesReducer, routeReducer };
