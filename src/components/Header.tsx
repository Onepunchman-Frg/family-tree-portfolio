"use client";

import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">Главная</Link>
        <Link href="/people">Люди</Link>
        <Link href="/tree">Дерево</Link>
        <Link href="/create">Добавить</Link>
        <Link href="/about">О проекте</Link>
      </nav>
    </header>
  );
}
