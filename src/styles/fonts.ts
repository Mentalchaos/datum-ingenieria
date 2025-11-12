import localFont from "next/font/local";

export const dmSerif = localFont({
  src: [
    { path: "../../public/fonts/DMSerifDisplay-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--font-dm-serif",
  display: "swap",
});

export const helveticaNeueLight = localFont({
  src: [
    { path: "../../public/fonts/HelveticaNeue-Light.otf", weight: "500", style: "normal" },
  ],
  variable: "--font-helvetica-neue-light",
  display: "swap",
});
