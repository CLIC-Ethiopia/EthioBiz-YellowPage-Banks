import React, { useState } from 'react';
import { X, Upload, Plus } from 'lucide-react';
import { Business, Product, Service } from '../types';

interface AddBusinessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (business: Business) => void;
  bankId: string;
  bankName: string;
}

export default function AddBusinessModal({ isOpen, onClose, onAdd, bankId, bankName }: AddBusinessModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    address: '',
    city: '',
    phone: '',
    email: '',
    website: '',
    logoUrl: '',
    coverUrl: '',
    keyOfferings: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Parse key offerings into dummy products/services for display
    const offerings = formData.keyOfferings.split(',').map(s => s.trim()).filter(s => s);
    const products: Product[] = offerings.slice(0, 2).map((name, index) => ({
      id: `p-${Date.now()}-${index}`,
      name,
      description: 'New product',
      price: 0,
      imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=400&h=300'
    }));
    
    const services: Service[] = offerings.slice(2).map((name, index) => ({
      id: `s-${Date.now()}-${index}`,
      name,
      description: 'New service',
      priceRange: 'Contact for price'
    }));

    const newBusiness: Business = {
      id: `b-${Date.now()}`,
      name: formData.name,
      category: formData.category,
      description: formData.description,
      address: formData.address,
      city: formData.city,
      phone: formData.phone,
      email: formData.email,
      website: formData.website,
      bankAffiliation: bankName,
      bankId: bankId,
      logoUrl: formData.logoUrl || 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=200&h=200',
      coverUrl: formData.coverUrl || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200&h=400',
      products,
      services,
      rating: 5.0, // New businesses start with 5 stars to encourage them!
      reviews: 1,
      verified: true
    };

    onAdd(newBusiness);
    onClose();
    // Reset form
    setFormData({
      name: '',
      category: '',
      description: '',
      address: '',
      city: '',
      phone: '',
      email: '',
      website: '',
      logoUrl: '',
      coverUrl: '',
      keyOfferings: ''
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-slate-100 p-6 flex items-center justify-between z-10">
          <h2 className="text-2xl font-bold text-slate-900">Add New Business</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <X size={24} className="text-slate-500" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Business Name</label>
              <input
                required
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                placeholder="e.g. Abyssinia Trading"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Category</label>
              <select
                required
                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={formData.category}
                onChange={e => setFormData({...formData, category: e.target.value})}
              >
                <option value="">Select Category</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Technology">Technology</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Construction">Construction</option>
                <option value="Hospitality">Hospitality</option>
                <option value="Retail">Retail</option>
                <option value="Finance">Finance</option>
                <option value="Logistics">Logistics</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="Food & Beverage">Food & Beverage</option>
                <option value="Tourism">Tourism</option>
                <option value="Automotive">Automotive</option>
              </select>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-bold text-slate-700">Description</label>
              <textarea
                required
                rows={3}
                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={formData.description}
                onChange={e => setFormData({...formData, description: e.target.value})}
                placeholder="Describe the business..."
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">City</label>
              <input
                required
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={formData.city}
                onChange={e => setFormData({...formData, city: e.target.value})}
                placeholder="e.g. Addis Ababa"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Address</label>
              <input
                required
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={formData.address}
                onChange={e => setFormData({...formData, address: e.target.value})}
                placeholder="e.g. Bole Road"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Phone</label>
              <input
                required
                type="tel"
                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
                placeholder="+251..."
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Email</label>
              <input
                required
                type="email"
                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                placeholder="contact@business.com"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-bold text-slate-700">Key Offerings (Comma separated)</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={formData.keyOfferings}
                onChange={e => setFormData({...formData, keyOfferings: e.target.value})}
                placeholder="e.g. Coffee Export, Textile Manufacturing, Construction Services"
              />
              <p className="text-xs text-slate-500">These will be displayed as tags on the business card.</p>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Logo URL (Optional)</label>
              <input
                type="url"
                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={formData.logoUrl}
                onChange={e => setFormData({...formData, logoUrl: e.target.value})}
                placeholder="https://..."
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Cover Image URL (Optional)</label>
              <input
                type="url"
                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={formData.coverUrl}
                onChange={e => setFormData({...formData, coverUrl: e.target.value})}
                placeholder="https://..."
              />
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 rounded-lg font-bold text-slate-600 hover:bg-slate-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-lg font-bold bg-yellow-400 text-slate-900 hover:bg-yellow-300 transition-colors flex items-center space-x-2"
            >
              <Plus size={20} />
              <span>Add Business</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
