import React, { useState, useRef, useEffect } from 'react';
import { Bell, Search, User, Menu, X, Check, Clock, Info, AlertTriangle, XCircle } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { notificationsData, usersData, videosData, paymentsData } from '../data/mockData';

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
      const location = useLocation();
      const navigate = useNavigate();
      const [searchQuery, setSearchQuery] = useState('');
      const [showNotifications, setShowNotifications] = useState(false);
      const [showSearchResults, setShowSearchResults] = useState(false);
      const [searchResults, setSearchResults] = useState({ users: [], videos: [], payments: [] });
      const dropdownRef = useRef(null);
      const searchRef = useRef(null);

      useEffect(() => {
            const handleClickOutside = (event) => {
                  if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                        setShowNotifications(false);
                  }
                  if (searchRef.current && !searchRef.current.contains(event.target)) {
                        setShowSearchResults(false);
                  }
            };
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
      }, []);

      const handleSearch = (query) => {
            setSearchQuery(query);
            if (query.trim().length > 1) {
                  const filteredUsers = usersData.filter(user =>
                        user.email.toLowerCase().includes(query.toLowerCase())
                  ).slice(0, 5);
                  const filteredVideos = videosData.filter(video =>
                        video.name.toLowerCase().includes(query.toLowerCase())
                  ).slice(0, 5);
                  const filteredPayments = paymentsData.filter(payment =>
                        payment.email.toLowerCase().includes(query.toLowerCase()) ||
                        payment.amount.toLowerCase().includes(query.toLowerCase())
                  ).slice(0, 5);
                  setSearchResults({ users: filteredUsers, videos: filteredVideos, payments: filteredPayments });
                  setShowSearchResults(true);
            } else {
                  setShowSearchResults(false);
            }
      };

      const handleResultClick = (path) => {
            navigate(path);
            setShowSearchResults(false);
            setSearchQuery('');
      };

      const handleSearchSubmit = (e) => {
            if (e.key === 'Enter' && searchQuery.trim()) {
                  // No longer navigating to /search, just closing dropdown if open
                  setShowSearchResults(false);
            }
      };

      const getIcon = (type) => {
            switch (type) {
                  case 'error': return <XCircle className="text-red-600" size={16} />;
                  case 'warning': return <AlertTriangle className="text-amber-600" size={16} />;
                  case 'info': return <Info className="text-blue-600" size={16} />;
                  default: return <Bell className="text-gray-600" size={16} />;
            }
      };

      const getBgColor = (type) => {
            switch (type) {
                  case 'error': return 'bg-red-50';
                  case 'warning': return 'bg-amber-50';
                  case 'info': return 'bg-blue-50';
                  default: return 'bg-gray-50';
            }
      };

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
                              <div className="relative hidden md:block" ref={searchRef}>
                                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                                    <input
                                          type="text"
                                          placeholder="Search users or videos..."
                                          className="h-9 w-64 rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                                          value={searchQuery}
                                          onChange={(e) => handleSearch(e.target.value)}
                                          onKeyDown={handleSearchSubmit}
                                          onFocus={() => searchQuery.trim().length > 1 && setShowSearchResults(true)}
                                    />

                                    {showSearchResults && (
                                          <div className="absolute top-full left-0 mt-2 w-80 origin-top-left rounded-xl border border-gray-100 bg-white shadow-xl ring-1 ring-black/5 z-50 overflow-hidden">
                                                <div className="max-h-[400px] overflow-y-auto p-2">
                                                      {searchResults.users.length === 0 && searchResults.videos.length === 0 && searchResults.payments.length === 0 ? (
                                                            <div className="px-4 py-8 text-center">
                                                                  <p className="text-sm text-gray-400 font-medium">No matching results found</p>
                                                                  <p className="text-[10px] text-gray-500 mt-1 italic">Try searching for something else</p>
                                                            </div>
                                                      ) : (
                                                            <>
                                                                  {searchResults.users.length > 0 && (
                                                                        <div className="mb-4">
                                                                              <h4 className="px-3 py-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Users</h4>
                                                                              {searchResults.users.map(user => (
                                                                                    <div
                                                                                          key={user.id}
                                                                                          onClick={() => handleResultClick('/users')}
                                                                                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                                                                                    >
                                                                                          <div className="h-8 w-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold">
                                                                                                {user.email.substring(0, 2).toUpperCase()}
                                                                                          </div>
                                                                                          <div className="flex-1 min-w-0">
                                                                                                <p className="text-sm font-medium text-gray-900 truncate">{user.email}</p>
                                                                                                <p className="text-[10px] text-gray-500">{user.totalVideos} videos</p>
                                                                                          </div>
                                                                                    </div>
                                                                              ))}
                                                                        </div>
                                                                  )}

                                                                  {searchResults.videos.length > 0 && (
                                                                        <div className="mb-4">
                                                                              <h4 className="px-3 py-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Videos</h4>
                                                                              {searchResults.videos.map(video => (
                                                                                    <div
                                                                                          key={video.id}
                                                                                          onClick={() => handleResultClick('/videos')}
                                                                                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                                                                                    >
                                                                                          <div className="h-8 w-12 rounded bg-gray-100 overflow-hidden shrink-0">
                                                                                                <img src={video.thumbnail} alt="" className="h-full w-full object-cover" />
                                                                                          </div>
                                                                                          <div className="flex-1 min-w-0">
                                                                                                <p className="text-sm font-medium text-gray-900 truncate">{video.name}</p>
                                                                                                <p className="text-[10px] text-gray-500">{video.duration} • {video.date}</p>
                                                                                          </div>
                                                                                    </div>
                                                                              ))}
                                                                        </div>
                                                                  )}

                                                                  {searchResults.payments.length > 0 && (
                                                                        <div>
                                                                              <h4 className="px-3 py-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Payments</h4>
                                                                              {searchResults.payments.map(payment => (
                                                                                    <div
                                                                                          key={payment.id}
                                                                                          onClick={() => handleResultClick('/payments')}
                                                                                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                                                                                    >
                                                                                          <div className="h-8 w-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center text-xs font-bold">
                                                                                                <Clock size={14} />
                                                                                          </div>
                                                                                          <div className="flex-1 min-w-0">
                                                                                                <p className="text-sm font-medium text-gray-900 truncate">{payment.email}</p>
                                                                                                <p className="text-[10px] text-gray-500">{payment.amount} • {payment.date}</p>
                                                                                          </div>
                                                                                    </div>
                                                                              ))}
                                                                        </div>
                                                                  )}
                                                            </>
                                                      )}
                                                </div>
                                          </div>
                                    )}
                              </div>

                              <div className="relative" ref={dropdownRef}>
                                    <button
                                          onClick={() => setShowNotifications(!showNotifications)}
                                          className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
                                    >
                                          <Bell size={18} className="text-gray-500" />
                                          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 border-2 border-white"></span>
                                    </button>

                                    {showNotifications && (
                                          <div className="absolute right-0 mt-2 w-80 origin-top-right rounded-xl border border-gray-100 bg-white shadow-xl ring-1 ring-black/5 focus:outline-none z-50 overflow-hidden">
                                                <div className="flex items-center justify-between border-b border-gray-50 px-4 py-3">
                                                      <h3 className="text-sm font-semibold text-gray-900">Notifications</h3>
                                                      <button className="text-xs font-medium text-blue-600 hover:text-blue-700">Mark all read</button>
                                                </div>
                                                <div className="max-h-96 overflow-y-auto">
                                                      {notificationsData.length > 0 ? (
                                                            notificationsData.map((notification) => (
                                                                  <div key={notification.id} className="flex p-4 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-none cursor-pointer">
                                                                        <div className={`mt-0.5 rounded-full p-2 h-fit ${getBgColor(notification.type)}`}>
                                                                              {getIcon(notification.type)}
                                                                        </div>
                                                                        <div className="ml-3 flex-1">
                                                                              <p className="text-sm font-semibold text-gray-900">{notification.title}</p>
                                                                              <p className="mt-0.5 text-xs text-gray-600 line-clamp-2">{notification.message}</p>
                                                                              <div className="mt-2 flex items-center gap-1.5 text-[10px] text-gray-400">
                                                                                    <Clock size={10} />
                                                                                    {notification.time}
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            ))
                                                      ) : (
                                                            <div className="py-10 text-center">
                                                                  <Bell size={24} className="mx-auto text-gray-300" />
                                                                  <p className="mt-2 text-xs text-gray-500">No new notifications</p>
                                                            </div>
                                                      )}
                                                </div>
                                                <div className="border-t border-gray-50 px-4 py-2 bg-gray-50/50">
                                                      {/* <button className="w-full text-center text-xs font-medium text-gray-500 hover:text-gray-700 py-1">View all activity</button> */}
                                                </div>
                                          </div>
                                    )}
                              </div>

                              <div className="h-8 w-px bg-gray-100 mx-2"></div>

                              <div
                                    className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
                                    onClick={() => navigate('/profile')}
                              >
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
