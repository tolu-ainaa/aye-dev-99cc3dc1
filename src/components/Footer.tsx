import { Mail, Twitter, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background px-4 py-12 md:px-8">
      <div className="container-narrow">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo and copyright */}
          <div className="text-center md:text-left">
            <div className="mb-2 text-xl font-bold text-foreground">Grapul</div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Grapul. All rights reserved.
            </p>
          </div>

          {/* Contact email */}
          <a
            href="mailto:hello@grapul.com"
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
            <span>hello@grapul.com</span>
          </a>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
