// Vendor
import React from 'react';
import { hot } from 'react-hot-loader/root';
// Internals
import { tokenContext } from './shared/context/tokenContext';
import { UserContextProvider } from './shared/context/userContext';
import { useToken } from '../src/hooks';
import { PostContextProvider } from '@shared/context/postsContext';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardList } from './shared/CardsList';
import { Container } from './shared/Container';
import { SortBlock } from './shared/Header/SortBlock';
import './styles/main.global.scss';

function AppComponent(): JSX.Element {
  const [token] = useToken();

  return (
    <tokenContext.Provider value={token}>
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
    </tokenContext.Provider>
  );
}

export const App = hot(() => <AppComponent />);
