import React, { useState } from "react";

export default function ProductsManagement() {
  // Tab switcher state: 'list' (all products view) ya 'add' (new product form view)
  const [activeTab, setActiveTab] = useState("list");

  // Dynamic Product Add Form variables shell states
  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
    category: "clay",
    stocks: "",
    color: "",
    size: "",
    customization: false,
  });

  // Mock array listings mimicking active backend payload structures
  const [mockProducts, setMockProducts] = useState([
    {
      _id: "6aa95e53019a91838c3cf5e8",
      productName: "Clay Turtle",
      productPrice: 499,
      stocks: 20,
      category: "clay",
      imageUrl: "https://imagekit.io"
    }
  ]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("UI Logic Check: Product payload read completed successfully! (Backend connection baad me)");
    setActiveTab("list");
  };

  return (
    <div className="min-h-screen bg-creator-bg-butter font-sans text-creator-text antialiased">
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        
        {/* Title Header with custom sub-tabs selector controls */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-creator-text/5 pb-5 mb-8 gap-4">
          <div>
            <h1 className="font-serif text-3xl font-black tracking-tight">📦 Products Management</h1>
            <p className="text-xs text-creator-text/50 mt-0.5">Apne shop ke inventory items yahan se control aur publish karein.</p>
          </div>

          {/* Sub Navigation Tabs controllers switcher layout */}
          <div className="flex border border-creator-text/10 rounded-full p-1 bg-creator-bg shadow-inner shrink-0 max-w-max">
            <button
              onClick={() => setActiveTab("list")}
              className={`rounded-full px-5 py-2 text-xs font-bold transition ${
                activeTab === "list" ? "bg-creator-text text-white shadow" : "text-creator-text/60 hover:text-creator-text"
              }`}
            >
              All Items ({mockProducts.length})
            </button>
            <button
              onClick={() => setActiveTab("add")}
              className={`rounded-full px-5 py-2 text-xs font-bold transition ${
                activeTab === "add" ? "bg-creator-text text-white shadow" : "text-creator-text/60 hover:text-creator-text"
              }`}
            >
              ➕ Add New Product
            </button>
          </div>
        </div>

        {/* VIEW 1: PRODUCTS INVENTORY TABLE/LIST GRID ROW */}
        {activeTab === "list" && (
          <div className="rounded-2xl border border-creator-text/5 bg-creator-bg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-creator-bg-butter border-b border-creator-text/5 text-xs uppercase tracking-wider font-bold text-creator-text/50">
                    <th className="p-4">Item Details</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Price</th>
                    <th className="p-4">Stock Status</th>
                    <th className="p-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-creator-text/5 font-medium">
                  {mockProducts.map((prod) => (
                    <tr key={prod._id} className="hover:bg-creator-bg-butter/30 transition">
                      <td className="p-4 flex items-center gap-3">
                        <img src={prod.imageUrl} alt={prod.productName} className="h-11 w-11 object-cover rounded-lg border border-creator-text/5" />
                        <span className="font-serif font-bold text-base capitalize">{prod.productName}</span>
                      </td>
                      <td className="p-4 text-creator-text/60 capitalize">{prod.category}</td>
                      <td className="p-4 font-serif font-bold">₹{prod.productPrice}</td>
                      <td className="p-4">
                        <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                          prod.stocks > 0 ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"
                        }`}>
                          {prod.stocks > 0 ? `${prod.stocks} left` : "Out of Stock"}
                        </span>
                      </td>
                      <td className="p-4 text-center space-x-3">
                        <button className="text-xs text-creator-accent font-bold hover:underline">Edit</button>
                        <button className="text-xs text-red-500 font-bold hover:underline">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* VIEW 2: ADD NEW PRODUCT FORM INPUT SHEET GRID LAYOUT */}
        {activeTab === "add" && (
          <form onSubmit={handleFormSubmit} className="bg-creator-bg rounded-2xl border border-creator-text/5 p-6 sm:p-8 shadow-sm space-y-6">
            <h3 className="font-serif text-xl font-bold border-b border-creator-text/5 pb-2">Product Specifications</h3>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Name field */}
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-creator-text/60">Product Name *</label>
                <input required type="text" name="productName" value={formData.productName} onChange={handleInputChange} placeholder="Example: Beautiful Clay Turtle" className="rounded-xl border border-creator-text/10 bg-creator-bg-butter p-3 text-sm outline-none focus:border-creator-accent" />
              </div>

              {/* Description field */}
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-creator-text/60">Description *</label>
                <textarea required rows="3" name="productDescription" value={formData.productDescription} onChange={handleInputChange} placeholder="Is product ki details likhein jise customer read karega..." className="rounded-xl border border-creator-text/10 bg-creator-bg-butter p-3 text-sm outline-none focus:border-creator-accent resize-none" />
              </div>

              {/* Price field */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-creator-text/60">Price (INR) *</label>
                <input required type="number" name="productPrice" value={formData.productPrice} onChange={handleInputChange} placeholder="499" className="rounded-xl border border-creator-text/10 bg-creator-bg-butter p-3 text-sm outline-none focus:border-creator-accent" />
              </div>

              {/* Stocks counts field */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-creator-text/60">Available Stocks Quantity *</label>
                <input required type="number" name="stocks" value={formData.stocks} onChange={handleInputChange} placeholder="20" className="rounded-xl border border-creator-text/10 bg-creator-bg-butter p-3 text-sm outline-none focus:border-creator-accent" />
              </div>

              {/* Color variant matrix specification tag */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-creator-text/60">Color Tone</label>
                <input type="text" name="color" value={formData.color} onChange={handleInputChange} placeholder="Green / Earthy Brown" className="rounded-xl border border-creator-text/10 bg-creator-bg-butter p-3 text-sm outline-none focus:border-creator-accent" />
              </div>

              {/* Dimensions metric sizes specs */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-creator-text/60">Dimensions / Size</label>
                <input type="text" name="size" value={formData.size} onChange={handleInputChange} placeholder="10cm x 12cm" className="rounded-xl border border-creator-text/10 bg-creator-bg-butter p-3 text-sm outline-none focus:border-creator-accent" />
              </div>

              {/* Customization configuration boolean setup checkbox switch row */}
              <div className="sm:col-span-2 flex items-center gap-3 bg-creator-bg-butter p-4 rounded-xl border border-creator-text/5 mt-2">
                <input type="checkbox" id="customization" name="customization" checked={formData.customization} onChange={handleInputChange} className="h-4 w-4 rounded border-creator-text/20 accent-creator-primary" />
                <label htmlFor="customization" className="text-xs font-medium cursor-pointer text-creator-text/80 select-none">
                  🎨 <strong>Allow Customization Request Toggle:</strong> Tick karein agar aap is product par customer se custom requests (jaise note, name request) accept karte hain.
                </label>
              </div>
            </div>

            {/* Bottom Form Actions triggers buttons bars */}
            <div className="flex justify-end gap-3 pt-4 border-t border-creator-text/5">
              <button type="button" onClick={() => setActiveTab("list")} className="rounded-full border border-creator-text/10 bg-creator-bg px-5 py-2 text-xs font-semibold hover:bg-creator-bg-butter transition">
                Cancel  
            </button>
              <button type="submit" className="rounded-full bg-creator-text px-5 py-2 text-xs font-bold text-white shadow hover:bg-creator-primary transition">
                Save Product
                </button>
            </div>
          </form>
        )}
        </main>
    </div>
  )
}