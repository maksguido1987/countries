import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Main } from './components';
import { HomePage, NotFound, Details } from './pages';

export const App = () => {
  const [countries, setCountries] = useState([]);

  return (
    <div>
      <Header />
      <Main>
        <Routes>
          <Route
            path='/'
            element={
              <HomePage countries={countries} setCountries={setCountries} />
            }
          />
          <Route path='/country/:name' element={<Details />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Main>
    </div>
  );
};
