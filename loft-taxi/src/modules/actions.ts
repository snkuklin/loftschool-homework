export const FAILURE_ACTION = "FAILURE_ACTION";

export interface FailureActionPayload {
  error: string;
}

export type FailureActionType = {
  type: typeof FAILURE_ACTION;
  payload: FailureActionPayload;
};

export function onRequestFailure(
  payload: FailureActionPayload
): FailureActionType {
  return { type: FAILURE_ACTION, payload };
}
