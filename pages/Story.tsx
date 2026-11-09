import { Anchor, Award, CheckCircle2, Clock, Compass, Heart, Mail, MapPin, Phone, Quote, Send, Shell, ShieldCheck, Ship, Sparkles, Utensils, Waves } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";

function StorySection0() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-card via-card to-secondary/30 p-8 sm:p-12 lg:p-16 text-center space-y-8 w-full">
      <div className="max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-widest">
          <Compass className="h-3.5 w-3.5" />
          Since 2016 · Pier 17 Marina
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground tracking-tight leading-tight">
          Respecting the Tide, Reverencing the Catch
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-light">
          Silver Prawn was born on the windy planks of Casco Bay with a single mission: eliminate the middlemen, support generational day-boat skippers, and celebrate the world's sweetest cold-water prawns and bivalves exactly as the Atlantic provides them.
        </p>
      </div>

      {/* Quote Card */}
      <Card className="max-w-2xl mx-auto border-border bg-background/80 backdrop-blur p-6 sm:p-8 text-center space-y-3 relative">
        <Quote className="h-8 w-8 text-primary/30 mx-auto" />
        <blockquote className="text-base sm:text-lg italic font-serif text-foreground/90 leading-relaxed">
          "We don't mask pristine cold-water seafood; we let sea salt, white oak woodsmoke, and icy harbor waters tell the story."
        </blockquote>
        <p className="text-xs uppercase tracking-wider font-semibold text-primary">
          — Chef Soren Lindqvist, Co-Founder
        </p>
      </Card>

      {/* Stat Highlights */}
      <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left border-t border-border/80">
        <div className="space-y-0.5">
          <span className="text-2xl font-heading font-bold text-foreground font-mono">100%</span>
          <p className="text-xs text-muted-foreground">Traceable Catch Origin</p>
        </div>
        <div className="space-y-0.5">
          <span className="text-2xl font-heading font-bold text-foreground font-mono">8 Day-Boats</span>
          <p className="text-xs text-muted-foreground">Dedicated Pier Fleet</p>
        </div>
        <div className="space-y-0.5">
          <span className="text-2xl font-heading font-bold text-foreground font-mono">&lt; 18 Hrs</span>
          <p className="text-xs text-muted-foreground">Ocean to Table Speed</p>
        </div>
        <div className="space-y-0.5">
          <span className="text-2xl font-heading font-bold text-foreground font-mono">Zero</span>
          <p className="text-xs text-muted-foreground">Chemical Soaks or Preservatives</p>
        </div>
      </div>
    </div>
  );
}

