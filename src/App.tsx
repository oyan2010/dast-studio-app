import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudioPage from './pages/StudioPage';
import AdminLayout from './components/AdminLayout';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudioPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
