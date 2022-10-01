const API_KEY = '8da7981f38cd47dda2ae9e2629b2a9a2';
const BASE_URL = 'https://newsapi.org/v2/';

const getData = (url: string) =>
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw `Ooops, something is wrong. Error: ${response.status}`;
    })
    .catch((err) => console.error(err));

export const getNews = async () => {
  const url = `${BASE_URL}everything?q=cat&apiKey=${API_KEY}`;
  return await getData(url);
};

export const searchNews = async (query: string) => {
  const url = `${BASE_URL}everything?q=${query}&apiKey=${API_KEY}`;
  return await getData(url);
};
