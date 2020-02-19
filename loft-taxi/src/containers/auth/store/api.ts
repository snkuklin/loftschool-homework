import axios from "axios";
import { BASE_URL } from "../../../store/constants";
import { REGISTRATION_URL, LOGIN_URL } from "./constants";
import { AuthPayload, RegistrationData, LoginData } from "./types";

const axiosInstance = axios.create({
  baseURL: BASE_URL
});

export const registrationFetch = async (
  input: RegistrationData
): Promise<AuthPayload> => {
  const { data } = await axiosInstance.post(REGISTRATION_URL, input);

  return data;
};

export const loginFetch = async (input: LoginData): Promise<AuthPayload> => {
  const { data } = await axiosInstance.post(LOGIN_URL, input);

  return data;
};
