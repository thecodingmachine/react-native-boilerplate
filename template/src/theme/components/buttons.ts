import { ComponentTheme } from 'types/theme/theme';

export default ({ layout, gutters, backgrounds, fonts }: ComponentTheme) => {
  const base = Object.assign(
    Object.assign(
      layout.justifyCenter,
      layout.itemsCenter,
      gutters.paddingHorizontal_20,
      backgrounds.bg_white,
    ),
    {
      height: 40,
    } as const,
  );

  const rounded = Object.assign(base, {
    borderRadius: 10,
  } as const);

  const circle = Object.assign(
    Object.assign(
      layout.justifyCenter,
      layout.itemsCenter,
      backgrounds.bg_white,
      fonts.text_gray_400,
    ),
    {
      height: 70,
      width: 70,
      borderRadius: 35,
    } as const,
  );

  return {
    base,
    rounded,
    circle,
  };
};
