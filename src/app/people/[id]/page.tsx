"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Person } from "@/types/person";
import { getPeople } from "@/utils/storage";
import { findPersonById, findPeopleByIds } from "@/utils/relations";

export default function PersonPage() {
  const params = useParams();
  const id = params.id as string;

  const [person, setPerson] = useState<Person | null>(null);
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    const storedPeople = getPeople();
    setPeople(storedPeople);

    const found = findPersonById(storedPeople, id);
    if (found) setPerson(found);
  }, [id]);

  if (!person) {
    return <p>Человек не найден</p>;
  }

  const parents = findPeopleByIds(people, person.parentsIds);
  const children = findPeopleByIds(people, person.childrenIds);
  const spouses = findPeopleByIds(people, person.spouseIds);

  return (
    <section className="max-w-2xl">
      <h1 className="text-2xl font-bold mb-2">
        {person.firstName} {person.lastName}
      </h1>

      <p className="text-gray-600 mb-4">{person.description}</p>

      <div className="space-y-4">
        <InfoBlock title="Родители" people={parents} />
        <InfoBlock title="Дети" people={children} />
        <InfoBlock title="Супруги" people={spouses} />
      </div>

      <div className="mt-6 flex gap-4">
        <Link
          href={`/edit/${person.id}`}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Редактировать
        </Link>

        <Link href="/people" className="text-blue-600 hover:underline">
          ← Назад
        </Link>
      </div>
    </section>
  );
}

function InfoBlock({ title, people }: { title: string; people: Person[] }) {
  return (
    <div>
      <h2 className="font-semibold mb-1">{title}</h2>

      {people.length === 0 ? (
        <p className="text-gray-400 text-sm">Нет данных</p>
      ) : (
        <ul className="list-disc list-inside">
          {people.map((p) => (
            <li key={p.id}>
              <Link
                href={`/people/${p.id}`}
                className="text-blue-600 hover:underline"
              >
                {p.firstName} {p.lastName}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
