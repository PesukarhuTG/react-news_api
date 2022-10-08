import React from 'react';
import styled from 'styled-components';
import FormProps from '../types/Form';
import { Layout, LoginForm } from '../components';

class Contacts extends React.Component {
  //объект принимает поля формы (name, birthday, city...)
  onSubmit = (formFields: FormProps) => {
    console.log(formFields);
  };

  render() {
    return (
      <Layout>
        <Wrapper>
          <Title>Contact us via form</Title>
          <LoginForm onSubmit={this.onSubmit} />
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
