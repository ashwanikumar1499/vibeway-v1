import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { joinWaitlist } from '../services/waitlistService';
import { SubmissionStatus } from '../types';

export const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<SubmissionStatus>(SubmissionStatus.IDLE);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(SubmissionStatus.LOADING);
    setErrorMessage('');

    try {
      await joinWaitlist({ email });
      setStatus(SubmissionStatus.SUCCESS);
    } catch (err: any) {
      setStatus(SubmissionStatus.ERROR);
      setErrorMessage(err.message || "Something went wrong.");
    }
  };

  if (status === SubmissionStatus.SUCCESS) {
    return (
      <div className="glass-card rounded-3xl p-10 text-center max-w-sm mx-auto animate-fade-in border-accent/20">
        <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-5 h-5 text-black" />
        </div>
        <h3 className="text-lg font-black tracking-widest uppercase mb-2">Verified.</h3>
        <p className="text-zinc-500 text-xs font-mono">Watch your inbox for the drop.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto w-full px-4 md:px-0">
      <form onSubmit={handleSubmit} className="relative group">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ENTER EMAIL FOR INVITE"
          required
          className="w-full bg-transparent border-b-2 border-zinc-800 focus:border-white px-0 py-6 text-white placeholder-zinc-700 focus:outline-none transition-all text-sm font-black tracking-widest uppercase"
        />
        <button 
          type="submit" 
          disabled={status === SubmissionStatus.LOADING}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-all disabled:opacity-50"
        >
          {status === SubmissionStatus.LOADING ? (
            <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
          ) : (
            <ArrowRight size={24} strokeWidth={3} />
          )}
        </button>

        {status === SubmissionStatus.ERROR && (
          <p className="text-red-500 text-[9px] font-black uppercase tracking-widest mt-4 text-left">{errorMessage}</p>
        )}
      </form>
      <div className="mt-12 flex items-center justify-center gap-4">
        <div className="flex -space-x-2">
          {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-black bg-zinc-800" />)}
        </div>
        <p className="text-[9px] text-zinc-600 font-black uppercase tracking-[0.2em]">
          +482 joined this week
        </p>
      </div>
    </div>
  );
};