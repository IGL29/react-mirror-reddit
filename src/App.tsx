// Vendor
import React from "react";
import {hot} from 'react-hot-loader/root';
// Internals
import {Layout} from './shared/Layout';
import {Header} from './shared/Header';
import {Content} from './shared/Content';
import {CardList} from './shared/CardsList';
import {Container} from './shared/Container';
import {SortBlock} from './shared/Header/SortBlock';
import './styles/main.global.scss';

function AppComponent(): JSX.Element {
  return (
    <Layout>
      <Header title="Личный кабинет"/>

      <SortBlock/>

      <Container>
        <Content>
          <CardList/>
          </Content>
        </Container>
    </Layout>
  );
}

export const App = hot(AppComponent);
