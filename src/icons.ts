import Fuse from "fuse.js";

export interface Icon {
  name: string;
  file: string;
  tags?: string[];
}

const i = (name: string, args?: Partial<Omit<Icon, "name">>): Icon => ({
  name,
  file: `${name.toLowerCase()}.svg`,
  ...args,
});

export const icons: Icon[] = [
  i("JavaScript", { tags: ["js", "express"] }),
  i("TypeScript", { tags: ["javascript", "ts"] }),
  i("Go"),
  i("Python", { tags: ["py"] }),
  i("Django"),
  i("Ruby", { tags: ["sinatra"] }),
  i("Rust", { tags: ["cargo"] }),
  i("BlitzJS", { file: "blitzjs.png", tags: ["js", "javascript"] }),
  i("Deno", { file: "deno.png" }),
  i("Discord"),
  i("Elixir"),
  i("Flask"),
  i("Laravel", { tags: ["php"] }),
  i("NextJS", { tags: ["js", "javascript"] }),
  i("Prisma"),
  i("Rails"),
  i("Svelte"),
  i("Telegram"),
  i("Rocket", { file: "rocket.png" }),
  i("Hasura"),
  i("Umami"),
  i("Hapi"),
];

const fuse = new Fuse(icons, {
  includeScore: true,
  shouldSort: true,
  keys: ["name", "tags"],
});

export const searchIcons = (query?: string): Icon[] => {
  if (!query) {
    return icons;
  }

  const result = fuse.search(query);

  console.log(`\n\n--- ${query}`);
  console.log(result.map(r => r.item));

  return result.map(r => r.item);
};
