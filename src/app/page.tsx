import SakuraHero from "@/components/SakuraHero";
import NorenTransition from "@/components/NorenTransition";
import FujiPapercraft from "@/components/FujiPapercraft";
import TeacherSection from "@/components/TeacherSection";
import EmaReviews from "@/components/EmaReviews";
import LearningPath from "@/components/LearningPath";
import FloatingSymbols from "@/components/FloatingSymbols";
import BentoBox from "@/components/BentoBox";
import ToriiFooter from "@/components/ToriiFooter";
import Preloader from "@/components/Preloader";
import Omikuji from "@/components/Omikuji";
import { ThemeToggle } from "@/components/ThemeProvider";
import InkCursorTrail from "@/components/InkCursorTrail";
import DarumaButton from "@/components/DarumaButton";
import OrigamiCrane from "@/components/OrigamiCrane";

export default function Home() {
  return (
    <main>
      {/* Preloader */}
      <Preloader />

      {/* Global interactive elements */}
      <ThemeToggle />
      <Omikuji />
      <InkCursorTrail />
      <DarumaButton />
      <OrigamiCrane />

      {/* Hero Section - Sakura Fall */}
      <SakuraHero />

      {/* Noren Curtain Transition */}
      <NorenTransition />

      {/* About / Story Section - Papercraft Mt. Fuji */}
      <FujiPapercraft />

      {/* Japanese Cultural Symbols */}
      <FloatingSymbols />

      {/* Course Selection - Bento Box */}
      <BentoBox />

      {/* Teacher Introduction - Nat San */}
      <TeacherSection />

      {/* Reviews - Ema Wooden Tablets */}
      <EmaReviews />

      {/* Learning Path - Scroll / Roadmap */}
      <LearningPath />

      {/* Torii Gate Footer with Newsletter */}
      <ToriiFooter />
    </main>
  );
}
