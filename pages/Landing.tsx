import { Anchor, ArrowRight, ArrowUpRight, Award, Calendar, Check, CheckCircle, ChevronLeft, ChevronRight, Clock, Compass, ExternalLink, Fish, Flame, Info, Phone, Quote, RefreshCw, Search, Shell, ShieldCheck, Sparkles, Star, Thermometer, Users, Waves } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

function LandingSection0() {
  const navigate = useNavigate();
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card/90 to-secondary/30 p-8 sm:p-12 lg:p-16 shadow-lg w-full">
      {/* Atmospheric decorative water/grid elements */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Live Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/80 border border-border text-xs sm:text-sm font-medium text-foreground backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="font-semibold text-primary">Today's Catch:</span>
          <span className="truncate">Cold Water Maine Silver Prawns & Damariscotta Oysters</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground tracking-tight leading-[1.1] max-w-3xl">
          Wild Waters. Pristine Harvest. <span className="text-primary italic font-serif">Uncompromising Craft.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
          Perched on the harbor pier, Silver Prawn brings cold-water day-boat catches, live shell tanks, and embers-kissed coastal dining directly to your table.
        </p>

        {/* Quick action buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
          <Button
            size="lg"
            onClick={() => navigate("/reservations")}
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 shadow-md gap-2 text-base"
          >
            <Anchor className="h-5 w-5" />
            Reserve a Table
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate("/menu")}
            className="w-full sm:w-auto border-border text-foreground hover:bg-muted font-medium px-7 py-6 text-base gap-2"
          >
            View Today's Menu
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Live Dock Highlights Bar */}
        <div className="pt-8 w-full max-w-2xl border-t border-border/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
          <div className="space-y-0.5">
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Harbor Depth</p>
            <p className="text-base font-semibold text-foreground">32 Fathoms</p>
            <p className="text-[11px] text-muted-foreground">Cold tide sweep</p>
          </div>
          <div className="space-y-0.5">
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Trawlers Docked</p>
            <p className="text-base font-semibold text-foreground">3 Vessels</p>
            <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">Pier 8 Unloaded</p>
          </div>
          <div className="space-y-0.5">
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Hearth Wood</p>
            <p className="text-base font-semibold text-foreground">Aged White Oak</p>
            <p className="text-[11px] text-muted-foreground">Embers at 700°F</p>
          </div>
          <div className="space-y-0.5">
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Oyster Bar</p>
            <p className="text-base font-semibold text-foreground">8 Varietals</p>
            <p className="text-[11px] text-primary font-medium">Shucked to order</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LandingSection1() {
  const categories = ["All", "Raw Bar", "Wood-Fired", "Chilled Platters"];
  const [activeCategory, setActiveCategory] = useState("All");

  const dishes = [
    {
      id: "dish-1",
      name: "Embers-Charred Silver Prawns",
      category: "Wood-Fired",
      price: "$34",
      origin: "Casco Bay, Gulf of Maine",
      prep: "Charred over White Oak",
      description: "Jumbo day-boat prawns split and grilled in their sweet shells, basted with preserved Meyer lemon butter, fermented chili crisp, and coastal sea purslane."
    },
    {
      id: "dish-2",
      name: "The Grand Harbor Plateau",
      category: "Chilled Platters",
      price: "$115",
      origin: "New England Estuaries",
      prep: "Crushed Sea-Water Ice",
      description: "12 seasonal bivalves, poached Maine lobster tail, cold-water spot prawns, razor clam ceviche, house green mignonette, and burnt cocktail sauce."
    },
    {
      id: "dish-3",
      name: "Glidden Point Damariscotta Oysters",
      category: "Raw Bar",
      price: "$24 / half-dozen",
      origin: "Damariscotta River, ME",
      prep: "Live Shuck to Order",
      description: "Deep cups, intense oceanic brine, crisp kelp-like finish. Shucked cold and served with Champagne vinegar shallot mignonette and fresh horseradish."
    },
    {
      id: "dish-4",
      name: "Wood-Fired Halibut Collar",
      category: "Wood-Fired",
      price: "$42",
      origin: "Georges Bank High Seas",
      prep: "Slow Smoked then Glazed",
      description: "Succulent, gelatin-rich cut basted in brown butter dashi, charred scallions, ginger oil, and sea greens. Limited to 15 portions per service."
    },
    {
      id: "dish-5",
      name: "Diver Scallop Crudo",
      category: "Raw Bar",
      price: "$22",
      origin: "Cape Cod Bay",
      prep: "Razor Thin Raw Slice",
      description: "Hand-harvested diver scallops, finger lime pearls, winter citrus vinaigrette, crushed pink peppercorns, and cold-pressed olive nectar."
    },
    {
      id: "dish-6",
      name: "Cast-Iron Manila Clams & Chorizo",
      category: "Wood-Fired",
      price: "$28",
      origin: "Wellfleet Flats",
      prep: "Seared in Cider Broth",
      description: "Sweet clams steamed open in smoky Basque chorizo broth, sea salt butter, and grilled sourdough toast rubbed with garlic."
    }
  ];

  const filteredDishes = activeCategory === "All" 
    ? dishes 
    : dishes.filter(d => d.category === activeCategory);
  return (
    <div className="space-y-8 w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-primary text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5" />
            Chef's Masterwork
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground tracking-tight">
            Signatures of the Silver Prawn
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
            Sustainably harvested from Gulf of Maine & North Atlantic waters, cooked over sea-oak coals or served raw on crushed ice.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-muted rounded-xl border border-border">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Dishes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDishes.map((dish) => (
          <Card
            key={dish.id}
            className="group overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between gap-3">
                <Badge
                  variant="outline"
                  className={
                    dish.category === "Wood-Fired"
                      ? "border-amber-500/30 text-amber-600 dark:text-amber-400 bg-amber-500/10"
                      : dish.category === "Raw Bar"
                      ? "border-blue-500/30 text-blue-600 dark:text-blue-400 bg-blue-500/10"
                      : "border-primary/30 text-primary bg-primary/10"
                  }
                >
                  {dish.category === "Wood-Fired" && <Flame className="h-3 w-3 mr-1" />}
                  {dish.category === "Raw Bar" && <Waves className="h-3 w-3 mr-1" />}
                  {dish.category}
                </Badge>
                <span className="text-lg font-heading font-bold text-foreground font-mono">
                  {dish.price}
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                  {dish.name}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                  {dish.description}
                </p>
              </div>

              <div className="pt-2 border-t border-border/60 grid grid-cols-2 gap-2 text-[11px] text-muted-foreground">
                <div>
                  <span className="font-semibold text-foreground block">Harvest Site:</span>
                  <span className="truncate block">{dish.origin}</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground block">Preparation:</span>
                  <span className="truncate block">{dish.prep}</span>
                </div>
              </div>
            </div>

            <div className="px-6 pb-6 pt-0">
              <Link
                to="/reservations"
                className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold py-2 px-3 rounded-lg bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors group-hover:shadow-sm"
              >
                <span>Reserve Table to Taste</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function LandingSection2() {
  const steps = [
    {
      step: "01",
      time: "04:45 AM",
      title: "The Pier Landing",
      description: "Day-boat skippers tie off at Pier 17. Live silver prawns and deep-sea scallops are inspected hand by hand, graded by shell integrity and natural moisture."
    },
    {
      step: "02",
      time: "09:00 AM",
      title: "Raw Shuck & Salt Curation",
      description: "Bivalves are chilled in micro-filtered ocean sea water tanks to preserve pristine natural salinity, shucked moments before tasting."
    },
    {
      step: "03",
      time: "05:00 PM",
      title: "Oak Hearth & Table Service",
      description: "Kissed by white-oak embers with preserved lemon, smoked sea salt, and cold-pressed botanical oils as the dining room fills with coastal aromas."
    }
  ];
  return (
    <div className="rounded-3xl border border-border bg-muted/40 p-6 sm:p-10 lg:p-12 space-y-10 w-full">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 text-primary text-xs font-semibold uppercase tracking-widest">
          <Compass className="h-3.5 w-3.5" />
          Daily Maritime Rite
        </div>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground tracking-tight">
          From Dockside Haul to Wood-Fired Hearth
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base">
          Traceability is our reverence. Every prawn, bivalve, and finfish is logged with skipper name and haul coordinates.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {steps.map((item, index) => (
          <Card key={item.step} className="border-border bg-card relative overflow-hidden flex flex-col justify-between">
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-heading text-4xl font-bold text-primary/30">
                  {item.step}
                </span>
                <Badge variant="outline" className="border-border bg-muted text-foreground text-xs font-mono font-medium flex items-center gap-1">
                  <Clock className="h-3 w-3 text-primary" />
                  {item.time}
                </Badge>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-heading font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="px-6 py-3 bg-muted/50 border-t border-border/60 flex items-center justify-between text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                Verified Dockside Log
              </span>
              <span className="font-mono text-primary font-semibold">Phase {index + 1}/3</span>
            </div>
          </Card>
        ))}
      </div>

      {/* Sourcing guarantee footer callout */}
      <div className="p-4 rounded-xl bg-card border border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <Anchor className="h-4 w-4" />
          </div>
          <div>
            <span className="font-semibold text-foreground block">Zero Frozen Finfish Pledge</span>
            <span className="text-muted-foreground">We partner exclusively with day-boat skippers who return to harbor within 18 hours of netting.</span>
          </div>
        </div>
        <span className="text-primary font-semibold hover:underline cursor-pointer shrink-0">
          Read Our Fisher Charter →
        </span>
      </div>
    </div>
  );
}

function LandingSection3() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");

  const catches = [
    {
      id: "c-1",
      species: "Jumbo Silver Spot Prawn",
      origin: "Casco Bay, ME",
      method: "Low-Impact Trap",
      price: "$28 / half-lb",
      status: "Fresh In Live Tanks",
      type: "shellfish"
    },
    {
      id: "c-2",
      species: "Glidden Point Oysters",
      origin: "Damariscotta River",
      method: "Hand-Tumbled",
      price: "$4.25 ea",
      status: "On Shuck Bar",
      type: "shellfish"
    },
    {
      id: "c-3",
      species: "Atlantic Halibut Collar",
      origin: "Georges Bank",
      method: "Hook & Line",
      price: "$42 dinner",
      status: "Wood-Fired Tonight (14 Portions)",
      type: "finfish"
    },
    {
      id: "c-4",
      species: "Day-Boat Diver Scallops",
      origin: "Cape Cod Shoals",
      method: "Single-Day Diver",
      price: "$32 / lb market",
      status: "Dry Pack (No Soak)",
      type: "shellfish"
    },
    {
      id: "c-5",
      species: "Striped Bass Collar & Loin",
      origin: "Rhode Island Sound",
      method: "Rod & Reel",
      price: "$38 dinner",
      status: "Hearth Roasted",
      type: "finfish"
    }
  ];

  const filteredCatches = catches.filter(item => {
    const matchesSearch = item.species.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.origin.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === "all" || item.type === filterType;
    return matchesSearch && matchesType;
  });
  return (
    <Card className="border-border bg-card overflow-hidden shadow-sm w-full">
      <CardHeader className="border-b border-border p-6 sm:p-8 bg-muted/20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="border-primary/40 bg-primary/10 text-primary text-xs font-semibold">
                Live Dock Log
              </Badge>
              <span className="text-xs text-muted-foreground flex items-center gap-1 font-mono">
                <Clock className="h-3.5 w-3.5 text-primary" />
                Updated today at 11:15 AM EST
              </span>
            </div>
            <CardTitle className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Today's Ticker & Raw Board
            </CardTitle>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Direct inventory from day-boats docked this morning at the Harbor Fish Pier.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border border-border text-xs">
              <Thermometer className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Harbor Water:</span>
              <span className="font-semibold text-foreground font-mono">48°F Salt Sea</span>
            </div>
            <Link
              to="/market"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            >
              <span>Market Pre-Order</span>
              <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Filter search and type buttons */}
        <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
          <div className="relative max-w-xs">
            <Search className="h-3.5 w-3.5 absolute left-3 top-2.5 text-muted-foreground" />
            <Input
              placeholder="Filter species or bay..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-8 pl-8 text-xs bg-background border-border"
            />
          </div>

          <div className="flex items-center gap-1.5">
            {["all", "shellfish", "finfish"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterType(cat)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium capitalize transition-colors ${
                  filterType === cat
                    ? "bg-primary text-primary-foreground font-semibold"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0 overflow-x-auto">
        <Table>
          <TableHeader className="bg-muted/40">
            <TableRow className="border-border">
              <TableHead className="font-heading font-bold text-foreground text-xs uppercase tracking-wider">
                Species / Lot
              </TableHead>
              <TableHead className="font-heading font-bold text-foreground text-xs uppercase tracking-wider">
                Origin
              </TableHead>
              <TableHead className="font-heading font-bold text-foreground text-xs uppercase tracking-wider hidden sm:table-cell">
                Harvest Method
              </TableHead>
              <TableHead className="font-heading font-bold text-foreground text-xs uppercase tracking-wider">
                Market / Table
              </TableHead>
              <TableHead className="font-heading font-bold text-foreground text-xs uppercase tracking-wider text-right">
                Dock Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCatches.map((item) => (
              <TableRow key={item.id} className="border-border hover:bg-muted/30 transition-colors">
                <TableCell className="font-medium text-foreground py-3.5">
                  <div className="flex items-center gap-2">
                    <Fish className="h-4 w-4 text-primary shrink-0" />
                    <div>
                      <span className="font-semibold block text-sm">{item.species}</span>
                      <span className="text-[11px] text-muted-foreground sm:hidden">{item.method}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-xs text-muted-foreground">
                  {item.origin}
                </TableCell>
                <TableCell className="text-xs text-muted-foreground hidden sm:table-cell">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-muted border border-border/60">
                    {item.method}
                  </span>
                </TableCell>
                <TableCell className="text-xs font-mono font-semibold text-foreground">
                  {item.price}
                </TableCell>
                <TableCell className="text-right">
                  <Badge
                    variant="outline"
                    className={`text-[11px] font-medium ${
                      item.status.includes("Fresh") || item.status.includes("Shuck")
                        ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                        : "border-primary/30 bg-primary/10 text-primary"
                    }`}
                  >
                    {item.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

function LandingSection4() {
  const [activeIdx, setActiveIdx] = useState(0);

  const reviews = [
    {
      author: "Coastal Culinary Review",
      role: "Editorial Inspection 2024",
      badge: "Editor's Pick 2024",
      quote: "Silver Prawn proves that ocean-to-table isn't just a marketing slogan—it's an uncompromising coastal devotion. The wood-fired king prawns are legendary.",
      rating: 5
    },
    {
      author: "Eater Maritime Edition",
      role: "Dining Guide",
      badge: "Top 10 Seafood Dining",
      quote: "The cleanest raw bar north of Boston. You can taste the chill of the Atlantic tide in every oyster. Exceptional curation of natural wines too.",
      rating: 5
    },
    {
      author: "Chef Marcus Vance",
      role: "Guest Chef Spotlight",
      badge: "Visiting Master",
      quote: "An unmatched dining room overlooking the active trawler slips. Order the Grand Silver Plateau and thank yourself later.",
      rating: 5
    }
  ];
  return (
    <div className="space-y-8 w-full">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 text-primary text-xs font-semibold uppercase tracking-widest">
            <Award className="h-3.5 w-3.5" />
            Critical Acclaim
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground tracking-tight">
            Guest Voices & Accolades
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl">
            Notes from food editors, maritime travelers, and seaside regulars who share our love of the Atlantic.
          </p>
        </div>

        {/* Navigation dots */}
        <div className="flex items-center gap-2">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              aria-label={`View review ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                activeIdx === idx ? "w-8 bg-primary" : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((rev, index) => (
          <Card
            key={rev.author}
            onClick={() => setActiveIdx(index)}
            className={`border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
              activeIdx === index
                ? "border-primary/60 bg-card shadow-md scale-[1.01]"
                : "border-border bg-card/60 hover:border-border/80"
            }`}
          >
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="border-primary/30 text-primary bg-primary/10 text-[11px] font-medium">
                  {rev.badge}
                </Badge>
                <div className="flex items-center text-amber-500">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-500" />
                  ))}
                </div>
              </div>

              <p className="text-sm sm:text-base italic text-foreground/90 font-serif leading-relaxed">
                "{rev.quote}"
              </p>
            </div>

            <div className="px-6 py-4 bg-muted/30 border-t border-border flex items-center justify-between">
              <div>
                <p className="font-heading font-semibold text-sm text-foreground">{rev.author}</p>
                <p className="text-[11px] text-muted-foreground">{rev.role}</p>
              </div>
              <CheckCircle className="h-4 w-4 text-primary shrink-0" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function LandingSection5() {
  const navigate = useNavigate();
  const [party, setParty] = useState("2");
  const [dateChoice, setDateChoice] = useState("today");
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card to-primary/5 p-8 sm:p-12 lg:p-16 text-center shadow-lg w-full">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="h-3.5 w-3.5" />
          Evening Tide Seatings
        </div>

        <h2 className="text-3xl sm:text-5xl font-heading font-bold text-foreground tracking-tight leading-tight">
          Experience The Harvest Tonight
        </h2>

        <p className="text-sm sm:text-lg text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
          Join us at the raw bar counter or reserve a table overlooking the marina sunset. Walk-ins always welcomed at the oyster bar.
        </p>

        {/* Quick inline date/guest selector */}
        <Card className="max-w-xl mx-auto border-border bg-background/90 backdrop-blur p-4 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                <Users className="h-3 w-3 text-primary" /> Guests
              </label>
              <select
                value={party}
                onChange={(e) => setParty(e.target.value)}
                className="w-full h-9 rounded-md border border-border bg-card px-2.5 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="6">6 Guests</option>
                <option value="8">8+ Guests (Call)</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                <Calendar className="h-3 w-3 text-primary" /> Evening
              </label>
              <select
                value={dateChoice}
                onChange={(e) => setDateChoice(e.target.value)}
                className="w-full h-9 rounded-md border border-border bg-card px-2.5 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="today">Tonight (After 6PM)</option>
                <option value="tomorrow">Tomorrow Evening</option>
                <option value="friday">This Friday</option>
                <option value="saturday">This Saturday</option>
              </select>
            </div>

            <div className="flex items-end">
              <Button
                onClick={() => navigate(`/reservations?party=${party}&date=${dateChoice}`)}
                className="w-full h-9 bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold"
              >
                Find Table <ArrowRight className="h-3.5 w-3.5 ml-1" />
              </Button>
            </div>
          </div>
        </Card>

        <div className="pt-2 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            No cancellation fee up to 2 hours prior
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5 text-primary" />
            Parties of 7 or more please contact private dining: (617) 555-8942
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Landing() {
  return (
    <div className="w-full min-w-0 overflow-x-hidden">
      <div className="flex flex-col gap-8 lg:gap-10 w-full min-w-0">
        <LandingSection0 />
        <LandingSection1 />
        <LandingSection2 />
        <LandingSection3 />
        <LandingSection4 />
        <LandingSection5 />
      </div>
    </div>
  );
}
