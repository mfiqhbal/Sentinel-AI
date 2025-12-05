import React from 'react';
import { Zap, Eye, Lock, Server, Bell, Smartphone } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Real-time Processing",
      desc: "Millisecond latency processing ensures threats are detected the moment they appear on frame."
    },
    {
      icon: <Eye className="w-6 h-6 text-blue-400" />,
      title: "High Accuracy Model",
      desc: "Trained on millions of datasets to distinguish between real weapons, toys, and harmless objects like phones."
    },
    {
      icon: <Server className="w-6 h-6 text-purple-400" />,
      title: "Flexible Deployment",
      desc: "Deploy on-premise (Edge AI) for maximum privacy or on the Cloud for scalable infrastructure."
    },
    {
      icon: <Bell className="w-6 h-6 text-red-400" />,
      title: "Instant Alerts",
      desc: "Automated triggers via SMS, WhatsApp, Email, or direct integration with police dispatch systems."
    },
    {
      icon: <Lock className="w-6 h-6 text-emerald-400" />,
      title: "End-to-End Encryption",
      desc: "Video feeds are processed securely. No footage is stored unless a specific threat is detected."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-orange-400" />,
      title: "Mobile Dashboard",
      desc: "Monitor all your cameras and receive critical incident reports from anywhere in the world."
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Sentinel AI?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Built for rapid response and reliability. Our features are designed to close the gap between detection and action.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-brand-accent/50 hover:bg-slate-800/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-slate-700">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;