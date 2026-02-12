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

export function updateRelations(people: Person[], newPerson: Person): Person[] {
  const updatePeople = [...people, newPerson];

  return updatePeople.map((person) => {
    if (newPerson.parentsIds.includes(person.id)) {
      return {
        ...person,
        childrenIds: Array.from(new Set([...person.childrenIds, newPerson.id])),
      };
    }

    // если выбран ребёнком
    if (newPerson.childrenIds.includes(person.id)) {
      return {
        ...person,
        parentsIds: Array.from(new Set([...person.parentsIds, newPerson.id])),
      };
    }

    // если выбран супругом
    if (newPerson.spouseIds.includes(person.id)) {
      return {
        ...person,
        spouseIds: Array.from(new Set([...person.spouseIds, newPerson.id])),
      };
    }

    return person;
  });
}
