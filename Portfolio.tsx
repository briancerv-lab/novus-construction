import { useState } from "react";
import { Button } from "../components/ui/Button";
import { ShieldCheck } from "lucide-react";

export function Contact() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: "",
    timeline: "",
    budget: "",
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const handleNext = () => setStep(s => Math.min(s + 1, 4));
  const handlePrev = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    alert("Thank you for your request. A project manager will contact you within 24 hours.");
    setStep(1);
  };

  return (
    <div className="pt-24 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-novus-slate mb-6">Let's discuss your project.</h1>
            <p className="text-lg text-gray-600 mb-12">
              Fill out the form to request a detailed, line-item proposal. Our team reviews every inquiry and will reach out within 24 hours to schedule a consultation.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-novus-light rounded-full flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-novus-orange" />
                </div>
                <div>
                  <h3 className="font-bold text-novus-slate text-lg">Fully Licensed & Insured</h3>
                  <p className="text-gray-600">CSLB License #1133226. We carry comprehensive liability and workers' comp insurance.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-novus-light rounded-full flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-novus-orange" />
                </div>
                <div>
                  <h3 className="font-bold text-novus-slate text-lg">Transparent Pricing</h3>
                  <p className="text-gray-600">No hidden fees. No surprise change orders. You see the numbers before we swing a hammer.</p>
                </div>
              </div>
            </div>

            <div className="bg-novus-slate text-white p-8 rounded-sm">
              <h3 className="font-bold text-xl mb-4">Direct Contact</h3>
              <p className="mb-2">Phone: <a href="tel:+19519030824" className="text-novus-orange hover:underline">(951) 903-0824</a></p>
              <p className="mb-2">Email: <a href="mailto:info@novusconstructioninc.com" className="text-novus-orange hover:underline">info@novusconstructioninc.com</a></p>
              <p className="text-gray-400 text-sm mt-6">Office Hours: Mon-Fri, 7am - 5pm</p>
            </div>
          </div>

          {/* Right: Multi-step Form */}
          <div className="bg-novus-light p-8 md:p-12 rounded-sm border border-gray-200">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-sm font-bold text-novus-orange uppercase tracking-wider">Step {step} of 4</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className={`h-1.5 w-8 rounded-full ${i <= step ? 'bg-novus-orange' : 'bg-gray-300'}`} />
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                  <h2 className="text-2xl font-bold text-novus-slate mb-6">What type of project are you planning?</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["ADU Construction", "Full Home Remodel", "Kitchen / Bath", "Commercial TI", "Addition", "Other"].map(type => (
                      <label key={type} className={`cursor-pointer border-2 p-4 rounded-sm transition-colors ${formData.projectType === type ? 'border-novus-orange bg-white' : 'border-gray-200 bg-white hover:border-novus-slate'}`}>
                        <input type="radio" name="projectType" className="sr-only" checked={formData.projectType === type} onChange={() => setFormData({...formData, projectType: type})} />
                        <span className="font-medium text-novus-slate">{type}</span>
                      </label>
                    ))}
                  </div>
                  <Button type="button" onClick={handleNext} disabled={!formData.projectType} className="w-full mt-8">Next Step</Button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                  <h2 className="text-2xl font-bold text-novus-slate mb-6">What is your target timeline?</h2>
                  <div className="space-y-3">
                    {["ASAP", "1-3 Months", "3-6 Months", "Just Researching"].map(time => (
                      <label key={time} className={`flex items-center cursor-pointer border-2 p-4 rounded-sm transition-colors ${formData.timeline === time ? 'border-novus-orange bg-white' : 'border-gray-200 bg-white hover:border-novus-slate'}`}>
                        <input type="radio" name="timeline" className="sr-only" checked={formData.timeline === time} onChange={() => setFormData({...formData, timeline: time})} />
                        <span className="font-medium text-novus-slate">{time}</span>
                      </label>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-8">
                    <Button type="button" variant="outline" onClick={handlePrev} className="w-1/3">Back</Button>
                    <Button type="button" onClick={handleNext} disabled={!formData.timeline} className="w-2/3">Next Step</Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                  <h2 className="text-2xl font-bold text-novus-slate mb-6">What is your anticipated budget?</h2>
                  <div className="space-y-3">
                    {["$50k - $100k", "$100k - $250k", "$250k - $500k", "$500k+"].map(budget => (
                      <label key={budget} className={`flex items-center cursor-pointer border-2 p-4 rounded-sm transition-colors ${formData.budget === budget ? 'border-novus-orange bg-white' : 'border-gray-200 bg-white hover:border-novus-slate'}`}>
                        <input type="radio" name="budget" className="sr-only" checked={formData.budget === budget} onChange={() => setFormData({...formData, budget: budget})} />
                        <span className="font-medium text-novus-slate">{budget}</span>
                      </label>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-8">
                    <Button type="button" variant="outline" onClick={handlePrev} className="w-1/3">Back</Button>
                    <Button type="button" onClick={handleNext} disabled={!formData.budget} className="w-2/3">Next Step</Button>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                  <h2 className="text-2xl font-bold text-novus-slate mb-6">Your Contact Details</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-novus-slate mb-1">Full Name</label>
                      <input required type="text" className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-novus-orange focus:ring-1 focus:ring-novus-orange" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-novus-slate mb-1">Email</label>
                        <input required type="email" className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-novus-orange focus:ring-1 focus:ring-novus-orange" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-novus-slate mb-1">Phone</label>
                        <input required type="tel" className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-novus-orange focus:ring-1 focus:ring-novus-orange" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-novus-slate mb-1">Property Address</label>
                      <input required type="text" className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:border-novus-orange focus:ring-1 focus:ring-novus-orange" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} />
                    </div>
                  </div>
                  <div className="flex gap-4 mt-8">
                    <Button type="button" variant="outline" onClick={handlePrev} className="w-1/3">Back</Button>
                    <Button type="submit" className="w-2/3">Submit Request</Button>
                  </div>
                  <p className="text-xs text-center text-gray-500 mt-4">No commitment required. Your information is 100% secure.</p>
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
