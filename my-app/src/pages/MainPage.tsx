import React from 'react';
import { Layout, SearchPanel, CardsAlbum } from 'components';
import styled from 'styled-components';
import { getNews, searchNews } from '../services/getDataApi';
import CardProps from '../types/Card';

interface State {
  value?: string;
  news?: CardProps[];
}

class MainPage extends React.Component<State> {
  state = {
    value: localStorage.getItem('searchData') || '',
    news: [],
  };

  checkData(): void {
    if (this.state.value) {
      searchNews(this.state.value).then((resp) => {
        this.setState({ news: resp.articles });
      });
    } else {
      getNews().then((resp) => {
        this.setState({ news: resp.articles });
      });
    }
  }

  componentDidMount(): void {
    this.checkData();
  }

  onSubmit = (data: CardProps[]): void => {
    this.setState({ news: data });
  };

  render() {
    return (
      <Layout>
        <SearchPanel onSearch={this.onSubmit} />
        <Headling>Hot news on Racoon digest</Headling>
        <CardsAlbum cards={this.state.news} />
      </Layout>
    );
  }
}

const Headling = styled.p`
  margin: 20px 0 30px;
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--primary);
  opacity: 0.6;
`;

export default MainPage;
