'use client';

import { motion } from 'framer-motion';
import { Camera, MapPin, Send, Bell, CheckCircle2 } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      icon: Camera,
      title: 'Take a Photo',
      description: 'Capture the civic issue with your phone camera',
      color: 'bg-blue-500',
      step: '01',
    },
    {
      icon: MapPin,
      title: 'Mark Location',
      description: 'Pin the exact location or enter address manually',
      color: 'bg-indigo-500',
      step: '02',
    },
    {
      icon: Send,
      title: 'Submit Report',
      description: 'Add details and submit to local authorities',
      color: 'bg-purple-500',
      step: '03',
    },
    {
      icon: Bell,
      title: 'Get Updates',
      description: 'Receive real-time notifications on progress',
      color: 'bg-pink-500',
      step: '04',
    },
    {
      icon: CheckCircle2,
      title: 'Issue Resolved',
      description: 'See the impact and earn recognition',
      color: 'bg-green-500',
      step: '05',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Report civic issues in 5 simple steps and track them until resolution
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-300 relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-br from-blue-600 to-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg transform hover:scale-110 transition-transform`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
