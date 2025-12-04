// app/dev/page.tsx
import Link from 'next/link';

export default function DevPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-6xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Yusuf Malik XI-2
        </h1>
        <p className="text-2xl mb-12 text-gray-400 leading-relaxed">
          Anak SMK yang tidurnya cuma 4 jam karena lagi asik ngerjain project berikutnya.<br />
          Linux gue sering rusak, repo gue penuh “fix-later”, tapi somehow semua projectnya jalan dan dipake beneran. wkwk ya gitu deh
        </p>

        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {/* Tech Stack */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Tech Stack & Skills</h2>
            <div className="grid grid-cols-2 gap-4 text-lg">
              {[
                'JavaScript', 'Bun / Deno 2', 'React / Next.js', 'TailwindCSS + Shadcn/ui',
                'Django', 'SQLServer / Prisma', 'Docker, Kubernetes', 'Cloud & SAP'
              ].map(skill => (
                <div key={skill} className="bg-white/10 backdrop-blur rounded-xl px-5 py-3 text-center">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-purple-400">PayFlow — Real-Time Order Dashboard</h3>
                <p className="text-gray-400 my-2">The exact app you're using right now — NestJS + NATS + Next.js</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-3 py-1 bg-purple-900/50 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-pink-900/50 rounded-full text-sm">NestJS</span>
                  <span className="px-3 py-1 bg-blue-900/50 rounded-full text-sm">NATS</span>
                </div>
                <Link href="/" className="text-purple-400 mt-4 inline-block hover:underline">→ Live Demo</Link>
              </div>

              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-pink-400">E-Raport Otomatis + Kirim WA ke Ortu</h3>
                <p className="text-gray-400 my-2">Guru BK sekarang punya waktu buat ngopi, bukan ngetik 700 nama</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-3 py-1 bg-green-900/50 rounded-full text-sm">Laravel</span>
                  <span className="px-3 py-1 bg-blue-900/50 rounded-full text-sm">Flutter</span>
                  <span className="px-3 py-1 bg-yellow-900/50 rounded-full text-sm">WhatsApp API</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl text-gray-500">Open for freelance • Available for hire • DM kuy</p>
          <p className="text-4xl mt-8">yusuf@payflow.id</p>
        </div>
      </div>
    </div>
  );
}
