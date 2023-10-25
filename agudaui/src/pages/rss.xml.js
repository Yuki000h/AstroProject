import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { defineConfig } from "astro/config";

export async function GET(context) {
  return rss({
    title: 'My First Astro Project | A Blog',
    description: 'We come as ONE',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}