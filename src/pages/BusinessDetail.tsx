import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, CheckCircle, Star, ArrowLeft, Share2, Heart, CreditCard, Calendar, FileText, Tag, Wifi, Clock, Smartphone, Bookmark, MessageSquare, Settings } from 'lucide-react';
import { mockBusinesses, mockBanks } from '../data/mockData';

export default function BusinessDetail() {
  const { bankId, id } = useParams<{ bankId: string, id: string }>();
  const business = mockBusinesses.find(b => b.id === id);
  const bank = mockBanks.find(b => b.id === bankId);
  const [isSaved, setIsSaved] = useState(false);

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

  const getFeatureIcon = (feature: string) => {
    switch (feature) {
      case 'Open Now': return <Clock size={16} />;
      case 'Accepts Mobile Money': return <Smartphone size={16} />;
      case 'Pay with Tele Birr': return <CreditCard size={16} />;
      default: return <CheckCircle size={16} />;
    }
  };

  const getVerificationBadge = () => {
    if (!business.verified) return null;
    
    let colorClass = "bg-green-900/30 text-green-400";
    let label = "Verified";
    let icon = <CheckCircle size={14} className="mr-1" />;

    if (business.verificationTier === 'Gold') {
      colorClass = "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30";
      label = "Gold Verified";
    } else if (business.verificationTier === 'Platinum') {
      colorClass = "bg-slate-500/30 text-slate-200 border border-slate-400/30";
      label = "Platinum Partner";
    } else if (business.verificationTier === 'Silver') {
      colorClass = "bg-slate-400/20 text-slate-300";
      label = "Silver Member";
    }

    return (
      <span className={`flex items-center text-sm font-medium px-2 py-1 rounded backdrop-blur-sm ${colorClass}`}>
        {icon}
        {label}
      </span>
    );
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24 md:pb-20 relative">
      {/* Hero Header */}
      <div className="relative h-64 md:h-96 bg-slate-900 rounded-b-2xl md:rounded-2xl overflow-hidden mb-8">
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
                {getVerificationBadge()}
                {business.priceLevel && (
                  <span className="text-slate-300 font-medium bg-white/10 px-2 py-1 rounded backdrop-blur-sm">
                    {business.priceLevel}
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

            <div className="flex space-x-3 mb-4 md:mb-0 hidden md:flex">
              <button 
                onClick={() => setIsSaved(!isSaved)}
                className={`backdrop-blur-md p-3 rounded-full transition-colors ${isSaved ? 'bg-yellow-400 text-slate-900' : 'bg-white/10 text-white hover:bg-white/20'}`}
              >
                <Bookmark size={20} className={isSaved ? "fill-current" : ""} />
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/20 transition-colors">
                <Share2 size={20} />
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/20 transition-colors">
                <Heart size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 md:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Features */}
            {business.features && business.features.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {business.features.map((feature, index) => (
                  <span key={index} className="flex items-center bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-full text-sm font-medium shadow-sm">
                    <span className="mr-2 text-slate-400">{getFeatureIcon(feature)}</span>
                    {feature}
                  </span>
                ))}
              </div>
            )}

            {/* Offers Section */}
            {business.offers && business.offers.length > 0 && (
              <section className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-xl"></div>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <Tag className="mr-2 text-yellow-600" /> Exclusive Offers
                </h2>
                <div className="space-y-4 relative z-10">
                  {business.offers.map(offer => (
                    <div key={offer.id} className="bg-white p-4 rounded-xl border border-yellow-100 shadow-sm flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-slate-900">{offer.title}</h3>
                        <p className="text-slate-600 text-sm mt-1">{offer.description}</p>
                        {offer.expiryDate && (
                          <p className="text-xs text-slate-400 mt-2">Expires: {offer.expiryDate}</p>
                        )}
                      </div>
                      {offer.discount && (
                        <span className="bg-yellow-100 text-yellow-800 font-bold px-3 py-1 rounded-lg text-sm">
                          {offer.discount}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

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

            {/* Reviews Section */}
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center">
                  <MessageSquare className="mr-2 text-yellow-500" /> Reviews
                </h2>
                <button className="text-yellow-600 font-bold text-sm hover:underline">Write a Review</button>
              </div>
              
              {business.reviewsList && business.reviewsList.length > 0 ? (
                <div className="space-y-6">
                  {business.reviewsList.map(review => (
                    <div key={review.id} className="border-b border-slate-100 last:border-0 pb-6 last:pb-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold mr-3">
                            {review.userName.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900">{review.userName}</h4>
                            <span className="text-xs text-slate-400">{review.date}</span>
                          </div>
                        </div>
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className={i < review.rating ? "fill-current" : "text-slate-200"} />
                          ))}
                        </div>
                      </div>
                      <p className="text-slate-600 mb-3">{review.comment}</p>
                      
                      {review.reply && (
                        <div className="bg-slate-50 p-4 rounded-lg ml-8 border-l-2 border-yellow-400">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-bold text-slate-900">Response from Owner</span>
                            <span className="text-xs text-slate-400">{review.reply.date}</span>
                          </div>
                          <p className="text-slate-600 text-sm">{review.reply.text}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-slate-500 italic">No reviews yet. Be the first to review!</p>
              )}
            </section>
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

                <div className="mt-6 text-center">
                  {business.isClaimed ? (
                    <Link to={`/business/${business.id}/dashboard`} className="text-sm font-bold text-slate-400 hover:text-slate-600 flex items-center justify-center">
                      <Settings size={14} className="mr-1" /> Manage this listing
                    </Link>
                  ) : (
                    <Link to={`/business/${business.id}/claim`} className="text-sm font-bold text-slate-400 hover:text-slate-600 flex items-center justify-center">
                      <CheckCircle size={14} className="mr-1" /> Own this business? Claim it
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Mobile Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 md:hidden z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="grid grid-cols-3 gap-2">
          <button 
            style={{ backgroundColor: bank?.color || '#000' }}
            className="col-span-1 text-white py-3 rounded-lg font-bold flex flex-col items-center justify-center text-xs shadow-md active:scale-95 transition-transform"
          >
            <CreditCard size={18} className="mb-1" />
            Pay
          </button>
          <button className="col-span-1 bg-slate-100 text-slate-900 py-3 rounded-lg font-bold flex flex-col items-center justify-center text-xs border border-slate-200 active:bg-slate-200 transition-colors">
            <Calendar size={18} className="mb-1" />
            Book
          </button>
          <button className="col-span-1 bg-slate-100 text-slate-900 py-3 rounded-lg font-bold flex flex-col items-center justify-center text-xs border border-slate-200 active:bg-slate-200 transition-colors">
            <FileText size={18} className="mb-1" />
            Quote
          </button>
        </div>
      </div>
    </div>
  );
}
