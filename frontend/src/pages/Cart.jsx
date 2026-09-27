import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const navigate = useNavigate();

  // Customer ke custom query note ki state
  const [customerNote, setCustomerNote] = useState("");

  // Live API format ke mutabik dummy data (Ise aap baad me backend state ya context se replace kar lena)
  const [cartItems, setCartItems] = useState([
    {
      _id: "6aa95e53019a91838c3cf5e8",
      productName: "Clay Turtle",
      productPrice: 499,
      quantity: 2,
      color: "green",
      size: "10cm",
      imageUrl: "https://imagekit.io",
      storeName: "BalbeerAndSons",
      whatsappNumber: "919876543210", 
      instagramUsername: "balbeer_handicrafts"
    }
  ]);

  // Quantity control karne ka logic (+ / -)
  const handleQuantity = (id, type) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item._id === id) {
          const newQty = type === "plus" ? item.quantity + 1 : item.quantity - 1;
          return { ...item, quantity: newQty < 1 ? 1 : newQty };
        }
        return item;
      })
    );
  };

  // Item cart se delete karne ka logic
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item._id !== id));
  };

  // Total Items aur Total Amount calculate karne ka math
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subTotal = cartItems.reduce((acc, item) => acc + item.productPrice * item.quantity, 0);

  // Common Text Message Builder function jo WhatsApp aur Insta dono me use hoga
  const buildOrderMessage = (storeName) => {
    let message = `Hello *${storeName}*, Mujhe Creatorly se aapka product pasand aaya hai aur main order confirm karna chahta hu:\n\n`;
    
    cartItems.forEach((item, index) => {
      message += `*${index + 1}. ${item.productName}*\n`;
      message += `   Qty: ${item.quantity}x\n`;
      message += `   Specs: Color: ${item.color}, Size: ${item.size}\n`;
      message += `   Price: ₹${item.productPrice} x ${item.quantity} = ₹${item.productPrice * item.quantity}\n\n`;
    });

    message += `-------------------------\n`;
    message += `*Total Order Value:* ₹${subTotal}\n-------------------------\n`;
    
    // Agar user ne koi text note dala h toh message me inject hoga
    if (customerNote.trim()) {
      message += `📝 *My Custom Note/Query:* "${customerNote}"\n\n`;
    }

    message += `Pls share your UPI details for payment! ✨`;
    return message;
  };

  // 1. WhatsApp Checkout Trigger Action
  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;
    const currentStore = cartItems[0];
    const message = buildOrderMessage(currentStore.storeName);
    const whatsappUrl = `https://wa.me{currentStore.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  // 2. Instagram Redirection with Intelligent Clipboard Fallback
  const handleInstagramCheckout = () => {
    if (cartItems.length === 0) return;
    const currentStore = cartItems[0];
    
    // Insta DM me dynamic custom text send nahi ho sakta direct URL se, isliye dynamic copy script fallback h
    const rawMessage = buildOrderMessage(currentStore.storeName).replaceAll('*', ''); 
    navigator.clipboard.writeText(rawMessage);
    
    alert("📋 Aapka calculated bill aur text copy ho gaya hai! Instagram open hone par seedhe creator ke DM me paste kar dein.");
    
    const instagramUrl = `https://instagram.com{currentStore.instagramUsername}/`;
    window.open(instagramUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-creator-bg-butter font-sans text-creator-text antialiased selection:bg-creator-accent/20">
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        
        {/* Page Main Heading */}
        <h1 className="font-serif text-3xl font-black mb-8 tracking-tight text-creator-text">
          Aapki Shopping Cart 🛒
        </h1>

        {/* Conditional Layout: Empty state vs Active items */}
        {cartItems.length === 0 ? (
          <div className="text-center py-20 bg-creator-bg rounded-3xl border border-creator-text/5 max-w-xl mx-auto shadow-sm">
            <p className="font-serif text-xl text-creator-text/60 mb-6">Aapki cart khali hai.</p>
            <button 
              onClick={() => navigate("/")} 
              className="rounded-full bg-creator-primary px-8 py-3 text-sm font-semibold text-white shadow-md hover:bg-opacity-95 transition active:scale-95"
            >
              Explore Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-12">
            
            {/* LEFT SIDE PANEL (8 Columns on Desktop) - Item List & Large Custom Note */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Cart Items Mapping Container */}
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div 
                    key={item._id} 
                    className="flex flex-col sm:flex-row gap-4 rounded-2xl border border-creator-text/5 bg-creator-bg p-4 shadow-sm transition-all"
                  >
                    {/* Item Image */}
                    <div className="h-24 w-24 mx-auto sm:mx-0 shrink-0 overflow-hidden rounded-xl bg-creator-bg-butter border border-creator-text/5">
                      <img src={item.imageUrl} alt={item.productName} className="h-full w-full object-cover" />
                    </div>

                    {/* Metadata Content */}
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-serif font-bold text-base capitalize text-creator-text">{item.productName}</h3>
                            <p className="text-xs text-creator-accent font-medium">By {item.storeName}</p>
                          </div>
                          <span className="font-serif font-bold text-sm text-creator-text">₹{item.productPrice * item.quantity}</span>
                        </div>
                        
                        <div className="mt-1 flex gap-4 text-xs text-creator-text/50 font-medium">
                          <span className="capitalize">Color: {item.color}</span>
                          <span>Size: {item.size}</span>
                        </div>
                      </div>

                      {/* Controls Box (Stepper counter & Hatao trigger button) */}
                      <div className="flex justify-between items-center mt-4 border-t border-creator-text/5 pt-2 sm:pt-0 sm:border-0">
                        <div className="flex items-center rounded-lg border border-creator-text/10 bg-creator-bg-butter p-1">
                          <button 
                            onClick={() => handleQuantity(item._id, "minus")} 
                            className="h-6 w-6 font-bold hover:bg-creator-bg rounded flex items-center justify-center transition active:scale-95"
                          >
                            —
                          </button>
                          <span className="w-8 text-center font-serif text-sm font-bold text-creator-text">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => handleQuantity(item._id, "plus")} 
                            className="h-6 w-6 font-bold hover:bg-creator-bg rounded flex items-center justify-center transition active:scale-95"
                          >
                            +
                          </button>
                        </div>

                        <button 
                          onClick={() => removeItem(item._id)} 
                          className="text-xs font-semibold text-red-500 hover:text-red-600 transition flex items-center gap-1"
                        >
                          Hatao 🗑️
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* ✨ BADA CUSTOM NOTE / QUERY TEXTAREA BLOCK */}
              <div className="rounded-2xl border border-creator-text/5 bg-creator-bg p-5 sm:p-6 shadow-sm">
                <label htmlFor="customer-note" className="block font-serif font-black text-lg text-creator-text mb-1">
                  ✏️ Add Customization Note / Query
                </label>
                <p className="text-xs text-creator-text/50 mb-4 leading-relaxed">
                  Agar aapko koi custom design edit chahiye, ya product se judi koi query hai toh yahan khul kar likhein (e.g. "Mujhe name customization chahiye", "Kya blue tone available h?"). Yeh note calculated bill ke sath automatic creator ko send ho jayega.
                </p>
                <textarea
                  id="customer-note"
                  rows="4"
                  value={customerNote}
                  onChange={(e) => setCustomerNote(e.target.value)}
                  placeholder="Apna message ya customization specifications yahan type karein..."
                  className="w-full rounded-xl border border-creator-text/10 bg-creator-bg-butter p-4 text-sm focus:border-creator-accent focus:ring-1 focus:ring-creator-accent outline-none transition duration-150 resize-none font-medium text-creator-text"
                />
              </div>

            </div>

            {/* RIGHT SIDE PANEL (4 Columns on Desktop) - Final Pricing Invoice Grid & Dual CTAs */}
            <div className="lg:col-span-4">
              <div className="sticky top-20 space-y-6">
                {/* Final Pricing Invoice Box */}
                <div className="rounded-2xl border border-creator-text/5 bg-creator-bg p-6 shadow-sm">
                  <h2 className="font-serif font-black text-lg text-creator-text mb-4">Final Order Summary</h2>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-creator-text/70">
                      <span>Total Items:</span>
                      <span>{totalItems}</span>
                    </div>  
                    <div className="flex justify-between text-sm text-creator-text/70">
                      <span>Subtotal:</span>
                      <span>₹{subTotal}</span>
                    </div>
                    <div className="border-t border-creator-text/10 mt-2 pt-2 flex justify-between font-serif font-bold text-creator-text">
                      <span>Total Payable:</span>
                      <span>₹{subTotal}</span>
                    </div>
                  </div>
                </div>

                {/* Dual Checkout Buttons */}
                <div className="space-y-4">
                  <button
                    onClick={handleWhatsAppCheckout}
                    className="w-full rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-emerald-600 transition active:scale-95"
                  >   
                    WhatsApp Checkout
                  </button>
                  <button
                    onClick={handleInstagramCheckout}
                    className="w-full rounded-full border border-emerald-500 px-6 py-3 text-sm font-semibold text-emerald-500 hover:bg-emerald-50 transition active:scale-95"
                  > 
                    Instagram Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>   
  </div>
  );
}
