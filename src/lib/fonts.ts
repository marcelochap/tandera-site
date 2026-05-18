import { MuseoModerno, Jost } from "next/font/google";

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
