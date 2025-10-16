import React, { useState } from 'react';
import DotSpinner from './DotSpinner';
import { Button } from '@/components/ui/button';

const LoaderDemo: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoading = () => {
    setIsLoading(true);
    // Simulate loading for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-bold text-nature-green mb-6">Dot Spinner Loader Demo</h2>
      
      {/* Different Sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Different Sizes:</h3>
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <DotSpinner size="sm" />
            <span className="text-sm text-muted-foreground">Small</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <DotSpinner size="md" />
            <span className="text-sm text-muted-foreground">Medium</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <DotSpinner size="lg" />
            <span className="text-sm text-muted-foreground">Large</span>
          </div>
        </div>
      </div>

      {/* Different Colors */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Different Colors:</h3>
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <DotSpinner color="primary" />
            <span className="text-sm text-muted-foreground">Primary (Nature Green)</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <DotSpinner color="secondary" />
            <span className="text-sm text-muted-foreground">Secondary (Leaf Green)</span>
          </div>
          <div className="flex flex-col items-center gap-2 bg-nature-green p-4 rounded-lg">
            <DotSpinner color="white" />
            <span className="text-sm text-white">White</span>
          </div>
        </div>
      </div>

      {/* Loading State Example */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Loading State Example:</h3>
        <div className="flex items-center gap-4">
          <Button 
            onClick={handleLoading} 
            disabled={isLoading}
            className="bg-nature-green hover:bg-leaf-green text-white"
          >
            {isLoading ? (
              <>
                <DotSpinner size="sm" color="white" className="mr-2" />
                Loading...
              </>
            ) : (
              'Start Loading'
            )}
          </Button>
        </div>
      </div>

      {/* Full Screen Loading Overlay Example */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Full Screen Overlay Example:</h3>
        <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <DotSpinner size="lg" className="mb-4" />
                <p className="text-nature-green font-medium">Loading...</p>
              </div>
            </div>
          )}
          <div className="p-4">
            <p className="text-gray-600">This is the content area that gets covered by the loading overlay.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoaderDemo;
