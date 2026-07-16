import React, { useEffect } from 'react';
import { Check, Globe, FileText, Building, ArrowRight, Clock, MapPin, Shield } from "lucide-react";
import { Button } from "../ui/Button";

export function PMALandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Set Up PT PMA in Bali | Foreign Investment Company | B-Legal";
  }, []);

  return (
    <div className="w-full bg-[#fbf8f3]">
      {/* HERO SECTION */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-brown font-medium text-sm mb-6 border border-brand-gold/20">
              <Globe className="w-4 h-4" />
              <span>Foreign Direct Investment (PT PMA)</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1a1614] mb-6 leading-tight">
              Start Your Business in Bali with <span className="text-brand-brown italic">Full Ownership</span>
            </h1>
            <p className="text-lg md:text-xl text-[#5a5048] mb-10">
              Establish a PT PMA (Foreign Investment Company) safely and legally. 
              We handle the bureaucracy so you can focus on growing your business in Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-lg px-8 py-6"
                onClick={() => window.open("https://app.linktochat.id/api/pr/blegal", "_blank")}
              >
                Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-2 sm:mt-0">
                <Shield className="w-4 h-4 text-green-600" />
                <span>100% Legal Compliance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="py-20 bg-white" id="benefits">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a1614] mb-4">Why Establish a PT PMA?</h2>
            <p className="text-[#5a5048]">The most secure and robust legal entity for foreigners doing business in Indonesia.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 border border-[#e6dfd4] rounded-2xl bg-[#fbf8f3] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brand-gold/20 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-brand-brown" />
              </div>
              <h3 className="text-xl font-bold text-[#1a1614] mb-3">Up to 100% Foreign Ownership</h3>
              <p className="text-[#5a5048]">Depending on your business classification (KBLI), you can own up to 100% of the company without needing a local nominee.</p>
            </div>
            <div className="p-8 border border-[#e6dfd4] rounded-2xl bg-[#fbf8f3] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brand-gold/20 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-brand-brown" />
              </div>
              <h3 className="text-xl font-bold text-[#1a1614] mb-3">Sponsor Investor KITAS</h3>
              <p className="text-[#5a5048]">As a shareholder or director of a PT PMA, you are eligible for an Investor Residence Permit (KITAS) valid for up to 2 years.</p>
            </div>
            <div className="p-8 border border-[#e6dfd4] rounded-2xl bg-[#fbf8f3] hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brand-gold/20 rounded-xl flex items-center justify-center mb-6">
                <Building className="w-6 h-6 text-brand-brown" />
              </div>
              <h3 className="text-xl font-bold text-[#1a1614] mb-3">Acquire Properties Legally</h3>
              <p className="text-[#5a5048]">A PT PMA can legally hold property titles (Hak Guna Bangunan / Right to Build) under the company's name.</p>
            </div>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="py-20 bg-[#1a1614] text-white" id="requirements">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-gold mb-6">PT PMA Requirements</h2>
              <p className="text-gray-300 mb-8 text-lg">Before starting the incorporation process, make sure you meet the standard requirements set by the Indonesian Investment Board (BKPM).</p>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-bold">1</div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Minimum Investment Plan</h4>
                    <p className="text-gray-400">An investment plan of minimum IDR 10 Billion (approx. $650,000 USD) per business sector. *Paid-up capital requirement is IDR 10 Billion.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-bold">2</div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Minimum 2 Shareholders</h4>
                    <p className="text-gray-400">Can be individuals or corporate entities. You will also need at least 1 Director and 1 Commissioner.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-bold">3</div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Registered Address</h4>
                    <p className="text-gray-400">A commercial registered address in Indonesia. (We provide a Virtual Office solution if you don't have a physical office yet).</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#2a2420] p-8 md:p-10 rounded-2xl border border-[#3a3430]">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">Required Documents</h3>
              <ul className="space-y-4">
                {[
                  "Color scan of valid Passports (min. 18 months validity)",
                  "Statement letter of domicile",
                  "If shareholder is a foreign company: Article of Association (in English/Indonesian)",
                  "Proposed company name (min. 3 words)",
                  "Details of business activities (KBLI)"
                ].map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{doc}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 pt-8 border-t border-[#3a3430]">
                <p className="text-sm text-gray-400 mb-4">Unsure about your documents or business classification?</p>
                <Button variant="outline" className="w-full border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-[#1a1614]" onClick={() => window.open("https://app.linktochat.id/api/pr/blegal", "_blank")}>
                  Ask Our Consultants
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 bg-white relative overflow-hidden" id="pricing">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#fbf8f3] rounded-l-[100px] -z-10 opacity-50"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a1614] mb-4">Transparent Pricing, No Hidden Fees</h2>
              <p className="text-[#5a5048]">Complete PT PMA incorporation package including all essential licenses.</p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl border border-[#e6dfd4] overflow-hidden flex flex-col md:flex-row">
              <div className="p-8 md:p-12 md:w-3/5">
                <div className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-bold rounded-full mb-6">
                  Save 14%
                </div>
                <h3 className="text-3xl font-bold text-[#1a1614] mb-2">PT PMA Package</h3>
                <p className="text-gray-500 mb-6">Complete legal establishment for Foreign Investment.</p>
                
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-xl text-gray-400 line-through">Rp 29.000.000</span>
                </div>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-2xl font-bold text-brand-brown">Rp</span>
                  <span className="text-5xl font-bold text-brand-brown tracking-tight">24.900.000</span>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-[#1a1614]">What's included:</h4>
                  <ul className="space-y-3">
                    {[
                      "Company Name Checking & Reservation",
                      "Investment Board (BKPM) Approval",
                      "Notary Deed of Establishment (Akta Notaris)",
                      "Ministry of Law & Human Rights Approval (SK Kemenkumham)",
                      "Company Tax ID (NPWP Badan)",
                      "Business Identification Number (NIB)",
                      "Standard Business Licenses (OSS RBA)"
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-brand-gold shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                    <li className="flex items-start gap-3 bg-brand-gold/10 p-3 rounded-lg border border-brand-gold/20">
                      <Check className="w-5 h-5 text-brand-brown shrink-0" />
                      <span className="text-brand-brown font-bold">BONUS: 1 Year Virtual Office in Bali</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-[#1a1614] text-white p-8 md:p-12 md:w-2/5 flex flex-col justify-center">
                <h4 className="text-2xl font-serif font-bold text-brand-gold mb-4">Ready to Start?</h4>
                <p className="text-gray-300 mb-8">The process typically takes 10-14 working days after all documents are signed.</p>
                
                <ul className="space-y-6 mb-10">
                  <li className="flex gap-3">
                    <Clock className="w-6 h-6 text-brand-gold opacity-80" />
                    <div>
                      <div className="font-bold">Standard Processing</div>
                      <div className="text-sm text-gray-400">10-14 Working Days</div>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <MapPin className="w-6 h-6 text-brand-gold opacity-80" />
                    <div>
                      <div className="font-bold">Remote Setup Available</div>
                      <div className="text-sm text-gray-400">No need to be in Bali initially</div>
                    </div>
                  </li>
                </ul>

                <Button 
                  size="lg" 
                  className="w-full bg-brand-gold hover:bg-[#a37a33] text-[#1a1614] border-none font-bold text-lg"
                  onClick={() => window.open("https://app.linktochat.id/api/pr/blegal", "_blank")}
                >
                  Start Application
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
