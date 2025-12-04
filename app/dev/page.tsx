"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#f6f7f8] dark:bg-[#101922] text-gray-800 dark:text-gray-200 font-['Space_Grotesk']">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#f6f7f8]/80 dark:bg-[#101922]/80 backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 sm:px-10 py-3">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-xl text-[#137fec]">terminal</span>
            <h2 className="text-lg font-bold tracking-tight">Yusuf Malik XI-2</h2>
          </div>

          {/* Desktop Nav */}
          <div className="hidden sm:flex items-center gap-8 flex-1 justify-end">
            <div className="flex gap-9">
              {["Home", "Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`/`}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#137fec] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
	    <Link href="/">
            <Button className="bg-[#137fec] hover:bg-[#137fec]/90 text-white font-bold">
              Get In Touch
            </Button>
	    </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="sm:hidden size-10 rounded-lg bg-[#137fec]/20 text-[#137fec] flex items-center justify-center">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>

      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4">
          {/* Hero Section */}
          <div className="grid @[864px]:grid-cols-2 gap-8 items-center">
            <div className="order-2 @[864px]:order-1 space-y-8">
              <div>
                <h1 className="text-4xl @[480px]:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
                  Hi, I'm Yusuf Malik XI-2
                </h1>
                <p className="mt-4 text-base @[480px]:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    Anak SMK yang tidurnya cuma 4 jam karena lagi asik ngerjain project berikutnya.  
  Linux gue sering rusak, repo gue penuh “fix-later”, tapi somehow semua projectnya jalan dan dipake beneran.  
  <span className="text-[#137fec] font-bold"> wkwk ya gitu deh</span>             </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {[
                  { icon: "GitHub", href: "https://github.com/yusufmalik2008" },
                  { icon: "LinkedIn", href: "https://www.linkedin.com/in/yusuf-malik-602b16203/" },
                  { icon: "mail", href: "mailto:yusufmalik2008@gmail.com" },
                ].map((social) => (
                  <a
                    key={social.icon}
                    href={social.href}
                    className="size-12 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center group hover:bg-[#137fec] transition-all"
                  >
                    {social.icon === "GitHub" ? (
                      <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                    ) : social.icon === "LinkedIn" ? (
                      <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                      </svg>
                    ) : (
                      <span className="material-symbols-outlined text-gray-700 dark:text-gray-300 group-hover:text-white">
                        {social.icon}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-1 @[864px]:order-2 aspect-square rounded-xl bg-cover bg-center" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBceK8NrQH09d9yhH0rLvAjew0cDL0tlYm58Ngak3aWaOCigLjGXWTZG1CiXg15Xv7VRgNy9DcePPg5j5MYtUGyaIuNJs1GmsZe0H5NavkQE3RG1QO6LJ_rP2AkBnv4gjt7rFXsiv9n-bTiylC9CCbkniW5Jzm2SS-t6l6cltQb7Iw9cKwDuJ8iwydN4EZohdjOE2zdpkk6wvdwuiJtSp_hcthn2f_O-8wlLAWA5_PazwGkj4Enu1VkqnqmbxvUa0mbt_bUToRidv8')" }}
            />
          </div>

          {/* Tech Stack */}
          <section className="py-16 sm:py-24">
            <h2 className="text-2xl font-bold px-4 pb-6">Tech Stack & Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4">
              {[
                { icon: "javascript", label: "JavaScript" },
                { icon: "code", label: "Bun / Deno 2" },
                { icon: "developer_mode_tv", label: "React / Next.js" },
                { icon: "hub", label: "TailwindCSS, Shadcn/ui and Radix UI" },
                { icon: "data_object", label: "Django" },
                { icon: "database", label: "SQLServer / Prisma" },
                { icon: "deployed_code", label: "Docker, Kubernetes" },
                { icon: "cloud", label: "Cloud & SAP" },
              ].map((skill) => (
                <Card key={skill.label} className="flex items-center gap-3 p-4 border-gray-200 dark:border-white/10 bg-white dark:bg-white/5">
                  <span className="material-symbols-outlined text-2xl text-[#137fec]">{skill.icon}</span>
                  <h3 className="font-bold">{skill.label}</h3>
                </Card>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="py-16 sm:py-24">
            <h2 className="text-2xl font-bold px-4 pb-6">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8 p-4">
              {/* Project 1 */}
              <Card className="overflow-hidden group border-gray-200 dark:border-white/10 bg-white dark:bg-white/5">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDPhJINY9OC9khICnW0Qr8BACmOKQV-Numt2c7EvCQu7rW8MDz99d4Zgs4GipUBtSC-NDJiHbSaCUXyrNPNh82wn9rObNZJOVBIR4jnE06csQ2eHXAJXUEQWIrrOC8W2Y0pwjRFep0_sJXjM0tQAVhmtEj-6gobOfsxqAvSTZ0ql4UduM-lykgv0gShYTO1SHiRRDDceW-hNzeMZu1knxDY6VSdVFkOgA7QSmh_rXcMy3AzhqK1cNrmyddrYNoZytROg1j4Qc-NE7w')" }} />
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-bold">Notion-Style Todo App</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">The exact app you're using right now — pixel-perfect, dark mode, SQLite + Prisma</p>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "Prisma", "Shadcn/ui", "TypeScript"].map(t => (
                      <span key={t} className="text-xs font-medium bg-[#137fec]/20 text-[#137fec] px-2 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-6 text-sm">
                    <a href="#" className="flex items-center gap-1 font-medium hover:text-[#137fec]">
                      <span className="material-symbols-outlined text-lg">link</span> Live Demo
                    </a>
                    <a href="#" className="flex items-center gap-1 font-medium hover:text-[#137fec]">
                      <span className="material-symbols-outlined text-lg">code</span> Source
                    </a>
                  </div>
                </div>
              </Card>

              {/* Project 2 */}
              <Card className="overflow-hidden group border-gray-200 dark:border-white/10 bg-white dark:bg-white/5">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBLKsbKwRXAxAfEa17SKvWm69ZigDOuyt4s8PS31uuMzd8I_7b2ZPZga3xpQFLTEe3YCupdEehYR-GMv4lmTkseqts0lnRUu20Mq7nV1fhYWU8okpBmiZh5l7ASZh87_s51YoE_uuG62RSwVT_Z-iu0Ye4HuhsGBpsZ1K22S4Rtm6OAnTvIU_SmFhKMowZajUffNUlhWi2nLKnskDg0BmY6DhhSU-srFAmPvhPyv-rgKdysldgMAEDS7xTwQyQxk0Aj4ZxBXZvt5Ug')" }} />
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-bold">E-Raport Otomatis + Kirim WA ke Ortu (Guru BK Nangis Bahagia)</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Akhir semester guru ngetik Excel sampe subuh → gue bikin sistem yang ambil nilai dari Google Sheet, 
  hitung otomatis, generate PDF raport cantik, terus kirim langsung ke WA orang tua pake WhatsApp API. 
  Hasilnya: guru BK sekarang punya waktu buat ngopi, bukan ngetik 700 nama.</p>
                  <div className="flex flex-wrap gap-2">
                    {["Laravel", "Flutter", "MySQL", "Firebase"].map(t => (
                      <span key={t} className="text-xs font-medium bg-[#137fec]/20 text-[#137fec] px-2 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-6 text-sm">
                    <a href="#" className="flex items-center gap-1 font-medium hover:text-[#137fec]">
                      <span className="material-symbols-outlined text-lg">link</span> Live Demo
                    </a>
                    <a href="#" className="flex items-center gap-1 font-medium hover:text-[#137fec]">
                      <span className="material-symbols-outlined text-lg">code</span> Source
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

