import ResearchCard from "./ResearchCard.jsx";
import { RESEARCH } from "../data.js";

export default function Research() {
  return (
    <div className="py-12 space-y-20">
      <h2 className="text-3xl font-bold text-center mb-8">Research & Clinical Exposure</h2>
      {RESEARCH.map((item, index) => (
        <ResearchCard key={index} research={item} />
      ))}
    </div>
  );
}
