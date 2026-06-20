import cached_mediumArticles from "public/cached/mediumArticles.json";
import { mediumArticles } from "types/Sections";

export const getmediumArticles = async (): Promise<mediumArticles[]> => {
  const accessToken = process.env.medium_ACCESS_TOKEN;

  if (!accessToken) return cached_mediumArticles as mediumArticles[];

  const url = `https://api.medium.com/v2`;

  try {
    const res = await fetch(url, { headers: { Authorization: `Bearer ${accessToken}` } });
    const data = (await res.json()) as mediumArticles[];

    if (!data) throw new Error("Error occurred while retrieving medium shots.");

    return data;
  } catch {
    return cached_mediumArticles as mediumArticles[];
  }
};
