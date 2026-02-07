import React, { useState } from 'react';
import { History, Search, Filter, Clock, User, CheckCircle2, AlertCircle } from 'lucide-react';
import { activityData } from '../data/mockData';
import {
      Table,
      TableHeader,
      TableBody,
      TableRow,
      TableHead,
      TableCell
} from '../components/ui/Table';
import Badge from '../components/ui/Badge';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';

const ActivityPage = () => {
      const [searchQuery, setSearchQuery] = useState('');
      const [filterStatus, setFilterStatus] = useState('All');

      const getStatusVariant = (status) => {
            switch (status) {
                  case 'Success': return 'success';
                  case 'Error': return 'danger';
                  default: return 'default';
            }
      };

      const filteredActivity = activityData.filter(activity => {
            const matchesSearch = activity.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  activity.user.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesFilter = filterStatus === 'All' || activity.status === filterStatus;
            return matchesSearch && matchesFilter;
      });

      return (
            <div className="space-y-6">
                  <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-gray-900">Activity Logs</h2>
                  </div>

                  <Card>
                        <CardHeader className="flex flex-row items-center justify-between flex-wrap border-none gap-4">
                              <CardTitle>Platform Events</CardTitle>
                              <div className="flex flex-wrap items-center gap-3">
                                    <div className="relative">
                                          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                                          <input
                                                type="text"
                                                placeholder="Search logs..."
                                                className="h-9 w-64 rounded-lg border border-gray-200 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                          />
                                    </div>
                                    <select
                                          className="h-9 rounded-lg border border-gray-200 bg-white px-3 text-sm font-medium text-gray-600 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                          value={filterStatus}
                                          onChange={(e) => setFilterStatus(e.target.value)}
                                    >
                                          <option value="All">All Events</option>
                                          <option value="Success">Success</option>
                                          <option value="Error">Error</option>
                                    </select>
                              </div>
                        </CardHeader>
                        <CardContent className="p-0">
                              <Table>
                                    <TableHeader>
                                          <TableRow>
                                                <TableHead>Event</TableHead>
                                                <TableHead>User</TableHead>
                                                <TableHead>Date & Time</TableHead>
                                                <TableHead>Status</TableHead>
                                          </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                          {filteredActivity.map((activity) => (
                                                <TableRow key={activity.id}>
                                                      <TableCell>
                                                            <div className="flex items-center gap-3">
                                                                  <div className={cn(
                                                                        "h-8 w-8 rounded-full flex items-center justify-center",
                                                                        activity.status === 'Success' ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
                                                                  )}>
                                                                        {activity.status === 'Success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                                                                  </div>
                                                                  <span className="font-medium text-gray-900">{activity.action}</span>
                                                            </div>
                                                      </TableCell>
                                                      <TableCell>
                                                            <div className="flex items-center gap-2 text-gray-600">
                                                                  <User size={14} />
                                                                  {activity.user}
                                                            </div>
                                                      </TableCell>
                                                      <TableCell className="text-gray-500">
                                                            <div className="flex items-center gap-2">
                                                                  <Clock size={14} />
                                                                  {activity.date}, {activity.time}
                                                            </div>
                                                      </TableCell>
                                                      <TableCell>
                                                            <Badge variant={getStatusVariant(activity.status)}>{activity.status}</Badge>
                                                      </TableCell>
                                                </TableRow>
                                          ))}
                                          {filteredActivity.length === 0 && (
                                                <TableRow>
                                                      <TableCell colSpan={4} className="py-12 text-center text-gray-500">
                                                            No activity logs found matching your search.
                                                      </TableCell>
                                                </TableRow>
                                          )}
                                    </TableBody>
                              </Table>
                        </CardContent>
                  </Card>
            </div>
      );
};

export default ActivityPage;

// Internal utility
function cn(...inputs) {
      return inputs.filter(Boolean).join(' ');
}
