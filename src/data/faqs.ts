export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export type FAQCategory = {
  id: string;
  title: string;
  description: string;
  faqs: FAQ[];
};

export const faqCategories: FAQCategory[] = [
  {
    id: "booking",
    title: "Booking & Reservations",
    description:
      "Everything you need to know about reserving and managing your tour.",
    faqs: [
      {
        id: "how-to-book",
        question: "How do I book a tour?",
        answer:
          "Complete our inquiry form or contact us through WhatsApp. Tell us your preferred destination, travel date, group size, and any special requests. We will help plan your itinerary and confirm the booking details with you.",
      },
      {
        id: "booking-in-advance",
        question: "How far in advance should I book?",
        answer:
          "We recommend booking at least two to four weeks before your preferred travel date. For busy periods such as cherry blossom season, Golden Week, summer holidays, and autumn foliage season, booking earlier is strongly recommended.",
      },
      {
        id: "booking-deposit",
        question: "Do you require a deposit?",
        answer:
          "A deposit may be required to secure your reservation. The amount and payment instructions will be explained clearly before your booking is confirmed.",
      },
      {
        id: "change-booking",
        question: "Can I change my booking?",
        answer:
          "Yes. Please contact us as early as possible if you need to change your travel date, pickup location, group size, or itinerary. Changes are subject to guide and vehicle availability.",
      },
      {
        id: "cancel-booking",
        question: "Can I cancel my booking?",
        answer:
          "Yes. Cancellation conditions depend on the tour and how close the cancellation is to the travel date. We will provide the applicable cancellation policy before confirming your reservation.",
      },
    ],
  },
  {
    id: "tour-information",
    title: "Tour Information",
    description:
      "Learn more about our private tours, itineraries, and destinations.",
    faqs: [
      {
        id: "private-tours",
        question: "Are your tours private?",
        answer:
          "Yes. We specialize in private tours for couples, families, friends, and small groups. Your tour will be arranged specifically for your group.",
      },
      {
        id: "custom-itinerary",
        question: "Can I customize my itinerary?",
        answer:
          "Absolutely. We can adjust destinations, attractions, schedules, meal stops, walking time, and other details based on your interests and travel needs.",
      },
      {
        id: "tour-destinations",
        question: "Which destinations do you cover?",
        answer:
          "We arrange tours in Tokyo, Kyoto, Osaka, Nara, Mount Fuji, Hakone, Nikko, Yokohama, Kamakura, and other destinations across Japan. Contact us if your preferred location is not listed.",
      },
      {
        id: "tour-duration",
        question: "How long are your tours?",
        answer:
          "We offer half-day, full-day, and multi-day experiences. The exact duration depends on the destination, itinerary, travel time, and your preferences.",
      },
      {
        id: "unlisted-places",
        question: "Can I visit places that are not listed on the website?",
        answer:
          "Yes. Our website shows popular examples, but we can create a personalized itinerary that includes other attractions and destinations you would like to visit.",
      },
    ],
  },
  {
    id: "transportation",
    title: "Transportation & Pickup",
    description:
      "Information about vehicles, hotel pickup, and airport transportation.",
    faqs: [
      {
        id: "hotel-pickup",
        question: "Do you provide hotel pickup?",
        answer:
          "Yes. Hotel pickup is available for most private tours within the service area. Please provide your hotel name and address when making your inquiry.",
      },
      {
        id: "airport-pickup",
        question: "Can you pick us up from the airport?",
        answer:
          "Yes. Airport pickup and drop-off services can be arranged upon request. Please provide your airport, flight number, arrival time, and group size.",
      },
      {
        id: "vehicle-type",
        question: "What type of vehicle will be used?",
        answer:
          "The vehicle depends on your group size and luggage requirements. We may arrange a comfortable private car, van, or minibus.",
      },
      {
        id: "luggage",
        question: "Can we bring luggage on the tour?",
        answer:
          "Yes, but luggage space depends on the vehicle and number of passengers. Please tell us how many suitcases you will bring so we can arrange a suitable vehicle.",
      },
    ],
  },
  {
    id: "payments",
    title: "Payments & Pricing",
    description:
      "Clear information about payments, tour prices, and additional costs.",
    faqs: [
      {
        id: "payment-methods",
        question: "Which payment methods do you accept?",
        answer:
          "Available payment methods will be confirmed during the booking process. Depending on the tour, payment may be accepted through bank transfer, cash, or another agreed payment method.",
      },
      {
        id: "hidden-charges",
        question: "Are there any hidden charges?",
        answer:
          "No. We explain the tour price and included services before confirmation. Any optional expenses or costs not included in the tour will also be explained clearly.",
      },
      {
        id: "entrance-fees",
        question: "Are entrance fees included?",
        answer:
          "Included services vary by tour. The tour details will clearly state whether attraction tickets, meals, parking fees, tolls, and other expenses are included.",
      },
      {
        id: "children-price",
        question: "Do children receive a discounted price?",
        answer:
          "Child pricing depends on the tour, vehicle, attraction fees, and the child's age. Please include the ages of all children in your inquiry.",
      },
    ],
  },
  {
    id: "travel-experience",
    title: "Travel Experience",
    description:
      "Helpful information for families, seniors, and first-time visitors.",
    faqs: [
      {
        id: "english-guides",
        question: "Do your guides speak English?",
        answer:
          "Yes. English-speaking assistance is available so international guests can enjoy a comfortable and informative travel experience.",
      },
      {
        id: "children",
        question: "Can children join the tours?",
        answer:
          "Yes. Families with children are welcome. We can adjust the itinerary, travel pace, meal stops, and activities to make the tour more family-friendly.",
      },
      {
        id: "senior-travelers",
        question: "Are the tours suitable for elderly travelers?",
        answer:
          "Yes. We can arrange comfortable itineraries with shorter walking distances, additional rest breaks, and convenient vehicle access where possible.",
      },
      {
        id: "accessibility",
        question: "Can you accommodate mobility requirements?",
        answer:
          "We will do our best to arrange an accessible itinerary. Please tell us about wheelchairs, walking difficulties, or other mobility requirements before booking.",
      },
      {
        id: "what-to-bring",
        question: "What should I bring on the tour?",
        answer:
          "We recommend comfortable shoes, weather-appropriate clothing, water, personal medication, a phone or camera, and any travel documents you may need.",
      },
      {
        id: "bad-weather",
        question: "Will the tour operate during bad weather?",
        answer:
          "Most tours can operate during light rain. If severe weather or transportation disruption affects the tour, we will contact you and discuss alternative arrangements.",
      },
      {
        id: "contact-during-trip",
        question: "How can I contact you during my trip?",
        answer:
          "You can contact us through WhatsApp for quick assistance before and during your tour.",
      },
    ],
  },
];