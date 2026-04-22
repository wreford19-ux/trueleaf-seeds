import { useState, useMemo } from "react";

const YOCO = "https://pay.yoco.com/r/2Vyppg";
const WA = "27832309883";
const EMAIL = "wreford19@gmail.com";
const PHONE = "+27 83 230 9883";
const LOGO = "https://i.ibb.co/Qj1wGkfJ/Trueleaf-Seeds-Logo.jpg";

const RAW = [
  ["Alyssum Carpet White", "Flower"],
  ["African Horned Cucumber", "Vegetable"],
  ["Ammi Majus", "Flower"],
  ["Anise", "Herb"],
  ["Ashwagandha", "Herb"],
  ["Baobab", "Tree"],
  ["Basil Genovese", "Herb"],
  ["Basil Holy", "Herb"],
  ["Basil Sweet", "Vegetable"],
  ["Bean Appaloosa Bush", "Vegetable"],
  ["Bean Black Turtle", "Vegetable"],
  ["Beans Bird Egg Blue", "Vegetable"],
  ["Bean Lima Nuguni Pole Variety", "Vegetable"],
  ["Bean Nonna Agnes Blue", "Vegetable"],
  ["Bean Vermont Appaloosa", "Vegetable"],
  ["Bean Zebra Lima", "Vegetable"],
  ["Beans Bush Contender", "Vegetable"],
  ["Bean Yard Long", "Vegetable"],
  ["Beetroot Bulls Blood", "Vegetable"],
  ["Beetroot Chioggia", "Vegetable"],
  ["Beetroot Crimson", "Vegetable"],
  ["Beetroot Detroit Dark Red", "Vegetable"],
  ["Beetroot Golden Globe", "Vegetable"],
  ["Beetroot Rainbow Mix", "Vegetable"],
  ["Beetroot Ruby Queen", "Vegetable"],
  ["Black Mustard", "Herb"],
  ["Black Seed (Nigella Sativa)", "Herb"],
  ["Borage", "Herb"],
  ["Broccoli", "Vegetable"],
  ["Broccoli Purple Sprouting", "Vegetable"],
  ["Broccoli Romanesca", "Vegetable"],
  ["Brussel Sprouts", "Vegetable"],
  ["Cabbage Copenhagen", "Vegetable"],
  ["Cabbage Drumhead", "Vegetable"],
  ["Cabbage Savoy", "Vegetable"],
  ["Calendula Mix", "Flower"],
  ["Cancer Bush", "Herb"],
  ["Cape Gooseberry", "Vegetable"],
  ["Capsicum California Wonder", "Vegetable"],
  ["Carrot Chantenny Karoo", "Vegetable"],
  ["Carrots Nantes Scarlet", "Vegetable"],
  ["Carrots Rainbow Blend", "Vegetable"],
  ["Catnip", "Herb"],
  ["Cauliflower Green Igloo", "Vegetable"],
  ["Cauliflower Macerata Green", "Vegetable"],
  ["Cauliflower Mini White", "Vegetable"],
  ["Cauliflower Romanesca Green", "Vegetable"],
  ["Cauliflower Snowball", "Vegetable"],
  ["Cauliflower Violet Sicilian", "Vegetable"],
  ["Celery Utah Tall", "Vegetable"],
  ["Chamomile", "Herb"],
  ["Chia Seed", "Herb"],
  ["Chilli Birds Eye", "Vegetable"],
  ["Chilli Bishops Crown", "Vegetable"],
  ["Chilli Cayenne", "Vegetable"],
  ["Chilli Habanero Orange", "Vegetable"],
  ["Chilli Paprika", "Vegetable"],
  ["Chilli Peppa Dew", "Vegetable"],
  ["Cineraria Dusty Miller", "Flower"],
  ["Cleaver or Bedstraw", "Herb"],
  ["Common Coral Tree", "Tree"],
  ["Coriander", "Herb"],
  ["Corn Bloody Butcher", "Vegetable"],
  ["Corn Glass Gem", "Vegetable"],
  ["Corn Green Oaxacan", "Vegetable"],
  ["Cosmos Laced", "Flower"],
  ["Cosmos Sea Shell Pink", "Flower"],
  ["Cosmos Sensation Mix", "Flower"],
  ["Cosmos Veldfire", "Flower"],
  ["Creeping Thyme", "Herb"],
  ["Cucumber Ashley", "Vegetable"],
  ["Cucumber Snake", "Vegetable"],
  ["Dandelion", "Herb"],
  ["Dianthus Mix", "Flower"],
  ["Dichondra Wonder Lawn", "Lawn"],
  ["Dill", "Herb"],
  ["Eggfruit Brinjal Black Beauty", "Vegetable"],
  ["Eggfruit Brinjal Purple Fingers", "Vegetable"],
  ["Erigeron Profusion", "Flower"],
  ["Evening Primrose Eonothera biennis", "Herb"],
  ["Fennel", "Herb"],
  ["Fenugreek", "Herb"],
  ["Feverfew Tanacetum parthenium", "Herb"],
  ["Fever Tree", "Tree"],
  ["Foxglove Foxy Mix", "Flower"],
  ["French Lavender", "Flower"],
  ["Garlic Chesnok Red", "Vegetable"],
  ["Garlic Egyptian Red", "Vegetable"],
  ["Garlic Egyptian White", "Vegetable"],
  ["Garlic Spanish White", "Vegetable"],
  ["Gourd African Calabash", "Vegetable"],
  ["Gourd Calabash Birdhouse", "Vegetable"],
  ["Gourd Caveman Club", "Vegetable"],
  ["Gourd Cuccuza", "Vegetable"],
  ["Gourd Dipper", "Vegetable"],
  ["Gourd Dipper Extra Length", "Vegetable"],
  ["Gourd Giant Bullet Headwax", "Vegetable"],
  ["Gourd Leraka", "Vegetable"],
  ["Gourd Martin House Bottle", "Vegetable"],
  ["Gourd Mix", "Vegetable"],
  ["Gourd Snake", "Vegetable"],
  ["Gourd Speckled Swan", "Vegetable"],
  ["Green Prickly Pear", "Vegetable"],
  ["Hollyhock Mix", "Flower"],
  ["Hollyhock Maroon", "Flower"],
  ["Hollyhock White", "Flower"],
  ["Horehound White Marrubium vulgare", "Herb"],
  ["Huckleberry", "Vegetable"],
  ["Hyssop", "Herb"],
  ["Industrial Hemp", "Crop Cover"],
  ["Job's Tears Coix lacryma", "Herb"],
  ["Kale Black Krim", "Vegetable"],
  ["Kale Red Ursa", "Vegetable"],
  ["Kale White Russian", "Vegetable"],
  ["Karee Tree - Swart", "Tree"],
  ["King Protea", "Flower"],
  ["Kohlrabi Purple Vienna", "Vegetable"],
  ["Kohlrabi White Vienna", "Vegetable"],
  ["LM Lawn", "Lawn"],
  ["Leeks Elephant", "Vegetable"],
  ["Lemon Balm", "Herb"],
  ["Lemon Basil", "Herb"],
  ["Lettuce Freckles", "Vegetable"],
  ["Lettuce Great Lakes", "Vegetable"],
  ["Lettuce Loose Leaf Mix", "Vegetable"],
  ["Lettuce Mix", "Vegetable"],
  ["Loofah European", "Crop Cover"],
  ["Lucern Tree Chamaecytisus proliferus", "Tree"],
  ["Marula", "Tree"],
  ["Melon Rich Sweetness Cucumis Melo", "Vegetable"],
  ["Mesembryansthemum Bokbaai Vygie", "Flower"],
  ["Mexican Mint", "Herb"],
  ["Microgreen Alfalfa", "Microgreen"],
  ["Microgreens Asian Oriental Mix", "Microgreen"],
  ["Microgreens Black Mustard", "Microgreen"],
  ["Microgreens Broccoli Calabrese", "Microgreen"],
  ["Microgreens Cress", "Microgreen"],
  ["Microgreen Fenugreek", "Microgreen"],
  ["Microgreens Green Basil", "Microgreen"],
  ["Microgreens Green Swiss Chard", "Microgreen"],
  ["Microgreens Mizuno Greens", "Microgreen"],
  ["Microgreens Mustard Green Frills", "Microgreen"],
  ["Microgreen Kaleidoscope Mix", "Microgreen"],
  ["Microgreens Mustard Red Frills", "Microgreen"],
  ["Microgreens Radish Coralette", "Microgreen"],
  ["Microgreens Radish Daikon", "Microgreen"],
  ["Microgreen Radish Rainbow", "Microgreen"],
  ["Microgreens Radish Tsai Tsai", "Microgreen"],
  ["Microgreens Red Amaranthus", "Microgreen"],
  ["Microgreens Red Swiss Chard", "Microgreen"],
  ["Microgreens Rocket", "Microgreen"],
  ["Microgreens Stirfry Blend", "Microgreen"],
  ["Microgreens Striped Sunflower", "Microgreen"],
  ["Microgreens Wheatgrass", "Microgreen"],
  ["Microgreens Yellow Mustard", "Microgreen"],
  ["Milk Thistle Silybum marianum", "Herb"],
  ["Monkey Thorn", "Tree"],
  ["Moringa", "Herb"],
  ["Mung Beans", "Herb"],
  ["Mustard Spinach", "Vegetable"],
  ["Namakwaland Daisy", "Flower"],
  ["Nasturtium Alaska Mix", "Flower"],
  ["Okra Lady Fingers", "Vegetable"],
  ["Onion Red Creole", "Vegetable"],
  ["Onion Texas Grano", "Vegetable"],
  ["Oregano", "Herb"],
  ["Oriental Vegetable Asian Blend Mix", "Vegetable"],
  ["Osteospermum", "Flower"],
  ["Parsley Flat Leaf", "Herb"],
  ["Parsley Moss", "Herb"],
  ["Patty Pan Alba", "Vegetable"],
  ["Patty Pan Juane et Verte", "Vegetable"],
  ["Patty Pan Mix", "Vegetable"],
  ["Patty Pan Scallop Yellow", "Vegetable"],
  ["Peanut Benih Giant Striped", "Vegetable"],
  ["Peanut Black", "Vegetable"],
  ["Peanut Chalimbana", "Vegetable"],
  ["Peanut Fastigianta Pin Striped", "Vegetable"],
  ["Peanut Malawi Striped", "Vegetable"],
  ["Peas First Early May", "Vegetable"],
  ["Peas Sugar Snap Mangetout", "Vegetable"],
  ["Peas Super Snappy", "Vegetable"],
  ["Pet Grass", "Lawn"],
  ["Popcorn Dakota Black", "Vegetable"],
  ["Poppy Black Dragon", "Flower"],
  ["Poppy Flanders Red", "Flower"],
  ["Poppy Peony Mix", "Flower"],
  ["Poppy Peony Light Purple", "Flower"],
  ["Poppy Peony Purple", "Flower"],
  ["Poppy Peony Red", "Flower"],
  ["Poppy Peony Pink", "Flower"],
  ["Poppy Pepperbox Red", "Flower"],
  ["Poppy Mix", "Flower"],
  ["Poppy Pink", "Flower"],
  ["Poppy Purple", "Flower"],
  ["Poppy White", "Flower"],
  ["Pumpkin Queensland Blue", "Vegetable"],
  ["Pumpkin Turks Turban", "Vegetable"],
  ["Pumpkin Witboer", "Vegetable"],
  ["Radish Hailstone White", "Vegetable"],
  ["Radish Purple Plum", "Vegetable"],
  ["Radish Rainbow Mix", "Vegetable"],
  ["Radish Spanish Black", "Vegetable"],
  ["Radish Sparkler", "Vegetable"],
  ["Rape English Giant", "Crop Cover"],
  ["Red Mustard Giant Greens Brassica juncea", "Herb"],
  ["Red Swiss Chard", "Vegetable"],
  ["Rocket", "Herb"],
  ["Rocket Wild Sylvetta", "Herb"],
  ["Roselle hibiscus sabdariffa", "Herb"],
  ["Rue", "Herb"],
  ["Salad Burnett Sanguisorba minor", "Herb"],
  ["Sand Olive", "Tree"],
  ["Snapdragon Tom Thumb Mix", "Flower"],
  ["Spinach Baby Black Magic", "Vegetable"],
  ["Spinach Fordhook Giant", "Vegetable"],
  ["Spinach Swiss Chard Bright Lights Mix", "Vegetable"],
  ["Spring Onion", "Herb"],
  ["Sprouts Mansoor Lentils", "Sprouts"],
  ["Sprouts Moth Beans", "Sprouts"],
  ["Sprouts Mung Beans", "Sprouts"],
  ["Sprouts Peas", "Sprouts"],
  ["Sprouts Sunflower Seeds", "Sprouts"],
  ["Sprouts Tatsoi", "Sprouts"],
  ["Sprouts Tuscany Kale", "Sprouts"],
  ["Sprouts White Chickpeas", "Sprouts"],
  ["Squash Butternut Waltham", "Vegetable"],
  ["Squash Gem Rolet", "Vegetable"],
  ["Squash Spaghetti", "Vegetable"],
  ["Stinging Nettle", "Herb"],
  ["Strelitzia Nicolai", "Flower"],
  ["Strelitzia Reginae", "Flower"],
  ["Sunflower Burnt Ember", "Flower"],
  ["Sunflower Evening Star", "Flower"],
  ["Sunflower Mixed Packet", "Flower"],
  ["Sunflower Nigerian Oil Seed", "Flower"],
  ["Sunflower Tarahumara", "Flower"],
  ["Sunflower Tiger Eye", "Flower"],
  ["Sunflower Titan", "Flower"],
  ["Sunhemp", "Herb"],
  ["Sweet Thorn", "Tree"],
  ["Sweetcorn Golden Bantam", "Vegetable"],
  ["Sweet William Mix", "Flower"],
  ["Thyme", "Herb"],
  ["Tomato Chocolate Stripe", "Vegetable"],
  ["Tomato Money Maker", "Vegetable"],
  ["Tomato Oxheart", "Vegetable"],
  ["Tomato Rodade", "Vegetable"],
  ["Tomato Roma", "Vegetable"],
  ["Tooth Ache Plant Spilanthes acmella", "Herb"],
  ["Tulbaghia", "Flower"],
  ["Turnip Green Globe", "Vegetable"],
  ["Turnip Purple Top", "Vegetable"],
  ["Turnip Snowball White", "Vegetable"],
  ["Turnip Yellow Globe", "Vegetable"],
  ["Virginia Gold Tobacco", "Crop Cover"],
  ["Watermelon All Sweet", "Vegetable"],
  ["Watermelon Black Diamond", "Vegetable"],
  ["Wild Olive", "Tree"],
  ["Yellow Pincushion Protea", "Flower"],
  ["Zinnia Mix", "Flower"],
];

