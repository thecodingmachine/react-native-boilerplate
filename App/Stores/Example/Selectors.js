/**
 * Selectors let us factorize logic that queries the state.
 *
 * Selectors can be used in sagas or components to avoid duplicating that logic.
 *
 * Writing selectors is optional as it is not always necessary, we provide a simple example below.
 */

export const isHot = (state) => {
  return state.example.get('temperature') && state.example.get('temperature') > 25
}
