import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Car,
  Clock,
  ExternalLink,
  Home,
  IndianRupee,
  Key,
  Lock,
  MapPin,
  Menu,
  Phone,
  Shield,
  Star,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const PHONE_NUMBER = "08010804200";
const PHONE_DISPLAY = "080108 04200";
const PHONE_HREF = `tel:${PHONE_NUMBER}`;
const MAPS_HREF =
  "https://maps.google.com/?q=Wave+City+Marg+Sector+3+Wave+City+Ghaziabad+Uttar+Pradesh+201015";
const ADDRESS =
  "Bhagat Singh Chowk, Gol Chakkar, No 25/5/5, Wave City Marg, Sector 3, Wave City, Ghaziabad, Uttar Pradesh 201015";
const CURRENT_YEAR = new Date().getFullYear();

const services = [
  {
    icon: Key,
    title: "Key Duplication",
    description:
      "Precision duplicates for all types of keys — home, office, padlock, and more. Quick turnaround at your doorstep.",
  },
  {
    icon: Home,
    title: "Home Lockout Assistance",
    description:
      "Locked out of your house? Our team arrives fast to get you back inside safely, without damaging your locks.",
  },
  {
    icon: Car,
    title: "Car Key Duplication",
    description:
      "Duplicate or replace car keys including transponder keys and remote fobs for most major vehicle brands.",
  },
  {
    icon: Lock,
    title: "Lock Installation",
    description:
      "Professional installation of high-security locks for homes, offices, and vehicles. Top brands available.",
  },
  {
    icon: Wrench,
    title: "Lock Repair",
    description:
      "Broken or stiff lock? We diagnose and repair all types of locks quickly to restore your security and peace of mind.",
  },
];

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "We're always open, day or night. No matter the hour, we're just a call away.",
  },
  {
    icon: Zap,
    title: "Fast Response",
    description:
      "Quick arrival at your location across Ghaziabad and nearby areas. No long waits.",
  },
  {
    icon: Shield,
    title: "Experienced Professionals",
    description:
      "Trained, trusted locksmiths with years of hands-on experience handling every lock situation.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description:
      "Transparent, fair rates with no hidden charges or surprises. Quality service at honest prices.",
  },
  {
    icon: Home,
    title: "Home Service",
    description:
      "We come to you, wherever you are. Full locksmith services delivered right at your doorstep.",
  },
];

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <img
            src="/assets/generated/logo-icon-transparent.dim_120x120.png"
            alt="Sardar Ji Key Maker logo"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
          <span className="font-display font-bold text-primary text-lg leading-tight hidden sm:block">
            Sardar Ji Key Maker
          </span>
          <span className="font-display font-bold text-primary text-base leading-tight sm:hidden">
            Sardar Ji
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-ocid="nav.link"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a href={PHONE_HREF} data-ocid="nav.primary_button">
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-1.5 hidden sm:flex gold-glow-hover transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Now
            </Button>
          </a>
          <button
            type="button"
            className="md:hidden text-foreground p-2 rounded-md hover:bg-secondary transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <ul className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-ocid="nav.link"
                    onClick={() => setMenuOpen(false)}
                    className="block text-base font-medium text-foreground py-2 px-3 rounded-md hover:bg-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={PHONE_HREF}
                  data-ocid="nav.primary_button"
                  onClick={() => setMenuOpen(false)}
                >
                  <Button className="w-full bg-primary text-primary-foreground font-semibold gap-2 mt-1">
                    <Phone className="w-4 h-4" />
                    Call Now: {PHONE_DISPLAY}
                  </Button>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/banner-exterior-day.dim_1400x600.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
      </div>

      {/* Decorative gold line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary to-transparent opacity-60" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-24 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open 24 Hours • Ghaziabad, UP
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-3"
        >
          <span className="text-foreground">Sardar Ji </span>
          <span className="text-primary">Key Maker</span>
          <br />
          <span className="text-foreground">Home Services</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-display text-xl sm:text-2xl font-semibold text-primary/90 mb-4"
        >
          24/7 Key Duplication &amp; Locksmith Services
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Professional key duplication, lockout assistance, and lock services —
          right at your doorstep in Ghaziabad.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href={PHONE_HREF} data-ocid="hero.primary_button">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8 py-6 gap-2.5 shadow-gold gold-glow-hover transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Now: {PHONE_DISPLAY}
            </Button>
          </a>
          <a href="#services" data-ocid="hero.secondary_button">
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 font-semibold text-base px-8 py-6 gap-2 transition-all"
            >
              View Services
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-14 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
        >
          {[
            "Trusted Professionals",
            "Fast Response",
            "Affordable Rates",
            "We Come to You",
          ].map((tag) => (
            <span key={tag} className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-primary fill-primary" />
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 md:py-28 px-4 sm:px-6 bg-background relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <Badge className="mb-4 bg-primary/15 text-primary border-primary/30 px-3 py-1">
            What We Do
          </Badge>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-lg mx-auto">
            Complete locksmith solutions delivered to your home, office, or
            vehicle — anywhere in Ghaziabad.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                data-ocid={`services.item.${i + 1}`}
                className="group relative bg-card rounded-xl p-6 border border-border card-lift overflow-hidden"
              >
                {/* Gold left accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/80 via-primary to-primary/20 rounded-l-xl" />

                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="py-20 md:py-28 px-4 sm:px-6 bg-secondary relative overflow-hidden"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, oklch(75% 0.18 75) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <Badge className="mb-4 bg-primary/15 text-primary border-primary/30 px-3 py-1">
            Our Promise
          </Badge>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Why Choose Us?
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-lg mx-auto">
            We put your security and convenience first — every single time.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                data-ocid={`why-us.item.${i + 1}`}
                className="flex gap-4 bg-card/60 rounded-xl p-6 border border-border/60 backdrop-blur-sm hover:border-primary/40 transition-colors duration-300"
              >
                {/* Icon circle */}
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>

                <div>
                  <h3 className="font-display font-bold text-base text-foreground mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <a href={PHONE_HREF}>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base px-8 py-6 gap-2.5 shadow-gold gold-glow-hover transition-all"
            >
              <Phone className="w-4 h-4" />
              Call Us Anytime: {PHONE_DISPLAY}
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <Badge className="mb-4 bg-primary/15 text-primary border-primary/30 px-3 py-1">
            Get In Touch
          </Badge>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-lg mx-auto">
            Available round-the-clock for all your key and locksmith needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl border border-border p-8 flex flex-col gap-7"
          >
            {/* Phone */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                Phone
              </p>
              <a
                href={PHONE_HREF}
                data-ocid="contact.primary_button"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/25 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="font-display font-bold text-2xl sm:text-3xl text-primary group-hover:text-primary/80 transition-colors">
                  {PHONE_DISPLAY}
                </span>
              </a>
              <p className="text-xs text-muted-foreground mt-2 ml-13 pl-1">
                Tap to call us directly
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-border" />

            {/* Address */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                Address
              </p>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground text-sm leading-relaxed">
                  {ADDRESS}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border" />

            {/* Hours */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                Working Hours
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-lg text-foreground">
                    Open 24 Hours
                  </span>
                  <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-500/15 border border-green-500/30 text-green-400 text-xs font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Always Open
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-2xl border border-border overflow-hidden flex flex-col"
          >
            {/* Map placeholder area */}
            <div className="flex-1 min-h-[240px] bg-secondary relative overflow-hidden">
              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(oklch(30% 0.06 250) 1px, transparent 1px), linear-gradient(90deg, oklch(30% 0.06 250) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Concentric circles for map feel */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {[120, 80, 48, 24].map((size) => (
                    <div
                      key={size}
                      className="absolute rounded-full border border-primary/20"
                      style={{
                        width: size,
                        height: size,
                        top: -size / 2,
                        left: -size / 2,
                      }}
                    />
                  ))}
                  {/* Pin */}
                  <div className="relative z-10 w-8 h-8 rounded-full bg-primary shadow-gold flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Location label */}
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/90 backdrop-blur-sm border border-border text-sm text-foreground">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  Wave City, Ghaziabad, UP 201015
                </span>
              </div>
            </div>

            {/* Directions button */}
            <div className="p-6">
              <p className="text-muted-foreground text-sm mb-4">
                Find us at Bhagat Singh Chowk, Wave City Marg, Ghaziabad. Easy
                to reach from Wave City and surrounding areas.
              </p>
              <a
                href={MAPS_HREF}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.map_marker"
              >
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2 gold-glow-hover transition-all">
                  <ExternalLink className="w-4 h-4" />
                  Get Directions on Google Maps
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const hostname = window.location.hostname;
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-[oklch(12%_0.03_250)] border-t border-border pt-12 pb-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <img
                src="/assets/generated/logo-icon-transparent.dim_120x120.png"
                alt="Sardar Ji Key Maker"
                width={28}
                height={28}
                className="w-7 h-7 object-contain"
              />
              <span className="font-display font-bold text-primary text-base">
                Sardar Ji Key Maker
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional Locksmith Services in Ghaziabad, UP
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm text-foreground mb-3 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{ADDRESS}</span>
              </li>
            </ul>
          </div>

          {/* Hours + Quick links */}
          <div>
            <h4 className="font-display font-semibold text-sm text-foreground mb-3 uppercase tracking-wider">
              Hours
            </h4>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground font-semibold">
                Open 24 Hours, 7 Days
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              {["Services", "Why Us", "Contact"].map((label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase().replace(" ", "-")}`}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>
            © {CURRENT_YEAR} Sardar Ji Key Maker Home Services. All rights
            reserved.
          </p>
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
