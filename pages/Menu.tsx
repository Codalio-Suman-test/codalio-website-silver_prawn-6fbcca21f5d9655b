import { ArrowRight, Clock, Compass, Filter, Flame, Search, Shell, ShieldCheck, Sparkles, Utensils, Waves, Wine } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";

function MenuSection0() {
  return (
    <div className="text-center max-w-3xl mx-auto space-y-4 w-full pt-4 pb-2">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">
        <Compass className="h-3.5 w-3.5 text-primary" />
        <span>Tide-Driven Culinary Roster</span>
      </div>

      <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground tracking-tight">
        The Coastal Dining Menu
      </h1>

      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
        Every item is dictated by today's tides, local trawler landings, and pristine seasonal waters. Prepared simply with fire, sea salt, and cold-pressed citrus.
      </p>

      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/60 border border-border text-xs text-muted-foreground">
        <Clock className="h-4 w-4 text-primary shrink-0" />
        <span>Dinner service starts at 4:30 PM daily. Raw bar open until midnight.</span>
      </div>
    </div>
  );
}

function MenuSection1() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [dietaryFilter, setDietaryFilter] = useState("");

  const categories = [
    { id: "all", name: "Full Catch Menu" },
    {
      id: "raw-bar",
      name: "Raw Bar & Crudos",
      items: [
        {
          name: "Gulf of Maine Silver Prawn Crudo",
          price: "$24",
          origin: "Casco Bay",
          description: "Yuzu kosho oil, sea fennel, cured shallot crisp, finger lime pearls, finished with sea brine oil.",
          dietary: ["Gluten-Free", "Raw", "Wild Catch"]
        },
        {
          name: "Chilled Glidden Point Oysters (Half Dozen)",
          price: "$26",
          origin: "Damariscotta River",
          description: "Pink peppercorn mignonette, shaved horseradish, fermented lemon brine, shucked to order on crushed ice.",
          dietary: ["Gluten-Free", "Raw"]
        },
        {
          name: "Bluefin Tuna Tartare",
          price: "$28",
          origin: "Georges Bank",
          description: "Tallow toasted brioche, smoked dulse, sea urchin emulsion, and crispy capers.",
          dietary: ["Sustainable"]
        },
        {
          name: "Razor Clam Ceviche",
          price: "$22",
          origin: "Cape Cod Sound",
          description: "Serrano chili, charred tomatillo, cilantro blossoms, puffed wild rice.",
          dietary: ["Gluten-Free", "Raw"]
        }
      ]
    },
    {
      id: "wood-fire",
      name: "Wood-Fired Hearth Catches",
      items: [
        {
          name: "Charred Giant Silver Spot Prawns",
          price: "$44",
          origin: "Boothbay Harbor",
          description: "Split and roasted over white oak, brown butter sea-salt emulsion, charred ramp butter, grilled sourdough.",
          dietary: ["Chef Signature"]
        },
        {
          name: "Day-Boat Halibut Steak",
          price: "$48",
          origin: "Casco Bay",
          description: "Salt marsh greens, clamshell broth, roasted fennel bulb, charred leek oil.",
          dietary: ["Gluten-Free"]
        },
        {
          name: "Whole Roasted Seabass",
          price: "$52",
          origin: "North Atlantic",
          description: "Stuffed with wild sea herbs, preserved Meyer lemon, caperberry vinaigrette, hearth blistered skin.",
          dietary: ["Gluten-Free"]
        },
        {
          name: "Grilled Cast-Iron Octopus",
          price: "$36",
          origin: "Atlantic Shoals",
          description: "Crispy fingerling potatoes, smoked pimentón emulsion, pickled celery hearts, squid ink glaze.",
          dietary: ["Gluten-Free"]
        }
      ]
    },
    {
      id: "towers",
      name: "Chilled Towers & Platters",
      items: [
        {
          name: "The Silver Prawn Petit Tower",
          price: "$95",
          origin: "Maine Coasts",
          description: "8 Cold-water prawns, 12 regional oysters, pickled cockles, chilled razor clams, seaweed aioli.",
          dietary: ["Serves 2"]
        },
        {
          name: "The Grand Harbor Imperial Plateau",
          price: "$185",
          origin: "Local Fleets",
          description: "16 Silver spot prawns, 18 mixed oysters, whole chilled Atlantic lobster, king crab claws, sea urchin, traditional sauces.",
          dietary: ["Serves 3-4", "Signature"]
        }
      ]
    },
    {
      id: "cellar",
      name: "Coastal Cellar & Cocktails",
      items: [
        {
          name: "The Salty Sailor Martini",
          price: "$18",
          origin: "House Crafted",
          description: "Maritime botanical gin, dry vermouth, oyster shell distillate, pickled sea bean.",
          dietary: ["Cocktail"]
        },
        {
          name: "Domaine de la Pepiere Muscadet 2022",
          price: "$16 / $64",
          origin: "Loire Valley, France",
          description: "Crisp saline minerality, green apple, bone-dry finish; the quintessential oyster pairing.",
          dietary: ["Organic Wine"]
        },
        {
          name: "Smoked Pine & Bourbon Highball",
          price: "$17",
          origin: "Signature Bar",
          description: "Aged bourbon, peated scotch mist, spruce tip cordial, harbor sea salt rim.",
          dietary: ["Cocktail"]
        }
      ]
    }
  ];

  const activeCategories = selectedCategory === "all"
    ? categories.filter(c => c.id !== "all")
    : categories.filter(c => c.id === selectedCategory);
  return (
    <div className="space-y-8 w-full">
      {/* Category Filter and Search Toolbar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-card border border-border">
        {/* Category buttons */}
        <div className="flex flex-wrap items-center gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search & Dietary filter */}
        <div className="flex items-center gap-2">
          <div className="relative w-full sm:w-64">
            <Search className="h-3.5 w-3.5 absolute left-3 top-2.5 text-muted-foreground" />
            <Input
              placeholder="Search dishes or ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-9 pl-9 text-xs bg-background border-border"
            />
          </div>
          {dietaryFilter && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setDietaryFilter("")}
              className="text-xs text-primary hover:text-primary/80 h-9"
            >
              Clear Filter
            </Button>
          )}
        </div>
      </div>

      {/* Dietary Quick Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        <span className="font-semibold flex items-center gap-1 text-foreground">
          <Filter className="h-3.5 w-3.5 text-primary" /> Filter by preference:
        </span>
        {["Gluten-Free", "Raw", "Chef Signature", "Sustainable"].map((tag) => (
          <button
            key={tag}
            onClick={() => setDietaryFilter(dietaryFilter === tag ? "" : tag)}
            className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-colors ${
              dietaryFilter === tag
                ? "border-primary bg-primary/10 text-primary font-semibold"
                : "border-border bg-background hover:bg-muted text-muted-foreground"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Category Sections */}
      <div className="space-y-12">
        {activeCategories.map((cat) => {
          const items = cat.items.filter((item) => {
            const matchesSearch =
              item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.origin.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesDietary =
              !dietaryFilter || item.dietary.includes(dietaryFilter);
            return matchesSearch && matchesDietary;
          });

          if (items.length === 0) return null;

          return (
            <div key={cat.id} className="space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <h2 className="text-2xl font-heading font-bold text-foreground flex items-center gap-2">
                  {cat.id === "raw-bar" && <Waves className="h-5 w-5 text-primary" />}
                  {cat.id === "wood-fire" && <Flame className="h-5 w-5 text-amber-500" />}
                  {cat.id === "towers" && <Shell className="h-5 w-5 text-blue-500" />}
                  {cat.id === "cellar" && <Wine className="h-5 w-5 text-primary" />}
                  {cat.name}
                </h2>
                <span className="text-xs text-muted-foreground font-mono">{items.length} Selections</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map((item, idx) => (
                  <Card
                    key={idx}
                    className="border-border bg-card p-5 hover:border-primary/40 transition-colors flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-heading text-lg font-bold text-foreground">
                          {item.name}
                        </h3>
                        <span className="font-mono font-semibold text-primary text-base whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-3 border-t border-border/60 flex flex-wrap items-center justify-between gap-2 text-xs">
                      <span className="text-muted-foreground">
                        Harvest: <strong className="text-foreground font-medium">{item.origin}</strong>
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {item.dietary.map((d, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="text-[10px] font-medium bg-muted text-foreground border-border/60"
                          >
                            {d}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MenuSection2() {
  return (
    <Card className="max-w-4xl mx-auto border-border bg-gradient-to-br from-card via-card to-secondary/30 overflow-hidden shadow-md w-full">
      <CardContent className="p-8 sm:p-12 space-y-6 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-widest">
          <Sparkles className="h-3.5 w-3.5" />
          Chef's Counter Experience
        </div>

        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground tracking-tight">
            The Harbor Master's 5-Course Tasting
          </h2>
          <p className="text-xl font-mono font-semibold text-primary">
            $135 per guest <span className="text-sm font-sans font-normal text-muted-foreground">· Optional Wine Flight +$75</span>
          </p>
        </div>

        <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          An elevated progression curated nightly by Executive Chef Soren Lindqvist, featuring the morning's rarest catches paired with biodynamic coastal wines.
        </p>

        <div className="p-4 rounded-xl bg-background/80 border border-border max-w-lg mx-auto text-xs text-muted-foreground flex items-center justify-center gap-2">
          <Clock className="h-4 w-4 text-primary shrink-0" />
          <span>Available by reservation for parties of up to 6 guests at the Chef's Counter.</span>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-sm">
            <Link to="/reservations?experience=tasting">
              Reserve Chef's Counter
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-border text-foreground hover:bg-muted">
            <Link to="/story">
              Meet Chef Soren Lindqvist
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Menu() {
  return (
    <div className="w-full min-w-0 overflow-x-hidden">
      <div className="flex flex-col gap-6 lg:gap-8 w-full min-w-0">
        <MenuSection0 />
        <MenuSection1 />
        <MenuSection2 />
      </div>
    </div>
  );
}
