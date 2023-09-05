import { ComponentTheme } from 'types/theme/theme';

export default ({ layout, gutters, backgrounds, fonts }: ComponentTheme) => {
  const base = {
    ...layout.justifyCenter,
    ...layout.itemsCenter,
    ...gutters.paddingHorizontal_20,
    ...backgrounds.bg_purple_100,
    height: 40,
  } as const;

  const rounded = {
    base,
    borderRadius: 10,
  } as const;

  const circle = {
    ...layout.justifyCenter,
    ...layout.itemsCenter,
    ...backgrounds.bg_purple_100,
    ...fonts.text_gray_400,
    height: 70,
    width: 70,
    borderRadius: 35,
  } as const;

  return {
    base,
    rounded,
    circle,
  };
};
