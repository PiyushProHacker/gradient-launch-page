import { useState } from "react";
import { motion } from "framer-motion";
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
    <motion.div 
      className="flex flex-col items-center justify-center text-center space-y-12 px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Main Heading */}
      <div className="space-y-6">
        <motion.h1 
          className="text-6xl md:text-7xl lg:text-8xl font-bold gradient-text leading-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          {"Coming Soon".split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.4 + index * 0.05,
              }}
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-secondary max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
        >
          From automation of people processes to creating<br />
          an engaged and driven culture.
        </motion.p>
      </div>

      {/* Email Subscription Form */}
      <motion.div 
        className="space-y-4 w-full max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
      >
        <form onSubmit={handleSubmit} className="flex gap-3">
          <Input
            type="email"
            placeholder="Please enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-muted border-muted text-foreground placeholder:text-muted-foreground input-glow transition-all duration-300"
            required
          />
          <Button 
            type="submit" 
            variant="default"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 transition-all duration-300 hover:scale-105"
          >
            Notify Me
          </Button>
        </form>
        
        <motion.p 
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.6 }}
        >
          ⁓ Notify me when App is launched ⁓
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;