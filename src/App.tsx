import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import Home from './pages/Home';
import BankDashboard from './pages/BankDashboard';
import BusinessList from './pages/BusinessList';
import BusinessDetail from './pages/BusinessDetail';
import ClaimBusiness from './pages/ClaimBusiness';
import BusinessDashboard from './pages/BusinessDashboard';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="bank/:bankId" element={<BankDashboard />} />
          <Route path="bank/:bankId/businesses" element={<BusinessList />} />
          <Route path="bank/:bankId/businesses/:id" element={<BusinessDetail />} />
          <Route path="business/:id/claim" element={<ClaimBusiness />} />
          <Route path="business/:id/dashboard" element={<BusinessDashboard />} />
          
          {/* Fallback routes */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<div className="p-10 text-center">Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
