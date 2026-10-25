'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Layers, Smartphone, FileText } from 'lucide-react';
import { Badge } from '../../shared/components/Badge';
import { Button } from '../../shared/components/Button';
import { Profile } from '../../core/domain/entities';
import { openCVModal } from '../cv/CVModalContainer';

interface HeroSectionProps {
  profile: Profile;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % profile.roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [profile.roles.length]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-var(--navbar-height))] flex items-center pt-[calc(var(--navbar-height)+40px)] pb-16 relative"
    >
      <div className="container grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-12 items-center">
        {/* Left Column: Text & Value Proposition */}
        <div className="flex flex-col">
          <div className="mb-6">
            <Badge
              label="Available for Flutter & Mobile Development"
              variant="cyan"
              pulseDot={true}
              icon={<Smartphone size={14} />}
            />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[1.1] mb-4 text-[var(--text-primary)]">
            Hi, I&apos;m <span className="gradient-text-cyan-indigo">{profile.name}</span>
          </h1>

          <div className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-bold mb-6 flex-wrap">
            <span className="text-[var(--text-secondary)]">Specializing in </span>
            <span
              className="text-[#38bdf8] inline-block animate-fade-in-slide"
              key={currentRoleIndex}
            >
              {profile.roles[currentRoleIndex]}
            </span>
          </div>

          <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)] max-w-[620px] mb-9">
            {profile.bioSummary}
          </p>

          <div className="flex items-center gap-4 flex-wrap mb-12">
            <Button
              variant="primary"
              size="lg"
              icon={<ArrowRight size={18} />}
              onClick={() => scrollTo('projects')}
            >
              Explore Mobile Apps
            </Button>

            <Button
              variant="secondary"
              size="lg"
              icon={<FileText size={18} />}
              onClick={openCVModal}
            >
              View CV / Resume
            </Button>

            <Button
              variant="outline"
              size="lg"
              icon={<Sparkles size={18} />}
              onClick={() => scrollTo('ai-copilot')}
            >
              Consult AI
            </Button>
          </div>

          {/* Quick Metrics */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-5 sm:px-6 sm:py-5 bg-slate-800/45 border border-slate-700/50 rounded-2xl backdrop-blur-md max-w-fit">
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black text-[#38bdf8] font-mono leading-none mb-1">
                2+ Years
              </span>
              <span className="text-[12px] text-slate-400 font-semibold uppercase tracking-wider">
                Professional Exp
              </span>
            </div>
            <div className="hidden sm:block w-[1px] h-8 bg-slate-700/50" />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black text-[#38bdf8] font-mono leading-none mb-1">
                1 yr 7 mos
              </span>
              <span className="text-[12px] text-slate-400 font-semibold uppercase tracking-wider">
                Softvence IT (Running)
              </span>
            </div>
            <div className="hidden sm:block w-[1px] h-8 bg-slate-700/50" />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black text-[#38bdf8] font-mono leading-none mb-1">
                99.8%
              </span>
              <span className="text-[12px] text-slate-400 font-semibold uppercase tracking-wider">
                Crash-Free Sessions
              </span>
            </div>
            <div className="hidden sm:block w-[1px] h-8 bg-slate-700/50" />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black text-[#38bdf8] font-mono leading-none mb-1">
                100%
              </span>
              <span className="text-[12px] text-slate-400 font-semibold uppercase tracking-wider">
                Client Satisfaction
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Holographic Interactive Tech Core */}
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-[320px] sm:max-w-[480px] h-[380px] sm:h-[480px] flex items-center justify-center">
            {/* Ambient Background Aura */}
            <div className="absolute w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.22)_0%,rgba(129,140,248,0.15)_50%,transparent_70%)] blur-[40px] animate-pulse-aura" />

            {/* Central Hexagonal Core */}
            <div className="w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] rounded-3xl bg-gradient-to-br from-slate-800/95 to-slate-900/95 border-2 border-sky-400/40 shadow-[0_0_35px_rgba(56,189,248,0.25),inset_0_0_20px_rgba(56,189,248,0.1)] flex items-center justify-center relative z-[2] transition-transform duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center gap-2">
                <Smartphone size={48} className="text-[#38bdf8]" />
                <span className="text-sm sm:text-base font-extrabold tracking-widest text-[var(--text-primary)]">
                  FLUTTER CORE
                </span>
                <span className="text-[10px] font-bold text-[#38bdf8] tracking-wider">
                  DART & MOBILE ARCH
                </span>
              </div>
            </div>

            {/* Floating Satellite Badges */}
            <div className="absolute top-8 sm:top-10 left-2 sm:left-2.5 flex items-center gap-2 px-3.5 py-2 bg-slate-900/85 border border-slate-700/50 rounded-full text-xs font-bold text-slate-100 backdrop-blur-md shadow-md z-[3] animate-float-orb">
              <Layers size={15} className="text-[#38bdf8]" />
              <span>BLoC & Riverpod</span>
            </div>

            <div className="absolute top-10 sm:top-12 right-2 sm:right-2.5 flex items-center gap-2 px-3.5 py-2 bg-slate-900/85 border border-slate-700/50 rounded-full text-xs font-bold text-slate-100 backdrop-blur-md shadow-md z-[3] animate-float-orb [animation-delay:1.2s]">
              <Smartphone size={15} className="text-[#818cf8]" />
              <span>iOS & Android</span>
            </div>

            <div className="absolute bottom-16 sm:bottom-20 left-0 flex items-center gap-2 px-3.5 py-2 bg-slate-900/85 border border-slate-700/50 rounded-full text-xs font-bold text-slate-100 backdrop-blur-md shadow-md z-[3] animate-float-orb [animation-delay:2.4s]">
              <Layers size={15} className="text-[#f472b6]" />
              <span>Softvence IT Ltd</span>
            </div>

            <div className="absolute bottom-18 sm:bottom-22 right-3 sm:right-4 flex items-center gap-2 px-3.5 py-2 bg-slate-900/85 border border-slate-700/50 rounded-full text-xs font-bold text-slate-100 backdrop-blur-md shadow-md z-[3] animate-float-orb [animation-delay:3.6s]">
              <ShieldCheck size={15} className="text-[#10b981]" />
              <span>Clean Mobile Arch</span>
            </div>

            {/* Interactive Code Stream Preview Window */}
            <div className="absolute -bottom-5 w-[90%] max-w-[380px] bg-[#090d16]/92 border border-sky-400/30 rounded-xl backdrop-blur-md shadow-[0_16px_40px_rgba(0,0,0,0.65),0_0_25px_rgba(0,0,0,0.7)] z-[4] overflow-hidden">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-white/[0.03] border-b border-slate-700/50">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-mono text-[11px] text-slate-400 ml-1.5">
                  flutter_clean_architecture.dart
                </span>
              </div>
              <pre className="p-3 font-mono text-xs leading-relaxed text-[#38bdf8] overflow-x-auto">
                <code>{`// Domain layer decoupled from UI & APIs
class FetchProfileUseCase implements UseCase<Profile, NoParams> {
  final IMobileRepository repository;
  const FetchProfileUseCase(this.repository);

  @override
  Future<Either<Failure, Profile>> call(NoParams params) {
    return repository.getProfile();
  }
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
