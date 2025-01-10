import { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export function useEmailService() {
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (data: EmailData): Promise<boolean> => {
    setIsLoading(true);
    try {
      await emailjs.send(
        'service_wxc4eci',
        'template_tu6az9i',
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        'iAHiBr3kPZ_t6b_dB'
      );
      toast.success('Message sent successfully!');
      return true;
    } catch (error) {
      console.error('Email error:', error);
      toast.error('Failed to send message. Please try again.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { sendEmail, isLoading };
}