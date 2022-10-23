import React from 'react';
import ReactDOM from 'react-dom/client';
import 'uno.css';
import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom';

import Index from './pages/index';
import Error from './Error';
import Lyrics from './pages/lyrics';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Outlet />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<Error />} />
        <Route path="/lyrics/*" element={<Lyrics />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
