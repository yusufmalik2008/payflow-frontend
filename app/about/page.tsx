// app/about/page.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      {/* Exact Tailwind CDN + Fonts + Config from your HTML */}
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
                  borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
                },
              },
            }
          `,
        }}
      />

      {/* Fix Material Icons */}
      <style jsx global>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>

      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
        <div className="layout-container flex h-full grow flex-col">

          {/* TopNavBar */}
          <div className="sticky top-0 z-50 flex w-full justify-center border-b border-gray-200/50 dark:border-white/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
            <div className="flex w-full max-w-6xl flex-1 items-center justify-between whitespace-nowrap px-4 py-3">
              <div className="flex items-center gap-4 text-gray-900 dark:text-white">
                <div className="size-5 text-primary">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
                  </svg>
                </div>
                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">PayFlow</h2>
              </div>
              <div className="hidden items-center gap-9 md:flex">
                <Link href="/" className="text-sm font-medium leading-normal text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white">Home</Link>
                <a href="/howto" className="text-sm font-medium leading-normal text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white">Docs</a>
                <a href="/dev" className="text-sm font-medium leading-normal text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white">My Portofolio</a>
                <Link href="/about" className="text-sm font-medium leading-normal text-primary dark:text-white">About</Link>
              </div>
              <Link href="/invoice" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                <span className="truncate">Open Dashboard</span>
              </Link>
            </div>
          </div>

          <main className="flex flex-1 justify-center py-5">
            <div className="flex w-full max-w-6xl flex-1 flex-col">

              {/* Hero Section */}
              <section className="w-full @container">
                <div className="@[480px]:p-4">
                  <div 
                    className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center px-4 pb-10 text-center"
                    style={{
                      backgroundImage: `linear-gradient(rgba(18, 17, 33, 0.8) 0%, rgba(18, 17, 33, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDFHGTXTimW4QTPqH-WtTJOuWzKclG1V346-uJME2pNcF2bcWVBl7JyhG7POPZmJxGRWN2gNpsZB3oRZpU7Ip_r2gboxCQYXijqj4_fTi0TWlPYk_eT-1G36jKlQv4c3g3pEyIHa1jIi58O6vlinE42D_mx_haMS3UVZgnPanP1JQrKYUjLxDy1vvSXANLwgStKxQ2YhdyjsLovprQxnfaiO-ULZqzhHFrEGZkJRpCUzFkNm8CjqVceEAMkyv5758Xgd8fl11ku15A")`,
                    }}
                  >
                    <div className="flex max-w-3xl flex-col gap-4">
                      <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl">
                        The Future of Payment Processing
                      </h1>
                      <h2 className="text-gray-300 text-base font-normal leading-normal @[480px]:text-lg">
                        PayFlow is an enterprise-grade, real-time order & payment processing platform built with event-driven microservices, designed for scalability and security.
                      </h2>
                    </div>
                    <Link href="/invoice" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                      <span className="truncate">See PayFlow in Action</span>
                    </Link>
                  </div>
                </div>
              </section>

              {/* Core Values */}
              <section className="flex flex-col gap-10 px-4 py-16 @container">
                <div className="flex flex-col gap-4 text-center items-center">
                  <h2 className="text-gray-900 dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] @[480px]:text-4xl max-w-2xl">
                    Built on Principles That Drive Success
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-normal max-w-2xl">
                    We are committed to providing a platform that is not only powerful and reliable but also built on core values that ensure success for our enterprise clients.
                  </p>
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 p-0">
                  {[
                    { icon: "trending_up", title: "Scalability", desc: "Our event-driven architecture scales effortlessly with your business, handling peak loads without compromising performance." },
                    { icon: "verified_user", title: "Security", desc: "With enterprise-grade security protocols, we ensure every transaction is protected and compliant with industry standards." },
                    { icon: "speed", title: "Real-Time Performance", desc: "Process orders and payments instantly, providing a seamless and responsive experience for your customers." },
                  ].map((item) => (
                    <div key={item.title} className="flex flex-1 flex-col gap-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark p-6 text-center items-center">
                      <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary">
                        <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Technology Section */}
              <section className="px-4 py-16">
                <div className="flex flex-col items-center gap-4 text-center">
                  <h2 className="text-gray-900 dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] @[480px]:text-4xl">Our Technology</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-normal max-w-2xl">
                    PayFlow is built on a modern, event-driven microservices architecture. This ensures high availability, fault tolerance, and the ability to independently scale services based on demand.
                  </p>
                </div>
                <div className="mt-12 flex justify-center">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsx_BMaxxACuUOFz0P56pSRVKIYhLhehVYVRtsiXznOW5YV6zIpP7s-mvPJtVV0c81nLeNZp6DPiph83bR1Arsd2_r1HSs-el-zjhn6DGa1nASgjI3WkyyHuVjuAMY3r6MPE9STnJa8u1sx89x5aDy6toHxKuZreuNfHo6LpU4kuHhiwiJM9g2obbOBMAk1lKI3PSTWlCii69WALWi49ywX7_54q5qoiPhNFRs15UulqGz_hZkQCFvosmgMrQ5kUCindOGi28Ds-M"
                    alt="PayFlow Architecture"
                    width={1600}
                    height={900}
                    className="w-full max-w-4xl rounded-lg"
                  />
                </div>
              </section>

              {/* Leadership Team */}
              <section className="px-4 py-16">
                <div className="flex flex-col items-center gap-4 text-center">
                  <h2 className="text-gray-900 dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] @[480px]:text-4xl">Meet Our Leadership</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-normal max-w-2xl">
                    The innovators and visionaries steering PayFlow towards the future of financial technology.
                  </p>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    { name: "Alex Johnson", role: "Chief Executive Officer", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZOCoJLJ18_MRC-6YNMi0cfVqWCUq1Inix7d1kQJlPqniuPu0Vy5H4cKuvrOL2qsDJSMI2x62IBHXe3D1M67-EV7JjIxiTZNs2Df_F4SsU09Ck4PiKlUpE-S2JI4Cuw1Kqq77IiPhNJlNegXei8FXLtR18kJgbaJMZwEkG7k9-bVwmBEC2p48zJrJjPXwSR-VACO7iYAK2p3ed5TI4SS7LO5KuoJDVsVJae1lm8ul82Es3xIhUYMJCdqgvmIRTj_XtvRG7OVejm2M" },
                    { name: "Maria Garcia", role: "Chief Technology Officer", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoSPoX1lBQ6-pajF1ZvYmvuV4cnV9kdQi_adIgIUs-Vf2H1-0EjiOaPBHZo36-sasp7LsqAte5fxk4TXC7Ak1Fq-SWM2xJQrziuZ0An6W1yX2nqMER9w2jLo3wYAYtKxl6rYz8ZT7gV0h0mQS1nXdg0hrQ3Mp7cc1BMTHXFh6s_Vf2HmS9f2XVdFZYftloYexM8fhRmCT3zAys1tvzHC6qVvqrmGYVJ60-_dtEI_KrDNcxy6Ar0ToztV9rsXB3yL_PWYe6azV4Ojg" },
                    { name: "David Chen", role: "VP of Engineering", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIWH5IdEDnJzJEFj-baD3JxWeQzzJuVrk6nWtkATVon_nv4WWYJai65pDrY2moriy8oGgPX73CTMvynKc5EwFTn_Y1mx3l5Pj-9dxGgJz7o9Kb7GlQF_MMZZDuM5O2u-HpBW60ROZklyJ9oG6VdPtBKwyJvGhYYdnl7NV_Px2VYCjrNPKLldy60x-PDaUMLnn_pTIFm-ijVvjfedJkxSiD60DwiNmVi2P4KX0LetVGKmh-p16JoTrIle_tXXq9oYydYuLajZBNBAk" },
                    { name: "Emily White", role: "Head of Product", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL9sNcEaVOVEsqco6PaEckIRD6SfrwzgEfr04grwQdIQduQZktD7r-s1OkTKVzjk-Unt61NysU1-lEqdrnOWax4j-E_ji8VLmdDm06o3FXq3ZbfCdJqYC5H5Ki9ibiljEav3quxAEEFlCedxCmnr6zEOU8lqgbr0SwZ2a_YOcrQUA5kOcvXeFgJrCqFgi3dJD8sSKvUn4XnvTQi7dNvLcR_lc7O8odnMNuVZlK82dExiOeHh5F1DUUTayvtguTKcMbVcOzHSL4_eI" },
                  ].map((person) => (
                    <div key={person.name} className="flex flex-col items-center text-center">
                      <img src={person.img} alt={person.name} width={160} height={160} className="size-40 rounded-full object-cover" />
                      <h4 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">{person.name}</h4>
                      <p className="text-sm text-primary">{person.role}</p>
                    </div>
                  ))}
                </div>
              </section>

            </div>
          </main>

          {/* Footer */}
          <footer className="flex justify-center border-t border-gray-200 dark:border-white/10 bg-white dark:bg-background-dark">
            <div className="w-full max-w-6xl px-4 py-8">
              <div className="flex flex-col items-center gap-6 text-center">
                <div className="flex items-center gap-3 text-gray-900 dark:text-white">
                  <div className="size-5 text-primary">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                      <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg font-bold">PayFlow</h2>
                </div>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                  <Link href="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white">Platform</Link>
                  <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white">Pricing</a>
                  <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white">Contact</a>
                  <Link href="/about" className="text-sm text-primary dark:text-white">About</Link>
                  <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white">Terms of Service</a>
                  <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white">Privacy Policy</a>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500">© 2025 PayFlow • Built by Yusuf Malik</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
