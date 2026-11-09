import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Anchor, Sun, Moon, Menu as MenuIcon, PhoneCall, Fish, Sparkles } from "lucide-react";
import { QuickReservationDrawer } from "./QuickReservationDrawer";
import { SiteFooter } from "./SiteFooter";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu & Raw Bar" },
  { to: "/market", label: "Dockside Market" },
  { to: "/reservations", label: "Reservations" },
  { to: "/story", label: "Our Story" },
];

export default function Layout() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("silver_prawn-theme");
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
        setIsDark(true);
      } else {
        document.documentElement.classList.remove("dark");
        setIsDark(false);
      }
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      try {
        localStorage.setItem("silver_prawn-theme", "dark");
      } catch {}
    } else {
      document.documentElement.classList.remove("dark");
      try {
        localStorage.setItem("silver_prawn-theme", "light");
      } catch {}
    }
  };

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
      {/* Top Dockside Notification Bar */}
      <div className="bg-primary text-primary-foreground text-xs py-1.5 px-4 font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 truncate">
            <span className="flex h-2 w-2 rounded-full bg-white animate-pulse" />
            <span className="truncate">Today's Catch: Jumbo Spot Prawns & Cape Cod Bay Scallops — Pier 8 Delivery at 6:15 AM</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-[11px] font-semibold shrink-0">
            <span>TABLES TONIGHT: LIMITED HARBOR VIEW SEATS</span>
            <span>CALL (617) 555-8942</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 transition-colors">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="h-10 w-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
              <Anchor className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground leading-none">
                Silver Prawn
              </span>
              <span className="text-[10px] sm:text-xs tracking-wider uppercase text-muted-foreground font-medium mt-0.5">
                Dockside Raw Bar & Grill
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                    isActive
                      ? "bg-secondary text-secondary-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-full text-muted-foreground hover:text-foreground"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            {/* Quick Reservation Drawer Trigger */}
            <div className="hidden sm:block">
              <QuickReservationDrawer />
            </div>

            {/* Mobile Menu Trigger */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="lg:hidden border-border"
                  aria-label="Open menu"
                >
                  <MenuIcon className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] max-w-sm bg-card p-6 border-l border-border">
                <SheetHeader className="text-left pb-4 border-b border-border">
                  <SheetTitle className="flex items-center gap-2 font-heading text-xl text-foreground">
                    <Anchor className="h-5 w-5 text-primary" />
                    Silver Prawn
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-2 py-6">
                  {NAV_ITEMS.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={({ isActive }) =>
                        `px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                          isActive
                            ? "bg-primary text-primary-foreground font-semibold"
                            : "text-foreground hover:bg-muted"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                  <div className="pt-4 mt-2 border-t border-border flex flex-col gap-3">
                    <QuickReservationDrawer
                      trigger={
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2.5">
                          Reserve a Table Now
                        </Button>
                      }
                    />
                    <a
                      href="tel:6175558942"
                      className="flex items-center justify-center gap-2 text-xs text-muted-foreground hover:text-foreground py-2"
                    >
                      <PhoneCall className="h-4 w-4 text-primary" /> Direct Dock Line: (617) 555-8942
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full min-w-0 px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
