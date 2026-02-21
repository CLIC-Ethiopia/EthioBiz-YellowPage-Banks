import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockBanks, mockBusinesses } from '../data/mockData';
import { Building2, Users, ArrowRight, TrendingUp } from 'lucide-react';
import BankLogo from '../components/BankLogo';

export default function BankDashboard() {
  const { bankId } = useParams<{ bankId: string }>();
  const bank = mockBanks.find(b => b.id === bankId);
  const businesses = mockBusinesses.filter(b => b.bankId === bankId);

  if (!bank) {
    return <div>Bank not found</div>;
  }

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-6 mb-6 md:mb-0">
          <div className="w-24 h-24 rounded-full bg-slate-50 p-4 border border-slate-100 shadow-sm">
            <BankLogo name={bank.name} logo={bank.logo} className="w-full h-full" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2" style={{ color: bank.color }}>{bank.name}</h1>
            <p className="text-slate-500 text-lg">Business Customer Directory</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <Link 
            to={`/bank/${bankId}/businesses`}
            style={{ backgroundColor: bank.color }}
            className="text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity shadow-sm flex items-center space-x-2"
          >
            <Building2 size={20} />
            <span>Browse Businesses</span>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-500 font-medium text-sm uppercase tracking-wider">Total Businesses</h3>
            <div className="bg-blue-50 text-blue-600 p-2 rounded-lg">
              <Building2 size={20} />
            </div>
          </div>
          <p className="text-4xl font-bold text-slate-900">{businesses.length}</p>
          <div className="mt-4 text-sm text-green-600 flex items-center">
            <TrendingUp size={16} className="mr-1" />
            <span>+12% this month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-500 font-medium text-sm uppercase tracking-wider">Active Customers</h3>
            <div className="bg-green-50 text-green-600 p-2 rounded-lg">
              <Users size={20} />
            </div>
          </div>
          <p className="text-4xl font-bold text-slate-900">1,240</p>
          <div className="mt-4 text-sm text-green-600 flex items-center">
            <TrendingUp size={16} className="mr-1" />
            <span>+5% this week</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-500 font-medium text-sm uppercase tracking-wider">Top Category</h3>
            <div className="bg-purple-50 text-purple-600 p-2 rounded-lg">
              <TrendingUp size={20} />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900 truncate">Manufacturing</p>
          <div className="mt-4 text-sm text-slate-400">
            Most popular sector
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900">Featured Businesses</h2>
          <Link to={`/bank/${bankId}/businesses`} className="text-yellow-600 font-bold hover:text-yellow-700 flex items-center space-x-1 text-sm">
            <span>View All</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {businesses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses.slice(0, 3).map(business => (
              <Link 
                key={business.id} 
                to={`/bank/${bankId}/businesses/${business.id}`}
                className="group block border border-slate-100 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <div className="h-40 bg-slate-100 relative overflow-hidden">
                  <img 
                    src={business.coverUrl} 
                    alt={business.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-slate-900 shadow-sm">
                    {business.category}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <img src={business.logoUrl} alt={business.name} className="w-10 h-10 rounded-lg object-cover border border-slate-100" />
                    <h3 className="font-bold text-slate-900 truncate group-hover:text-yellow-600 transition-colors">{business.name}</h3>
                  </div>
                  <p className="text-slate-500 text-sm line-clamp-2 mb-4">{business.description}</p>
                  <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-50 pt-3">
                    <span>{business.city}</span>
                    <span className="flex items-center text-yellow-500 font-bold">
                      {business.rating} ★
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-slate-500">
            No businesses found for this bank yet.
          </div>
        )}
      </div>
    </div>
  );
}