const INIT = RAW.map((r, i) => ({
  id: i + 1,
  name: r[0],
  category: r[1],
  cost: 25,
  price: 45,
  stock: true,
  image: "",
}));
const CATS = [
  "All",
  ...Array.from(new Set(INIT.map((p) => p.category))).sort(),
];

const catStyle = {
  Vegetable: { bg: "#e8f5ee", color: "#2d6a3f", icon: "🥦" },
  Flower: { bg: "#fdf0f8", color: "#8b3a72", icon: "🌸" },
  Herb: { bg: "#fdf8e8", color: "#7a5c00", icon: "🌿" },
  Tree: { bg: "#eef5e8", color: "#2d4a1e", icon: "🌳" },
  Microgreen: { bg: "#e8f8f8", color: "#0a6060", icon: "🌱" },
  Sprouts: { bg: "#e8eef8", color: "#1a3a7a", icon: "🫘" },
  "Crop Cover": { bg: "#f5efe8", color: "#6b3a00", icon: "🌾" },
  Lawn: { bg: "#eef5e0", color: "#3a6000", icon: "🍀" },
};

const C = {
  darkGreen: "#2d4a1e",
  midGreen: "#3d6b28",
  lightGreen: "#5a8a3a",
  parchment: "#f5edd8",
  parchmentDark: "#e8d5a3",
  brown: "#5c3d1e",
  cream: "#faf7f0",
  offwhite: "#f7f4ec",
  border: "#ddd5b8",
  text: "#2a2015",
  textMid: "#5c4a2a",
  textLight: "#8a7a5a",
};

