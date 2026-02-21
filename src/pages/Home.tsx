import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { mockBanks } from '../data/mockData';
import { Building2, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Helmet>
        <title>Addis Business Directory - Find Verified Businesses in Ethiopia</title>
        <meta name="description" content="Discover verified businesses from top banks in Ethiopia. Find restaurants, hotels, shops, and services in Addis Ababa and beyond." />
        <meta property="og:title" content="Addis Business Directory" />
        <meta property="og:description" content="Discover verified businesses from top banks in Ethiopia." />
      </Helmet>
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Welcome to EthioBiz Directory</h1>
        <p className="text-slate-600 text-lg mb-8">
          Select a bank from the sidebar to view its verified business customers and their offerings.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockBanks.map(bank => (
            <Link 
              key={bank.id} 
              to={`/bank/${bank.id}`}
              className="group block bg-white border border-slate-200 rounded-xl p-6 hover:border-yellow-400 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-slate-50 p-2 border border-slate-100 group-hover:bg-yellow-50 transition-colors">
                  <img src={bank.logo} alt={bank.name} className="w-full h-full object-contain" />
                </div>
                <ArrowRight size={20} className="text-slate-300 group-hover:text-yellow-500 transition-colors" />
              </div>
              <h3 className="font-bold text-slate-900 group-hover:text-yellow-700 transition-colors mb-1">{bank.name}</h3>
              <p className="text-sm text-slate-500">View Business Directory</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-4">For Business Owners</h2>
            <p className="text-slate-300 mb-6">
              Are you a customer of one of our partner banks? List your business today to reach thousands of potential customers.
            </p>
            <button className="bg-yellow-400 text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors">
              Register Now
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Latest Updates</h2>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3 pb-4 border-b border-slate-50">
              <div className="bg-green-100 text-green-600 p-2 rounded-lg shrink-0">
                <Building2 size={16} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">New Partner Added</h4>
                <p className="text-xs text-slate-500">Oromia Bank has joined the EthioBiz network.</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-600 p-2 rounded-lg shrink-0">
                <Building2 size={16} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Platform Update</h4>
                <p className="text-xs text-slate-500">Enhanced search functionality is now live.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
