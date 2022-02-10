// Vendor
import React from 'react';
import { hot } from 'react-hot-loader/root';
// Internals
import { TokenContextProvider } from './shared/context/tokenContext';
import { UserContextProvider } from './shared/context/userContext';
import { PostContextProvider } from '@shared/context/postsContext';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardList } from './shared/CardsList';
import { Container } from './shared/Container';
import { SortBlock } from './shared/Header/SortBlock';
import './styles/main.global.scss';
import { CommentProvider } from '@shared/context/commentContext';
import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import { devToolsEnhancer  } from '@redux-devtools/extension';

const store = createStore(() => {});

function AppComponent(): JSX.Element {

  return (
    // <Provider store={store}>
      <TokenContextProvider>
        <CommentProvider>
          <UserContextProvider>
            <Layout>
              <Header title='Личный кабинет' />

              <SortBlock />

              <Container>
                <Content>
                  <PostContextProvider>
                    <CardList />
                  </PostContextProvider>
                </Content>
              </Container>
            </Layout>
          </UserContextProvider>
        </CommentProvider>
      </TokenContextProvider>
    // </Provider>
  );
}

export const App = hot(() => <AppComponent />);
