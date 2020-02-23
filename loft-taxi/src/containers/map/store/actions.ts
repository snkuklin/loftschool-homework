import { AddressesList, AddressesFromTo, Route } from "./types";
import { FailureActionType } from "../../../store/types";

export enum AddressesListActionTypes {
  GET_ADDRESSES_LIST = "GET_ADDRESSES_LIST",
  GET_ADDRESSES_LIST_SUCCESS = "GET_ADDRESSES_LIST_SUCCESS"
}

export enum RouteActionTypes {
  GET_ROUTE = "GET_ROUTE",
  GET_ROUTE_SUCCESS = "GET_ROUTE_SUCCESS",
  CLEAR_ROUTE = "CLEAR_ROUTE"
}

export type GetAddressesListAction = {
  type: typeof AddressesListActionTypes.GET_ADDRESSES_LIST;
};

export type GetAddressesListSuccessAction = {
  type: typeof AddressesListActionTypes.GET_ADDRESSES_LIST_SUCCESS;
  payload: AddressesList;
};

export type AddressesListAction =
  | GetAddressesListAction
  | GetAddressesListSuccessAction
  | FailureActionType;

export type GetRouteAction = {
  type: typeof RouteActionTypes.GET_ROUTE;
  payload: AddressesFromTo;
};

export type GetRouteActionSuccess = {
  type: typeof RouteActionTypes.GET_ROUTE_SUCCESS;
  payload: Route;
};

export type ClearRouteAction = {
  type: typeof RouteActionTypes.CLEAR_ROUTE;
};

export type RouteAction =
  | GetRouteAction
  | GetRouteActionSuccess
  | ClearRouteAction
  | FailureActionType;

export function getAddressesList(): GetAddressesListAction {
  return { type: AddressesListActionTypes.GET_ADDRESSES_LIST };
}

export function getAddressesListSuccess(
  payload: AddressesList
): GetAddressesListSuccessAction {
  return { type: AddressesListActionTypes.GET_ADDRESSES_LIST_SUCCESS, payload };
}

export function getRoute(payload: AddressesFromTo): GetRouteAction {
  return { type: RouteActionTypes.GET_ROUTE, payload };
}

export function getRouteSuccess(payload: Route): GetRouteActionSuccess {
  return { type: RouteActionTypes.GET_ROUTE_SUCCESS, payload };
}

export function clearRoute(): ClearRouteAction {
  return { type: RouteActionTypes.CLEAR_ROUTE };
}
