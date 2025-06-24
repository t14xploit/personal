"use client";

import styles from "@/components/TerminalContent.module.css"; 
import { useState, FormEvent } from 'react';
import { FaDiscord, FaEnvelope, FaGithub } from "react-icons/fa";

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
    <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 font-light min-h-screen">
      <h1 className='text-2xl sm:text-3xl mb-6 sm:mb-8 text-center text-[#00f0ff]'>Contact me</h1>
      <form onSubmit={handleSubmit} method="POST" className="space-y-4 sm:space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm sm:text-base mb-2 text-[#00f0ff]">
            Name:
          </label>
          <div
            data-augmented-ui="tl-clip br-clip border"
            className={`${styles.contactInput} ${styles.hoverBorder}`}
          >
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full outline-none border-none bg-transparent focus:ring-0 text-sm sm:text-base"
              placeholder="Enter your name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm mb-2 ">
            Email:
          </label>
          <div  data-augmented-ui="tl-clip  br-clip border"
className={styles.contactInput} >

          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full outline-none border-non bg-transparent focus:ring-0"

            placeholder="Enter your email"
          />
        </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm mb-2">
            Message:
          </label>
          <div  data-augmented-ui="tl-clip  br-clip border"
className={styles.contactInput} >

          <textarea

            id="message"
            name="message"
            rows={4}
            required
            placeholder="Your message"
            className="w-full outline-none border-non bg-transparent focus:ring-0"
          ></textarea>
        </div>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 mt-4 bg-[#00f0ff] text-[#020b12] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00f0ff] disabled:bg-[#333333] cursor-pointer"
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
      <div className="mt-8 text-center">
        <h2 className="text-lg font-light text-[#00f0ff] mb-2">{`> Reach me directly`}</h2>
        <div className="flex justify-center space-x-6 text-2xl ">
          <a href="mailto:t14xploit@gmail.com" title="Send Email">
            <FaEnvelope className="hover:text-[#00f0ff] transition" />
          </a>
          <a href="https://github.com/t14xploit" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub className="hover:text-[#00f0ff] transition" />
          </a>
          <a href="https://discordapp.com/users/t14xploit" target="_blank" rel="noopener noreferrer" title="Discord">
            <FaDiscord className="hover:text-[#00f0ff] transition" />
          </a>
        </div>
      </div>
    </div>
  );
}
