import { ThunkAction } from 'redux-thunk';
import { meReducer, MeState } from './me/reducer';
import { ME_REQUEST, ME_REQUEST_SUCCESS, ME_REQUEST_ERROR, MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction } from './me/actions';
import { SET_TOKEN, SetTokenAction } from './token/actions';
import { TokenState, tokenReducer } from './token/reducer'
import { ActionCreator, AnyAction, Reducer, Action } from 'redux';

const UPDATE_COMMENT = 'UPDATE_COMMENT';

type UpdateCommentAction = {
  type: typeof UPDATE_COMMENT;
  payload: string;
}

export type RootState = {
  commentText: string;
  token:  TokenState;
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

export const saveToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  if (window.__token__) {
    dispatch(setToken(window.__token__));
  }
}

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.payload,
      };
    case SET_TOKEN:
      return tokenReducer(state, action)
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
