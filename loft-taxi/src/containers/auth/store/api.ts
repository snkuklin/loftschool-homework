import axios from "axios";
import { BASE_URL } from "../../../store/constants";
import { REGISTRATION_URL, LOGIN_URL } from "./constants";
import { AuthPayload, RegistrationData, LoginData } from "./types";

const axiosInstance = axios.create({
  baseURL: BASE_URL
});

export const registrationFetch = async (
  payload: RegistrationData
): Promise<AuthPayload> => {
  const { data } = await axiosInstance.post(REGISTRATION_URL, payload);

  return data;
};

export const loginFetch = async (payload: LoginData): Promise<AuthPayload> => {
  const { data } = await axiosInstance.post(LOGIN_URL, payload);

  return data;
};
