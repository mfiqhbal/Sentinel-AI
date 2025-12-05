import React from 'react';
import { ShieldAlert, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <ShieldAlert className="w-6 h-6 text-brand-accent" />
              <span className="text-xl font-bold text-white">SENTINEL.AI</span>
            </div>
            <p className="text-slate-500 text-sm max-w-sm">
              Advanced computer vision technology dedicated to saving lives. 
              Detect threats before they happen.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-accent">Features</a></li>
              <li><a href="#" className="hover:text-brand-accent">API Documentation</a></li>
              <li><a href="#" className="hover:text-brand-accent">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-accent">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-accent">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-accent">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 text-sm">© 2024 Sentinel AI. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-slate-500 hover:text-white"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-slate-500 hover:text-white"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-slate-500 hover:text-white"><Github className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;