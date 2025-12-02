import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Package2, TrendingUp } from 'lucide-react';
import { slideInLeft, slideInRight } from '../utils/animations';
import toast from 'react-hot-toast';

// Form + pitch for Indian brands who want to list on Velostyle
const BrandPartnership = () => {
  // Simple controlled inputs
  const [brandName, setBrandName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Application received! We'll be in touch.");
    setBrandName('');
    setEmail('');
    setWebsite('');
  };

  return (
    <section id="for-brands" className="w-full py-20 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="rounded-3xl bg-background-darker border border-white/5 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: why brands should care */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
              className="p-10 sm:p-16 flex flex-col justify-center order-2 lg:order-1"
            >
              <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-4">
                For Brands
              </span>
              <h3 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
                Partner With Us
              </h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Are you a Made-in-India brand? Join our curated platform to reach new customers
                in your city, increase your sales, and focus on what you do best – creating
                amazing products.
              </p>

              <ul className="space-y-5">
                {[
                  {
                    icon: <Rocket className="text-primary" />,
                    text: 'Reach a new, local audience instantly.',
                  },
                  {
                    icon: <Package2 className="text-primary" />,
                    text: 'Seamless logistics and fast delivery handled by us.',
                  },
                  {
                    icon: <TrendingUp className="text-primary" />,
                    text: 'Powerful analytics and insights to grow your brand.',
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-gray-200">
                    <div className="p-2 bg-white/5 rounded-lg">{item.icon}</div>
                    <span className="font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right: brand application form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
              className="p-10 sm:p-16 bg-white dark:bg-white/5 order-1 lg:order-2"
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Brand name */}
                <div className="space-y-2">
                  <label
                    htmlFor="brand-name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Brand Name
                  </label>
                  <input
                    id="brand-name"
                    type="text"
                    required
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    placeholder="Surya Handlooms"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* Contact email */}
                <div className="space-y-2">
                  <label
                    htmlFor="brand-email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Contact Email
                  </label>
                  <input
                    id="brand-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contact@suryahandlooms.in"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* Website / social */}
                <div className="space-y-2">
                  <label
                    htmlFor="website"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Website or Social Media
                  </label>
                  <input
                    id="website"
                    type="url"
                    required
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="https://instagram.com/suryahandlooms"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* Submit button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="mt-4 w-full py-4 px-6 rounded-lg bg-primary hover:bg-primary-light text-background-dark font-bold text-lg shadow-lg hover:shadow-primary/30 transition-all"
                >
                  Apply to be a Partner
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandPartnership;