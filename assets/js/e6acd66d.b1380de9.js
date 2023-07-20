"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8542],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9850:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>v,frontMatter:()=>p,metadata:()=>d,toc:()=>u});var n=a(7462),r=a(7294),i=a(3905);const o=JSON.parse('{"name":"Boilerplate","version":"0.0.1","private":true,"scripts":{"android":"react-native run-android","ios":"react-native run-ios","lint":"eslint .","start":"react-native start","test":"jest","type-check":"tsc","test:report":"jest --collectCoverage --coverageDirectory=\\"./coverage\\" --ci --reporters=default --reporters=jest-junit --coverage","pod-install":"cd ios && RCT_NEW_ARCH_ENABLED=1 bundle exec pod install && cd .."},"dependencies":{"@react-native-masked-view/masked-view":"^0.2.9","@react-navigation/bottom-tabs":"^6.5.8","@react-navigation/native":"^6.1.7","@react-navigation/stack":"^6.3.17","@reduxjs/toolkit":"^1.9.5","i18next":"^23.2.3","react":"18.2.0","react-i18next":"^13.0.1","react-native":"0.72.1","react-native-gesture-handler":"^2.12.0","react-native-mmkv":"^2.10.0","react-native-reanimated":"^3.3.0","react-native-safe-area-context":"^4.6.3","react-native-screens":"^3.22.0","react-redux":"^8.1.1","redux-persist":"^6.0.0"},"devDependencies":{"@babel/core":"^7.20.0","@babel/preset-env":"^7.20.0","@babel/runtime":"^7.20.0","@react-native/eslint-config":"^0.72.2","@react-native/metro-config":"^0.72.7","@react-navigation/devtools":"^6.0.19","@testing-library/jest-native":"^5.4.2","@testing-library/react-native":"^12.1.2","@types/jest":"^29.4.0","@types/metro-config":"^0.76.3","@types/node":"^18.14.1","@tsconfig/react-native":"^3.0.0","@types/react":"^18.0.24","@types/react-test-renderer":"^18.0.0","babel-jest":"^29.2.1","babel-plugin-inline-dotenv":"^1.7.0","babel-plugin-module-resolver":"^5.0.0","babel-plugin-root-import":"^6.6.0","dotenv":"^16.3.1","eslint":"^8.19.0","jest":"^29.2.1","metro-react-native-babel-preset":"0.76.5","prettier":"^2.4.1","react-test-renderer":"18.2.0","react-native-flipper":"^0.202.0","redux-flipper":"^2.0.2","typescript":"4.8.4"},"engines":{"node":">=16"}}');const s=function(e){let{name:t,dev:a}=e;return r.createElement("span",null,o[a?"devDependencies":"dependencies"][t])};const l=function(){return r.createElement("div",{className:"flex justify-center items-center mb-5"},r.createElement("img",{width:"300",height:"300",className:"dark:block hidden dark:block",src:a(585).Z,alt:"tom"}),r.createElement("img",{width:"300",height:"300",className:"dark:hidden sm:block",src:a(5668).Z,alt:"tom"}))},p={slug:"/Introduction",title:"What's in the box\u2753"},c=void 0,d={unversionedId:"Introduction",id:"Introduction",title:"What's in the box\u2753",description:"This project is a React Native boilerplate that can be used to kick-start a mobile application.",source:"@site/docs/1_Introduction.mdx",sourceDirName:".",slug:"/Introduction",permalink:"/react-native-boilerplate/docs/Introduction",draft:!1,editUrl:"https://github.com/thecodingmachine/react-native-boilerplate/edit/main/website-documentation/docs/docs/1_Introduction.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/Introduction",title:"What's in the box\u2753"},sidebar:"tutorialSidebar",next:{title:"Installation \ud83d\udcbf",permalink:"/react-native-boilerplate/docs/Installation"}},m={},u=[{value:"Architecture \ud83e\uddf1",id:"architecture-",level:2},{value:"Content \ud83e\uddf3",id:"content-",level:2},{value:"Directory layout \ud83d\uddc2\ufe0f",id:"directory-layout-\ufe0f",level:2},{value:"Updates \ud83d\udd50",id:"updates-",level:2}],h={toc:u},k="wrapper";function v(e){let{components:t,...a}=e;return(0,i.kt)(k,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l,{mdxType:"Tom"}),(0,i.kt)("p",null,"This project is a ",(0,i.kt)("a",{parentName:"p",href:"https://facebook.github.io/react-native/"},"React Native")," boilerplate that can be used to kick-start a mobile application."),(0,i.kt)("p",null,"The boilerplate provides ",(0,i.kt)("strong",{parentName:"p"},"an architecture optimized for building solid cross-platform mobile applications")," through separation of concerns between the UI and business logic.\nWe made this full documentation so that each piece of code that lands in your application can be understood and used."),(0,i.kt)("admonition",{title:"Don't forget !!",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you love this boilerplate, give us a star, you will be a ray of sunshine in our lives \ud83c\udf08 \u2600\ufe0f")),(0,i.kt)("h2",{id:"architecture-"},"Architecture \ud83e\uddf1"),(0,i.kt)("p",null,"The driving goal of the architecture of the boilerplate is separation of concerns and using React Native at its best."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Using modern Javascript"),"\nSo many javascript features are indispensable now like hooks, functional component and really cool dependencies.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Presentational components are separated from containers"),"."),(0,i.kt)("p",{parentName:"li"},"  Presentational components are small components that are concerned with ",(0,i.kt)("em",{parentName:"p"},"how things look"),".\nContainers usually define whole application screens and are concerned with ",(0,i.kt)("em",{parentName:"p"},"how things work"),": they include presentational components and wire everything together."),(0,i.kt)("p",{parentName:"li"},"  If you are interested you can ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0"},"read more about it here"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"State is managed using global ",(0,i.kt)("a",{parentName:"strong",href:"https://redux.js.org/"},"Redux")," stores"),"."),(0,i.kt)("p",{parentName:"li"},'  When applications grow, sharing state and its changes can become very hard. Questions like "How can I access this data?" or "When did this change?" are common, just like passing data around components just to be able to use it in nested components.'),(0,i.kt)("p",{parentName:"li"},"  With Redux, state is shared using global ",(0,i.kt)("em",{parentName:"p"},"stores"),", and changes are predictable: ",(0,i.kt)("em",{parentName:"p"},"actions")," are applied by ",(0,i.kt)("em",{parentName:"p"},"reducers")," to the state. While the pattern can be a bit much for small projects, the clear separation of responsibilities and predictability helps with bigger applications."),(0,i.kt)("p",{parentName:"li"},"  If you are interested you can ",(0,i.kt)("a",{parentName:"p",href:"https://redux.js.org/introduction/motivation"},"read more about it here"),"."))),(0,i.kt)("h2",{id:"content-"},"Content \ud83e\uddf3"),(0,i.kt)("p",null,"The boilerplate contains a ",(0,i.kt)("a",{parentName:"p",href:"#directory-layout"},"clear directory layout")," to provide a base architecture for your application with some essential dependencies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://facebook.github.io/react-native/"},"React Native")," (v",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)(s,{name:"react-native",mdxType:"VersionReader"})),') application (in "',(0,i.kt)("a",{parentName:"li",href:"https://github.com/react-community/create-react-native-app/blob/master/EJECTING.md"},"ejected"),'" mode to allow using dependencies that rely on native code)'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://redux.js.org/"},"Redux")," (v",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)(s,{name:"react-redux",mdxType:"VersionReader"})),") to help manage state"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://redux-toolkit.js.org/"},"Redux Toolkit (Query)")," (v",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)(s,{name:"@reduxjs/toolkit",mdxType:"VersionReader"})),") to improve redux api calls"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/rt2zz/redux-persist"},"Redux Persist")," (v",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)(s,{name:"redux-persist",mdxType:"VersionReader"})),") to persist the Redux state"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/mrousavy/react-native-mmkv"},"React Native mmkv")," (v",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)(s,{name:"react-native-mmkv",mdxType:"VersionReader"})),") which is an efficient, small mobile key-value storage"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://reactnavigation.org/"},"React Navigation")," (v",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)(s,{name:"@react-navigation/native",mdxType:"VersionReader"})),") to handle routing and navigation in the app, with a splash screen setup by default"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/i18next/react-i18next"},"React I18Next")," (v",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)(s,{name:"react-i18next",mdxType:"VersionReader"})),") to handle internationalization in your app"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://prettier.io/"},"prettier")," and ",(0,i.kt)("a",{parentName:"li",href:"https://eslint.org/"},"eslint")," preconfigured for React Native"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://fbflipper.com/"},"react-native-flipper")," (v",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)(s,{name:"react-native-flipper",dev:!0,mdxType:"VersionReader"})),") to debug react-native,\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/jk-gan/redux-flipper"},"redux-flipper")," (v",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)(s,{name:"redux-flipper",dev:!0,mdxType:"VersionReader"})),") to debug redux,\n",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@react-navigation/devtools"},"navigation devtool")," (v",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)(s,{name:"@react-navigation/devtools",dev:!0,mdxType:"VersionReader"})),") to debug navigation,")),(0,i.kt)("p",null,"The boilerplate includes an example (displaying fake user data) from UI components to the business logic. The example is easy to remove so that it doesn't get in the way."),(0,i.kt)("h2",{id:"directory-layout-\ufe0f"},"Directory layout \ud83d\uddc2\ufe0f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src/components"),": presentational components"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src/hooks"),": hooks of the app, you will have the ",(0,i.kt)("inlineCode",{parentName:"li"},"useTheme")," hook to access the theme"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src/navigators"),": react navigation navigators"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src/screens"),": container components, i.e. the application's screens"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src/services"),": application services, e.g. API clients"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src/stores"),": redux ",(0,i.kt)("a",{parentName:"li",href:"https://redux.js.org/basics"},"actions, reducers and stores")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src/theme"),": base styles for the application"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"src/translations"),": application strings, you can add languages files and be able to translate your app strings")),(0,i.kt)("h2",{id:"updates-"},"Updates \ud83d\udd50"),(0,i.kt)("p",null,"The boilerplate will follow new React-Native releases as soon as libraries and tools used here are compatible."))}v.isMDXComponent=!0},585:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tom_dark-5481a8dcb72ca29ac6ae90ee8822de67.png"},5668:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tom_light-38e1e81d12099758318a798380ef86b8.png"}}]);