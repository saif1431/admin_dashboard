import React from 'react';
import { cn } from '../../lib/utils';

export const Card = ({ className, children }) => (
      <div className={cn('bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden', className)}>
            {children}
      </div>
);

export const CardHeader = ({ className, children }) => (
      <div className={cn('px-6 py-4 border-b border-gray-100', className)}>{children}</div>
);

export const CardTitle = ({ className, children }) => (
      <h3 className={cn('text-lg font-semibold text-gray-900', className)}>{children}</h3>
);

export const CardContent = ({ className, children }) => (
      <div className={cn('p-6', className)}>{children}</div>
);

export const CardFooter = ({ className, children }) => (
      <div className={cn('px-6 py-4 bg-gray-50 border-t border-gray-100', className)}>{children}</div>
);
