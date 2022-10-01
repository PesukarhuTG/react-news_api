import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { getNews, searchNews } from '../services/getDataApi';

interface Article {
  source?: {
    id: string;
    name: string;
  };

  author: string;
  title: string;
  description: string;
  url?: string;
  urlToImage: string;
  publishedAt: string;
}

interface ArticleList {
  cards?: Article[];
}

interface State {
  news: Article[];
}

class CardsAlbum extends React.Component<ArticleList, State> {
  constructor(props: ArticleList) {
    super(props);

    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    const value = localStorage.getItem('searchData');

    if (value) {
      searchNews(value).then((resp) => {
        this.setState({ news: resp.articles });
      });
    } else {
      getNews().then((resp) => {
        this.setState({ news: resp.articles });
      });
    }
  }

  render() {
    const data = this.state.news;
    data.length = 21;

    return (
      <Album>
        {data.map(
          ({ author, publishedAt, description, urlToImage, title }: Article, index: number) => {
            return (
              <Card
                author={author || ''}
                publishedAt={publishedAt || ''}
                description={description || 'sorry, there is no description'}
                urlToImage={urlToImage}
                title={title || 'news'}
                key={index}
              />
            );
          }
        )}
      </Album>
    );
  }
}

const Album = styled.div`
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 50px;
`;

export default CardsAlbum;
