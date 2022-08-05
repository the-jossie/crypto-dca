import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { UserProvider } from './contexts';
import { DashboardPage } from './pages';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
