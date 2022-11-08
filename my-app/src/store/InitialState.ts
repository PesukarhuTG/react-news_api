import State from 'types/InitialStateProps';
import { getZero } from '../services/getZero';

export const initialState: State = {
  searchVal: '',
  formName: '',
  formDate: '',
  formCity: '',
  formAccept: false,
  formGender: 'man',
  formList: [],
  searchIn: 'title',
  sortBy: 'publishedAt',
  sortDateFrom: '2022-11-01',
  sortDateTo: `${new Date().getFullYear()}-${getZero(new Date().getMonth() + 1)}-${getZero(
    new Date().getDate()
  )}`,
  currentPage: 1,
  totalPageAmount: 100,
  pageSize: 10,
  selectedFile: null,
  fileText: 'No file selected',
  savedCardData: {
    author: '',
    description: '',
    publishedAt: '',
    title: '',
    url: '',
    urlToImage: '',
    index: null,
  },
  disableCurrentPosition: true,
  newsData: [],
};
