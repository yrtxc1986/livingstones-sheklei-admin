import { Routes, Route, Outlet } from 'react-router-dom';
import Lyrics from './lyrics';

export default function () {
  return (
    <>
      <Outlet />
      <Routes>
        <Route path="/" element={<Lyrics />} />
      </Routes>
    </>
  );
}
