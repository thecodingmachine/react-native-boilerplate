"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4072],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),d=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(r),p=a,g=c["".concat(i,".").concat(p)]||c[p]||m[p]||o;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var d=2;d<o;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4672:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var n=r(7462),a=r(7294),o=r(3905),l=r(614);const s=function(){const[e,t]=(0,a.useState)("1, 2"),[r,n]=(0,a.useState)([1,2]),[o,s]=(0,a.useState)("5, 10"),[i,d]=(0,a.useState)([5,10]),[u,c]=(0,a.useState)("red"),[m,p]=(0,a.useState)("#ff0000");return a.createElement("div",{className:"dark:bg-gray-900 bg-gray-100 pt-3 px-3 rounded-lg"},a.createElement(l.Z,{title:"/src/theme/theme.config.ts",metastring:"ts"},"export const config = { \n  //... \n  border: {\n    widths: [",a.createElement("input",{type:"text",className:"w-fit",value:e,onChange:e=>t(e.target.value),onBlur:()=>{const r=e.split(",").map((e=>Number.isNaN(parseInt(e,10))?null:parseInt(e,10))).filter((e=>null!==e));n(r),t(r.join(", "))}}),"]\n    radius: [",a.createElement("input",{type:"text",className:"w-fit",value:o,onChange:e=>s(e.target.value),onBlur:()=>{const e=o.split(",").map((e=>Number.isNaN(parseInt(e,10))?null:parseInt(e,10))).filter((e=>null!==e));d(e),s(e.join(", "))}}),"], \n    colors: {\n      ",a.createElement("input",{type:"text",className:"w-[50px]",value:u,onChange:e=>c(e.target.value)}),": ",a.createElement("input",{type:"text",className:"w-[70px]",value:m,onChange:e=>p(e.target.value)}),",\n      // you can add more key/value here\n    },\n  }\n  //...\n}"),a.createElement("p",{className:" dark:text-gray-300 text-gray-500 font-bold text-2xl text-center mb-4 border dark:border-gray-700 border-gray-200 p-2 "},"Generated classes"),a.createElement("div",{className:"max-h-[300px] overflow-auto"},a.createElement("table",{className:"table-fixed"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Property"),a.createElement("th",null,"Value"))),a.createElement("tbody",null,r.map((e=>a.createElement("tr",null,a.createElement("td",null,`borders.w_${e}`),a.createElement("td",null,a.createElement("code",null,`{ borderWidth: ${e} }`))))),i.map((e=>a.createElement("tr",null,a.createElement("td",null,`borders.rounded_${e}`),a.createElement("td",null,a.createElement("code",null,`{ borderRadius: ${e} }`))))),a.createElement("tr",null,a.createElement("td",null,`borders.${u}`),a.createElement("td",null,a.createElement("code",null,`{ borderColor: ${m} }`)))))))},i={slug:"/theming/generated-styles/borders",sidebar_label:"Borders",title:"Borders",id:"theming-generated-styles_borders",keywords:["border","borders","radius","width","color","colors"]},d=void 0,u={unversionedId:"Guides/Theming/Generated styles/theming-generated-styles_borders",id:"Guides/Theming/Generated styles/theming-generated-styles_borders",title:"Borders",description:"How to use ?",source:"@site/docs/04-Guides/04-Theming/03-Generated styles/04-Borders.mdx",sourceDirName:"04-Guides/04-Theming/03-Generated styles",slug:"/theming/generated-styles/borders",permalink:"/react-native-boilerplate/docs/theming/generated-styles/borders",draft:!1,editUrl:"https://github.com/thecodingmachine/react-native-boilerplate/edit/main/website-documentation/docs/docs/04-Guides/04-Theming/03-Generated styles/04-Borders.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"/theming/generated-styles/borders",sidebar_label:"Borders",title:"Borders",id:"theming-generated-styles_borders",keywords:["border","borders","radius","width","color","colors"]},sidebar:"tutorialSidebar",previous:{title:"Backgrounds",permalink:"/react-native-boilerplate/docs/theming/generated-styles/backgrounds"},next:{title:"Layout",permalink:"/react-native-boilerplate/docs/theming/generated-styles/layout"}},c={},m=[{value:"How to use ?",id:"how-to-use-",level:2},{value:"Generated borders",id:"generated-borders",level:2},{value:"Static borders styles",id:"static-borders-styles",level:2},{value:"Playground",id:"playground",level:2}],p={toc:m},g="wrapper";function b(e){let{components:t,...r}=e;return(0,o.kt)(g,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-to-use-"},"How to use ?"),(0,o.kt)("p",null,"Generated styles provided by the ",(0,o.kt)("inlineCode",{parentName:"p"},"borders")," section of the theme configuration assist in applying border radius, width and color to your components.\nYou can access these styles using the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { borders } = useTheme()\n")),(0,o.kt)("p",null,"For more details, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/theming/api-reference#bordersconfig"},(0,o.kt)("inlineCode",{parentName:"a"},"borders")," section")," of the theme configuration."),(0,o.kt)("h2",{id:"generated-borders"},"Generated borders"),(0,o.kt)("p",null,"Here is the representation of the generated styles for a given\n",(0,o.kt)("a",{parentName:"p",href:"/docs/theming/api-reference#bordersconfig"},(0,o.kt)("inlineCode",{parentName:"a"},"BordersConfig"))," like the one below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=/src/theme/theme.config.ts",title:"/src/theme/theme.config.ts"},"export const config = {\n    //...\n    borders: {\n        widths: widthsValues,\n        radius: radiusValues,\n        colors: colorsValues,\n    },\n    //...\n}\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"widthsValues")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"radiusValues")," are arrays of numbers, ",(0,o.kt)("inlineCode",{parentName:"p"},"widthValue")," is an item of ",(0,o.kt)("inlineCode",{parentName:"p"},"widthsValues"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"radiusValue")," is an item of ",(0,o.kt)("inlineCode",{parentName:"p"},"radiusValues"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"colorsValues")," is an object with\n",(0,o.kt)("inlineCode",{parentName:"p"},"colorsKey")," keys and ",(0,o.kt)("inlineCode",{parentName:"p"},"colorsValue")," values, the generated styles are as follows:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"font name"),(0,o.kt)("th",{parentName:"tr",align:null},"Generated style"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"borders.w_",(0,o.kt)("em",{parentName:"td"},"widthValue")),(0,o.kt)("td",{parentName:"tr",align:null},"{ borderWidth: ",(0,o.kt)("em",{parentName:"td"},"widthValue")," }")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"borders.rounded_",(0,o.kt)("em",{parentName:"td"},"radiusValue")),(0,o.kt)("td",{parentName:"tr",align:null},"{ borderRadius: ",(0,o.kt)("em",{parentName:"td"},"radiusValue")," }")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"borders.",(0,o.kt)("em",{parentName:"td"},"colorsKey")),(0,o.kt)("td",{parentName:"tr",align:null},"{ borderColor: ",(0,o.kt)("em",{parentName:"td"},"colorsValue")," }")))),(0,o.kt)("h2",{id:"static-borders-styles"},"Static borders styles"),(0,o.kt)("p",null,"Some border styles, don't require dynamic generation.\nTo accommodate this, we offer the ",(0,o.kt)("inlineCode",{parentName:"p"},"staticBorderStyles")," object that houses static styles for border.\nYou can use this file as-is or customize it to your preferences.\nThese styles will be seamlessly merged with the generated ones,\nmaking them accessible through the ",(0,o.kt)("inlineCode",{parentName:"p"},"borders")," object of the ",(0,o.kt)("inlineCode",{parentName:"p"},"useTheme")," hook."),(0,o.kt)("h2",{id:"playground"},"Playground"),(0,o.kt)("p",null,"Here's a simple playground that provides a visual representation of the objects generated from a given ",(0,o.kt)("inlineCode",{parentName:"p"},"borders")," configuration:"),(0,o.kt)(s,{mdxType:"Borders"}))}b.isMDXComponent=!0}}]);