import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Ruler, ShieldCheck, Clock, HardHat, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/Button";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831&auto=format&fit=crop" 
            alt="Modern Architecture" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-novus-slate/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-novus-slate/90 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-novus-orange animate-pulse" />
              Serving Southern California
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
              Precision Construction for Southern California’s Premium Properties.
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
              From custom ADUs to commercial build-outs, Novus Construction Inc. delivers uncompromising quality, on time and on budget.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">Request an Estimate</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-novus-slate" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Credibility Bar */}
      <section className="bg-novus-slate border-y border-gray-800 py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 text-gray-400 text-sm font-medium uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-novus-orange" />
              CSLB License #1133226
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-novus-orange" />
              Fully Bonded & Insured
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-novus-orange" />
              Premium Quality Guaranteed
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-novus-orange" />
              Safety First Certified
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Snapshot */}
      <section className="py-24 bg-novus-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-novus-slate mb-4">Master Craftsmanship Across Every Trade</h2>
            <p className="text-gray-600 text-lg">We bring commercial-grade precision to every residential and commercial project we touch.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "ADUs & Additions",
                desc: "Maximize your property value and generate passive income with a turnkey ADU. We handle the complex local zoning laws and permitting for you.",
                img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop"
              },
              {
                title: "Luxury Remodels",
                desc: "Full home overhauls, custom kitchens, and spa-like bathrooms. We execute complex architectural plans with absolute precision.",
                img: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=2940&auto=format&fit=crop"
              },
              {
                title: "Commercial TI",
                desc: "We build out your space quickly so you can open your doors and generate revenue. Fully compliant with ADA and commercial fire codes.",
                img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2869&auto=format&fit=crop"
              }
            ].map((service, i) => (
              <Link to="/services" key={i} className="group block bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-novus-slate/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-novus-slate mb-3 group-hover:text-novus-orange transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">{service.desc}</p>
                  <span className="inline-flex items-center text-sm font-bold text-novus-slate group-hover:text-novus-orange transition-colors uppercase tracking-wider">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">Also specializing in: Framing • Drywall • Stucco • Roofing • Finish Carpentry</p>
            <Button variant="outline" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-novus-slate mb-6">The Antidote to Contractor Anxiety.</h2>
              <p className="text-lg text-gray-600 mb-8">
                The construction industry is plagued by delays, hidden costs, and flaky communication. Novus Construction Inc. was built to be the exact opposite.
              </p>
              
              <div className="space-y-8">
                {[
                  {
                    icon: <Ruler className="w-6 h-6 text-novus-orange" />,
                    title: "Radical Transparency",
                    desc: "No hidden fees, no surprise change orders. You see the numbers before we swing a hammer."
                  },
                  {
                    icon: <Clock className="w-6 h-6 text-novus-orange" />,
                    title: "Schedule Certainty",
                    desc: "We respect your time. Our strict project management keeps your build moving daily."
                  },
                  {
                    icon: <HardHat className="w-6 h-6 text-novus-orange" />,
                    title: "Jobsite Excellence",
                    desc: "A clean site is a safe, efficient site. We treat your property with absolute respect."
                  }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 mt-1 w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-novus-slate mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] rounded-sm overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1541888086925-920a0eb56e1b?q=80&w=2940&auto=format&fit=crop" 
                  alt="Clean Jobsite" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-novus-slate text-white p-8 rounded-sm shadow-2xl max-w-xs hidden md:block">
                <div className="text-4xl font-bold text-novus-orange mb-2">15+</div>
                <div className="text-sm font-medium uppercase tracking-wider">Years of Master Craftsmanship in Southern California</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Process */}
      <section className="py-24 bg-novus-slate text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Predictable Excellence from Blueprint to Build.</h2>
            <p className="text-gray-400 text-lg">Our proven 4-step process removes the anxiety of the unknown.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-700 z-0" />
            
            {[
              { step: "01", title: "Consultation", desc: "We discuss your vision, budget, and timeline to ensure we are the right fit." },
              { step: "02", title: "Pre-Construction", desc: "Detailed estimating, architectural planning, and securing all necessary permits." },
              { step: "03", title: "The Build Phase", desc: "Our master tradesmen execute the plan with daily oversight and strict quality control." },
              { step: "04", title: "Final Walkthrough", desc: "We hand over the keys only when every detail meets our uncompromising standards." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-novus-slate border-4 border-gray-700 flex items-center justify-center text-2xl font-bold text-novus-orange mb-6 shadow-xl">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Core Values */}
      <section className="py-24 bg-novus-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-novus-slate mb-4">Our Core Values.</h2>
            <p className="text-gray-600 text-lg">The principles that guide every project we take on.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity First",
                desc: "We believe in doing the right thing, even when no one is watching. Honest pricing, transparent communication, and ethical building practices.",
                icon: <ShieldCheck className="w-8 h-8 text-novus-orange" />
              },
              {
                title: "Uncompromising Quality",
                desc: "We don't cut corners. From the foundation to the final coat of paint, we deliver master craftsmanship that stands the test of time.",
                icon: <CheckCircle2 className="w-8 h-8 text-novus-orange" />
              },
              {
                title: "Client-Centric Approach",
                desc: "Your vision is our blueprint. We listen, adapt, and work tirelessly to ensure the final result exceeds your expectations.",
                icon: <HardHat className="w-8 h-8 text-novus-orange" />
              }
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-novus-slate mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="py-24 bg-novus-orange text-white text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to build? Let’s discuss your project.</h2>
          <p className="text-xl text-white/90 mb-10">
            Get a detailed, line-item proposal from Southern California's premier general contractor.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg" asChild>
              <Link to="/contact">Start Your Estimate</Link>
            </Button>
            <span className="text-sm font-medium text-white/80">No commitment required.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
