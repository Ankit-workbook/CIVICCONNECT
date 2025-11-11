'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, MapPin, FileText, Send, CheckCircle2 } from 'lucide-react';
import ImageUploadStep from './steps/image-upload-step';
import LocationStep from './steps/location-step';
import DetailsStep from './steps/details-step';
import ReviewStep from './steps/review-step';
import { useToast } from '@/components/ui/use-toast';

type Step = 'upload' | 'location' | 'details' | 'review' | 'success';

export default function ReportForm() {
  const [currentStep, setCurrentStep] = useState<Step>('upload');
  const [formData, setFormData] = useState({
    images: [] as File[],
    location: null as { lat: number; lng: number; address: string } | null,
    category: '',
    description: '',
    authority: '',
  });
  const { toast } = useToast();

  const steps = [
    { id: 'upload', label: 'Upload Photos', icon: Upload },
    { id: 'location', label: 'Location', icon: MapPin },
    { id: 'details', label: 'Details', icon: FileText },
    { id: 'review', label: 'Review', icon: Send },
  ];

  const currentStepIndex = steps.findIndex((step) => step.id === currentStep);

  const handleNext = () => {
    if (currentStep === 'upload' && formData.images.length === 0) {
      toast({
        title: 'Images Required',
        description: 'Please upload at least one image of the issue',
        variant: 'destructive',
      });
      return;
    }

    if (currentStep === 'location' && !formData.location) {
      toast({
        title: 'Location Required',
        description: 'Please select the location of the issue',
        variant: 'destructive',
      });
      return;
    }

    if (currentStep === 'details' && !formData.category) {
      toast({
        title: 'Category Required',
        description: 'Please select the issue category',
        variant: 'destructive',
      });
      return;
    }

    const stepOrder: Step[] = ['upload', 'location', 'details', 'review'];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex < stepOrder.length - 1) {
      setCurrentStep(stepOrder[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const stepOrder: Step[] = ['upload', 'location', 'details', 'review'];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(stepOrder[currentIndex - 1]);
    }
  };

  const handleSubmit = async () => {
    // TODO: Implement Firebase submission
    toast({
      title: 'Report Submitted Successfully! 🎉',
      description: 'Your report has been submitted. Tracking ID: CC-2024-ABC123',
    });
    setCurrentStep('success');
  };

  if (currentStep === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="max-w-2xl mx-auto p-12 text-center border-none shadow-2xl">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <CheckCircle2 className="h-20 w-20 text-green-500 mx-auto mb-6" />
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Report Submitted Successfully!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for helping improve our community. We've received your report and will keep you updated.
          </p>
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6">
            <p className="text-sm text-gray-600 mb-2">Your Tracking ID</p>
            <p className="text-2xl font-mono font-bold text-primary">
              CC-2024-ABC123
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Save this ID to track your report status
            </p>
          </div>
          <div className="flex gap-4 justify-center">
            <Button onClick={() => window.location.href = '/track'}>
              Track This Report
            </Button>
            <Button variant="outline" onClick={() => window.location.href = '/'}>
              Back to Home
            </Button>
          </div>
        </Card>
      </motion.div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Progress Indicator */}
      <div className="mb-12">
        <div className="flex justify-between items-center relative">
          {/* Progress Bar */}
          <div className="absolute top-5 left-0 w-full h-1 bg-gray-200 -z-10">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: '0%' }}
              animate={{
                width: `${(currentStepIndex / (steps.length - 1)) * 100}%`,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Step Indicators */}
          {steps.map((step, index) => {
            const isActive = step.id === currentStep;
            const isCompleted = index < currentStepIndex;

            return (
              <div key={step.id} className="flex flex-col items-center relative">
                <motion.div
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${
                    isCompleted
                      ? 'bg-primary border-primary text-white'
                      : isActive
                      ? 'bg-white border-primary text-primary shadow-lg'
                      : 'bg-white border-gray-300 text-gray-400'
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  <step.icon className="h-6 w-6" />
                </motion.div>
                <span
                  className={`mt-2 text-sm font-medium ${
                    isActive ? 'text-primary' : 'text-gray-500'
                  }`}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Form Content */}
      <Card className="p-8 border-none shadow-2xl">
        <AnimatePresence mode="wait">
          {currentStep === 'upload' && (
            <motion.div
              key="upload"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ImageUploadStep
                images={formData.images}
                onChange={(images) => setFormData({ ...formData, images })}
              />
            </motion.div>
          )}

          {currentStep === 'location' && (
            <motion.div
              key="location"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <LocationStep
                location={formData.location}
                onChange={(location) => setFormData({ ...formData, location })}
              />
            </motion.div>
          )}

          {currentStep === 'details' && (
            <motion.div
              key="details"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <DetailsStep
                category={formData.category}
                description={formData.description}
                authority={formData.authority}
                onChange={(data) => setFormData({ ...formData, ...data })}
              />
            </motion.div>
          )}

          {currentStep === 'review' && (
            <motion.div
              key="review"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ReviewStep formData={formData} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 'upload'}
          >
            Back
          </Button>
          {currentStep === 'review' ? (
            <Button onClick={handleSubmit} size="lg" className="gap-2">
              Submit Report
              <Send className="h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={handleNext} size="lg">
              Continue
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
