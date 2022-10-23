import React, { useState, useEffect } from 'react';
import { Layout, SearchPanel, CardsAlbum } from 'components';
import styled from 'styled-components';
import { getNews, searchNews } from '../services/getDataApi';
import CardProps from '../types/Card';

const MainPage: React.FC = () => {
  const [news, setNews] = useState<CardProps[]>([]);
  const value = (localStorage.getItem('searchData') || '') as string;

  const onSubmit = (data: CardProps[]): void => {
    setNews(data);
  };

  useEffect(() => {
    const checkData = async (): Promise<void> => {
      if (value) {
        const articles = await searchNews(value).then((resp) => resp.articles);
        setNews(articles);
      } else {
        const articles = await getNews().then((resp) => resp.articles);
        setNews(articles);
      }
    };

    checkData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <SearchPanel onSearch={onSubmit} />
      <Headling>Hot news on Racoon digest</Headling>
      <CardsAlbum cards={news} />
    </Layout>
  );
};

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
