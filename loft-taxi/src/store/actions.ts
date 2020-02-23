import { FAILURE_ACTION } from "./constants";
import { FailureActionType, FailurePayload } from "./types";

export function requestFailure(payload: FailurePayload): FailureActionType {
  return { type: FAILURE_ACTION, payload };
}
