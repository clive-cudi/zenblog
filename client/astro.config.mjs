import { defineConfig } from 'astro/config';
import sanity from "astro-sanity"

// https://astro.build/config
export default defineConfig({
    integrations: [
        sanity({
            projectId: "3znk4rqs",
            dataset: "production",
            apiVersion: "2023-02-08",
            useCdn: false
          })
    ]
});
