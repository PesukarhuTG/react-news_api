import React from 'react';
import styled from 'styled-components';
import FormProps from '../types/Form';
import { Layout, LoginForm, FormCardsAlbum } from '../components';

interface State {
  list?: FormProps[];
}

interface LocalProps {
  name: string;
  birthday: string;
  city: string;
  gender: string;
  file: string;
  remember: boolean;
  [key: string]: any;
}

class Contacts extends React.Component<State> {
  state = {
    list: JSON.parse(localStorage.getItem('persons') as string) || [],
  };

  onSubmit = (formFields: FormProps) => {
    let dataLS: string;
    let items: LocalProps[] = [];

    if (localStorage.getItem('persons')) {
      dataLS = localStorage.getItem('persons') as string;
      items = JSON.parse(dataLS);

      items.push(formFields);
      this.setState({ list: items });
    } else {
      this.setState({ list: [formFields] });
    }
  };

  componentDidUpdate(): void {
    localStorage.setItem('persons', JSON.stringify(this.state.list));
  }

  render() {
    return (
      <Layout>
        <Wrapper>
          <Title>Contact us via form</Title>
          <LoginForm onSubmit={this.onSubmit} />
        </Wrapper>
        <FormCardsAlbum list={this.state.list} />
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
