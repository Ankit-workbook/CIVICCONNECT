'use client';

'use client';

import { useCallback } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface ImageUploadStepProps {
  images: File[];
  onChange: (images: File[]) => void;
}

export default function ImageUploadStep({ images, onChange }: ImageUploadStepProps) {
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter((file) => file.type.startsWith('image/'));
    
    if (images.length + validFiles.length > 5) {
      alert('Maximum 5 images allowed');
      return;
    }
    
    onChange([...images, ...validFiles]);
  };

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const files = Array.from(e.dataTransfer.files);
      const validFiles = files.filter((file) => file.type.startsWith('image/'));
      
      if (images.length + validFiles.length > 5) {
        alert('Maximum 5 images allowed');
        return;
      }
      
      onChange([...images, ...validFiles]);
    },
    [images, onChange]
  );

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const removeImage = (index: number) => {
    onChange(images.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Upload Photos</h2>
      <p className="text-gray-600 mb-6">
        Add clear photos of the issue (maximum 5 images, up to 2MB each)
      </p>

      {/* Upload Zone */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-primary hover:bg-blue-50 transition-all cursor-pointer mb-6"
        onClick={() => document.getElementById('file-input')?.click()}
      >
        <input
          id="file-input"
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileSelect}
          className="hidden"
        />
        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <p className="text-lg font-medium text-gray-700 mb-2">
          Click to upload or drag and drop
        </p>
        <p className="text-sm text-gray-500">
          PNG, JPG, GIF up to 2MB (max 5 images)
        </p>
      </div>

      {/* Image Previews */}
      {images.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Uploaded Images ({images.length}/5)
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((file, index) => (
              <div key={index} className="relative group">
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`Upload ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => removeImage(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
                <p className="text-xs text-gray-500 mt-1 truncate">{file.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
