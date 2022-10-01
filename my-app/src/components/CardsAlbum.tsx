import React from 'react';
import styled from 'styled-components';
import Card from './Card';

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
    fetch(`https://newsapi.org/v2/everything?q=mobile&apiKey=8da7981f38cd47dda2ae9e2629b2a9a2`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({ news: json.articles });
      });
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
