import CandidateSite, { candidateMetadata } from "../campaign-2072/CandidateSite";

export const metadata = candidateMetadata("tony-blair");
export default function Page() { return <CandidateSite slug="tony-blair" />; }
