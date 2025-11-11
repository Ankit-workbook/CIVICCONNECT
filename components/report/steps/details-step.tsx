'use client';

import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { CATEGORIES } from '@/lib/constants';
import { getAuthorityFromCategory } from '@/lib/utils';
import { IssueCategory } from '@/types';

interface DetailsStepProps {
  category: string;
  description: string;
  authority: string;
  onChange: (data: { category?: string; description?: string; authority?: string }) => void;
}

export default function DetailsStep({ category, description, authority, onChange }: DetailsStepProps) {
  const handleCategorySelect = (cat: string) => {
    onChange({
      category: cat,
      authority: getAuthorityFromCategory(cat as IssueCategory),
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Issue Details</h2>
      <p className="text-gray-600 mb-6">
        Select the category and provide additional details about the issue
      </p>

      {/* Category Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Category <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              className={`p-4 rounded-lg border-2 transition-all hover:scale-105 hover:shadow-md ${
                category === cat.id
                  ? 'border-primary bg-blue-50 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="text-4xl mb-2">{cat.icon}</div>
              <div className="text-sm font-semibold text-gray-900">
                {cat.label}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description (Optional)
        </label>
        <Textarea
          placeholder="Provide more details about the issue... (e.g., size, severity, duration)"
          value={description}
          onChange={(e) => onChange({ description: e.target.value })}
          className="min-h-32"
          maxLength={500}
        />
        <p className="text-xs text-gray-500 mt-1 text-right">
          {description.length}/500 characters
        </p>
      </div>

      {/* Authority Display */}
      {category && (
        <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Will be forwarded to:
          </label>
          <Input
            value={authority}
            onChange={(e) => onChange({ authority: e.target.value })}
            className="bg-white"
          />
          <p className="text-xs text-gray-600 mt-2">
            This department will be notified about your report
          </p>
        </div>
      )}
    </div>
  );
}
