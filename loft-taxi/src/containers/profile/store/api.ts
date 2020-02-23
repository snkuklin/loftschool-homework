import axios from "axios";
import { BASE_URL } from "../../../store/constants";
import { Payload } from "../../../store/types";
import { GET_PROFILE_URL, UPDATE_PROFILE_URL } from "./constants";
import { ProfileState } from "./types";

const axiosInstance = axios.create({
  baseURL: BASE_URL
});

export const getProfileFetch = async (): Promise<ProfileState> => {
  let token = localStorage.getItem("token") || "";
  const { data } = await axiosInstance.get(GET_PROFILE_URL, {
    params: { token: token }
  });

  return data;
};

export const updateProfileFetch = async (
  payload: ProfileState
): Promise<Payload> => {
  let token = localStorage.getItem("token") || "";
  const { data } = await axiosInstance.post(UPDATE_PROFILE_URL, {
    ...payload,
    token: token
  });

  return data;
};
