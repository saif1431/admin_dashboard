import React, { useState } from 'react';
import { CreditCard, Download, Search, Filter, Printer, Share2, Receipt, CheckCircle2 } from 'lucide-react';
import { paymentsData } from '../data/mockData';
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
import Modal from '../components/ui/Modal';

const PaymentsPage = () => {
      const [selectedPayment, setSelectedPayment] = useState(null);
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [searchQuery, setSearchQuery] = useState('');
      const [filterStatus, setFilterStatus] = useState('All');

      const getStatusVariant = (status) => {
            switch (status) {
                  case 'Paid': return 'success';
                  case 'Pending': return 'warning';
                  case 'Failed': return 'danger';
                  default: return 'default';
            }
      };

      const handleViewReceipt = (payment) => {
            setSelectedPayment(payment);
            setIsModalOpen(true);
      };

      const filteredPayments = paymentsData.filter(payment => {
            const matchesSearch = payment.email.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesFilter = filterStatus === 'All' || payment.status === filterStatus;
            return matchesSearch && matchesFilter;
      });

      return (
            <div className="space-y-6">
                  <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-gray-900">Payments</h2>
                        {/*  */}
<Button variant="outline" size="sm" className="flex items-center gap-2">
                              <Download size={16} />
                              Download All
                        </Button>                  </div>

                  <Card>
                        <CardHeader className="flex flex-row items-center justify-between flex-wrap border-none gap-4">
                              <CardTitle>Transaction History</CardTitle>
                              <div className="flex flex-wrap items-center gap-3">
                                    <div className="relative">
                                          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                                          <input
                                                type="text"
                                                placeholder="Search payments..."
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
                                          <option value="All">All Status</option>
                                          <option value="Paid">Paid</option>
                                          <option value="Pending">Pending</option>
                                          <option value="Failed">Failed</option>
                                    </select>
                              </div>
                        </CardHeader>
                        <CardContent className="p-0">
                              <Table>
                                    <TableHeader>
                                          <TableRow>
                                                <TableHead>Transaction ID</TableHead>
                                                <TableHead>User</TableHead>
                                                <TableHead>Amount</TableHead>
                                                <TableHead>Date</TableHead>
                                                <TableHead>Status</TableHead>
                                                <TableHead className="text-right">Actions</TableHead>
                                          </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                          {filteredPayments.map((payment) => (
                                                <TableRow key={payment.id}>
                                                      <TableCell className="font-mono text-xs text-gray-500">
                                                            #TRX-{1000 + payment.id}
                                                      </TableCell>
                                                      <TableCell>
                                                            <span className="font-medium text-gray-900">{payment.email}</span>
                                                      </TableCell>
                                                      <TableCell>
                                                            <span className="font-semibold text-gray-900">{payment.amount}</span>
                                                      </TableCell>
                                                      <TableCell className="text-gray-500">{payment.date}</TableCell>
                                                      <TableCell>
                                                            <Badge variant={getStatusVariant(payment.status)}>{payment.status}</Badge>
                                                      </TableCell>
                                                      <TableCell className="text-right">
                                                            <Button
                                                                  variant="ghost"
                                                                  size="sm"
                                                                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                                                                  onClick={() => handleViewReceipt(payment)}
                                                            >
                                                                  View Receipt
                                                            </Button>
                                                      </TableCell>
                                                </TableRow>
                                          ))}
                                          {filteredPayments.length === 0 && (
                                                <TableRow>
                                                      <TableCell colSpan={6} className="py-12 text-center text-gray-500">
                                                            No payments found matching your search.
                                                      </TableCell>
                                                </TableRow>
                                          )}
                                    </TableBody>
                              </Table>
                        </CardContent>
                  </Card>

                  {/* Receipt Modal */}
                  <Modal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        title="Payment Receipt"
                        className="max-w-md"
                  >
                        {selectedPayment && (
                              <div className="space-y-6">
                                    <div className="text-center space-y-2 py-4 border-b border-gray-100">
                                          <div className="h-16 w-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                                                <CheckCircle2 size={32} />
                                          </div>
                                          <h3 className="text-xl font-bold text-gray-900">Payment Successful</h3>
                                          <p className="text-sm text-gray-500">Transaction ID: #TRX-{1000 + selectedPayment.id}</p>
                                    </div>

                                    <div className="space-y-4">
                                          <div className="flex justify-between items-center text-sm">
                                                <span className="text-gray-500">Amount Paid</span>
                                                <span className="font-bold text-gray-900 text-lg">{selectedPayment.amount}</span>
                                          </div>
                                          <div className="flex justify-between items-center text-sm">
                                                <span className="text-gray-500">Date & Time</span>
                                                <span className="font-medium text-gray-900">{selectedPayment.date}, 14:30 PM</span>
                                          </div>
                                          <div className="flex justify-between items-center text-sm">
                                                <span className="text-gray-500">Payment Method</span>
                                                <div className="flex items-center gap-2">
                                                      <CreditCard size={14} className="text-gray-400" />
                                                      <span className="font-medium text-gray-900">Visa ending in 4242</span>
                                                </div>
                                          </div>
                                          <div className="flex justify-between items-center text-sm border-t border-dashed border-gray-200 pt-4">
                                                <span className="text-gray-500">Customer</span>
                                                <span className="font-medium text-gray-900">{selectedPayment.email}</span>
                                          </div>
                                          <div className="flex justify-between items-center text-sm">
                                                <span className="text-gray-500">Status</span>
                                                <Badge variant="success">Completed</Badge>
                                          </div>
                                    </div>

                                    <div className="bg-gray-50 rounded-xl p-4 flex items-start gap-3 mt-6">
                                          <Receipt size={20} className="text-gray-400 mt-0.5" />
                                          <div>
                                                <p className="text-xs font-semibold text-gray-500 uppercase">Billing Info</p>
                                                <p className="text-sm text-gray-600 mt-1">
                                                      Nexus Pro Monthly Plan <br />
                                                      Feb 1 - Feb 28, 2026
                                                </p>
                                          </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 pt-6">
                                          <Button variant="outline" className="flex items-center justify-center gap-2">
                                                <Printer size={16} />
                                                Print
                                          </Button>
                                          <Button className="flex items-center justify-center gap-2">
                                                <Download size={16} />
                                                Download
                                          </Button>
                                    </div>
                                    <div className="text-center pt-2">
                                          <button className="text-sm font-medium text-blue-600 hover:underline flex items-center justify-center gap-1 mx-auto">
                                                <Share2 size={14} />
                                                Share via Email
                                          </button>
                                    </div>
                              </div>
                        )}
                  </Modal>
            </div>
      );
};

export default PaymentsPage;
