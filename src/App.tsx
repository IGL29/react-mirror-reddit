// Vendor
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// Internals
import { PostContextProvider } from '@shared/context/postsContext';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardList } from './shared/CardsList';
import { Container } from './shared/Container';
import { SortBlock } from './shared/Header/SortBlock';
import { saveToken } from './store/reducer';
import './styles/main.global.scss';

function AppComponent(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveToken());
  }, [])

  return (
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
  );
}

export { AppComponent };
