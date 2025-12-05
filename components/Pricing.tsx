import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
            <p className="text-slate-400 mb-6">For testing and small proofs of concept.</p>
            <div className="text-4xl font-bold text-white mb-6">Free</div>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-slate-300">
                <Check className="w-5 h-5 text-emerald-500" /> Image Upload Detection
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Check className="w-5 h-5 text-emerald-500" /> Basic API Access
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Check className="w-5 h-5 text-emerald-500" /> Community Support
              </li>
            </ul>
            
            <button className="w-full py-3 rounded-xl border border-slate-700 text-white font-bold hover:bg-slate-800 transition-colors">
              Start for Free
            </button>
          </div>

          {/* Pro Tier */}
          <div className="bg-slate-950 p-8 rounded-2xl border border-brand-accent/50 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 bg-brand-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
            <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
            <p className="text-slate-400 mb-6">Full real-time protection for your facility.</p>
            <div className="text-4xl font-bold text-white mb-6">$199<span className="text-lg text-slate-500 font-normal">/mo per cam</span></div>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-white">
                <Check className="w-5 h-5 text-brand-accent" /> Real-time RTSP Stream
              </li>
              <li className="flex items-center gap-3 text-white">
                <Check className="w-5 h-5 text-brand-accent" /> Instant WhatsApp/Email Alerts
              </li>
              <li className="flex items-center gap-3 text-white">
                <Check className="w-5 h-5 text-brand-accent" /> 24/7 Priority Support
              </li>
              <li className="flex items-center gap-3 text-white">
                <Check className="w-5 h-5 text-brand-accent" /> On-Premise Deployment Option
              </li>
            </ul>
            
            <button className="w-full py-3 rounded-xl bg-brand-accent hover:bg-red-600 text-white font-bold transition-all shadow-lg shadow-red-900/20">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;