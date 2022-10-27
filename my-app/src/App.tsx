import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage, AboutPage, NotFound, FormPage } from './pages';
import { SearchContext } from './store/Context';

const App: React.FC = () => {
  const [searchVal, setSearchVal] = useState<string>('');

  return (
    <SearchContext.Provider value={{ searchVal, setSearchVal }}>
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
