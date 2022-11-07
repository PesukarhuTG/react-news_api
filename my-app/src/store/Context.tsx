import React, { createContext, useReducer, useContext } from 'react';
import FormProps from '../types/Form';
import SavedCardProps from '../types/SavedCardData';
import State from '../types/InitialStateProps';
import { Reducer } from '../store/Reducer';
import { initialState } from '../store/InitialState';
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
} from './constants';

interface Props {
  children?: React.ReactNode;
}

/*const Context = createContext<{ state: State; dispatch: (action: Actions) => void }>({
  state: initialState,
  dispatch: () => {},
});*/

const Context = createContext<State>(initialState);

export const Provider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const setSearchValue = (searchVal: string) => {
    dispatch({
      type: CHANGE_SEARCH_VALUE,
      payload: searchVal,
    });
  };

  const setFormName = (formName: string) => {
    dispatch({
      type: CHANGE_FORM_NAME,
      payload: formName,
    });
  };

  const setFormDate = (formDate: string) => {
    dispatch({
      type: CHANGE_FORM_DATE,
      payload: formDate,
    });
  };

  const setFormCity = (formCity: string) => {
    dispatch({
      type: CHANGE_FORM_CITY,
      payload: formCity,
    });
  };

  const setFormAccept = (formAccept: boolean) => {
    dispatch({
      type: CHANGE_FORM_ACCEPT,
      payload: formAccept,
    });
  };

  const setFormGender = (formGender: string) => {
    dispatch({
      type: CHANGE_FORM_GENDER,
      payload: formGender,
    });
  };

  const setFormList = (formList: FormProps[]) => {
    dispatch({
      type: CHANGE_FORM_LIST,
      payload: formList,
    });
  };

  const setSearchIn = (searchIn: string) => {
    dispatch({
      type: CHANGE_SEARCH_IN,
      payload: searchIn,
    });
  };

  const setSortBy = (sortBy: string) => {
    dispatch({
      type: CHANGE_SORT_BY,
      payload: sortBy,
    });
  };

  const setSortDateFrom = (sortDateFrom: string) => {
    dispatch({
      type: CHANGE_SORT_DATE_FROM,
      payload: sortDateFrom,
    });
  };

  const setSortDateTo = (sortDateTo: string) => {
    dispatch({
      type: CHANGE_SORT_DATE_TO,
      payload: sortDateTo,
    });
  };

  const setCurrentPage = (currentPage: number) => {
    dispatch({
      type: CHANGE_CURRENT_PAGE,
      payload: currentPage,
    });
  };

  const setTotalPageAmount = (totalPageAmount: number) => {
    dispatch({
      type: CHANGE_TOTAL_PAGE_AMOUNT,
      payload: totalPageAmount,
    });
  };

  const setPageSize = (pageSize: number) => {
    dispatch({
      type: CHANGE_PAGE_SIZE,
      payload: pageSize,
    });
  };

  const setSelectedFile = (selectedFile: null | string) => {
    dispatch({
      type: CHANGE_FILE,
      payload: selectedFile,
    });
  };

  const setSavedCardData = (savedCardData: SavedCardProps) => {
    dispatch({
      type: CHANGE_SAVED_CARD_DATA,
      payload: savedCardData,
    });
  };

  const setDisableCurrentPosition = (disableCurrentPosition: boolean) => {
    dispatch({
      type: CURRENT_POSITION_INFO,
      payload: disableCurrentPosition,
    });
  };

  const setFileText = (fileText: string) => {
    dispatch({
      type: CHANGE_FILE_TEXT,
      payload: fileText,
    });
  };

  const value: State = {
    searchVal: state.searchVal,
    formName: state.formName,
    formDate: state.formDate,
    formCity: state.formCity,
    formAccept: state.formAccept,
    formGender: state.formGender,
    formList: state.formList,
    searchIn: state.searchIn,
    sortBy: state.sortBy,
    sortDateFrom: state.sortDateFrom,
    sortDateTo: state.sortDateTo,
    currentPage: state.currentPage,
    totalPageAmount: state.totalPageAmount,
    pageSize: state.pageSize,
    selectedFile: state.selectedFile,
    fileText: state.fileText,
    savedCardData: state.savedCardData,
    disableCurrentPosition: state.disableCurrentPosition,
    setSearchValue,
    setFormName,
    setFormDate,
    setFormCity,
    setFormAccept,
    setFormGender,
    setFormList,
    setSearchIn,
    setSortBy,
    setSortDateFrom,
    setSortDateTo,
    setCurrentPage,
    setTotalPageAmount,
    setPageSize,
    setSelectedFile,
    setSavedCardData,
    setDisableCurrentPosition,
    setFileText,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const useNewsContext = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error('useNewsContext must be used within Context');
  }
  return context;
};

export default useNewsContext;
