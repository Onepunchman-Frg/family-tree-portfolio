This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# 1️⃣ Структура страниц и роутов (Next.js App Router)

/
├─ / → Главная
├─ /tree → Визуализация семейного дерева
├─ /people → Список всех людей
├─ /people/[id] → Профиль конкретного человека
├─ /create → Добавление человека
├─ /edit/[id] → Редактирование человека
├─ /import-export → Импорт / экспорт JSON
├─ /about → О проекте (для портфолио)

# 2️⃣ Структура папок проекта

# app/

├─ layout.tsx
├─ page.tsx // Главная
├─ tree/
│ └─ page.tsx
├─ people/
│ ├─ page.tsx // список людей
│ └─ [id]/
│ └─ page.tsx // профиль человека
├─ create/
│ └─ page.tsx
├─ edit/
│ └─ [id]/
│ └─ page.tsx
├─ import-export/
│ └─ page.tsx
├─ about/
│ └─ page.tsx

# Вне app/

src/
├─ components/ // UI-компоненты
│ ├─ PersonCard.tsx
│ ├─ PersonForm.tsx
│ ├─ TreeNode.tsx
│ └─ Header.tsx
│
├─ data/ // временное хранилище (MVP)
│ └─ people.ts
│
├─ types/ // TypeScript типы
│ └─ person.ts
│
├─ utils/ // хелперы
│ ├─ storage.ts // localStorage
│ └─ relations.ts // работа со связями
│
├─ styles/
│ └─ globals.css

# 3️⃣ Структура данных Person (TypeScript)

// src/types/person.ts

export type Gender = 'male' | 'female' | 'other';

export interface Person {
id: string;

firstName: string;
lastName: string;

gender: Gender;

birthDate?: string;
deathDate?: string;

birthPlace?: string;
description?: string;

photo?: string; // base64 или url

parentsIds: string[];
childrenIds: string[];
spouseIds: string[];

createdAt: string;
updatedAt: string;
}

# 4️⃣ Как мы будем хранить данные (сразу договоримся)

🔹 MVP (быстро)
localStorage
src/data/people.ts → стартовые данные

🔹 Потом (улучшение)
Firebase или Supabase (free tier)
структура не меняется — только способ хранения

# 5️⃣ План разработки по этапам

🟢 ЭТАП 1 — MVP (основа)
Цель: проект работает
Инициализация Next.js
Страницы без логики
Тип Person
Хранение людей в localStorage
Добавление человека
Список людей
Профиль человека (текстом связи)

👉 Результат: уже можно показать

🟡 ЭТАП 2 — Связи и логика
Выбор родителей / детей / супругов
Автоматическое обновление связей
Защита от циклов
Редактирование человека

👉 Результат: реальный CRUD

🔵 ЭТАП 3 — Визуализация дерева
Алгоритм построения дерева
Компонент TreeNode
Отображение поколений
Минимальный zoom / scroll

👉 Результат: ВАУ для портфолио

🟣 ЭТАП 4 — Улучшения
Импорт / экспорт JSON
UI/UX
Empty states
About page
README.md
