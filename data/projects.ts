import { Project } from "../types/Projects";

export const projects: Project[] = [
  {
    title: 'kakka.dev',
    short_description: 'Personal portfolio website for demonstrating past web development projects.',
    github_url: 'https://github.com/kakka0903/kakka.dev',
    project_palette: 'blue',
    technologies: ['vue', 'nuxt']
  },
  {
    title: 'orkide.world',
    short_description: "Digital portfolio for video producer Orkidé. The website features a unique design that encourages exploration of the clients work.",
    github_url: 'https://github.com/kakka0903/orkide-frontend',
    website_url: 'https://orkide.world',
    project_palette: 'sapling',
    technologies: ['vue', 'nuxt', 'strapi']
  },
  {
    title: 'kennel-villa-solberg',
    short_description: 'Traditional marketing website for Kennel Villa Solberg. The website was designed to instill trust in potential customers.',
    website_url: 'https://kennelvillasolberg.no/',
    project_palette: 'earth',
    technologies: ['vue', 'nuxt', 'tailwind']
  },
  {
    title: 'delivery-data',
    short_description: 'Proof of concept for a web application designed to track package wear, deliverer performance and hardware sensor metrics.',
    github_url: 'https://github.com/kakka0903/delivery-data',
    demo_url: 'https://delivery-data.pages.dev/',
    project_palette: 'blue',
    technologies: ['vue', 'nuxt', 'mapbox']
  },
  {
    title: 'ZvanzMP3 V2',
    short_description: 'Second iteration of a website promoting and selling the work of ZvanzMP3.',
    demo_url: 'https://zvanz-frontend.pages.dev',
    project_palette: 'eyez',
    technologies: ['flask', 'vue', 'stripe'],
  },
  {
    title: 'ZvanzMP3 V1',
    short_description: 'A website selling digial music licences for the work of ZvanzMP3.',
    demo_url: 'https://zvanzflask.kakk.dev',
    github_url: 'https://github.com/kakka0903/zvanzflask',
    project_palette: 'eyez',
    technologies: ['flask', 'stripe'],
  },


]
