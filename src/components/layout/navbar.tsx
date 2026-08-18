"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { navigation } from "@/constants/navigation";
import { Logo } from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">

          <Logo />

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition hover:text-[#D90429]"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button>
              Book Now
            </Button>
          </div>

          <button
            className="lg:hidden"
            aria-label="Open Menu"
          >
            <Menu />
          </button>

        </div>
      </Container>
    </header>
  );
}