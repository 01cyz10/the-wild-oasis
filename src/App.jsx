import { Routes, BrowserRouter, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Dashboard from '../pages/Dashboard';
import Bookings from '../pages/Bookings';
import Cabins from '../pages/Cabins';
import Users from '../pages/Users';
import Settings from '../pages/Settings';
import Account from '../pages/Account';
import Login from '../pages/Login';
import PageNotFound from '../pages/PageNotFound';
import GlobalStyle from '../styles/GlobalStyles';
import AppLayout from '../ui/AppLayout';

// integrate the react-query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to='dashboard' />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='booking' element={<Bookings />} />
            <Route path='cabins' element={<Cabins />} />
            <Route path='users' element={<Users />} />
            <Route path='setting' element={<Settings />} />
            <Route path='account' element={<Account />} />
          </Route>

          <Route path='login' element={<Login />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
