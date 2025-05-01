"use client";


import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<string>(''); // for feedback message
  const [isSubmitting, setIsSubmitting] = useState(false); // track submit state

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus('Sending...');
    setIsSubmitting(true); // Start submission

    const formData = new FormData(event.target as HTMLFormElement);
    const formDataObj: Record<string, string> = {};

    formData.forEach((value, key) => {
      formDataObj[key] = value as string;
    });

    const formDataEncoded = new URLSearchParams(formDataObj).toString();

    try {
      const response = await fetch('https://formspree.io/f/mblodenw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataEncoded,
      });

      if (response.ok) {
        setFormStatus('Thank you for your message!');
      } else {
        throw new Error('There was an issue submitting your form');
      }
    } catch (error) {
      console.error(error);
      setFormStatus('Error sending the message. Please try again later.');
    } finally {
      setIsSubmitting(false); // End submission
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
        <h1 className='text-center'>Contact me</h1>
      <form onSubmit={handleSubmit} method="POST" className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your name"
            className="mt-2 p-3 w-full border border-[#00f0ff] bg-[#020b12] text-[#00f0ff] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00f0ff]"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
            className="mt-2 p-3 w-full border border-[#00f0ff] bg-[#020b12] text-[#00f0ff] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00f0ff]"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="Your message"
            className="mt-2 p-3 w-full border border-[#00f0ff] bg-[#020b12] text-[#00f0ff] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00f0ff]"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 mt-4 bg-[#00f0ff] text-[#020b12] font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-[#00f0ff] disabled:bg-[#333333]"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {/* Show form status message */}
        {formStatus && (
          <p
            className={`mt-4 text-center text-sm ${
              formStatus.includes('Error') ? 'text-red-500' : 'text-green-500'
            }`}
          >
            {formStatus}
          </p>
        )}
      </form>
    </div>
  );
}
