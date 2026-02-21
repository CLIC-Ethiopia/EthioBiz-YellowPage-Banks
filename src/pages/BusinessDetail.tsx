import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, CheckCircle, Star, ArrowLeft, Share2, Heart } from 'lucide-react';
import { mockBusinesses } from '../data/mockData';

export default function BusinessDetail() {
  const { bankId, id } = useParams<{ bankId: string, id: string }>();
  const business = mockBusinesses.find(b => b.id === id);

  if (!business) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Business Not Found</h2>
          <p className="text-slate-500 mb-8">The business you are looking for does not exist or has been removed.</p>
          <Link to={`/bank/${bankId}/businesses`} className="bg-yellow-400 text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors">
            Browse Businesses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Hero Header */}
      <div className="relative h-64 md:h-96 bg-slate-900 rounded-2xl overflow-hidden mb-8">
        <img 
          src={business.coverUrl} 
          alt={business.name} 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        
        <div className="absolute top-6 left-6">
          <Link to={`/bank/${bankId}/businesses`} className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full font-medium hover:bg-white/30 transition-colors flex items-center space-x-2">
            <ArrowLeft size={18} />
            <span>Back to List</span>
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-8 md:pb-12">
          <div className="flex flex-col md:flex-row items-end md:items-center gap-6">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-xl p-2 shadow-lg -mb-12 md:mb-0 relative z-10">
              <img 
                src={business.logoUrl} 
                alt={business.name} 
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            
            <div className="flex-grow text-white mb-4 md:mb-0">
              <div className="flex items-center space-x-3 mb-2">
                <span className="bg-yellow-400 text-slate-900 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
                  {business.category}
                </span>
                {business.verified && (
                  <span className="flex items-center text-green-400 text-sm font-medium bg-green-900/30 px-2 py-1 rounded backdrop-blur-sm">
                    <CheckCircle size={14} className="mr-1" />
                    Verified
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-2">{business.name}</h1>
              <div className="flex items-center space-x-4 text-slate-300 text-sm md:text-base">
                <div className="flex items-center">
                  <MapPin size={18} className="mr-1 text-yellow-400" />
                  {business.city}, Ethiopia
                </div>
                <div className="flex items-center">
                  <Star size={18} className="mr-1 text-yellow-400 fill-yellow-400" />
                  <span className="text-white font-bold mr-1">{business.rating}</span>
                  <span>({business.reviews} reviews)</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-3 mb-4 md:mb-0">
              <button className="bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/20 transition-colors">
                <Share2 size={20} />
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/20 transition-colors">
                <Heart size={20} />
              </button>
              <button className="bg-yellow-400 text-slate-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors shadow-lg">
                Contact Business
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 md:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">About Us</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {business.description}
              </p>
            </section>

            {/* Products Section */}
            {business.products.length > 0 && (
              <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {business.products.map(product => (
                    <div key={product.id} className="border border-slate-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow group">
                      <div className="h-48 bg-slate-100 overflow-hidden">
                        <img 
                          src={product.imageUrl} 
                          alt={product.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-slate-900 text-lg">{product.name}</h3>
                          {product.price > 0 && (
                            <span className="bg-slate-100 text-slate-900 font-bold px-2 py-1 rounded text-sm">
                              {product.price.toLocaleString()} ETB
                            </span>
                          )}
                        </div>
                        <p className="text-slate-500 text-sm mb-4">{product.description}</p>
                        <button className="w-full border border-slate-200 text-slate-700 font-medium py-2 rounded-lg hover:bg-slate-50 transition-colors text-sm">
                          Inquire
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Services Section */}
            {business.services.length > 0 && (
              <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Services</h2>
                <div className="space-y-4">
                  {business.services.map(service => (
                    <div key={service.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
                      <div>
                        <h3 className="font-bold text-slate-900 text-lg mb-1">{service.name}</h3>
                        <p className="text-slate-500 text-sm">{service.description}</p>
                      </div>
                      {service.priceRange && (
                        <div className="mt-2 sm:mt-0 bg-yellow-50 text-yellow-700 font-medium px-3 py-1 rounded-lg text-sm whitespace-nowrap">
                          {service.priceRange}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 sticky top-24">
              <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Contact Information</h3>
              
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="bg-yellow-50 p-2 rounded-lg text-yellow-600 mr-4 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Address</span>
                    <span className="text-slate-700 font-medium">{business.address}</span>
                    <span className="block text-slate-500 text-sm">{business.city}</span>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-yellow-50 p-2 rounded-lg text-yellow-600 mr-4 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Phone</span>
                    <a href={`tel:${business.phone}`} className="text-slate-700 font-medium hover:text-yellow-600 transition-colors">
                      {business.phone}
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-yellow-50 p-2 rounded-lg text-yellow-600 mr-4 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email</span>
                    <a href={`mailto:${business.email}`} className="text-slate-700 font-medium hover:text-yellow-600 transition-colors">
                      {business.email}
                    </a>
                  </div>
                </li>
                
                {business.website && (
                  <li className="flex items-start">
                    <div className="bg-yellow-50 p-2 rounded-lg text-yellow-600 mr-4 shrink-0">
                      <Globe size={20} />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Website</span>
                      <a href={`https://${business.website}`} target="_blank" rel="noopener noreferrer" className="text-slate-700 font-medium hover:text-yellow-600 transition-colors">
                        {business.website}
                      </a>
                    </div>
                  </li>
                )}
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Banking Partner</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-xs font-bold text-slate-500">
                      {business.bankAffiliation.charAt(0)}
                    </div>
                    <span className="font-bold text-slate-700">{business.bankAffiliation}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
