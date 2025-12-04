'use client';
import React, { useState, useEffect } from 'react';

export default function DashboardPage() {
  // Fake data awal
  const [orders, setOrders] = useState<any[]>([
    {
      id: 'ord_1234567890',
      userId: 'user123',
      totalAmount: 1250000,
      status: 'paid',
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
    },
    {
      id: 'ord_0987654321',
      userId: 'user456',
      totalAmount: 890000,
      status: 'pending',
      createdAt: new Date(Date.now() - 1000 * 60 * 30),
    },
    {
      id: 'ord_1122334455',
      userId: 'user789',
      totalAmount: 450000,
      status: 'failed',
      createdAt: new Date(),
    },
  ]);

  const [payments, setPayments] = useState<any[]>([
    {
      id: 'pay_abc123',
      orderId: 'ord_1234567890',
      amount: 1250000,
      status: 'completed',
      createdAt: new Date(Date.now() - 1000 * 60 * 60),
    },
  ]);

  const [loading, setLoading] = useState(false);

  // Form state
  const [userId, setUserId] = useState('user123');
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Simulasi auto-refresh setiap 4 detik (biar keliatan hidup)
  useEffect(() => {
    const interval = setInterval(() => {
      // Kadang-kadang random status berubah biar keliatan dinamis
      setOrders(prev => prev.map(order => ({
        ...order,
        status: Math.random() > 0.9 
          ? ['paid', 'pending', 'failed'][Math.floor(Math.random() * 3)]
          : order.status
      })));
    }, 4000);
    return () => clearInterval(interval);
  }, []);
const createOrder = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (!productName || !price) return;

  setLoading(true);

  // Simulasi delay API
  await new Promise(resolve => setTimeout(resolve, 800));

  const priceNum = parseFloat(price);
  const total = priceNum * quantity;

  const newOrder = {
    id: `ord_${Date.now()}`,
    userId,
    totalAmount: total,
    status: Math.random() > 0.3 ? 'pending' as const : 'paid' as const,
    createdAt: new Date(),
    items: [{ name: productName, quantity, price: priceNum }]
  };

  setOrders(prev => [newOrder, ...prev]);

  if (newOrder.status === 'paid') {
    setTimeout(() => {
      setPayments(prev => [{
        id: `pay_${Date.now()}`,
        orderId: newOrder.id,
        amount: total,
        status: 'completed' as const,
        createdAt: new Date(),
      }, ...prev]);
    }, 1200);
  }

  // Reset form
  setProductName('');
  setPrice('');
  setQuantity(1);
  setLoading(false);
};
  const stats = {
    totalOrders: orders.length,
    paidOrders: orders.filter(o => o.status === 'paid').length,
    pendingOrders: orders.filter(o => o.status === 'pending').length,
    failedOrders: orders.filter(o => o.status === 'failed').length,
    totalRevenue: orders.filter(o => o.status === 'paid').reduce((sum, o) => sum + o.totalAmount, 0),
  };

  return (
    <>
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
                  fontFamily: { "display": ["Inter", "sans-serif"] },
                  borderRadius: { "DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "full": "9999px" },
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

      <div className="font-display bg-background-light dark:bg-background-dark min-h-screen">
        {/* Semua HTML sama persis kayak sebelumnya, cuma data dari state lokal */}
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
          <div className="flex flex-row min-h-screen">
            {/* Sidebar (sama) */}
            <aside className="sticky top-0 h-screen w-64 bg-white dark:bg-background-dark dark:border-r dark:border-slate-800 flex flex-col p-4 border-r border-gray-200/60">
              {/* ... sidebar content sama ... */}
              <div className="flex items-center gap-3 px-3 py-2 mb-6">
                <div className="bg-primary rounded-lg p-2 text-white">
                  <span className="material-symbols-outlined text-2xl">acute</span>
                </div>
                <p className="text-xl font-bold text-[#0f0e1b] dark:text-white">Dashboard</p>
              </div>
              <div className="flex flex-col justify-between flex-1">
                <div className="flex flex-col gap-2">
                  <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 dark:bg-primary/20" href="#">
                    <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}>dashboard</span>
                    <p className="text-primary text-sm font-medium">Dashboard</p>
                  </a>
                  {/* menu lainnya sama */}
                </div>
                <div className="flex flex-col gap-4 mt-8">
                  <div className="flex gap-3 items-center">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: `url("https://i.pravatar.cc/150?img=68")` }}></div>
                    <div>
                      <h1 className="text-[#0f0e1b] dark:text-white text-base font-medium">Admin User</h1>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">admin@example.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                  <p className="text-[#0f0e1b] dark:text-white text-3xl font-bold">Dashboard</p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-64">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                      <input className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm" placeholder="Search..." />
                    </div>
                    <button className="size-10 rounded-lg border border-gray-300 dark:border-slate-700 flex items-center justify-center">
                      <span className="material-symbols-outlined">notifications</span>
                    </button>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="flex items-center gap-4 rounded-xl p-4 bg-white dark:bg-slate-800 border">
                    <div className="size-12 rounded-lg bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                      <span className="material-symbols-outlined text-green-600 dark:text-green-400">monitoring</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Today's Revenue</p>
                      <p className="text-2xl font-bold">Rp {(stats.totalRevenue / 1000000).toFixed(1)}M</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-xl p-4 bg-white dark:bg-slate-800 border">
                    <div className="size-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                      <span className="material-symbols-outlined text-blue-600">shopping_bag</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">New Orders</p>
                      <p className="text-2xl font-bold">{stats.totalOrders}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-xl p-4 bg-white dark:bg-slate-800 border">
                    <div className="size-12 rounded-lg bg-yellow-100 dark:bg-yellow-900/50 flex items-center justify-center">
                      <span className="material-symbols-outlined text-yellow-600">pending_actions</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Pending</p>
                      <p className="text-2xl font-bold">{stats.pendingOrders}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-xl p-4 bg-white dark:bg-slate-800 border">
                    <div className="size-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center">
                      <span className="material-symbols-outlined text-indigo-600">receipt_long</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Sales Volume</p>
                      <p className="text-2xl font-bold">Rp {(stats.totalRevenue / 1000000).toFixed(1)}M</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Form */}
                  <div className="lg:col-span-1">
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border sticky top-8">
                      <h3 className="text-lg font-bold mb-4">Create Fake Order</h3>
                      <form onSubmit={createOrder} className="space-y-4">
                        <input type="text" value={userId} onChange={e => setUserId(e.target.value)} placeholder="User ID" className="w-full px-4 py-3 rounded-lg border bg-gray-50 dark:bg-slate-700" required />
                        <input type="text" value={productName} onChange={e => setProductName(e.target.value)} placeholder="Product Name" className="w-full px-4 py-3 rounded-lg border bg-gray-50 dark:bg-slate-700" required />
                        <input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="Price (IDR)" className="w-full px-4 py-3 rounded-lg border bg-gray-50 dark:bg-slate-700" required />
                        <input type="number" value={quantity} onChange={e => setQuantity(Number(e.target.value))} min="1" className="w-full px-4 py-3 rounded-lg border bg-gray-50 dark:bg-slate-700" />
                        <button type="submit" disabled={loading} className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 disabled:opacity-70">
                          {loading ? 'Creating...' : 'Create Order'}
                        </button>
                      </form>
                    </div>
                  </div>

                  {/* Tables */}
                  <div className="lg:col-span-2 space-y-8">
                    {/* Recent Orders */}
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border">
                      <div className="flex justify-between mb-4">
                        <h2 className="text-lg font-bold">Recent Orders</h2>
                        <a href="#" className="text-primary text-sm font-semibold">View All</a>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead className="text-xs uppercase bg-gray-50 dark:bg-slate-900/50">
                            <tr>
                              <th className="px-4 py-3 text-left">Order ID</th>
                              <th className="px-4 py-3 text-left">Customer</th>
                              <th className="px-4 py-3 text-left">Total</th>
                              <th className="px-4 py-3 text-left">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {orders.map(order => (
                              <tr key={order.id} className="border-b dark:border-slate-700">
                                <td className="py-3">#{order.id.slice(0, 10)}</td>
                                <td>{order.userId}</td>
                                <td>Rp {order.totalAmount.toLocaleString('id-ID')}</td>
                                <td>
                                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium
                                    ${order.status === 'paid' ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-400' : ''}
                                    ${order.status === 'pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-400' : ''}
                                    ${order.status === 'failed' ? 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-400' : ''}
                                  `}>
                                    {order.status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Payments */}
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border">
                      <div className="flex justify-between mb-4">
                        <h2 className="text-lg font-bold">Latest Payments</h2>
                        <a href="#" className="text-primary text-sm font-semibold">View All</a>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead className="text-xs uppercase bg-gray-50 dark:bg-slate-900/50">
                            <tr>
                              <th className="px-4 py-3 text-left">Txn ID</th>
                              <th className="px-4 py-3 text-left">Order</th>
                              <th className="px-4 py-3 text-left">Amount</th>
                              <th className="px-4 py-3 text-left">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {payments.map(pay => (
                              <tr key={pay.id} className="border-b dark:border-slate-700">
                                <td className="py-3 font-mono text-xs">txn_{pay.id.slice(0,8)}</td>
                                <td>#{pay.orderId.slice(0,10)}</td>
                                <td>Rp {pay.amount.toLocaleString('id-ID')}</td>
                                <td>
                                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-400">
                                    completed
                                  </span>
                                </td>
                              </tr>
                            ))}
                            {payments.length === 0 && (
                              <tr><td colSpan={4} className="text-center py-8 text-gray-500">No payments yet</td></tr>
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
