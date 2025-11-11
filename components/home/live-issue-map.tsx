'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LiveIssueMap() {
  const [filter, setFilter] = useState('all');

  // Sample data - will be replaced with real data
  const sampleReports = [
    { id: 1, category: 'pothole', status: 'pending', location: 'MG Road' },
    { id: 2, category: 'garbage', status: 'in_progress', location: 'Park Street' },
    { id: 3, category: 'water', status: 'resolved', location: 'Lake View' },
    { id: 4, category: 'streetlight', status: 'pending', location: 'Main Street' },
  ];

  const categories = [
    { id: 'all', label: 'All Issues', count: 247 },
    { id: 'pothole', label: 'Potholes', count: 89 },
    { id: 'garbage', label: 'Garbage', count: 67 },
    { id: 'water', label: 'Water', count: 45 },
    { id: 'streetlight', label: 'Streetlights', count: 32 },
    { id: 'other', label: 'Other', count: 14 },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Live Issue Map
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what's happening in your community right now
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={filter === cat.id ? 'default' : 'outline'}
              onClick={() => setFilter(cat.id)}
              className="gap-2"
            >
              {cat.label}
              <Badge variant="secondary" className="ml-1">
                {cat.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Map Placeholder */}
        <Card className="overflow-hidden border-none shadow-2xl">
          <div className="relative w-full h-[600px] bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-20 w-20 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Interactive Map Coming Soon
              </h3>
              <p className="text-gray-600 max-w-md">
                Google Maps integration will show all reported issues with color-coded markers and clustering
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto">
                <div className="text-center">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full mx-auto mb-2" />
                  <span className="text-xs text-gray-600">Pending</span>
                </div>
                <div className="text-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto mb-2" />
                  <span className="text-xs text-gray-600">In Progress</span>
                </div>
                <div className="text-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-2" />
                  <span className="text-xs text-gray-600">Resolved</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Recent Reports Preview */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sampleReports.map((report) => (
            <Card key={report.id} className="p-4 hover:shadow-lg transition-shadow border-none">
              <div className="flex items-start justify-between mb-2">
                <Badge
                  className={
                    report.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : report.status === 'in_progress'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }
                >
                  {report.status.replace('_', ' ')}
                </Badge>
                <span className="text-2xl">{report.category === 'pothole' ? '🕳️' : report.category === 'garbage' ? '🚮' : report.category === 'water' ? '💧' : '💡'}</span>
              </div>
              <p className="text-sm font-medium text-gray-900 capitalize">{report.category}</p>
              <p className="text-xs text-gray-600 mt-1 flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {report.location}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
