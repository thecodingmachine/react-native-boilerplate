---
slug: /AddALangTranslation
title: Add a lang translation 🌐
---

The boilerplate includes an i18n feature to store and translate String data. 
The package used is [i18next](https://www.i18next.com/) you can use their documentation for not included functionnalities.

---

## Add a new language
All languages files are located in `src/Translations/resources`. By default, there is the `en.js` file.
To add a new language just `cp en.js fr.js` and export it in : `src/Translations/resources/index`

```jsx
export { default as en } from './en'
export { default as fr } from './fr'
```

Now you can translate all keys of the `fr.js` file :
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

