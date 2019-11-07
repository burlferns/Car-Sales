export const ADD_FEAT = "ADD_FEAT";
export const RMV_FEAT = "RMV_FEAT";

export function addFeat(id) {
  return {
    type: ADD_FEAT,
    payload: id,
  };
}

export function rmvFeat(id) {
  return {
    type: RMV_FEAT,
    payload: id,
  };
}