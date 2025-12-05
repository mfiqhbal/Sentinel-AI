import React from 'react';
import { ArrowRight, ShieldCheck, Activity } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden grid-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950 pointer-events-none"></div>
      
      {/* Decorative Glows */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-accent/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-widest mb-6 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
          System Online v2.4
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
          AI Firearm Detection <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
            For Safer Environments
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
          Proactive security powered by advanced Computer Vision. 
          Detect weapons in real-time, trigger instant alerts, and protect what matters most with 99.8% accuracy.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#demo" className="w-full sm:w-auto px-8 py-4 bg-brand-accent hover:bg-red-600 text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(239,68,68,0.4)] flex items-center justify-center gap-2 group">
            Try Live Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#how-it-works" className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
            Learn More
          </a>
        </div>

        <div className="mt-16 flex justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
            <span className="font-semibold text-sm">GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <Activity className="w-6 h-6 text-blue-400" />
            <span className="font-semibold text-sm">99.9% Uptime</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="font-bold text-xl">YOLO<span className="text-brand-accent">v8</span></div>
            <span className="font-semibold text-sm">Powered</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;