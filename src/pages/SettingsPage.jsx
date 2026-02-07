import React from 'react';
import { Save, Shield, Globe, Bell, Video } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../components/ui/Card';
import { Input, Select } from '../components/ui/Input';
import Button from '../components/ui/Button';

const SettingsPage = () => {
      return (
            <div className="space-y-6">
                  <div className="">
                        <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
                        
                  </div>

                  <div className="grid gap-6 lg:grid-cols-3">
                        {/* Navigation / Categories */}
                      

                        {/* Settings Form */}
                        <div className="lg:col-span-2 space-y-6">
                              <Card>
                                    <CardHeader>
                                          <CardTitle>Platform Configuration</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                          <div className="grid gap-4 md:grid-cols-2">
                                                <Select
                                                      label="Primary Currency"
                                                      defaultValue="USD"
                                                      options={[
                                                            { label: 'USD - US Dollar', value: 'USD' },
                                                            { label: 'EUR - Euro', value: 'EUR' },
                                                            { label: 'GBP - British Pound', value: 'GBP' },
                                                      ]}
                                                />
                                                <Input
                                                      label="Price Per Second (Credits)"
                                                      type="number"
                                                      defaultValue="0.5"
                                                />
                                          </div>
                                          <div className="grid gap-4 md:grid-cols-2">
                                                <Input
                                                      label="Max Video Length (Seconds)"
                                                      type="number"
                                                      defaultValue="300"
                                                />
                                                <Select
                                                      label="Default Quality"
                                                      defaultValue="1080p"
                                                      options={[
                                                            { label: '720p', value: '720p' },
                                                            { label: '1080p', value: '1080p' },
                                                            { label: '4K', value: '4k' },
                                                      ]}
                                                />
                                          </div>
                                    </CardContent>
                              </Card>

                              <Card>
                                    <CardHeader>
                                          <CardTitle>API Access</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                          <Input
                                                label="Public API Key"
                                                value="pk_live_51MszXXXXXXXXXXXXXXXX"
                                                readOnly
                                                className="font-mono text-xs bg-gray-50"
                                          />
                                          <div className="pt-2">
                                                <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-50 hover:border-red-200">
                                                      Revoke & Regenerate
                                                </Button>
                                          </div>
                                    </CardContent>
                              </Card>

                              <div className="flex justify-end pt-4">
                                    <Button variant="outline" className="mr-3">Cancel</Button>
                                    <Button>Save Settings</Button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default SettingsPage;
