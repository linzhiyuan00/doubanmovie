import * as ActionType from './actionType';
// 创建 action;

export function changeCollect (id) {
  return {
    type:ActionType.IF_COLLECT,
    id
  }
}

export function delCollect(id) {
  return {
    type:ActionType.DEL_COLLECT,
    id
  }
}