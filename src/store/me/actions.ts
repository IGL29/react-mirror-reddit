import { RootState } from './../reducer';
import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

export const ME_REQUEST = 'ME_REQUEST';

export type MeRequestAction = {
  type: typeof ME_REQUEST;
}
export const myRequest: ActionCreator<MeRequestAction> = () => ({
  type: ME_REQUEST
})

export interface IUserData {
  name?: string;
  iconImg?: string;
}

export const ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';

export type MeRequestSuccessAction = {
  type: typeof ME_REQUEST_SUCCESS;
  payload: IUserData;
}
export const myRequestSuccess: ActionCreator<MeRequestSuccessAction> = (payload: IUserData) => ({
  type: ME_REQUEST_SUCCESS,
  payload
})

export const ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';

export type MeRequestErrorAction = {
  type: typeof ME_REQUEST_ERROR;
  payload: string;
}
export const myRequestError: ActionCreator<MeRequestErrorAction> = (payload) => ({
  type: ME_REQUEST_ERROR,
  payload
})

export const meRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  dispatch(myRequest());
  axios
  .get('https://oauth.reddit.com/api/v1/me', {
    headers: { Authorization: `bearer ${getState().token}` },
  })
  .then((resp) => {
    const userData = resp.data;
    dispatch(myRequestSuccess({ name: userData.name, iconImg: userData.icon_img }));
  })
  .catch((err) => {
    console.log(err);
    dispatch(myRequestError(String(err)));
  })
}
