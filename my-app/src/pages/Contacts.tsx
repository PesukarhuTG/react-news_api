import React from 'react';
import styled from 'styled-components';
import FormProps from '../types/Form';
import { Layout, LoginForm, FormCardsAlbum } from '../components';

interface State {
  list?: FormProps[];
  message?: string;
}

interface LocalProps {
  name: string;
  birthday: string;
  city: string;
  gender: string;
  file: File | string;
  remember: boolean;
  [key: string]: any;
}

class Contacts extends React.Component<State> {
  state = {
    list: JSON.parse(localStorage.getItem('persons') as string) || [],
    message: '',
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

    this.setState({ message: 'Your data has been saved!' });
    setTimeout(() => this.setState({ message: '' }), 1500);
  };

  componentDidUpdate(): void {
    localStorage.setItem('persons', JSON.stringify(this.state.list));
  }

  componentWillUnmount(): void {
    localStorage.removeItem('persons');
  }

  render() {
    return (
      <Layout>
        <Wrapper>
          <Title>Contact us via form</Title>
          <LoginForm onSubmit={this.onSubmit} />
        </Wrapper>
        <Message>{this.state.message}</Message>
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

const Message = styled.p`
  height: 30px;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  color: var(--accent);
`;

export default Contacts;
