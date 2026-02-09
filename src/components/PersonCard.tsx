import Link from "next/link";
import { Person } from "@/types/person";
import styles from "./PersonCard.module.scss";

interface Props {
  person: Person;
}

export default function PersonCard({ person }: Props) {
  return (
    <Link
      href={`/people/${person.id}`}
      className={`block rounded-xl border border-gray-200 p-4 hover:shadow-md transition ${styles.card}`}
    >
      <h3 className="text-lg font-semibold">
        {person.firstName} {person.lastName}
      </h3>

      <p className="text-sm text-gray-600">{person.birthPlace}</p>

      {person.birthDate && (
        <p className="text-sm text-gray-500">🎂 {person.birthDate}</p>
      )}
    </Link>
  );
}
