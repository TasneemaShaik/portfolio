import ExtracurricularCard from "./ExtracurricularCard.jsx";
import { EXTRACURRICULARS } from "../data.js";

export default function Extracurriculars() {
  return (
    <div className="py-12 space-y-4">
      <h2 className="text-3xl font-bold text-center mb-8">Extracurriculars</h2>
      {EXTRACURRICULARS.map((item, index) => (
        <ExtracurricularCard key={index} item={item} index={index} />
      ))}
    </div>
  );
}
