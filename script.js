/* =========================================================
   KisanCart Demo — Shared Logic & Mock Data
   Developed by CodeNova Studio | Founded by Anoop Dubey
   ========================================================= */

// ---------- Mock Product Data ----------
const PRODUCTS = [
  { id: "p1",  name: "Tomato",         emoji: "🍅", cat: "root",    unit: "1 kg",   price: 25, mrp: 30, desc: "Farm-fresh, hand-picked red tomatoes — juicy, firm and perfect for curries, salads and chutneys.", nutrition: [["Calories","18 kcal"],["Vitamin C","High"],["Fiber","1.2 g"]] },
  { id: "p2",  name: "Potato",         emoji: "🥔", cat: "root",    unit: "1 kg",   price: 22, mrp: 26, desc: "Classic all-purpose potatoes, freshly sourced from local farms. Great for fries, sabzi and curries.", nutrition: [["Calories","77 kcal"],["Carbs","17 g"],["Potassium","High"]] },
  { id: "p3",  name: "Onion",          emoji: "🧅", cat: "root",    unit: "1 kg",   price: 24, mrp: 28, desc: "Premium quality onions with strong flavour, ideal for everyday Indian cooking.", nutrition: [["Calories","40 kcal"],["Fiber","1.7 g"],["Vitamin C","Good"]] },
  { id: "p4",  name: "Spinach",        emoji: "🥬", cat: "leafy",   unit: "1 bunch",price: 18, mrp: 20, desc: "Tender green spinach leaves, washed and ready — rich in iron and perfect for saag.", nutrition: [["Iron","High"],["Calories","23 kcal"],["Vitamin A","High"]] },
  { id: "p5",  name: "Coriander",      emoji: "🌿", cat: "leafy",   unit: "1 bunch",price: 10, mrp: 12, desc: "Fragrant fresh coriander leaves for garnishing and chutneys.", nutrition: [["Calories","23 kcal"],["Vitamin K","High"],["Antioxidants","Good"]] },
  { id: "p6",  name: "Cauliflower",    emoji: "🥦", cat: "seasonal",unit: "1 pc",   price: 28, mrp: 32, desc: "Fresh, tightly-packed cauliflower heads — great for gobi sabzi and parathas.", nutrition: [["Calories","25 kcal"],["Vitamin C","High"],["Fiber","2 g"]] },
  { id: "p7",  name: "Cabbage",        emoji: "🥬", cat: "seasonal",unit: "1 pc",   price: 20, mrp: 24, desc: "Crisp, fresh cabbage heads perfect for salads and stir-fries.", nutrition: [["Calories","25 kcal"],["Fiber","2.5 g"],["Vitamin K","High"]] },
  { id: "p8",  name: "Green Chilli",   emoji: "🌶️", cat: "daily",  unit: "250 g",  price: 15, mrp: 18, desc: "Spicy fresh green chillies to add heat to your everyday cooking.", nutrition: [["Calories","40 kcal"],["Vitamin C","Very High"],["Capsaicin","Present"]] },
  { id: "p9",  name: "Garlic",         emoji: "🧄", cat: "daily",   unit: "250 g",  price: 30, mrp: 35, desc: "Aromatic garlic cloves, essential for Indian tadka and masalas.", nutrition: [["Calories","149 kcal"],["Allicin","High"],["Manganese","Good"]] },
  { id: "p10", name: "Ginger",         emoji: "🫚", cat: "daily",   unit: "200 g",  price: 20, mrp: 24, desc: "Fresh ginger root, perfect for chai, curries and home remedies.", nutrition: [["Calories","80 kcal"],["Gingerol","High"],["Digestive aid","Yes"]] },
  { id: "p11", name: "Carrot",         emoji: "🥕", cat: "root",    unit: "1 kg",   price: 26, mrp: 30, desc: "Sweet and crunchy carrots, great for salads, juices and halwa.", nutrition: [["Vitamin A","Very High"],["Calories","41 kcal"],["Fiber","2.8 g"]] },
  { id: "p12", name: "Bottle Gourd",   emoji: "🥒", cat: "seasonal",unit: "1 pc",   price: 22, mrp: 25, desc: "Light and fresh lauki, ideal for a healthy, low-calorie sabzi.", nutrition: [["Calories","14 kcal"],["Water content","High"],["Fiber","0.5 g"]] },
  { id: "p13", name: "Lady Finger",    emoji: "🫛", cat: "seasonal",unit: "500 g",  price: 20, mrp: 24, desc: "Tender bhindi, freshly harvested and perfect for stir-fry.", nutrition: [["Calories","33 kcal"],["Vitamin C","Good"],["Fiber","3.2 g"]] },
  { id: "p14", name: "Radish",         emoji: "🌱", cat: "root",    unit: "1 kg",   price: 18, mrp: 20, desc: "Crisp white mooli, great for salads and stuffed parathas.", nutrition: [["Calories","16 kcal"],["Vitamin C","Good"],["Fiber","1.6 g"]] },
  { id: "p15", name: "Pumpkin",        emoji: "🎃", cat: "seasonal",unit: "1 kg",   price: 24, mrp: 28, desc: "Sweet kaddu, perfect for sabzi, soups and halwa.", nutrition: [["Vitamin A","Very High"],["Calories","26 kcal"],["Fiber","0.5 g"]] },
  { id: "p16", name: "Organic Tomato", emoji: "🍅", cat: "organic", unit: "1 kg",   price: 40, mrp: 48, desc: "Certified organic tomatoes grown without chemical pesticides.", nutrition: [["Calories","18 kcal"],["Vitamin C","High"],["Pesticide-free","Yes"]] },
];

