'use client';

import React, { useState, useEffect } from 'react';

export default function DashboardPage() {
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

  const createOrder = async (e: any) => {
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
    paidOrders: orders.filter((o: any) => o.status === 'paid').length,
    pendingOrders: orders.filter((o: any) => o.status === 'pending').length,
    failedOrders: orders.filter((o: any) => o.status === 'failed').length,
    totalRevenue: orders.filter((o: any) => o.status === 'paid').reduce((sum: number, o: any) => sum + o.totalAmount, 0),
  };

  return (
    <>
      {/* Tailwind CDN + Config (exactly as in your HTML) */}
      <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              darkMode: "class",
              theme: {
                extend: {
                  colors: {
                    "primary": "#4c40e7",
                    "background-light": "#f6f6f8",
                    "background-dark": "#121121",
                  },
                  fontFamily: {
                    "display": ["Inter", "sans-serif"]
                  },
                  borderRadius: {
                    "DEFAULT": "0.5rem",
                    "lg": "1rem",
                    "xl": "1.5rem",
                    "full": "9999px"
                  },
                },
              },
            }
          `,
        }}
      />
      <style jsx>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>

      <div className="font-display bg-background-light dark:bg-background-dark">
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
          <div className="flex flex-row min-h-screen">
            {/* Sidebar */}
            <aside className="sticky top-0 h-screen w-64 bg-white dark:bg-background-dark dark:border-r dark:border-slate-800 flex flex-col p-4 border-r border-gray-200/60">
              <div className="flex items-center gap-3 px-3 py-2 mb-6">
                <div className="bg-primary rounded-lg p-2 text-white">
                  <span className="material-symbols-outlined text-2xl">acute</span>
                </div>
                <p className="text-xl font-bold text-[#0f0e1b] dark:text-white">Dashboard</p>
              </div>
              <div className="flex flex-col justify-between flex-1">
                <div className="flex flex-col gap-2">
                  <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 dark:bg-primary/20" href="#">
                    <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}>
                      dashboard
                    </span>
                    <p className="text-primary text-sm font-medium leading-normal">Dashboard</p>
                  </a>
                  <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800" href="#">
                    <span className="material-symbols-outlined text-[#0f0e1b] dark:text-gray-300 text-2xl">shopping_cart</span>
                    <p className="text-[#0f0e1b] dark:text-gray-300 text-sm font-medium leading-normal">Orders</p>
                  </a>
                  <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800" href="#">
                    <span className="material-symbols-outlined text-[#0f0e1b] dark:text-gray-300 text-2xl">credit_card</span>
                    <p className="text-[#0f0e1b] dark:text-gray-300 text-sm font-medium leading-normal">Payments</p>
                  </a>
                  <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800" href="#">
                    <span className="material-symbols-outlined text-[#0f0e1b] dark:text-gray-300 text-2xl">group</span>
                    <p className="text-[#0f0e1b] dark:text-gray-300 text-sm font-medium leading-normal">Customers</p>
                  </a>
                  <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800" href="#">
                    <span className="material-symbols-outlined text-[#0f0e1b] dark:text-gray-300 text-2xl">settings</span>
                    <p className="text-[#0f0e1b] dark:text-gray-300 text-sm font-medium leading-normal">Settings</p>
                  </a>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-3 items-center">
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                      style={{
                        backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDO2bk3TiXBhUckdqY7wscG1q_nHMOzvf5qpvmNXzCpazXqpSDzUBxOS16P-oO6Oyj14jdDFyx7r1Jk658il7A90ec-wHeuNnNioRkvGfbxLKdtFPrrbqbTrZMSkFQc4tQhHjbxp2wG1iYEVc1hw6Zt3wqWh-qV8daKzF_YLesK0a8FnpDeEbYeFvd796eEDnDn8LZOmdWk216sQLHIbMVqoDS4J8b7mv1b4l-EVbX5dPB7eynQKvyp_RpSDW85_8RqMXJ26iLlbOk")`,
                      }}
                    ></div>
                    <div className="flex flex-col">
                      <h1 className="text-[#0f0e1b] dark:text-white text-base font-medium leading-normal">Admin User</h1>
                      <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">admin@example.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content — NOW FULLY LIVE WITH YOUR BACKEND */}
            <main className="flex-1 p-8 overflow-y-auto">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                  <p className="text-[#0f0e1b] dark:text-white text-3xl font-bold leading-tight tracking-tight min-w-72">Dashboard</p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-64">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                      <input
                        className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0f0e1b] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 h-10 placeholder:text-gray-400 pl-10 text-sm"
                        placeholder="Search..."
                      />
                    </div>
                    <button className="flex items-center justify-center size-10 border border-gray-200 dark:border-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-600 dark:text-gray-300">
                      <span className="material-symbols-outlined text-xl">notifications</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 h-10 px-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors text-sm">
                      <span className="material-symbols-outlined text-xl">add_circle</span>
                      <span>New Order</span>
                    </button>
                  </div>
                </div>

                {/* Live Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="flex items-center gap-4 rounded-xl p-4 bg-white dark:bg-slate-800 border border-gray-200/80 dark:border-slate-700">
                    <div className="flex items-center justify-center size-12 rounded-lg bg-green-100 dark:bg-green-900/50">
                      <span className="material-symbols-outlined text-3xl text-green-600 dark:text-green-400">monitoring</span>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Today's Revenue</p>
                      <p className="text-[#0f0e1b] dark:text-white text-2xl font-bold">
                        Rp {(stats.totalRevenue / 1000000).toFixed(1)}M
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-xl p-4 bg-white dark:bg-slate-800 border border-gray-200/80 dark:border-slate-700">
                    <div className="flex items-center justify-center size-12 rounded-lg bg-blue-100 dark:bg-blue-900/50">
                      <span className="material-symbols-outlined text-3xl text-blue-600 dark:text-blue-400">shopping_bag</span>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">New Orders</p>
                      <p className="text-[#0f0e1b] dark:text-white text-2xl font-bold">{stats.totalOrders}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-xl p-4 bg-white dark:bg-slate-800 border border-gray-200/80 dark:border-slate-700">
                    <div className="flex items-center justify-center size-12 rounded-lg bg-yellow-100 dark:bg-yellow-900/50">
                      <span className="material-symbols-outlined text-3xl text-yellow-600 dark:text-yellow-400">pending_actions</span>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Pending Payments</p>
                      <p className="text-[#0f0e1b] dark:text-white text-2xl font-bold">{stats.pendingOrders}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-xl p-4 bg-white dark:bg-slate-800 border border-gray-200/80 dark:border-slate-700">
                    <div className="flex items-center justify-center size-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/50">
                      <span className="material-symbols-outlined text-3xl text-indigo-600 dark:text-indigo-400">receipt_long</span>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Sales Volume</p>
                      <p className="text-[#0f0e1b] dark:text-white text-2xl font-bold">
                        Rp {(stats.totalRevenue / 1000000).toFixed(1)}M
                      </p>
                    </div>
                  </div>
                </div>

                {/* Create Order Form + Tables */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200/80 dark:border-slate-700 sticky top-8">
                      <form onSubmit={createOrder} className="space-y-4">
                        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="User ID" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm" required />
                        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Product Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm" required />
                        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price (IDR)" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm" required />
                        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" placeholder="Quantity" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm" required />
                        <button type="submit" disabled={loading} className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition">
                          {loading ? 'Creating...' : 'Create Order'}
                        </button>
                      </form>
                    </div>
                  </div>

                  <div className="lg:col-span-2 space-y-8">
                    {/* Recent Orders Table */}
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200/80 dark:border-slate-700">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-[#0f0e1b] dark:text-white text-lg font-bold">Recent Orders</h2>
                        <a className="text-sm font-semibold text-primary hover:underline" href="#">View All</a>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                          <thead className="text-xs text-gray-700 dark:text-gray-400 uppercase bg-gray-50 dark:bg-slate-900/50">
                            <tr>
                              <th className="px-4 py-3">Order ID</th>
                              <th className="px-4 py-3">Customer</th>
                              <th className="px-4 py-3">Date</th>
                              <th className="px-4 py-3">Total</th>
                              <th className="px-4 py-3">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {orders.length === 0 ? (
                              <tr><td colSpan={5} className="text-center py-12 text-gray-500">No orders yet</td></tr>
                            ) : (
                              orders.map((order: any) => (
                                <tr key={order.id} className="border-b dark:border-slate-700">
                                  <td className="px-4 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">#{order.id.slice(0,8)}</td>
                                  <td className="px-4 py-4">{order.userId}</td>
                                  <td className="px-4 py-4">{new Date(order.createdAt).toLocaleDateString()}</td>
                                  <td className="px-4 py-4">Rp {order.totalAmount.toLocaleString('id-ID')}</td>
                                  <td className="px-4 py-4">
                                    <span className={`bg-${order.status === 'paid' ? 'green' : order.status === 'failed' ? 'red' : 'yellow'}-100 text-${order.status === 'paid' ? 'green' : order.status === 'failed' ? 'red' : 'yellow'}-800 text-xs font-medium px-2.5 py-1 rounded-full dark:bg-${order.status === 'paid' ? 'green' : order.status === 'failed' ? 'red' : 'yellow'}-900/50 dark:text-${order.status === 'paid' ? 'green' : order.status === 'failed' ? 'red' : 'yellow'}-400 border border-${order.status === 'paid' ? 'green' : order.status === 'failed' ? 'red' : 'yellow'}-200 dark:border-${order.status === 'paid' ? 'green' : order.status === 'failed' ? 'red' : 'yellow'}-800`}>
                                      {order.status}
                                    </span>
                                  </td>
                                </tr>
                              ))
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Latest Payments Table */}
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200/80 dark:border-slate-700">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-[#0f0e1b] dark:text-white text-lg font-bold">Latest Payments</h2>
                        <a className="text-sm font-semibold text-primary hover:underline" href="#">View All</a>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                          <thead className="text-xs text-gray-700 dark:text-gray-400 uppercase bg-gray-50 dark:bg-slate-900/50">
                            <tr>
                              <th className="px-4 py-3">Transaction ID</th>
                              <th className="px-4 py-3">Order ID</th>
                              <th className="px-4 py-3">Date</th>
                              <th className="px-4 py-3">Amount</th>
                              <th className="px-4 py-3">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {payments.length === 0 ? (
                              <tr><td colSpan={5} className="text-center py-12 text-gray-500">No payments yet</td></tr>
                            ) : (
                              payments.map((payment: any) => (
                                <tr key={payment.id} className="border-b dark:border-slate-700">
                                  <td className="px-4 py-4 font-mono text-gray-600 dark:text-gray-300">txn_{payment.id.slice(0,10)}</td>
                                  <td className="px-4 py-4 font-medium text-gray-900 dark:text-white">#{payment.orderId.slice(0,8)}</td>
                                  <td className="px-4 py-4">{new Date(payment.createdAt).toLocaleDateString()}</td>
                                  <td className="px-4 py-4">Rp {payment.amount.toLocaleString('id-ID')}</td>
                                  <td className="px-4 py-4">
                                    <span className={`bg-${payment.status === 'completed' ? 'green' : payment.status === 'failed' ? 'red' : 'yellow'}-100 text-${payment.status === 'completed' ? 'green' : payment.status === 'failed' ? 'red' : 'yellow'}-800 text-xs font-medium px-2.5 py-1 rounded-full dark:bg-${payment.status === 'completed' ? 'green' : payment.status === 'failed' ? 'red' : 'yellow'}-900/50 dark:text-${payment.status === 'completed' ? 'green' : payment.status === 'failed' ? 'red' : 'yellow'}-400 border border-${payment.status === 'completed' ? 'green' : payment.status === 'failed' ? 'red' : 'yellow'}-200 dark:border-${payment.status === 'completed' ? 'green' : payment.status === 'failed' ? 'red' : 'yellow'}-800`}>
                                      {payment.status}
                                    </span>
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
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
