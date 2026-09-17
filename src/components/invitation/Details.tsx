import { useState } from "react";
import { motion } from "motion/react";
import { CalendarPlus, Clock, MapPin, Building2, Hotel, CheckCircle, Copy, ExternalLink, CalendarCheck } from "lucide-react";
import { invitation } from "@/content/invitation";
import { Ornament, Reveal, SectionTitle } from "./Reveal";

function buildIcs() {
  const start = new Date(invitation.dateISO);
  const end = new Date(start.getTime() + 8 * 3_600_000);
  const stamp = (d: Date) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Wedding Storybook//EN",
    "BEGIN:VEVENT",
    `UID:${start.getTime()}@wedding`,
    `DTSTAMP:${stamp(new Date())}`,
    `DTSTART:${stamp(start)}`,
    `DTEND:${stamp(end)}`,
    `SUMMARY:${invitation.couple.bride} & ${invitation.couple.groom} — Wedding & Reception`,
    `LOCATION:${invitation.venue.name}, ${invitation.venue.address}`,
    `DESCRIPTION:Celebrate the wedding of ${invitation.couple.bride} and ${invitation.couple.groom}. Barat at 4:00 PM, Ceremony at 5:00 PM, Reception to follow.`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(lines.join("\r\n"))}`;
}

export function Details() {
  const [copiedVenue, setCopiedVenue] = useState(false);
  const [copiedHotel, setCopiedHotel] = useState(false);

  const venueMaps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    invitation.venue.mapsQuery,
  )}`;

  const hotelMaps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    invitation.hotel.mapsQuery,
  )}`;

  const copyAddress = (text: string, isVenue: boolean) => {
    navigator.clipboard?.writeText(text);
    if (isVenue) {
      setCopiedVenue(true);
      setTimeout(() => setCopiedVenue(false), 2500);
    } else {
      setCopiedHotel(true);
      setTimeout(() => setCopiedHotel(false), 2500);
    }
  };

  return (
    <section id="details" className="relative overflow-hidden px-5 py-24 sm:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--peach) 26%, var(--ivory)) 0%, var(--cream) 45%, var(--ivory) 100%)",
        }}
      />

      <div className="mx-auto max-w-4xl">
        <SectionTitle eyebrow="Celebration Details" title="Venue, Hotel & RSVP" />
        <Ornament className="mt-8" />

        {/* Primary Venue & Schedule Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Main Venue Card */}
          <Reveal delay={0.05}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="plate paper-grain h-full rounded-[2rem] p-7 border border-gold/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gold/15 text-gold-deep">
                    <Building2 size={20} strokeWidth={1.6} />
                  </span>
                  <span className="font-sans text-[0.6rem] tracking-[0.3em] uppercase text-gold-deep">
                    Official Venue
                  </span>
                </div>

                <h3 className="mt-5 font-display text-2xl text-primary font-medium">
                  {invitation.venue.name}
                </h3>
                <p className="mt-2 text-sm font-sans leading-relaxed text-foreground/85">
                  {invitation.venue.address}
                </p>

                <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-sandstone/15 px-3 py-1.5 font-sans text-xs text-primary/80">
                  <Clock size={13} className="text-gold-deep" />
                  <span>{invitation.timeLabel}</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-gold/20 flex flex-wrap gap-2">
                <a
                  href={venueMaps}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 font-sans text-[0.68rem] tracking-wider text-primary-foreground uppercase hover:bg-primary/90 transition-colors"
                >
                  <MapPin size={13} /> Get Directions
                </a>
                <button
                  type="button"
                  onClick={() => copyAddress(invitation.venue.address, true)}
                  className="glass-plate inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-sans text-[0.68rem] tracking-wider text-primary uppercase transition-colors hover:bg-cream"
                >
                  {copiedVenue ? <CheckCircle size={13} className="text-olive" /> : <Copy size={13} />}
                  {copiedVenue ? "Copied!" : "Copy Address"}
                </button>
              </div>
            </motion.div>
          </Reveal>

          {/* Hotel Accommodation Card */}
          <Reveal delay={0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="plate paper-grain h-full rounded-[2rem] p-7 border border-gold/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gold/15 text-gold-deep">
                    <Hotel size={20} strokeWidth={1.6} />
                  </span>
                  <span className="font-sans text-[0.6rem] tracking-[0.3em] uppercase text-gold-deep">
                    Guest Accommodation
                  </span>
                </div>

                <h3 className="mt-5 font-display text-2xl text-primary font-medium">
                  {invitation.hotel.name}
                </h3>
                <p className="mt-2 text-sm font-sans leading-relaxed text-foreground/85">
                  {invitation.hotel.address}
                </p>

                <p className="mt-4 font-sans text-xs text-muted-foreground leading-relaxed">
                  {invitation.hotel.note}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-gold/20 flex flex-wrap gap-2">
                <a
                  href={hotelMaps}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 font-sans text-[0.68rem] tracking-wider text-primary-foreground uppercase hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink size={13} /> View Hotel Map
                </a>
                <button
                  type="button"
                  onClick={() => copyAddress(invitation.hotel.address, false)}
                  className="glass-plate inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-sans text-[0.68rem] tracking-wider text-primary uppercase transition-colors hover:bg-cream"
                >
                  {copiedHotel ? <CheckCircle size={13} className="text-olive" /> : <Copy size={13} />}
                  {copiedHotel ? "Copied!" : "Copy Address"}
                </button>
              </div>
            </motion.div>
          </Reveal>
        </div>

        {/* Dedicated RSVP Slide / Card */}
        <Reveal delay={0.16} className="mt-8">
          <div className="plate paper-grain relative overflow-hidden rounded-[2.2rem] p-8 sm:p-12 border-2 border-gold/50 shadow-2xl text-center">
            <span className="inline-block rounded-full bg-sandstone/20 px-5 py-1.5 font-sans text-[0.65rem] tracking-[0.32em] text-gold-deep uppercase font-semibold">
              RSVP Request
            </span>

            <h3 className="mt-4 font-script text-3xl sm:text-4xl text-primary italic font-normal">
              {invitation.rsvp.callout}
            </h3>

            <p className="mx-auto mt-3 max-w-lg font-sans text-sm text-foreground/80 leading-relaxed">
              {invitation.rsvp.note} Please confirm your attendance by October 15th, 2026 to help us prepare a seat of honor for you.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <motion.a
                href={buildIcs()}
                download="Punam-Jagdish-Wedding.ics"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-sans text-[0.7rem] tracking-[0.24em] text-primary-foreground uppercase shadow-md"
              >
                <CalendarPlus size={15} strokeWidth={1.6} /> Add to Calendar
              </motion.a>

              <motion.a
                href="#timeline"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="glass-plate inline-flex items-center gap-2 rounded-full px-7 py-3 font-sans text-[0.7rem] tracking-[0.24em] text-primary uppercase hover:bg-cream"
              >
                <CalendarCheck size={15} strokeWidth={1.6} /> View Full Schedule
              </motion.a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
