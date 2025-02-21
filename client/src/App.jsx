// client/src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Challenges from './pages/Challenges';
import Courses from './pages/Courses';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="challenges" element={<Challenges />} />
            <Route path="courses" element={<Courses />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}