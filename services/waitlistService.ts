
import { WaitlistEntry, WaitlistResponse } from '../types';

// TODO: REPLACE THIS URL WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
// 1. Create a Google Sheet
// 2. Extensions > Apps Script
// 3. Paste the code to handle POST requests (doPost)
// 4. Deploy > New Deployment > Web App > Access: Anyone
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx94-ZrJiszClKtW-ykefq4OYk-hdNvMq_nuuahoQCLM2ynU7GsZJHCJmSqWedTwIh0bA/exec'; 

export const joinWaitlist = async (entry: WaitlistEntry): Promise<WaitlistResponse> => {
  // Fix: Use a check that doesn't trigger TypeScript's literal type overlap error
  const isDefaultUrl = GOOGLE_SCRIPT_URL.includes('YOUR_GOOGLE_SCRIPT_URL');
  
  if (isDefaultUrl || !GOOGLE_SCRIPT_URL) {
    console.warn("Google Script URL not set. Simulating success.");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Basic validation
    if (!entry.email.includes('@')) throw new Error("Please enter a valid email address.");
    
    return { success: true, message: "Welcome to the tribe." };
  }

  try {
    // We use 'no-cors' mode because Google Forms/Scripts don't return standard CORS headers.
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entry),
    });

    return {
      success: true,
      message: "You're on the list. Watch your inbox."
    };
  } catch (error) {
    console.error('Submission error:', error);
    throw new Error("Could not connect to the server. Please try again.");
  }
};
