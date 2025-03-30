import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RandomNumberPage from './pages/RandomNumberPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/1-to-100" element={<RandomNumberPage min={1} max={100} />} />
        <Route path="/1-to-10" element={<RandomNumberPage min={1} max={10} />} />
        <Route path="/1-to-3" element={<RandomNumberPage min={1} max={3} />} />
        <Route path="/1-to-6" element={<RandomNumberPage min={1} max={6} />} />
        <Route path="/1-to-1000" element={<RandomNumberPage min={1} max={1000} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();