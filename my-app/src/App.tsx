import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage, AboutPage, NotFound, FormPage } from './pages';
import { SearchContext } from './store/Context';

const App: React.FC = () => {
  const [searchVal, setSearchVal] = useState<string>('');
  const [formName, setFormName] = useState<string>('');
  const [formDate, setFormDate] = useState<string>('');
  const [formCity, setFormCity] = useState<string>('');
  const [formAccept, setFormAccept] = useState<boolean>(false);

  return (
    <SearchContext.Provider
      value={{
        searchVal,
        setSearchVal,
        formName,
        setFormName,
        formDate,
        setFormDate,
        formCity,
        setFormCity,
        formAccept,
        setFormAccept,
      }}
    >
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </SearchContext.Provider>
  );
};

export default App;
