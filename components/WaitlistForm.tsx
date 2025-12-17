import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';
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
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    }
  };

  if (status === SubmissionStatus.SUCCESS) {
    return (
      <div className="bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center max-w-lg mx-auto animate-fade-in shadow-2xl shadow-primary/10">
        <div className="w-16 h-16 bg-gradient-to-tr from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20">
          <Check className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-display font-bold text-white mb-2">You're on the list.</h3>
        <p className="text-slate-400">Keep an eye on your inbox. We release new invites every Tuesday.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto w-full px-4 md:px-0">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
          <div className="relative">
            <label htmlFor="email" className="sr-only">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-6 py-4 text-lg text-white placeholder-slate-500 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all shadow-xl"
            />
          </div>
        </div>
        
        <Button 
            type="submit" 
            isLoading={status === SubmissionStatus.LOADING}
            className="w-full text-lg py-4 shadow-lg shadow-white/5"
        >
          Join The Club
        </Button>

        <p className="text-xs text-center text-slate-500 font-mono">
          Limited spots for Season 1. <br className="md:hidden" /> No spam, just boarding passes.
        </p>

        {status === SubmissionStatus.ERROR && (
          <p className="text-red-400 text-sm text-center bg-red-900/20 py-2 rounded-lg border border-red-900/50">{errorMessage}</p>
        )}
      </form>
    </div>
  );
};