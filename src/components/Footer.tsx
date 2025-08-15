const Footer = () => {
  return (
    <footer className="flex items-center justify-between w-full px-8 py-6">
      {/* Privacy Policy */}
      <div className="text-sm text-muted-foreground hover:text-secondary transition-colors cursor-pointer">
        Privacy Policy
      </div>

      {/* Social Links */}
      <div className="text-sm text-muted-foreground hover:text-secondary transition-colors cursor-pointer">
        Facebook / Instagram / LinkedIn
      </div>
    </footer>
  );
};

export default Footer;