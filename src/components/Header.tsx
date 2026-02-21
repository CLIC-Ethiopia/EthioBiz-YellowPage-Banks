import { Search, Menu, Building2, MapPin, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onMenuClick: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Header({ onMenuClick, searchQuery, setSearchQuery }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-yellow-400 border-b border-yellow-500 shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button 
            onClick={onMenuClick}
            className="p-2 -ml-2 rounded-md hover:bg-yellow-500/50 md:hidden transition-colors"
          >
            <Menu className="w-6 h-6 text-slate-900" />
          </button>
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-slate-900 p-1.5 rounded-lg group-hover:scale-105 transition-transform">
              <Building2 className="w-6 h-6 text-yellow-400" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight hidden sm:block">
              EthioBank <span className="font-light">Directory</span>
            </span>
          </Link>
        </div>

        <div className="flex-1 max-w-2xl mx-4 lg:mx-8">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400 group-focus-within:text-yellow-600 transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search businesses, products, or services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2.5 border border-transparent rounded-xl leading-5 bg-white/90 placeholder-slate-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-slate-900 focus:border-transparent sm:text-sm transition-all shadow-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4 text-sm font-medium text-slate-800">
            <a href="#" className="hover:text-slate-900 transition-colors flex items-center gap-1">
              <Briefcase className="w-4 h-4" /> For Businesses
            </a>
            <a href="#" className="hover:text-slate-900 transition-colors flex items-center gap-1">
              <MapPin className="w-4 h-4" /> Locations
            </a>
          </div>
          <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}
