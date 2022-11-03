import React from 'react';
import styled from 'styled-components';
import { Layout } from '../components';
import { useNavigate } from 'react-router-dom';
import useNewsContext from '../store/Context';

const SinglePage: React.FC = () => {
  const storedData = localStorage.getItem('newsItem') as string | null;
  const data = storedData ? JSON.parse(storedData) : '';
  const navigate = useNavigate();
  const { currentPage } = useNewsContext();

  return (
    <Layout>
      <Button onClick={() => navigate('/', { replace: true })}>❮ Back to main page</Button>
      <Wrapper>
        <Title>
          Current position: page #{currentPage}, news #{data.index}
        </Title>
        {data && (
          <>
            <NewsImage
              style={{
                backgroundImage: `url(${data.urlToImage || '../assets/img/no-poster.jpg'}`,
              }}
            />
            <NewsFullTitle>{data.title}</NewsFullTitle>

            <NewsFullDescription>
              {data.description || 'Sorry, there is no any description'}
            </NewsFullDescription>
            <LinkToFullNews href={data.url} target={'_blank'}>
              Link to full news ►
            </LinkToFullNews>
            <InfoWrapper>
              <p>
                <strong>Published date:</strong> {data.publishedAt.slice(0, 10)}
              </p>
              <p>
                <strong>Author:</strong> {data.author || 'unnamed'}
              </p>
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
  margin: 40px 0 20px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  padding: 20px;
  background-color: var(--second-contrast);
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
  margin-bottom: 20px;
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
