import { Reducer } from 'redux';
import { SET_TOKEN, SetTokenAction } from './actions';

export type TToken = null | string;

export const tokenInitialState: TToken = null;

export const tokenReducer: Reducer<TToken, SetTokenAction> = (state = tokenInitialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return action.payload
    default:
      return state;
  }
}
