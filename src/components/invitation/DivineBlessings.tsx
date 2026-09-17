import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { Ornament, Reveal, SectionTitle } from "./Reveal";

const ganapatiImg = "/images/ganapati-bapa.jpg";
const kabirImg = "/images/sant-kabir-ji.jpg";

export function DivineBlessings() {
  return (
    <section className="relative overflow-hidden px-5 py-20 sm:py-24">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, var(--ivory) 0%, color-mix(in oklab, var(--cream) 82%, var(--peach)) 50%, var(--ivory) 100%)",
        }}
      />

      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 bg-cream/70 px-6 py-1.5 shadow-xs backdrop-blur-xs">
            <Sparkles size={13} className="text-gold-deep" />
            <span className="font-display text-[0.68rem] tracking-[0.25em] text-gold-deep font-semibold uppercase">
              Sacred Invocations &amp; Blessings
            </span>
            <Sparkles size={13} className="text-gold-deep" />
          </div>

          <SectionTitle
            eyebrow=""
            title="Divine Blessings"
            note="Invoking divine grace, eternal harmony & heartfelt reverence for our sacred beginning"
            className="mt-4"
          />
          <Ornament className="mt-6" />
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {/* Card 1: Lord Ganapati */}
          <Reveal delay={0.08}>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="plate paper-grain h-full rounded-[2rem] p-6 sm:p-7 border border-gold/45 shadow-xl text-center flex flex-col items-center"
            >
              <div className="relative overflow-hidden rounded-2xl border-2 border-gold/40 shadow-md w-48 h-48 sm:w-56 sm:h-56">
                <img
                  src={ganapatiImg}
                  alt="Watercolor painting of Ganapati Bapa blessing the union"
                  width={600}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-5 inline-block rounded-full bg-sandstone/20 px-4 py-1 font-sans text-[0.65rem] tracking-[0.2em] text-gold-deep font-semibold uppercase">
                ॥ श्री गणेशाय नमः ॥
              </div>

              <h3 className="mt-3 font-display text-2xl text-primary font-medium">
                Ganapati Bapa
              </h3>

              <p className="mt-3 font-serif text-sm italic text-primary/85 leading-relaxed">
                वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।<br />
                निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥
              </p>

              <p className="mt-3 font-sans text-xs text-muted-foreground leading-relaxed">
                Revered remover of obstacles and lord of auspicious beginnings, blessing this sacred bond with eternal joy, peace, and prosperity.
              </p>
            </motion.div>
          </Reveal>

          {/* Card 2: Sant Kabir Ji */}
          <Reveal delay={0.16}>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="plate paper-grain h-full rounded-[2rem] p-6 sm:p-7 border border-gold/45 shadow-xl text-center flex flex-col items-center"
            >
              <div className="relative overflow-hidden rounded-2xl border-2 border-gold/40 shadow-md w-48 h-48 sm:w-56 sm:h-56">
                <img
                  src={kabirImg}
                  alt="Watercolor portrait of Sant Kabir Ji blessing the union"
                  width={600}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-5 inline-block rounded-full bg-sandstone/20 px-4 py-1 font-sans text-[0.65rem] tracking-[0.2em] text-gold-deep font-semibold uppercase">
                ॥ श्री रामकबीर सत्य छे ॥
              </div>

              <h3 className="mt-3 font-display text-2xl text-primary font-medium">
                Sant Kabir Ji
              </h3>

              <p className="mt-3 font-serif text-sm italic text-primary/85 leading-relaxed">
                पोथी पढ़ि पढ़ि जग मुआ, पंडित भया न कोय ।<br />
                ढाई आखर प्रेम का, पढ़े सो पंडित होय ॥
              </p>

              <p className="mt-3 font-sans text-xs text-muted-foreground leading-relaxed">
                Revered spiritual master and guiding light of our heritage, guiding our families with wisdom, unconditional love, and pure devotion.
              </p>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
