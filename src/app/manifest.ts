import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "First Choice Japan Tours",

    short_name: "FCJT",

    start_url: "/",

    display: "standalone",

    background_color: "#ffffff",

    theme_color: "#B91C1C",

    icons: [
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}