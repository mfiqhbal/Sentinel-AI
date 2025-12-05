import React from 'react';

const Architecture: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Architecture</h2>
            <p className="text-slate-400">Robust data flow designed for speed and security.</p>
        </div>

        <div className="relative p-8 md:p-12 border border-slate-800 rounded-3xl bg-slate-900/50 backdrop-blur-sm">
            {/* Simple SVG Diagram */}
            <svg viewBox="0 0 800 300" className="w-full h-auto drop-shadow-2xl">
                {/* Definitions for gradients/markers */}
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
                    </marker>
                    <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                        <stop offset="50%" stopColor="#ef4444" stopOpacity="1" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                    </linearGradient>
                </defs>

                {/* Connecting Lines */}
                <path d="M 150 150 L 300 150" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M 400 150 L 550 150" stroke="#475569" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M 650 150 L 750 150" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />

                {/* Animated Flow Line */}
                <circle r="4" fill="#ef4444">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M 150 150 L 750 150" />
                </circle>

                {/* Node 1: Camera */}
                <g transform="translate(50, 100)">
                    <rect width="100" height="100" rx="10" fill="#1e293b" stroke="#334155" strokeWidth="2" />
                    <text x="50" y="45" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="bold">SOURCE</text>
                    <text x="50" y="65" textAnchor="middle" fill="white" fontSize="14">CCTV / RTSP</text>
                </g>

                {/* Node 2: AI Engine */}
                <g transform="translate(300, 100)">
                    <rect width="100" height="100" rx="10" fill="#1e293b" stroke="#ef4444" strokeWidth="2" className="animate-pulse" />
                    <text x="50" y="45" textAnchor="middle" fill="#ef4444" fontSize="12" fontWeight="bold">PROCESSING</text>
                    <text x="50" y="65" textAnchor="middle" fill="white" fontSize="14">AI Model</text>
                </g>

                {/* Node 3: Backend */}
                <g transform="translate(550, 100)">
                    <rect width="100" height="100" rx="10" fill="#1e293b" stroke="#334155" strokeWidth="2" />
                    <text x="50" y="45" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="bold">PLATFORM</text>
                    <text x="50" y="65" textAnchor="middle" fill="white" fontSize="14">Cloud API</text>
                </g>

                {/* Node 4: User */}
                <g transform="translate(750, 125)">
                     <circle cx="0" cy="25" r="30" fill="#ef4444" opacity="0.2" className="animate-ping" />
                     <circle cx="0" cy="25" r="15" fill="#ef4444" />
                     <text x="0" y="60" textAnchor="middle" fill="white" fontSize="12">ALERT</text>
                </g>
            </svg>
        </div>
      </div>
    </section>
  );
};

export default Architecture;