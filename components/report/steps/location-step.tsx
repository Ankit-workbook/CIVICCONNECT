'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Navigation, Search, Info } from 'lucide-react';

interface LocationStepProps {
  location: { lat: number; lng: number; address: string; manual?: boolean } | null;
  onChange: (location: { lat: number; lng: number; address: string; manual?: boolean }) => void;
}

export default function LocationStep({ location, onChange }: LocationStepProps) {
  const [address, setAddress] = useState(location?.address || '');
  const [isLoading, setIsLoading] = useState(false);

  const handleDetectLocation = () => {
    setIsLoading(true);
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          
          // Mock reverse geocoding (replace with actual Google Maps API)
          const mockAddress = `Coordinates: ${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
          
          onChange({
            lat: latitude,
            lng: longitude,
            address: mockAddress,
            manual: false,
          });
          setAddress(mockAddress);
          setIsLoading(false);
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Unable to detect your location. Please enter manually.');
          setIsLoading(false);
        }
      );
    } else {
      alert('Geolocation is not supported by your browser');
      setIsLoading(false);
    }
  };

  const handleAddressSearch = () => {
    // Mock geocoding (replace with actual Google Maps API)
    if (address) {
      onChange({
        lat: 28.6139 + Math.random() * 0.1,
        lng: 77.2090 + Math.random() * 0.1,
        address,
        manual: false,
      });
    }
  };

  const handleManualAddress = () => {
    if (address.trim()) {
      onChange({
        lat: 0,
        lng: 0,
        address: address.trim(),
        manual: true,
      });
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Location</h2>
      <p className="text-gray-600 mb-6">
        Where is the issue located? Use GPS or search for the address.
      </p>

      {/* Quick GPS Detection */}
      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="bg-primary rounded-full p-3">
            <Navigation className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-1">
              Auto-detect Location
            </h3>
            <p className="text-sm text-gray-600">
              Use your device's GPS for accurate location
            </p>
          </div>
          <Button onClick={handleDetectLocation} disabled={isLoading}>
            {isLoading ? 'Detecting...' : 'Detect'}
          </Button>
        </div>
      </div>

      {/* Manual Search */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Or search for an address
        </label>
        <div className="flex gap-2">
          <Input
            placeholder="Enter street address, landmark, or area..."
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddressSearch()}
          />
          <Button onClick={handleAddressSearch} variant="outline">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Manual Address Entry (Privacy Option) */}
      <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6 mb-6">
        <div className="flex items-start gap-3 mb-4">
          <Info className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-1">
              Manual Address Entry
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              If you prefer not to share your exact location, you can provide an approximate address or general area
            </p>
          </div>
        </div>
        <Textarea
          placeholder="Example: Near City Park Main Gate, Main Street Market Area, Sector 5 Community Center, etc."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="mb-3 min-h-[80px]"
        />
        <Button
          onClick={handleManualAddress}
          variant="outline"
          className="w-full border-amber-600 text-amber-700 hover:bg-amber-100"
          disabled={!address.trim()}
        >
          Use Manual Address
        </Button>
      </div>

      {/* Map Placeholder */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg h-80 flex items-center justify-center border-2 border-gray-200 mb-6">
        <div className="text-center">
          <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Interactive Map
          </h3>
          <p className="text-gray-600 max-w-sm mx-auto">
            Google Maps integration will allow you to pin the exact location by clicking on the map
          </p>
        </div>
      </div>

      {/* Selected Location Display */}
      {location && (
        <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <p className="font-medium text-green-900 mb-1">
                Location {location.manual ? 'Provided (Approximate)' : 'Selected'}
              </p>
              <p className="text-sm text-green-700">{location.address}</p>
              {!location.manual && location.lat !== 0 && (
                <p className="text-xs text-green-600 mt-1">
                  Coordinates: {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
