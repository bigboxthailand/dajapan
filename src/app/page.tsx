import SakuraHero from "@/components/SakuraHero";
import NorenTransition from "@/components/NorenTransition";
import FujiPapercraft from "@/components/FujiPapercraft";
import TeacherSection from "@/components/TeacherSection";
import EmaReviews from "@/components/EmaReviews";
import LearningPath from "@/components/LearningPath";
import FloatingSymbols from "@/components/FloatingSymbols";
import ToriiFooter from "@/components/ToriiFooter";
import Preloader from "@/components/Preloader";
import Omikuji from "@/components/Omikuji";

export default function Home() {
  return (
    <main>
      {/* Preloader */}
      <Preloader />

      {/* Omikuji floating button (always visible) */}
      <Omikuji />

      {/* Hero Section - Sakura Fall */}
      <SakuraHero />

      {/* Noren Curtain Transition */}
      <NorenTransition />

      {/* About / Story Section - Papercraft Mt. Fuji */}
      <FujiPapercraft />

      {/* Japanese Cultural Symbols */}
      <FloatingSymbols />

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
