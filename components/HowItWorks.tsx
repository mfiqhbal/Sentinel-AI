import React from 'react';
import { Camera, Cpu, BellRing } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      icon: <Camera className="w-8 h-8 text-white" />,
      title: "Connect Feed",
      desc: "Integrate your existing CCTV IP cameras or upload video files directly to our secure platform."
    },
    {
      id: 2,
      icon: <Cpu className="w-8 h-8 text-white" />,
      title: "AI Analysis",
      desc: "Our deep learning engine scans every frame for weapon signatures, filtering out false positives."
    },
    {
      id: 3,
      icon: <BellRing className="w-8 h-8 text-white" />,
      title: "Trigger Alert",
      desc: "Within seconds of detection, security teams and authorities are notified with location and image evidence."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">How It Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-30"></div>

          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center relative">
              <div className="w-24 h-24 rounded-full bg-slate-800 border-4 border-slate-900 shadow-[0_0_0_8px_rgba(30,41,59,0.5)] flex items-center justify-center mb-6 z-10 relative group hover:border-brand-accent transition-colors">
                 <div className="absolute inset-0 rounded-full bg-brand-accent opacity-0 group-hover:opacity-10 transition-opacity"></div>
                 {step.icon}
                 <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-accent text-white flex items-center justify-center font-bold text-sm shadow-lg">
                   {step.id}
                 </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;