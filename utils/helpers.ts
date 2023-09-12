export const isMobile = (screenSize: string): boolean => {
  return ["sm", "md"].includes(screenSize);
};
