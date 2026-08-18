"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ToursFilter() {
  const router = useRouter();
  const params = useSearchParams();

  function update(key: string, value: string | null) {
    const search = new URLSearchParams(params.toString());

    if (!value || value === "all") {
      search.delete(key);
    } else {
      search.set(key, value);
    }

    const query = search.toString();

    router.push(query ? `/tours?${query}` : "/tours", {
      scroll: false,
    });
  }

  return (
    <section className="relative z-30 -mt-12 overflow-visible">
      <Container>
        <div className="overflow-visible rounded-3xl border border-slate-100 bg-white p-6 shadow-2xl">
          <div className="grid gap-4 lg:grid-cols-4">
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-slate-400" />

              <Input
                className="h-12 rounded-xl border-slate-300 pl-12 text-sm shadow-none focus-visible:border-red-500 focus-visible:ring-red-500/20"
                placeholder="Search tours..."
                defaultValue={params.get("search") ?? ""}
                onChange={(event) =>
                  update("search", event.target.value.trim() || null)
                }
              />
            </div>

            <Select
              defaultValue={params.get("destination") ?? "all"}
              onValueChange={(value) => update("destination", value)}
            >
              <SelectTrigger className="h-12 w-full rounded-xl border-slate-300 bg-white px-4 text-sm shadow-none focus:ring-2 focus:ring-red-500/20">
                <SelectValue placeholder="All Destinations" />
              </SelectTrigger>

              <SelectContent
                sideOffset={8}
                align="start"
                className="z-[100] min-w-[220px] rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl"
              >
                <SelectItem
                  value="all"
                  className="cursor-pointer rounded-xl px-3 py-3 text-sm font-medium focus:bg-red-50 focus:text-red-600"
                >
                  All Destinations
                </SelectItem>

                <SelectItem
                  value="tokyo"
                  className="cursor-pointer rounded-xl px-3 py-3 text-sm font-medium focus:bg-red-50 focus:text-red-600"
                >
                  Tokyo
                </SelectItem>

                <SelectItem
                  value="kyoto"
                  className="cursor-pointer rounded-xl px-3 py-3 text-sm font-medium focus:bg-red-50 focus:text-red-600"
                >
                  Kyoto
                </SelectItem>

                <SelectItem
                  value="fuji"
                  className="cursor-pointer rounded-xl px-3 py-3 text-sm font-medium focus:bg-red-50 focus:text-red-600"
                >
                  Mount Fuji
                </SelectItem>

                <SelectItem
                  value="osaka"
                  className="cursor-pointer rounded-xl px-3 py-3 text-sm font-medium focus:bg-red-50 focus:text-red-600"
                >
                  Osaka
                </SelectItem>

                <SelectItem
                  value="nara"
                  className="cursor-pointer rounded-xl px-3 py-3 text-sm font-medium focus:bg-red-50 focus:text-red-600"
                >
                  Nara
                </SelectItem>
              </SelectContent>
            </Select>

            <Select
              defaultValue={params.get("duration") ?? "all"}
              onValueChange={(value) => update("duration", value)}
            >
              <SelectTrigger className="h-12 w-full rounded-xl border-slate-300 bg-white px-4 text-sm shadow-none focus:ring-2 focus:ring-red-500/20">
                <SelectValue placeholder="Any Duration" />
              </SelectTrigger>

              <SelectContent
                sideOffset={8}
                align="start"
                className="z-[100] min-w-[210px] rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl"
              >
                <SelectItem
                  value="all"
                  className="cursor-pointer rounded-xl px-3 py-3 text-sm font-medium focus:bg-red-50 focus:text-red-600"
                >
                  Any Duration
                </SelectItem>

                <SelectItem
                  value="half day"
                  className="cursor-pointer rounded-xl px-3 py-3 text-sm font-medium focus:bg-red-50 focus:text-red-600"
                >
                  Half Day
                </SelectItem>

                <SelectItem
                  value="full day"
                  className="cursor-pointer rounded-xl px-3 py-3 text-sm font-medium focus:bg-red-50 focus:text-red-600"
                >
                  Full Day
                </SelectItem>

                <SelectItem
                  value="multi day"
                  className="cursor-pointer rounded-xl px-3 py-3 text-sm font-medium focus:bg-red-50 focus:text-red-600"
                >
                  Multi Day
                </SelectItem>
              </SelectContent>
            </Select>

            <Select
              defaultValue={params.get("sort") ?? "popular"}
              onValueChange={(value) => update("sort", value)}
            >
              <SelectTrigger className="h-12 w-full rounded-xl border-slate-300 bg-white px-4 text-sm shadow-none focus:ring-2 focus:ring-red-500/20">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>

              <SelectContent
                sideOffset={8}
                align="end"
                className="z-[100] min-w-[220px] rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl"
              >
                <SelectItem
                  value="popular"
                  className="cursor-pointer rounded-xl px-3 py-3 text-sm font-medium focus:bg-red-50 focus:text-red-600"
                >
                  Most Popular
                </SelectItem>

                <SelectItem
                  value="rating"
                  className="cursor-pointer rounded-xl px-3 py-3 text-sm font-medium focus:bg-red-50 focus:text-red-600"
                >
                  Highest Rated
                </SelectItem>

                <SelectItem
                  value="price-low"
                  className="cursor-pointer rounded-xl px-3 py-3 text-sm font-medium focus:bg-red-50 focus:text-red-600"
                >
                  Lowest Price
                </SelectItem>

                <SelectItem
                  value="price-high"
                  className="cursor-pointer rounded-xl px-3 py-3 text-sm font-medium focus:bg-red-50 focus:text-red-600"
                >
                  Highest Price
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Container>
    </section>
  );
}