export interface WaitlistEntry {
  email: string;
}

export interface WaitlistResponse {
  success: boolean;
  message: string;
}

export enum SubmissionStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}