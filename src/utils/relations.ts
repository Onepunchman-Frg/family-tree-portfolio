import { Person } from "@/types/person";

export function findPersonById(
  people: Person[],
  id: string,
): Person | undefined {
  return people.find((person) => person.id === id);
}

export function findPeopleByIds(people: Person[], ids: string[]): Person[] {
  return people.filter((person) => ids.includes(person.id));
}
