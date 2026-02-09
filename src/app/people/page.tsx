import { people } from "@/data/people";
import PersonCard from "@/components/PersonCard";

export default function PeoplePage() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-6">Все люди</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {people.map((person) => (
          <PersonCard key={person.id} person={person}></PersonCard>
        ))}
      </div>
    </section>
  );
}
