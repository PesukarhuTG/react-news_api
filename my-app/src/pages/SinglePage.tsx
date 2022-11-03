import React from 'react';
import styled from 'styled-components';
import { Layout } from '../components';
import { useNavigate } from 'react-router-dom';
import useNewsContext from '../store/Context';
import SavedCardProps from '../types/SavedCardData';

const SinglePage: React.FC = () => {
  const navigate = useNavigate();
  const { savedCardData, setDisableCurrentPosition } = useNewsContext();

  const { author, description, publishedAt, title, urlToImage, url } =
    savedCardData as SavedCardProps;

  const backMainPage = () => {
    navigate('/', { replace: true });
    setDisableCurrentPosition(true);
  };

  return (
    <Layout>
      <Wrapper>
        <NewsImage
          style={{
            backgroundImage: `url(${urlToImage || '../assets/img/no-poster.jpg'}`,
          }}
        />
        <NewsFullTitle>{title}</NewsFullTitle>

        <NewsFullDescription>
          {description || 'Sorry, there is no any description'}
        </NewsFullDescription>
        <InfoWrapper>
          <p>
            <strong>Published date:</strong> {publishedAt ? publishedAt.slice(0, 10) : 'no date'}
          </p>
          <p>
            <strong>Author:</strong> {author || 'unnamed'}
          </p>
        </InfoWrapper>
        <InfoWrapper>
          <Button onClick={backMainPage}>❮ Back to main page</Button>
          <a href={url} target="_blank" rel="noreferrer noopener">
            <Button>Link to full news ❯</Button>
          </a>
        </InfoWrapper>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
`;

const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  font-size: 14px;
  gap: 20px;
  margin: 20px 0;
  align-items: center;
  justify-content: space-between;
`;

const NewsImage = styled.div`
  width: 100%;
  height: 240px;
  margin: 40px 0 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const NewsFullTitle = styled.p`
  font-size: 18px;
  color: var(--primary);
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
`;

const NewsFullDescription = styled.p`
  font-size: 14px;
  padding-bottom: 20px;
  border-bottom: 1px dotted var(--main-color);
`;

const Button = styled.button`
  display: block;
  max-width: 170px;
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border-radius: 5px;
  background-color: var(--primary);
  border: 0;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: var(--button-hover);
  }
`;

export default SinglePage;
