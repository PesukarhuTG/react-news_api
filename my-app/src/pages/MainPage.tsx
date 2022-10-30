import React, { useState, useEffect, useContext } from 'react';
import {
  Layout,
  SearchPanel,
  CardsAlbum,
  SortSelectBy,
  SortSelectIn,
  SortDateFrom,
  SortDateTo,
} from 'components';
import styled from 'styled-components';
import { getNews, searchNews } from '../services/getDataApi';
import CardProps from '../types/Card';
import { Context } from 'store/Context';

const MainPage: React.FC = () => {
  const [news, setNews] = useState<CardProps[]>([]);
  const [message, setMessage] = useState<string>('');
  const { searchVal } = useContext(Context);

  const onSubmit = (data: CardProps[]): void => {
    if (!data.length) {
      setMessage('Sorry, your request is failed');
    } else {
      setMessage('');
    }
    setNews(data);
  };

  useEffect(() => {
    const checkData = async (): Promise<void> => {
      if (searchVal) {
        const articles = await searchNews(searchVal).then((resp) => resp.articles);
        if (!articles.length) {
          setMessage('Sorry, your request is failed');
        } else {
          setMessage('');
          setNews(articles);
        }
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
      <SortWrapper>
        <SortBlock>
          <p>Searching by:</p>
          <SortSelectIn options={['title', 'description']} />
          <SortSelectBy options={['publishedAt', 'relevancy', 'popularity']} />
        </SortBlock>
        <SortBlock>
          <SortDateFrom />
          <SortDateTo />
        </SortBlock>
      </SortWrapper>
      <Message data-testid="fail-message">{message}</Message>
      <CardsAlbum cards={news} />
    </Layout>
  );
};

const Headling = styled.p`
  margin: 20px 0 10px;
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--primary);
  opacity: 0.6;
`;

const Message = styled.p`
  margin: 10px 0 10px;
  height: 20px;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  color: var(--accent);
`;

const SortBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const SortWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 20px;
  background-color: var(--second-contrast);
  font-size: 14px;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

export default MainPage;
