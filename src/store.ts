import { ActionCreator, AnyAction, Reducer } from 'redux';

export type RootState = {
  commentText: string;
  token: null | string;
}

const initialState: RootState = {
  commentText: 'Привет!',
  token: null
}

export const setToken: ActionCreator<AnyAction> = (payload: string) => ({ type: 'SET_TOKEN', payload })
export const updateComment: ActionCreator<AnyAction> = (payload: string) => ({ type: 'UPDATE_COMMENT', payload })

export const rootReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_COMMENT':
      return {
        ...state,
        commentText: action.payload,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload,
      }
    default:
      return state;
  }
}
