import React, { useState } from "react";
import { Calendar as CalendarIcon, Clock, Users, Anchor, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

const TIME_SLOTS = [
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"
];

const SEATING_AREAS = [
  { id: "raw-bar", name: "Oyster & Raw Bar", desc: "Front row seat to shucking & crudo prep" },
  { id: "patio", name: "Harbor Terrace", desc: "Heated open-air coastal view" },
  { id: "main", name: "Captain's Dining Room", desc: "Intimate maritime interior" },
  { id: "chef", name: "Chef's Tasting Counter", desc: "Exclusive 6-seat tasting perch" },
];

export default function QuickReservationDrawer({ trigger }: { trigger?: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [partySize, setPartySize] = useState("2");
  const [date, setDate] = useState("2025-05-18");
  const [time, setTime] = useState("7:00 PM");
  const [area, setArea] = useState("raw-bar");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setSubmitted(true);
  };
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
    <SheetTrigger asChild>
    {trigger || (
    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-sm gap-2">
    <Anchor className="h-4 w-4" />
    Reserve a Table
    </Button>
    )}
    </SheetTrigger>
    <SheetContent className="w-full sm:max-w-md overflow-y-auto bg-card text-card-foreground border-l border-border p-6">
    <SheetHeader className="text-left space-y-2 pb-4 border-b border-border">
    <div className="flex items-center gap-2 text-primary text-xs uppercase tracking-widest font-semibold">
    <Sparkles className="h-3.5 w-3.5" />
    Dockside Gastronomy
    </div>
    <SheetTitle className="text-2xl font-heading text-foreground font-semibold">
    Book Your Experience
    </SheetTitle>
    <SheetDescription className="text-sm text-muted-foreground">
    Reserve an oyster feast or coastal dinner. Catch of the day is refreshed every morning at 6:00 AM.
    </SheetDescription>
    </SheetHeader>

    {submitted ? (
    <div className="py-10 flex flex-col items-center text-center space-y-4">
    <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center">
    <CheckCircle2 className="h-8 w-8" />
    </div>
    <div className="space-y-1">
    <h3 className="text-xl font-heading font-semibold text-foreground">Table Requested!</h3>
    <p className="text-sm text-muted-foreground max-w-xs">
    We reserved for <strong className="text-foreground">{partySize} guests</strong> on <strong className="text-foreground">{date}</strong> at <strong className="text-foreground">{time}</strong> in the <strong className="text-foreground">{SEATING_AREAS.find(a => a.id === area)?.name}</strong>.
    </p>
    </div>
    <div className="p-4 rounded-lg bg-muted text-xs text-muted-foreground text-left w-full space-y-1.5 border border-border">
    <div className="flex justify-between">
    <span className="font-medium">Guest:</span>
    <span>{name}</span>
    </div>
    <div className="flex justify-between">
    <span className="font-medium">Confirmation code:</span>
    <span className="font-mono text-primary font-bold">SP-8842</span>
    </div>
    <div className="flex justify-between">
    <span className="font-medium">Dockside status:</span>
    <span className="text-emerald-600 dark:text-emerald-400 font-medium">Guaranteed Fresh Catch</span>
    </div>
    </div>
    <Button 
    variant="outline" 
    className="w-full mt-4" 
    onClick={() => { setSubmitted(false); setIsOpen(false); }}
    >
    Done
    </Button>
    </div>
    ) : (
    <form onSubmit={handleSubmit} className="py-6 space-y-5">
    <div className="space-y-2">
    <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
    <Users className="h-3.5 w-3.5" /> Party Size
    </Label>
    <div className="grid grid-cols-5 gap-2">
    {[1, 2, 4, 6, 8].map((num) => (
    <Button
    key={num}
    type="button"
    variant={partySize === num.toString() ? "default" : "outline"}
    size="sm"
    className={partySize === num.toString() ? "bg-primary text-primary-foreground font-semibold" : "border-border text-foreground hover:bg-muted"}
    onClick={() => setPartySize(num.toString())}
    >
    {num} {num === 8 ? "+" : ""}
    </Button>
    ))}
    </div>
    </div>

    <div className="space-y-2">
    <Label htmlFor="res-date" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
    <CalendarIcon className="h-3.5 w-3.5" /> Date
    </Label>
    <Input 
    id="res-date"
    type="date" 
    value={date} 
    onChange={(e) => setDate(e.target.value)}
    className="border-border bg-background text-foreground"
    required
    />
    </div>

    <div className="space-y-2">
    <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
    <Clock className="h-3.5 w-3.5" /> Preferred Time
    </Label>
    <div className="grid grid-cols-3 gap-2">
    {TIME_SLOTS.map((slot) => (
    <Button
    key={slot}
    type="button"
    variant={time === slot ? "default" : "outline"}
    size="sm"
    className={`text-xs ${time === slot ? "bg-primary text-primary-foreground font-semibold" : "border-border text-foreground hover:bg-muted"}`}
    onClick={() => setTime(slot)}
    >
    {slot}
    </Button>
    ))}
    </div>
    </div>

    <div className="space-y-2">
    <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
    Seating Atmosphere
    </Label>
    <Select value={area} onValueChange={setArea}>
    <SelectTrigger className="border-border bg-background text-foreground">
    <SelectValue placeholder="Select seating area" />
    </SelectTrigger>
    <SelectContent className="bg-popover text-popover-foreground border-border">
    {SEATING_AREAS.map((item) => (
    <SelectItem key={item.id} value={item.id}>
    {item.name} — <span className="text-xs text-muted-foreground">{item.desc}</span>
    </SelectItem>
    ))}
    </SelectContent>
    </Select>
    </div>

    <div className="space-y-3 pt-2 border-t border-border">
    <div className="space-y-1.5">
    <Label htmlFor="guest-name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
    Full Name
    </Label>
    <Input
    id="guest-name"
    placeholder="Captain Jonathan Vance"
    value={name}
    onChange={(e) => setName(e.target.value)}
    required
    className="border-border bg-background text-foreground"
    />
    </div>
    <div className="space-y-1.5">
    <Label htmlFor="guest-contact" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
    Phone or Email
    </Label>
    <Input
    id="guest-contact"
    placeholder="vance@harbor.net"
    value={contact}
    onChange={(e) => setContact(e.target.value)}
    required
    className="border-border bg-background text-foreground"
    />
    </div>
    </div>

    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2.5 font-medium shadow">
    Confirm Reservation Request
    </Button>
    </form>
    )}
    </SheetContent>
    </Sheet>
  );
}

export { QuickReservationDrawer };
