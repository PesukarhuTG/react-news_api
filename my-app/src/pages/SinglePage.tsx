import React from 'react';
import styled from 'styled-components';
import { Layout } from '../components';
import { useNavigate } from 'react-router-dom';

const SinglePage: React.FC = () => {
  const storedData = localStorage.getItem('newsItem') as string | null;
  const data = storedData ? JSON.parse(storedData) : '';
  const navigate = useNavigate();

  return (
    <Layout>
      <Button onClick={() => navigate('/', { replace: true })}>❮ Back to main page</Button>
      <Wrapper>
        <Title>News:</Title>
        {data && (
          <>
            <InfoWrapper>
              <NewsImage
                style={{
                  backgroundImage: `url(${data.urlToImage || '../assets/img/no-poster.jpg'}`,
                }}
              />
              <NewsFullTitle>{data.title}</NewsFullTitle>
            </InfoWrapper>
            <NewsFullDescription>
              {data.description || 'Sorry, there is no any description'}
            </NewsFullDescription>
            <LinkToFullNews href={data.url} target={'_blank'}>
              Link to full news ►
            </LinkToFullNews>
            <InfoWrapper>
              <p>Published date: {data.publishedAt.slice(0, 10)}</p>
              <p>Author: {data.author || 'unnamed'}</p>
            </InfoWrapper>
          </>
        )}
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 30px;
  font-weight: 700;
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
  width: 200px;
  height: 100px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const NewsFullTitle = styled.p`
  width: 66%;
  font-size: 18px;
  color: var(--primary);
  margin: 0 10px;
  text-transform: uppercase;
`;

const NewsFullDescription = styled.p`
  font-size: 14px;
`;

const LinkToFullNews = styled.a`
  display: block;
  margin: 10px 0;
  font-size: 14px;
  color: var(--primary);
  text-align: center;
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
    opacity: 0.9;
  }
`;

export default SinglePage;
