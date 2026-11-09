import { Anchor, ArrowRight, Check, CheckCircle2, Clock, Fish, MapPin, Minus, Package, PhoneCall, Plus, Search, ShieldCheck, ShoppingBag, Sparkles, Star, Truck, Users } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";

function MarketSection0() {
  const features = [
    "Same-Day Boat Arrival",
    "Sustainably Tagged & Tracked",
    "Shipped in Recycled Seaweed Chill-Packs"
  ];
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-r from-card via-card to-secondary/30 p-6 sm:p-10 lg:p-12 space-y-6 w-full">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-widest">
            <Fish className="h-3.5 w-3.5" />
            Pier 17 Cold-Chain Fishmonger
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-bold text-foreground tracking-tight">
            The Dockside Fishmonger
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Shipped overnight across the country in biodegradable seaweed insulation or ready for immediate dockside pickup at Pier 17.
          </p>

          {/* Feature badges */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {features.map((feat, i) => (
              <Badge key={i} variant="outline" className="border-border bg-background text-foreground py-1 px-3 text-xs flex items-center gap-1.5 font-medium">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                {feat}
              </Badge>
            ))}
          </div>
        </div>

        {/* Quick Cart / Pickup summary card */}
        <div className="w-full lg:w-80 shrink-0 p-5 rounded-2xl bg-card border border-border shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Market Status</span>
            <span className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Live Dock
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-primary" /> Pickup Location:
              </span>
              <span className="font-semibold text-foreground">Pier 17, Slip 4</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground flex items-center gap-1.5">
                <Truck className="h-3.5 w-3.5 text-primary" /> Express Overnight:
              </span>
              <span className="font-semibold text-foreground">Order by 1:00 PM</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground flex items-center gap-1.5">
                <Package className="h-3.5 w-3.5 text-primary" /> Chill Packaging:
              </span>
              <span className="font-semibold text-foreground">Seaweed Thermal Packs</span>
            </div>
          </div>

          <div className="pt-2 border-t border-border/80">
            <p className="text-[11px] text-muted-foreground text-center">
              Need a custom whole fish filleted? Call the market stall at (617) 555-8942
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MarketSection1() {
  const categories = [
    "All Catches",
    "Live Shellfish",
    "Finfish Fillets",
    "Pantry Sauces & Butters"
  ];

  const [activeCategory, setActiveCategory] = useState("All Catches");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [lastAdded, setLastAdded] = useState<string | null>(null);

  const products = [
    {
      id: "sp-01",
      name: "Live Gulf of Maine Silver Prawns",
      category: "Live Shellfish",
      price: "$34.00",
      rawPrice: 34.0,
      unit: "1 lb live pack (~14-16 prawns)",
      status: "In Stock (Dock Harvest)",
      badges: ["Day Boat Catch", "Wild Caught"],
      rating: 4.9
    },
    {
      id: "sp-02",
      name: "Damariscotta River Glidden Point Oysters",
      category: "Live Shellfish",
      price: "$48.00",
      rawPrice: 48.0,
      unit: "Bag of 24 live oysters",
      status: "Harvested Today",
      badges: ["Live Shuck", "Cold Water"],
      rating: 5.0
    },
    {
      id: "sp-03",
      name: "Line-Caught Atlantic Halibut Fillet",
      category: "Finfish Fillets",
      price: "$38.50",
      rawPrice: 38.5,
      unit: "16 oz skin-on portion",
      status: "Limited Haul",
      badges: ["Sustainably Line-Caught"],
      rating: 4.8
    },
    {
      id: "sp-04",
      name: "Wood-Fired Prawn Compound Butter",
      category: "Pantry Sauces & Butters",
      price: "$16.00",
      rawPrice: 16.0,
      unit: "8 oz glass jar",
      status: "Chef Crafted",
      badges: ["House Recipe"],
      rating: 4.9
    },
    {
      id: "sp-05",
      name: "Silver Prawn Signature Sea Salt Mignonette",
      category: "Pantry Sauces & Butters",
      price: "$14.00",
      rawPrice: 14.0,
      unit: "250 ml glass bottle",
      status: "In Stock",
      badges: ["Artisanal"],
      rating: 4.7
    },
    {
      id: "sp-06",
      name: "Coastal Seafood Broth Base",
      category: "Pantry Sauces & Butters",
      price: "$18.00",
      rawPrice: 18.0,
      unit: "32 oz pouch (Frozen Fresh)",
      status: "Simmered 14 Hours",
      badges: ["Rich Umami"],
      rating: 4.9
    }
  ];

  const filteredProducts = products.filter((p) => {
    const matchesCat = activeCategory === "All Catches" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const addToCart = (prod: typeof products[0]) => {
    setCart(prev => ({ ...prev, [prod.id]: (prev[prod.id] || 0) + 1 }));
    setLastAdded(prod.name);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => {
      const current = prev[id] || 0;
      const next = current + delta;
      if (next <= 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: next };
    });
  };

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const cartTotal = products.reduce((acc, p) => acc + (cart[p.id] || 0) * p.rawPrice, 0);
  return (
    <div className="space-y-6 w-full">
      {/* Filter & Search Bar */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-4 rounded-2xl bg-card border border-border">
        {/* Category chips */}
        <div className="flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search & Cart counter indicator */}
        <div className="flex items-center gap-3">
          <div className="relative w-full sm:w-56">
            <Search className="h-3.5 w-3.5 absolute left-3 top-2.5 text-muted-foreground" />
            <Input
              placeholder="Filter catches..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-9 pl-9 text-xs bg-background border-border"
            />
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground border border-border text-xs shrink-0">
            <ShoppingBag className="h-4 w-4 text-primary" />
            <span className="font-semibold">{cartCount} items</span>
            <span className="text-muted-foreground">(${cartTotal.toFixed(2)})</span>
          </div>
        </div>
      </div>

      {/* Added Feedback Banner */}
      {lastAdded && (
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs flex items-center justify-between">
          <span className="flex items-center gap-2 font-medium">
            <Check className="h-4 w-4" /> Added "{lastAdded}" to your dockside order.
          </span>
          <button 
            onClick={() => setLastAdded(null)}
            className="text-[11px] underline hover:text-emerald-900 dark:hover:text-emerald-200"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((prod) => {
          const qtyInCart = cart[prod.id] || 0;
          return (
            <Card
              key={prod.id}
              className="border-border bg-card flex flex-col justify-between hover:border-primary/50 transition-all duration-300"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {prod.badges.map((b, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="border-primary/30 text-primary bg-primary/10 text-[10px] font-medium"
                      >
                        {b}
                      </Badge>
                    ))}
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground font-mono">
                    {prod.status}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Packaging: <span className="font-medium text-foreground">{prod.unit}</span>
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-2xl font-heading font-bold text-foreground font-mono">
                    {prod.price}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-amber-500 font-semibold">
                    <Star className="h-3.5 w-3.5 fill-amber-500" />
                    <span>{prod.rating}</span>
                    <span className="text-muted-foreground font-normal">/ 5.0</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-border/60">
                {qtyInCart > 0 ? (
                  <div className="flex items-center justify-between gap-3 pt-3">
                    <div className="flex items-center gap-2 border border-border rounded-lg p-1 bg-muted">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-7 w-7 text-foreground"
                        onClick={() => updateQuantity(prod.id, -1)}
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </Button>
                      <span className="text-xs font-mono font-bold px-2">{qtyInCart}</span>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-7 w-7 text-foreground"
                        onClick={() => updateQuantity(prod.id, 1)}
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      In Your Order
                    </span>
                  </div>
                ) : (
                  <Button
                    onClick={() => addToCart(prod)}
                    className="w-full mt-3 bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold gap-2"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    Add to Dockside Order
                  </Button>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function MarketSection2() {
  const [orderedKit, setOrderedKit] = useState<string | null>(null);

  const kits = [
    {
      id: "kit-1",
      name: "The Silver Prawn Feast for 4",
      price: "$165.00",
      serves: "4 Adults",
      badge: "Most Popular",
      includes: [
        "2 lbs Live Silver Prawns (Casco Bay)",
        "12 Glidden Point Oysters & Lemons",
        "Wood-Fired Compound Butter (8 oz)",
        "House Sea-Salt Baguette Loaf",
        "Handcrafted Oyster Shucking Knife & Guide"
      ]
    },
    {
      id: "kit-2",
      name: "The Maine Raw Bar Master Kit",
      price: "$130.00",
      serves: "2-4 Adults",
      badge: "Gift Favorite",
      includes: [
        "24 Cold Water Maine Oysters (Mixed Varietals)",
        "12 Chilled Prawns with Seaweed Salt",
        "Silver Prawn Mignonette & Fresh Horseradish",
        "Hand-forged Shucking Knife & Heavy Cloth Shucking Towel",
        "Chef Soren's Oyster Shucking Master Video Access"
      ]
    }
  ];

  const handleKitOrder = (kitName: string) => {
    setOrderedKit(kitName);
    window.setTimeout(() => {
      setOrderedKit(null);
    }, 2500);
  };
  return (
    <div className="space-y-6 w-full">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 text-primary text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="h-3.5 w-3.5" />
          Complete Dining At Home
        </div>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground tracking-tight">
          Seafood Feast Kits & Masterclass Boxes
        </h2>
        <p className="text-muted-foreground text-sm">
          Everything needed to recreate the Silver Prawn hearth and raw bar experience in your home kitchen.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {kits.map((kit) => (
          <Card
            key={kit.id}
            className="border-border bg-card overflow-hidden hover:border-primary/40 transition-colors flex flex-col justify-between"
          >
            <div className="p-6 sm:p-8 space-y-5">
              <div className="flex items-start justify-between gap-3">
                <Badge className="bg-primary text-primary-foreground font-semibold text-xs">
                  {kit.badge}
                </Badge>
                <span className="text-xs text-muted-foreground flex items-center gap-1 font-medium">
                  <Users className="h-3.5 w-3.5 text-primary" /> {kit.serves}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  {kit.name}
                </h3>
                <span className="font-mono text-2xl font-bold text-primary block">
                  {kit.price}
                </span>
              </div>

              <div className="space-y-2 pt-2 border-t border-border/80">
                <p className="text-xs uppercase tracking-wider font-semibold text-foreground">
                  What's Included in the Box:
                </p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  {kit.includes.map((inc, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0">
              <Button
                onClick={() => handleKitOrder(kit.name)}
                className="w-full bg-secondary hover:bg-primary hover:text-primary-foreground text-secondary-foreground font-semibold py-2.5 transition-colors gap-2"
              >
                {orderedKit === kit.name ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    Box Added to Order!
                  </>
                ) : (
                  <>
                    <Package className="h-4 w-4" />
                    Add {kit.name} to Cart
                  </>
                )}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function MarketSection3() {
  return (
    <div className="rounded-3xl border border-border bg-muted/30 p-6 sm:p-10 lg:p-12 space-y-8 w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <Badge variant="outline" className="border-primary/40 bg-primary/10 text-primary text-xs font-semibold">
            Dock Logistics & Cold-Chain
          </Badge>
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
            Dockside Pickup & Shipping Logistics
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <PhoneCall className="h-4 w-4 text-primary" />
          <span>Market Desk: <strong className="text-foreground">(617) 555-8942</strong></span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-border bg-card p-6 space-y-3">
          <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
            <MapPin className="h-5 w-5" />
          </div>
          <h4 className="font-heading font-bold text-lg text-foreground">Dockside Pier Pickup</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Mon–Sat 9:00 AM – 5:00 PM at Pier 17 slip booth. Same-day orders ready in 90 minutes. Simply pull into the reserved market slip bays.
          </p>
        </Card>

        <Card className="border-border bg-card p-6 space-y-3">
          <div className="h-10 w-10 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
            <Truck className="h-5 w-5" />
          </div>
          <h4 className="font-heading font-bold text-lg text-foreground">National Express Air</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Packed in recycled wool and compostable gel ice. Orders placed before 1:00 PM EST deliver next business day anywhere in the continental US.
          </p>
        </Card>

        <Card className="border-border bg-card p-6 space-y-3">
          <div className="h-10 w-10 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <h4 className="font-heading font-bold text-lg text-foreground">100% Pier-Fresh Promise</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            If your catch doesn't arrive ocean-cold and pristine, we replace it or refund with zero hassle. Our skippers stand behind every shell.
          </p>
        </Card>
      </div>
    </div>
  );
}

export default function Market() {
  return (
    <div className="w-full min-w-0 overflow-x-hidden">
      <div className="flex flex-col gap-6 lg:gap-8 w-full min-w-0">
        <MarketSection0 />
        <MarketSection1 />
        <MarketSection2 />
        <MarketSection3 />
      </div>
    </div>
  );
}
