import React, { useState } from 'react';
import { Bell, Info, AlertTriangle, XCircle, Clock, Check, Search } from 'lucide-react';
import { notificationsData } from '../data/mockData';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';

const NotificationsPage = () => {
      const [searchQuery, setSearchQuery] = useState('');

      const getIcon = (type) => {
            switch (type) {
                  case 'error': return <XCircle className="text-red-600" size={20} />;
                  case 'warning': return <AlertTriangle className="text-amber-600" size={20} />;
                  case 'info': return <Info className="text-blue-600" size={20} />;
                  default: return <Bell className="text-gray-600" size={20} />;
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

      const filteredNotifications = notificationsData.filter(notification =>
            notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            notification.message.toLowerCase().includes(searchQuery.toLowerCase())
      );

      return (
            <div className="space-y-6">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                        <h2 className="text-2xl font-bold text-gray-900">Notifications</h2>
                        <div className="flex items-center flex-wrap gap-3">
                              <div className="relative">
                                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                                    <input
                                          type="text"
                                          placeholder="Search notifications..."
                                          className="h-9 w-64 rounded-lg border border-gray-200 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                          value={searchQuery}
                                          onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                              </div>
                              {/* <Button variant="outline" size="sm">Mark all as read</Button> */}
                        </div>
                  </div>

                  <div className="grid gap-4">
                        {filteredNotifications.map((notification) => (
                              <Card key={notification.id} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex">
                                          <div className={cn("w-1.5",
                                                notification.type === 'error' ? 'bg-red-500' :
                                                      notification.type === 'warning' ? 'bg-amber-500' : 'bg-blue-500'
                                          )} />
                                          <CardContent className="flex-1 p-5">
                                                <div className="flex items-start justify-between gap-4">
                                                      <div className="flex items-start gap-4">
                                                            <div className={cn("mt-0.5 rounded-full p-2", getBgColor(notification.type))}>
                                                                  {getIcon(notification.type)}
                                                            </div>
                                                            <div>
                                                                  <h4 className="font-bold text-gray-900">{notification.title}</h4>
                                                                  <p className="mt-1 text-sm text-gray-600">{notification.message}</p>
                                                                  <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
                                                                        <Clock size={12} />
                                                                        {notification.time}
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <button className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors">
                                                            <Check size={18} />
                                                      </button>
                                                </div>
                                          </CardContent>
                                    </div>
                              </Card>
                        ))}

                        {filteredNotifications.length === 0 && (
                              <div className="py-20 text-center">
                                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-50 text-gray-400">
                                          <Bell size={32} />
                                    </div>
                                    <h3 className="mt-4 text-lg font-medium text-gray-900">No notifications</h3>
                                    <p className="mt-1 text-gray-500">You're all caught up! Check back later.</p>
                              </div>
                        )}
                  </div>
            </div>
      );
};

export default NotificationsPage;

// Internal utility
function cn(...inputs) {
      return inputs.filter(Boolean).join(' ');
}
