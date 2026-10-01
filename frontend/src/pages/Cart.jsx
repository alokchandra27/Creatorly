import React, { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Check, ChevronDown, ChevronUp, MessageCircle, Minus, Plus, ShoppingBag, Trash2, User, X } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import { getCart, removeFromCart, updateCartQuantity, clearCart } from "../utils/storeStorage";

const getImageUrl = (image, fallback = "") => {
  if (!image) return fallback;

  if (typeof image === "string") {
    return image;
  }

  return image?.url || fallback;
};

const Cart = () => {
  const navigate = useNavigate();
  const { storeName } = useParams();

  const [cart, setCart] = useState([]);
  const [showOrderForm, setShowOrderForm] = useState(false);

  const [customer, setCustomer] = useState({
    name: "",
    street: "",
    address: "",
    mobile: "",
    alternateMobile: "",
  });

  useEffect(() => {
    setCart(getCart(storeName));
  }, [storeName]);

  // ==========================================================
  // TOTALS
  // ==========================================================

  const totalItems = useMemo(() => {
    return cart.reduce((total, item) => total + Number(item.quantity || 0), 0);
  }, [cart]);

  const subtotal = useMemo(() => {
    return cart.reduce((total, item) => total + Number(item.productPrice || 0) * Number(item.quantity || 0), 0);
  }, [cart]);

  // ==========================================================
  // QUANTITY
  // ==========================================================

  const changeQuantity = (productId, quantity) => {
    const updated = updateCartQuantity(storeName, productId, quantity);

    setCart(updated);
  };

  const removeItem = (productId) => {
    const updated = removeFromCart(storeName, productId);

    setCart(updated);
  };

  // ==========================================================
  // CUSTOMER FORM
  // ==========================================================

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ==========================================================
  // WHATSAPP QUERY
  // ==========================================================

  const getWhatsAppNumber = () => {
    const firstProduct = cart[0];

    // We don't have store API here.
    // Product has seller/store data but not WhatsApp number.
    // Therefore we pass it through location state later.
    return firstProduct?.whatsappNumber || "";
  };

  // ==========================================================
  // ORDER MESSAGE
  // ==========================================================

  const createOrderMessage = () => {
    const productsText = cart
      .map((item, index) => {
        const itemTotal = Number(item.productPrice || 0) * Number(item.quantity || 0);

        return `${index + 1}. ${item.productName}
   Qty: ${item.quantity}
   Price: ₹${Number(item.productPrice || 0).toLocaleString("en-IN")}
   Total: ₹${itemTotal.toLocaleString("en-IN")}`;
      })
      .join("\n\n");

    return `Hi! I found ${cart[0]?.storeName || "your store"} on Creatorly and I'd like to place an order. ✨

ORDER DETAILS
--------------------
${productsText}

ORDER TOTAL
₹${subtotal.toLocaleString("en-IN")}

CUSTOMER DETAILS
--------------------
Name: ${customer.name}
Mobile: ${customer.mobile}
${customer.alternateMobile ? `Alternative Mobile: ${customer.alternateMobile}` : ""}
Street: ${customer.street}
Address: ${customer.address}

Please confirm the order, availability and delivery details.

Thank you!`;
  };

  // ==========================================================
  // PLACE ORDER
  // ==========================================================

  const placeOrder = () => {
    if (!customer.name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!customer.mobile.trim()) {
      alert("Please enter your mobile number.");
      return;
    }

    if (!customer.street.trim()) {
      alert("Please enter your street/locality.");
      return;
    }

    if (!customer.address.trim()) {
      alert("Please enter your complete address.");
      return;
    }

    const number = cart[0]?.whatsappNumber;

    if (!number) {
      alert("This creator has not added WhatsApp ordering yet.");
      return;
    }

    const cleanNumber = String(number).replace(/\D/g, "");

    const message = encodeURIComponent(createOrderMessage());

    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${message}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Keep cart until seller confirms?
    // For MVP, clear after sending.
    clearCart(storeName);
    setCart([]);
  };

  // ==========================================================
  // EMPTY CART
  // ==========================================================

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-creator-bg-butter px-4 py-10">
        <div className="mx-auto flex min-h-[70vh] max-w-2xl items-center justify-center">
          <div className="w-full rounded-[28px] border border-creator-text/10 bg-white/80 px-6 py-14 text-center shadow-[0_18px_50px_rgba(60,50,40,0.06)]">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-creator-accent/40">
              <ShoppingBag size={30} strokeWidth={1.6} />
            </div>

            <p className="mt-6 font-caveat text-xl text-creator-pink">nothing here yet ♡</p>

            <h1 className="mt-1 font-serif text-3xl font-semibold">Your cart is empty</h1>

            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-creator-text/50">Add something you love from this creator's collection and it'll appear here.</p>

            <button
              onClick={() => navigate(`/publicStore/${encodeURIComponent(storeName)}`)}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-creator-text px-6 py-3 text-xs font-semibold text-white transition hover:-translate-y-1 hover:bg-creator-primary"
            >
              <ArrowLeft size={15} />
              Continue shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================================
  // MAIN
  // ==========================================================

  return (
    <div className="min-h-screen bg-creator-bg-butter text-creator-text">
      <main className="mx-auto w-[calc(100%-24px)] max-w-6xl px-1 pb-20 pt-8 sm:w-[calc(100%-48px)]">
        {/* HEADER */}

        <div className="mb-8 flex items-center justify-between">
          <button onClick={() => navigate(`/publicStore/${encodeURIComponent(storeName)}`)} className="flex items-center gap-2 text-xs text-creator-text/60 transition hover:text-creator-text">
            <ArrowLeft size={16} />
            Continue shopping
          </button>

          <div className="text-right">
            <p className="font-caveat text-lg text-creator-pink">your little collection</p>

            <h1 className="font-serif text-3xl font-semibold">Your Cart</h1>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          {/* ================================================= */}
          {/* PRODUCTS */}
          {/* ================================================= */}

          <section className="space-y-3">
            {cart.map((item) => (
              <article key={item._id} className="rounded-[22px] border border-creator-text/10 bg-white/85 p-3 shadow-sm">
                <div className="flex gap-4">
                  {/* IMAGE */}

                  <div className="h-28 w-24 shrink-0 overflow-hidden rounded-[16px] bg-creator-bg">
                    <img src={getImageUrl(item.productImage1)} alt={item.productName} className="h-full w-full object-cover" />
                  </div>

                  {/* CONTENT */}

                  <div className="min-w-0 flex-1">
                    <div className="flex justify-between gap-2">
                      <div>
                        <span className="rounded-full bg-creator-accent/40 px-2 py-1 text-[8px] uppercase tracking-wider text-creator-text/60">{item.category || "Handmade"}</span>

                        <h2 className="mt-2 font-serif text-base font-semibold">{item.productName}</h2>

                        {item.size && <p className="mt-1 text-[10px] text-creator-text/40">Size: {item.size}</p>}
                      </div>

                      <button
                        onClick={() => removeItem(item._id)}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-creator-text/35 transition hover:bg-red-50 hover:text-red-500"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <strong className="font-serif text-lg">₹{Number(item.productPrice).toLocaleString("en-IN")}</strong>

                      {/* QUANTITY */}

                      <div className="flex items-center gap-2 rounded-full border border-creator-text/10 bg-creator-bg px-2 py-1">
                        <button onClick={() => changeQuantity(item._id, item.quantity - 1)} className="flex h-7 w-7 items-center justify-center rounded-full transition hover:bg-white">
                          <Minus size={12} />
                        </button>

                        <span className="w-5 text-center text-xs font-semibold">{item.quantity}</span>

                        <button onClick={() => changeQuantity(item._id, item.quantity + 1)} className="flex h-7 w-7 items-center justify-center rounded-full transition hover:bg-white">
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>

                    {item.customization && <p className="mt-2 text-[9px] text-creator-pink">Customization available</p>}
                  </div>
                </div>
              </article>
            ))}
          </section>

          {/* ================================================= */}
          {/* SUMMARY */}
          {/* ================================================= */}

          <aside className="h-fit rounded-[25px] border border-creator-text/10 bg-white/90 p-5 shadow-sm lg:sticky lg:top-24">
            <p className="font-caveat text-lg text-creator-pink">almost yours ♡</p>

            <h2 className="mt-1 font-serif text-2xl font-semibold">Order Summary</h2>

            <div className="my-5 space-y-3 border-y border-creator-text/10 py-5">
              <div className="flex justify-between text-xs text-creator-text/55">
                <span>Items ({totalItems})</span>

                <span>₹{subtotal.toLocaleString("en-IN")}</span>
              </div>

              <div className="flex justify-between text-xs text-creator-text/55">
                <span>Delivery</span>
                <span>To be confirmed</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-serif text-lg">Total</span>

              <strong className="font-serif text-2xl">₹{subtotal.toLocaleString("en-IN")}</strong>
            </div>

            <button
              onClick={() => setShowOrderForm(!showOrderForm)}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-creator-text py-3.5 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-creator-primary"
            >
              Place Order
              {showOrderForm ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
            </button>

            {/* QUERY OPTIONS */}

            <div className="mt-4 rounded-[18px] bg-creator-bg p-4">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-creator-text/50">Just have a question?</p>

              <p className="mt-1 text-xs leading-5 text-creator-text/45">Ask the creator about availability, customization or delivery before ordering.</p>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    const number = cart[0]?.whatsappNumber;

                    if (!number) {
                      alert("WhatsApp is not available for this store.");
                      return;
                    }

                    const cleanNumber = String(number).replace(/\D/g, "");

                    const message = encodeURIComponent(
                      `Hi! I found ${cart[0]?.storeName || "your store"} on Creatorly and I have a question about these products:\n\n${cart
                        .map((item) => `• ${item.productName} × ${item.quantity}`)
                        .join("\n")}\n\nCould you please help me?`,
                    );

                    window.open(`https://wa.me/${cleanNumber}?text=${message}`, "_blank", "noopener,noreferrer");
                  }}
                  className="flex items-center justify-center gap-1.5 rounded-full bg-white px-3 py-2.5 text-[10px] font-semibold transition hover:-translate-y-0.5 hover:shadow-sm"
                >
                  <MessageCircle size={13} />
                  WhatsApp
                </button>

                <button
                  onClick={() => {
                    const username = cart[0]?.instagramUsername;

                    if (username) {
                      window.open(`https://instagram.com/${username.replace("@", "")}`, "_blank", "noopener,noreferrer");
                    } else {
                      alert("Instagram is not available for this store.");
                    }
                  }}
                  className="flex items-center justify-center gap-1.5 rounded-full bg-white px-3 py-2.5 text-[10px] font-semibold transition hover:-translate-y-0.5 hover:shadow-sm"
                >
                  {/* <Instagram size={13} /> */}
                  Instagram
                </button>
              </div>
            </div>

            {/* ================================================= */}
            {/* ORDER FORM */}
            {/* ================================================= */}

            {showOrderForm && (
              <div className="mt-5 border-t border-creator-text/10 pt-5">
                <div className="mb-5">
                  <p className="font-caveat text-lg text-creator-pink">delivery details</p>

                  <h3 className="font-serif text-xl font-semibold">Where should we send it?</h3>
                </div>

                <div className="space-y-3">
                  <input
                    name="name"
                    value={customer.name}
                    onChange={handleInputChange}
                    placeholder="Full name *"
                    className="w-full rounded-xl border border-creator-text/10 bg-creator-bg px-4 py-3 text-xs outline-none transition focus:border-creator-pink"
                  />

                  <input
                    name="mobile"
                    value={customer.mobile}
                    onChange={handleInputChange}
                    placeholder="Mobile number *"
                    inputMode="numeric"
                    className="w-full rounded-xl border border-creator-text/10 bg-creator-bg px-4 py-3 text-xs outline-none transition focus:border-creator-pink"
                  />

                  <input
                    name="alternateMobile"
                    value={customer.alternateMobile}
                    onChange={handleInputChange}
                    placeholder="Alternative mobile number"
                    inputMode="numeric"
                    className="w-full rounded-xl border border-creator-text/10 bg-creator-bg px-4 py-3 text-xs outline-none transition focus:border-creator-pink"
                  />

                  <input
                    name="street"
                    value={customer.street}
                    onChange={handleInputChange}
                    placeholder="Street / locality *"
                    className="w-full rounded-xl border border-creator-text/10 bg-creator-bg px-4 py-3 text-xs outline-none transition focus:border-creator-pink"
                  />

                  <textarea
                    name="address"
                    value={customer.address}
                    onChange={handleInputChange}
                    placeholder="Complete address *"
                    rows={3}
                    className="w-full resize-none rounded-xl border border-creator-text/10 bg-creator-bg px-4 py-3 text-xs outline-none transition focus:border-creator-pink"
                  />
                </div>

                <div className="mt-4 rounded-xl bg-creator-accent/30 p-3 text-[9px] leading-4 text-creator-text/55">
                  Your details will be sent directly to the creator through WhatsApp. Creatorly does not process the payment here.
                </div>

                <button
                  onClick={placeOrder}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <MessageCircle size={16} />
                  Place Order via WhatsApp
                </button>
              </div>
            )}
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Cart;
