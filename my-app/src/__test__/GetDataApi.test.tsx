import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { BrowserRouter } from 'react-router-dom';
import { MainPage } from '../pages';

const handlers = [
  rest.get('https://newsapi.org/v2/top-headlines', async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        articles: [
          {
            author: 'Tatiana Fox',
            title: 'Some facts about cats',
            description: 'While us humans have 206 bones, cats on average have 244...',
            url: 'https://fox-news.com/',
            urlToImage: 'https://fox-news.com/cat.png',
            publishedAt: '2022-10-10T00:25:32Z',
          },
          {
            author: 'John Smith',
            title: 'What do you know about dogs?',
            description: 'Some have such good noses they can sniff out medical problems...',
            url: 'https://fox-news.com/',
            urlToImage: 'https://fox-news.com/dog.png',
            publishedAt: '2022-10-12T00:47:30Z',
          },
        ],
      })
    );
  }),
];

const server = setupServer(...handlers);

beforeAll(() =>
  server.listen({
    onUnhandledRequest: 'error',
  })
);
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('API tests', () => {
  test('fetch and display data from API', async () => {
    const { findByText } = render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );

    expect(await findByText('Some facts about cats')).toBeInTheDocument();
  });
});
