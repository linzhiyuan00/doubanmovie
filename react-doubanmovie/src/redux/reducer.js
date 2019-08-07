import { combineReducers } from 'redux';
import * as ActionType from './actionType';

const state = {
  collectlist:['default']
}

function showcollect(collectlist = state.collectlist,action){
  switch(action.type){
    case ActionType.IF_COLLECT:
      return collectlist.push(action.id)
    case ActionType.DEL_COLLECT:
      for(let i = 0;i <collectlist.length;i++){
        if(collectlist[i] == action.id){
          return collectlist.splice(i,1)
        }
      }
    default:
      return collectlist
  }
}

export default combineReducers({
  showcollect
}) 