"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { navigation } from "@/constants/navigation";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label="Open navigation menu"
          />
        }
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </SheetTrigger>

      <SheetContent side="right" className="w-[320px] sm:max-w-sm">
        <SheetTitle className="sr-only">
          Navigation menu
        </SheetTitle>

        <SheetDescription className="sr-only">
          Browse the main pages of First Choice Japan Tours.
        </SheetDescription>

        <div className="mt-8 px-4">
          <Logo />

          <nav
            aria-label="Mobile navigation"
            className="mt-10 flex flex-col gap-2"
          >
            {navigation.map((item) => (
              <SheetClose
                key={item.href}
                render={
                  <Link
                    href={item.href}
                    className="rounded-lg px-3 py-3 text-lg font-medium transition-colors hover:bg-muted hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                }
              >
                {item.title}
              </SheetClose>
            ))}
          </nav>

          <SheetClose
            render={
                <Link
                    href="/contact"
                    className="mt-8 inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
            }
        >
            Book Now
            </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}