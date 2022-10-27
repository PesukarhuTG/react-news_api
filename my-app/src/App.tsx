import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage, AboutPage, NotFound, FormPage } from './pages';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
