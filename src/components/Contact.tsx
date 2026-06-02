import React, { useState } from 'react';
import { socialLinks } from '../data/portfolioData';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import { motion } from 'framer-motion';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaGithub':
        return <FaGithub className="w-5 h-5" />;
      case 'FaLinkedin':
        return <FaLinkedin className="w-5 h-5" />;
      case 'SiLeetcode':
        return <SiLeetcode className="w-5 h-5 text-[#FFA116]" />;
      case 'SiHackerrank':
        return <SiHackerrank className="w-5 h-5 text-[#2EC866]" />;
      default:
        return null;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);

    // Simulate API Submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      // Auto clear success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-md mx-auto mb-6 text-sm sm:text-base">
            Have a question, project proposal, or just want to say hi? Fill out the form below.
          </p>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Contact Form Wrapper */}
        <div className="max-w-lg mx-auto bg-[#0c0d21]/50 border border-white/5 p-8 rounded-2xl shadow-2xl backdrop-blur-lg">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-6"
            noValidate
          >
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-300 mb-2 text-left"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={isLoading}
                className={`w-full px-4 py-3 rounded-lg border bg-black/40 text-white transition-all duration-300 focus:outline-none focus:ring-1 ${
                  errors.name
                    ? 'border-red-500 focus:ring-red-500/30'
                    : 'border-white/10 focus:border-indigo-500 focus:ring-indigo-500/30'
                }`}
                placeholder="Krishna Tripathi"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1.5 text-left">{errors.name}</p>}
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-300 mb-2 text-left"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
                className={`w-full px-4 py-3 rounded-lg border bg-black/40 text-white transition-all duration-300 focus:outline-none focus:ring-1 ${
                  errors.email
                    ? 'border-red-500 focus:ring-red-500/30'
                    : 'border-white/10 focus:border-indigo-500 focus:ring-indigo-500/30'
                }`}
                placeholder="krishnatripathi@gmail.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1.5 text-left">{errors.email}</p>}
            </div>

            {/* Message Area */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-300 mb-2 text-left"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                disabled={isLoading}
                className={`w-full px-4 py-3 rounded-lg border bg-black/40 text-white transition-all duration-300 focus:outline-none focus:ring-1 ${
                  errors.message
                    ? 'border-red-500 focus:ring-red-500/30'
                    : 'border-white/10 focus:border-indigo-500 focus:ring-indigo-500/30'
                }`}
                placeholder="Write your message details..."
              />
              {errors.message && <p className="text-red-500 text-xs mt-1.5 text-left">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 px-6 rounded-lg font-medium text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 active:scale-95 disabled:from-indigo-400 disabled:to-indigo-500 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <span>Send Message</span>
              )}
            </button>

            {/* Success toast popup */}
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg bg-emerald-950/20 text-emerald-450 text-sm font-medium text-center border border-emerald-900/50"
              >
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}
          </motion.form>

          {/* Social Row Link Icons */}
          <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full text-gray-400 hover:text-white hover:bg-white/5 hover:scale-110 transition-all duration-300"
                aria-label={`Find me on ${social.name}`}
              >
                {getSocialIcon(social.iconName)}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
