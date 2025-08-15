import { Waves } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between w-full px-8 py-6">
      {/* Logo */}
      <div className="flex items-center">
        <Waves className="w-8 h-8 text-foreground" strokeWidth={2} />
      </div>

      {/* Center Navigation */}
      <div className="hidden md:flex items-center space-x-2 text-sm text-secondary">
        <span className="hover:text-foreground transition-colors cursor-pointer">Payment</span>
        <span className="text-muted-foreground">/</span>
        <span className="hover:text-foreground transition-colors cursor-pointer">Services</span>
        <span className="text-muted-foreground">/</span>
        <span className="hover:text-foreground transition-colors cursor-pointer">Account</span>
      </div>

      {/* App Store Badge */}
      <div className="app-store-badge cursor-pointer">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-xs text-white">
          <div className="flex items-center space-x-2">
            <span className="text-xs">🍎</span>
            <div>
              <div className="text-[10px] opacity-70">Coming Soon on</div>
              <div className="text-xs font-medium">App Store</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;