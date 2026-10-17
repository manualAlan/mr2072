import type { Metadata } from "next";
import BeliefPage from "../BeliefPage";

export const metadata: Metadata = { title: "Your life. Your business. | Alliance 2072" };

export default function Page() {
  return <BeliefPage slug="civil-liberties" />;
}
