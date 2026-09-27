import React, { useEffect, useState } from "react";
import API from "../components/API/API";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  // UI States
  const [product, setProduct] = useState(null);
  const [store, setStore] = useState(null);
  const [activeImage, setActiveImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  // URL parameters se 'id' extract kar rahe hain
  const { id } = useParams(); 
  console.log("React Router Product ID:", id);

    // API se data fetch karne ke liye fixed useEffect
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setFetching(true);
        
        // Aapke route parameter ID se live data fetch ho raha hai
        const response = await API.get(`/api/products/${id}`);
        const data = response.data;
        
        console.log("Fetched live data from API:", data);

        // FIX: Kyunki single product response ek Direct Object hai { product: { ... } }
        if (data && data.product) {
          const currentProduct = data.product; 
          
          // Agar aapki API product ke andar hi store details bhej rahi hai toh hum use nikal rahe hain
          // Agar backend alag se 'store' data bhej raha hai toh data.store parse hoga
          setStore({
            storeName: currentProduct.storeName || data.store?.storeName || "BalbeerAndSons"
          });

          // Live JSON schema ke product images fields se array extract karna
          const extractedImages = [];
          if (currentProduct.productImage1?.url) extractedImages.push(currentProduct.productImage1.url);
          if (currentProduct.productImage2?.url) extractedImages.push(currentProduct.productImage2.url);
          if (currentProduct.productImage3?.url) extractedImages.push(currentProduct.productImage3.url);
          if (currentProduct.productImage4?.url) extractedImages.push(currentProduct.productImage4.url);

          // Component runtime ke liye array inject karna
          currentProduct.extractedImages = extractedImages;
          
          setProduct(currentProduct);

          // Default focal showcase picture update karna
          if (extractedImages.length > 0) {
            setActiveImage(extractedImages[0]);
          }
        } else {
          console.warn("Payload structure mismatch! 'data.product' key nahi mili.");
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setFetching(false);
      }
    };

    if (id) {
      fetchProductData();
    }
  }, [id]);

  const handleQuantity = (type) => {
    if (!product) return;
    if (type === "minus" && quantity > 1) setQuantity(quantity - 1);
    if (type === "plus" && quantity < product.stocks) setQuantity(quantity + 1);
  };

  const addToCart = () => {
    if (!product) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`${quantity} x ${product.productName} card me successfully add ho gya h!`);
    }, 800);
  };

  // Loading Skeleton screen state
  if (fetching) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-creator-bg-butter">
        <div className="text-center font-serif text-lg animate-pulse text-creator-text/60">
          Loading creation details...
        </div>
      </div>
    );
  }

  // Error boundary check layout
  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-creator-bg-butter">
        <div className="text-center font-serif text-lg text-creator-text/60">
          Details not found. Check your API payload keys.
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-creator-bg-butter font-sans text-creator-text antialiased selection:bg-creator-accent/20">
      
      {/* 1. Creatorly Navbar Header */}
      {/* <header className="sticky top-0 z-50 border-b border-creator-text/5 bg-creator-bg-butter/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <span className="font-serif text-2xl font-bold tracking-tight text-creator-text">
              Creatorly.
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#discover" className="text-creator-text/80 hover:text-creator-primary transition">Discover</a>
            <a href="#creators" className="text-creator-text/80 hover:text-creator-primary transition">Creators</a>
            <a href="#about" className="text-creator-text/80 hover:text-creator-primary transition">About</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="rounded-full border border-creator-text/10 p-2 hover:bg-creator-bg transition">
              🛒
            </button>
            <button className="rounded-full bg-creator-text px-5 py-2 text-xs font-semibold text-white hover:bg-creator-primary transition">
              Login
            </button>
          </div>
        </div>
      </header> */}

      {/* 2. Main Product Details Layout */}
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        
        {/* Breadcrumb links */}
        <div className="mb-8 flex items-center space-x-2 text-xs uppercase tracking-wider text-creator-text/50">
          <a href="#home" className="hover:text-creator-accent">Home</a>
          <span>/</span>
          <a href="#category" className="hover:text-creator-accent">{product.category}</a>
          <span>/</span>
          <span className="text-creator-text font-semibold">{product.productName}</span>
        </div>

        {/* 2-Column Grid Area */}
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-12">
          
          {/* LEFT: Image Gallery Block */}
          <div className="lg:col-span-7 flex flex-col-reverse gap-4 sm:flex-row">
            
            {/* Vertical/Horizontal Thumbnails stack */}
            <div className="flex flex-row gap-3 overflow-x-auto sm:flex-col sm:overflow-visible sm:w-20 shrink-0">
              {product.extractedImages?.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(img)}
                  className={`aspect-square w-16 overflow-hidden rounded-xl border bg-creator-bg p-1 transition-all ${
                    activeImage === img
                      ? "border-creator-accent ring-2 ring-creator-accent/20 scale-95"
                      : "border-creator-text/10 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt={`thumbnail-${index}`} className="h-full w-full object-cover rounded-lg" />
                </button>
              ))}
            </div>

            {/* Main Showcase Image */}
            <div className="relative flex-1 aspect-square w-full rounded-2xl border border-creator-text/5 bg-creator-bg p-4 shadow-sm">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#ebdcb9]/80 px-4 py-1 text-[10px] font-semibold uppercase tracking-widest text-creator-text/60 shadow-sm border border-dashed border-creator-text/10 rotate-[-1deg]">
                ✨ Original Craft
              </div>
              
              {activeImage && (
                <img
                  src={activeImage}
                  alt={product.productName}
                  className="h-full w-full object-cover rounded-xl transition-all duration-300 hover:scale-[1.02]"
                />
              )}
            </div>
          </div>

          {/* RIGHT: Meta Details and Checkout */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Seller / Store Branding Card */}
              {store && (
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-creator-text/10 bg-creator-bg px-3 py-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs font-medium text-creator-text/70">
                    By <span className="font-semibold text-creator-text">{store.storeName}</span>
                  </span>
                </div>
              )}

              {/* Product Headings */}
              <h1 className="font-serif text-3xl font-bold tracking-tight text-creator-text sm:text-4xl capitalize mb-2">
                {product.productName}
              </h1>
              
              <p className="font-caveat text-xl text-creator-accent mb-4">
                Handcrafted with love and care
              </p>

              {/* Pricing section */}
              <div className="my-5 flex items-baseline space-x-3 border-b border-creator-text/5 pb-5">
                <span className="font-serif text-3xl font-bold text-creator-text">
                  ₹{product.productPrice}.00
                </span>
                <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100">
                  Available (Stocks: {product.stocks})
                </span>
              </div>

              {/* Description Copy */}
              <div className="text-sm leading-relaxed text-creator-text/80 space-y-2">
                <p>{product.productDescription}</p>
              </div>

              {/* Custom specs Grid */}
              <div className="my-6 grid grid-cols-2 gap-4 rounded-xl border border-creator-text/5 bg-creator-bg p-4 text-xs font-medium">
                <div className="flex flex-col gap-0.5 border-r border-creator-text/5">
                  <span className="text-creator-text/40 uppercase">Color Tone</span>
                  <span className="text-creator-text text-sm capitalize">{product.color}</span>
                </div>
                <div className="flex flex-col gap-0.5 pl-2">
                  <span className="text-creator-text/40 uppercase">Size / Dimension</span>
                  <span className="text-creator-text text-sm">{product.size}</span>
                </div>
                {product.customization && (
                  <div className="flex flex-col gap-0.5 pl-2">
                    <span className="text-creator-text/40 uppercase">Customization</span>
                    <span className="text-creator-text text-sm">{product.customization}</span>
                  </div>
                )}
              </div>

              {/* Actions & Checkout section */}
              <div className="my-6">
                <p className="text-sm text-creator-text/80 mb-2">Select Quantity</p>
                {/* Stepper Widget */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleQuantity("minus")}
                    className="flex h-7 w-7 items-center justify-center rounded hover:bg-creator-bg-butter font-bold transition"
                  >
                    —
                  </button>
                  <span className="text-lg font-semibold">{quantity}</span>
                  <button
                    onClick={() => handleQuantity("plus")}
                    className="flex h-7 w-7 items-center justify-center rounded hover:bg-creator-bg-butter font-bold transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Primary Call To Actions */}
              <div className="flex flex-col gap-3">
                {loading ? (
                  <button disabled className="bg-emerald-500 text-white py-3 px-4 rounded-md font-semibold cursor-not-allowed">
                    Adding to Cart...
                  </button>
                ) : (
                  <button
                    // onClick={handleAddToCart}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-4 rounded-md font-semibold transition"
                  >
                    Add to Cart
                  </button>
                )}
                <button
                  // onClick={handleSaveToWishlist}
                  className="border border-emerald-500 text-emerald-500 hover:bg-emerald-50 py-3 px-4 rounded-md font-semibold transition"
                >
                  🤍 Save to Wishlist
                </button>
              </div>

              {/* Footer Badge */}
              {store && (
                <div className="mt-auto pt-4 border-t border-gray/10">
                  🌱 {store.storeName} की हर ख़रीद सीधे लोकल कारीगरों को सपोर्ट करती है।
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}