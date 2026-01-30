import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <h1>Семейное древо</h1>

      <p>
        Этот проект позволяет создавать и визуализировать семейные связи:
        родителей, детей, супругов и поколения.
      </p>

      <div style={{ marginTop: "24px", display: "flex", gap: "16px" }}>
        <Link href="/tree">Открыть дерево</Link>
        <Link href="/people">Список людей</Link>
      </div>
    </section>
  );
}
