export type Address = string;
export type AddressesList = Address[];
export type AddressesFromTo = [Address, Address];
export type Coordinates = [number, number];
export type Route = Coordinates[];

export interface RouteState {
  isLoading: boolean;
  route: Route;
}
