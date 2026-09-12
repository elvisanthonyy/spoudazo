import Nav from "@/components/Nav";
import HeroSection from "@/components/Hero-Section";
import StartWatching from "@/components/StartWatching";
import SpoudazoFor from "@/components/SpoudazoFor";
import StartWatchingHere from "@/components/StartWatchingHere";
import JoinWaitList from "@/components/JoinWaitList";
import YouVersion from "@/components/YouVersion";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <Nav />
      <HeroSection />
      <StartWatching />
      <SpoudazoFor />
      <StartWatchingHere />
      <YouVersion />
      <JoinWaitList />
      <Footer />
    </div>
  );
}
