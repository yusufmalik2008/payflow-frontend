// src/app/portofolio/layout.tsx
import { ReactNode } from "react";

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f6f7f8] dark:bg-[#101922] text-gray-800 dark:text-gray-200 font-['Space_Grotesk'] antialiased">
      {children}
    </div>
  );
}
