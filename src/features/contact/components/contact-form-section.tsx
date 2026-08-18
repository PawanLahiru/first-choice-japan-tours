"use client";

import { FormEvent, useState } from "react";
import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Container } from "@/components/layout/Container";

const WHATSAPP_NUMBER = "818057963856";

export function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    const fullName = String(formData.get("fullName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const travelDate = String(formData.get("travelDate") || "").trim();
    const guests = String(formData.get("guests") || "").trim();
    const tour = String(formData.get("tour") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const whatsappMessage = [
      "Hello First Choice Japan Tours,",
      "",
      "I would like to make a tour inquiry.",
      "",
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Preferred travel date: ${travelDate || "Not decided"}`,
      `Number of guests: ${guests || "Not provided"}`,
      `Preferred tour: ${tour || "Not decided"}`,
      "",
      "Message:",
      message || "No additional message.",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setIsSubmitting(false);
  }

  return (
    <section className="py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
              Send a Message
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Get in Touch
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Tell us about your travel plans. Your inquiry will open in
              WhatsApp with all the information already prepared.
            </p>

            <div className="mt-8 rounded-2xl bg-green-50 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                  <FaWhatsapp className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Quick WhatsApp Response
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    After clicking the button, review the prepared message and
                    press Send inside WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl"
          >
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Full Name
              </label>

              <Input
                id="fullName"
                name="fullName"
                placeholder="Your full name"
                autoComplete="name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Email Address
              </label>

              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Phone Number
              </label>

              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+81..."
                autoComplete="tel"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="travelDate"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Preferred Travel Date
                </label>

                <Input
                  id="travelDate"
                  name="travelDate"
                  type="date"
                />
              </div>

              <div>
                <label
                  htmlFor="guests"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Number of Guests
                </label>

                <Input
                  id="guests"
                  name="guests"
                  type="number"
                  min="1"
                  max="50"
                  placeholder="2"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="tour"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Preferred Tour
              </label>

              <Input
                id="tour"
                name="tour"
                placeholder="Example: Mount Fuji Day Tour"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Message
              </label>

              <Textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell us about your trip, destinations, interests, or special requests..."
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-green-600 text-white hover:bg-green-700"
            >
              <FaWhatsapp className="mr-2 h-5 w-5" />

              {isSubmitting
                ? "Opening WhatsApp..."
                : "Send Inquiry via WhatsApp"}
            </Button>

            <p className="text-center text-xs leading-5 text-slate-500">
              This form does not store your information. It only prepares a
              WhatsApp message on your device.
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}