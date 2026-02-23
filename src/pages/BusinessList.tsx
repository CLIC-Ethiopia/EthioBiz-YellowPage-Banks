import React, { useState, useEffect } from 'react';
import { useSearchParams, Link, useParams } from 'react-router-dom';
import { Search, MapPin, Filter, Star, CheckCircle, ArrowRight, Plus, Map as MapIcon, List } from 'lucide-react';
import { useData } from '../context/DataContext';
import { Business } from '../types';
import AddBusinessModal from '../components/AddBusinessModal';
import BankLogo from '../components/BankLogo';
import BusinessMap from '../components/BusinessMap';

export default function BusinessList() {
  const { bankId } = useParams<{ bankId: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const initialCategory = searchParams.get('category') || '';
  const { businesses, banks } = useData();

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedCity, setSelectedCity] = useState('');
  const [allBusinesses, setAllBusinesses] = useState<Business[]>([]);
  const [filteredBusinesses, setFilteredBusinesses] = useState<Business[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  const bank = banks.find(b => b.id === bankId);

  useEffect(() => {
    if (businesses.length > 0) {
      setAllBusinesses(businesses);
    }
  }, [businesses]);

  // Filter businesses by bank first
  const bankBusinesses = React.useMemo(() => {
    return allBusinesses.filter(b => b.bankId === bankId);
  }, [bankId, allBusinesses]);

  const categories = Array.from(new Set(bankBusinesses.map(b => b.category)));
  const cities = Array.from(new Set(bankBusinesses.map(b => b.city)));

  useEffect(() => {
    let result = bankBusinesses;

    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      result = result.filter(b => 
        b.name.toLowerCase().includes(lowerTerm) || 
        b.description.toLowerCase().includes(lowerTerm) ||
        b.products.some(p => p.name.toLowerCase().includes(lowerTerm)) ||
        b.services.some(s => s.name.toLowerCase().includes(lowerTerm))
      );
    }

    if (selectedCategory) {
      result = result.filter(b => b.category === selectedCategory);
    }

    if (selectedCity) {
      result = result.filter(b => b.city === selectedCity);
    }

    setFilteredBusinesses(result);
  }, [searchTerm, selectedCategory, selectedCity, bankBusinesses]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ search: searchTerm, category: selectedCategory });
  };

  const handleAddBusiness = (newBusiness: Business) => {
    setAllBusinesses(prev => [newBusiness, ...prev]);
  };

  if (!bank) {
    return <div>Bank not found</div>;
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Search */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-slate-50 p-2 border border-slate-100">
              <BankLogo name={bank.name} logo={bank.logo} className="w-full h-full" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">{bank.name} Directory</h1>
              <p className="text-slate-500">Browse businesses verified by {bank.name}</p>
            </div>
          </div>
          
          <div className="flex space-x-3">
            <div className="flex bg-slate-100 p-1 rounded-lg">
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
              >
                <List size={20} />
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`p-2 rounded-md transition-all ${viewMode === 'map' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
              >
                <MapIcon size={20} />
              </button>
            </div>
            <button 
              onClick={() => setIsAddModalOpen(true)}
              style={{ backgroundColor: bank.color }}
              className="text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
            >
              <Plus size={20} />
              <span>Add Business</span>
            </button>
          </div>
        </div>
        
        <form onSubmit={handleSearch} className="flex gap-2 max-w-2xl">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search businesses, products, or services..."
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1"
              style={{ borderColor: 'transparent', '--tw-ring-color': bank.color } as React.CSSProperties}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button 
            type="submit"
            style={{ backgroundColor: bank.color }}
            className="text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
          >
            Search
          </button>
        </form>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Mobile Filter Toggle */}
        <button 
          className="md:hidden flex items-center justify-center space-x-2 bg-white p-3 rounded-lg border border-slate-200 shadow-sm font-medium text-slate-700"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <Filter size={20} />
          <span>Filters</span>
        </button>

          {/* Sidebar Filters */}
          <aside className={`md:w-64 flex-shrink-0 ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold text-lg text-slate-900">Filters</h2>
                {(selectedCategory || selectedCity) && (
                  <button 
                    onClick={() => {
                      setSelectedCategory('');
                      setSelectedCity('');
                      setSearchParams({});
                    }}
                    className="text-xs font-medium hover:underline"
                    style={{ color: bank.color }}
                  >
                    Clear All
                  </button>
                )}
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-slate-900 mb-3 text-sm uppercase tracking-wider">Category</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="category" 
                      checked={selectedCategory === ''}
                      onChange={() => setSelectedCategory('')}
                      className="focus:ring-2"
                      style={{ color: bank.color, '--tw-ring-color': bank.color } as React.CSSProperties}
                    />
                    <span className={`text-sm ${selectedCategory === '' ? 'text-slate-900 font-medium' : 'text-slate-600 group-hover:text-slate-900'}`}>All Categories</span>
                  </label>
                  {categories.map(category => (
                    <label key={category} className="flex items-center space-x-2 cursor-pointer group">
                      <input 
                        type="radio" 
                        name="category" 
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                        className="focus:ring-2"
                        style={{ color: bank.color, '--tw-ring-color': bank.color } as React.CSSProperties}
                      />
                      <span className={`text-sm ${selectedCategory === category ? 'text-slate-900 font-medium' : 'text-slate-600 group-hover:text-slate-900'}`}>{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-3 text-sm uppercase tracking-wider">City</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="city" 
                      checked={selectedCity === ''}
                      onChange={() => setSelectedCity('')}
                      className="focus:ring-2"
                      style={{ color: bank.color, '--tw-ring-color': bank.color } as React.CSSProperties}
                    />
                    <span className={`text-sm ${selectedCity === '' ? 'text-slate-900 font-medium' : 'text-slate-600 group-hover:text-slate-900'}`}>All Cities</span>
                  </label>
                  {cities.map(city => (
                    <label key={city} className="flex items-center space-x-2 cursor-pointer group">
                      <input 
                        type="radio" 
                        name="city" 
                        checked={selectedCity === city}
                        onChange={() => setSelectedCity(city)}
                        className="focus:ring-2"
                        style={{ color: bank.color, '--tw-ring-color': bank.color } as React.CSSProperties}
                      />
                      <span className={`text-sm ${selectedCity === city ? 'text-slate-900 font-medium' : 'text-slate-600 group-hover:text-slate-900'}`}>{city}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Results List */}
          <div className="flex-grow">
            {viewMode === 'list' ? (
              <>
                <div className="mb-6 flex justify-between items-center">
                  <p className="text-slate-600">Showing <span className="font-bold text-slate-900">{filteredBusinesses.length}</span> results</p>
                  
                  <div className="flex items-center space-x-2 text-sm text-slate-500">
                    <span>Sort by:</span>
                    <select className="bg-transparent font-medium text-slate-900 focus:outline-none cursor-pointer">
                      <option>Recommended</option>
                      <option>Highest Rated</option>
                      <option>Most Reviewed</option>
                    </select>
                  </div>
                </div>

                {filteredBusinesses.length === 0 ? (
                  <div className="bg-white rounded-xl p-12 text-center border border-slate-100 shadow-sm">
                    <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="text-slate-400" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">No businesses found</h3>
                    <p className="text-slate-500 max-w-md mx-auto">
                      We couldn't find any businesses matching your search criteria. Try adjusting your filters or search term.
                    </p>
                    <button 
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('');
                        setSelectedCity('');
                      }}
                      className="mt-6 text-yellow-600 font-bold hover:text-yellow-700 hover:underline"
                    >
                      Clear all filters
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {filteredBusinesses.map(business => (
                      <Link 
                        to={`/bank/${bankId}/businesses/${business.id}`} 
                        key={business.id}
                        className="block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 group"
                      >
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-64 h-48 md:h-auto relative overflow-hidden bg-slate-200">
                            <img 
                              src={business.coverUrl} 
                              alt={business.name} 
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-slate-900 shadow-sm">
                              {business.category}
                            </div>
                          </div>
                          
                          <div className="p-6 flex-grow flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-yellow-600 transition-colors">{business.name}</h3>
                                {business.verified && (
                                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium flex items-center">
                                    <CheckCircle size={12} className="mr-1" />
                                    Verified
                                  </span>
                                )}
                              </div>
                              
                              <div className="flex items-center space-x-4 mb-4 text-sm">
                                <div className="flex items-center text-yellow-500 font-bold">
                                  <Star size={16} className="fill-yellow-500 mr-1" />
                                  {business.rating}
                                  <span className="text-slate-400 font-normal ml-1">({business.reviews} reviews)</span>
                                </div>
                                <div className="flex items-center text-slate-500">
                                  <MapPin size={16} className="mr-1" />
                                  {business.city}
                                </div>
                              </div>
                              
                              <p className="text-slate-600 text-sm line-clamp-2 mb-4">{business.description}</p>
                              
                              <div className="flex flex-wrap gap-2">
                                {business.products.slice(0, 2).map(product => (
                                  <span key={product.id} className="bg-slate-50 text-slate-600 text-xs px-2 py-1 rounded border border-slate-100">
                                    {product.name}
                                  </span>
                                ))}
                                {business.services.slice(0, 2).map(service => (
                                  <span key={service.id} className="bg-slate-50 text-slate-600 text-xs px-2 py-1 rounded border border-slate-100">
                                    {service.name}
                                  </span>
                                ))}
                                {(business.products.length + business.services.length) > 4 && (
                                  <span className="text-slate-400 text-xs px-2 py-1">+{business.products.length + business.services.length - 4} more</span>
                                )}
                              </div>
                            </div>
                            
                            <div className="mt-6 pt-4 border-t border-slate-50 flex justify-between items-center">
                              <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                                Partner: {business.bankAffiliation}
                              </span>
                              <span className="text-yellow-600 font-bold text-sm group-hover:translate-x-1 transition-transform flex items-center">
                                View Details <ArrowRight size={16} className="ml-1" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <BusinessMap businesses={filteredBusinesses} bankId={bankId || ''} />
            )}
          </div>
      </div>
      
      <AddBusinessModal 
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddBusiness}
        bankId={bankId || ''}
        bankName={bank.name}
      />
    </div>
  );
}


