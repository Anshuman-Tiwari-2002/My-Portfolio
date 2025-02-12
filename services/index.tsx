import cached_mediumArticles from "public/cached/mediumArticles.json";
// import cached_instagramMedia from "public/cached/instagramMedia.json";
import { /*Article,*/ mediumArticles, InstagramMedia } from "types/Sections";

// export const getArticles = async (): Promise<Article[]> => {
//   const pageSize = 6;
//   const username = "amruthpillai";
//   const apiKey = process.env.DEV_COMMUNITY_API_KEY;

//   if (!apiKey) return [];

//   const url = `https://dev.to/api/articles?username=${username}&per_page=${pageSize}`;

//   try {
//     const res = await fetch(url, { headers: { "api-key": apiKey } });
//     const data: Article[] = await res.json();

//     if (!data) throw new Error("Error occurred while retrieving DEV articles.");

//     return data;
//   } catch {
//     return [];
//   }
// };

// export const getInstagramMedia = async (): Promise<InstagramMedia[]> => {
//   const fields = ["id", "media_type", "media_url", "permalink"];
//   const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

//   if (!accessToken) return cached_instagramMedia.data as InstagramMedia[];

//   const url = `https://graph.instagram.com/me/media?fields=${fields.join(",")}&access_token=${accessToken}`;

//   try {
//     const res = await fetch(url);
//     const { data } = (await res.json()) as { data: InstagramMedia[] };

//     if (!data) throw new Error("Error occurred while retrieving Instagram media.");

//     return data;
//   } catch {
//     return cached_instagramMedia.data as InstagramMedia[];
//   }
// };

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
