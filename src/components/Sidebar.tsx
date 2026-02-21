import { X, Filter, Building, MapPin, Tag } from 'lucide-react';
import { categories, banks, cities } from '../data/mockData';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedBank: string;
  setSelectedBank: (bank: string) => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
}

export default function Sidebar({
  isOpen,
  onClose,
  selectedCategory,
  setSelectedCategory,
  selectedBank,
  setSelectedBank,
  selectedCity,
  setSelectedCity
}: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 md:hidden backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:h-[calc(100vh-65px)] md:sticky md:top-[65px] overflow-y-auto shadow-xl md:shadow-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between p-4 border-b border-slate-100 md:hidden bg-slate-50">
          <h2 className="text-lg font-semibold flex items-center gap-2 text-slate-800">
            <Filter className="w-5 h-5 text-yellow-500" /> Filters
          </h2>
          <button onClick={onClose} className="p-2 rounded-md hover:bg-slate-200 transition-colors">
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Tag className="w-4 h-4 text-slate-400" /> Category
            </h3>
            <div className="space-y-2.5">
              {categories.map(category => (
                <label key={category} className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      checked={selectedCategory === category}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="peer sr-only"
                    />
                    <div className="w-4 h-4 rounded-full border-2 border-slate-300 peer-checked:border-yellow-500 peer-checked:bg-yellow-500 transition-all"></div>
                    <div className="absolute w-1.5 h-1.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                  </div>
                  <span className={`text-sm transition-colors ${selectedCategory === category ? 'text-slate-900 font-medium' : 'text-slate-600 group-hover:text-slate-900'}`}>
                    {category}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="h-px bg-slate-100"></div>

          {/* Banks */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Building className="w-4 h-4 text-slate-400" /> Bank Affiliation
            </h3>
            <div className="space-y-2.5">
              {banks.map(bank => (
                <label key={bank} className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input
                      type="radio"
                      name="bank"
                      value={bank}
                      checked={selectedBank === bank}
                      onChange={(e) => setSelectedBank(e.target.value)}
                      className="peer sr-only"
                    />
                    <div className="w-4 h-4 rounded-full border-2 border-slate-300 peer-checked:border-yellow-500 peer-checked:bg-yellow-500 transition-all"></div>
                    <div className="absolute w-1.5 h-1.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                  </div>
                  <span className={`text-sm transition-colors ${selectedBank === bank ? 'text-slate-900 font-medium' : 'text-slate-600 group-hover:text-slate-900'}`}>
                    {bank}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="h-px bg-slate-100"></div>

          {/* Cities */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-slate-400" /> Location
            </h3>
            <div className="space-y-2.5">
              {cities.map(city => (
                <label key={city} className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input
                      type="radio"
                      name="city"
                      value={city}
                      checked={selectedCity === city}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="peer sr-only"
                    />
                    <div className="w-4 h-4 rounded-full border-2 border-slate-300 peer-checked:border-yellow-500 peer-checked:bg-yellow-500 transition-all"></div>
                    <div className="absolute w-1.5 h-1.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                  </div>
                  <span className={`text-sm transition-colors ${selectedCity === city ? 'text-slate-900 font-medium' : 'text-slate-600 group-hover:text-slate-900'}`}>
                    {city}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
