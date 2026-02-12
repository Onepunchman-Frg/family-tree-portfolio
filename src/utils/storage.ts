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
