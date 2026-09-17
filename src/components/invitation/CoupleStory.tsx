import { motion } from "motion/react";
import { Heart } from "lucide-react";
import { invitation } from "@/content/invitation";
import { Ornament, Reveal, SectionTitle } from "./Reveal";

const couplePortrait = "/images/couple-portrait.jpg";

export function CoupleStory() {
  const { story } = invitation;

  return (
    <section className="relative overflow-hidden px-5 py-24 sm:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, var(--ivory) 0%, color-mix(in oklab, var(--blush) 26%, var(--ivory)) 50%, var(--ivory) 100%)",
        }}
      />
      <div className="mx-auto max-w-5xl">
        <SectionTitle eyebrow="Chapter One" title={story.title} note={story.subtitle} />
        <Ornament className="mt-8" />

        {/* Grand Centerpiece: Real Couple Portrait */}
        <Reveal delay={0.08} className="mt-12">
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 180, damping: 20 }}
            className="plate paper-grain mx-auto max-w-3xl overflow-hidden rounded-[2.5rem] p-4 sm:p-7 border-2 border-gold/45 shadow-2xl"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-gold/30">
              <motion.img
                src={couplePortrait}
                alt="Portrait of Punam Bhakta and Jagdish Shahani"
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-square sm:aspect-[4/3] w-full object-cover object-center"
                initial={{ scale: 1.04 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              />
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 65%, color-mix(in oklab, var(--primary) 70%, transparent) 100%)",
                }}
              />
              <div className="absolute bottom-4 left-6 right-6 text-center text-primary-foreground sm:bottom-6">
                <p className="font-sans text-[0.68rem] tracking-[0.35em] text-sandstone uppercase font-medium">
                  Together In Love &amp; Devotion
                </p>
                <h3 className="mt-1 font-display text-2xl sm:text-3xl text-white drop-shadow-md">
                  Punam &amp; Jagdish
                </h3>
              </div>
            </div>

            {/* Couple Introductions */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2 pt-2">
              <div className="rounded-2xl border border-gold/25 bg-ivory/70 p-5 text-center backdrop-blur-xs">
                <span className="font-sans text-[0.62rem] tracking-[0.38em] text-gold-deep uppercase font-semibold">
                  {story.bride.role}
                </span>
                <h4 className="mt-2 font-display text-2xl text-primary">{story.bride.name}</h4>
                <p className="mt-3 font-sans text-xs leading-relaxed text-muted-foreground">
                  {story.bride.text}
                </p>
              </div>

              <div className="rounded-2xl border border-gold/25 bg-ivory/70 p-5 text-center backdrop-blur-xs">
                <span className="font-sans text-[0.62rem] tracking-[0.38em] text-gold-deep uppercase font-semibold">
                  {story.groom.role}
                </span>
                <h4 className="mt-2 font-display text-2xl text-primary">{story.groom.name}</h4>
                <p className="mt-3 font-sans text-xs leading-relaxed text-muted-foreground">
                  {story.groom.text}
                </p>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
