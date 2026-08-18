"use client";

import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "818057963856";

export function FloatingWhatsapp() {
  const message = encodeURIComponent(
    "Hello First Choice Japan Tours, I would like to know more about your Japan tours."
  );

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with First Choice Japan Tours on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] p-3 text-white shadow-[0_10px_35px_rgba(37,211,102,0.4)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#20bd5a] hover:shadow-[0_14px_40px_rgba(37,211,102,0.5)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-300 sm:bottom-8 sm:right-8"
    >
      <span className="hidden whitespace-nowrap pl-2 text-sm font-semibold group-hover:inline-block lg:group-hover:inline-block">
        Chat with us
      </span>

      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
        <FaWhatsapp className="h-8 w-8" aria-hidden="true" />
      </span>
    </a>
  );
}