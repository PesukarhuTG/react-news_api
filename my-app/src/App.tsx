import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage, AboutPage, NotFound, FormPage } from './pages';
import { Context } from './store/Context';
import FormProps from 'types/Form';

const App: React.FC = () => {
  const [searchVal, setSearchVal] = useState<string>('');
  const [formName, setFormName] = useState<string>('');
  const [formDate, setFormDate] = useState<string>('');
  const [formCity, setFormCity] = useState<string>('');
  const [formAccept, setFormAccept] = useState<boolean>(false);
  const [formGender, setFormGender] = useState<string>('man');
  const [formList, setFormList] = useState<FormProps[]>([]);
  const [searchIn, setSearchIn] = useState<string>('title');
  const [sortBy, setSortBy] = useState<string>('publishedAt');
  const [sortDateFrom, setDateFrom] = useState<string>('2022-10-25');
  const [sortDateTo, setDateTo] = useState<string>(
    `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
  );

  return (
    <Context.Provider
      value={{
        searchVal,
        setSearchVal,
        formName,
        setFormName,
        formDate,
        setFormDate,
        formCity,
        setFormCity,
        formGender,
        setFormGender,
        formAccept,
        setFormAccept,
        formList,
        setFormList,
        searchIn,
        setSearchIn,
        sortBy,
        setSortBy,
        sortDateFrom,
        setDateFrom,
        sortDateTo,
        setDateTo,
      }}
    >
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Context.Provider>
  );
};

export default App;
