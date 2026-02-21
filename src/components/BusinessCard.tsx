import { Star, MapPin, Building, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Business } from '../types';

interface BusinessCardProps {
  business: Business;
}

export default function BusinessCard({ business }: BusinessCardProps) {
  return (
    <Link 
      to={`/business/${business.id}`}
      className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={business.coverUrl} 
          alt={business.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4 flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-white p-1 shadow-lg">
            <img 
              src={business.logoUrl} 
              alt={`${business.name} logo`} 
              className="w-full h-full object-cover rounded-lg"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white leading-tight flex items-center gap-2">
              {business.name}
              {business.verified && <CheckCircle2 className="w-4 h-4 text-blue-400" />}
            </h3>
            <span className="text-xs font-medium text-yellow-400 bg-yellow-400/20 px-2 py-0.5 rounded-full backdrop-blur-sm">
              {business.category}
            </span>
          </div>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <p className="text-sm text-slate-600 line-clamp-2 mb-4 flex-1">
          {business.description}
        </p>

        <div className="space-y-2.5 mb-5">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
            <span className="truncate">{business.city}, {business.address}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Building className="w-4 h-4 text-slate-400 shrink-0" />
            <span className="truncate">{business.bankAffiliation}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="font-semibold text-slate-900">{business.rating}</span>
            <span className="text-xs text-slate-500">({business.reviews})</span>
          </div>
          <div className="flex items-center text-sm font-medium text-yellow-600 group-hover:text-yellow-700 transition-colors">
            View Profile <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
