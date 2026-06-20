declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DEV_COMMUNITY_API_KEY: string;
      medium_ACCESS_TOKEN: string;
      INSTAGRAM_ACCESS_TOKEN: string;
    }
  }
}
declare module "*.css";
declare module "animate.css";
declare module "tippy.js/dist/tippy.css";
export {};