export default function App() {
  const [products, setProducts] = useState(INIT);
  const [view, setView] = useState("store");
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");
  const [cart, setCart] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});
  const [cartOpen, setCartOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [cust, setCust] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  const [toast, setToast] = useState("");
  const [bulkPrice, setBulkPrice] = useState("");
  const [bulkCat, setBulkCat] = useState("All");

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };

  const filtered = useMemo(
    () =>
      products.filter((p) => {
        return (
          (cat === "All" || p.category === cat) &&
          p.name.toLowerCase().includes(search.toLowerCase()) &&
          p.stock
        );
      }),
    [products, cat, search]
  );

  const addCart = (p) => {
    setCart((c) => {
      const ex = c.find((x) => x.id === p.id);
      return ex
        ? c.map((x) => (x.id === p.id ? { ...x, qty: x.qty + 1 } : x))
        : [...c, { ...p, qty: 1 }];
    });
    showToast(`${p.name} added to cart`);
  };
  const cartTotal = cart.reduce((s, x) => s + x.price * x.qty, 0);
  const cartCount = cart.reduce((s, x) => s + x.qty, 0);

  const waMsg = encodeURIComponent(
    `Hi Trueleaf! I've placed an order:\n\n${cart
      .map((x) => `• ${x.qty}× ${x.name} — R${(x.price * x.qty).toFixed(2)}`)
      .join("\n")}\n\nTotal: R${cartTotal.toFixed(2)}\n\nMy details:\nName: ${
      cust.name
    }\nPhone: ${cust.phone}\nEmail: ${cust.email}\nAddress: ${cust.address}`
  );

  const handlePay = () => {
    window.open(YOCO, "_blank");
    window.open(`https://wa.me/${WA}?text=${waMsg}`, "_blank");
    setStep(3);
  };

  const startEdit = (p) => {
    setEditId(p.id);
    setEditData({ ...p });
  };
  const saveEdit = () => {
    setProducts((ps) =>
      ps.map((p) =>
        p.id === editId
          ? {
              ...p,
              ...editData,
              price: Number(editData.price),
              cost: Number(editData.cost),
            }
          : p
      )
    );
    setEditId(null);
    showToast("Saved!");
  };
  const applyBulk = () => {
    if (!bulkPrice) return;
    setProducts((ps) =>
      ps.map((p) =>
        bulkCat === "All" || p.category === bulkCat
          ? { ...p, price: Number(bulkPrice) }
          : p
      )
    );
    showToast("Bulk price applied!");
    setBulkPrice("");
  };
  const addNew = () => {
    const n = {
      id: Date.now(),
      name: "New Product",
      category: "Vegetable",
      cost: 25,
      price: 45,
      stock: true,
      image: "",
    };
    setProducts((ps) => [n, ...ps]);
    startEdit(n);
  };
  const del = (id) => {
    setProducts((ps) => ps.filter((p) => p.id !== id));
    showToast("Deleted");
  };

  const inputStyle = {
    width: "100%",
    padding: "9px 12px",
    borderRadius: 6,
    border: `1px solid ${C.border}`,
    fontSize: 13,
    boxSizing: "border-box",
    background: C.cream,
    fontFamily: "Georgia,serif",
    color: C.text,
  };
  const btnGreen = {
    border: "none",
    borderRadius: 6,
    padding: "10px 18px",
    cursor: "pointer",
    background: C.darkGreen,
    color: "#fff",
    fontFamily: "Georgia,serif",
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: "0.3px",
  };
  const btnParch = {
    border: `1px solid ${C.border}`,
    borderRadius: 6,
    padding: "10px 18px",
    cursor: "pointer",
    background: C.parchment,
    color: C.brown,
    fontFamily: "Georgia,serif",
    fontSize: 13,
    fontWeight: 600,
  };
  const modal = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(30,20,5,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  };
  const box = {
    background: C.cream,
    borderRadius: 12,
    padding: "1.5rem",
    width: "min(500px,95vw)",
    maxHeight: "90vh",
    overflowY: "auto",
    border: `1px solid ${C.border}`,
  };

  const TrustBadge = ({ text }) => (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        fontSize: 11,
        color: C.midGreen,
        background: "#eef5e8",
        border: `1px solid #c8ddb0`,
        borderRadius: 20,
        padding: "3px 10px",
        fontFamily: "Georgia,serif",
      }}
    >
      ✔ {text}
    </span>
  );

  return (
    <div
      style={{
        fontFamily: "Georgia,serif",
        minHeight: "100vh",
        background: C.offwhite,
        color: C.text,
      }}
    >
      {toast && (
        <div
          style={{
            position: "fixed",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            background: C.darkGreen,
            color: "#fff",
            padding: "9px 20px",
            borderRadius: 20,
            fontSize: 13,
            zIndex: 200,
            whiteSpace: "nowrap",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        >
          {toast}
        </div>
      )}

      {/* Top bar */}
      <div
        style={{
          background: C.darkGreen,
          color: "#e8d5a3",
          fontSize: 12,
          textAlign: "center",
          padding: "5px",
          letterSpacing: "0.5px",
        }}
      >
        ✔ Organically Grown &nbsp;|&nbsp; ✔ Non-GMO &nbsp;|&nbsp; ✔
        Open-Pollinated &nbsp;|&nbsp; ✔ Selected for African Growing Conditions
      </div>

      {/* Nav */}
      <nav
        style={{
          background: C.parchment,
          borderBottom: `2px solid ${C.border}`,
          padding: "0 1rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          minHeight: 64,
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img
              src={LOGO}
              alt="Trueleaf Seeds"
              style={{ height: 48, objectFit: "contain" }}
              onError={(e) => {
                e.target.replaceWith(
                  Object.assign(document.createElement("span"), {
                    textContent: "🌿",
                    style: "font-size:28px",
                  })
                );
              }}
            />
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: 16,
                  fontWeight: 700,
                  color: C.darkGreen,
                  letterSpacing: "0.5px",
                  lineHeight: 1.1,
                }}
              >
                TRUELEAF
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: 10,
                  color: C.brown,
                  letterSpacing: "2px",
                  fontFamily: "system-ui,sans-serif",
                }}
              >
                SEED CO.
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 4,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              ...btnParch,
              background: view === "store" ? C.darkGreen : "transparent",
              color: view === "store" ? "#fff" : C.brown,
              border: "none",
              fontSize: 13,
            }}
            onClick={() => setView("store")}
          >
            Shop
          </button>
          <button
            style={{
              ...btnParch,
              background: view === "admin" ? C.darkGreen : "transparent",
              color: view === "admin" ? "#fff" : C.brown,
              border: "none",
              fontSize: 13,
            }}
            onClick={() => setView("admin")}
          >
            Admin
          </button>
          <button
            style={{
              ...btnGreen,
              display: "flex",
              alignItems: "center",
              gap: 6,
              position: "relative",
            }}
            onClick={() => setCartOpen(true)}
          >
            🛒 Cart
            {cartCount > 0 && (
              <span
                style={{
                  background: "#e8762a",
                  color: "#fff",
                  borderRadius: 10,
                  padding: "0 6px",
                  fontSize: 11,
                  fontWeight: 700,
                }}
              >
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Logo Hero Banner */}
      {view === "store" && (
        <div
          style={{
            background: C.parchment,
            borderBottom: `2px solid ${C.border}`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem 1rem",
            textAlign: "center",
          }}
        >
          <img
            src={LOGO}
            alt="Trueleaf Seeds Logo"
            style={{
              maxWidth: 380,
              width: "85%",
              objectFit: "contain",
              marginBottom: "0.5rem",
            }}
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          <p
            style={{
              margin: 0,
              fontSize: 12,
              color: C.textLight,
              letterSpacing: "2px",
              fontFamily: "system-ui,sans-serif",
              textTransform: "uppercase",
            }}
          >
            Heirloom Seeds That Grow With You
          </p>
        </div>
      )}

      {view === "store" && (
        <>
          {/* Hero */}
          <div
            style={{
              background: `linear-gradient(160deg, ${C.darkGreen} 0%, #3d6b28 100%)`,
              color: "#fff",
              padding: "3rem 1.5rem",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage:
                  "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.03) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.03) 0%, transparent 50%)",
              }}
            />
            <div
              style={{ maxWidth: 640, margin: "0 auto", position: "relative" }}
            >
              <p
                style={{
                  color: C.parchmentDark,
                  fontSize: 12,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  margin: "0 0 0.5rem",
                  fontFamily: "system-ui,sans-serif",
                }}
              >
                Heirloom · Open-Pollinated · Non-GMO
              </p>
              <h1
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  margin: "0 0 0.5rem",
                  color: "#fff",
                  letterSpacing: "-0.5px",
                }}
              >
                Seeds That Grow With You
              </h1>
              <p
                style={{
                  color: "rgba(255,255,255,0.75)",
                  fontSize: 15,
                  margin: "0 0 1.25rem",
                  lineHeight: 1.7,
                }}
              >
                Rooted in tradition. Grown for the future. Our carefully
                selected heirloom varieties thrive in African growing conditions
                — flavourful, resilient, and naturally adapted.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <TrustBadge text="Organically grown" />
                <TrustBadge text="Save your own seeds" />
                <TrustBadge text="Support local growers" />
                <TrustBadge text="African adapted" />
              </div>
            </div>
          </div>

          {/* How it works strip */}
          <div
            style={{
              background: C.parchment,
              borderBottom: `1px solid ${C.border}`,
              borderTop: `1px solid ${C.border}`,
              padding: "1rem",
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            {[
              ["1. Choose", "Select from 260+ heirloom varieties"],
              ["2. We Pack & Ship", "Orders confirmed via WhatsApp"],
              ["3. Grow & Save", "Open-pollinated — save seeds yearly"],
            ].map(([t, d]) => (
              <div key={t} style={{ textAlign: "center", maxWidth: 180 }}>
                <p
                  style={{
                    margin: 0,
                    fontWeight: 700,
                    fontSize: 13,
                    color: C.darkGreen,
                  }}
                >
                  {t}
                </p>
                <p
                  style={{ margin: "2px 0 0", fontSize: 11, color: C.textMid }}
                >
                  {d}
                </p>
              </div>
            ))}
          </div>

          {/* Toolbar */}
          <div
            style={{
              display: "flex",
              gap: 8,
              padding: "0.75rem 1rem",
              flexWrap: "wrap",
              alignItems: "center",
              background: "#fff",
              borderBottom: `1px solid ${C.border}`,
            }}
          >
            <input
              style={{ ...inputStyle, flex: 1, minWidth: 140 }}
              placeholder="Search seeds..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              style={{ ...inputStyle, width: "auto" }}
              value={cat}
              onChange={(e) => setCat(e.target.value)}
            >
              {CATS.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <span style={{ fontSize: 12, color: C.textLight }}>
              {filtered.length} products
            </span>
          </div>

          {/* Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))",
              gap: 12,
              padding: "1rem",
            }}
          >
            {filtered.map((p) => {
              const cs = catStyle[p.category] || {
                bg: "#f0f0f0",
                color: "#555",
                icon: "🌿",
              };
              return (
                <div
                  key={p.id}
                  style={{
                    background: "#fff",
                    borderRadius: 10,
                    border: `1px solid ${C.border}`,
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    transition: "box-shadow 0.2s",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: 120,
                      background: cs.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      position: "relative",
                    }}
                  >
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <span style={{ fontSize: 36 }}>{cs.icon}</span>
                    )}
                  </div>
                  <div
                    style={{
                      padding: "10px 12px 12px",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <p
                      style={{
                        margin: "0 0 5px",
                        fontWeight: 700,
                        fontSize: 13,
                        color: C.text,
                        lineHeight: 1.3,
                      }}
                    >
                      {p.name}
                    </p>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "2px 8px",
                        borderRadius: 20,
                        fontSize: 10,
                        fontWeight: 600,
                        marginBottom: 8,
                        background: cs.bg,
                        color: cs.color,
                      }}
                    >
                      {cs.icon} {p.category}
                    </span>
                    <p
                      style={{
                        fontSize: 11,
                        color: C.textLight,
                        margin: "0 0 6px",
                        lineHeight: 1.4,
                        fontStyle: "italic",
                      }}
                    >
                      Open-pollinated · Heirloom
                    </p>
                    <p
                      style={{
                        fontSize: 17,
                        fontWeight: 700,
                        color: C.darkGreen,
                        margin: "auto 0 8px",
                      }}
                    >
                      R{p.price.toFixed(2)}
                    </p>
                    <button
                      style={{
                        ...btnGreen,
                        padding: "8px",
                        fontSize: 12,
                        width: "100%",
                      }}
                      onClick={() => addCart(p)}
                    >
                      + Add to cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Why section */}
          <div
            style={{
              background: C.darkGreen,
              color: "#fff",
              padding: "2.5rem 1.5rem",
              marginTop: "1rem",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: 700,
                margin: "0 0 1.5rem",
                color: C.parchmentDark,
              }}
            >
              Why Choose Trueleaf Seeds?
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
                gap: 16,
                maxWidth: 720,
                margin: "0 auto",
              }}
            >
              {[
                [
                  "Better Flavour",
                  "Grown for taste, not transport. Richer flavours and vibrant colours.",
                ],
                [
                  "Save Your Seeds",
                  "Open-pollinated varieties — harvest and replant year after year.",
                ],
                [
                  "Support Biodiversity",
                  "Preserve rare traditional varieties and strengthen ecosystems.",
                ],
                [
                  "Locally Adapted",
                  "Sourced from African growers, suited to our climate and conditions.",
                ],
              ].map(([t, d]) => (
                <div
                  key={t}
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: 8,
                    padding: "1rem",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 4px",
                      fontWeight: 700,
                      fontSize: 13,
                      color: C.parchmentDark,
                    }}
                  >
                    ✔ {t}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 12,
                      color: "rgba(255,255,255,0.7)",
                      lineHeight: 1.5,
                    }}
                  >
                    {d}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <footer
            style={{
              background: C.brown,
              color: C.parchment,
              padding: "1.5rem",
              textAlign: "center",
              fontSize: 12,
            }}
          >
            <img
              src={LOGO}
              alt="Trueleaf Seeds"
              style={{
                height: 50,
                objectFit: "contain",
                marginBottom: 8,
                filter: "brightness(0) invert(1)",
                opacity: 0.85,
              }}
              onError={(e) => (e.target.style.display = "none")}
            />
            <p
              style={{
                margin: "0 0 6px",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.5px",
              }}
            >
              TRUELEAF SEEDS
            </p>
            <p style={{ margin: "0 0 4px", opacity: 0.8 }}>
              📞{" "}
              <a href={`tel:${PHONE}`} style={{ color: C.parchmentDark }}>
                {PHONE}
              </a>{" "}
              &nbsp;|&nbsp; ✉️{" "}
              <a href={`mailto:${EMAIL}`} style={{ color: C.parchmentDark }}>
                {EMAIL}
              </a>
            </p>
            <p style={{ margin: "8px 0 0", opacity: 0.5, fontSize: 10 }}>
              All seeds are organically grown, open-pollinated and non-GMO.
              Prices include VAT. © 2026 Trueleaf Seeds. All rights reserved.
            </p>
          </footer>
        </>
      )}

      {view === "admin" && (
        <div style={{ padding: "1.25rem", maxWidth: 900, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: C.darkGreen,
              margin: "0 0 1rem",
            }}
          >
            Admin panel
          </h2>
          <div
            style={{
              background: C.parchment,
              border: `1px solid ${C.border}`,
              borderRadius: 10,
              padding: "1rem",
              marginBottom: "1.25rem",
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: 13, fontWeight: 600, color: C.darkGreen }}>
              Bulk price update:
            </span>
            <select
              style={{ ...inputStyle, width: "auto" }}
              value={bulkCat}
              onChange={(e) => setBulkCat(e.target.value)}
            >
              {CATS.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <input
              style={{ ...inputStyle, width: 120 }}
              type="number"
              placeholder="New price (R)"
              value={bulkPrice}
              onChange={(e) => setBulkPrice(e.target.value)}
            />
            <button style={btnGreen} onClick={applyBulk}>
              Apply
            </button>
            <button
              style={{ ...btnGreen, background: "#2d5a8e", marginLeft: "auto" }}
              onClick={addNew}
            >
              + Add product
            </button>
          </div>
          {products.map((p) => (
            <div
              key={p.id}
              style={{
                background: "#fff",
                border: `1px solid ${C.border}`,
                borderRadius: 8,
                padding: "9px 12px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 6,
              }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    margin: 0,
                    fontWeight: 600,
                    fontSize: 13,
                    color: C.text,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {p.name}
                </p>
                <p style={{ margin: 0, fontSize: 11, color: C.textLight }}>
                  {p.category} · Cost: R{p.cost} · Retail:{" "}
                  <strong style={{ color: C.darkGreen }}>R{p.price}</strong> ·
                  Profit: R{p.price - p.cost}
                </p>
              </div>
              <span
                style={{
                  fontSize: 11,
                  padding: "2px 8px",
                  borderRadius: 10,
                  background: p.stock ? "#eef5e8" : "#fce8e8",
                  color: p.stock ? C.midGreen : "#c00",
                  flexShrink: 0,
                }}
              >
                {p.stock ? "Live" : "Hidden"}
              </span>
              <button
                style={{ ...btnGreen, padding: "5px 12px", fontSize: 12 }}
                onClick={() => startEdit(p)}
              >
                Edit
              </button>
              <button
                style={{
                  ...btnGreen,
                  background: "#b00",
                  padding: "5px 9px",
                  fontSize: 12,
                }}
                onClick={() => del(p.id)}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {editId && (
        <div
          style={modal}
          onClick={(e) => e.target === e.currentTarget && setEditId(null)}
        >
          <div style={box}>
            <h3 style={{ margin: "0 0 1rem", color: C.darkGreen }}>
              Edit product
            </h3>
            {[
              ["Name", "name", "text"],
              ["Category", "category", "select"],
              ["Cost price (R)", "cost", "number"],
              ["Retail price (R)", "price", "number"],
              ["Image URL", "image", "text"],
            ].map(([label, key, type]) => (
              <div key={key}>
                <label
                  style={{
                    fontSize: 12,
                    color: C.textMid,
                    display: "block",
                    marginBottom: 3,
                    marginTop: 10,
                  }}
                >
                  {label}
                </label>
                {type === "select" ? (
                  <select
                    style={inputStyle}
                    value={editData[key] || ""}
                    onChange={(e) =>
                      setEditData((d) => ({ ...d, [key]: e.target.value }))
                    }
                  >
                    {CATS.filter((c) => c !== "All").map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    style={inputStyle}
                    type={type}
                    value={editData[key] || ""}
                    onChange={(e) =>
                      setEditData((d) => ({ ...d, [key]: e.target.value }))
                    }
                    placeholder={key === "image" ? "https://..." : ""}
                  />
                )}
              </div>
            ))}
            {editData.price && editData.cost && (
              <p
                style={{ fontSize: 11, color: C.textLight, margin: "4px 0 0" }}
              >
                Profit: R{editData.price - editData.cost} per pack
              </p>
            )}
            <label
              style={{
                fontSize: 12,
                color: C.textMid,
                display: "flex",
                alignItems: "center",
                gap: 6,
                marginTop: 10,
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                checked={editData.stock || false}
                onChange={(e) =>
                  setEditData((d) => ({ ...d, stock: e.target.checked }))
                }
              />{" "}
              Show in store
            </label>
            <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
              <button
                style={{ ...btnParch, flex: 1 }}
                onClick={() => setEditId(null)}
              >
                Cancel
              </button>
              <button style={{ ...btnGreen, flex: 1 }} onClick={saveEdit}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      )}

      {cartOpen && (
        <div
          style={modal}
          onClick={(e) =>
            e.target === e.currentTarget && (setCartOpen(false), setStep(0))
          }
        >
          <div style={box}>
            {step === 0 && (
              <>
                <h3 style={{ margin: "0 0 1rem", color: C.darkGreen }}>
                  Your cart
                </h3>
                {cart.length === 0 ? (
                  <p
                    style={{
                      color: C.textLight,
                      textAlign: "center",
                      padding: "2rem 0",
                    }}
                  >
                    Your cart is empty
                  </p>
                ) : (
                  <>
                    {cart.map((x) => (
                      <div
                        key={x.id}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "7px 0",
                          borderBottom: `1px solid ${C.border}`,
                        }}
                      >
                        <span style={{ flex: 1, fontSize: 13 }}>{x.name}</span>
                        <button
                          style={{
                            background: "none",
                            border: `1px solid ${C.border}`,
                            borderRadius: 5,
                            width: 24,
                            height: 24,
                            cursor: "pointer",
                          }}
                          onClick={() =>
                            setCart((c) =>
                              c
                                .map((i) =>
                                  i.id === x.id
                                    ? { ...i, qty: Math.max(0, i.qty - 1) }
                                    : i
                                )
                                .filter((i) => i.qty > 0)
                            )
                          }
                        >
                          -
                        </button>
                        <span
                          style={{
                            width: 18,
                            textAlign: "center",
                            fontSize: 13,
                          }}
                        >
                          {x.qty}
                        </span>
                        <button
                          style={{
                            background: "none",
                            border: `1px solid ${C.border}`,
                            borderRadius: 5,
                            width: 24,
                            height: 24,
                            cursor: "pointer",
                          }}
                          onClick={() =>
                            setCart((c) =>
                              c.map((i) =>
                                i.id === x.id ? { ...i, qty: i.qty + 1 } : i
                              )
                            )
                          }
                        >
                          +
                        </button>
                        <span
                          style={{
                            minWidth: 60,
                            textAlign: "right",
                            fontWeight: 700,
                            color: C.darkGreen,
                            fontSize: 13,
                          }}
                        >
                          R{(x.price * x.qty).toFixed(2)}
                        </span>
                      </div>
                    ))}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "10px 0 0",
                        fontWeight: 700,
                        fontSize: 15,
                        color: C.text,
                      }}
                    >
                      <span>Total</span>
                      <span style={{ color: C.darkGreen }}>
                        R{cartTotal.toFixed(2)}
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                      <button
                        style={{ ...btnParch, flex: 1 }}
                        onClick={() => setCartOpen(false)}
                      >
                        Keep shopping
                      </button>
                      <button
                        style={{ ...btnGreen, flex: 1 }}
                        onClick={() => setStep(1)}
                      >
                        Checkout →
                      </button>
                    </div>
                  </>
                )}
              </>
            )}

            {step === 1 && (
              <>
                <h3 style={{ margin: "0 0 0.25rem", color: C.darkGreen }}>
                  Your details
                </h3>
                <p
                  style={{
                    fontSize: 12,
                    color: C.textLight,
                    margin: "0 0 0.75rem",
                  }}
                >
                  So we can confirm and arrange your order
                </p>
                {[
                  ["Full name", "name", "text", "Jane Smith"],
                  ["Phone / WhatsApp", "phone", "tel", "+27 82 000 0000"],
                  ["Email address", "email", "email", "you@example.com"],
                  [
                    "Delivery address",
                    "address",
                    "text",
                    "Street, City, Province, Code",
                  ],
                ].map(([l, k, t, ph]) => (
                  <div key={k}>
                    <label
                      style={{
                        fontSize: 12,
                        color: C.textMid,
                        display: "block",
                        marginBottom: 3,
                        marginTop: 10,
                      }}
                    >
                      {l}
                    </label>
                    <input
                      style={inputStyle}
                      type={t}
                      placeholder={ph}
                      value={cust[k]}
                      onChange={(e) =>
                        setCust((d) => ({ ...d, [k]: e.target.value }))
                      }
                    />
                  </div>
                ))}
                <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
                  <button
                    style={{ ...btnParch, flex: 1 }}
                    onClick={() => setStep(0)}
                  >
                    ← Back
                  </button>
                  <button
                    style={{ ...btnGreen, flex: 1 }}
                    onClick={() => setStep(2)}
                    disabled={!cust.name || !cust.phone}
                  >
                    Review order →
                  </button>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h3 style={{ margin: "0 0 0.75rem", color: C.darkGreen }}>
                  Review & pay
                </h3>
                <div
                  style={{
                    background: C.parchment,
                    border: `1px solid ${C.border}`,
                    borderRadius: 8,
                    padding: "0.75rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  {cart.map((x) => (
                    <div
                      key={x.id}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: 13,
                        padding: "3px 0",
                      }}
                    >
                      <span>
                        {x.qty}× {x.name}
                      </span>
                      <span style={{ fontWeight: 600 }}>
                        R{(x.price * x.qty).toFixed(2)}
                      </span>
                    </div>
                  ))}
                  <div
                    style={{
                      borderTop: `1px solid ${C.border}`,
                      marginTop: 6,
                      paddingTop: 6,
                      display: "flex",
                      justifyContent: "space-between",
                      fontWeight: 700,
                      fontSize: 14,
                    }}
                  >
                    <span>Total</span>
                    <span style={{ color: C.darkGreen }}>
                      R{cartTotal.toFixed(2)}
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    background: "#fff8e8",
                    border: "1px solid #e8d08a",
                    borderRadius: 8,
                    padding: "0.8rem",
                    fontSize: 12,
                    color: C.brown,
                    marginBottom: "0.9rem",
                    lineHeight: 1.7,
                  }}
                >
                  <strong>How to pay:</strong> Clicking "Pay now" opens your
                  secure YOCO payment page. Please enter{" "}
                  <strong>R{cartTotal.toFixed(2)}</strong> as the amount. Your
                  order summary will also be sent to us on WhatsApp
                  automatically — please send it so we can confirm your order.
                </div>
                <button
                  style={{
                    ...btnGreen,
                    width: "100%",
                    padding: 12,
                    fontSize: 14,
                    marginBottom: 8,
                  }}
                  onClick={handlePay}
                >
                  Pay R{cartTotal.toFixed(2)} via YOCO →
                </button>
                <button
                  style={{ ...btnParch, width: "100%" }}
                  onClick={() => setStep(1)}
                >
                  ← Back
                </button>
              </>
            )}

            {step === 3 && (
              <>
                <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
                  <div style={{ fontSize: 42, marginBottom: "0.75rem" }}>
                    🌱
                  </div>
                  <h3 style={{ color: C.darkGreen, margin: "0 0 0.5rem" }}>
                    Thank you, {cust.name}!
                  </h3>
                  <p
                    style={{ fontSize: 13, color: C.textMid, lineHeight: 1.7 }}
                  >
                    Your YOCO payment page has opened — please complete the
                    payment of <strong>R{cartTotal.toFixed(2)}</strong>.<br />
                    <br />
                    Your order summary has been prepared in WhatsApp — please
                    send it to us so we can confirm and arrange your delivery.
                  </p>
                  <button
                    style={{
                      ...btnGreen,
                      marginTop: "1rem",
                      padding: "10px 28px",
                    }}
                    onClick={() => {
                      setCart([]);
                      setCartOpen(false);
                      setStep(0);
                      setCust({ name: "", phone: "", email: "", address: "" });
                    }}
                  >
                    Done — happy growing!
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
