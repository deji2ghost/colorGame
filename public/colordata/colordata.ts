export const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const generateColorOptions = (targetColor: string) => {
  const options = new Set([targetColor]);
  while (options.size < 6) {
    options.add(generateRandomColor());
  }
  return Array.from(options).sort(() => Math.random() - 0.5);
};
