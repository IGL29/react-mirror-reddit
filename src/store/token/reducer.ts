import { Reducer } from 'redux';
import { SET_TOKEN, SetTokenAction } from './actions';

export type TToken = null | string;

type TokenState = {
  token: TToken;
}

export const tokenReducer: Reducer<TokenState, SetTokenAction> = (state, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload
      }
    default:
      return state;
  }
}
