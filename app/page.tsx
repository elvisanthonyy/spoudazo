import Nav from "@/components/Nav";
import HeroSection from "@/components/Hero-Section";
import StartWatching from "@/components/StartWatching";
import SpoudazoFor from "@/components/SpoudazoFor";
import StartWatchingHere from "@/components/StartWatchingHere";
import JoinWaitList from "@/components/JoinWaitList";
import YouVersion from "@/components/YouVersion";
import Footer from "@/components/Footer";
import Show from "@/libs/Show";

export default function Home() {
  return (
    <div className="relative">
      <Nav />
      <HeroSection />
      <Show>
        <StartWatching />
      </Show>

      <Show>
        <SpoudazoFor />
      </Show>
      <Show>
        <StartWatchingHere />
      </Show>
      <Show>
        <YouVersion />
      </Show>
      <Show>
        <JoinWaitList />
      </Show>

      <Footer />
    </div>
  );
}
