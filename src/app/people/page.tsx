"use client";

import { useEffect, useState } from "react";
import PersonCard from "@/components/PersonCard";
import { getPeople } from "@/utils/storage";
import { Person } from "@/types/person";

export default function PeoplePage() {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    setPeople(getPeople());
  }, []);

  return (
    <section>
      <h1 className="text-2xl font-bold mb-6">Все люди</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {people.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </div>
    </section>
  );
}
