import React from 'react';
import FormProps from '../types/Form';

interface GlobalContent {
  searchVal: string;
  setSearchVal: React.Dispatch<React.SetStateAction<string>>;
  formName: string;
  setFormName: React.Dispatch<React.SetStateAction<string>>;
  formDate: string;
  setFormDate: React.Dispatch<React.SetStateAction<string>>;
  formCity: string;
  setFormCity: React.Dispatch<React.SetStateAction<string>>;
  formAccept: boolean;
  setFormAccept: React.Dispatch<React.SetStateAction<boolean>>;
  formGender: string;
  setFormGender: React.Dispatch<React.SetStateAction<string>>;
  formList: FormProps[];
  setFormList: React.Dispatch<React.SetStateAction<FormProps[]>>;
  searchIn: string;
  setSearchIn: React.Dispatch<React.SetStateAction<string>>;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  sortDateFrom: string;
  setDateFrom: React.Dispatch<React.SetStateAction<string>>;
  sortDateTo: string;
  setDateTo: React.Dispatch<React.SetStateAction<string>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const Context = React.createContext<GlobalContent>({
  searchVal: '',
  setSearchVal: () => {},
  formName: '',
  setFormName: () => {},
  formDate: '',
  setFormDate: () => {},
  formCity: '',
  setFormCity: () => {},
  formAccept: false,
  setFormAccept: () => {},
  formGender: '',
  setFormGender: () => {},
  formList: [],
  setFormList: () => {},
  searchIn: '',
  setSearchIn: () => {},
  sortBy: '',
  setSortBy: () => {},
  sortDateFrom: '',
  setDateFrom: () => {},
  sortDateTo: '',
  setDateTo: () => {},
  currentPage: 1,
  setCurrentPage: () => {},
});
