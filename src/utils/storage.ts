import { Person } from "@/types/person";

const STORAGE_KEY = "family-tree-people";

export function getPeople(): Person[] {
  if (typeof window === "undefined") return [];

  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function savePeople(people: Person[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(people));
}

export function addPerson(person: Person) {
  const people = getPeople();
  savePeople([...people, person]);
}
