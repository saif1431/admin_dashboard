import React, { useState } from 'react';
import { User, Mail, Lock, Shield, LogOut, Camera, Save } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';

const ProfilePage = () => {
      const [adminInfo, setAdminInfo] = useState({
            name: 'Alex Johnson',
            email: 'alex.j@nexus.com',
            role: 'Super Admin'
      });

      return (
            <div className="space-y-6">
                  <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-gray-900">Admin Profile</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Profile Card */}
                        <Card className="md:col-span-1 border-none shadow-sm h-fit">
                              <CardContent className="pt-8 pb-6">
                                    <div className="flex flex-col items-center text-center">
                                          <div className="relative">
                                                <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center border-4 border-white shadow-md overflow-hidden">
                                                      <img src="https://ui-avatars.com/api/?name=Alex+Johnson&background=0D8ABC&color=fff&size=128" alt="Profile" />
                                                </div>
                                                <button className="absolute bottom-0 right-0 p-1.5 bg-blue-600 text-white rounded-full border-2 border-white shadow-sm hover:bg-blue-700 transition-colors">
                                                      <Camera size={14} />
                                                </button>
                                          </div>
                                          <h3 className="mt-4 text-xl font-bold text-gray-900">{adminInfo.name}</h3>
                                          <p className="text-sm text-gray-500">{adminInfo.role}</p>

                                          <div className="mt-6 w-full space-y-2">
                                                <Button className="w-full flex items-center justify-center gap-2">
                                                      <Save size={16} />
                                                      Save Profile
                                                </Button>
                                                <Button variant="danger" className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 hover:bg-red-100 border-none">
                                                      <LogOut size={16} />
                                                      Logout
                                                </Button>
                                          </div>
                                    </div>
                              </CardContent>
                        </Card>

                        {/* Settings Forms */}
                        <div className="md:col-span-2 space-y-6">
                              {/* Account Settings */}
                              <Card className="border-none shadow-sm">
                                    <CardHeader className="border-b border-gray-50 px-6 py-4">
                                          <CardTitle className="text-lg">Account Information</CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-6">
                                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div className="space-y-1.5">
                                                      <label className="text-sm font-semibold text-gray-700">Full Name</label>
                                                      <div className="relative">
                                                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                                            <input
                                                                  type="text"
                                                                  value={adminInfo.name}
                                                                  onChange={(e) => setAdminInfo({ ...adminInfo, name: e.target.value })}
                                                                  className="h-10 w-full rounded-lg border border-gray-200 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                                            />
                                                      </div>
                                                </div>
                                                <div className="space-y-1.5">
                                                      <label className="text-sm font-semibold text-gray-700">Email Address</label>
                                                      <div className="relative">
                                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                                            <input
                                                                  type="email"
                                                                  value={adminInfo.email}
                                                                  onChange={(e) => setAdminInfo({ ...adminInfo, email: e.target.value })}
                                                                  className="h-10 w-full rounded-lg border border-gray-200 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                                            />
                                                      </div>
                                                </div>
                                          </div>
                                    </CardContent>
                              </Card>

                              {/* Security Settings */}
                              <Card className="border-none shadow-sm">
                                    <CardHeader className="border-b border-gray-50 px-6 py-4">
                                          <CardTitle className="text-lg">Security & Password</CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-6 space-y-4">
                                          <div className="space-y-1.5">
                                                <label className="text-sm font-semibold text-gray-700">New Password</label>
                                                <div className="relative">
                                                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                                      <input
                                                            type="password"
                                                            placeholder="••••••••"
                                                            className="h-10 w-full rounded-lg border border-gray-200 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                                      />
                                                </div>
                                          </div>
                                          <div className="space-y-1.5">
                                                <label className="text-sm font-semibold text-gray-700">Confirm New Password</label>
                                                <div className="relative">
                                                      <Shield className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                                      <input
                                                            type="password"
                                                            placeholder="••••••••"
                                                            className="h-10 w-full rounded-lg border border-gray-200 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                                      />
                                                </div>
                                          </div>
                                          <div className="pt-2">
                                                <Button variant="outline" size="sm">Update Password</Button>
                                          </div>
                                    </CardContent>
                              </Card>
                        </div>
                  </div>
            </div>
      );
};

export default ProfilePage;
