import axios from "axios";
import { BASE_URL } from "../../../store/constants";
import { ADDRESSES_LIST_URL, ROUTE_URL } from "./constants";
import { AddressesList, AddressesFromTo, Route } from "./types";

const axiosInstance = axios.create({
  baseURL: BASE_URL
});

export const getAddressesListFetch = async (): Promise<AddressesList> => {
  const { data } = await axiosInstance.get(ADDRESSES_LIST_URL);

  return data.addresses;
};

export const getRouteFetch = async ([
  address1,
  address2
]: AddressesFromTo): Promise<Route> => {
  const { data } = await axiosInstance.get(ROUTE_URL, {
    params: { address1, address2 }
  });

  return data;
};
