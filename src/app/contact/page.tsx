'use client';

import React, { useState, FormEvent, useCallback } from 'react';
import { z } from 'zod';
import { FiSend, FiAlertCircle, FiCheckCircle } from 'react-icons/fi';

// Validation Schema
const ContactSchema = z.object({
  name: z.string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name cannot exceed 50 characters" })
    .regex(/^[a-zA-Z\s]+$/, { message: "Name can only contain letters" }),
  
  email: z.string()
    .email({ message: "Invalid email address" })
    .max(100, { message: "Email is too long" }),
  
  subject: z.string()
    .optional()
});

export default function ContactForm() {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Validation and Submission States
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Input Change Handler with Validation
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));

    // Clear specific error when user starts typing
    if (errors[id]) {
      const newErrors = { ...errors };
      delete newErrors[id];
      setErrors(newErrors);
    }
  }, [errors]);

  // Form Submission Handler
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setSubmitStatus('idle');

    try {
      // Validate form data
      const validatedData = ContactSchema.parse(formData);

      // Simulate API call (replace with actual API endpoint)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Success handling
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      // Error handling
      if (error instanceof z.ZodError) {
        const zodErrors: { [key: string]: string } = {};
        error.errors.forEach(err => {
          zodErrors[err.path[0]] = err.message;
        });
        setErrors(zodErrors);
      } else {
        setSubmitStatus('error');
      }
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-6 md:p-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label 
              htmlFor="name" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'}`}
              placeholder="Your Full Name"
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <FiAlertCircle className="mr-2" /> {errors.name}
              </p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'}`}
              placeholder="you@example.com"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <FiAlertCircle className="mr-2" /> {errors.email}
              </p>
            )}
          </div>

          {/* Subject Input (Optional) */}
          <div>
            <label 
              htmlFor="subject" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Subject (Optional)
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Brief subject"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <FiAlertCircle className="mr-2" /> {errors.subject}
              </p>
            )}
          </div>

          {/* Message Input */}
          <div>
            <label 
              htmlFor="message" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'}`}
              placeholder="Write your message here..."
              required
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <FiAlertCircle className="mr-2" /> {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'}`}
          >
            {isSubmitting ? (
              <span className="animate-pulse">Sending...</span>
            ) : (
              <>
                <FiSend className="mr-2" />
                Send Message
              </>
            )}
          </button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center flex items-center justify-center">
              <FiCheckCircle className="mr-2" />
              Message sent successfully! We'll get back to you soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center flex items-center justify-center">
              <FiAlertCircle className="mr-2" />
              Oops! Something went wrong. Please try again later.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
