import { defineNitroConfig } from "nitro/config";

/** Used when building on Vercel (see vite.config.ts). Cloudflare deploys use wrangler instead. */
export default defineNitroConfig({
  preset: "vercel",
});
