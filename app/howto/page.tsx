// app/howto/page.tsx
'use client';

import Link from 'next/link';

export default function HowToPage() {
  return (
    <>
      <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

      <script
        dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              darkMode: "class",
              theme: {
                extend: {
                  colors: {
                    primary: "#4c40e7",
                    "background-light": "#f6f6f8",
                    "background-dark": "#121121",
                  },
                  fontFamily: { display: ["Inter", "sans-serif"] },
                },
              },
            }
          `,
        }}
      />

      <style jsx global>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>

      <div className="min-h-screen bg-background-dark text-gray-100 font-display">
        {/* Navbar */}
        <div className="sticky top-0 z-50 border-b border-white/10 bg-background-dark/80 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="size-6 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
                </svg>
              </div>
              <span className="text-xl font-bold">PayFlow</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-gray-400 hover:text-white transition">Home</Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition">About</Link>
              <Link href="/invoice" className="px-6 py-2.5 bg-primary rounded-xl font-bold hover:bg-primary/90 transition">
                Open Dashboard
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              PayFlow Documentation
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Complete guide to using PayFlow — the real-time payment reconciliation platform built for scale, accuracy, and developer happiness.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl">
              <span className="text-sm text-green-400 font-medium">Status: Production Ready</span>
              <span className="text-xs text-gray-500">• Last updated: December 2025</span>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12 backdrop-blur-xl">
            <h2 className="text-2xl font-bold mb-6">Quick Navigation</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              {[
                "Getting Started", "Dashboard Overview", "Order Flow", "Payment Webhooks",
                "Reconciliation Logic", "Event Architecture", "Supported Gateways", "API Reference",
                "Self-Hosting Guide", "Roadmap & Upcoming Features"
              ].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/ & /g, '').replace(/ /g, '-')}`} className="text-gray-400 hover:text-primary transition flex items-center gap-2">
                  <span className="text-primary">→</span> {item}
                </a>
              ))}
            </div>
          </div>

          {/* Getting Started */}
          <section id="getting-started" className="mb-20">
            <h2 className="text-4xl font-black mb-8">Getting Started</h2>
            <div className="bg-gradient-to-r from-primary/20 to-purple-900/20 border border-primary/30 rounded-2xl p-8 backdrop-blur-xl">
              <h3 className="text-2xl font-bold mb-4">1. Open the Live Dashboard</h3>
              <p className="text-gray-300 mb-6">No signup required. Just click below to access the full production dashboard with real-time data.</p>
              <Link href="/invoice" className="inline-flex items-center gap-3 px-8 py-4 bg-primary rounded-xl font-bold text-lg hover:scale-105 transition">
                Launch PayFlow Dashboard <span className="material-symbols-outlined">arrow_right_alt</span>
              </Link>
            </div>
          </section>

          {/* Dashboard Overview */}
          <section id="dashboard-overview" className="mb-20">
            <h2 className="text-4xl font-black mb-8">Dashboard Overview</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Real-Time Metrics", desc: "Live revenue, pending payments, success rate — updated every 500ms." },
                { title: "Order Timeline", desc: "See every order → payment → status change in chronological order." },
                { title: "Reconciliation Status", desc: "Instantly see matched, unmatched, and disputed transactions." },
                { title: "Gateway Breakdown", desc: "Performance per payment provider: Midtrans, Xendit, Stripe, QRIS, etc." },
              ].map((item) => (
                <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Core Flow */}
          <section id="order-flow" className="mb-20">
            <h2 className="text-4xl font-black mb-8">How PayFlow Works</h2>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-xl">
              <div className="space-y-8">
                {[
                  { step: "1", title: "Order Created", desc: "Customer places order → Your backend emits OrderCreated event" },
                  { step: "2", title: "Payment Initiated", desc: "Payment gateway returns callback → PaymentReceived event" },
                  { step: "3", title: "Instant Matching", desc: "<100ms: System matches payment to order using immutable IDs" },
                  { step: "4", title: "Status Updated", desc: "Dashboard + webhooks instantly reflect PAID / FAILED / REFUNDED" },
                  { step: "5", title: "Audit Trail Saved", desc: "Every state change stored forever in immutable event log" },
                ].map((item) => (
                  <div key={item.step} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-2xl font-black">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-lg">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Supported Gateways */}
          <section id="supported-gateways" className="mb-20">
            <h2 className="text-4xl font-black mb-8">Supported Payment Gateways</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["Midtrans", "Xendit", "Stripe", "QRIS", "Virtual Accounts", "Doku", "ShopeePay", "OVO", "LinkAja", "GoPay"].map((gateway) => (
                <div key={gateway} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-primary/50 transition">
                  <div className="text-2xl font-bold">{gateway}</div>
                  <div className="text-xs text-green-400 mt-2">Active</div>
                </div>
              ))}
            </div>
          </section>

          {/* Roadmap */}
          <section id="roadmap-upcoming-features" className="mb-20">
            <h2 className="text-4xl font-black mb-8">Upcoming Features (In Development)</h2>
            <div className="space-y-6">
              {[
                { feature: "Multi-Currency Support", status: "In Progress", eta: "Q1 2026" },
                { feature: "Automated Daily Reconciliation Reports (PDF/Excel)", status: "In Progress", eta: "Q1 2026" },
                { feature: "Dispute Management Panel", status: "In Progress", eta: "Q1 2026" },
                { feature: "Webhooks 2.0 with Retry & Dashboard", status: "In Progress", eta: "Q1 2026" },
                { feature: "On-Premise Docker Compose + Kubernetes Helm Chart", status: "In Progress", eta: "Q2 2026" },
                { feature: "AI-Powered Anomaly Detection", status: "Planned", eta: "2026" },
                { feature: "Mobile App (React Native)", status: "Planned", eta: "2026" },
                { feature: "Open API for Third-Party Integrations", status: "Planned", eta: "2026" },
              ].map((item) => (
                <div key={item.feature} className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-center justify-between hover:border-primary/50 transition">
                  <div>
                    <h3 className="text-xl font-bold">{item.feature}</h3>
                    <p className="text-gray-400">ETA: {item.eta}</p>
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-bold ${item.status === "In Progress" ? "bg-yellow-500/20 text-yellow-400" : "bg-gray-500/20 text-gray-400"}`}>
                    {item.status}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <div className="text-center py-20">
            <h2 className="text-5xl font-black mb-6">Ready to Eliminate Revenue Leakage?</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
              Join the companies already running PayFlow in production. Zero setup. Instant results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/invoice" className="px-12 py-6 bg-primary rounded-2xl font-bold text-xl hover:scale-105 transition shadow-2xl">
                Open Live Dashboard Now
              </Link>
              <Link href="/dev" className="px-12 py-6 border-2 border-white/30 rounded-2xl font-bold text-xl hover:bg-white/10 transition backdrop-blur-xl">
                Work With Yusuf (Developer)
              </Link>
            </div>
            <p className="mt-16 text-gray-500 text-sm">
              Built with love by <Link href="/36" className="text-primary font-bold hover:underline">Yusuf Malik</Link> • 2025
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