const CATEGORIES = [
  { id: "leafy",    name: "Leafy",     emoji: "🥬" },
  { id: "root",     name: "Root",      emoji: "🥔" },
  { id: "seasonal", name: "Seasonal",  emoji: "🎃" },
  { id: "organic",  name: "Organic",   emoji: "🌱" },
  { id: "daily",    name: "Essentials",emoji: "🧄" },
];

const DEMO_ORDERS = [
  { id: "KTC1001", status: "delivered",  date: "10 Jul 2026", items: "Tomato, Potato, Onion +2", total: 148 },
  { id: "KTC1002", status: "processing", date: "13 Jul 2026", items: "Spinach, Coriander, Carrot", total: 62 },
  { id: "KTC1003", status: "out",        date: "14 Jul 2026", items: "Cauliflower, Garlic, Ginger", total: 78 },
  { id: "KTC1004", status: "pending",    date: "14 Jul 2026", items: "Cabbage, Green Chilli", total: 40 },
];

const CUSTOMER = { name: "Rahul Sharma", phone: "+91 98765 43210", area: "Mahmoorganj", address: "B-21/12, Mahmoorganj, Varanasi, Uttar Pradesh - 221010" };

// ---------- Cart Store (localStorage-backed) ----------
const Cart = {
  key: "kisancart_cart",
  get() {
    try { return JSON.parse(localStorage.getItem(this.key)) || {}; }
    catch (e) { return {}; }
  },
  save(c) { localStorage.setItem(this.key, JSON.stringify(c)); },
  add(id, qty = 1) {
    const c = this.get();
    c[id] = (c[id] || 0) + qty;
    this.save(c);
  },
  setQty(id, qty) {
    const c = this.get();
    if (qty <= 0) delete c[id]; else c[id] = qty;
    this.save(c);
  },
  remove(id) { const c = this.get(); delete c[id]; this.save(c); },
  clear() { localStorage.setItem(this.key, JSON.stringify({})); },
  count() { const c = this.get(); return Object.values(c).reduce((a,b)=>a+b,0); },
  lines() {
    const c = this.get();
    return Object.keys(c).map(id => {
      const p = PRODUCTS.find(p => p.id === id);
      return p ? { ...p, qty: c[id] } : null;
    }).filter(Boolean);
  },
  subtotal() { return this.lines().reduce((s,l) => s + l.price * l.qty, 0); }
};

// ---------- Helpers ----------
function toast(msg, icon = "✅") {
  let t = document.getElementById("global-toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "global-toast";
    t.className = "toast";
    document.body.appendChild(t);
  }
  t.innerHTML = `<span>${icon}</span> ${msg}`;
  t.classList.add("show");
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove("show"), 1800);
}

function rupee(n) { return "₹" + n.toLocaleString("en-IN"); }

function genOrderId() {
  return "KTC" + Math.floor(1000 + Math.random() * 9000);
}

function updateCartBadges() {
  const n = Cart.count();
  document.querySelectorAll(".js-cart-count").forEach(el => {
    el.textContent = n;
    el.style.display = n > 0 ? "flex" : "none";
  });
}

document.addEventListener("DOMContentLoaded", updateCartBadges);
