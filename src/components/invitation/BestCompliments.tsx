import { motion } from "motion/react";
import { Sparkles, Heart } from "lucide-react";
import { invitation } from "@/content/invitation";
import { Ornament, Reveal, SectionTitle } from "./Reveal";

export function BestCompliments() {
  const { familyCompliments } = invitation;

  return (
    <section className="relative overflow-hidden px-5 py-24 sm:py-32">
      {/* Delicate background wash */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, var(--ivory) 0%, color-mix(in oklab, var(--cream) 70%, var(--blush)) 50%, var(--ivory) 100%)",
        }}
      />

      <div className="mx-auto max-w-5xl">
        {/* Sacred Header */}
        <Reveal className="text-center">
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 bg-cream/70 px-6 py-2 shadow-sm backdrop-blur-sm">
            <Sparkles size={14} className="text-gold-deep" />
            <span className="font-display tracking-[0.22em] text-primary text-xs sm:text-sm font-semibold uppercase">
              {familyCompliments.sacredHeading}
            </span>
            <Sparkles size={14} className="text-gold-deep" />
          </div>

          <h2 className="mt-5 font-script text-3xl sm:text-4xl md:text-5xl italic text-primary">
            {familyCompliments.subheading}
          </h2>
          <p className="mt-2 font-sans text-xs tracking-[0.3em] uppercase text-gold-deep">
            With the sacred blessings of our revered ancestors &amp; families
          </p>
          <Ornament className="mt-6" />
        </Reveal>

        {/* Family Cards Grid */}
        <div className="mt-14 space-y-12">
          {/* Family 1: DEROD */}
          <Reveal delay={0.08}>
            <div className="plate paper-grain relative rounded-[2.2rem] p-6 sm:p-10 border border-gold/45 shadow-xl">
              {/* Corner Flourish Accent */}
              <div className="text-center pb-6 border-b border-gold/30">
                <span className="font-sans text-[0.62rem] tracking-[0.36em] uppercase text-gold-deep">
                  Family Heritage (Derod)
                </span>
                <h3 className="mt-2 font-display text-xl sm:text-2xl md:text-3xl text-primary font-medium tracking-wide">
                  KHUSHALBHAI &amp; MALIBEN BHAKTA FAMILY
                </h3>
                <div className="mt-3 inline-block rounded-full bg-sandstone/15 px-5 py-1.5 font-sans text-xs tracking-[0.18em] text-primary/80 font-medium">
                  • LATE KUSHALBHAI &amp; LATE MALIBEN •
                </div>
              </div>

              {/* Generational Branches */}
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Branch 1 */}
                <div className="rounded-2xl border border-gold/25 bg-ivory/60 p-5 backdrop-blur-xs transition-all hover:border-gold/50">
                  <h4 className="font-display text-sm sm:text-base font-semibold text-primary border-b border-gold/20 pb-2">
                    • LATE DHANSUKHBHAI &amp; JASUBEN
                  </h4>
                  <div className="mt-3 space-y-3 font-sans text-xs leading-relaxed text-muted-foreground">
                    <div>
                      <p className="font-medium text-primary">▸ UPESHBHAI &amp; NIMISHABEN</p>
                      <p className="pl-4 text-gold-deep text-[0.72rem] tracking-wider mt-0.5">
                        • ANVI • BHAVIN • ANJALI • ADITI
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-primary">▸ VAISHALIBEN &amp; MANISHBHAI</p>
                      <p className="pl-4 text-gold-deep text-[0.72rem] tracking-wider mt-0.5">• KAVI</p>
                    </div>
                  </div>
                </div>

                {/* Branch 2 */}
                <div className="rounded-2xl border border-gold/25 bg-ivory/60 p-5 backdrop-blur-xs transition-all hover:border-gold/50">
                  <h4 className="font-display text-sm sm:text-base font-semibold text-primary border-b border-gold/20 pb-2">
                    • SURESHBHAI &amp; URMILABEN
                  </h4>
                  <div className="mt-3 space-y-3 font-sans text-xs leading-relaxed text-muted-foreground">
                    <div>
                      <p className="font-medium text-primary">▸ SAPNESHBHAI &amp; RUPALBEN</p>
                      <p className="pl-4 text-gold-deep text-[0.72rem] tracking-wider mt-0.5">• ARNAV</p>
                    </div>
                    <div>
                      <p className="font-medium text-primary">▸ VIMALBHAI &amp; RIMPLEBEN</p>
                      <p className="pl-4 text-gold-deep text-[0.72rem] tracking-wider mt-0.5">
                        • AARYA • VEERA • RIVAAN
                      </p>
                    </div>
                    <div className="pt-1">
                      <p className="font-medium text-primary">▸ PUNAMBEN</p>
                    </div>
                  </div>
                </div>

                {/* Branch 3 */}
                <div className="rounded-2xl border border-gold/25 bg-ivory/60 p-5 backdrop-blur-xs transition-all hover:border-gold/50">
                  <h4 className="font-display text-sm sm:text-base font-semibold text-primary border-b border-gold/20 pb-2">
                    • RAVIBHAI, PRITIBEN &amp; LATE NILAMBEN
                  </h4>
                  <div className="mt-3 space-y-3 font-sans text-xs leading-relaxed text-muted-foreground">
                    <div>
                      <p className="font-medium text-primary">▸ NIMESHBHAI &amp; SWATIBEN</p>
                      <p className="pl-4 text-gold-deep text-[0.72rem] tracking-wider mt-0.5">• NIAM • SAIRA</p>
                    </div>
                    <div className="pt-1">
                      <p className="font-medium text-primary">▸ PRISCILABEN</p>
                    </div>
                  </div>
                </div>

                {/* Branch 4 */}
                <div className="rounded-2xl border border-gold/25 bg-ivory/60 p-5 backdrop-blur-xs transition-all hover:border-gold/50">
                  <h4 className="font-display text-sm sm:text-base font-semibold text-primary border-b border-gold/20 pb-2">
                    • LATE BHARATBHAI &amp; LATE SUSHILABEN
                  </h4>
                  <div className="mt-3 space-y-3 font-sans text-xs leading-relaxed text-muted-foreground">
                    <div>
                      <p className="font-medium text-primary">▸ JIGNESHBHAI &amp; DIPTIBEN</p>
                      <p className="pl-4 text-gold-deep text-[0.72rem] tracking-wider mt-0.5">• AYAN • ARYAN</p>
                    </div>
                    <div className="pt-1">
                      <p className="font-medium text-primary">▸ PRAGNESH BHAI</p>
                    </div>
                  </div>
                </div>

                {/* Branch 5 */}
                <div className="rounded-2xl border border-gold/25 bg-ivory/60 p-5 backdrop-blur-xs transition-all hover:border-gold/50">
                  <h4 className="font-display text-sm sm:text-base font-semibold text-primary border-b border-gold/20 pb-2">
                    • MADHUBEN &amp; LATE VIJAYBHAI
                  </h4>
                  <div className="mt-3 space-y-2 font-sans text-xs leading-relaxed text-muted-foreground">
                    <p className="font-medium text-primary">▸ RAJESHBHAI &amp; HEENABEN</p>
                    <p className="font-medium text-primary">▸ NILESHBHAI &amp; ANABEN</p>
                    <p className="font-medium text-primary">▸ PARESHBHAI &amp; MELISSABEN</p>
                  </div>
                </div>

                {/* Branch 6 */}
                <div className="rounded-2xl border border-gold/25 bg-ivory/60 p-5 backdrop-blur-xs transition-all hover:border-gold/50">
                  <h4 className="font-display text-sm sm:text-base font-semibold text-primary border-b border-gold/20 pb-2">
                    • SUSHILABEN &amp; LATE GOVINDBHAI
                  </h4>
                  <div className="mt-3 space-y-2 font-sans text-xs leading-relaxed text-muted-foreground">
                    <p className="font-medium text-primary">▸ HEMANTBHAI &amp; NIRALIBEN</p>
                    <p className="font-medium text-primary">▸ DARSHNABEN &amp; VIPULBHAI</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Family 2: LOTORVA */}
          <Reveal delay={0.14}>
            <div className="plate paper-grain relative rounded-[2.2rem] p-6 sm:p-10 border border-gold/45 shadow-xl">
              <div className="text-center pb-6 border-b border-gold/30">
                <span className="font-sans text-[0.62rem] tracking-[0.36em] uppercase text-gold-deep">
                  Family Heritage (Lotorva)
                </span>
                <h3 className="mt-2 font-display text-xl sm:text-2xl md:text-3xl text-primary font-medium tracking-wide">
                  MAGHANBHAI &amp; RAMILABEN BHAKTA FAMILY
                </h3>
                <div className="mt-3 inline-block rounded-full bg-sandstone/15 px-5 py-1.5 font-sans text-xs tracking-[0.18em] text-primary/80 font-medium">
                  • LATE MAGANBHAI &amp; LATE RAMILABEN •
                </div>
              </div>

              {/* Members List */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "URMILABEN & SURESHBHAI",
                  "LATE JITESHBHAI & MITABEN",
                  "PALAVIKABEN & ARUNBHAI",
                  "SUNITABEN & KAMLESHBHAI",
                  "HANSABEN & BHUPENDRABHAI",
                ].map((member, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 rounded-2xl border border-gold/25 bg-ivory/60 p-4 backdrop-blur-xs transition-all hover:border-gold/50"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-deep text-xs">
                      <Heart size={13} className="fill-gold/30" />
                    </span>
                    <span className="font-display text-sm font-medium text-primary">
                      • {member}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
