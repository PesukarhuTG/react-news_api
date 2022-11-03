import React from 'react';
import styled from 'styled-components';
import CardProps from '../types/Card';
import { Card, Spinner } from './index';
import { Link } from 'react-router-dom';

interface CardListProps {
  cards?: CardProps[];
}

const CardsAlbum: React.FC<CardListProps> = ({ cards }) => {
  if (!cards?.length) {
    return <Spinner />;
  }

  return (
    <Album>
      {cards.map((item: CardProps, index: number) => {
        return (
          <Link key={index} to={`/news/${item.source?.id || item.source?.name}`}>
            <Card {...item} />
          </Link>
        );
      })}
    </Album>
  );
};

const Album = styled.ul`
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 50px;
`;

export default CardsAlbum;
