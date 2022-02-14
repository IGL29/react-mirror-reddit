// Vendor
import React, { useEffect } from 'react';
// Internals
import { UserContextProvider } from './shared/context/userContext';
import { PostContextProvider } from '@shared/context/postsContext';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardList } from './shared/CardsList';
import { Container } from './shared/Container';
import { SortBlock } from './shared/Header/SortBlock';
import { useDispatch } from 'react-redux';
import { useToken } from '../src/hooks';
import { setToken } from './store/reducer';
import './styles/main.global.scss';

function AppComponent(): JSX.Element {
  const dispatch = useDispatch();
  const [token] = useToken();

  useEffect(() => {
    dispatch(setToken(token))
  }, [token])

  return (
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
  );
}

export {AppComponent};
