"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { faqCategories } from "@/data/faqs";
import { Container } from "@/components/layout/Container";

export function FAQList() {
  const [activeCategory, setActiveCategory] = useState(
    faqCategories[0]?.id ?? "",
  );

  const [openQuestion, setOpenQuestion] = useState<string | null>(
    faqCategories[0]?.faqs[0]?.id ?? null,
  );

  const selectedCategory =
    faqCategories.find((category) => category.id === activeCategory) ??
    faqCategories[0];

  function handleCategoryChange(categoryId: string) {
    const category = faqCategories.find((item) => item.id === categoryId);

    setActiveCategory(categoryId);
    setOpenQuestion(category?.faqs[0]?.id ?? null);
  }

  function toggleQuestion(questionId: string) {
    setOpenQuestion((current) =>
      current === questionId ? null : questionId,
    );
  }

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
          <aside>
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
                Help Center
              </p>

              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Find Your Answer
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Select a category to quickly find information about your tour.
              </p>

              <div
                className="mt-8 flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible"
                role="tablist"
                aria-label="FAQ categories"
              >
                {faqCategories.map((category) => {
                  const isActive = category.id === activeCategory;

                  return (
                    <button
                      key={category.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => handleCategoryChange(category.id)}
                      className={[
                        "shrink-0 rounded-2xl border px-5 py-4 text-left text-sm font-semibold transition",
                        isActive
                          ? "border-red-600 bg-red-600 text-white shadow-lg shadow-red-600/20"
                          : "border-slate-200 bg-white text-slate-700 hover:border-red-200 hover:bg-red-50 hover:text-red-600",
                      ].join(" ")}
                    >
                      {category.title}
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          <div>
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-slate-900">
                {selectedCategory.title}
              </h3>

              <p className="mt-3 text-slate-600">
                {selectedCategory.description}
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              {selectedCategory.faqs.map((faq, index) => {
                const isOpen = openQuestion === faq.id;
                const contentId = `faq-answer-${faq.id}`;
                const buttonId = `faq-question-${faq.id}`;

                return (
                  <div
                    key={faq.id}
                    className={
                      index !== selectedCategory.faqs.length - 1
                        ? "border-b border-slate-200"
                        : ""
                    }
                  >
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                      onClick={() => toggleQuestion(faq.id)}
                      className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-8"
                    >
                      <span className="text-base font-semibold text-slate-900 sm:text-lg">
                        {faq.question}
                      </span>

                      <ChevronDown
                        className={[
                          "h-5 w-5 shrink-0 text-red-600 transition-transform duration-300",
                          isOpen ? "rotate-180" : "",
                        ].join(" ")}
                      />
                    </button>

                    <div
                      id={contentId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={[
                        "grid transition-all duration-300 ease-in-out",
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0",
                      ].join(" ")}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 leading-8 text-slate-600 sm:px-8 sm:pb-8">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 rounded-3xl bg-slate-900 px-6 py-8 text-white sm:px-10">
              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-2xl font-bold">
                    Still have a question?
                  </h3>

                  <p className="mt-2 text-slate-300">
                    Send us a message and we will help you plan your trip.
                  </p>
                </div>

                <a
                  href="https://wa.me/818057963856?text=Hello%20First%20Choice%20Japan%20Tours%2C%20I%20have%20a%20question%20about%20your%20tours."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}