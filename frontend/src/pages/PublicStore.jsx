import React, { useState } from "react";
import {
  Search,
  Home,
  Heart,
  ShoppingCart,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Share2,
  // Instagram,
  MessageCircle,
  MapPin,
  Package,
  Users,
  CalendarDays,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { useParams } from "react-router-dom";
// import axios from "axios";
import API from "../components/API/API";
import { useEffect } from "react";

const PublicStore = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [cartCount, setCartCount] = useState(2);
  const [store, setStore] = useState(null); // State to hold store data
  const [products, setProducts] = useState([]); // State to hold products data
  // const [store, setStore] = useState(null); // State to hold store data
  // console.log("Store data in PublicStore component:", store);

  // Temporary data
  // Later replace this with your API response
  // const store = {
  //   storeName: "BalbeerAndSons",
  //   bio: "We create unique, high-quality products that bring joy to your everyday life. Thank you for supporting small business!",
  //   profileImage:
  //     "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=300",
  //   storeLogo:
  //     "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=300",
  //   bannerImage:
  //     "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1600",
  //   instagramLink: "#",
  //   whatsappNumber: "#",
  // };

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

  // const products = [
  //   {
  //     id: 1,
  //     productName: "Clay Turtle",
  //     productPrice: 499,
  //     category: "Clay",
  //     size: "10cm",
  //     image:
  //       "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800",
  //   },
  //   {
  //     id: 2,
  //     productName: "Clay Cat",
  //     productPrice: 300,
  //     category: "Clay",
  //     size: "8cm",
  //     image:
  //       "https://images.unsplash.com/photo-1615800002234-05c4d488696c?w=800",
  //   },
  //   {
  //     id: 3,
  //     productName: "Flower Keychain",
  //     productPrice: 499,
  //     category: "Resin",
  //     size: "5cm",
  //     image:
  //       "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800",
  //   },
  //   {
  //     id: 4,
  //     productName: "Sunflower Frame",
  //     productPrice: 1299,
  //     category: "Wood",
  //     size: "20cm",
  //     image:
  //       "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800",
  //   },
  //   {
  //     id: 5,
  //     productName: "Crochet Bunny",
  //     productPrice: 799,
  //     category: "Crochet",
  //     size: "15cm",
  //     image:
  //       "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800",
  //   },
  //   {
  //     id: 6,
  //     productName: "Flower Pendant",
  //     productPrice: 699,
  //     category: "Resin",
  //     size: "4cm",
  //     image:
  //       "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800",
  //   },
  //   {
  //     id: 7,
  //     productName: "Wooden Pen Holder",
  //     productPrice: 899,
  //     category: "Wood",
  //     size: "10cm",
  //     image:
  //       "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800",
  //   },
  //   {
  //     id: 8,
  //     productName: "Leaf Earrings",
  //     productPrice: 399,
  //     category: "Metal",
  //     size: "3cm",
  //     image:
  //       "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800",
  //   },
  // ];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  const { storeName } = useParams();
  console.log("Store name from URL:", storeName);

  const fetchStoreData = async () => {
    
    if (!storeName) return;

    console.log("Fetching store data for storeName:", storeName);

    try {
      const response = await API.get(`/api/shop/${storeName}`);
      console.log("API response:", response.data);
      setStore(response.data.store);
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching store data:", error);
    }
  };

  // If using inside a React component, always wrap in useEffect
  useEffect(() => {
    fetchStoreData();
  }, [storeName]); // Re-run if the store name changes in the URL

  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#1d2925]">
      {/* ================= NAVBAR ================= */}

      <header className="sticky top-0 z-50 flex h-[72px] items-center justify-between bg-[#faf8f4] px-5 md:px-10">
        {/* Logo */}

        <div className="min-w-fit font-serif text-[27px] font-semibold text-[#203a33]">
          Creatorly
          <span className="align-top text-xs">✦</span>
        </div>

        {/* Search */}

        <div className="hidden h-10 w-[400px] items-center gap-2 rounded-full border border-[#e6e0d7] bg-[#fcfbf9] px-4 md:flex lg:w-[440px]">
          <Search size={17} className="text-gray-500" />

          <input
            type="text"
            placeholder="Search creators, products..."
            className="w-full bg-transparent text-xs outline-none placeholder:text-gray-400"
          />
        </div>

        {/* Actions */}

        <div className="flex items-center gap-3 md:gap-5">
          <button className="text-[#20312c] transition hover:scale-110">
            <Home size={20} />
          </button>

          <button className="hidden text-[#20312c] transition hover:scale-110 sm:block">
            <Heart size={20} />
          </button>

          <button className="relative text-[#20312c] transition hover:scale-110">
            <ShoppingCart size={20} />

            <span className="absolute -right-2 -top-2 flex h-[17px] w-[17px] items-center justify-center rounded-full bg-[#f04b32] text-[9px] font-bold text-white">
              {cartCount}
            </span>
          </button>

          <div className="hidden items-center gap-1 sm:flex">
            <img
             src={store?.profileImage || "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=300"}
              alt=""
              className="h-8 w-8 rounded-full object-cover"
            />

            <ChevronDown size={14} />
          </div>
        </div>
      </header>

      {/* ================= MAIN ================= */}

      <main className="mx-auto w-[calc(100%-24px)] max-w-[940px] md:w-[calc(100%-70px)]">
        {/* ================= HERO ================= */}

        <section className="relative h-[210px] overflow-hidden rounded-xl sm:h-[230px] md:h-[246px]">
          <img
            src={store?.bannerImage || "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1600"}
            alt="Store banner"
            className="h-full w-full object-cover transition duration-700 hover:scale-[1.02]"
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

          {/* Hero Text */}

          <div className="absolute left-8 top-1/2 -translate-y-1/2 text-white md:left-[70px]">
            <p className="font-[cursive] text-[30px] leading-none md:text-[39px]">
              Handmade
            </p>

            <h1 className="font-[cursive] text-[34px] leading-none md:text-[43px]">
              with Love <span>♡</span>
            </h1>

            <div className="mt-3 h-px w-24 bg-white" />
          </div>

          {/* Right Text */}

          <div className="absolute right-5 top-8 rotate-[-7deg] font-[cursive] text-sm text-white md:right-10 md:top-12">
            <span className="block">Small</span>
            <span className="block">Creations</span>
            <span className="-ml-3 block">Big Happiness ♡</span>
          </div>

          {/* Arrows */}

          <button className="absolute left-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 transition hover:bg-white">
            <ChevronLeft size={19} />
          </button>

          <button className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 transition hover:bg-white">
            <ChevronRight size={19} />
          </button>

          {/* Dots */}

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            <span className="h-1.5 w-2 rounded-full bg-white" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
          </div>
        </section>

        {/* ================= STORE PROFILE ================= */}

        <section className="flex flex-col gap-5 px-2 py-5 md:flex-row md:gap-7">
          {/* Logo */}

          <div className="mx-auto h-[125px] w-[125px] shrink-0 overflow-hidden rounded-full bg-[#f0ebe3] sm:h-[145px] sm:w-[145px] md:mx-0 md:h-[155px] md:w-[155px]">
            <img
              src={store?.storeLogo || "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=300"}
              alt={store?.storeName}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Profile Content */}

          <div className="flex flex-1 flex-col justify-between gap-5 md:flex-row">
            <div className="text-center md:text-left">
              <h2 className="mt-1 flex items-center justify-center gap-1.5 font-serif text-[27px] font-semibold text-[#263d36] md:justify-start">
                {store?.storeName}

                <CheckCircle2 size={18} fill="currentColor" />
              </h2>

              <p className="mb-2 mt-1 text-sm">Handcrafted with love ✨</p>

              <p className="max-w-[500px] text-xs leading-6 text-[#6d706e]">
                {store?.bio}
              </p>

              {/* Social */}

              <div className="mt-3 flex items-center justify-center gap-4 md:justify-start">
                <a
                  href={store?.instagramLink}
                  className="text-[#203c34] transition hover:scale-110"
                >
                  {/* <Instagram size={19} /> */}
                </a>

                <a
                  href={store?.whatsappNumber}
                  className="text-[#203c34] transition hover:scale-110"
                >
                  <MessageCircle size={19} />
                </a>

                <span className="flex items-center gap-1.5 text-xs text-gray-500">
                  <MapPin size={16} />
                  {store?.country || "India"}
                </span>
              </div>
            </div>

            {/* Right Side */}

            <div className="flex flex-col items-center md:items-end">
              <div className="flex gap-2">
                <button className="rounded-full bg-[#203d35] px-7 py-2.5 text-xs text-white transition hover:scale-105">
                  Follow
                </button>

                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f0ece6] transition hover:scale-105">
                  <Share2 size={17} />
                </button>
              </div>

              {/* Stats */}

              <div className="mt-5 flex flex-wrap justify-center gap-3 text-[10px] text-gray-500 md:flex-col md:items-start md:gap-2.5">
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

        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-full px-5 py-2.5 text-[11px] transition duration-200 hover:-translate-y-0.5 ${
                activeCategory === category
                  ? "bg-[#203d35] text-white"
                  : "bg-[#f0ece6] text-[#424641]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ================= PRODUCTS ================= */}

        <section className="pb-14 pt-1">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-[18px]">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="group overflow-hidden rounded-[10px] border border-[#eee9e2] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(44,50,47,0.08)]"
              >
                {/* Image */}

                <div className="relative h-[140px] overflow-hidden sm:h-[155px] md:h-[168px]">
                  <img
                    src={product?.productImage1?.url || "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=300"}
                    alt={product?.productName}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />

                  <button className="absolute right-2.5 top-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/85 text-[#c07b6a] transition hover:scale-110">
                    <Heart size={15} />
                  </button>
                </div>

                {/* Info */}

                <div className="p-2.5">
                  <span className="rounded bg-[#eeeae4] px-1.5 py-1 text-[9px] text-[#525753]">
                    {product.category}
                  </span>

                  <h3 className="mt-2 text-[13px] font-medium text-[#26332f] md:text-sm">
                    {product.productName}
                  </h3>

                  <p className="mt-1 text-[9px] text-[#858784]">
                    Handmade
                    <span className="mx-1">•</span>
                    {product.size}
                  </p>

                  {/* Price */}

                  <div className="mt-3 flex items-center justify-between">
                    <strong className="text-sm text-[#263b34] md:text-[15px]">
                      ₹{product.productPrice.toLocaleString("en-IN")}
                    </strong>

                    <button
                      onClick={addToCart}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-[#203d35] text-white transition duration-200 hover:scale-110 active:scale-95"
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

        <section className="mb-16 grid overflow-hidden rounded-xl border border-[#eee9e2] bg-white p-3 md:grid-cols-[1fr_1.2fr] md:gap-7">
          {/* Image */}

          <div className="relative min-h-[210px] overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1000"
              alt="About store"
              className="h-full min-h-[210px] w-full object-cover"
            />

            <div className="absolute bottom-5 left-5 rotate-[-5deg] font-[cursive] text-white">
              <span className="block">Crafting</span>
              <span className="block">Dreams</span>
              <span className="block">into Reality</span>
            </div>
          </div>

          {/* About */}

          <div className="px-2 py-5 md:py-4">
            <h2 className="font-serif text-2xl font-semibold text-[#263d36]">
              About {store?.storeName}
            </h2>

            <p className="mt-2 max-w-[460px] text-[11px] leading-6 text-[#70736f]">
              We are a small handmade business passionate about creating unique
              and meaningful products. From clay art to custom gifts, every
              piece is made with love and care.
            </p>

            {/* Features */}

            <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-4">
              <div className="flex items-center gap-2">
                <Heart size={19} />

                <span className="text-[9px]">
                  Handmade
                  <small className="block text-gray-500">with Love</small>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Package size={19} />

                <span className="text-[9px]">
                  Quality
                  <small className="block text-gray-500">Products</small>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={19} />

                <span className="text-[9px]">
                  Secure
                  <small className="block text-gray-500">Payments</small>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Users size={19} />

                <span className="text-[9px]">
                  Customer
                  <small className="block text-gray-500">Support</small>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FLOATING CART ================= */}

      <button className="fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-white bg-white text-[#203d35] shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition hover:scale-105">
        <ShoppingCart size={24} />

        <span className="absolute -right-1 -top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#f04b32] text-[9px] font-bold text-white">
          {cartCount}
        </span>
      </button>

      {/* ================= FOOTER ================= */}

      <footer className="rounded-t-[25%] bg-[#1e3a33] px-7 py-10 text-white md:rounded-t-[45%]">
        <div className="mx-auto flex max-w-[940px] flex-col items-center justify-between gap-7 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-serif text-2xl">
              Creatorly<span className="text-xs">✦</span>
            </h2>

            <p className="mt-1 text-[9px] text-[#bdc9c4]">
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

          <button className="flex items-center gap-2 rounded-full border border-white/60 px-5 py-2.5 text-[10px] transition hover:bg-white hover:text-[#1e3a33]">
            <Home size={15} />
            Back to Home
          </button>
        </div>
      </footer>
    </div>
  );
};

export default PublicStore;
