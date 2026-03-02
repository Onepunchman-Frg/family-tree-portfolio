import { Person } from "@/types/person";
import { people as initialPeople } from "@/data/people";
import { updateRelations } from "./relations";

const STORAGE_KEY = "family-tree-people";

export function getPeople(): Person[] {
  if (typeof window === "undefined") return [];

  const raw = localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialPeople));
    return initialPeople;
  }

  return JSON.parse(raw);
}

export function savePeople(people: Person[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(people));
}

export function addPersonWithRelations(person: Person) {
  const people = getPeople();
  const updated = updateRelations(people, person);
  savePeople(updated);
}

export function updatePersonWithRelations(updatedPerson: Person) {
  const people = getPeople();

  // 1. Удаляем старые связи у других
  const withoutOldRelations = people.map((p) => {
    if (p.id === updatedPerson.id) return p;

    return {
      ...p,
      parentsIds: p.parentsIds.filter((id) => id !== updatedPerson.id),
      childrenIds: p.childrenIds.filter((id) => id !== updatedPerson.id),
      spouseIds: p.spouseIds.filter((id) => id !== updatedPerson.id),
    };
  });

  // 2. Пересчитываем связи заново
  const recalculated = updateRelations(
    withoutOldRelations.filter((p) => p.id !== updatedPerson.id),
    updatedPerson,
  );

  savePeople(recalculated);
}
