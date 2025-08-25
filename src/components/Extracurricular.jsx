import ExtracurricularCard from "./ExtracurricularCard.jsx";
import { EXTRACURRICULARS } from "../data.js";

export default function Extracurriculars() {
  return (
    <div className="py-12 space-y-10">
      {EXTRACURRICULARS.map((item, index) => (
        <ExtracurricularCard key={index} item={item} index={index} />
      ))}
    </div>
  );
}
