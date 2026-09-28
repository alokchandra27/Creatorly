import React, { useEffect, useMemo, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Heart,
  ArrowRight,
  X,
  MapPin,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import API from "../components/API/API";

const Explore = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // =========================================================
  // STATE
  // =========================================================

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState(searchParams.get("search") || "");

  const [selectedCraft, setSelectedCraft] = useState(
    searchParams.get("craft") || "all",
  );

  const [sortBy, setSortBy] = useState("latest");

  const [showFilters, setShowFilters] = useState(false);

  const [favorites, setFavorites] = useState([]);

  // =========================================================
  // CRAFTS
  // =========================================================

  const crafts = [
    {
      name: "Clay",
      icon: "🏺",
      bg: "bg-orange-100",
      text: "text-orange-700",
    },
    {
      name: "Crochet",
      icon: "🧶",
      bg: "bg-green-100",
      text: "text-green-700",
    },
    {
      name: "Resin",
      icon: "✨",
      bg: "bg-yellow-100",
      text: "text-yellow-700",
    },
    {
      name: "Wood",
      icon: "🪵",
      bg: "bg-purple-100",
      text: "text-purple-700",
    },
    {
      name: "Metal",
      icon: "⛓️",
      bg: "bg-slate-100",
      text: "text-slate-700",
    },
    {
      name: "Fabric",
      icon: "🧵",
      bg: "bg-amber-100",
      text: "text-amber-700",
    },
    {
      name: "Petal",
      icon: "🌸",
      bg: "bg-pink-100",
      text: "text-pink-700",
    },
    {
      name: "Other",
      icon: "✦",
      bg: "bg-emerald-100",
      text: "text-emerald-700",
    },
  ];

  // =========================================================
  // FETCH PRODUCTS
  // =========================================================

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const response = await API.get("/api/products");

        /*
          Your backend may return either:

          {
            products: [...]
          }

          OR

          [...]
        */

        const data = response.data;

        if (Array.isArray(data)) {
          setProducts(data);
        } else if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.log("Explore products error:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // =========================================================
  // UPDATE URL
  // =========================================================

  useEffect(() => {
    const params = {};

    if (search.trim()) {
      params.search = search.trim();
    }

    if (selectedCraft !== "all") {
      params.craft = selectedCraft;
    }

    setSearchParams(params, { replace: true });
  }, [search, selectedCraft, setSearchParams]);

  // =========================================================
  // FILTER + SEARCH + SORT
  // =========================================================

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // -------------------------------------------------------
    // SEARCH
    // -------------------------------------------------------

    if (search.trim()) {
      const query = search.toLowerCase().trim();

      result = result.filter((product) => {
        const productName = product.productName?.toLowerCase() || "";

        const description = product.productDescription?.toLowerCase() || "";

        const category = product.category?.toLowerCase() || "";

        const creator = product.sellerUsername?.toLowerCase() || "";

        const store = product.storeName?.toLowerCase() || "";

        return (
          productName.includes(query) ||
          description.includes(query) ||
          category.includes(query) ||
          creator.includes(query) ||
          store.includes(query)
        );
      });
    }

    // -------------------------------------------------------
    // CRAFT
    // -------------------------------------------------------

    if (selectedCraft !== "all") {
      result = result.filter(
        (product) =>
          product.category?.toLowerCase() === selectedCraft.toLowerCase(),
      );
    }

    // -------------------------------------------------------
    // SORT
    // -------------------------------------------------------

    if (sortBy === "price-low") {
      result.sort(
        (a, b) => Number(a.productPrice || 0) - Number(b.productPrice || 0),
      );
    }

    if (sortBy === "price-high") {
      result.sort(
        (a, b) => Number(b.productPrice || 0) - Number(a.productPrice || 0),
      );
    }

    if (sortBy === "latest") {
      result.sort(
        (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0),
      );
    }

    return result;
  }, [products, search, selectedCraft, sortBy]);

  // =========================================================
  // FAVORITE
  // =========================================================

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }

      return [...prev, id];
    });
  };

  // =========================================================
  // CLEAR FILTERS
  // =========================================================

  const clearFilters = () => {
    setSearch("");
    setSelectedCraft("all");
    setSortBy("latest");
  };

  // =========================================================
  // PRODUCT CARD
  // =========================================================

  const ProductCard = ({ product }) => {
    const isFavorite = favorites.includes(product._id);

    const image = product.productImage1?.url || "/src/assets/crochet.jpg";

    const isOutOfStock =
      product.stocks !== undefined &&
      product.stocks !== null &&
      Number(product.stocks) <= 0;

    return (
      <article
        className="
          group
          overflow-hidden
          rounded-2xl
          border
          border-neutral-100
          bg-white
          shadow-sm
          transition-all
          duration-500
          hover:-translate-y-1
          hover:shadow-xl
        "
      >
        {/* IMAGE */}

        <div
          className="
            relative
            aspect-square
            cursor-pointer
            overflow-hidden
            bg-neutral-100
          "
          onClick={() => navigate(`/product/${product._id}`)}
        >
          <img
            src={image}
            alt={product.productName}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />

          {/* FAVORITE */}

          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(product._id);
            }}
            className="
              absolute
              right-3
              top-3
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-white/90
              shadow-sm
              backdrop-blur
              transition-all
              hover:scale-110
            "
          >
            <Heart
              size={17}
              className={
                isFavorite ? "fill-rose-500 text-rose-500" : "text-neutral-500"
              }
            />
          </button>

          {/* CUSTOMIZATION */}

          {product.customization && (
            <div
              className="
                absolute
                bottom-3
                left-3
                rounded-full
                bg-white/90
                px-3
                py-1.5
                text-[10px]
                font-medium
                text-neutral-700
                shadow-sm
                backdrop-blur
              "
            >
              Customizable
            </div>
          )}

          {/* OUT OF STOCK */}

          {isOutOfStock && (
            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                bg-black/30
              "
            >
              <span
                className="
                  rounded-full
                  bg-white
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  text-neutral-700
                "
              >
                Out of stock
              </span>
            </div>
          )}
        </div>

        {/* CONTENT */}

        <div className="p-4 sm:p-5">
          {/* CATEGORY */}

          <p
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.15em]
              text-creator-pink
            "
          >
            {product.category || "Handmade"}
          </p>

          {/* NAME */}

          <h3
            onClick={() => navigate(`/product/${product._id}`)}
            className="
              mt-1
              cursor-pointer
              truncate
              font-playfair
              text-lg
              font-semibold
              text-neutral-800
              transition-colors
              hover:text-creator-pink
            "
          >
            {product.productName}
          </h3>

          {/* PRICE */}

          <p className="mt-2 text-base font-semibold text-neutral-800">
            ₹{product.productPrice}
          </p>

          {/* CREATOR */}

          <button
            onClick={() => navigate(`/${product.sellerUsername}`)}
            className="
              mt-3
              flex
              max-w-full
              items-center
              gap-1
              truncate
              text-xs
              text-neutral-500
              transition-colors
              hover:text-creator-pink
            "
          >
            <span className="truncate">
              by {product.storeName || product.sellerUsername}
            </span>

            <ArrowRight size={12} className="shrink-0" />
          </button>
        </div>
      </article>
    );
  };

  // =========================================================
  // LOADING CARD
  // =========================================================

  const SkeletonCard = () => {
    return (
      <div
        className="
          overflow-hidden
          rounded-2xl
          border
          border-neutral-100
          bg-white
        "
      >
        <div className="aspect-square animate-pulse bg-neutral-200" />

        <div className="space-y-3 p-5">
          <div className="h-2.5 w-16 animate-pulse rounded bg-neutral-200" />

          <div className="h-5 w-3/4 animate-pulse rounded bg-neutral-200" />

          <div className="h-4 w-20 animate-pulse rounded bg-neutral-200" />

          <div className="h-3 w-1/2 animate-pulse rounded bg-neutral-200" />
        </div>
      </div>
    );
  };

  // =========================================================
  // EMPTY STATE
  // =========================================================

  const EmptyState = () => {
    return (
      <div
        className="
          col-span-full
          flex
          flex-col
          items-center
          justify-center
          rounded-3xl
          border
          border-dashed
          border-neutral-200
          bg-white
          px-6
          py-20
          text-center
        "
      >
        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-pink-100
            text-creator-pink
          "
        >
          <Sparkles size={26} />
        </div>

        <h3 className="mt-5 font-playfair text-2xl font-semibold">
          Nothing found yet
        </h3>

        <p className="mt-2 max-w-sm text-sm leading-6 text-neutral-500">
          Try another search or explore a different craft. There might be
          something handmade waiting for you.
        </p>

        <button
          onClick={clearFilters}
          className="
            mt-6
            rounded-full
            bg-creator-pink
            px-5
            py-2.5
            text-sm
            font-medium
            text-white
            transition-all
            hover:bg-creator-accent
          "
        >
          Clear filters
        </button>
      </div>
    );
  };

  // =========================================================
  // RETURN
  // =========================================================

  return (
    <main
      className="
        min-h-screen
        w-full
        overflow-x-hidden
        bg-creator-bg
        text-creator-text
      "
    >
      {/* =====================================================
          EXPLORE HERO
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#FAF7F2]
          px-6
          pb-14
          pt-16
          sm:px-10
          sm:pt-20
          md:pb-20
          lg:px-16
        "
      >
        {/* Decorative circle */}

        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-64
            w-64
            rounded-full
            bg-pink-100/50
            blur-2xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -left-20
            bottom-0
            h-48
            w-48
            rounded-full
            bg-yellow-100/40
            blur-2xl
          "
        />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="font-caveat text-lg text-creator-pink sm:text-xl">
            Find something made with heart ✦
          </p>

          <h1
            className="
              mt-2
              font-playfair
              text-4xl
              font-bold
              leading-tight
              text-neutral-800
              sm:text-5xl
              md:text-6xl
            "
          >
            Discover something
            <br />
            <span className="text-creator-pink">handmade.</span>
          </h1>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-sm
              leading-6
              text-neutral-500
              sm:text-base
            "
          >
            Explore unique products from independent creators, artists and small
            businesses.
          </p>

          {/* SEARCH */}

          <div
            className="
              mx-auto
              mt-8
              flex
              max-w-2xl
              items-center
              rounded-full
              border
              border-neutral-200
              bg-white
              p-1.5
              shadow-sm
              transition-all
              focus-within:border-creator-pink
              focus-within:shadow-md
            "
          >
            <Search size={20} className="ml-4 shrink-0 text-neutral-400" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products, creators, crafts..."
              className="
                min-w-0
                flex-1
                bg-transparent
                px-3
                py-3
                text-sm
                text-neutral-800
                outline-none
                placeholder:text-neutral-400
              "
            />

            {search && (
              <button
                onClick={() => setSearch("")}
                className="
                  mr-1
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  text-neutral-400
                  hover:bg-neutral-100
                  hover:text-neutral-700
                "
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          CRAFT FILTERS
      ===================================================== */}

      <section className="w-full bg-white px-6 py-10 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="font-caveat text-base text-creator-pink">
                Explore your kind of handmade
              </p>

              <h2 className="mt-1 font-playfair text-2xl font-semibold text-neutral-800 sm:text-3xl">
                Browse by craft
              </h2>
            </div>
          </div>

          {/* HORIZONTAL CRAFT LIST */}

          <div
            className="
              flex
              gap-4
              overflow-x-auto
              pb-3
              scrollbar-none
            "
          >
            {/* ALL */}

            <button
              onClick={() => setSelectedCraft("all")}
              className={`
                flex
                min-w-fit
                items-center
                gap-2
                rounded-full
                border
                px-4
                py-2.5
                text-xs
                font-medium
                transition-all
                ${
                  selectedCraft === "all"
                    ? "border-creator-pink bg-creator-pink text-white"
                    : "border-neutral-200 bg-white text-neutral-600 hover:border-creator-pink/50"
                }
              `}
            >
              ✦ All
            </button>

            {crafts.map((craft) => (
              <button
                key={craft.name}
                onClick={() => setSelectedCraft(craft.name.toLowerCase())}
                className={`
                  flex
                  min-w-fit
                  items-center
                  gap-2
                  rounded-full
                  border
                  px-4
                  py-2.5
                  text-xs
                  font-medium
                  transition-all
                  ${
                    selectedCraft === craft.name.toLowerCase()
                      ? "border-creator-pink bg-creator-pink text-white"
                      : "border-neutral-200 bg-white text-neutral-600 hover:border-creator-pink/50"
                  }
                `}
              >
                <span>{craft.icon}</span>
                {craft.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCT DISCOVERY
      ===================================================== */}

      <section className="w-full bg-[#FAF7F2] px-6 py-14 sm:px-10 md:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* HEADER */}

          <div
            className="
              mb-8
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-400">
                Discover
              </p>

              <h2
                className="
                  mt-1
                  font-playfair
                  text-3xl
                  font-bold
                  text-neutral-800
                  sm:text-4xl
                "
              >
                Handmade finds
              </h2>

              {!loading && (
                <p className="mt-2 text-xs text-neutral-500">
                  {filteredProducts.length}{" "}
                  {filteredProducts.length === 1 ? "product" : "products"} to
                  explore
                </p>
              )}
            </div>

            {/* SORT + FILTER */}

            <div className="flex items-center gap-2">
              {/* MOBILE FILTER */}

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-neutral-200
                  bg-white
                  px-4
                  py-2.5
                  text-xs
                  text-neutral-600
                  sm:hidden
                "
              >
                <SlidersHorizontal size={15} />
                Filters
              </button>

              {/* SORT */}

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="
                    appearance-none
                    rounded-full
                    border
                    border-neutral-200
                    bg-white
                    py-2.5
                    pl-4
                    pr-9
                    text-xs
                    text-neutral-600
                    outline-none
                  "
                >
                  <option value="latest">Latest</option>

                  <option value="price-low">Price: Low to High</option>

                  <option value="price-high">Price: High to Low</option>
                </select>

                <ChevronDown
                  size={14}
                  className="
                    pointer-events-none
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    text-neutral-400
                  "
                />
              </div>
            </div>
          </div>

          {/* MOBILE ACTIVE FILTER */}

          {showFilters && (
            <div
              className="
                mb-6
                rounded-2xl
                border
                border-neutral-100
                bg-white
                p-4
                sm:hidden
              "
            >
              <div className="flex flex-wrap gap-2">
                {crafts.map((craft) => (
                  <button
                    key={craft.name}
                    onClick={() => {
                      setSelectedCraft(craft.name.toLowerCase());
                      setShowFilters(false);
                    }}
                    className={`
                      rounded-full
                      px-3
                      py-2
                      text-xs
                      ${
                        selectedCraft === craft.name.toLowerCase()
                          ? "bg-creator-pink text-white"
                          : "bg-neutral-100 text-neutral-600"
                      }
                    `}
                  >
                    {craft.icon} {craft.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* PRODUCT GRID */}

          {loading ? (
            <div
              className="
                grid
                grid-cols-2
                gap-4
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
                xl:grid-cols-4
              "
            >
              {Array.from({ length: 8 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="grid">
              <EmptyState />
            </div>
          ) : (
            <div
              className="
                grid
                grid-cols-2
                gap-4
                sm:gap-6
                md:grid-cols-3
                lg:grid-cols-4
              "
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          CREATOR DISCOVERY STRIP
      ===================================================== */}

      <section className="w-full bg-white px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div
            className="
              flex
              flex-col
              items-start
              justify-between
              gap-4
              sm:flex-row
              sm:items-end
            "
          >
            <div>
              <p className="font-caveat text-lg text-creator-pink">
                Behind every handmade piece
              </p>

              <h2
                className="
                  mt-1
                  font-playfair
                  text-3xl
                  font-bold
                  text-neutral-800
                  sm:text-4xl
                "
              >
                Meet the creators
              </h2>

              <p className="mt-2 max-w-lg text-sm text-neutral-500">
                Discover the people, stories and small businesses behind the
                things you love.
              </p>
            </div>

            <button
              // onClick={goToExplore}
              className="
                flex
                items-center
                gap-2
                text-sm
                font-medium
                text-creator-pink
                transition-all
                hover:gap-3
              "
            >
              Explore all
              <ArrowRight size={16} />
            </button>
          </div>

          {/* CREATOR INFO FROM PRODUCTS */}

          <div
            className="
              mt-10
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {[
              ...new Map(
                products
                  .filter((product) => product.sellerUsername)
                  .map((product) => [product.sellerUsername, product]),
              ).values(),
            ]
              .slice(0, 4)
              .map((product) => (
                <button
                  key={product.sellerUsername}
                  onClick={() => navigate(`/${product.sellerUsername}`)}
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-neutral-100
                    bg-[#FAF7F2]
                    p-4
                    text-left
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-md
                  "
                >
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-full
                      bg-pink-100
                    "
                  >
                    {product.productImage1?.url ? (
                      <img
                        src={product.productImage1.url}
                        alt=""
                        className="
                          h-full
                          w-full
                          object-cover
                        "
                      />
                    ) : (
                      <Sparkles size={20} className="text-creator-pink" />
                    )}
                  </div>

                  <div className="min-w-0">
                    <h3
                      className="
                        truncate
                        text-sm
                        font-semibold
                        text-neutral-800
                      "
                    >
                      {product.storeName || product.sellerUsername}
                    </h3>

                    <p
                      className="
                        mt-1
                        truncate
                        text-xs
                        text-neutral-500
                      "
                    >
                      @{product.sellerUsername}
                    </p>
                  </div>

                  <ArrowRight
                    size={15}
                    className="
                      ml-auto
                      shrink-0
                      text-neutral-300
                      transition-all
                      group-hover:translate-x-1
                      group-hover:text-creator-pink
                    "
                  />
                </button>
              ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          EMPTY PLATFORM MESSAGE
      ===================================================== */}

      {!loading && products.length === 0 && (
        <section className="bg-[#FAF7F2] px-6 py-20 text-center">
          <div className="mx-auto max-w-xl">
            <Sparkles size={30} className="mx-auto text-creator-pink" />

            <h2
              className="
                mt-4
                font-playfair
                text-3xl
                font-bold
                text-neutral-800
              "
            >
              Creatorly is just getting started.
            </h2>

            <p className="mt-3 text-sm leading-6 text-neutral-500">
              Creators are building their stores and adding their handmade work.
              Check back soon for more discoveries.
            </p>
          </div>
        </section>
      )}
    </main>
  );
};

export default Explore;
