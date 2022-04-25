import { Reducer } from 'redux';
import { MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction, ME_REQUEST, ME_REQUEST_SUCCESS, ME_REQUEST_ERROR } from './actions';

export type MeState = {
  loading: boolean;
  error: string;
  data: {}
}

export const meInitialState: MeState = {
  loading: false,
  error: '',
  data: {}
}

type MeActions = MeRequestAction | MeRequestErrorAction | MeRequestSuccessAction;

export const meReducer: Reducer<MeState, MeActions> = (state = meInitialState, action) => {
  switch(action.type) {
    case ME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ME_REQUEST_ERROR:
      return {
        ...state,
        data: action.payload,
        loading: false,
      }
    case ME_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      }
    default:
      return state;
  }
}
