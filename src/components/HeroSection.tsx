import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
  };

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-12 px-8">
      {/* Main Heading */}
      <div className="space-y-6">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold gradient-text leading-tight">
          Coming Soon
        </h1>
        
        <p className="text-lg md:text-xl text-secondary max-w-2xl leading-relaxed">
          From automation of people processes to creating<br />
          an engaged and driven culture.
        </p>
      </div>

      {/* Email Subscription Form */}
      <div className="space-y-4 w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex gap-3">
          <Input
            type="email"
            placeholder="Please enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-muted border-muted text-foreground placeholder:text-muted-foreground input-glow"
            required
          />
          <Button 
            type="submit" 
            variant="default"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-6"
          >
            Notify Me
          </Button>
        </form>
        
        <p className="text-sm text-muted-foreground">
          ⁓ Notify me when App is launched ⁓
        </p>
      </div>
    </div>
  );
};

export default HeroSection;