'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Award, Users, CheckCircle2, Construction, Trash2, Droplets, Zap, AlertTriangle, TreePine, FileText } from 'lucide-react';

export default function Hero() {
  const quickReportCategories = [
    { icon: Construction, label: 'Pothole', color: 'bg-orange-500 hover:bg-orange-600', category: 'pothole' },
    { icon: Trash2, label: 'Garbage', color: 'bg-green-500 hover:bg-green-600', category: 'garbage' },
    { icon: Droplets, label: 'Water Issue', color: 'bg-blue-500 hover:bg-blue-600', category: 'water' },
    { icon: Zap, label: 'Streetlight', color: 'bg-yellow-500 hover:bg-yellow-600', category: 'streetlight' },
    { icon: AlertTriangle, label: 'Traffic', color: 'bg-red-500 hover:bg-red-600', category: 'traffic' },
    { icon: TreePine, label: 'Environment', color: 'bg-emerald-500 hover:bg-emerald-600', category: 'environment' },
    { icon: FileText, label: 'Civic Issue', color: 'bg-purple-500 hover:bg-purple-600', category: 'civic' },
  ];

  const stats = [
    { icon: Users, value: '50K+', label: 'Active Citizens', color: 'text-blue-600' },
    { icon: CheckCircle2, value: '35K+', label: 'Issues Resolved', color: 'text-green-600' },
    { icon: Award, value: '87%', label: 'Success Rate', color: 'text-purple-600' },
    { icon: Shield, value: '24/7', label: 'Support', color: 'text-indigo-600' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Official Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white mb-6 shadow-lg"
            >
              <Shield className="h-4 w-4" />
              <span className="text-sm font-semibold">
                Just a minor project of the City Government
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                Your City
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Your Voice
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Report civic issues instantly. Track progress in real-time. Build a better community together.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-10">
              <Link href="/report">
                <Button
                  size="lg"
                  className="text-base px-8 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-xl hover:shadow-2xl transition-all group font-bold"
                >
                  Report an Issue
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/track">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 py-6 border-2 border-gray-300 hover:border-blue-600 hover:bg-blue-50 transition-all font-semibold"
                >
                  Track Reports
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-xl p-4 shadow-md border border-gray-100"
                >
                  <stat.icon className={`h-6 w-6 ${stat.color} mb-2 mx-auto lg:mx-0`} />
                  <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/Bharat.png" 
                  alt="India Map - Civic Connect" 
                  className="relative w-full h-auto"
                  style={{ transform: 'scale(1.75)' }}
                />
              </div>
              
              {/* Static badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg border-2 border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-bold text-gray-700">Live</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl p-3 shadow-lg">
                <div className="text-xs font-bold">50K+ Users</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Report Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Quick Report
            </h2>
            <p className="text-gray-600">
              Select an issue type to report instantly
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickReportCategories.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Link href={`/report?category=${item.category}`}>
                  <div className={`${item.color} text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer group`}>
                    <item.icon className="h-10 w-10 mb-3 mx-auto group-hover:scale-110 transition-transform" />
                    <p className="text-sm font-bold text-center">{item.label}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
