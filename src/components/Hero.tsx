
import { Network, Server, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8 flex justify-center space-x-8">
          <div className="p-4 bg-slate-800/50 rounded-full backdrop-blur-sm border border-slate-700 hover:border-cyan-400 transition-all duration-300">
            <Network className="w-8 h-8 text-cyan-400" />
          </div>
          <div className="p-4 bg-slate-800/50 rounded-full backdrop-blur-sm border border-slate-700 hover:border-purple-400 transition-all duration-300">
            <Server className="w-8 h-8 text-purple-400" />
          </div>
          <div className="p-4 bg-slate-800/50 rounded-full backdrop-blur-sm border border-slate-700 hover:border-blue-400 transition-all duration-300">
            <Shield className="w-8 h-8 text-blue-400" />
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6 animate-fade-in">
          Sebastian Banszky
        </h1>
        
        <div className="text-xl md:text-2xl text-slate-300 mb-8 space-y-2">
          <p className="font-light">Network Engineer</p>
          <p className="text-sm text-slate-400">Over a decade of hands-on experience</p>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 shadow-2xl">
          <p className="text-lg text-slate-200 leading-relaxed max-w-3xl mx-auto">
            I'm a <span className="text-cyan-400 font-semibold">"hands-on" network engineer</span> with over a decade of experience across 
            <span className="text-purple-400 font-semibold"> service providers, enterprise, and data center environments</span>. 
            I prefer action over words — I'm an introvert who prefers to speak less and deliver more.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
