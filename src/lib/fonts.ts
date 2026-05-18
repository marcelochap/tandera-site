import { MuseoModerno, Jost } from "next/font/google";
import localFont from "next/font/local";

export const museomoderno = MuseoModerno({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-museomoderno",
});

export const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-jost",
});

export const centuryGothic = localFont({
  src: [
    { path: "../../public/fonts/CenturyGothic.ttf",           weight: "400", style: "normal" },
    { path: "../../public/fonts/CenturyGothic-Italic.ttf",    weight: "400", style: "italic" },
    { path: "../../public/fonts/CenturyGothic-Bold.ttf",      weight: "700", style: "normal" },
    { path: "../../public/fonts/CenturyGothic-BoldItalic.ttf",weight: "700", style: "italic" },
  ],
  display: "swap",
  variable: "--font-century-gothic",
});
