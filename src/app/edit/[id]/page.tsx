"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Person } from "@/types/person";
import { getPeople, updatePersonWithRelations } from "@/utils/storage";
import PersonForm from "@/components/PersonForm";

export default function EditPersonPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const [person, setPerson] = useState<Person | null>(null);

  useEffect(() => {
    const people = getPeople();
    const found = people.find((p) => p.id === id);
    if (found) setPerson(found);
  }, [id]);

  if (!person) return <p>Загрузка...</p>;

  function handleSubmit(updated: Person) {
    updatePersonWithRelations(updated);
    router.push(`/people/${updated.id}`);
  }

  return (
    <section>
      <h1 className="text-2xl font-bold mb-6">Редактирование</h1>

      <PersonForm initialData={person} onSubmit={handleSubmit} />
    </section>
  );
}
