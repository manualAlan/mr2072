import type { Metadata } from "next";
import "./globals.css";
import "./campaign-2068.css";
import "./campaign-2072.css";

export const metadata: Metadata = {
  title: "Alliance 2072 | Freedom to build",
  description: "We back the people who build Caprica. The Liberal-Conservative Alliance campaign for 2072.",
  icons: {
    icon: [{ url: "/images/lca-logo.svg?v=lca-2068", type: "image/svg+xml" }],
    shortcut: "/images/lca-logo.svg?v=lca-2068",
    apple: "/images/lca-logo.svg?v=lca-2068",
  },
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
