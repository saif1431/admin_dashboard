import React, { useState, useEffect } from 'react';
import { Search as SearchIcon, Filter, User, Video, Calendar, Tag, ChevronRight } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { usersData, videosData } from '../data/mockData';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';

const SearchPage = () => {
      const [searchParams, setSearchParams] = useSearchParams();
      const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
      const [activeTab, setActiveTab] = useState('all'); // all, users, videos

      useEffect(() => {
            const query = searchParams.get('q');
            if (query !== null) {
                  setSearchQuery(query);
            }
      }, [searchParams]);

      const handleSearchChange = (val) => {
            setSearchQuery(val);
            if (val.trim()) {
                  setSearchParams({ q: val });
            } else {
                  setSearchParams({});
            }
      };

      const filteredUsers = usersData.filter(user =>
            user.email.toLowerCase().includes(searchQuery.toLowerCase())
      );

      const filteredVideos = videosData.filter(video =>
            video.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      const totalResults = (activeTab === 'all' || activeTab === 'users' ? filteredUsers.length : 0) +
            (activeTab === 'all' || activeTab === 'videos' ? filteredVideos.length : 0);

      return (
            <div className="space-y-6">
                  <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold text-gray-900">Global Search</h2>

                        <div className="relative">
                              <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                              <input
                                    type="text"
                                    placeholder="Search for anything (users, videos, status...)"
                                    className="h-14 w-full rounded-2xl border border-gray-200 bg-white pl-12 pr-4 text-base shadow-sm focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all"
                                    value={searchQuery}
                                    onChange={(e) => handleSearchChange(e.target.value)}
                                    autoFocus
                              />
                        </div>

                        <div className="flex items-center gap-2 overflow-x-auto pb-2">
                              {['all', 'users', 'videos'].map((tab) => (
                                    <button
                                          key={tab}
                                          onClick={() => setActiveTab(tab)}
                                          className={cn(
                                                "px-5 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap",
                                                activeTab === tab
                                                      ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                                                      : "bg-white text-gray-500 border border-gray-100 hover:border-gray-300 hover:text-gray-700"
                                          )}
                                    >
                                          {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                    </button>
                              ))}
                             
                        </div>
                  </div>

                  <div className="space-y-8">
                        {/* Users Results */}
                        {(activeTab === 'all' || activeTab === 'users') && filteredUsers.length > 0 && (
                              <section className="space-y-4">
                                    <h3 className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-wider">
                                          <User size={16} />
                                          Users ({filteredUsers.length})
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                          {filteredUsers.map(user => (
                                                <Card key={user.id} className="group cursor-pointer hover:border-blue-200 transition-all border-none shadow-sm">
                                                      <CardContent className="p-4 flex items-center justify-between">
                                                            <div className="flex items-center gap-3">
                                                                  <div className="h-10 w-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                                                                        {user.email.substring(0, 2).toUpperCase()}
                                                                  </div>
                                                                  <div>
                                                                        <p className="font-bold text-gray-900 truncate max-w-[150px]">{user.email}</p>
                                                                        <p className="text-xs text-gray-500">{user.totalVideos} Videos</p>
                                                                  </div>
                                                            </div>
                                                            <ChevronRight size={18} className="text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                                                      </CardContent>
                                                </Card>
                                          ))}
                                    </div>
                              </section>
                        )}

                        {(activeTab === 'all' || activeTab === 'videos') && filteredVideos.length > 0 && (
                              <section className="space-y-4">
                                    <h3 className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-wider">
                                          <Video size={16} />
                                          Videos ({filteredVideos.length})
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                          {filteredVideos.map(video => (
                                                <Card key={video.id} className="group cursor-pointer hover:border-blue-200 transition-all border-none shadow-sm overflow-hidden">
                                                      <div className="flex items-stretch">
                                                            <div className="w-32 sm:w-40 shrink-0">
                                                                  <img src={video.thumbnail} alt={video.name} className="h-full w-full object-cover" />
                                                            </div>
                                                            <CardContent className="flex-1 p-4">
                                                                  <div className="flex items-start justify-between">
                                                                        <div>
                                                                              <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{video.name}</h4>
                                                                              <div className="mt-2 flex flex-wrap gap-3 text-xs text-gray-500">
                                                                                    <span className="flex items-center gap-1"><Calendar size={12} /> {video.date}</span>
                                                                                    <span className="flex items-center gap-1"><Tag size={12} /> {video.status}</span>
                                                                              </div>
                                                                        </div>
                                                                        <ChevronRight size={18} className="text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                                                                  </div>
                                                            </CardContent>
                                                      </div>
                                                </Card>
                                          ))}
                                    </div>
                              </section>
                        )}

                        {totalResults === 0 && (
                              <div className="py-24 text-center">
                                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-50 text-gray-300">
                                          <SearchIcon size={40} />
                                    </div>
                                    <h3 className="mt-6 text-xl font-bold text-gray-900">No results found</h3>
                                    <p className="mt-2 text-gray-500 max-w-sm mx-auto">
                                          We couldn't find anything matching "{searchQuery}". Try a different term.
                                    </p>
                                    <Button
                                          variant="outline"
                                          className="mt-6"
                                          onClick={() => setSearchQuery('')}
                                    >
                                          Clear search
                                    </Button>
                              </div>
                        )}
                  </div>
            </div>
      );
};

export default SearchPage;

// Internal utility
function cn(...inputs) {
      return inputs.filter(Boolean).join(' ');
}
