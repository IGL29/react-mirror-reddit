// Vendor
import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter } from 'react-router-dom';
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
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <Provider store={store}>
      {mounted && (
        <BrowserRouter>
          <AppComponent />
        </BrowserRouter>
      )}
    </Provider>
  );
}

export const App = hot(() => <AppWrapper />);
