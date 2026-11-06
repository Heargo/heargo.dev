// Vite resolves and bundles every file these templates can match.
export const imgUrl = (name) => new URL(`../assets/img/${name}`, import.meta.url).href
export const svgUrl = (name) => new URL(`../assets/svg/${name}`, import.meta.url).href
