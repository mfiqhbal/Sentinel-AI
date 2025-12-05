import React from 'react';
import { School, Church, ShoppingBag, Shield, Building2 } from 'lucide-react';

const UseCases: React.FC = () => {
  const cases = [
    { title: "Education", icon: <School />, desc: "Protect students and staff in schools and universities." },
    { title: "Religious Centers", icon: <Church />, desc: "Discreet security for mosques, churches, and synagogues." },
    { title: "Retail & Malls", icon: <ShoppingBag />, desc: "Prevent armed robbery and ensure shopper safety." },
    { title: "Private Security", icon: <Shield />, desc: "Empower guards with AI vision assistance." },
    { title: "Corporate Offices", icon: <Building2 />, desc: "Secure entrances and sensitive corporate zones." },
  ];

  return (
    <section id="use-cases" className="py-20 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Industry Applications</h2>
        
        <div className="flex flex-wrap justify-center gap-6">
          {cases.map((item, idx) => (
            <div key={idx} className="bg-slate-950 p-6 rounded-xl border border-slate-800 flex flex-col items-center text-center w-full sm:w-64 hover:bg-slate-800 transition-colors">
              <div className="text-brand-accent mb-4 scale-125">{item.icon}</div>
              <h4 className="font-bold text-lg mb-2">{item.title}</h4>
              <p className="text-slate-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;