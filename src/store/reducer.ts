import { meReducer, MeState } from './me/reducer';
import { ME_REQUEST, ME_REQUEST_SUCCESS, ME_REQUEST_ERROR, MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction } from './me/actions';
import { ActionCreator, AnyAction, Reducer } from 'redux';

const UPDATE_COMMENT = 'UPDATE_COMMENT';
const SET_ACTION = 'SET_TOKEN';

type UpdateCommentAction = {
  type: typeof UPDATE_COMMENT;
  payload: string;
}
type SetTokenAction = {
  type: typeof SET_ACTION;
  payload: string;
}

export type RootState = {
  commentText: string;
  token: null | string;
  me: MeState
}

const initialState: RootState = {
  commentText: 'Привет!',
  token: null,
  me: {
    loading: false,
    error: '',
    data: {}
  }
}

type MyAction = UpdateCommentAction | SetTokenAction | MeRequestAction | MeRequestErrorAction | MeRequestSuccessAction;

export const setToken: ActionCreator<AnyAction> = (payload: string) => ({ type: 'SET_TOKEN', payload })
export const updateComment: ActionCreator<AnyAction> = (payload: string) => ({ type: 'UPDATE_COMMENT', payload })

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.payload,
      };
    case SET_ACTION:
      return {
        ...state,
        token: action.payload,
      }
    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR:
      return {
        ...state,
        me: meReducer(state.me, action)
      }
    default:
      return state;
  }
}
