import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

// Simple 3-step explanation of the customer flow
const steps = [
  {
    number: '1',
    title: 'Browse Local Brands',
    description:
      'Explore a curated selection of unique products from the best brands in your city.',
  },
  {
    number: '2',
    title: 'Place Your Order',
    description:
      'Add your favorite items to the cart and check out with our seamless payment process.',
  },
  {
    number: '3',
    title: 'Receive in Hours',
    description:
      'Sit back and relax. Your order will be delivered to your doorstep in just a few hours.',
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full py-24 bg-white dark:bg-background-darker overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Section title */}
          <motion.span
            variants={fadeInUp}
            className="text-primary font-bold text-xs tracking-[0.2em] uppercase"
          >
            How Velostyle Works
          </motion.span>
          <motion.h3
            variants={fadeInUp}
            className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-16"
          >
            Your City's Best, in Three Simple Steps
          </motion.h3>

          {/* 3 step cards with connecting line on desktop */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-gray-300 dark:via-white/20 to-transparent z-0" />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative z-10 flex flex-col items-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, backgroundColor: '#D4AF37', color: '#1A3A34' }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 rounded-full border-2 border-primary bg-background-light dark:bg-background-dark flex items-center justify-center text-primary hover:text-background-dark font-serif text-2xl font-bold mb-6 shadow-lg transition-colors duration-300"
                >
                  {step.number}
                </motion.div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;