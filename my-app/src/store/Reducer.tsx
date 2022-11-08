import State from 'types/InitialStateProps';
import { Actions } from './actions';
import { initialState } from './InitialState';
import {
  CHANGE_SEARCH_VALUE,
  CHANGE_FORM_NAME,
  CHANGE_FORM_DATE,
  CHANGE_FORM_CITY,
  CHANGE_FORM_ACCEPT,
  CHANGE_FORM_GENDER,
  CHANGE_FORM_LIST,
  CHANGE_SEARCH_IN,
  CHANGE_SORT_BY,
  CHANGE_SORT_DATE_FROM,
  CHANGE_SORT_DATE_TO,
  CHANGE_CURRENT_PAGE,
  CHANGE_TOTAL_PAGE_AMOUNT,
  CHANGE_PAGE_SIZE,
  CHANGE_FILE,
  CHANGE_SAVED_CARD_DATA,
  CURRENT_POSITION_INFO,
  CHANGE_FILE_TEXT,
  ADD_NEWS,
} from './constants';

export const reducer = (state: State = initialState, action: Actions): State => {
  const { type, payload } = action;

  switch (type) {
    case ADD_NEWS:
      return {
        ...state,
        newsData: [...payload],
      };
    case CHANGE_SEARCH_VALUE:
      return {
        ...state,
        searchVal: payload,
      };

    case CHANGE_FORM_NAME:
      return {
        ...state,
        formName: payload,
      };

    case CHANGE_FORM_DATE:
      return {
        ...state,
        formDate: payload,
      };

    case CHANGE_FORM_CITY:
      return {
        ...state,
        formCity: payload,
      };

    case CHANGE_FORM_ACCEPT:
      return {
        ...state,
        formAccept: payload,
      };

    case CHANGE_FORM_GENDER:
      return {
        ...state,
        formGender: payload,
      };

    case CHANGE_FORM_LIST:
      return {
        ...state,
        formList: payload,
      };

    case CHANGE_SEARCH_IN:
      return {
        ...state,
        searchIn: payload,
      };

    case CHANGE_SORT_BY:
      return {
        ...state,
        sortBy: payload,
      };

    case CHANGE_SORT_DATE_FROM:
      return {
        ...state,
        sortDateFrom: payload,
      };

    case CHANGE_SORT_DATE_TO:
      return {
        ...state,
        sortDateTo: payload,
      };

    case CHANGE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      };

    case CHANGE_TOTAL_PAGE_AMOUNT:
      return {
        ...state,
        totalPageAmount: payload,
      };

    case CHANGE_PAGE_SIZE:
      return {
        ...state,
        pageSize: payload,
      };

    case CHANGE_FILE:
      return {
        ...state,
        selectedFile: payload,
      };

    case CHANGE_SAVED_CARD_DATA:
      return {
        ...state,
        savedCardData: payload,
      };

    case CURRENT_POSITION_INFO:
      return {
        ...state,
        disableCurrentPosition: payload,
      };

    case CHANGE_FILE_TEXT:
      return {
        ...state,
        fileText: payload,
      };

    default:
      return state;
  }
};
