import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  Heart,
  Search,
  Sparkles,
  ShoppingBag,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Explore = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: "demo-1",
      name: "Handmade Clay Frame",
      category: "Clay",
      price: 899,
      creator: "MystriiSpot",
      username: "mystriispot",
      image: "/src/assets/creator1.png",
      description: "A handmade clay piece created with care.",
      customizable: true,
    },
    {
      id: "demo-2",
      name: "Mini Crochet Bouquet",
      category: "Crochet",
      price: 649,
      creator: "ThreadAndTales",
      username: "threadandtales",
      image: "/src/assets/creator3.png",
      description: "A tiny handmade bouquet that never fades.",
      customizable: false,
    },
    {
      id: "demo-3",
      name: "Clay Trinket Tray",
      category: "Clay",
      price: 499,
      creator: "TheClayCorner",
      username: "theclaycorner",
      image: "/src/assets/creator2.png",
      description: "Small handmade tray for your everyday essentials.",
      customizable: true,
    },
    {
      id: "demo-4",
      name: "Wooden Name Plate",
      category: "Wood",
      price: 799,
      creator: "WoodenWhimsy",
      username: "woodenwhimsy",
      image: "/src/assets/creator4.png",
      description: "Personalised wooden decor made for your space.",
      customizable: true,
    },
  ];

  const categories = ["All", "Clay", "Crochet", "Wood"];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [favorites, setFavorites] = useState([]);

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        product.name.toLowerCase().includes(searchText) ||
        product.creator.toLowerCase().includes(searchText) ||
        product.category.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });

    if (sort === "low") {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [search, category, sort]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <main className="min-h-screen bg-[#faf7f0] text-neutral-900">

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative overflow-hidden px-5 pb-14 pt-20 sm:px-8 lg:px-16 lg:pb-20">

        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-orange-200/30 blur-3xl" />

        <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-yellow-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-3xl">

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-medium text-neutral-600 shadow-sm">
                <Sparkles size={14} />
                A glimpse of Creatorly
              </div>

              <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                Explore what
                <span className="block font-serif italic font-normal text-neutral-600">
                  creators make.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
                Browse a small preview of how products can look inside a
                Creatorly store — from handmade art to personalised pieces.
              </p>

            </div>


            {/* Demo badge */}

            <div className="shrink-0 rounded-2xl border border-orange-200 bg-orange-50 px-5 py-4">

              <div className="flex items-center gap-2 text-sm font-semibold text-orange-900">
                <Sparkles size={16} />
                Demo content
              </div>

              <p className="mt-1 max-w-xs text-xs leading-5 text-orange-800/70">
                These products are only here to show the Creatorly
                experience.
              </p>

            </div>

          </div>


          {/* Search */}

          <div className="mt-10 flex flex-col gap-3 lg:flex-row">

            <div className="flex flex-1 items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3.5 shadow-sm transition-all duration-300 focus-within:border-neutral-400 focus-within:shadow-lg">

              <Search
                size={19}
                className="shrink-0 text-neutral-400"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products or creators..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-400"
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="rounded-full p-1 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-900"
                >
                  <X size={16} />
                </button>
              )}

            </div>


            <div className="relative">

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="h-full w-full appearance-none rounded-2xl border border-neutral-200 bg-white px-5 py-3.5 pr-10 text-sm outline-none transition hover:border-neutral-400 lg:w-52"
              >
                <option value="featured">Featured</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
              </select>

            </div>

          </div>

        </div>
      </section>


      {/* ================================================= */}
      {/* DEMO STORE PREVIEW */}
      {/* ================================================= */}

      <section className="px-5 pb-16 sm:px-8 lg:px-16">

        <div className="mx-auto max-w-6xl">

          <div className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm">

            {/* Store Header */}

            <div className="relative overflow-hidden bg-neutral-900 px-7 py-10 text-white sm:px-10 lg:px-14">

              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-orange-300/10 blur-3xl" />

              <div className="relative flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">

                <div>

                  <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium">
                    DEMO STORE
                  </span>

                  <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                    MystriiSpot
                  </h2>

                  <p className="mt-2 max-w-lg text-sm leading-6 text-neutral-300">
                    Handmade with a little magic ✨
                  </p>

                </div>


                <button
                  onClick={() => navigate("/mystriispot")}
                  className="group inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  View demo store
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

              </div>

            </div>


            {/* Product Grid */}

            <div className="grid gap-px bg-neutral-200 sm:grid-cols-2 lg:grid-cols-4">

              {products.map((product) => (

                <div
                  key={product.id}
                  className="group bg-white p-4 transition-all duration-300 hover:bg-[#fffdf8]"
                >

                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-100">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur transition-all duration-300 hover:scale-110 active:scale-95"
                    >
                      <Heart
                        size={17}
                        className={
                          favorites.includes(product.id)
                            ? "fill-current text-red-500"
                            : "text-neutral-700"
                        }
                      />
                    </button>

                  </div>


                  <div className="px-1 pb-2 pt-5">

                    <div className="flex items-start justify-between gap-3">

                      <div>

                        <p className="text-xs font-medium uppercase tracking-wide text-neutral-400">
                          {product.category}
                        </p>

                        <h3 className="mt-1 text-base font-semibold">
                          {product.name}
                        </h3>

                      </div>

                      <p className="shrink-0 text-sm font-semibold">
                        ₹{product.price}
                      </p>

                    </div>


                    <p className="mt-2 line-clamp-2 text-xs leading-5 text-neutral-500">
                      {product.description}
                    </p>


                    <div className="mt-4 flex items-center justify-between">

                      <span className="text-xs text-neutral-500">
                        by {product.creator}
                      </span>

                      {product.customizable && (
                        <span className="rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-medium text-green-700">
                          Customizable
                        </span>
                      )}

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* PRODUCT DISCOVERY */}
      {/* ================================================= */}

      <section className="px-5 pb-24 sm:px-8 lg:px-16">

        <div className="mx-auto max-w-6xl">

          <div className="flex flex-col gap-5 border-b border-neutral-200 pb-6 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                Browse the preview
              </p>

              <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                Made by creators.
              </h2>

            </div>

            <p className="max-w-md text-sm leading-6 text-neutral-500">
              This section demonstrates how Creatorly can help customers
              discover products and then visit the creator's own store.
            </p>

          </div>


          {/* Categories */}

          <div className="mt-7 flex items-center gap-2 overflow-x-auto pb-2">

            <SlidersHorizontal
              size={17}
              className="mr-1 shrink-0 text-neutral-400"
            />

            {categories.map((item) => (

              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                  category === item
                    ? "bg-neutral-900 text-white shadow-md"
                    : "border border-neutral-200 bg-white text-neutral-600 hover:-translate-y-0.5 hover:shadow-sm"
                }`}
              >
                {item}
              </button>

            ))}

          </div>


          {/* Product Cards */}

          {filteredProducts.length > 0 ? (

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

              {filteredProducts.map((product, index) => (

                <article
                  key={product.id}
                  className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                  style={{
                    transitionDelay: `${index * 60}ms`,
                  }}
                >

                  <div className="relative aspect-square overflow-hidden bg-neutral-100">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur transition-all duration-300 hover:scale-110 active:scale-95"
                    >
                      <Heart
                        size={17}
                        className={
                          favorites.includes(product.id)
                            ? "fill-current text-red-500"
                            : "text-neutral-700"
                        }
                      />
                    </button>

                  </div>


                  <div className="p-5">

                    <p className="text-xs font-medium uppercase tracking-wide text-neutral-400">
                      {product.category}
                    </p>

                    <div className="mt-1 flex items-start justify-between gap-3">

                      <h3 className="font-semibold">
                        {product.name}
                      </h3>

                      <span className="shrink-0 text-sm font-semibold">
                        ₹{product.price}
                      </span>

                    </div>


                    <p className="mt-2 text-xs leading-5 text-neutral-500">
                      {product.description}
                    </p>


                    <div className="mt-4 flex items-center gap-2">

                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-100 text-[10px] font-semibold">
                        {product.creator.charAt(0)}
                      </div>

                      <span className="text-xs text-neutral-500">
                        {product.creator}
                      </span>

                    </div>


                    <button
                      onClick={() => navigate(`/${product.username}`)}
                      className="group/btn mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 px-4 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-neutral-800 active:scale-[0.98]"
                    >
                      Visit creator store

                      <ArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover/btn:translate-x-1"
                      />
                    </button>

                  </div>

                </article>

              ))}

            </div>

          ) : (

            <div className="mt-10 rounded-3xl border border-dashed border-neutral-300 bg-white px-6 py-20 text-center">

              <ShoppingBag
                size={25}
                className="mx-auto text-neutral-400"
              />

              <h3 className="mt-4 text-lg font-semibold">
                Nothing found
              </h3>

              <p className="mt-2 text-sm text-neutral-500">
                Try another search or category.
              </p>

            </div>

          )}

        </div>

      </section>


      {/* ================================================= */}
      {/* FINAL CTA */}
      {/* ================================================= */}

      <section className="border-t border-neutral-200 bg-white px-5 py-20 sm:px-8 lg:px-16">

        <div className="mx-auto max-w-4xl text-center">

          <Sparkles
            size={24}
            className="mx-auto text-neutral-500"
          />

          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Your store could look like this.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-neutral-500 sm:text-base">
            Create your own Creatorly space, add your products and share
            one simple link with your audience.
          </p>

          <button
            onClick={() => navigate("/auth")}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95"
          >
            Create your store
            <ArrowRight size={17} />
          </button>

        </div>

      </section>

    </main>
  );
};

export default Explore;