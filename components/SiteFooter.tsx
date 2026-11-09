import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Anchor, Compass, Fish, Mail, MapPin, Phone, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function SiteFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
  e.preventDefault();
  if (email.trim()) {
  setSubscribed(true);
  }
  };
  return (
    <footer className="border-t border-border bg-card text-card-foreground">
    {/* Pre-footer ticker / highlights banner */}
    <div className="border-b border-border bg-muted/40 py-4 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs">
    <div className="flex items-center gap-2 text-muted-foreground">
    <Fish className="h-4 w-4 text-primary" />
    <span className="font-semibold text-foreground">Dock Report:</span>
    <span>Wild Alaskan King Salmon & Wellfleet Oysters unloaded at Pier 14 this morning.</span>
    </div>
    <div className="flex items-center gap-4 text-muted-foreground">
    <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-primary" /> 100% Traceable Catch</span>
    <span className="hidden sm:inline-block">•</span>
    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-primary" /> Dinner Daily from 4:30 PM</span>
    </div>
    </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
    {/* Brand & mission */}
    <div className="lg:col-span-2 space-y-4">
    <Link to="/" className="flex items-center gap-2.5">
    <div className="h-9 w-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
    <Anchor className="h-5 w-5" />
    </div>
    <div>
    <span className="font-heading text-2xl font-bold tracking-tight text-foreground block">Silver Prawn</span>
    <span className="text-[10px] tracking-widest uppercase text-muted-foreground font-medium">Coastal Raw Bar & Seafood Market</span>
    </div>
    </Link>
    <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
    A culinary sanctuary by the water where coastal heirloom cooking meets the daily haul of local day-boat fishers. Honest, sustainable, pristine.
    </p>
    <div className="pt-2 text-xs text-muted-foreground space-y-1">
    <p className="flex items-center gap-2 text-foreground font-medium">
    <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
    44 Commercial Wharf, Pier 8, Harbor District
    </p>
    <p className="flex items-center gap-2">
    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
    (617) 555-8942 • Reservations & Market Pickup
    </p>
    </div>
    </div>

    {/* Navigation */}
    <div>
    <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Navigation</h3>
    <ul className="space-y-2 text-sm">
    <li>
    <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home & Highlights</Link>
    </li>
    <li>
    <Link to="/menu" className="text-muted-foreground hover:text-primary transition-colors">Dinner & Raw Bar Menu</Link>
    </li>
    <li>
    <Link to="/market" className="text-muted-foreground hover:text-primary transition-colors">Dockside Fish Market</Link>
    </li>
    <li>
    <Link to="/reservations" className="text-muted-foreground hover:text-primary transition-colors">Reserve a Table</Link>
    </li>
    <li>
    <Link to="/story" className="text-muted-foreground hover:text-primary transition-colors">Our Fisher Heritage</Link>
    </li>
    </ul>
    </div>

    {/* Hours */}
    <div>
    <h3 className="font-heading text-lg font-semibold text-foreground mb-3">Hours & Tides</h3>
    <ul className="space-y-2 text-xs text-muted-foreground">
    <li>
    <strong className="text-foreground block">Dinner & Raw Bar:</strong>
    Mon – Thu: 4:30 PM – 10:00 PM<br/>
    Fri – Sat: 4:00 PM – 11:00 PM<br/>
    Sunday Seafood Boil: 1:00 PM – 9:00 PM
    </li>
    <li className="pt-2">
    <strong className="text-foreground block">Dockside Wet Market:</strong>
    Daily: 8:00 AM – 3:00 PM (or until sold out)
    </li>
    </ul>
    </div>

    {/* Newsletter */}
    <div>
    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">The Harbor Dispatch</h3>
    <p className="text-xs text-muted-foreground mb-3">
    Get weekly reports on rare seasonal catches, guest vintner dinners, and shucking masterclasses.
    </p>
    {subscribed ? (
    <div className="p-3 bg-muted rounded-md text-xs text-foreground font-medium border border-border">
    You are enrolled in the Harbor Dispatch. Welcome aboard!
    </div>
    ) : (
    <form onSubmit={handleSubscribe} className="space-y-2">
    <div className="relative">
    <Mail className="h-4 w-4 absolute left-3 top-2.5 text-muted-foreground" />
    <Input
    type="email"
    placeholder="seafarer@example.com"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    className="pl-9 text-xs border-border bg-background"
    />
    </div>
    <Button type="submit" size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs">
    Subscribe to Catch Log <ArrowRight className="h-3.5 w-3.5 ml-1" />
    </Button>
    </form>
    )}
    </div>
    </div>

    <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
    <p>© {new Date().getFullYear()} Silver Prawn Seafood Co. All rights reserved.</p>
    <div className="flex items-center gap-6">
    <span className="hover:text-foreground cursor-pointer">Fisheries Transparency</span>
    <span className="hover:text-foreground cursor-pointer">Privacy & Sourcing</span>
    <span className="hover:text-foreground cursor-pointer">Accessibility</span>
    </div>
    </div>
    </div>
    </footer>
  );
}

export { SiteFooter };
