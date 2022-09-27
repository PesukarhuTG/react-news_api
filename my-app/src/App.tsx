import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage, About, NotFound } from './pages';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}

export default App;
