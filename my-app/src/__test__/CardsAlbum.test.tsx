import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CardsAlbum } from '../components';

describe('CardsAlbum tests', () => {
  test('render some Cards', async () => {
    const fakeData = [
      {
        author: 'Tatiana',
        title: 'Daily news',
        description: 'There will be some awesome info',
        publishedAt: '2022-10-02',
        urlToImage:
          'https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg',
      },
      {
        author: 'John',
        title: 'Hot cakes',
        description: 'There will be some awesome info',
        publishedAt: '2022-10-03',
        urlToImage:
          'https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg',
      },
    ];

    render(<CardsAlbum cards={fakeData} />);
    //придумать, как проверить рендер
  });

  test('if we dont get any data', () => {
    render(<CardsAlbum cards={[]} />);

    const title = screen.getByText(/Data is preparing/i);
    expect(title).toBeInTheDocument();
  });
});
