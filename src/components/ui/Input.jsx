import React from 'react';
import { cn } from '../../lib/utils';

export const Input = React.forwardRef(({ className, label, error, ...props }, ref) => {
      return (
            <div className="w-full">
                  {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
                  <input
                        ref={ref}
                        className={cn(
                              'w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500',
                              error && 'border-red-500 focus:ring-red-500/20 focus:border-red-500',
                              className
                        )}
                        {...props}
                  />
                  {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
            </div>
      );
});

export const Select = React.forwardRef(({ className, label, options = [], error, ...props }, ref) => {
      return (
            <div className="w-full">
                  {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
                  <select
                        ref={ref}
                        className={cn(
                              'w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500 appearance-none bg-[url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20fill%3D%27none%27%20viewBox%3D%270%200%2020%2020%27%3E%3Cpath%20stroke%3D%27%236B7280%27%20stroke-linecap%3D%27round%27%20stroke-linejoin%3D%27round%27%20stroke-width%3D%271.5%27%20d%3D%27M6%208l4%204%204-4%27%2F%3E%3C%2Fsvg%3E")] bg-size-[1.25rem_1.25rem] bg-position-[right_0.5rem_center] bg-no-repeat',
                              error && 'border-red-500 focus:ring-red-500/20 focus:border-red-500',
                              className
                        )}
                        {...props}
                  >
                        {options.map((opt) => (
                              <option key={opt.value} value={opt.value}>
                                    {opt.label}
                              </option>
                        ))}
                  </select>
                  {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
            </div>
      );
});

Input.displayName = 'Input';
Select.displayName = 'Select';
