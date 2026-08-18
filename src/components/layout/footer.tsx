import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { Container } from "./Container";
import { Logo } from "./logo";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Tours", href: "/tours" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <Logo />

            <p className="mt-6 text-sm leading-7 text-slate-400">
              Discover Japan through unforgettable private tours led by local
              experts. From Mount Fuji to Kyoto, we'll help you create memories
              that last a lifetime.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tours */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Popular Tours
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>Mount Fuji Tour</li>
              <li>Kyoto Highlights</li>
              <li>Tokyo City Tour</li>
              <li>Nara Day Trip</li>
              <li>Osaka Food Tour</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Contact
            </h3>

            <div className="space-y-4 text-slate-400">
              <div className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 text-red-500" />
                <span>Tokyo, Japan</span>
              </div>

              <div className="flex gap-3">
                <Phone className="mt-1 h-5 w-5 text-red-500" />
                <span> +81 80-5796-3856</span>
              </div>

              <div className="flex gap-3">
                <Mail className="mt-1 h-5 w-5 text-red-500" />
                <span>japanfirstchoice@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} First Choice Japan Tours. All rights
          reserved.
        </div>
      </Container>
    </footer>
  );
}