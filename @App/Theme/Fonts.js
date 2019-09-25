import { Screen } from 'App/Helpers';

const size = {
  h1: Screen.scale(38),
  h2: Screen.scale(34),
  h3: Screen.scale(30),
  input: Screen.scale(18),
  regular: Screen.scale(17),
  medium: Screen.scale(14),
  small: Screen.scale(12),
};

const style = {
  h1: {
    fontSize: size.h1,
  },
  h2: {
    fontSize: size.h2,
  },
  h3: {
    fontSize: size.h3,
  },
  normal: {
    fontSize: size.regular,
  },
};

export default {
  size,
  style,
};
