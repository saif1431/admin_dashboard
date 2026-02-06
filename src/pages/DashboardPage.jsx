import React from 'react';
import {
      Users,
      Video,
      Zap,
      DollarSign,
      ArrowUpRight,
      ArrowDownRight,
      MoreVertical,
      Download
} from 'lucide-react';
import {
      BarChart,
      Bar,
      XAxis,
      YAxis,
      CartesianGrid,
      Tooltip,
      ResponsiveContainer,
      AreaChart,
      Area
} from 'recharts';
import { statsData, chartData } from '../data/mockData';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';

const iconMap = {
      users: Users,
      video: Video,
      zap: Zap,
      'dollar-sign': DollarSign,
};

const DashboardPage = () => {
      return (
            <div className="space-y-8">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                        <div>
                              <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
                              <p className="text-gray-500">Track your platform's performance and growth.</p>
                        </div>
                        <Button variant="outline" className="flex items-center gap-2">
                              <Download size={16} />
                              Export Report
                        </Button>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {statsData.map((stat) => {
                              const Icon = iconMap[stat.icon];
                              const isPositive = stat.change.startsWith('+');

                              return (
                                    <Card key={stat.title} className="hover:shadow-md transition-shadow">
                                          <CardContent className="p-6">
                                                <div className="flex items-center justify-between">
                                                      <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                                                            <Icon size={20} />
                                                      </div>
                                                      <div className={cn(
                                                            "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
                                                            isPositive ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"
                                                      )}>
                                                            {isPositive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                                                            {stat.change}
                                                      </div>
                                                </div>
                                                <div className="mt-4">
                                                      <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                                                      <h3 className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</h3>
                                                </div>
                                          </CardContent>
                                    </Card>
                              );
                        })}
                  </div>

                  {/* Charts Section */}
                  <div className="grid gap-6 lg:grid-cols-7">
                        <Card className="lg:col-span-4">
                              <CardHeader className="flex flex-row items-center justify-between">
                                    <CardTitle>Revenue vs Generations</CardTitle>
                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                          <MoreVertical size={16} />
                                    </Button>
                              </CardHeader>
                              <CardContent className="h-[350px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                          <AreaChart data={chartData}>
                                                <defs>
                                                      <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1} />
                                                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                                      </linearGradient>
                                                </defs>
                                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                                <XAxis
                                                      dataKey="name"
                                                      axisLine={false}
                                                      tickLine={false}
                                                      tick={{ fill: '#64748b', fontSize: 12 }}
                                                      dy={10}
                                                />
                                                <YAxis
                                                      axisLine={false}
                                                      tickLine={false}
                                                      tick={{ fill: '#64748b', fontSize: 12 }}
                                                />
                                                <Tooltip
                                                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                                />
                                                <Area
                                                      type="monotone"
                                                      dataKey="revenue"
                                                      stroke="#3b82f6"
                                                      fillOpacity={1}
                                                      fill="url(#colorRev)"
                                                      strokeWidth={2}
                                                />
                                          </AreaChart>
                                    </ResponsiveContainer>
                              </CardContent>
                        </Card>

                        <Card className="lg:col-span-3">
                              <CardHeader className="flex flex-row items-center justify-between">
                                    <CardTitle>Monthly Activity</CardTitle>
                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                          <MoreVertical size={16} />
                                    </Button>
                              </CardHeader>
                              <CardContent className="h-[350px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                          <BarChart data={chartData}>
                                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                                <XAxis
                                                      dataKey="name"
                                                      axisLine={false}
                                                      tickLine={false}
                                                      tick={{ fill: '#64748b', fontSize: 12 }}
                                                />
                                                <YAxis
                                                      axisLine={false}
                                                      tickLine={false}
                                                      tick={{ fill: '#64748b', fontSize: 12 }}
                                                />
                                                <Tooltip
                                                      cursor={{ fill: '#f8fafc' }}
                                                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                                />
                                                <Bar dataKey="generations" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                                          </BarChart>
                                    </ResponsiveContainer>
                              </CardContent>
                        </Card>
                  </div>
            </div>
      );
};

export default DashboardPage;

// Internal utility for DashboardPage
function cn(...inputs) {
      return inputs.filter(Boolean).join(' ');
}
