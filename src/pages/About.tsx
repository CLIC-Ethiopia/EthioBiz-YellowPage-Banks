import React from 'react';
import { Building2, Briefcase, Mail, Phone, Globe, Award, Zap, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Connecting Ethiopian Businesses</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          The premier digital directory platform empowering Ethiopian banks to showcase their business customers to the world.
        </p>
      </div>

      {/* Mission Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Empowering Bank Customers</h2>
          <p className="text-slate-600 leading-relaxed">
            Our platform serves as a bridge between Ethiopian banks and the global market. By digitizing business directories, we enable banks to provide value-added services to their corporate clients, giving them visibility and access to new opportunities.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-yellow-100 p-2 rounded-lg text-yellow-700 mr-4 mt-1"><Zap size={20} /></div>
              <div>
                <h3 className="font-bold text-slate-900">Digital Visibility</h3>
                <p className="text-slate-600 text-sm">Instant online presence for bank-verified businesses.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-yellow-100 p-2 rounded-lg text-yellow-700 mr-4 mt-1"><Shield size={20} /></div>
              <div>
                <h3 className="font-bold text-slate-900">Verified Trust</h3>
                <p className="text-slate-600 text-sm">Customers trust businesses verified by their banking partners.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-slate-100 rounded-2xl p-8 h-full min-h-[300px] flex items-center justify-center">
             <div className="text-center space-y-4">
                <div className="inline-block p-4 bg-white rounded-full shadow-sm mb-4">
                    <Globe size={48} className="text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Global Reach</h3>
                <p className="text-slate-500">Connecting local businesses to international markets</p>
             </div>
        </div>
      </div>

      {/* Registration Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow text-center space-y-6">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto">
                <Building2 size={32} />
            </div>
            <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Register as Bank</h3>
                <p className="text-slate-600">Join our network to provide digital value to your corporate customers.</p>
            </div>
            <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors w-full">
                Partner With Us
            </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow text-center space-y-6">
            <div className="w-16 h-16 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center mx-auto">
                <Briefcase size={32} />
            </div>
            <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Register as Business</h3>
                <p className="text-slate-600">Get listed through your bank and reach customers worldwide.</p>
            </div>
            <button className="bg-yellow-400 text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-yellow-300 transition-colors w-full">
                Get Listed
            </button>
        </div>
      </div>

      {/* Developer Footer */}
      <div className="border-t border-slate-200 pt-12 mt-12">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-yellow-400 mb-1">Prof. Frehun A. Demissie</h2>
                        <p className="text-slate-400 font-medium">CEO of FadLab</p>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                        FadLab is a smart businesses operating systems developer tech company based in Addis Ababa, dedicated to transforming the Ethiopian digital landscape through innovative solutions.
                    </p>
                    <div className="space-y-3 pt-4">
                        <a href="mailto:frehun.demissie@gmail.com" className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors">
                            <Mail size={20} className="text-yellow-400" />
                            <span>frehun.demissie@gmail.com</span>
                        </a>
                        <a href="tel:+251911692277" className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors">
                            <Phone size={20} className="text-yellow-400" />
                            <span>+251 911 69 22 77</span>
                        </a>
                    </div>
                </div>
                <div className="flex justify-center md:justify-end">
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center">
                        <Award size={48} className="text-yellow-400 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">FadLab Technologies</h3>
                        <p className="text-slate-400 text-sm">Innovating for Ethiopia's Future</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
