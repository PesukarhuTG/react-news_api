import FormProps from '../types/Form';
import SavedCardProps from '../types/SavedCardData';

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

export type ChangeSearchValue = {
  type: typeof CHANGE_SEARCH_VALUE;
  payload: string;
};

export type ChangeFormName = {
  type: typeof CHANGE_FORM_NAME;
  payload: string;
};

export type ChangeFormDate = {
  type: typeof CHANGE_FORM_DATE;
  payload: string;
};

export type ChangeFormCity = {
  type: typeof CHANGE_FORM_CITY;
  payload: string;
};

export type ChangeFormAccept = {
  type: typeof CHANGE_FORM_ACCEPT;
  payload: boolean;
};

export type ChangeFormGender = {
  type: typeof CHANGE_FORM_GENDER;
  payload: string;
};

export type ChangeFormList = {
  type: typeof CHANGE_FORM_LIST;
  payload: FormProps[];
};

export type ChangeSearchIn = {
  type: typeof CHANGE_SEARCH_IN;
  payload: string;
};

export type ChangeSortBy = {
  type: typeof CHANGE_SORT_BY;
  payload: string;
};

export type ChangeSortDateFrom = {
  type: typeof CHANGE_SORT_DATE_FROM;
  payload: string;
};

export type ChangeSortDateTo = {
  type: typeof CHANGE_SORT_DATE_TO;
  payload: string;
};

export type ChangeCurrentPage = {
  type: typeof CHANGE_CURRENT_PAGE;
  payload: number;
};

export type ChangeTotalPageAmount = {
  type: typeof CHANGE_TOTAL_PAGE_AMOUNT;
  payload: number;
};

export type ChangePageSize = {
  type: typeof CHANGE_PAGE_SIZE;
  payload: number;
};

export type ChangeFile = {
  type: typeof CHANGE_FILE;
  payload: string | null;
};

export type ChangeSavedCardData = {
  type: typeof CHANGE_SAVED_CARD_DATA;
  payload: SavedCardProps;
};

export type CurrentPositionInfo = {
  type: typeof CURRENT_POSITION_INFO;
  payload: boolean;
};

export type ChangeFileText = {
  type: typeof CHANGE_FILE_TEXT;
  payload: string;
};

export type Actions =
  | ChangeSearchValue
  | ChangeFormName
  | ChangeFormDate
  | ChangeFormCity
  | ChangeFormAccept
  | ChangeFormGender
  | ChangeFormList
  | ChangeSearchIn
  | ChangeSortBy
  | ChangeSortDateFrom
  | ChangeSortDateTo
  | ChangeCurrentPage
  | ChangeTotalPageAmount
  | ChangePageSize
  | ChangeFile
  | ChangeSavedCardData
  | CurrentPositionInfo
  | ChangeFileText;

export const ChangeSearchValue = (payload: string): ChangeSearchValue => ({
  type: CHANGE_SEARCH_VALUE,
  payload,
});

export const ChangeFormName = (payload: string): ChangeFormName => ({
  type: CHANGE_FORM_NAME,
  payload,
});

export const ChangeFormDate = (payload: string): ChangeFormDate => ({
  type: CHANGE_FORM_DATE,
  payload,
});

export const ChangeFormCity = (payload: string): ChangeFormCity => ({
  type: CHANGE_FORM_CITY,
  payload,
});

export const ChangeFormAccept = (payload: boolean): ChangeFormAccept => ({
  type: CHANGE_FORM_ACCEPT,
  payload,
});

export const ChangeFormGender = (payload: string): ChangeFormGender => ({
  type: CHANGE_FORM_GENDER,
  payload,
});

export const ChangeFormList = (payload: FormProps[]): ChangeFormList => ({
  type: CHANGE_FORM_LIST,
  payload,
});

export const ChangeSearchIn = (payload: string): ChangeSearchIn => ({
  type: CHANGE_SEARCH_IN,
  payload,
});

export const ChangeSortBy = (payload: string): ChangeSortBy => ({
  type: CHANGE_SORT_BY,
  payload,
});

export const ChangeSortDateFrom = (payload: string): ChangeSortDateFrom => ({
  type: CHANGE_SORT_DATE_FROM,
  payload,
});

export const ChangeSortDateTo = (payload: string): ChangeSortDateTo => ({
  type: CHANGE_SORT_DATE_TO,
  payload,
});

export const ChangeCurrentPage = (payload: number): ChangeCurrentPage => ({
  type: CHANGE_CURRENT_PAGE,
  payload,
});

export const ChangeTotalPageAmount = (payload: number): ChangeTotalPageAmount => ({
  type: CHANGE_TOTAL_PAGE_AMOUNT,
  payload,
});

export const ChangePageSize = (payload: number): ChangePageSize => ({
  type: CHANGE_PAGE_SIZE,
  payload,
});

export const ChangeFile = (payload: string | null): ChangeFile => ({
  type: CHANGE_FILE,
  payload,
});

export const ChangeSavedCardData = (payload: SavedCardProps): ChangeSavedCardData => ({
  type: CHANGE_SAVED_CARD_DATA,
  payload,
});

export const CurrentPositionInfo = (payload: boolean): CurrentPositionInfo => ({
  type: CURRENT_POSITION_INFO,
  payload,
});

export const ChangeFileText = (payload: string): ChangeFileText => ({
  type: CHANGE_FILE_TEXT,
  payload,
});
