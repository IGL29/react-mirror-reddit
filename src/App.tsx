import React from "react";
import { hot } from 'react-hot-loader/root';
import './styles/main.global.scss';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardList } from './shared/CardsList';
import { SearchBlock } from './shared/Header/SearchBlock';
import { ThreadTitle } from './shared/Header/ThreadTitle';
import { SortBlock } from './shared/Header/SortBlock';

function AppComponent() {
  return(
    <Layout>
      <Header>
        <SearchBlock />
        <ThreadTitle />
        <SortBlock />
      </Header>

      <Content>
        <CardList />
      </Content>
    </Layout>
  );
}

export const App = hot(AppComponent);
