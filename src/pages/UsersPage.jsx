import React, { useState } from 'react';
import { UserMinus, UserCheck, MoreHorizontal, Search } from 'lucide-react';
import { usersData } from '../data/mockData';
import {
      Table,
      TableHeader,
      TableBody,
      TableRow,
      TableHead,
      TableCell
} from '../components/ui/Table';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';

const UsersPage = () => {
      const [users, setUsers] = useState(usersData);

      const handleToggleStatus = (userId) => {
            setUsers(users.map(user => {
                  if (user.id === userId) {
                        return {
                              ...user,
                              status: user.status === 'Active' ? 'Blocked' : 'Active'
                        };
                  }
                  return user;
            }));
      };

      return (
            <div className="space-y-6">
                  <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-gray-900">Users</h2>
                        <Button size="sm">Add User</Button>
                  </div>

                  <Card>
                        <CardHeader className="flex flex-row items-center justify-between flex-wrap border-none">
                              <CardTitle>User Directory</CardTitle>
                              <div className="relative">
                                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                                    <input
                                          type="text"
                                          placeholder="Search users..."
                                          className="h-9 w-64 rounded-lg border border-gray-200 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                    />
                              </div>
                        </CardHeader>
                        <CardContent className="p-0">
                              <Table>
                                    <TableHeader>
                                          <TableRow>
                                                <TableHead>User</TableHead>
                                                <TableHead>Status</TableHead>
                                                <TableHead>Total Videos</TableHead>
                                                <TableHead>Joined</TableHead>
                                                <TableHead className="text-right">Actions</TableHead>
                                          </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                          {users.map((user) => (
                                                <TableRow key={user.id}>
                                                      <TableCell>
                                                            <div className="flex items-center gap-3">
                                                                  <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-900 font-bold text-xs uppercase">
                                                                        {user.email.substring(0, 2)}
                                                                  </div>
                                                                  <span className="font-medium text-gray-900">{user.email}</span>
                                                            </div>
                                                      </TableCell>
                                                      <TableCell>
                                                            <Badge variant={user.status === 'Active' ? 'success' : 'danger'}>
                                                                  {user.status}
                                                            </Badge>
                                                      </TableCell>
                                                      <TableCell>{user.totalVideos}</TableCell>
                                                      <TableCell className="text-gray-500">{user.joined}</TableCell>
                                                      <TableCell className="text-right">
                                                            <div className="flex justify-end gap-2">
                                                                  <Button
                                                                        variant="outline"
                                                                        size="sm"
                                                                        className={cn(
                                                                              "flex items-center gap-2",
                                                                              user.status === 'Active' ? "hover:border-red-200 hover:text-red-600 hover:bg-red-50" : "hover:border-green-200 hover:text-green-600 hover:bg-green-50"
                                                                        )}
                                                                        onClick={() => handleToggleStatus(user.id)}
                                                                  >
                                                                        {user.status === 'Active' ? (
                                                                              <>
                                                                                    <UserMinus size={14} />
                                                                                    Block
                                                                              </>
                                                                        ) : (
                                                                              <>
                                                                                    <UserCheck size={14} />
                                                                                    Unblock
                                                                              </>
                                                                        )}
                                                                  </Button>
                                                                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                                                        <MoreHorizontal size={16} />
                                                                  </Button>
                                                            </div>
                                                      </TableCell>
                                                </TableRow>
                                          ))}
                                    </TableBody>
                              </Table>
                        </CardContent>
                  </Card>
            </div>
      );
};

export default UsersPage;

// Internal utility
function cn(...inputs) {
      return inputs.filter(Boolean).join(' ');
}
