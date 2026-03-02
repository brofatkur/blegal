/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { PricingTable } from "@/components/sections/PricingTable";
import { Workflow } from "@/components/sections/Workflow";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/layout/Footer";
import { BottomNav } from "@/components/layout/BottomNav";
import { StickyCTA } from "@/components/sections/StickyCTA";

import { Testimonials } from "@/components/sections/Testimonials";
import { BofficePromo } from "@/components/sections/BofficePromo";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ServiceGrid />
        <PricingTable />
        <Workflow />
        <Testimonials />
        <BofficePromo />
        <FAQ />
      </main>
      <Footer />
      <BottomNav />
      <StickyCTA />
    </div>
  );
}
