import React from 'react';
import { NavLink } from 'react-router-dom';
import {
      LayoutDashboard,
      Video,
      Users,
      CreditCard,
      Settings,
      LogOut,
      ChevronLeft,
      ChevronRight,
      Zap,
      History,
      Bell,
      User,
      Search
} from 'lucide-react';
import { cn } from '../lib/utils';

const Sidebar = ({ isOpen, toggleSidebar }) => {
      const menuItems = [
            { title: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
            { title: 'Videos', icon: Video, path: '/videos' },
            { title: 'Users', icon: Users, path: '/users' },
            { title: 'Payments', icon: CreditCard, path: '/payments' },
            { title: 'Activity', icon: History, path: '/activity' },
            { title: 'Profile', icon: User, path: '/profile' },
            { title: 'Settings', icon: Settings, path: '/settings' },
      ];

      const handleLinkClick = () => {
            if (window.innerWidth < 768) {
                  toggleSidebar();
            }
      };

      return (
            <>
                  {/* Backdrop for mobile */}
                  {isOpen && (
                        <div
                              className="fixed inset-0 z-30 bg-gray-900/50 backdrop-blur-sm md:hidden"
                              onClick={toggleSidebar}
                        />
                  )}

                  <aside
                        className={cn(
                              'fixed left-0 top-0 z-40 h-screen transition-all duration-300 border-r border-gray-100 bg-white',
                              'md:translate-x-0 md:w-64', // Always show and expanded on desktop
                              isOpen ? 'translate-x-0 w-64' : '-translate-x-full w-64' // Mobile behavior
                        )}
                  >
                        <div className="flex h-full flex-col">
                              {/* Logo Section */}
                              <div className="flex h-16 items-center border-b border-gray-100 px-6">
                                    <div className="flex items-center gap-3">
                                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                                                <Zap size={18} fill="currentColor" />
                                          </div>
                                          <span className="text-xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                                Nexus.
                                          </span>
                                    </div>
                                    {/* Mobile close button inside sidebar */}
                                    <button
                                          onClick={toggleSidebar}
                                          className="md:hidden ml-auto h-8 w-8 flex items-center justify-center text-gray-500 hover:bg-gray-50 rounded"
                                    >
                                          <ChevronLeft size={20} />
                                    </button>
                              </div>

                              {/* Navigation Section */}
                              <nav className="flex-1 space-y-1 px-3 py-4">
                                    {menuItems.map((item) => (
                                          <NavLink
                                                key={item.path}
                                                to={item.path}
                                                onClick={handleLinkClick}
                                                className={({ isActive }) =>
                                                      cn(
                                                            'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                                                            isActive
                                                                  ? 'bg-blue-50 text-blue-600'
                                                                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                                      )
                                                }
                                          >
                                                <item.icon size={20} />
                                                <span>
                                                      {item.title}
                                                </span>
                                          </NavLink>
                                    ))}
                              </nav>

                              {/* Footer Section */}
                              <div className="border-t border-gray-100 p-4">
                                    <button
                                          onClick={() => { }} // Handle Logout
                                          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors"
                                    >
                                          <LogOut size={20} />
                                          <span>
                                                Logout
                                          </span>
                                    </button>
                              </div>
                        </div>
                  </aside>
            </>
      );
};

export default Sidebar;
