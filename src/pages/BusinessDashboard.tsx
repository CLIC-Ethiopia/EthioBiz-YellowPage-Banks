import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockBusinesses } from '../data/mockData';
import { BarChart, Activity, Users, PhoneCall, MessageSquare, Settings, Edit, ArrowLeft } from 'lucide-react';

export default function BusinessDashboard() {
  const { id } = useParams<{ id: string }>();
  const business = mockBusinesses.find(b => b.id === id);

  if (!business) {
    return <div className="p-8 text-center">Business not found</div>;
  }

  // Mock Analytics Data
  const stats = {
    viewsToday: 124,
    viewsWeek: 856,
    callsToday: 12,
    callsWeek: 45,
    reviewsNew: 3,
    ratingAvg: 4.8
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header */}
      <header className="bg-slate-900 text-white p-6 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to={`/bank/${business.bankId}/businesses/${id}`} className="text-slate-400 hover:text-white transition-colors">
              <ArrowLeft size={24} />
            </Link>
            <h1 className="text-xl font-bold">{business.name} <span className="text-slate-500 font-normal text-sm ml-2">Dashboard</span></h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-slate-800 rounded-full transition-colors relative">
              <MessageSquare size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 hover:bg-slate-800 rounded-full transition-colors">
              <Settings size={20} />
            </button>
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-xs">
              {business.name.charAt(0)}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Quick Stats Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-1">Profile Views</p>
              <h3 className="text-3xl font-bold text-slate-900">{stats.viewsToday}</h3>
              <span className="text-green-500 text-xs font-bold flex items-center mt-2">
                <Activity size={12} className="mr-1" /> +12% vs yesterday
              </span>
            </div>
            <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
              <Users size={24} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-1">Call Clicks</p>
              <h3 className="text-3xl font-bold text-slate-900">{stats.callsToday}</h3>
              <span className="text-green-500 text-xs font-bold flex items-center mt-2">
                <Activity size={12} className="mr-1" /> +5% vs yesterday
              </span>
            </div>
            <div className="bg-green-50 p-3 rounded-xl text-green-600">
              <PhoneCall size={24} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-1">New Reviews</p>
              <h3 className="text-3xl font-bold text-slate-900">{stats.reviewsNew}</h3>
              <span className="text-slate-400 text-xs mt-2 block">
                Last 7 days
              </span>
            </div>
            <div className="bg-yellow-50 p-3 rounded-xl text-yellow-600">
              <MessageSquare size={24} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider mb-1">Avg Rating</p>
              <h3 className="text-3xl font-bold text-slate-900">{stats.ratingAvg}</h3>
              <span className="text-slate-400 text-xs mt-2 block">
                From {business.reviews} reviews
              </span>
            </div>
            <div className="bg-purple-50 p-3 rounded-xl text-purple-600">
              <BarChart size={24} />
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity / Feed */}
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900">Recent Reviews</h2>
                <Link to="#" className="text-yellow-600 text-sm font-bold hover:underline">View All</Link>
              </div>
              
              <div className="space-y-6">
                {/* Mock Review Item */}
                <div className="border-b border-slate-100 pb-6 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-xs font-bold text-slate-500">
                        JD
                      </div>
                      <span className="font-bold text-slate-900 text-sm">John Doe</span>
                    </div>
                    <span className="text-xs text-slate-400">2 hours ago</span>
                  </div>
                  <p className="text-slate-600 text-sm mb-3">
                    "Great service! I really enjoyed the coffee."
                  </p>
                  <div className="flex space-x-3">
                    <button className="text-yellow-600 text-xs font-bold hover:underline">Reply</button>
                    <button className="text-slate-400 text-xs hover:text-slate-600">Report</button>
                  </div>
                </div>
                 {/* Mock Review Item 2 */}
                 <div className="border-b border-slate-100 pb-6 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-xs font-bold text-slate-500">
                        SM
                      </div>
                      <span className="font-bold text-slate-900 text-sm">Sarah Miller</span>
                    </div>
                    <span className="text-xs text-slate-400">1 day ago</span>
                  </div>
                  <p className="text-slate-600 text-sm mb-3">
                    "The atmosphere was nice but the wait time was a bit long."
                  </p>
                  <div className="flex space-x-3">
                    <button className="text-yellow-600 text-xs font-bold hover:underline">Reply</button>
                    <button className="text-slate-400 text-xs hover:text-slate-600">Report</button>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Performance Overview</h2>
              <div className="h-64 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400">
                {/* Placeholder for a real chart library like Recharts */}
                <p>Chart Visualization Placeholder (Views vs Clicks)</p>
              </div>
            </section>
          </div>

          {/* Sidebar Actions */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors text-left group">
                  <span className="font-medium text-slate-700 group-hover:text-slate-900">Edit Business Info</span>
                  <Edit size={16} className="text-slate-400 group-hover:text-slate-600" />
                </button>
                <button className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors text-left group">
                  <span className="font-medium text-slate-700 group-hover:text-slate-900">Update Opening Hours</span>
                  <Clock size={16} className="text-slate-400 group-hover:text-slate-600" />
                </button>
                <button className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors text-left group">
                  <span className="font-medium text-slate-700 group-hover:text-slate-900">Manage Photos</span>
                  <Settings size={16} className="text-slate-400 group-hover:text-slate-600" />
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 text-white shadow-lg">
              <h3 className="text-lg font-bold mb-2">Upgrade to Platinum</h3>
              <p className="text-white/90 text-sm mb-4">
                Get verified badge, advanced analytics, and priority support.
              </p>
              <button className="w-full bg-white text-orange-600 py-2 rounded-lg font-bold text-sm hover:bg-orange-50 transition-colors">
                View Plans
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper component for icons used in Quick Actions
function Clock({ size, className }: { size: number, className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
}
