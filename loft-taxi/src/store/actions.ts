import { FAILURE_ACTION } from "./constants";
import { FailureActionType, FailurePayload } from "./types";

export function onRequestFailure(payload: FailurePayload): FailureActionType {
  return { type: FAILURE_ACTION, payload };
}
