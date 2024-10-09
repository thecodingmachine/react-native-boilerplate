(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1432],{1432:(e,t,n)=>{"use strict";n.d(t,{A:()=>G});var o=n(8587),r=n(6540),s=n(2303),c=n(8215),a=n(5293),l=n(6342);function i(){var e=(0,l.p)().prism,t=(0,a.G)().colorMode,n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}var u=n(7559),d=n(8634),m=n(8426),f=n.n(m),p=(0,d.A)(/title=(["'])(.*?)\1/,{quote:1,title:2}),b=(0,d.A)(/\{([\d,-]+)\}/,{range:1}),h={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},g=Object.assign({},h,{lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}}),v=Object.keys(h);function k(e,t){var n=e.map((function(e){var n=g[e],o=n.start,r=n.end;return"(?:"+o+"\\s*("+t.flatMap((function(e){var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+r+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function j(e,t){var n=e.replace(/\n$/,""),o=t.language,r=t.magicComments,s=t.metastring;if(s&&b.test(s)){var c=s.match(b).groups.range;if(0===r.length)throw new Error("A highlight range has been given in code block's metastring (``` "+s+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var a=r[0].className,l=f()(c).filter((function(e){return e>0})).map((function(e){return[e-1,[a]]}));return{lineClassNames:Object.fromEntries(l),code:n}}if(void 0===o)return{lineClassNames:{},code:n};for(var i=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return k(["js","jsBlock"],t);case"jsx":case"tsx":return k(["js","jsBlock","jsx"],t);case"html":return k(["js","jsBlock","html"],t);case"python":case"py":case"bash":return k(["bash"],t);case"markdown":case"md":return k(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return k(["tex"],t);case"lua":case"haskell":case"sql":return k(["lua"],t);case"wasm":return k(["wasm"],t);case"vb":case"vba":case"visual-basic":return k(["vb","rem"],t);case"vbnet":return k(["vbnet","rem"],t);case"batch":return k(["rem"],t);case"basic":return k(["rem","f90"],t);case"fsharp":return k(["js","ml"],t);case"ocaml":case"sml":return k(["ml"],t);case"fortran":return k(["f90"],t);case"cobol":return k(["cobol"],t);default:return k(v,t)}}(o,r),u=n.split("\n"),d=Object.fromEntries(r.map((function(e){return[e.className,{start:0,range:""}]}))),m=Object.fromEntries(r.filter((function(e){return e.line})).map((function(e){var t=e.className;return[e.line,t]}))),p=Object.fromEntries(r.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.start,t]}))),h=Object.fromEntries(r.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.end,t]}))),g=0;g<u.length;){var j=u[g].match(i);if(j){var B=j.slice(1).find((function(e){return void 0!==e}));m[B]?d[m[B]].range+=g+",":p[B]?d[p[B]].start=g:h[B]&&(d[h[B]].range+=d[h[B]].start+"-"+(g-1)+","),u.splice(g,1)}else g+=1}n=u.join("\n");var x={};return Object.entries(d).forEach((function(e){var t=e[0],n=e[1].range;f()(n).forEach((function(e){null!=x[e]||(x[e]=[]),x[e].push(t)}))})),{lineClassNames:x,code:n}}const B={codeBlockContainer:"codeBlockContainer_Ckt0"};var x=n(4848),y=["as"];function N(e){var t=e.as,n=(0,o.A)(e,y),r=function(e){var t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((function(e){var o=e[0],r=e[1],s=t[o];s&&"string"==typeof r&&(n[s]=r)})),n}(i());return(0,x.jsx)(t,Object.assign({},n,{style:r,className:(0,c.A)(n.className,B.codeBlockContainer,u.G.common.codeBlock)}))}const C={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function w(e){var t=e.children,n=e.className;return(0,x.jsx)(N,{as:"pre",tabIndex:0,className:(0,c.A)(C.codeBlockStandalone,"thin-scrollbar",n),children:(0,x.jsx)("code",{className:C.codeBlockLines,children:t})})}var L=n(3807),E={attributes:!0,characterData:!0,childList:!0,subtree:!0};function A(e,t){var n=(0,r.useState)(),o=n[0],s=n[1],c=(0,r.useCallback)((function(){var t;s(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,s]);(0,r.useEffect)((function(){c()}),[c]),function(e,t,n){void 0===n&&(n=E);var o=(0,L._q)(t),s=(0,L.Be)(n);(0,r.useEffect)((function(){var t=new MutationObserver(o);return e&&t.observe(e,s),function(){return t.disconnect()}}),[e,o,s])}(o,(function(e){e.forEach((function(e){"attributes"===e.type&&"hidden"===e.attributeName&&(t(),c())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var S=n(8181);const T={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function _(e){var t=e.line,n=e.classNames,o=e.showLineNumbers,r=e.getLineProps,s=e.getTokenProps;1===t.length&&"\n"===t[0].content&&(t[0].content="");var a=r({line:t,className:(0,c.A)(n,o&&T.codeLine)}),l=t.map((function(e,t){return(0,x.jsx)("span",Object.assign({},s({token:e,key:t})),t)}));return(0,x.jsxs)("span",Object.assign({},a,{children:[o?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("span",{className:T.codeLineNumber}),(0,x.jsx)("span",{className:T.codeLineContent,children:l})]}):l,(0,x.jsx)("br",{})]}))}var I=n(1312);function O(e){return(0,x.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,x.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})}))}function W(e){return(0,x.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,x.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})}))}const H={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function M(e){var t=e.code,n=e.className,o=(0,r.useState)(!1),s=o[0],a=o[1],l=(0,r.useRef)(void 0),i=(0,r.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,o=void 0===n?document.body:n;if("string"!=typeof e)throw new TypeError("Expected parameter `text` to be a `string`, got `"+typeof e+"`.");var r=document.createElement("textarea"),s=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";var c=document.getSelection(),a=c.rangeCount>0&&c.getRangeAt(0);o.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;var l=!1;try{l=document.execCommand("copy")}catch(i){}r.remove(),a&&(c.removeAllRanges(),c.addRange(a)),s&&s.focus()}(t),a(!0),l.current=window.setTimeout((function(){a(!1)}),1e3)}),[t]);return(0,r.useEffect)((function(){return function(){return window.clearTimeout(l.current)}}),[]),(0,x.jsx)("button",{type:"button","aria-label":s?(0,I.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,I.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,I.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,c.A)("clean-btn",n,H.copyButton,s&&H.copyButtonCopied),onClick:i,children:(0,x.jsxs)("span",{className:H.copyButtonIcons,"aria-hidden":"true",children:[(0,x.jsx)(O,{className:H.copyButtonIcon}),(0,x.jsx)(W,{className:H.copyButtonSuccessIcon})]})})}function V(e){return(0,x.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,x.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})}))}const R={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function P(e){var t=e.className,n=e.onClick,o=e.isEnabled,r=(0,I.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,x.jsx)("button",{type:"button",onClick:n,className:(0,c.A)("clean-btn",t,o&&R.wordWrapButtonEnabled),"aria-label":r,title:r,children:(0,x.jsx)(V,{className:R.wordWrapButtonIcon,"aria-hidden":"true"})})}function z(e){var t,n,o,s,a,u,d,m,f,b,h,g=e.children,v=e.className,k=void 0===v?"":v,B=e.metastring,y=e.title,w=e.showLineNumbers,L=e.language,E=(0,l.p)().prism,T=E.defaultLanguage,I=E.magicComments,O=function(e){return null==e?void 0:e.toLowerCase()}(null!=(t=null!=L?L:null==(n=k.split(" ").find((function(e){return e.startsWith("language-")})))?void 0:n.replace(/language-/,""))?t:T),W=i(),H=(o=(0,r.useState)(!1),s=o[0],a=o[1],u=(0,r.useState)(!1),d=u[0],m=u[1],f=(0,r.useRef)(null),b=(0,r.useCallback)((function(){var e=f.current.querySelector("code");s?e.removeAttribute("style"):(e.style.whiteSpace="pre-wrap",e.style.overflowWrap="anywhere"),a((function(e){return!e}))}),[f,s]),h=(0,r.useCallback)((function(){var e=f.current,t=e.scrollWidth>e.clientWidth||f.current.querySelector("code").hasAttribute("style");m(t)}),[f]),A(f,h),(0,r.useEffect)((function(){h()}),[s,h]),(0,r.useEffect)((function(){return window.addEventListener("resize",h,{passive:!0}),function(){window.removeEventListener("resize",h)}}),[h]),{codeBlockRef:f,isEnabled:s,isCodeScrollable:d,toggle:b}),V=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(p))?void 0:n.groups.title)?t:""}(B)||y,R=j(g,{metastring:B,language:O,magicComments:I}),z=R.lineClassNames,q=R.code,G=null!=w?w:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(B);return(0,x.jsxs)(N,{as:"div",className:(0,c.A)(k,O&&!k.includes("language-"+O)&&"language-"+O),children:[V&&(0,x.jsx)("div",{className:C.codeBlockTitle,children:V}),(0,x.jsxs)("div",{className:C.codeBlockContent,children:[(0,x.jsx)(S.f4,{theme:W,code:q,language:null!=O?O:"text",children:function(e){var t=e.className,n=e.style,o=e.tokens,r=e.getLineProps,s=e.getTokenProps;return(0,x.jsx)("pre",{tabIndex:0,ref:H.codeBlockRef,className:(0,c.A)(t,C.codeBlock,"thin-scrollbar"),style:n,children:(0,x.jsx)("code",{className:(0,c.A)(C.codeBlockLines,G&&C.codeBlockLinesWithNumbering),children:o.map((function(e,t){return(0,x.jsx)(_,{line:e,getLineProps:r,getTokenProps:s,classNames:z[t],showLineNumbers:G},t)}))})})}}),(0,x.jsxs)("div",{className:C.buttonGroup,children:[(H.isEnabled||H.isCodeScrollable)&&(0,x.jsx)(P,{className:C.codeButton,onClick:function(){return H.toggle()},isEnabled:H.isEnabled}),(0,x.jsx)(M,{className:C.codeButton,code:q})]})]})]})}var q=["children"];function G(e){var t=e.children,n=(0,o.A)(e,q),c=(0,s.A)(),a=function(e){return r.Children.toArray(e).some((function(e){return(0,r.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof a?z:w;return(0,x.jsx)(l,Object.assign({},n,{children:a}),String(c))}},8426:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,s]=t;if(o&&s){o=parseInt(o),s=parseInt(s);const e=o<s?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(s+=e);for(let t=o;t!==s;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);