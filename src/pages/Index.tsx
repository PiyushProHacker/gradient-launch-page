import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center">
        <HeroSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
