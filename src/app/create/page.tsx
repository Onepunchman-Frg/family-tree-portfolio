"use client";

import { useRouter } from "next/navigation";
import PersonForm from "@/components/PersonForm";
import { addPersonWithRelations } from "@/utils/storage";
import { Person } from "@/types/person";

export default function CreatePersonPage() {
  const router = useRouter();

  function handleCreate(person: Person) {
    addPersonWithRelations(person);
    router.push("/people");
  }

  return (
    <section>
      <h1 className="text-2xl font-bold mb-6">Добавить человека</h1>
      <PersonForm onSubmit={handleCreate} />
    </section>
  );
}
