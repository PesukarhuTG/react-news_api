import React from 'react';
import styled from 'styled-components';
import { Layout } from '../components';

class Contacts extends React.Component {
  render() {
    return (
      <Layout>
        <Wrapper>
          <Title>Contact us via form</Title>
        </Wrapper>
      </Layout>
    );
  }
}

const Wrapper = styled.div`
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 30px;
  font-weight: 700;
`;

export default Contacts;
