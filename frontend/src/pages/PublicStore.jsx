import React, { useEffect, useState } from "react";
import {
  Search,
  Home,
  Heart,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Share2,
  MessageCircle,
  MapPin,
  Package,
  Users,
  CalendarDays,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../components/API/API";

const PublicStore = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [cartCount, setCartCount] = useState(2);
  const [store, setStore] = useState(null);
  const [products, setProducts] = useState([]);

  const categories = [
    "All",
    "Clay",
    "Resin",
    "Wood",
    "Metal",
    "Fabric",
    "Crochet",
    "3D Printing",
    "Handmade",
    "Other",
  ];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category?.toLowerCase() === activeCategory.toLowerCase(),
        );

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  const { storeName } = useParams();
  const fetchStoreData = async () => {
    if (!storeName) return;

    try {
      const response = await API.get(`/api/shop/${storeName}`);
      console.log("Fetched store data:", response.data);
      setStore(response.data.store);
      setProducts(response.data.products || []);
    } catch (error) {
      console.error("Error fetching store data:", error);
    }
  };

  useEffect(() => {
    fetchStoreData();
  }, [storeName]); // Re-run if the store name changes in the URL

  return (
    <div className="min-h-screen overflow-x-hidden bg-creator-bg-butter text-creator-text mt-10">

      {/* ================= MAIN ================= */}

      <main className="mx-auto w-[calc(100%-28px)] max-w-6xl px-1 pb-20 sm:w-[calc(100%-56px)] lg:px-0">


        {/* ================= HERO ================= */}

        <section className="relative grid overflow-hidden rounded-[28px] bg-creator-bg shadow-[0_18px_55px_rgba(82,60,42,0.08)] lg:grid-cols-[0.86fr_1.14fr]">
          <div className="relative z-10 flex min-h-[330px] flex-col justify-center px-7 py-10 sm:px-12 lg:min-h-[430px] lg:px-14 gap-2">
            <span className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-creator-pink">
              <Sparkles size={14} /> {store?.category || "A little handmade magic"}
            </span>
            <h1 className="max-w-md font-caveat text-5xl font-normal leading-[0.9] text-creator-text sm:text-7xl">
              Made by hand,
              <span className="block text-creator-pink">made for you.</span>
            </h1>
            <p className="mt-5 max-w-sm text-sm leading-6 text-creator-text/60 sm:text-base">
              Discover thoughtful pieces from {store?.storeName || "a small creator"}, made slowly and shared with love.
            </p>
            <a href="#collection" className="group mt-7 flex w-fit items-center gap-2 px-5 py-3 text-xs font-semibold text-creator-text shadow-sm transition hover:-translate-y-1 border border-creator-text hover:bg-creator-accent">
              Explore the collection
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="relative min-h-[270px] overflow-hidden lg:min-h-[430px]">
          <img
            src={store?.bannerImage || "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1600"}
            alt="Store banner"
            className="h-full w-full object-cover transition duration-700 hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          <span className="absolute bottom-5 right-5 rounded-full bg-white/90 px-3 py-2 text-[10px] font-semibold text-creator-text shadow-sm">small batch · big heart</span>
          <button type="button" aria-label="Previous banner" className="absolute left-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 transition hover:bg-white">
            <ChevronLeft size={19} />
          </button>
          <button type="button" aria-label="Next banner" className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 transition hover:bg-white">
            <ChevronRight size={19} />
          </button>
          </div>
        </section>

        {/* ================= STORE PROFILE ================= */}

        <section className="relative flex flex-col gap-5 border-b border-creator-text/10 px-2 py-8 md:flex-row md:gap-7 md:py-10">
          {/* Logo */}

          <div className="mx-auto h-[115px] w-[115px] shrink-0 overflow-hidden rounded-full border-[6px] border-white bg-creator-accent shadow-sm sm:h-[135px] sm:w-[135px] md:mx-0 md:h-[145px] md:w-[145px]">
            <img
              src={store?.storeLogo || "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=300"}
              alt={store?.storeName}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Profile Content */}

          <div className="flex flex-1 flex-col justify-between gap-5 md:flex-row">
            <div className="text-center md:text-left">
              <h2 className="mt-1 flex items-center justify-center gap-1.5 font-serif text-3xl font-semibold text-creator-text md:justify-start">
                {store?.storeName || "Your creator store"}

                <CheckCircle2 size={18} fill="currentColor" />
              </h2>

              <p className="mb-2 mt-1 font-caveat text-xl text-creator-pink">Handcrafted with love ✨</p>

              <p className="max-w-[500px] text-sm leading-6 text-creator-text/60">
                {store?.bio || "Thoughtful handmade pieces for everyday joy."}
              </p>

              {/* Social */}

              <div className="mt-3 flex items-center justify-center gap-4 md:justify-start">
                <a
                  href={store?.instagramLink}
                  className="text-creator-primary transition hover:scale-110"
                >
                  {/* <Instagram size={19} /> */}
                </a>

                <a
                  href={store?.whatsappNumber}
                  className="text-creator-primary transition hover:scale-110"
                >
                  <MessageCircle size={19} />
                </a>

                <span className="flex items-center gap-1.5 text-xs text-creator-text/50">
                  <MapPin size={16} />
                  {store?.country || "India"}
                </span>
              </div>
            </div>

            {/* Right Side */}

            <div className="flex flex-col items-center md:items-end">
              <div className="flex gap-2">
                <button className="rounded-full bg-creator-text px-7 py-2.5 text-xs text-white transition hover:-translate-y-0.5 hover:bg-creator-primary">
                  Follow
                </button>

                <button aria-label="Share store" className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition hover:-translate-y-0.5 hover:shadow-sm">
                  <Share2 size={17} />
                </button>
              </div>

              {/* Stats */}

              <div className="mt-5 flex flex-wrap justify-center gap-3 text-[10px] text-creator-text/50 md:flex-col md:items-start md:gap-2.5">
                <div className="flex items-center gap-2">
                  <Package size={16} />
                  <span>10+ Products</span>
                </div>

                <div className="flex items-center gap-2">
                  <Users size={16} />
                  <span>100+ Happy Customers</span>
                </div>

                <div className="flex items-center gap-2">
                  <CalendarDays size={16} />
                  <span>Since 2024</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CATEGORIES ================= */}

        <div id="collection" className="flex items-end justify-between gap-4 pt-9">
          <div>
            <p className="font-caveat text-lg text-creator-pink">the little collection</p>
            <h2 className="mt-1 font-serif text-3xl font-semibold text-creator-text">Made with intention<span className="text-creator-pink">.</span></h2>
          </div>
          <span className="hidden text-xs text-creator-text/45 sm:block">{filteredProducts.length} pieces to discover</span>
        </div>

        <div className="flex gap-2 overflow-x-auto py-5 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-[11px] transition duration-200 hover:-translate-y-0.5 ${
                  activeCategory === category
                    ? "bg-creator-pink text-white shadow-sm"
                    : "bg-white/70 text-creator-text/60"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ================= PRODUCTS ================= */}

        <section className="pb-14 pt-1">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
            {filteredProducts.map((product) => (
              <article

                onClick={() => {
                  navigate(`/productDetails/${product._id}`)
                }}
                key={product._id}
                className="group overflow-hidden rounded-2xl border border-creator-text/10 bg-white/80 transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(44,50,47,0.10)]"
              >
                {/* Image */}

                <div className="relative aspect-[0.9] overflow-hidden bg-creator-bg">
                  <img
                    src={product?.productImage1?.url || "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=300"}
                    alt={product?.productName}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />

                  <button onClick={(event) => event.stopPropagation()} aria-label="Save product" className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-creator-pink transition hover:scale-110">
                    <Heart size={15} />
                  </button>
                </div>

                {/* Info */}

                <div className="p-3.5">
                  <span className="rounded-full bg-creator-accent/20 px-2 py-1 text-[9px] font-semibold uppercase tracking-wide text-creator-text/60">
                    {product.category}
                  </span>

                  <h3 className="mt-3 truncate font-serif text-base font-semibold text-creator-text md:text-lg">
                    {product.productName}
                  </h3>

                  <p className="mt-1 truncate text-[10px] text-creator-text/45">
                    {product.productDescription || "Handmade with care"}
                    <span className="mx-1">•</span>
                    {product.size || "one of a kind"}
                  </p>

                  {/* Price */}

                  <div className="mt-3 flex items-center justify-between">
                    <strong className="font-serif text-base text-creator-text md:text-lg">
                      ₹{Number(product.productPrice || 0).toLocaleString("en-IN")}
                    </strong>

                    <button
                      onClick={(event) => {
                        event.stopPropagation();
                        addToCart();
                      }}
                      aria-label="Add product to cart"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-creator-text text-white transition duration-200 hover:scale-110 active:scale-95"
                    >
                      <ShoppingCart size={15} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= ABOUT ================= */}

        <section id="about" className="mb-16 grid overflow-hidden rounded-[24px] border border-creator-text/10 bg-white/70 p-3 md:grid-cols-[1fr_1.2fr] md:gap-7">
          {/* Image */}

          <div className="relative min-h-[210px] overflow-hidden rounded-[18px]">
            <img
              src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1000"
              alt="About store"
              className="h-full min-h-[210px] w-full object-cover"
            />

            <div className="absolute bottom-5 left-5 rotate-[-5deg] font-caveat text-xl text-white">
              <span className="block">Crafting</span>
              <span className="block">Dreams</span>
              <span className="block">into Reality</span>
            </div>
          </div>

          {/* About */}

          <div className="px-2 py-5 md:py-4">
            <p className="font-caveat text-lg text-creator-pink">the story behind the work</p>
            <h2 className="mt-1 font-serif text-2xl font-semibold text-creator-text">
              About {store?.storeName || "this creator"}
            </h2>

            <p className="mt-2 max-w-[460px] text-sm leading-6 text-creator-text/55">
              {store?.bio || "A small handmade business passionate about creating unique and meaningful products. Every piece is made with love and care."}
            </p>

            {/* Features */}

            <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-4">
              <div className="flex items-center gap-2">
                <Heart size={19} />

                <span className="text-[9px] text-creator-text/70">
                  Handmade
                  <small className="block text-creator-text/40">with Love</small>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Package size={19} />

                <span className="text-[9px] text-creator-text/70">
                  Quality
                  <small className="block text-creator-text/40">Products</small>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={19} />

                <span className="text-[9px] text-creator-text/70">
                  Secure
                  <small className="block text-creator-text/40">Payments</small>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Users size={19} />

                <span className="text-[9px] text-creator-text/70">
                  Customer
                  <small className="block text-creator-text/40">Support</small>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FLOATING CART ================= */}

      <button aria-label="Open cart" className="fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-white bg-creator-text text-white shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition hover:scale-105">
        <ShoppingCart size={24} />

        <span className="absolute -right-1 -top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-creator-pink text-[9px] font-bold text-white">
          {cartCount}
        </span>
      </button>

      {/* ================= FOOTER ================= */}

      <footer className="rounded-t-[25%] bg-creator-text px-7 py-10 text-white md:rounded-t-[45%]">
        <div className="mx-auto flex max-w-[940px] flex-col items-center justify-between gap-7 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-serif text-2xl">
              Creatorly<span className="text-xs">✦</span>
            </h2>

            <p className="mt-1 text-[9px] text-white/55">
              Support Creators · Shop Handmade
            </p>
          </div>

          <div className="flex items-center gap-3">
            <p className="font-[cursive] text-[11px]">
              Follow us for more
              <br />
              amazing creators!
            </p>

            <ArrowRight size={30} />

            {/* <Instagram size={20} /> */}
            <MessageCircle size={20} />
          </div>

          <button type="button" onClick={() => navigate("/")} className="flex items-center gap-2 rounded-full border border-white/60 px-5 py-2.5 text-[10px] transition hover:bg-white hover:text-creator-text">
            <Home size={15} />
            Back to Home
          </button>
        </div>
      </footer>
    </div>
  );
};

export default PublicStore;
