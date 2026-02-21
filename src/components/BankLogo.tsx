import React, { useState } from 'react';
import { Building2 } from 'lucide-react';

interface BankLogoProps {
  name: string;
  logo?: string;
  className?: string;
  icon?: React.ReactNode;
}

export default function BankLogo({ name, logo, className = "", icon }: BankLogoProps) {
  const [imageError, setImageError] = useState(false);

  // 1. Try to show image
  if (logo && !imageError) {
    return (
      <img 
        src={logo} 
        alt={name} 
        className={`${className} object-contain`}
        onError={() => setImageError(true)}
      />
    );
  }

  // 2. Fallback to Icon if provided
  if (icon) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        {icon}
      </div>
    );
  }

  // 3. Fallback to Initials
  const initials = name
    .split(' ')
    .filter(word => word.length > 0)
    .map(word => word[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className={`${className} flex items-center justify-center bg-slate-200 text-slate-500 font-bold select-none`}>
      {initials ? (
        <span style={{ fontSize: '40%' }}>{initials}</span>
      ) : (
        <Building2 className="w-1/2 h-1/2" />
      )}
    </div>
  );
}
