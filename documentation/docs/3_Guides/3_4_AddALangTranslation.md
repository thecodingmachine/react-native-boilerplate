---
slug: /AddALangTranslation
title: Add a lang translation
---

The boilerplate includes an i18n feature to store and translate String data. 
The package used is [i18next](https://www.i18next.com/) you can use their documentation for not included functionnalities.

## add a new language
All languages files are located in `src/Translations/resources`.
To add a new language create a new file like `fr` (you can cp another lang file to have all i18n keys) and export it in `src/Translations/resources/index`

```jsx
export { default as en } from './en'
export { default as fr } from './fr'
```

Now you can translate all keys of the `fr.js` files :
```jsx
export default {
  welcome: 'Bienvenue sur le React Native Boilerplate de TheCodingMachine',
  actions: {
    continue: 'Continuer',
  },
  example: {
    helloUser: 'Je suis un faux utilisateur, mon nom est {{name}}',
    labels: {
      userId: "Entrer un id d'utilisateur",
    },
  },
}
```

That's it ! Now you can change the language with `i18n.changeLanguage('fr')`

