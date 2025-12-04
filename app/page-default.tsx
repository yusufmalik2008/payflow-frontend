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

  const createOrder = async (e) => {
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
            quantity: parseInt(quantity),
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

  const stats = {
    totalOrders: orders.length,
    paidOrders: orders.filter(o => o.status === 'paid').length,
    pendingOrders: orders.filter(o => o.status === 'pending').length,
    failedOrders: orders.filter(o => o.status === 'failed').length,
    totalRevenue: orders.filter(o => o.status === 'paid').reduce((sum, o) => sum + o.totalAmount, 0),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Order & Payment Dashboard</h1>
          <p className="text-sm text-gray-600">Event-Driven Architecture • NestJS + NATS + SQLite</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <p className="text-sm text-gray-600 mb-1">Total Orders</p>
            <p className="text-3xl font-bold text-gray-900">{stats.totalOrders}</p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow-sm border border-green-100">
            <p className="text-sm text-green-700 mb-1">Paid</p>
            <p className="text-3xl font-bold text-green-900">{stats.paidOrders}</p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-xl shadow-sm border border-yellow-100">
            <p className="text-sm text-yellow-700 mb-1">Pending</p>
            <p className="text-3xl font-bold text-yellow-900">{stats.pendingOrders}</p>
          </div>
          <div className="bg-red-50 p-6 rounded-xl shadow-sm border border-red-100">
            <p className="text-sm text-red-700 mb-1">Failed</p>
            <p className="text-3xl font-bold text-red-900">{stats.failedOrders}</p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-xl shadow-sm border border-indigo-100">
            <p className="text-sm text-indigo-700 mb-1">Revenue</p>
            <p className="text-2xl font-bold text-indigo-900">
              Rp {(stats.totalRevenue / 1000000).toFixed(1)}M
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Create Order Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-8">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Create New Order</h2>
              <form onSubmit={createOrder} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">User ID</label>
                  <input
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                  <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="e.g., Laptop"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price (IDR)</label>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="15000000"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    min="1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:bg-gray-400 text-sm"
                >
                  {loading ? 'Creating...' : '✨ Create Order'}
                </button>
              </form>
            </div>
          </div>

          {/* Orders & Payments Lists */}
          <div className="lg:col-span-2 space-y-8">
            {/* Orders Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-bold text-gray-900">Recent Orders</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Order ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">User</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {orders.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-6 py-8 text-center text-gray-500 text-sm">
                          No orders yet. Create one to get started! 🚀
                        </td>
                      </tr>
                    ) : (
                      orders.map((order) => (
                        <tr key={order.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm font-mono text-gray-900">
                            #{order.id.slice(0, 8)}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">{order.userId}</td>
                          <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                            Rp {order.totalAmount.toLocaleString('id-ID')}
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                              order.status === 'paid' ? 'bg-green-100 text-green-700' :
                              order.status === 'failed' ? 'bg-red-100 text-red-700' :
                              'bg-yellow-100 text-yellow-700'
                            }`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {new Date(order.createdAt).toLocaleTimeString()}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Payments Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-bold text-gray-900">Payment Transactions</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Payment ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Order</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Method</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">TX ID</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {payments.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="px-6 py-8 text-center text-gray-500 text-sm">
                          No payments yet. 💳
                        </td>
                      </tr>
                    ) : (
                      payments.map((payment) => (
                        <tr key={payment.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm font-mono text-gray-900">
                            #{payment.id.slice(0, 8)}
                          </td>
                          <td className="px-6 py-4 text-sm font-mono text-gray-600">
                            #{payment.orderId.slice(0, 8)}
                          </td>
                          <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                            Rp {payment.amount.toLocaleString('id-ID')}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">{payment.paymentMethod}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                              payment.status === 'completed' ? 'bg-green-100 text-green-700' :
                              payment.status === 'failed' ? 'bg-red-100 text-red-700' :
                              'bg-yellow-100 text-yellow-700'
                            }`}>
                              {payment.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm font-mono text-gray-500">
                            {payment.transactionId || '-'}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
