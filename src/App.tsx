import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { QueryClientProvider } from '@tanstack/react-query';

import { UserProvider } from './contexts';
import { DashboardPage } from './pages';
import { queryClient } from './config';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
      <ToastContainer closeOnClick={false} hideProgressBar />
    </QueryClientProvider>
  );
}

export default App;