function StorySection1() {
  const [activePartner, setActivePartner] = useState("Captain Callum Brooks");

  const partners = [
    {
      name: "Captain Callum Brooks",
      vessel: "F/V Silver Gull",
      experience: "32 Years at Sea",
      fishery: "Casco Bay Deep Waters",
      specialty: "Wild Maine Silver Spot Prawns",
      bio: "Callum utilizes custom low-impact wire traps designed to allow juveniles to escape while harvesting prime adult prawns from rocky seafloor trenches."
    },
    {
      name: "Maeve & Silas Higgins",
      vessel: "Glidden Cove Aquaculture",
      experience: "2nd Generation Farmers",
      fishery: "Damariscotta Estuary",
      specialty: "Hand-Tumbled Bivalves & Oysters",
      bio: "Tumbling oysters in cold tidal flows develops deep cups, dense crisp meats, and unmatched sweet brine with mineral notes unique to Maine's clean rivers."
    },
    {
      name: "Captain Noah Tremblay",
      vessel: "F/V Northern Light",
      experience: "19 Years at Sea",
      fishery: "Georges Bank Outer Banks",
      specialty: "Line-Caught Halibut & Bluefin",
      bio: "Noah adheres to strict single-hook handline methods that prevent seafloor disruption and yield spotless finfish handled with traditional Japanese ikejime techniques."
    }
  ];
  return (
    <div className="space-y-8 w-full">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 text-primary text-xs font-semibold uppercase tracking-widest">
          <Ship className="h-3.5 w-3.5" />
          The Pier 17 Fleet
        </div>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground tracking-tight">
          Generational Skippers & Oyster Farmers
        </h2>
        <p className="text-muted-foreground text-sm">
          Meet the custodians of our cold Northern waters who dock at our slip every dawn with live tanks full.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {partners.map((partner) => {
          const isSelected = activePartner === partner.name;
          return (
            <Card
              key={partner.name}
              onClick={() => setActivePartner(partner.name)}
              className={`border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? "border-primary bg-card ring-2 ring-primary/20 shadow-md"
                  : "border-border bg-card hover:border-primary/40"
              }`}
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="border-primary/30 text-primary bg-primary/10 text-[10px] font-semibold">
                    {partner.vessel}
                  </Badge>
                  <span className="text-xs text-muted-foreground font-mono">
                    {partner.experience}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-heading font-bold text-foreground">
                    {partner.name}
                  </h3>
                  <p className="text-xs font-medium text-primary flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {partner.fishery}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {partner.bio}
                </p>
              </div>

              <div className="p-6 pt-3 border-t border-border/80 bg-muted/20 flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Signature Harvest:</span>
                <span className="font-semibold text-foreground text-right">{partner.specialty}</span>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function StorySection2() {
  const team = [
    {
      name: "Soren Lindqvist",
      role: "Executive Chef & Co-Founder",
      bio: "Trained in Copenhagen and coastal Maine, Soren champions ember cooking with delicate marine ingredients, blending Nordic austerity with New England maritime tradition."
    },
    {
      name: "Elena Rostova",
      role: "Master Oyster Sommelier",
      bio: "Certified oyster shucker champion who pairs bivalve mineral profiles with biodynamic coastal viticulture, teaching guests the nuances of ocean terroir."
    },
    {
      name: "Marcus Chen",
      role: "Head Fishmonger & Sourcing Director",
      bio: "Former marine biologist who oversees daily dock inspection, traceability logging, and market dry-aging, ensuring every finfish meets peak harvest standards."
    }
  ];
  return (
    <div className="rounded-3xl border border-border bg-muted/30 p-6 sm:p-10 lg:p-12 space-y-8 w-full">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 text-primary text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="h-3.5 w-3.5" />
          Culinary Leadership
        </div>
        <h3 className="text-3xl font-heading font-bold text-foreground">
          Masters of Hearth & Raw Shell
        </h3>
        <p className="text-muted-foreground text-sm">
          United by deep coastal roots, classical training, and a profound respect for wild waters.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {team.map((member) => (
          <Card key={member.name} className="border-border bg-card p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-primary border border-border">
                {member.name.includes("Soren") && <Utensils className="h-6 w-6" />}
                {member.name.includes("Elena") && <Shell className="h-6 w-6" />}
                {member.name.includes("Marcus") && <Award className="h-6 w-6" />}
              </div>

              <div>
                <h4 className="font-heading font-bold text-xl text-foreground">
                  {member.name}
                </h4>
                <p className="text-xs font-semibold text-primary">
                  {member.role}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
            </div>

            <div className="pt-3 border-t border-border/60 text-[11px] text-muted-foreground">
              Dedicated to 100% sustainable dock-to-table practice.
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function StorySection3() {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const hours = [
    { days: "Monday – Thursday", service: "4:30 PM – 10:30 PM" },
    { days: "Friday – Sunday (Lunch & Dinner)", service: "11:30 AM – Midnight" },
    { days: "Raw Bar & Cocktails", service: "Daily 3:00 PM – Late" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <div className="space-y-8 w-full">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 text-primary text-xs font-semibold uppercase tracking-widest">
          <MapPin className="h-3.5 w-3.5" />
          Dockside Coordinates
        </div>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground tracking-tight">
          Find Us on Pier 17
        </h2>
        <p className="text-muted-foreground text-sm">
          Located directly over the active harbor tide, with panoramic views of the outer islands and lighthouses.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Location & Hours Details */}
        <Card className="border-border bg-card p-6 sm:p-8 space-y-6">
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-xl text-foreground flex items-center gap-2">
              <Anchor className="h-5 w-5 text-primary" />
              Marina & Pier Access
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Address:</p>
                  <p className="text-muted-foreground">Pier 17, Coastal Harbor Marina, Slipway B, Portland, ME 04101</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Phone & Slip Hail:</p>
                  <p className="text-muted-foreground font-mono">(207) 555-0194 • VHF Ch 9</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Inquiries:</p>
                  <p className="text-muted-foreground font-mono">reservations@silverprawnharbor.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-border/80 space-y-3">
            <h4 className="font-heading font-semibold text-base text-foreground flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              Operating Hours & Tides
            </h4>
            <ul className="space-y-2 text-xs">
              {hours.map((h, i) => (
                <li key={i} className="flex justify-between items-center py-1 border-b border-border/40 last:border-none">
                  <span className="font-medium text-foreground">{h.days}</span>
                  <span className="font-mono text-muted-foreground">{h.service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-muted/60 border border-border text-xs text-muted-foreground space-y-1">
            <p className="font-semibold text-foreground">Docking & Parking:</p>
            <p>Valet parking is available at the pierhead entrance. 4 reserved guest boat slips are maintained at Marina Slip 4 for visiting vessels.</p>
          </div>
        </Card>

        {/* Right: Message / Fisher Query Form */}
        <Card className="border-border bg-card p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <h3 className="font-heading font-bold text-xl text-foreground">
              Send the Pier Master a Note
            </h3>
            <p className="text-xs text-muted-foreground">
              Have questions about private charters, wholesale fishmonger allotments, or chef tastings?
            </p>
          </div>

          {sent ? (
            <div className="p-8 text-center space-y-3 bg-muted/40 rounded-2xl border border-border">
              <CheckCircle2 className="h-10 w-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
              <h4 className="font-heading font-bold text-lg text-foreground">Message Dispatched</h4>
              <p className="text-xs text-muted-foreground max-w-xs mx-auto">
                Thank you, {contactName}. The pier captain will reply to {contactEmail} shortly.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSent(false)}
                className="text-xs border-border"
              >
                Send Another Note
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="msg-name" className="text-xs font-medium">Your Name</Label>
                <Input
                  id="msg-name"
                  placeholder="Captain Edward Teach"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  required
                  className="bg-background border-border text-xs"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="msg-email" className="text-xs font-medium">Email Address</Label>
                <Input
                  id="msg-email"
                  type="email"
                  placeholder="edward@coastalmarine.org"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  required
                  className="bg-background border-border text-xs"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="msg-body" className="text-xs font-medium">Message or Vessel Inquiry</Label>
                <Textarea
                  id="msg-body"
                  placeholder="Tell us how we can welcome you to the dock..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  required
                  className="bg-background border-border text-xs"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold py-2.5 gap-2"
              >
                <Send className="h-3.5 w-3.5" />
                Send Message to Dock Team
              </Button>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
}

export default function Story() {
  return (
    <div className="w-full min-w-0 overflow-x-hidden">
      <div className="flex flex-col gap-8 lg:gap-10 w-full min-w-0">
        <StorySection0 />
        <StorySection1 />
        <StorySection2 />
        <StorySection3 />
      </div>
    </div>
  );
}
