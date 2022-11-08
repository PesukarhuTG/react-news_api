import React, { useState, useEffect } from 'react';
import {
  Layout,
  SearchPanel,
  CardsAlbum,
  SortSelectBy,
  SortSelectIn,
  SortDateFrom,
  SortDateTo,
  Pagination,
} from 'components';
import styled from 'styled-components';
import { getNews, searchNews } from '../services/getDataApi';
import CardProps from '../types/Card';
import { useDispatch, useSelector } from 'react-redux';
import { сhangeCurrentPage, сhangeTotalPageAmount, сhangePageSize, addNews } from 'store/actions';
import State from 'types/InitialStateProps';

const MainPage: React.FC = () => {
  const [news, setNews] = useState<CardProps[]>([]);
  const [message, setMessage] = useState<string>('');

  const {
    searchVal,
    searchIn,
    sortBy,
    sortDateFrom,
    sortDateTo,
    currentPage,
    totalPageAmount,
    pageSize,
    newsData,
  } = useSelector((state: State) => state);
  const dispatch = useDispatch();

  const onSubmit = (data: CardProps[]): void => {
    if (!data.length) {
      setMessage('Sorry, your request is failed');
    } else {
      setMessage('');
    }
    setNews(data);
  };

  useEffect(() => {
    const onLoadChangedData = async (): Promise<void> => {
      if (searchVal) {
        console.log('изменения полей: загрузка поиска');
        const data = await searchNews(
          searchVal,
          searchIn,
          sortBy,
          sortDateFrom,
          sortDateTo,
          currentPage,
          pageSize
        ).then((resp) => resp);

        if (!data.articles.length) {
          setMessage('Sorry, your request is failed');
        } else {
          setMessage('');
          setNews(data.articles);
          dispatch(сhangeTotalPageAmount(data.totalResults > 100 ? 100 : data.totalResults));
        }
      } else {
        console.log('изменения полей: загрузка топ без поиска');
        const data = await getNews(currentPage, pageSize).then((resp) => resp);
        setNews(data.articles);
        dispatch(сhangeTotalPageAmount(data.totalResults > 100 ? 100 : data.totalResults));
      }
    };

    onLoadChangedData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchIn, sortBy, sortDateFrom, sortDateTo, currentPage, pageSize]);

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
      <Pagination
        page={currentPage}
        onChange={(page, pageSize) => {
          dispatch(сhangeCurrentPage(page));
          dispatch(сhangePageSize(pageSize));
        }}
        total={totalPageAmount}
        pageSize={pageSize}
      />
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
