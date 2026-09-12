import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: "400",
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <body className={`min-h-full ${inter.className} flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
