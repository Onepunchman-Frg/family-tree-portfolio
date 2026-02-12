"use client";

import { useState, useEffect } from "react";
import { Person, Gender } from "@/types/person";
import { getPeople } from "@/utils/storage";

interface Props {
  onSubmit: (person: Person) => void;
}

export default function PersonForm({ onSubmit }: Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState<Gender>("male");
  const [birthDate, setBirthDate] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [description, setDescription] = useState("");

  const [existingPeople, setExistingPeople] = useState<Person[]>([]);

  useEffect(() => {
    setExistingPeople(getPeople());
  }, []);
  const [parentsIds, setParentsIds] = useState<string[]>([]);
  const [childrenIds, setChildrenIds] = useState<string[]>([]);
  const [spouseIds, setSpouseIds] = useState<string[]>([]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const now = new Date().toISOString();

    const newPerson: Person = {
      id: crypto.randomUUID(),
      firstName,
      lastName,
      gender,
      birthDate: birthDate || undefined,
      birthPlace,
      description,
      parentsIds: [],
      childrenIds: [],
      spouseIds: [],
      createdAt: now,
      updatedAt: now,
    };

    onSubmit(newPerson);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
      <input
        className="w-full rounded border p-2"
        placeholder="Имя"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        className="w-full rounded border p-2"
        placeholder="Фамилия"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <select
        className="w-full rounded border p-2"
        value={gender}
        onChange={(e) => setGender(e.target.value as Gender)}
      >
        <option value="male">Мужской</option>
        <option value="female">Женский</option>
        <option value="other">Другое</option>
      </select>
      <input
        className="w-full rounded border p-2"
        placeholder="Дата рождения (ГГГГ-ММ-ДД)"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
        type="date"
      />
      <input
        className="w-full rounded border p-2"
        placeholder="Место рождения"
        value={birthPlace}
        onChange={(e) => setBirthPlace(e.target.value)}
      />
      <textarea
        className="w-full rounded border p-2"
        placeholder="Описание"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={3}
      />

      <div>
        <label className="block mb-1">Родители</label>
        <select
          multiple
          className="w-full rounded border p-2"
          onChange={(e) =>
            setParentsIds(
              Array.from(e.target.selectedOptions).map((o) => o.value),
            )
          }
        >
          {existingPeople.map((p) => (
            <option key={p.id} value={p.id}>
              {p.firstName} {p.lastName}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1">Дети</label>
        <select
          multiple
          className="w-full rounded border p-2"
          onChange={(e) =>
            setChildrenIds(
              Array.from(e.target.selectedOptions).map((o) => o.value),
            )
          }
        >
          {existingPeople.map((p) => (
            <option key={p.id} value={p.id}>
              {p.firstName} {p.lastName}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1">Супруги</label>
        <select
          multiple
          className="w-full rounded border p-2"
          onChange={(e) =>
            setSpouseIds(
              Array.from(e.target.selectedOptions).map((o) => o.value),
            )
          }
        >
          {existingPeople.map((p) => (
            <option key={p.id} value={p.id}>
              {p.firstName} {p.lastName}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
      >
        Сохранить
      </button>
    </form>
  );
}
