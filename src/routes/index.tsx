import { createFileRoute } from "@tanstack/react-router";
import { IntroGate } from "@/components/invitation/IntroGate";
import { MusicPlayer } from "@/components/invitation/MusicPlayer";
import { Hero } from "@/components/invitation/Hero";
import { DivineBlessings } from "@/components/invitation/DivineBlessings";
import { CoupleStory } from "@/components/invitation/CoupleStory";
import { Countdown } from "@/components/invitation/Countdown";
import { Details } from "@/components/invitation/Details";
import { Timeline } from "@/components/invitation/Timeline";
import { BestCompliments } from "@/components/invitation/BestCompliments";
import { Gallery } from "@/components/invitation/Gallery";
import { Footer } from "@/components/invitation/Footer";
import { invitation } from "@/content/invitation";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: invitation.meta.title },
      { name: "description", content: invitation.meta.description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: invitation.meta.siteName },
      { property: "og:url", content: invitation.meta.url },
      { property: "og:title", content: invitation.meta.title },
      { property: "og:description", content: invitation.meta.description },
      { property: "og:image", content: invitation.meta.ogImage },
      { property: "og:image:secure_url", content: invitation.meta.ogImage },
      { property: "og:image:type", content: invitation.meta.imageType },
      { property: "og:image:width", content: String(invitation.meta.imageWidth) },
      { property: "og:image:height", content: String(invitation.meta.imageHeight) },
      { property: "og:image:alt", content: invitation.meta.imageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:url", content: invitation.meta.url },
      { name: "twitter:title", content: invitation.meta.title },
      { name: "twitter:description", content: invitation.meta.description },
      { name: "twitter:image", content: invitation.meta.ogImage },
      { name: "twitter:image:alt", content: invitation.meta.imageAlt },
      { itemProp: "name", content: invitation.meta.title },
      { itemProp: "description", content: invitation.meta.description },
      { itemProp: "image", content: invitation.meta.ogImage },
    ],
    links: [
      { rel: "canonical", href: invitation.meta.url },
      { rel: "image_src", href: invitation.meta.ogImage },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <IntroGate />
      <MusicPlayer />
      <Hero />
      <DivineBlessings />
      <CoupleStory />
      <Countdown />
      <Details />
      <Timeline />
      <BestCompliments />
      <Gallery />
      <Footer />
    </main>
  );
}
