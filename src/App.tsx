// Vendor
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
// Internals
import { PostContextProvider } from '@shared/context/postsContext';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardList } from './shared/CardsList';
import { Container } from './shared/Container';
import { SortBlock } from './shared/Header/SortBlock';
import { saveToken } from './store/reducer';
import { Post } from '@shared/Post';
import { PageNotFound } from './shared/PageNotFound';
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
          <Routes>
            <Route path='/auth' element={<Navigate to='/posts' />} />
            <Route path='/' element={<Navigate to='/posts' />} />

            <Route path='/' element={<PostContextProvider />}>
              <Route path='/posts' element={<CardList />}>
                <Route path=':id' element={<Post />} />
              </Route>

              <Route path='*' element={<PageNotFound />} />
            </Route>
          </Routes>
        </Content>
      </Container>
    </Layout>
  );
}

export { AppComponent };
