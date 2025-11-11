'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LeadersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const leaders = [
    {
      name: 'Narendra Modi',
      position: 'Hon\'ble Prime Minister of India',
      quote: 'Swachh Bharat is not just a government programme, it is a Jan Andolan (People\'s Movement). Every citizen must take responsibility for cleanliness and contribute to building a New India.',
      imagePath: '/Narendra Modi.jpeg',
    },
    {
      name: 'Droupadi Murmu',
      position: 'Hon\'ble President of India',
      quote: 'Cleanliness is not just about our surroundings, but also about our thoughts and actions. A clean nation is a strong nation, and it begins with each one of us.',
      imagePath: '/Droupadi Murmu.jpg',
    },
    {
      name: 'Mohan Yadav',
      position: 'Hon\'ble Chief Minister',
      quote: 'Public participation is the key to solving civic issues. Together, we can build a cleaner, safer, and more prosperous state for future generations.',
      imagePath: '/Mohan Yadav.jpeg',
    },
    {
      name: 'Gajendra Singh Shekhawat',
      position: 'Minister of Jal Shakti',
      quote: 'Access to clean water and proper sanitation is a fundamental right. Our mission is to ensure every household has these basic necessities for a healthy life.',
      imagePath: '/Gajendra Singh Shekhawat.jpg',
    },
    {
      name: 'NITI Aayog',
      position: 'National Institution for Transforming India',
      quote: 'Sustainable development requires active citizen engagement. Digital platforms like these empower citizens to be partners in governance and nation-building.',
      imagePath: '/NITI Aayog.jpg',
    },
    {
      name: 'Municipal Corporation',
      position: 'Municipal Corporation Head',
      quote: 'Local governance thrives on citizen feedback. Every report helps us prioritize and address issues efficiently, making our cities better places to live.',
      imagePath: '/Municipal Corporation.png',
    },
  ];

  const nextLeader = () => {
    setCurrentIndex((prev) => (prev + 1) % leaders.length);
  };

  const prevLeader = () => {
    setCurrentIndex((prev) => (prev - 1 + leaders.length) % leaders.length);
  };

  const currentLeader = leaders[currentIndex];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-white to-green-50 relative overflow-hidden">
      {/* Indian Flag Colors Accent */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>
      
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-green-100 border-2 border-orange-200 mb-4">
            <Quote className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-semibold text-gray-800">Message from Our Leaders</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            From the Leader's Desk
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Inspiring words from our nation's leaders on cleanliness, civic responsibility, and nation-building
          </p>
        </motion.div>

        {/* Leader Card with Animation */}
        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative bg-gradient-to-br from-orange-100 via-white to-green-100 p-12 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-green-400/10"></div>
                  
                  {/* Leader Image */}
                  <div className="relative z-10 w-64 h-64 bg-white rounded-2xl shadow-2xl overflow-hidden group border-4 border-white">
                    <img
                      src={currentLeader.imagePath}
                      alt={currentLeader.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback if image doesn't load
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.classList.add('bg-gradient-to-br', 'from-orange-500', 'to-green-600', 'flex', 'items-center', 'justify-center');
                        e.currentTarget.parentElement!.innerHTML += `<div class="text-white text-center"><div class="text-4xl font-bold mb-2">${currentLeader.name.split(' ').map(n => n[0]).join('')}</div><div class="text-sm">Image Not Found</div></div>`;
                      }}
                    />
                    
                    {/* Decorative frame */}
                    <div className="absolute inset-0 border-4 border-white/20 rounded-2xl pointer-events-none"></div>
                    <div className="absolute top-4 right-4 w-12 h-12 border-4 border-white/30 rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 border-4 border-white/30 rounded-full"></div>
                  </div>
                </div>

                {/* Quote Side */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <Quote className="h-12 w-12 text-orange-400 mb-6" />
                  
                  <blockquote className="text-xl md:text-2xl text-gray-800 font-serif italic leading-relaxed mb-8">
                    "{currentLeader.quote}"
                  </blockquote>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {currentLeader.name}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium">
                      {currentLeader.position}
                    </p>
                  </div>

                  {/* Indian Flag Accent */}
                  <div className="mt-6 flex gap-2">
                    <div className="h-1 w-16 bg-orange-500 rounded-full"></div>
                    <div className="h-1 w-16 bg-white rounded-full border border-gray-200"></div>
                    <div className="h-1 w-16 bg-green-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={prevLeader}
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 hover:border-orange-500 hover:bg-orange-50 font-semibold shadow-lg"
              >
                <ChevronLeft className="h-5 w-5 mr-2" />
                Previous
              </Button>
            </motion.div>

            {/* Indicator Dots */}
            <div className="flex gap-2">
              {leaders.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-orange-500 to-green-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={nextLeader}
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 hover:border-green-600 hover:bg-green-50 font-semibold shadow-lg"
              >
                Next
                <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            </motion.div>
          </div>

          {/* Counter */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500 font-medium">
              {currentIndex + 1} of {leaders.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
