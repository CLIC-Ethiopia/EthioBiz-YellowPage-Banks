import { useParams, Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { 
  ArrowLeft, Star, MapPin, Phone, Mail, Globe, 
  Building2, CheckCircle2, Package, Briefcase, ChevronRight 
} from 'lucide-react';
import { motion } from 'motion/react';

export default function BusinessProfile() {
  const { id } = useParams<{ id: string }>();
  const { businesses } = useData();
  const business = businesses.find(b => b.id === id);

  if (!business) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Business Not Found</h2>
          <Link to="/" className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center gap-2 justify-center">
            <ArrowLeft className="w-4 h-4" /> Back to Directory
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-slate-50 font-sans pb-20"
    >
      {/* Header / Cover */}
      <div className="relative h-64 md:h-96 w-full bg-slate-900">
        <img 
          src={business.coverUrl} 
          alt={`${business.name} cover`} 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        
        <div className="absolute top-4 left-4 md:top-8 md:left-8 z-10">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 px-4 py-2 rounded-full backdrop-blur-md transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back</span>
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <div className="max-w-7xl mx-auto px-4 md:px-8 pb-8 flex flex-col md:flex-row items-end gap-6">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-white p-2 shadow-2xl shrink-0 -mb-12 md:-mb-16 relative z-20 border-4 border-slate-50">
              <img 
                src={business.logoUrl} 
                alt={`${business.name} logo`} 
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1 text-white pb-2 md:pb-0">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-yellow-400 text-slate-900 text-xs font-bold uppercase tracking-wider rounded-full">
                  {business.category}
                </span>
                {business.verified && (
                  <span className="flex items-center gap-1 text-blue-400 text-sm font-medium bg-blue-400/10 px-2 py-1 rounded-full backdrop-blur-sm border border-blue-400/20">
                    <CheckCircle2 className="w-4 h-4" /> Verified Business
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
                {business.name}
              </h1>
              <div className="flex items-center gap-4 text-slate-200 text-sm md:text-base">
                <div className="flex items-center gap-1.5">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-semibold text-white">{business.rating}</span>
                  <span className="opacity-80">({business.reviews} reviews)</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 opacity-80" />
                  <span>{business.city}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-20 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* About Section */}
            <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                About Us
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {business.description}
              </p>
            </section>

            {/* Products Section */}
            {business.products.length > 0 && (
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                    <Package className="w-6 h-6 text-yellow-500" /> Products
                  </h2>
                  <button className="text-sm font-medium text-yellow-600 hover:text-yellow-700 flex items-center">
                    View All <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {business.products.map(product => (
                    <div key={product.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group">
                      <div className="h-48 overflow-hidden bg-slate-100">
                        <img 
                          src={product.imageUrl} 
                          alt={product.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{product.name}</h3>
                        <p className="text-slate-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                        <div className="flex items-center justify-between mt-auto">
                          <span className="text-xl font-bold text-slate-900">
                            {product.price.toLocaleString()} <span className="text-sm font-medium text-slate-500">ETB</span>
                          </span>
                          <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 text-sm font-medium rounded-lg transition-colors">
                            Inquire
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Services Section */}
            {business.services.length > 0 && (
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                    <Briefcase className="w-6 h-6 text-yellow-500" /> Services
                  </h2>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {business.services.map(service => (
                    <div key={service.id} className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-yellow-400 transition-colors">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">{service.name}</h3>
                        <p className="text-slate-600 text-sm">{service.description}</p>
                      </div>
                      {service.priceRange && (
                        <div className="shrink-0 md:text-right">
                          <span className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Price Range</span>
                          <span className="inline-block px-3 py-1 bg-slate-100 text-slate-800 text-sm font-semibold rounded-lg">
                            {service.priceRange}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            
            {/* Contact Card */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 sticky top-24">
              <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Contact Information</h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 mb-0.5">Address</p>
                    <p className="text-sm text-slate-600">{business.address}, {business.city}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 mb-0.5">Phone</p>
                    <a href={`tel:${business.phone}`} className="text-sm text-slate-600 hover:text-yellow-600 transition-colors">
                      {business.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 mb-0.5">Email</p>
                    <a href={`mailto:${business.email}`} className="text-sm text-slate-600 hover:text-yellow-600 transition-colors">
                      {business.email}
                    </a>
                  </div>
                </div>

                {business.website && (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center shrink-0">
                      <Globe className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900 mb-0.5">Website</p>
                      <a href={`https://${business.website}`} target="_blank" rel="noopener noreferrer" className="text-sm text-yellow-600 hover:text-yellow-700 transition-colors font-medium">
                        {business.website}
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">Bank Partner</p>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <Building2 className="w-6 h-6 text-slate-400" />
                  <span className="text-sm font-semibold text-slate-700">{business.bankAffiliation}</span>
                </div>
              </div>

              <button className="w-full mt-6 bg-slate-900 text-white font-medium py-3 rounded-xl hover:bg-slate-800 transition-colors shadow-sm flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" /> Contact Business
              </button>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
}
