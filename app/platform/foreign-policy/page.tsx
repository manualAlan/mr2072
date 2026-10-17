import type { Metadata } from "next";
import BeliefPage from "../BeliefPage";

export const metadata: Metadata = { title: "Open eyes. Open horizons. | Alliance 2072" };

export default function Page() {
  return <BeliefPage slug="foreign-policy" />;
}
