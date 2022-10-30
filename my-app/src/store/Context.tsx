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
}

export const SearchContext = React.createContext<GlobalContent>({
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
  formGender: 'man',
  setFormGender: () => {},
  formList: [],
  setFormList: () => {},
});
