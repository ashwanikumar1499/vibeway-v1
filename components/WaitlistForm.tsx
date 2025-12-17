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
      <div className="bg-slate-900/50 border border-[#c0ff00]/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center max-w-lg mx-auto animate-fade-in shadow-2xl shadow-[#c0ff00]/20">
        <div className="w-16 h-16 bg-gradient-to-tr from-[#c0ff00] to-[#00f0ff] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#c0ff00]/30">
          <Check className="w-8 h-8 text-black" />
        </div>
        <h3 className="text-2xl font-display font-bold text-white mb-2">You're in.</h3>
        <p className="text-slate-300 font-medium">Check your inbox. We're rolling out invites weekly. The vibes are about to be immaculate.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto w-full px-4 md:px-0">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#c0ff00]/20 via-[#00f0ff]/20 to-[#ff0080]/20 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
          <div className="relative">
            <label htmlFor="email" className="sr-only">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@gmail.com"
              required
              className="w-full bg-slate-900/90 border-2 border-slate-700 rounded-xl px-6 py-4 text-lg text-white placeholder-slate-500 focus:border-[#c0ff00] focus:ring-2 focus:ring-[#c0ff00]/30 focus:outline-none transition-all shadow-xl"
            />
          </div>
        </div>

        <Button
            type="submit"
            isLoading={status === SubmissionStatus.LOADING}
            className="w-full text-lg py-4"
        >
          Get Early Access
        </Button>

        <p className="text-xs text-center text-slate-500 font-mono">
          limited spots. early access only. <br className="md:hidden" /> no spam, just vibes.
        </p>

        {status === SubmissionStatus.ERROR && (
          <p className="text-[#ff0080] text-sm text-center bg-[#ff0080]/10 py-3 rounded-lg border border-[#ff0080]/30 font-medium">{errorMessage}</p>
        )}
      </form>
    </div>
  );
};