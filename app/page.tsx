

// app/page.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <>
      {/* Exact Tailwind CDN + Config + Fonts */}
      <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet" />
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
                  borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
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

      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-white">
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex flex-1 justify-center py-5 sm:px-10 md:px-20 lg:px-40">
            <div className="layout-content-container flex w-full max-w-[960px] flex-1 flex-col">

              {/* Top Navbar */}
              <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 px-4 sm:px-10 py-3">
                <div className="flex items-center gap-4 text-white">
                  <div className="size-4 text-primary">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                      <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">PayFlow</h2>
                </div>
                <div className="hidden md:flex flex-1 justify-end gap-8">
                  <div className="flex items-center gap-9">
                    <Link href="/about" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Features</Link>
                    <a href="howto" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Docs</a>
                    <a href="dev" className="text-white/80 hover:text-white text-sm font-medium transition-colors">My Portofolio</a>
                  </div>
                  <div className="flex gap-2">
                    <Link href="/invoice" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary hover:bg-primary/90 text-white text-sm font-bold tracking-[0.015em] transition-colors">
                      <span className="truncate">Open Dashboard</span>
                    </Link>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-white/10 hover:bg-white/20 text-white text-sm font-bold tracking-[0.015em] transition-colors">
                      <span className="truncate">Sign In</span>
                    </button>

                  </div>
                </div>
              </header>

              {/* Hero Section */}
              <div className="@container mt-5">
                <div className="@[480px]:p-4">
                  <div 
                    className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                    style={{
                      backgroundImage: `linear-gradient(rgba(18, 17, 33, 0.4) 0%, rgba(18, 17, 33, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCXHSvaOnTZwt-qHVbHPpcsUUxfpMKV3aauJU4IMEwBftNAv-mjTPl2S3nVcE1JE6pPcnfghhgS2GEVmMqLyd0LB6eMpCq807KKIcvwc0eL7pJbwiOXI50tkqy2ROgsfkzuPo8TT9p8fj7x7X8vdWHfS-ugQ9WZCNWxWUpQBubXvAQz0iYNe8MqW1GbE9rVZl83kPgJfWco2eX2WN03nnbLLf5tkzmVcMj-tzojP5ZKOzIf97gqY9cazRkLNHC1SxrT1-ghP6xhdyk")`,
                    }}
                  >
                    <div className="flex flex-col gap-2 text-left max-w-2xl">
                      <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black">
                        Real-Time Payment Reconciliation Platform
                      </h1>
                      <h2 className="text-white/90 text-sm font-normal leading-normal @[480px]:text-base">
                        Instantly track and reconcile every transaction with our event-driven microservice architecture.
                      </h2>
                    </div>
                    <Link href="/invoice" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary hover:bg-primary/90 text-white text-sm font-bold @[480px]:text-base transition-colors">
                      <span className="truncate">Get Started</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Why PayFlow? */}
              <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-16">Why PayFlow?</h2>

              {/* Feature Cards */}
              <div className="flex flex-col gap-10 px-4 py-10 @container">
                <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
                  {[
                    { icon: "query_stats", title: "Real-Time Dashboard", desc: "Monitor all your transactions as they happen with our live dashboard." },
                    { icon: "autorenew", title: "Automated Reconciliation", desc: "Eliminate manual errors and save time with our intelligent automation." },
                    { icon: "layers", title: "Scalable Microservices", desc: "Our platform grows with your business, handling any transaction volume." },
                    { icon: "security", title: "Advanced Security", desc: "Protect your data with enterprise-grade security and compliance." },
                  ].map((feature) => (
                    <div key={feature.title} className="flex flex-1 gap-3 rounded-lg border border-white/10 bg-white/5 p-4 flex-col hover:border-primary/50 transition-colors">
                      <div className="text-primary">
                        <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h2 className="text-white text-base font-bold leading-tight">{feature.title}</h2>
                        <p className="text-white/60 text-sm font-normal leading-normal">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trusted By */}
              <div className="flex flex-col gap-10 px-4 py-10 @container">
                <div className="flex flex-col gap-4 text-center items-center">
                  <h1 className="text-white tracking-tight text-[32px] font-bold leading-tight @[480px]:text-4xl max-w-[720px]">
                    Trusted by Industry Leaders
                  </h1>
                  <p className="text-white/80 text-base font-normal leading-normal max-w-[720px]">
                    We partner with leading companies to streamline their payment reconciliation processes, ensuring accuracy and efficiency at scale.
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 p-0 items-center justify-items-center grayscale opacity-60">
                  {[
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuDlKbZHm0l7NAaYWRsdDpVfD_VtCGnTTBiScx_PZrS2aIzg-NJOqxF-E5hJvKkv95ltrM-rDfmL7iqA3LuyY3DPwusmJLerqv1GTSRJ4EPAntC3hTGqyAvJyYEILq8rB9DCOsXhbqPUJmC6aE7pc_mTuSw4bN-zkuhnVwXVP6tiy3hvMvtLahdNUsAs4JpUCuMZA4IaDFeK8lSp0smTstDc7f10LDSebEaFrTJWuPPZc_0jKpQ2jU6Jrr2HJUbgQkAHxVJ4DEm73JM",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCcvnKYpeObM9VU6lWnj__TCbq5f_7iu5SYbWsy4nLvXmiH-JeKNWTszazBRuIU6kWhJrvh-xOaJfd1c8E6OVdVy5aOifwSLd1y93FHlwogCik4U3H6aTUsDorXkf7mXpLswlWsQ0ToWbf9b7SRjjZX2Ywk9u__U290JU-kFIN4wBsDoZiVgoOROBo1JUdbUspiERioSiQCoIpm2Tz0YLtdXCeMzCrxXy8_iZmho2VFiQIJ4UZhZy5FmStwWJ5iXjcdOTkvCQ109ho",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuDbU1HW0dRgr2N60EyUtPBbVlAQ1-4_0DF4D6U2EoFQRX5f9iKetmt7bJFa9WX3xD2pL2JNBMZbCSaHH7gvpl7YmjwfCmJ0O1KmIvnV-kK-RF1seFRzlsDfv93SKLspR1d77qISYRvP0JC2TGrUBI02ln-Z4Qkl9EYMgrxBXXBdb6A2NwBlHtofkCYYtomYFGVp6RXb5z4MJH8obRlphaNTPOoGjedwoMj1cbhFXT2DbYyQAjO6pLTrmWeUy5AUP4AuB6rFsGz29Bk",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCwTMr3hZnVUPiSKkik1f9HV2LgxagXIq7Zj1zgv3JU5k-zudgsnfQHsXFakmFecaa7v3Ulp7cL9TSZwPOupFtcMNqDCnR78so6WDfa0b29H-ATHpdsQ27qCtkW1fSJSvjHkHK1ZnF49mEGW_OKMHwa8NycoEKIpBDhlXegC2Ub5vvE3CX3IaOuyAyCD7rDGQy2V6GT48MyiRkepLkWvQC1MqeVu30z1in3k3TR2YC76xLxnVEzvCVbTtoUe6LOzS3u9-dAzl0LNO0",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCbFk0LhLtbiqUKNKAIaTITjXLPAWYFZyACIBRc6LUAgFEMjUOcpAGvLc2ZnDxNb5x30Zu4HmAjGWCjTWVhe8DoFB9a_C76u7yNVxmvEAFcTGj1iiYA7e9fWJQfGcQqhRqQFCYDmieUq7zBi9aHNkMU3W3Tobbv5Rky9zUWVsXwxwcJAB0UiEM6sBpqSZ6P2B4gidzxt3a7gNi4pyCntq9cq9F0mDm2YgIepherK1Iccgwhntod-RUMcFLXxqgxqXpwpdqlKA2Fncs",
                  ].map((logo, i) => (
                    <div
                      key={i}
                      className="w-full bg-center bg-no-repeat aspect-[3/2] bg-contain"
                      style={{
                        backgroundImage: `url("${logo}")`,
                        filter: 'brightness(0) invert(1)',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Final CTA */}
              <div className="px-4 py-16">
                <div className="flex flex-col items-center justify-center gap-6 rounded-xl bg-primary/20 p-10 text-center">
                  <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em]">Ready to Transform Your Payments?</h2>
                  <p className="max-w-lg text-white/80">Join the companies that trust PayFlow to handle their payment reconciliation with speed, accuracy, and scale.</p>
                  <Link href="/invoice" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-lg h-12 px-5 bg-primary hover:bg-primary/90 text-white text-base font-bold transition-colors">
                    <span className="truncate">Open Live Dashboard</span>
                  </Link>
                </div>
              </div>

              {/* Footer */}
              <footer className="border-t border-solid border-white/10 mt-10 px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="flex flex-col gap-4 items-start col-span-1 sm:col-span-2 md:col-span-1">
                    <div className="flex items-center gap-2 text-white">
                      <div className="size-4 text-primary">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                          <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
                        </svg>
                      </div>
                      <h3 className="text-base font-bold">PayFlow</h3>
                    </div>
                    <p className="text-sm text-white/60">© 2025 PayFlow • Built by Yusuf Malik</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h4 className="font-semibold text-sm text-white">Product</h4>
                    <Link href="/about" className="text-sm text-white/60 hover:text-white transition-colors">Features</Link>
                    <a href="dev" className="text-sm text-white/60 hover:text-white transition-colors">Pricing</a>
                    <a href="howto" className="text-sm text-white/60 hover:text-white transition-colors">Security</a>
                    <Link href="/invoice" className="text-sm text-white/60 hover:text-white transition-colors">Demo</Link>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h4 className="font-semibold text-sm text-white">Company</h4>
                    <Link href="/about" className="text-sm text-white/60 hover:text-white transition-colors">About Us</Link>
                    <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Careers</a>
                    <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Contact</a>
                    <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Blog</a>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h4 className="font-semibold text-sm text-white">Legal</h4>
                    <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Cookie Policy</a>
                  </div>
                </div>
              </footer>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
