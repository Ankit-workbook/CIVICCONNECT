'use client';

import { motion } from 'framer-motion';
import { Award, Trophy, Medal, Gift, Star, Zap } from 'lucide-react';

export default function RewardsSection() {
  const rewards = [
    {
      icon: Trophy,
      title: 'Super Reporter',
      description: 'Report 10+ issues',
      badge: '10+',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Medal,
      title: 'Community Hero',
      description: 'Help resolve 5 issues',
      badge: '5+',
      color: 'from-blue-400 to-indigo-500',
    },
    {
      icon: Star,
      title: 'Verified Reporter',
      description: 'Complete your profile',
      badge: '✓',
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: Zap,
      title: 'Quick Responder',
      description: 'Report within 24 hours',
      badge: '24h',
      color: 'from-green-400 to-emerald-500',
    },
  ];

  const achievements = [
    { label: 'Reports This Month', value: '1,247', trend: '+23%' },
    { label: 'Average Response Time', value: '2.3 days', trend: '-15%' },
    { label: 'Citizen Satisfaction', value: '94%', trend: '+8%' },
    { label: 'Active Communities', value: '156', trend: '+42%' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gray-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Rewards Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 backdrop-blur-sm border border-gray-200 mb-4">
            <Gift className="h-5 w-5 text-yellow-500" />
            <span className="text-sm font-semibold text-gray-700">Rewards & Recognition</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Earn Badges & Recognition
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get recognized for your contributions to building a better community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {rewards.map((reward, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reward.color} flex items-center justify-center mb-4 mx-auto shadow-xl`}>
                  <reward.icon className="h-8 w-8 text-white" />
                </div>
                <div className="absolute top-4 right-4 bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {reward.badge}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{reward.title}</h3>
                <p className="text-sm text-gray-600">{reward.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">
            Platform Impact
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {achievement.value}
                </div>
                <div className="text-sm text-gray-600 mb-2">{achievement.label}</div>
                <div className="text-xs text-green-600 font-semibold">{achievement.trend}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
