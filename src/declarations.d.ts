declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "*.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
