import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockBusinesses } from '../data/mockData';
import { CheckCircle, Upload, Phone, Mail, ArrowLeft } from 'lucide-react';

export default function ClaimBusiness() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const business = mockBusinesses.find(b => b.id === id);
  const [verificationMethod, setVerificationMethod] = useState<'phone' | 'email' | 'document'>('phone');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!business) {
    return <div className="p-8 text-center">Business not found</div>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    setIsSubmitted(true);
    setTimeout(() => {
      navigate(`/business/${id}/dashboard`); // Redirect to dashboard after "verification"
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={32} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Verification Submitted!</h2>
          <p className="text-slate-600 mb-6">
            We have received your claim request for <span className="font-bold">{business.name}</span>. 
            Our team will review your documents and contact you shortly.
          </p>
          <p className="text-sm text-slate-400">Redirecting to dashboard demo...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-slate-500 hover:text-slate-700 mb-6 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Business
        </button>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100">
          <div className="bg-slate-900 p-6 text-white">
            <h1 className="text-2xl font-bold mb-2">Claim This Business</h1>
            <p className="text-slate-300">
              Verify your ownership of <span className="font-bold text-white">{business.name}</span> to manage your listing.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Verification Method Selection */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-4 uppercase tracking-wider">
                Choose Verification Method
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  type="button"
                  onClick={() => setVerificationMethod('phone')}
                  className={`p-4 rounded-xl border-2 flex flex-col items-center justify-center transition-all ${
                    verificationMethod === 'phone' 
                      ? 'border-yellow-400 bg-yellow-50 text-yellow-700' 
                      : 'border-slate-100 hover:border-slate-200 text-slate-500'
                  }`}
                >
                  <Phone size={24} className="mb-2" />
                  <span className="font-bold text-sm">Phone Call</span>
                </button>
                <button
                  type="button"
                  onClick={() => setVerificationMethod('email')}
                  className={`p-4 rounded-xl border-2 flex flex-col items-center justify-center transition-all ${
                    verificationMethod === 'email' 
                      ? 'border-yellow-400 bg-yellow-50 text-yellow-700' 
                      : 'border-slate-100 hover:border-slate-200 text-slate-500'
                  }`}
                >
                  <Mail size={24} className="mb-2" />
                  <span className="font-bold text-sm">Email</span>
                </button>
                <button
                  type="button"
                  onClick={() => setVerificationMethod('document')}
                  className={`p-4 rounded-xl border-2 flex flex-col items-center justify-center transition-all ${
                    verificationMethod === 'document' 
                      ? 'border-yellow-400 bg-yellow-50 text-yellow-700' 
                      : 'border-slate-100 hover:border-slate-200 text-slate-500'
                  }`}
                >
                  <Upload size={24} className="mb-2" />
                  <span className="font-bold text-sm">Upload Doc</span>
                </button>
              </div>
            </div>

            {/* Dynamic Form Fields */}
            <div className="space-y-4">
              {verificationMethod === 'phone' && (
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <p className="text-slate-600 mb-4">
                    We will call the business phone number on file: <span className="font-bold">{business.phone}</span>
                  </p>
                  <button type="button" className="text-yellow-600 font-bold text-sm hover:underline">
                    Use a different number?
                  </button>
                </div>
              )}

              {verificationMethod === 'email' && (
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <p className="text-slate-600 mb-4">
                    We will send a verification code to: <span className="font-bold">{business.email}</span>
                  </p>
                  <button type="button" className="text-yellow-600 font-bold text-sm hover:underline">
                    Use a different email?
                  </button>
                </div>
              )}

              {verificationMethod === 'document' && (
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer">
                  <Upload size={32} className="mx-auto text-slate-400 mb-4" />
                  <p className="text-slate-600 font-medium">Click to upload business license</p>
                  <p className="text-slate-400 text-sm mt-2">PDF, JPG, or PNG (Max 5MB)</p>
                </div>
              )}
            </div>

            {/* Owner Details */}
            <div className="space-y-4">
              <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider">
                Owner Information
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
                <input 
                  type="text" 
                  placeholder="Role (e.g., Owner, Manager)" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-yellow-400 text-slate-900 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors shadow-lg shadow-yellow-400/20"
            >
              Verify & Claim Business
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
