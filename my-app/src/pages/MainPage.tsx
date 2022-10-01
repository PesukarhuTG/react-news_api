import React from 'react';
import { Layout, SearchPanel, CardsAlbum } from 'components';
import styled from 'styled-components';

class MainPage extends React.Component {
  render() {
    return (
      <Layout>
        <SearchPanel />
        <Headling>Hot news on Racoon digest</Headling>
        <CardsAlbum />
      </Layout>
    );
  }
}

const Headling = styled.p`
  margin: 20px 0 30px;
  text-align: center;
  font-size: 50px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--primary);
  opacity: 0.4;
`;

export default MainPage;
