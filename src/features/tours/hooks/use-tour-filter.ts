"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";

import { tours } from "@/data/tours";
import { filterTours } from "../utils/filter-tours";

export function useTourFilter() {
  const params = useSearchParams();

  const search = params.get("search") ?? "";

  const destination =
    params.get("destination") ?? "all";

  const duration =
    params.get("duration") ?? "all";

  const sort =
    params.get("sort") ?? "popular";

  const filteredTours = useMemo(
    () =>
      filterTours(tours, {
        search,
        destination,
        duration,
        sort,
      }),
    [search, destination, duration, sort]
  );

  return {
    filteredTours,
    search,
    destination,
    duration,
    sort,
  };
}