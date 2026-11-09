import { Anchor, Building, Calendar as CalendarIcon, Check, CheckCircle2, Clock, Compass, Flame, Heart, HelpCircle, Mail, Phone, PhoneCall, ShieldCheck, Ship, Sparkles, Users, Waves } from "lucide-react";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";

function ReservationsSection0() {
  const [selectedZone, setSelectedZone] = useState("Harbor Terrace");

  const zones = [
    {
      name: "Harbor Terrace",
      badge: "Heated & Waterfront",
      description: "Panoramic views of lobster boats and evening sunsets with overhead heaters and maritime fleece blankets."
    },
    {
      name: "Raw Bar Shucking Counter",
      badge: "Chef Interactive",
      description: "Front-row seats to master shuckers, iced shellfish towers, and direct interaction with the oyster team."
    },
    {
      name: "Main Ocean Dining Room",
      badge: "Intimate & Elegant",
      description: "Crisp white linen, reclaimed oak timber accents, flickering candlelight, and fireplace warmth."
    },
    {
      name: "Chef's Hearth Counter",
      badge: "Limited 8 Seats",
      description: "Direct view of open white-oak wood embers and live fire, where whole fish and giant spot prawns are grilled."
    }
  ];
  return (
    <div className="space-y-8 w-full pt-4 pb-2">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-widest">
          <Sparkles className="h-3.5 w-3.5" />
          Dockside Hospitality
        </div>

        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground tracking-tight">
          Reserve Your Table at Silver Prawn
        </h1>

        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Select your preferred dining atmosphere overlooking the working harbor marina. We release reservations 30 days in advance at 9:00 AM EST.
        </p>
      </div>

      {/* Dining Zones Selection Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {zones.map((zone) => {
          const isSelected = selectedZone === zone.name;
          return (
            <Card
              key={zone.name}
              onClick={() => setSelectedZone(zone.name)}
              className={`border cursor-pointer transition-all duration-200 p-5 flex flex-col justify-between ${
                isSelected
                  ? "border-primary bg-card ring-2 ring-primary/20 shadow-md"
                  : "border-border bg-card/60 hover:border-border/90 hover:bg-card"
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge
                    variant="outline"
                    className={`text-[10px] font-medium ${
                      isSelected
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    {zone.badge}
                  </Badge>
                  {isSelected && <Check className="h-4 w-4 text-primary" />}
                </div>

                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-lg text-foreground">
                    {zone.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {zone.description}
                  </p>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-border/60 text-[11px] font-medium text-primary">
                {isSelected ? "Selected Zone" : "Tap to Select"}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function ReservationsSection1() {
  const [searchParams] = useSearchParams();
  const paramParty = searchParams.get("party");

  const [partySize, setPartySize] = useState<number>(paramParty ? parseInt(paramParty) || 2 : 2);
  const [reservationDate, setReservationDate] = useState("2025-05-18");
  const [selectedTime, setSelectedTime] = useState("7:00 PM");
  const [seatingArea, setSeatingArea] = useState("Harbor Terrace");

  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  const timeSlots = [
    { time: "5:00 PM", period: "Sunset Seating", status: "Available" },
    { time: "5:30 PM", period: "Sunset Seating", status: "Available" },
    { time: "6:15 PM", period: "Prime Dinner", status: "2 Left" },
    { time: "7:00 PM", period: "Prime Dinner", status: "Available" },
    { time: "7:45 PM", period: "Late Dinner", status: "Available" },
    { time: "8:30 PM", period: "Late Raw Bar", status: "Available" },
    { time: "9:15 PM", period: "Late Raw Bar", status: "Available" }
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConfirmed(true);
  };
  return (
    <Card className="max-w-4xl mx-auto border-border bg-card shadow-sm overflow-hidden w-full">
      <CardHeader className="border-b border-border p-6 sm:p-8 bg-muted/20">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge className="bg-primary text-primary-foreground text-xs font-semibold">
                Instant Confirmation
              </Badge>
              <span className="text-xs text-muted-foreground">Pier 17 Guest Desk</span>
            </div>
            <CardTitle className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              Book Table Reservation
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm text-muted-foreground">
              Choose party size, date, and preferred evening time slot.
            </CardDescription>
          </div>

          <div className="hidden sm:flex flex-col items-end text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">Immediate Seat Hold</span>
            <span>Guaranteed for 15 minutes</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 sm:p-8">
        {isConfirmed ? (
          <div className="py-8 flex flex-col items-center text-center space-y-6 max-w-lg mx-auto">
            <div className="h-16 w-16 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <CheckCircle2 className="h-10 w-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-heading font-bold text-foreground">
                Reservation Confirmed!
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We are honored to welcome you to the Silver Prawn dock. A confirmation SMS & email have been dispatched.
              </p>
            </div>

            <div className="w-full p-5 rounded-2xl bg-muted/50 border border-border text-left space-y-2.5 text-xs">
              <div className="flex justify-between border-b border-border/80 pb-2">
                <span className="text-muted-foreground">Confirmation Code:</span>
                <span className="font-mono text-primary font-bold text-sm">SP-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Guest:</span>
                <span className="font-semibold text-foreground">{guestName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Party Size:</span>
                <span className="font-semibold text-foreground">{partySize} Guests</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date & Time:</span>
                <span className="font-semibold text-foreground">{reservationDate} at {selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Seating Area:</span>
                <span className="font-semibold text-primary">{seatingArea}</span>
              </div>
              {notes && (
                <div className="pt-2 border-t border-border/80">
                  <span className="text-muted-foreground block mb-0.5">Kitchen Note:</span>
                  <span className="text-foreground italic">{notes}</span>
                </div>
              )}
            </div>

            <Button
              onClick={() => setIsConfirmed(false)}
              variant="outline"
              className="border-border text-foreground hover:bg-muted"
            >
              Book Another Table
            </Button>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="space-y-6">
            {/* Step 1: Party Size */}
            <div className="space-y-2">
              <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 text-primary" /> Party Size
              </Label>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((size) => (
                  <Button
                    key={size}
                    type="button"
                    variant={partySize === size ? "default" : "outline"}
                    className={partySize === size ? "bg-primary text-primary-foreground font-bold" : "border-border text-foreground hover:bg-muted"}
                    onClick={() => setPartySize(size)}
                  >
                    {size} {size === 8 ? "+" : ""}
                  </Button>
                ))}
              </div>
            </div>

            {/* Step 2: Date & Seating Area */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date-input" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <CalendarIcon className="h-3.5 w-3.5 text-primary" /> Date
                </Label>
                <Input
                  id="date-input"
                  type="date"
                  value={reservationDate}
                  onChange={(e) => setReservationDate(e.target.value)}
                  className="bg-background border-border text-foreground"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <Anchor className="h-3.5 w-3.5 text-primary" /> Preferred Atmosphere
                </Label>
                <Select value={seatingArea} onValueChange={setSeatingArea}>
                  <SelectTrigger className="bg-background border-border text-foreground">
                    <SelectValue placeholder="Select Area" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover text-popover-foreground border-border">
                    <SelectItem value="Harbor Terrace">Harbor Terrace (Waterfront)</SelectItem>
                    <SelectItem value="Raw Bar Shucking Counter">Raw Bar Shucking Counter</SelectItem>
                    <SelectItem value="Main Ocean Dining Room">Main Ocean Dining Room</SelectItem>
                    <SelectItem value="Chef's Hearth Counter">Chef's Hearth Counter (Limited)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Step 3: Available Times */}
            <div className="space-y-2">
              <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-primary" /> Select Seating Slot
              </Label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {timeSlots.map((slot) => {
                  const isSelected = selectedTime === slot.time;
                  return (
                    <button
                      type="button"
                      key={slot.time}
                      onClick={() => setSelectedTime(slot.time)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? "border-primary bg-primary text-primary-foreground shadow-sm"
                          : "border-border bg-background hover:bg-muted text-foreground"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-sm">{slot.time}</span>
                      </div>
                      <div className="flex items-center justify-between mt-1 text-[10px]">
                        <span className={isSelected ? "text-primary-foreground/90" : "text-muted-foreground"}>
                          {slot.period}
                        </span>
                        <span className={isSelected ? "font-semibold text-white" : "text-emerald-600 dark:text-emerald-400 font-medium"}>
                          {slot.status}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Guest Contact Details */}
            <div className="pt-4 border-t border-border space-y-4">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                Guest Information
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="guest-full-name" className="text-xs text-foreground font-medium">Full Name</Label>
                  <Input
                    id="guest-full-name"
                    placeholder="Sarah Montgomery"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    required
                    className="bg-background border-border text-foreground"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="guest-phone" className="text-xs text-foreground font-medium">Mobile Phone (For SMS Updates)</Label>
                  <Input
                    id="guest-phone"
                    placeholder="(617) 555-0192"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    required
                    className="bg-background border-border text-foreground"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="guest-email" className="text-xs text-foreground font-medium">Email Address</Label>
                <Input
                  id="guest-email"
                  type="email"
                  placeholder="sarah@example.com"
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                  required
                  className="bg-background border-border text-foreground"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="guest-notes" className="text-xs text-foreground font-medium">
                  Dietary Requests or Special Occasion (Optional)
                </Label>
                <Textarea
                  id="guest-notes"
                  placeholder="e.g. Celebrating 10th anniversary, shellfish allergy for 1 guest, need quiet corner table..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={2}
                  className="bg-background border-border text-foreground text-xs"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>No charge right now. Pay at the table.</span>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
              >
                Confirm Reservation
              </Button>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
}

function ReservationsSection2() {
  const [inquired, setInquired] = useState<string | null>(null);

  const packages = [
    {
      name: "The Captain's Quarters",
      capacity: "12–22 Guests",
      minSpend: "From $1,800",
      description: "Private enclosed space with dedicated raw bar station, dedicated sommelier, and private balcony overlooking Pier 17.",
      amenities: [
        "Dedicated raw bar shucker & custom oyster bar",
        "Custom 4-course wood-fired tasting menu",
        "Curated maritime wine pairings",
        "Private audio system & harbor viewing telescope"
      ]
    },
    {
      name: "Full Pier Buyout",
      capacity: "Up to 120 Guests",
      minSpend: "Inquire for seasonal rates",
      description: "Exclusive access to the full restaurant, outdoor fire pits, dock slips, and customized wood-fired family feast.",
      amenities: [
        "Access to full dining hall, heated terrace & slip docks",
        "Live wood-fired hearth cooking stations",
        "Full craft cocktail & raw bar towers",
        "Dedicated event coordinator & custom florals"
      ]
    }
  ];

  const handleInquiry = (name: string) => {
    setInquired(name);
    window.setTimeout(() => setInquired(null), 4000);
  };
  return (
    <div className="space-y-6 w-full">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 text-primary text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="h-3.5 w-3.5" />
          Celebrations & Banquets
        </div>
        <h3 className="text-3xl font-heading font-bold text-foreground">
          Private Gatherings & Celebrations
        </h3>
        <p className="text-muted-foreground text-sm">
          From intimate milestone dinners with a personal oyster shucker to exclusive harbor buyouts with open wood hearths.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {packages.map((pkg) => (
          <Card key={pkg.name} className="border-border bg-card p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="border-primary/40 bg-primary/10 text-primary text-xs font-semibold">
                  {pkg.capacity}
                </Badge>
                <span className="text-xs font-mono font-semibold text-muted-foreground">
                  {pkg.minSpend}
                </span>
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-heading font-bold text-foreground">
                  {pkg.name}
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              <ul className="space-y-2 text-xs text-muted-foreground pt-2 border-t border-border/80">
                {pkg.amenities.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              {inquired === pkg.name ? (
                <div className="p-3 bg-muted rounded-lg text-xs text-center text-primary font-semibold border border-primary/20">
                  Private Dining Director will reach out within 4 business hours.
                </div>
              ) : (
                <Button
                  variant="outline"
                  onClick={() => handleInquiry(pkg.name)}
                  className="w-full border-border hover:bg-primary hover:text-primary-foreground font-semibold text-xs"
                >
                  Inquire About {pkg.name}
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function ReservationsSection3() {
  const faqs = [
    {
      q: "Can I arrive by boat?",
      a: "Yes. Silver Prawn maintains 4 complimentary transient boat slips at Pier 17 for dining guests. Please hail harbor VHF channel 9 or call the host stand 20 minutes prior to mooring to verify depth and slip clearance."
    },
    {
      q: "What is the reservation cancellation policy?",
      a: "We ask for 24 hours notice for standard bookings and 48 hours for parties of 6 or more. Because our seafood is harvested to order by day-boat fishers, timely notification lets us manage our live tank inventory with zero waste."
    },
    {
      q: "Do you hold tables for walk-ins?",
      a: "Yes! Our 18-seat marble raw bar and high-top harbor lounge tables are always reserved exclusively for walk-in guests on a first-come basis. Even on peak Friday and Saturday evenings, average wait time for raw bar seating is under 25 minutes."
    },
    {
      q: "Are there options for non-seafood eaters?",
      a: "Absolutely. Our wood-fired hearth prepares dry-aged pasture ribeye with smoked bone marrow butter, charred heirloom squash with honey vinegar, and crisp coastal farm greens daily."
    }
  ];
  return (
    <div className="max-w-4xl mx-auto space-y-6 w-full">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 text-primary text-xs font-semibold uppercase tracking-widest">
          <HelpCircle className="h-3.5 w-3.5" />
          Dock Etiquette & Guidelines
        </div>
        <h3 className="text-3xl font-heading font-bold text-foreground">
          Guest Hospitality & Dining Policies
        </h3>
        <p className="text-muted-foreground text-xs sm:text-sm">
          Everything you need to know about slip docking, table reservations, and evening seatings.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-4 sm:p-6 shadow-sm">
        <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-left font-heading font-semibold text-base sm:text-lg text-foreground hover:text-primary transition-colors py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default function Reservations() {
  return (
    <div className="w-full min-w-0 overflow-x-hidden">
      <div className="flex flex-col gap-6 lg:gap-8 w-full min-w-0">
        <ReservationsSection0 />
        <ReservationsSection1 />
        <ReservationsSection2 />
        <ReservationsSection3 />
      </div>
    </div>
  );
}
