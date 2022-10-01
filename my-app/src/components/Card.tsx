import React from 'react';
import styled from 'styled-components';

interface CardProps {
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

class Card extends React.Component<CardProps> {
  constructor(props: CardProps) {
    super(props);

    this.state = {
      author: this.props.author,
      description: this.props.description,
      publishedAt: this.props.publishedAt,
      title: this.props.title,
      urlToImage: this.props.urlToImage,
    };
  }

  render() {
    const { author, description, publishedAt, title, urlToImage } = this.props;
    return (
      <Item>
        <CardImage
          style={{
            backgroundImage: `url(${urlToImage}`,
          }}
        />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <PublishInfo>
          <NewsDate>{publishedAt.slice(0, 10)}</NewsDate>
          <Author>{author}</Author>
        </PublishInfo>
      </Item>
    );
  }
}

const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  position: relative;
  padding-bottom: 10px;
  width: 100%;
  overflow: hidden;
  background-color: var(--second-contrast);
  border-radius: 10px;
  list-style: none;
  transition: 0.3s all;

  &:hover {
    box-shadow: 0 0 15px 0 var(--primary);
  }
`;

const Title = styled.p`
  max-height: 50px;
  height: 100%;
  font-size: 18px;
  color: var(--primary);
  margin: 0 10px;
  text-transform: uppercase;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Description = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;

  max-height: 90px;
  height: 100%;
  margin: 0 10px;
  font-size: 12px;
`;

const PublishInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 10px 0;
`;

const NewsDate = styled.p`
  width: 47%;
  display: block;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Author = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 12px;
`;

const CardImage = styled.div`
  display: block;
  width: 100%;
  height: 265px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 10px 10px 0 0;
`;

export default Card;