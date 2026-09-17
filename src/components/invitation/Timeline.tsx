import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Clock, MapPin, Sparkles } from "lucide-react";
const garden = "https://media.invitestory.in/ever-after-bloom/src/assets/garden-courtyard.jpg";
import { invitation } from "@/content/invitation";
import { Reveal, SectionTitle } from "./Reveal";

/** Illustrated wedding events timeline with animated drawing vine */
export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const draw = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="timeline" className="relative overflow-hidden px-5 py-24 sm:py-28">
      <img
        src={garden}
        alt=""
        aria-hidden
        loading="lazy"
        width={1536}
        height={1024}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, var(--ivory) 0%, color-mix(in oklab, var(--ivory) 78%, transparent) 25%, color-mix(in oklab, var(--ivory) 78%, transparent) 75%, var(--ivory) 100%)",
        }}
      />

      <div className="mx-auto max-w-3xl">
        <SectionTitle
          eyebrow="Wedding Itinerary"
          title="Events & Celebrations"
          note="December 22nd & 23rd, 2026"
        />

        <div ref={ref} className="relative mt-16 pl-10 sm:pl-16">
          {/* Animated vine */}
          <svg
            aria-hidden
            className="absolute top-0 left-2.5 h-full w-8 sm:left-5"
            viewBox="0 0 40 1000"
            preserveAspectRatio="none"
            fill="none"
          >
            <motion.path
              d="M20 0 C34 100, 6 200, 20 300 C34 400, 6 500, 20 600 C34 700, 6 800, 20 900 C34 950, 20 1000, 20 1000"
              stroke="var(--olive)"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.65"
              style={{ pathLength: draw }}
            />
            {[100, 280, 480, 680, 880].map((y, i) => (
              <motion.ellipse
                key={y}
                cx={i % 2 ? 30 : 10}
                cy={y}
                rx="9"
                ry="4.5"
                fill="var(--sage)"
                opacity="0.7"
                transform={`rotate(${i % 2 ? 24 : -24} ${i % 2 ? 30 : 10} ${y})`}
                style={{ scale: draw }}
              />
            ))}
          </svg>

          <ol className="space-y-12">
            {invitation.events.map((evt, i) => (
              <li key={evt.no}>
                <Reveal delay={i * 0.08}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="plate paper-grain relative rounded-[2rem] p-6 sm:p-9 border border-gold/45 shadow-xl"
                  >
                    {/* Badge number */}
                    <span
                      className="absolute -left-[2.85rem] top-7 flex h-8 w-8 items-center justify-center rounded-full font-display text-xs font-semibold text-primary-foreground sm:-left-[4.2rem]"
                      style={{ background: "var(--gradient-gold)" }}
                    >
                      {evt.no}
                    </span>

                    {/* Top Metadata Row */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-sans text-[0.62rem] font-semibold tracking-[0.3em] uppercase text-gold-deep">
                        {evt.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-sandstone/15 px-3 py-1 font-sans text-xs font-medium text-primary">
                        <Clock size={12} className="text-gold-deep" />
                        {evt.time}
                      </span>
                    </div>

                    {/* Event Name & Poetic Tagline */}
                    <div className="mt-4">
                      <h3 className="text-2xl font-display text-primary sm:text-3xl">
                        {evt.name}
                      </h3>
                      {evt.tagline && (
                        <p className="mt-1 font-script text-2xl sm:text-3xl italic text-gold-deep">
                          {evt.tagline}
                        </p>
                      )}
                    </div>

                    {/* Invitation Text / Banner */}
                    {evt.inviteText && (
                      <p className="mt-3 font-sans text-xs tracking-wider uppercase text-primary/75 font-medium">
                        {evt.inviteText}
                      </p>
                    )}

                    {/* Hosts for Pithi */}
                    {evt.host && (
                      <div className="mt-4 rounded-xl border border-gold/20 bg-ivory/60 p-4 text-xs font-sans text-primary leading-relaxed">
                        <p className="font-medium">{evt.host}</p>
                      </div>
                    )}

                    {/* Lineage for Wedding Day */}
                    {evt.brideParents && evt.groomParents && (
                      <div className="mt-4 rounded-xl border border-gold/20 bg-ivory/60 p-4 text-center">
                        <p className="font-display text-lg text-primary">PUNAM</p>
                        <p className="text-xs font-sans text-muted-foreground">{evt.brideParents}</p>
                        <p className="my-1 font-script text-lg italic text-gold-deep">weds</p>
                        <p className="font-display text-lg text-primary">JAGDISH</p>
                        <p className="text-xs font-sans text-muted-foreground">{evt.groomParents}</p>
                      </div>
                    )}

                    {/* Timing note if reception */}
                    {evt.note && (
                      <div className="mt-3 inline-block rounded-full bg-sandstone/15 px-3 py-0.5 font-sans text-xs text-gold-deep font-medium">
                        {evt.note}
                      </div>
                    )}

                    {/* Ceremony Artwork (Clean, text-free illustration) */}
                    {evt.image && (
                      <div className="mt-5 overflow-hidden rounded-2xl border border-gold/30 shadow-sm">
                        <img
                          src={evt.image}
                          alt={evt.name}
                          loading="lazy"
                          className={`aspect-[16/10] sm:aspect-[16/9] w-full object-cover ${evt.imagePosition ?? "object-top"}`}
                        />
                      </div>
                    )}

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground font-sans">
                      {evt.description}
                    </p>

                    {/* Bottom Venue & Attire Row */}
                    <div className="mt-6 pt-5 border-t border-gold/20 flex flex-wrap items-center justify-between gap-3 text-xs font-sans">
                      <div className="flex items-center gap-1.5 text-foreground/80">
                        <MapPin size={13} className="text-gold-deep shrink-0" />
                        <span>{evt.venueName}</span>
                      </div>

                      {evt.dressCode && (
                        <div className="flex items-center gap-1.5 rounded-full bg-sandstone/15 px-3 py-1 text-primary font-medium">
                          <Sparkles size={12} className="text-gold-deep shrink-0" />
                          <span>Attire: {evt.dressCode}</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
