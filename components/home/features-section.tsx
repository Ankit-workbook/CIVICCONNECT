'use client';

import { motion } from 'framer-motion';
import { FileText, MapPin, Bell, Shield, Clock, CheckCircle, Users, Smartphone } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Report issues on-the-go with our mobile-optimized platform accessible from any device',
    },
    {
      icon: MapPin,
      title: 'Smart Location',
      description: 'GPS auto-detection, address search, or manual entry options for flexible reporting',
    },
    {
      icon: Bell,
      title: 'Real-time Updates',
      description: 'Instant notifications when authorities review and take action on your reports',
    },
    {
      icon: Clock,
      title: 'Fast Response',
      description: 'Average issue resolution time of just 2-4 days with transparent tracking',
    },
    {
      icon: CheckCircle,
      title: 'Verified Resolution',
      description: 'Photo evidence and confirmation when reported issues are successfully resolved',
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Bank-level encryption ensures your personal information stays protected',
    },
    {
      icon: Users,
      title: 'Community Impact',
      description: 'Join thousands of active citizens making real changes in their neighborhoods',
    },
    {
      icon: FileText,
      title: 'Detailed Reports',
      description: 'Add photos, descriptions, and location data for comprehensive issue documentation',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose CivicConnect?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to report, track, and resolve civic issues efficiently
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:border-blue-300"
            >
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
