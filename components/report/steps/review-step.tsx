'use client';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { MapPin, FileText, Building2, Images } from 'lucide-react';
import { getCategoryIcon, getCategoryLabel } from '@/lib/utils';
import { IssueCategory } from '@/types';

interface ReviewStepProps {
  formData: {
    images: File[];
    location: { lat: number; lng: number; address: string } | null;
    category: string;
    description: string;
    authority: string;
  };
}

export default function ReviewStep({ formData }: ReviewStepProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Review Your Report</h2>
      <p className="text-gray-600 mb-6">
        Please review all the information before submitting
      </p>

      <div className="space-y-6">
        {/* Images */}
        <Card className="p-6 border-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Images className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Photos</h3>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
            {formData.images.map((file, index) => (
              <div key={index} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </Card>

        {/* Location */}
        <Card className="p-6 border-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-100 p-2 rounded-lg">
              <MapPin className="h-5 w-5 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Location</h3>
          </div>
          {formData.location && (
            <div>
              <p className="text-gray-700 mb-2">{formData.location.address}</p>
              <p className="text-sm text-gray-500">
                Coordinates: {formData.location.lat.toFixed(4)}, {formData.location.lng.toFixed(4)}
              </p>
            </div>
          )}
        </Card>

        {/* Category & Details */}
        <Card className="p-6 border-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-purple-100 p-2 rounded-lg">
              <FileText className="h-5 w-5 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Issue Details</h3>
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-sm text-gray-600 block mb-1">Category</label>
              <div className="flex items-center gap-2">
                <span className="text-2xl">
                  {getCategoryIcon(formData.category as IssueCategory)}
                </span>
                <span className="font-medium text-gray-900">
                  {getCategoryLabel(formData.category as IssueCategory)}
                </span>
              </div>
            </div>
            {formData.description && (
              <div>
                <label className="text-sm text-gray-600 block mb-1">Description</label>
                <p className="text-gray-700">{formData.description}</p>
              </div>
            )}
          </div>
        </Card>

        {/* Authority */}
        <Card className="p-6 border-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-orange-100 p-2 rounded-lg">
              <Building2 className="h-5 w-5 text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Assigned Authority</h3>
          </div>
          <p className="text-gray-700">{formData.authority}</p>
          <Badge className="mt-2 bg-orange-100 text-orange-800">
            Will be notified
          </Badge>
        </Card>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
        <p className="text-sm text-yellow-800">
          <strong>Note:</strong> By submitting this report, you confirm that the information provided is accurate. 
          You will receive a tracking ID to monitor the status of your report.
        </p>
      </div>
    </div>
  );
}
