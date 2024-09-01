import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Website from './components/Website';

const App = () => {
  
  return (
    <div className="bg-white dark:bg-dark font-body transition-all ease-in duration-500">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Website />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
