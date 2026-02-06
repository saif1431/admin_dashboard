import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap } from 'lucide-react';
import { Input } from '../components/ui/Input';
import Button from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';

const LoginPage = () => {
      const navigate = useNavigate();

      const handleLogin = (e) => {
            e.preventDefault();
            // Simulate login
            navigate('/dashboard');
      };

      return (
            <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
                  <div className="w-full max-w-md">
                        <div className="mb-8 flex flex-col items-center justify-center text-center">
                              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg">
                                    <Zap size={28} fill="currentColor" />
                              </div>
                              <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
                              <p className="mt-2 text-gray-500">Sign in to your Nexus dashboard</p>
                        </div>

                        <Card className="shadow-xl">
                              <CardHeader className="border-none pt-8 pb-0">
                                    <CardTitle className="text-center">Admin Login</CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-6 pt-6 pb-8">
                                    <form onSubmit={handleLogin} className="space-y-4">
                                          <Input
                                                label="Email Address"
                                                type="email"
                                                placeholder="admin@nexus.com"
                                                required
                                          />
                                          <Input
                                                label="Password"
                                                type="password"
                                                placeholder="••••••••"
                                                required
                                          />

                                          <div className="flex items-center justify-between">
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                                      <span className="text-sm text-gray-600">Remember me</span>
                                                </label>
                                                <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                                                      Forgot password?
                                                </a>
                                          </div>

                                          <Button type="submit" className="w-full h-11 text-base shadow-sm">
                                                Sign In
                                          </Button>
                                    </form>
                              </CardContent>
                        </Card>

                        <p className="mt-8 text-center text-sm text-gray-500">
                              Don't have an account?{' '}
                              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                    Contact your administrator
                              </a>
                        </p>
                  </div>
            </div>
      );
};

export default LoginPage;
