"use client";

import { useState } from "react";
import { Person, Gender } from "@/types/person";

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

      <button
        type="submit"
        className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
      >
        Сохранить
      </button>
    </form>
  );
}
