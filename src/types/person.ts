export type Gender = "male" | "female" | "other";

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
