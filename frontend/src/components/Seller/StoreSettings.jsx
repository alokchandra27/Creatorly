import React, { useState } from "react";

export default function StoreSettings() {
  // Store Settings ke liye dynamic form fields ki initial mock state shell
  const [storeData, setStoreData] = useState({
    storeName: "BalbeerAndSons",
    bio: "Welcome to my handicraft shop! We make pure organic mud artifacts.",
    countryCode: "91", // Default India select framework
    whatsappNumber: "9876543210", // Bina country code ke pure input numeric string
    instagramUsername: "balbeer_handicrafts",
    instagramLink: "https://instagram.com"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStoreData({
      ...storeData,
      [name]: value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // International WhatsApp trigger safe build test print
    const finalWhatsAppConfig = `${storeData.countryCode}${storeData.whatsappNumber}`;
    console.log("Final Saved Target Number:", finalWhatsAppConfig);
    
    alert(`UI Logic Check: Settings updated for '${storeData.storeName}' successfully! (Backend linking baad me)`);
  };

  return (
    <div className="min-h-screen bg-creator-bg-butter font-sans text-creator-text antialiased">
      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        
        {/* Page title row */}
        <div className="border-b border-creator-text/5 pb-5 mb-8">
          <h1 className="font-serif text-3xl font-black tracking-tight">⚙️ Store Settings</h1>
          <p className="text-xs text-creator-text/50 mt-0.5">Apni shop ki branding information aur contact endpoints manage karein.</p>
        </div>

        {/* Settings Main Form Sheet Layout */}
        <form onSubmit={handleFormSubmit} className="bg-creator-bg rounded-2xl border border-creator-text/5 p-6 sm:p-8 shadow-sm space-y-6">
          
          {/* Section 1: Branding Information */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-creator-text border-b border-creator-text/5 pb-1">Shop Branding</h3>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Store Name Input */}
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-creator-text/60">Store Name *</label>
                <input required type="text" name="storeName" value={storeData.storeName} onChange={handleInputChange} placeholder="E.g. Balbeer Crafts" className="rounded-xl border border-creator-text/10 bg-creator-bg-butter p-3 text-sm outline-none focus:border-creator-accent font-medium" />
              </div>

              {/* Bio Description TextArea */}
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-creator-text/60">Shop Bio / Description *</label>
                <textarea required rows="3" name="bio" value={storeData.bio} onChange={handleInputChange} placeholder="Apni shop ke baare me kuch likhein..." className="rounded-xl border border-creator-text/10 bg-creator-bg-butter p-3 text-sm outline-none focus:border-creator-accent resize-none font-medium text-creator-text" />
              </div>
            </div>
          </div>

          {/* Section 2: Core Checkout Redirection Settings (WhatsApp Matrix + Instagram Configuration) */}
          <div className="space-y-4 pt-4">
            <h3 className="font-serif text-lg font-bold text-creator-text border-b border-creator-text/5 pb-1">Order Checkout Integrations</h3>
            <p className="text-xs text-creator-text/50 leading-relaxed">
              Yahan diye gaye contact channels par hi customer ke dynamic custom invoice orders aur customized text logs dump honge. Please double check karein.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              
              {/* WhatsApp Dropdown country code and number wrap framework */}
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-creator-text/60">WhatsApp Business Number *</label>
                
                <div className="flex gap-2">
                  {/* Country Selector Dropdown Engine */}
                  <select 
                    name="countryCode" 
                    value={storeData.countryCode} 
                    onChange={handleInputChange}
                    className="rounded-xl border border-creator-text/10 bg-creator-bg-butter p-3 text-sm outline-none focus:border-creator-accent font-bold text-creator-text/70"
                  >
                    <option value="91">🇮🇳 +91 (India)</option>
                    <option value="1">🇺🇸 +1 (US)</option>
                    <option value="44">🇬🇧 +44 (UK)</option>
                    <option value="971">🇦🇪 +971 (UAE)</option>
                  </select>

                  {/* Primary Mobile Number input input */}
                  <input 
                    required 
                    type="tel" 
                    name="whatsappNumber" 
                    value={storeData.whatsappNumber} 
                    onChange={handleInputChange} 
                    placeholder="9876543210" 
                    className="flex-1 rounded-xl border border-creator-text/10 bg-creator-bg-butter p-3 text-sm outline-none focus:border-creator-accent font-medium tracking-wide" 
                  />
                </div>
                <span className="text-[10px] text-creator-text/40 font-medium">Bina zero (0) ya country prefix ke sirf pure mobile digit numbers type karein.</span>
              </div>

              {/* Instagram Handle Setup Input */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-creator-text/60">Instagram Username</label>
                <div className="relative flex items-center">
                  <span className="absolute left-3 text-sm font-bold text-creator-text/40 select-none">@</span>
                  <input type="text" name="instagramUsername" value={storeData.instagramUsername} onChange={handleInputChange} placeholder="username" className="w-full rounded-xl border border-creator-text/10 bg-creator-bg-butter py-3 pl-8 pr-3 text-sm outline-none focus:border-creator-accent font-medium" />
                </div>
              </div>

              {/* Instagram Profile Direct redirection anchor fallback hyperlink link */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-creator-text/60">Instagram Shop URL Link</label>
                <input type="url" name="instagramLink" value={storeData.instagramLink} onChange={handleInputChange} placeholder="https://instagram.com" className="rounded-xl border border-creator-text/10 bg-creator-bg-butter p-3 text-sm outline-none focus:border-creator-accent font-medium text-xs" />
              </div>

            </div>
          </div>

          {/* Form action bar triggers */}
          <div className="pt-4 border-t border-creator-text/5 flex justify-end">
            <button type="submit" className="rounded-full bg-creator-primary px-8 py-3 text-xs font-black text-white shadow hover:bg-opacity-95 transition active:scale-95">
              Save Shop Changes
            </button>
          </div>

        </form>

      </main>
    </div>
  );
}
