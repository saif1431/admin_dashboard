import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils';

const Modal = ({ isOpen, onClose, title, children, className }) => {
      // Close on Escape key
      useEffect(() => {
            const handleEsc = (e) => {
                  if (e.key === 'Escape') onClose();
            };
            if (isOpen) {
                  document.body.style.overflow = 'hidden';
                  window.addEventListener('keydown', handleEsc);
            }
            return () => {
                  document.body.style.overflow = 'unset';
                  window.removeEventListener('keydown', handleEsc);
            };
      }, [isOpen, onClose]);

      if (!isOpen) return null;

      return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                  {/* Backdrop */}
                  <div
                        className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
                        onClick={onClose}
                  />

                  {/* Modal Content */}
                  <div
                        className={cn(
                              "relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden",
                              className
                        )}
                  >
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                              <button
                                    onClick={onClose}
                                    className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                              >
                                    <X size={20} />
                              </button>
                        </div>

                        <div className="p-6">
                              {children}
                        </div>
                  </div>
            </div>
      );
};

export default Modal;
