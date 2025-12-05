import React, { useState } from 'react';
import { Upload, AlertTriangle, CheckCircle, RefreshCw, Terminal, Eye } from 'lucide-react';

// Local sample lives in public/demo-images/. If missing, we fall back to the hosted sample.
const LOCAL_PLACEHOLDER = "/demo-images/Gemini_Generated_Image_njz6xynjz6xynjz6.png";
const FALLBACK_PLACEHOLDER = "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1200&q=80";

const DemoSection: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'scanning' | 'detected'>('idle');
  const [logs, setLogs] = useState<string[]>([]);
  const [imageSrc, setImageSrc] = useState<string>(LOCAL_PLACEHOLDER);
  const [showJson, setShowJson] = useState<boolean>(false);

  const handleScan = () => {
    setStatus('scanning');
    setShowJson(false);
    setLogs(['Initializing YOLOv8 model...', 'Connecting to image stream...', 'Processing frame 001...']);
    
    setTimeout(() => {
      setLogs(prev => [...prev, 'Object detected: Confidence 0.82', 'Object detected: Confidence 0.98', 'Class: Handgun', 'ALERT TRIGGERED']);
      setStatus('detected');
    }, 2500);
  };

  const reset = () => {
    setStatus('idle');
    setLogs([]);
    setShowJson(false);
  };

  return (
    <section id="demo" className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience the Speed</h2>
          <p className="text-slate-400">Upload a frame or use our preset sample to see the AI in action.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-auto lg:h-[500px]">
          
          {/* Main Viewport */}
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden border border-slate-700 bg-black shadow-2xl group">
            
            {/* Status Overlay Header */}
            <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center z-20 bg-gradient-to-b from-black/80 to-transparent">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${status === 'scanning' ? 'bg-yellow-400 animate-pulse' : status === 'detected' ? 'bg-red-500 animate-pulse' : 'bg-emerald-500'}`}></div>
                <span className="font-mono text-xs text-white/80 uppercase">
                  {status === 'idle' ? 'System Ready' : status === 'scanning' ? 'Analyzing Feed...' : 'THREAT DETECTED'}
                </span>
              </div>
              <div className="font-mono text-xs text-white/50">CAM-04 [LIVE]</div>
            </div>

            {/* Image Area */}
            <div className="relative w-full h-full flex items-center justify-center bg-slate-900">
               {/* Background Image */}
               <img 
                  src={imageSrc} 
                  alt="CCTV Feed" 
                  onError={() => {
                    // If the local file is missing, fall back to the hosted image once.
                    if (imageSrc !== FALLBACK_PLACEHOLDER) {
                      setImageSrc(FALLBACK_PLACEHOLDER);
                    }
                  }}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${status === 'idle' ? 'opacity-50 grayscale' : 'opacity-80'}`}
               />

               {/* Idle State CTA */}
               {status === 'idle' && (
                 <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                   <button 
                    onClick={handleScan}
                    className="flex flex-col items-center gap-3 group/btn"
                   >
                     <div className="w-20 h-20 rounded-full border-2 border-slate-500 flex items-center justify-center group-hover/btn:border-brand-accent group-hover/btn:scale-110 transition-all bg-black/50 backdrop-blur-sm">
                       <Eye className="w-8 h-8 text-slate-300 group-hover/btn:text-brand-accent transition-colors" />
                     </div>
                     <span className="text-sm font-semibold tracking-widest uppercase text-slate-300 group-hover/btn:text-white">Run Simulation</span>
                   </button>
                 </div>
               )}

               {/* Scanning Overlay */}
               {status === 'scanning' && (
                 <div className="absolute inset-0 z-10 pointer-events-none">
                   <div className="absolute w-full h-1 bg-brand-accent/50 shadow-[0_0_20px_rgba(239,68,68,1)] animate-scan"></div>
                   <div className="absolute inset-0 bg-brand-accent/5 mix-blend-overlay"></div>
                   
                   {/* Fake Object Detection Boxes appearing randomly */}
                   <div className="absolute top-1/4 left-1/3 w-24 h-48 border border-white/30 rounded opacity-50 animate-pulse"></div>
                 </div>
               )}

               {/* Detected Overlay */}
               {status === 'detected' && (
                 <div className="absolute inset-0 z-10 pointer-events-none">
                    {/* Bounding Box for "Gun" */}
                    <div className="absolute top-[72%] left-[22%] w-[12%] h-[14%] border-2 border-red-500 bg-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.6)] animate-pulse-fast">
                      <div className="absolute -top-6 left-0 bg-red-500 text-white text-[10px] font-bold px-2 py-1 uppercase flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        Handgun 98%
                      </div>
                    </div>

                    {/* Person Bounding Box */}
                    <div className="absolute top-[18%] left-[20%] w-[26%] h-[80%] border border-yellow-500/50 rounded-sm">
                       <div className="absolute -top-5 left-0 text-yellow-500 text-[10px] font-mono">Person 99%</div>
                    </div>
                 </div>
               )}
            </div>

            {/* Controls */}
            {status !== 'idle' && (
              <div className="absolute bottom-6 right-6 z-20">
                <button 
                  onClick={reset}
                  className="bg-slate-800/80 hover:bg-white hover:text-black text-white px-4 py-2 rounded-lg text-sm font-semibold backdrop-blur transition-all flex items-center gap-2 border border-slate-600"
                >
                  <RefreshCw className="w-4 h-4" /> Reset
                </button>
              </div>
            )}
          </div>

          {/* Data Panel */}
          <div className="lg:col-span-1 glass-panel rounded-2xl p-6 flex flex-col font-mono text-xs sm:text-sm overflow-hidden border-t-4 border-brand-accent">
            <div className="flex items-center gap-2 mb-4 text-slate-400 border-b border-slate-700 pb-2">
              <Terminal className="w-4 h-4" />
              <span>SYSTEM_LOGS</span>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-2 text-slate-300 scrollbar-hide">
              <div className="text-slate-500">Waiting for input stream...</div>
              {logs.map((log, i) => (
                <div key={i} className={`animate-fade-in ${log.includes('ALERT') ? 'text-red-500 font-bold bg-red-500/10 p-1 rounded border border-red-500/20' : 'text-emerald-400'}`}>
                  <span className="text-slate-600 mr-2">[{new Date().toLocaleTimeString()}]</span>
                  {log}
                </div>
              ))}
              {status === 'scanning' && <div className="animate-pulse text-brand-accent">_</div>}
            </div>

            {/* Mock JSON Output */}
            {status === 'detected' && (
              <div className="mt-3 pt-3 border-t border-slate-700 space-y-2">
                <div className="flex items-center justify-between text-slate-500 text-[11px]">
                  <span>JSON OUTPUT</span>
                  <button
                    onClick={() => setShowJson(prev => !prev)}
                    className="text-[11px] text-brand-accent hover:text-white font-semibold transition-colors"
                  >
                    {showJson ? 'Hide' : 'Show'}
                  </button>
                </div>
                {showJson && (
                  <pre className="text-[9px] leading-4 text-blue-300 bg-slate-950 p-2 rounded-lg overflow-x-auto">
{`{
  "timestamp": "${new Date().toISOString()}",
  "camera_id": "CAM_04",
  "detections": [
    {
      "class": "firearm",
      "confidence": 0.98,
      "box": [420, 250, 480, 310]
    }
  ],
  "alert_sent": true
}`}
                  </pre>
                )}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default DemoSection;