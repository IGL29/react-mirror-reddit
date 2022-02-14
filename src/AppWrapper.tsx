// Vendor
import React from 'react';
import { hot } from 'react-hot-loader/root';
// Internals
import './styles/main.global.scss';
import { AppComponent } from './App'
import { createStore, applyMiddleware, Middleware, Action } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { rootReducer } from './store/reducer';
import thunk from 'redux-thunk'

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

function AppWrapper(): JSX.Element {
  return (
    <Provider store={store}>
      <AppComponent />
    </Provider>
  );
}

export const App = hot(() => <AppWrapper />);
