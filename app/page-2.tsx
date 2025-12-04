'use client';

import React, { useState, useEffect } from 'react';

export default function OrderPaymentDashboard() {
  const [orders, setOrders] = useState([]);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);

  // Form state
  const [userId, setUserId] = useState('user123');
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState(1);

  const fetchOrders = async () => {
    try {
      const res = await fetch('http://localhost:3001/orders');
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error('Error fetching orders:', err);
    }
  };

  const fetchPayments = async () => {
    try {
      const res = await fetch('http://localhost:3001/payments');
      const data = await res.json();
      setPayments(data);
    } catch (err) {
      console.error('Error fetching payments:', err);
    }
  };

  useEffect(() => {
    fetchOrders();
    fetchPayments();
    const interval = setInterval(() => {
      fetchOrders();
      fetchPayments();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const createOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('http://localhost:3001/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          items: [{
            productId: `prod-${Date.now()}`,
            name: productName,
            quantity: parseInt(quantity as any),
            price: parseFloat(price)
          }]
        })
      });

      if (res.ok) {
        setProductName('');
        setPrice('');
        setQuantity(1);
        fetchOrders();
        setTimeout(fetchPayments, 1000);
      }
    } catch (err) {
      alert('Error creating order. Make sure NestJS is running on port 3001!');
      console.error('Error creating order:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Sidebar */}
        <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-center h-16 bg-indigo-600">
              <span className="text-2xl font-bold text-white">acute</span>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-2">
              <a href="#" className="flex items-center px-4 py-3 text-indigo-600 bg-indigo-50 rounded-lg">
                <span className="material-icons mr-3">dashboard</span>
                <span className="font-medium">Dashboard</span>
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg">
                <span className="material-icons mr-3">shopping_cart</span>
                Orders
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg">
                <span className="material-icons mr-3">credit_card</span>
                Payments
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg">
                <span className="material-icons mr-3">group</span>
                Customers
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg">
                <span className="material-icons mr-3">settings</span>
                Settings
              </a>
            </nav>
            <div className="p-4 border-t">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Admin User</p>
                  <p className="text-xs text-gray-500">admin@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-64 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Today's Revenue</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">$1,450</p>
                </div>
                <div className="p-3 bg-green-100 rounded-lg">
                  <span className="material-icons text-green-600">monitoring</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">New Orders</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">32</p>
                </div>
                <div className="p-3 bg-blue-100 rounded-lg">
                  <span className="material-icons text-blue-600">shopping_bag</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pending Payments</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">15</p>
                </div>
                <div className="p-3 bg-yellow-100 rounded-lg">
                  <span className="material-icons text-yellow-600">pending_actions</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Sales Volume</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">$89,500</p>
                </div>
                <div className="p-3 bg-purple-100 rounded-lg">
                  <span className="material-icons text-purple-600">receipt_long</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Orders */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
                <a href="#" className="text-sm text-indigo-600 hover:underline">View All</a>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#83412</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Liam Johnson</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">2023-10-26</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$250.00</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Shipped</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#83411</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Olivia Smith</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">2023-10-25</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$150.00</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">Processing</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#83410</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Noah Williams</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">2023-10-25</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$350.00</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">Cancelled</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#83409</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Emma Brown</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">2023-10-24</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$45.50</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Shipped</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Latest Payments */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-900">Latest Payments</h2>
                <a href="#" className="text-sm text-indigo-600 hover:underline">View All</a>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">txn_1a2b3c4d5e</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">#83412</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">2023-10-26</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$250.00</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Paid</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">txn_6f7g8h9i0j</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">#83411</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">2023-10-25</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$150.00</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">Pending</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">txn_k1l2m3n4o5</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">#83409</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">2023-10-24</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$45.50</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Paid</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
