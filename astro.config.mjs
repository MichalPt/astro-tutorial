// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://my-astrotutorial.netlify.app",
  integrations: [preact()]
});