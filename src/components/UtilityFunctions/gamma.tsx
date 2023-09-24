export const gamma = (data: any[]) => {
    return data.map(item => {
      const { Ash, Hue, Magnesium } = item;
      const gamma = (Ash * Hue) / Magnesium;
      return { ...item, Gamma: gamma };
    });
  };
  