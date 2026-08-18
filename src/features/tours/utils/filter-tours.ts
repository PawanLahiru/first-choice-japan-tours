import { Tour } from "@/types/tour";

type FilterOptions = {
  search?: string;
  destination?: string;
  duration?: string;
  sort?: string;
};

export function filterTours(
  tours: Tour[],
  filters: FilterOptions
) {
  let filtered = [...tours];

  if (filters.search) {
    const search = filters.search.toLowerCase();

    filtered = filtered.filter(
      (tour) =>
        tour.title.toLowerCase().includes(search) ||
        tour.location.toLowerCase().includes(search) ||
        tour.destination.toLowerCase().includes(search)
    );
  }

  if (
    filters.destination &&
    filters.destination !== "all"
  ) {
    filtered = filtered.filter(
      (tour) =>
        tour.destination.toLowerCase() ===
        filters.destination!.toLowerCase()
    );
  }

  if (
    filters.duration &&
    filters.duration !== "all"
  ) {
    filtered = filtered.filter(
      (tour) =>
        tour.durationType.toLowerCase() ===
        filters.duration!.toLowerCase()
    );
  }

  switch (filters.sort) {
    case "price-low":
      filtered.sort((a, b) => a.price - b.price);
      break;

    case "price-high":
      filtered.sort((a, b) => b.price - a.price);
      break;

    case "rating":
      filtered.sort((a, b) => b.rating - a.rating);
      break;

    default:
      filtered.sort((a, b) => Number(b.featured) - Number(a.featured));
  }

  return filtered;
}