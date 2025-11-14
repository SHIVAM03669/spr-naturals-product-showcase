import React from 'react';

interface DotSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
  className?: string;
}

const DotSpinner: React.FC<DotSpinnerProps> = ({ 
  size = 'md', 
  color = 'primary',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-11 h-11',
    lg: 'w-16 h-16'
  };

  const dotSizeClasses = {
    sm: 'w-[15%] h-[15%]',
    md: 'w-[20%] h-[20%]',
    lg: 'w-[25%] h-[25%]'
  };

  const colorClasses = {
    primary: 'bg-nature-green shadow-nature-green',
    secondary: 'bg-leaf-green shadow-leaf-green',
    white: 'bg-white shadow-white'
  };

  return (
    <div className={`dot-spinner relative flex items-center justify-start ${sizeClasses[size]} ${className}`}>
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="absolute top-0 left-0 flex items-center justify-start h-full w-full"
          style={{
            transform: `rotate(${index * 45}deg)`
          }}
        >
          <div
            className={`dot-spinner__dot ${dotSizeClasses[size]} rounded-full ${colorClasses[color]} transform scale-0 opacity-50 animate-pulse-dot`}
            style={{
              animationDelay: `${(index * -0.125) * 0.9}s`
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default DotSpinner;
