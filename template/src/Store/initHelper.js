import { createAction } from '@reduxjs/toolkit'

const toCamel = (s) => {
  return s.toLowerCase().replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace('-', '').replace('_', '')
  })
}

export default function (Types) {
  const actions = Object.entries(Types).reduce(
    (acc, [key, type]) => ({
      ...acc,
      [toCamel(key)]: createAction(key, type),
    }),
    {},
  )
  const types = Object.keys(Types).reduce(
    (acc, type) => ({ ...acc, [type]: type }),
    {},
  )
  return [actions, types]
}
