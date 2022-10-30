const API_KEY = '15a43de0072f430ca5b8ea4bdcc6d11a';
const BASE_URL = 'https://newsapi.org/v2/';

const getData = (restUrl: string) =>
  fetch(`${BASE_URL}${restUrl}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw Error(`Ooops, something is wrong. Error: ${response.status}`);
    })
    .catch((err) => console.error(err));

export const getNews = async () => {
  const url = `top-headlines?country=us&apiKey=${API_KEY}`;
  return await getData(url);
};

export const searchNews = async (
  query: string,
  where = 'title',
  sort = 'publishedAt',
  dateFrom = '2022-10-25',
  dateTo = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
) => {
  const url = `everything?searchIn=${where}&q=${query}&sortBy=${sort}&from=${dateFrom}&to=${dateTo}&apiKey=${API_KEY}`;
  return await getData(url);
};
