const currentUrl = process.env.NEXT_PUBLIC_URL;
const getImageCompletePath = (path: string) =>
  `${currentUrl}/assets/images${path}`;

export const bankingColumn = getImageCompletePath("/banking-column.png");
export const introPhone2 = getImageCompletePath("/intro-phone-2.png");
export const rays = getImageCompletePath("/rays.png");

// Hero
export const eye = getImageCompletePath("/hero/eye-button.png");
export const dollarLogo = getImageCompletePath("/hero/dollar-logo.png");
export const introCube = getImageCompletePath("/hero/intro-cube.png");
export const introStairs = getImageCompletePath("/hero/intro-stairs.png");
export const introPhone = getImageCompletePath("/hero/intro-phone.png");
export const introCubes = getImageCompletePath("/hero/intro-cubes.png");
export const introPillar = getImageCompletePath("/hero/intro-pillar.png");
