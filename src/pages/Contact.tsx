import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Twitter, Github, Cpu, Code, Server, Database, Smartphone, Cloud } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Hero Section */}
      <div className="relative bg-slate-900 rounded-3xl overflow-hidden p-8 md:p-16 text-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(250,204,21,0.1),_transparent_50%)]"></div>
          <div className="grid grid-cols-12 gap-4 h-full w-full opacity-30">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border-r border-slate-700 h-full"></div>
            ))}
          </div>
        </div>
        
        <div className="relative z-10 space-y-6">
          <div className="inline-block p-3 bg-yellow-400/10 rounded-2xl border border-yellow-400/20 backdrop-blur-sm mb-4">
            <Cpu className="text-yellow-400 w-12 h-12 mx-auto" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            FadLab <span className="text-yellow-400">Technologies</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
            Architecting the digital future of Ethiopia. We build smart business operating systems and enterprise-grade solutions.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 h-full">
            <div className="text-center mb-8">
              <div className="w-32 h-32 bg-slate-100 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400&h=400" 
                  alt="Prof. Frehun A. Demissie" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Prof. Frehun A. Demissie</h2>
              <p className="text-yellow-600 font-medium mb-2">CEO & Lead Architect</p>
              <p className="text-slate-500 text-sm">Visionary tech leader specializing in digital transformation and smart systems.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                <div className="bg-white p-2 rounded-lg shadow-sm text-yellow-600">
                  <Mail size={20} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Email</p>
                  <a href="mailto:frehun.demissie@gmail.com" className="text-slate-900 font-medium truncate block hover:text-yellow-600">
                    frehun.demissie@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                <div className="bg-white p-2 rounded-lg shadow-sm text-yellow-600">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Phone</p>
                  <a href="tel:+251911692277" className="text-slate-900 font-medium hover:text-yellow-600">
                    +251 911 69 22 77
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                <div className="bg-white p-2 rounded-lg shadow-sm text-yellow-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Location</p>
                  <p className="text-slate-900 font-medium">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center space-x-4">
              <a href="#" className="p-2 text-slate-400 hover:text-slate-900 transition-colors"><Linkedin size={24} /></a>
              <a href="#" className="p-2 text-slate-400 hover:text-slate-900 transition-colors"><Twitter size={24} /></a>
              <a href="#" className="p-2 text-slate-400 hover:text-slate-900 transition-colors"><Github size={24} /></a>
              <a href="#" className="p-2 text-slate-400 hover:text-slate-900 transition-colors"><Globe size={24} /></a>
            </div>
          </div>
        </div>

        {/* Tech Stack & Services */}
        <div className="lg:col-span-2 space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Code size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Custom Software Development</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Tailored digital solutions designed to meet specific business needs, from web applications to complex enterprise systems.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Smartphone size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Mobile App Ecosystems</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Native and cross-platform mobile applications that drive engagement and provide seamless user experiences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Database size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Big Data & Analytics</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Data-driven insights and infrastructure to help businesses make informed decisions and optimize operations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Cloud size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Cloud Infrastructure</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Scalable, secure, and reliable cloud solutions ensuring your business is always online and performing at its peak.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">Ready to Transform Your Business?</h3>
                <p className="text-slate-400">Let's discuss how FadLab can elevate your digital infrastructure.</p>
              </div>
              <a href="mailto:frehun.demissie@gmail.com" className="bg-yellow-400 text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-yellow-300 transition-colors whitespace-nowrap">
                Start a Project
              </a>
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute right-0 top-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="absolute left-0 bottom-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -ml-12 -mb-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
