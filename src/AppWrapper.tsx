// Vendor
import React from 'react';
import { hot } from 'react-hot-loader/root';
// Internals
import './styles/main.global.scss';
import { AppComponent } from './App'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './store';

const store = createStore(rootReducer, devToolsEnhancer());

function AppWrapper(): JSX.Element {
  return (
    <Provider store={store}>
      <AppComponent />
    </Provider>
  );
}

export const App = hot(() => <AppWrapper />);
