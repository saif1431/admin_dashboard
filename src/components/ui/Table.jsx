import React from 'react';
import { cn } from '../../lib/utils';

export const Table = ({ children, className }) => (
      <div className="w-full overflow-x-auto">
            <table className={cn('w-full text-sm text-left text-gray-500', className)}>
                  {children}
            </table>
      </div>
);

export const TableHeader = ({ children, className }) => (
      <thead className={cn('text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200', className)}>
            {children}
      </thead>
);

export const TableBody = ({ children, className }) => (
      <tbody className={cn('divide-y divide-gray-200 bg-white', className)}>{children}</tbody>
);

export const TableRow = ({ children, className }) => (
      <tr className={cn('hover:bg-gray-50 transition-colors', className)}>{children}</tr>
);

export const TableHead = ({ children, className }) => (
      <th className={cn('px-6 py-4 font-semibold text-gray-900', className)}>{children}</th>
);

export const TableCell = ({ children, className }) => (
      <td className={cn('px-6 py-4 whitespace-nowrap', className)}>{children}</td>
);
