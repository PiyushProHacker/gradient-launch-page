import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { BackgroundPaths } from "@/components/BackgroundPaths";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">
      {/* Animated Background */}
      <BackgroundPaths />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center relative z-10">
        <HeroSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
