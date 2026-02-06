import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { cn } from '../lib/utils';

const MainLayout = ({ children }) => {
      const [isSidebarOpen, setIsSidebarOpen] = useState(true);

      const toggleSidebar = () => {
            setIsSidebarOpen(!isSidebarOpen);
      };

      return (
            <div className="min-h-screen bg-gray-50/50">
                  <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

                  <div
                        className={cn(
                              'transition-all duration-300',
                              'ml-0', // Base class for small screens
                              'md:ml-64' // Always 64 on large screens
                        )}
                  >
                        <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
                        <main className="p-6">
                              <div className="mx-auto max-w-7xl">
                                    {children}
                              </div>
                        </main>
                  </div>
            </div>
      );
};

export default MainLayout;
