declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DEV_COMMUNITY_API_KEY: string;
      medium_ACCESS_TOKEN: string;
      INSTAGRAM_ACCESS_TOKEN: string;
    }
  }
}

export { };
