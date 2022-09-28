import React from 'react';
import { Layout, SearchPanel } from 'components';
import styled from 'styled-components';

class MainPage extends React.Component {
  render() {
    return (
      <Layout>
        <SearchPanel />
        <HeadlingOne>The best movies</HeadlingOne>
        <HeadlingSecond>on Racoon cinema</HeadlingSecond>
      </Layout>
    );
  }
}

const HeadlingOne = styled.p`
  text-align: left;
  font-size: 50px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--primary);
  opacity: 0.2;
`;

const HeadlingSecond = styled.p`
  text-align: right;
  font-size: 50px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--primary);
  opacity: 0.2;
`;

export default MainPage;
