import qwikdev from "@qwikdev/astro";
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [qwikdev()],
  adapter: vercel(),
});