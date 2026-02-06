import { Bell, Search, User, Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
      const location = useLocation();

      // Convert path to title
      const getPageTitle = (path) => {
            if (path === '/dashboard') return 'Dashboard';
            const segment = path.split('/')[1];
            return segment.charAt(0).toUpperCase() + segment.slice(1);
      };

      return (
            <header className="sticky top-0 z-30 flex h-16 w-full items-center border-b border-gray-100 bg-white/80 px-6 backdrop-blur-md">
                  <div className="flex w-full items-center justify-between">
                        <div className="flex items-center gap-4">
                              <button
                                    onClick={toggleSidebar}
                                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-100 hover:bg-gray-50 md:hidden"
                              >
                                    {isSidebarOpen ? <X size={20} className="text-gray-500" /> : <Menu size={20} className="text-gray-500" />}
                              </button>
                              <h1 className="text-xl font-semibold text-gray-900">{getPageTitle(location.pathname)}</h1>
                        </div>

                        <div className="flex items-center gap-4">
                              <div className="relative hidden md:block">
                                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                                    <input
                                          type="text"
                                          placeholder="Search..."
                                          className="h-9 w-64 rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                    />
                              </div>

                              <button className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-gray-100 hover:bg-gray-50">
                                    <Bell size={18} className="text-gray-500" />
                                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 border-2 border-white"></span>
                              </button>

                              <div className="h-8 w-px bg-gray-100 mx-2"></div>

                              <div className="flex items-center gap-3">
                                    <div className="text-right hidden sm:block">
                                          <p className="text-sm font-medium text-gray-900">Alex Johnson</p>
                                          <p className="text-xs text-gray-500">Admin</p>
                                    </div>
                                    <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center border border-blue-200 overflow-hidden">
                                          <img src="https://ui-avatars.com/api/?name=Alex+Johnson&background=0D8ABC&color=fff" alt="User Profile" />
                                    </div>
                              </div>
                        </div>
                  </div>
            </header>
      );
};

export default Navbar;
