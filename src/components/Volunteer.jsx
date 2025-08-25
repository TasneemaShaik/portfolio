import VolunteerCard from "./VolunteerCard.jsx";
import { VOLUNTEER } from "../data.js";

export default function Volunteer() {
  return (
    <div className="py-12 space-y-6">
      {VOLUNTEER.map((item, index) => (
        <VolunteerCard key={index} item={item} index={index} />
      ))}
    </div>
  );
}
