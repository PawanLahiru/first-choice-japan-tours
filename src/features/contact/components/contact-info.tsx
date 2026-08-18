"use client";

import type { LucideIcon } from "lucide-react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/layout/Container";

type ContactItem = {
  icon: LucideIcon;
  title: string;
  value: string;
  href?: string;
  external?: boolean;
};

const contactInfo: ContactItem[] = [
  {
    icon: Phone,
    title: "Phone",
    value: "+81 80-5796-3856",
    href: "tel:+818057963856",
  },
  {
    icon: Mail,
    title: "Email",
    value: "Japanfirstchoice@gmail.com",
    href: "mailto:Japanfirstchoice@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Tokyo, Japan",
    href: "https://www.google.com/maps/search/?api=1&query=Tokyo%2C%20Japan",
    external: true,
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "09:00 - 18:00",
  },
];

export function ContactInfo() {
  return (
    <section className="relative z-20 -mt-16">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {contactInfo.map((item) => (
            <ContactCard key={item.title} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ContactCard({ item }: { item: ContactItem }) {
  const Icon = item.icon;

  const content = (
    <>
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-600 group-active:scale-90">
        <Icon className="h-6 w-6 text-red-600 transition-all duration-300 group-hover:rotate-12 group-hover:text-white group-hover:animate-pulse" />
      </div>

      <h3 className="mt-5 font-bold text-slate-900 transition-colors group-hover:text-red-600">
        {item.title}
      </h3>

      <p className="mt-3 break-words text-slate-500 transition-colors group-hover:text-slate-700">
        {item.value}
      </p>
    </>
  );

  const className =
    "group block rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-200 active:scale-[0.98]";

  if (!item.href) {
    return <div className={className}>{content}</div>;
  }

  return (
    <a
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      aria-label={`${item.title}: ${item.value}`}
      className={className}
    >
      {content}
    </a>
  );
}