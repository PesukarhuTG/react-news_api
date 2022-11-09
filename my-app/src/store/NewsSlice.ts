import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import CardProps from 'types/Card';
import { getZero } from 'services/getZero';
import { API_KEY, BASE_URL } from '../services/constants';
import SavedCardProps from 'types/SavedCardData';

interface PagesDataProps {
  currentPage: number;
  pageSize: number;
}

interface SearchDataProps {
  searchVal: string;
  searchIn: string;
  sortBy: string;
  sortDateFrom: string;
  sortDateTo: string;
  currentPage: number;
  pageSize: number;
}

interface InitState {
  searchVal: string;
  searchIn: string;
  sortBy: string;
  sortDateFrom: string;
  sortDateTo: string;
  currentPage: number;
  totalPageAmount: number;
  pageSize: number;
  disableCurrentPosition: boolean;
  savedCardData: SavedCardProps;
  newsData: CardProps[];
}

const initialState: InitState = {
  searchVal: '',
  searchIn: 'title',
  sortBy: 'publishedAt',
  sortDateFrom: '2022-11-01',
  sortDateTo: `${new Date().getFullYear()}-${getZero(new Date().getMonth() + 1)}-${getZero(
    new Date().getDate()
  )}`,
  currentPage: 1,
  totalPageAmount: 100,
  pageSize: 10,
  disableCurrentPosition: true,
  savedCardData: {
    author: '',
    description: '',
    publishedAt: '',
    title: '',
    url: '',
    urlToImage: '',
    index: null,
  },
  newsData: [],
};

export const fetchPosts = createAsyncThunk(
  'newsPosts/fetchPosts',
  async (pagesData: PagesDataProps) => {
    const { currentPage, pageSize } = pagesData;

    const response = await fetch(
      `${BASE_URL}top-headlines?country=us&page=${currentPage}&pageSize=${pageSize}&apiKey=${API_KEY}`
    );
    const data = await response.json();
    return data.articles;
  }
);

export const fetchSearchPosts = createAsyncThunk(
  'newsPosts/fetchSearchPosts',
  async (searchData: SearchDataProps) => {
    const { searchVal, searchIn, sortBy, sortDateFrom, sortDateTo, currentPage, pageSize } =
      searchData;

    const response = await fetch(
      `${BASE_URL}everything?searchIn=${searchIn}&q=${searchVal}&sortBy=${sortBy}&from=${sortDateFrom}&to=${sortDateTo}&page=${currentPage}&pageSize=${pageSize}&apiKey=${API_KEY}`
    );
    const data = await response.json();
    return data.articles;
  }
);

const newsSlice = createSlice({
  name: 'newsPosts',
  initialState,
  reducers: {
    changeSearchValue(state, action: PayloadAction<string>) {
      state.searchVal = action.payload;
    },
    changeSearchIn(state, action: PayloadAction<string>) {
      state.searchIn = action.payload;
    },
    changeSortBy(state, action: PayloadAction<string>) {
      state.sortBy = action.payload;
    },
    changeSortDateFrom(state, action: PayloadAction<string>) {
      state.sortDateFrom = action.payload;
    },
    changeSortDateTo(state, action: PayloadAction<string>) {
      state.sortDateTo = action.payload;
    },
    changeCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    changeTotalPageAmount(state, action: PayloadAction<number>) {
      state.totalPageAmount = action.payload > 100 ? 100 : action.payload;
    },
    changePageSize(state, action: PayloadAction<number>) {
      state.pageSize = action.payload;
    },
    changeCurrentPositionInfo(state, action: PayloadAction<boolean>) {
      state.disableCurrentPosition = action.payload;
    },
    changeSavedCardData(state, action: PayloadAction<SavedCardProps>) {
      state.savedCardData = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state: InitState, action: PayloadAction<CardProps[]>) => {
        state.newsData = action.payload;
      })
      .addCase(
        fetchSearchPosts.fulfilled,
        (state: InitState, action: PayloadAction<CardProps[]>) => {
          state.newsData = action.payload;
        }
      );
  },
});

export const {
  changeSearchValue,
  changeSearchIn,
  changeSortBy,
  changeSortDateFrom,
  changeSortDateTo,
  changeCurrentPage,
  changeTotalPageAmount,
  changePageSize,
  changeCurrentPositionInfo,
  changeSavedCardData,
} = newsSlice.actions;

export default newsSlice.reducer;
