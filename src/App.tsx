/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { PricingTable } from "@/components/sections/PricingTable";
import { Workflow } from "@/components/sections/Workflow";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/layout/Footer";
import { BottomNav } from "@/components/layout/BottomNav";
import { StickyCTA } from "@/components/sections/StickyCTA";
import { Testimonials } from "@/components/sections/Testimonials";
import { BofficePromo } from "@/components/sections/BofficePromo";
import { RdtrPage } from "@/components/sections/RdtrPage";
import { CekNamaPage } from "@/components/sections/CekNamaPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 font-sans text-gray-900 flex flex-col">
        <Header />
        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <ServiceGrid />
                <PricingTable />
                <Workflow />
                <Testimonials />
                <BofficePromo />
                <FAQ />
              </>
            } />
            <Route path="/cek-kbli-terbaru" element={<RdtrPage />} />
            <Route path="/cek-nama-pt" element={<CekNamaPage />} />
          </Routes>
        </main>
        <Footer />
        <BottomNav />
        <StickyCTA />
      </div>
    </BrowserRouter>
  );
}
