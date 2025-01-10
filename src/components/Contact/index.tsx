import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';
import { Toaster } from 'react-hot-toast';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-rose-50">
      <Toaster position="top-right" />
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-rose-600" />
                <span>sarah.parker@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-rose-600" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-rose-600" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}