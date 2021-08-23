import React from "react";
import { hot } from 'react-hot-loader/root';
import './styles/main.global.scss';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardList } from './shared/CardsList';

function AppComponent() {
  return(
    <Layout>
      <Header />

      <Content>
        <CardList />
      </Content>
    </Layout>
  );
}

export const App = hot(AppComponent);
