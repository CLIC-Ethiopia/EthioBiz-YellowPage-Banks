import React from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { Menu, X, Home, Building2, Info, Phone, LayoutDashboard } from 'lucide-react';
import { useData } from '../context/DataContext';
import BankLogo from './BankLogo';

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const { bankId } = useParams<{ bankId: string }>();
  const location = useLocation();
  const mainContentRef = React.useRef<HTMLDivElement>(null);
  const { banks } = useData();

  // Scroll to top when location changes
  React.useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTop = 0;
    }
  }, [location.pathname]);

  // If we are on the root path, we might not have a bankId, so we show the general view
  const currentBank = bankId ? banks.find(b => b.id === bankId) : null;

  // Dynamic styles based on selected bank
  const sidebarStyle = currentBank ? { backgroundColor: currentBank.color } : {};
  const activeLinkStyle = currentBank 
    ? { backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white', fontWeight: 'bold' }
    : { backgroundColor: '#fbbf24', color: '#0f172a', fontWeight: 'bold' };

  return (
    <div className="h-screen overflow-hidden flex bg-slate-50 font-sans">
      {/* Sidebar */}
      <aside 
        style={sidebarStyle}
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 flex flex-col transition-colors duration-500`}
      >
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-white text-slate-900 p-1.5 rounded font-bold text-lg shadow-sm">EB</div>
            <span className="text-xl font-bold">EthioBiz</span>
          </Link>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-white/70 hover:text-white">
            <X size={20} />
          </button>
        </div>

        <div className="p-4 border-b border-white/10">
          <h3 className="text-xs font-bold text-white/50 uppercase tracking-wider mb-2">Select Bank</h3>
          <div className="space-y-1 max-h-64 overflow-y-auto custom-scrollbar">
            {banks.map(bank => (
              <Link
                key={bank.id}
                to={`/bank/${bank.id}`}
                style={bankId === bank.id ? activeLinkStyle : {}}
                className={`flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                  bankId === bank.id 
                    ? '' 
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <div className="w-6 h-6 rounded-full bg-white p-0.5 shrink-0 overflow-hidden">
                  <BankLogo name={bank.name} logo={bank.logo} className="w-full h-full" />
                </div>
                <span className="text-sm truncate">{bank.name}</span>
              </Link>
            ))}
          </div>
        </div>

        <nav className="flex-grow p-4 space-y-1">
          <h3 className="text-xs font-bold text-white/50 uppercase tracking-wider mb-2">Menu</h3>
          
          <Link 
            to={currentBank ? `/bank/${currentBank.id}` : '/'} 
            style={location.pathname === (currentBank ? `/bank/${currentBank.id}` : '/') ? activeLinkStyle : {}}
            className={`flex items-center space-x-3 p-2 rounded-lg transition-colors ${
              location.pathname === (currentBank ? `/bank/${currentBank.id}` : '/')
                ? '' 
                : 'text-white/70 hover:bg-white/10 hover:text-white'
            }`}
          >
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </Link>

          {currentBank && (
            <Link 
              to={`/bank/${currentBank.id}/businesses`} 
              style={location.pathname.includes('/businesses') ? activeLinkStyle : {}}
              className={`flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                location.pathname.includes('/businesses')
                  ? '' 
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Building2 size={20} />
              <span>Businesses</span>
            </Link>
          )}

          <Link 
            to="/about" 
            className="flex items-center space-x-3 p-2 rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-colors"
          >
            <Info size={20} />
            <span>About</span>
          </Link>
          
          <Link 
            to="/contact" 
            className="flex items-center space-x-3 p-2 rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-colors"
          >
            <Phone size={20} />
            <span>Designer Prof. Frehun</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-white/10 text-xs text-white/50">
          &copy; {new Date().getFullYear()} EthioBiz Directory
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-grow flex flex-col min-w-0">
        {/* Top Header */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center">
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="md:hidden p-2 mr-2 text-slate-600 hover:bg-slate-100 rounded-lg"
              >
                <Menu size={24} />
              </button>
              
              {currentBank ? (
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-slate-100 p-1 border border-slate-200">
                    <BankLogo name={currentBank.name} logo={currentBank.logo} className="w-full h-full" />
                  </div>
                  <h1 className="text-lg font-bold text-slate-900 hidden sm:block">{currentBank.name} Portal</h1>
                </div>
              ) : (
                <h1 className="text-lg font-bold text-slate-900">EthioBiz Dashboard</h1>
              )}
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center text-sm text-slate-500">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                System Operational
              </div>
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-slate-900 text-sm">
                A
              </div>
            </div>
          </div>
        </header>

        <main 
          ref={mainContentRef}
          className="flex-grow overflow-y-auto p-4 md:p-8"
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
