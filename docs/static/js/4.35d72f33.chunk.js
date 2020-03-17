(this["webpackJsonprmwc-main"]=this["webpackJsonprmwc-main"]||[]).push([[4],{957:function(e){e.exports=JSON.parse("[\"\\n  import * as React from 'react';\\n  import * as ReactDOM from 'react-dom';\\n  import App from './App'; // your main app component\\n  import { RMWCProvider } from '@rmwc/provider';\\n\\n  // This example disables ripples globally by default\\n  ReactDOM.render(\\n    <RMWCProvider\\n      // Globally disable ripples\\n      ripple={false}\\n      // Global options for icons\\n      // Takes the same options as the icon component\\n      icon={{\\n        basename: 'material-icons'\\n      }}\\n      // Global options for typography\\n      // allows mapping of a defaultTag or specific classes\\n      // See the Typography docs for more info\\n      typography={{\\n        defaultTag: 'div',\\n        headline1: 'h1'\\n      }}\\n      // Global options for tooltips\\n      // Takes most of the options for tooltips\\n      // See the Tooltip docs for more info\\n      tootlip={{\\n        align: 'right'\\n      }}\\n    >\\n      <App />\\n    </RMWCProvider>,\\n    document.getElementById('root'),\\n  );\\n\"]")},958:function(e){e.exports=JSON.parse('{"npm":{},"typescript":{"RMWCProviderProps":{"documentation":{"contents":["<p>A provider for setting global options in RMWC.</p>\\n"],"contentsRaw":"A provider for setting global options in RMWC.","metadata":{}},"fileName":"src/provider/index.tsx","flags":{"isExported":true,"isExternal":false,"isOptional":false,"isPrivate":false,"isProtected":false,"isPublic":false,"isRest":false,"isStatic":false},"kind":"interface","name":"RMWCProviderProps","sourceUrl":"https://github.com/jamesmfriedman/rmwc/blob/master/src/provider/index.tsx#L51","methods":[],"properties":[{"documentation":{"contents":["<p>Children to render</p>\\n"],"contentsRaw":"Children to render","metadata":{}},"fileName":"src/provider/index.tsx","flags":{"isExported":true,"isExternal":false,"isOptional":true,"isPrivate":false,"isProtected":false,"isPublic":false,"isRest":false,"isStatic":false},"kind":"property","name":"children","sourceUrl":"https://github.com/jamesmfriedman/rmwc/blob/master/src/provider/index.tsx#L61","type":"React.ReactNode"},{"documentation":{"contents":["<p>Global options for icons</p>\\n"],"contentsRaw":"Global options for icons","metadata":{}},"fileName":"src/provider/index.tsx","flags":{"isExported":true,"isExternal":false,"isOptional":true,"isPrivate":false,"isProtected":false,"isPublic":false,"isRest":false,"isStatic":false},"kind":"property","name":"icon","sourceUrl":"https://github.com/jamesmfriedman/rmwc/blob/master/src/provider/index.tsx#L55","type":"Partial<IconOptions>"},{"documentation":{"contents":["<p>Enable / Disable interaction ripples globally</p>\\n"],"contentsRaw":"Enable / Disable interaction ripples globally","metadata":{}},"fileName":"src/provider/index.tsx","flags":{"isExported":true,"isExternal":false,"isOptional":true,"isPrivate":false,"isProtected":false,"isPublic":false,"isRest":false,"isStatic":false},"kind":"property","name":"ripple","sourceUrl":"https://github.com/jamesmfriedman/rmwc/blob/master/src/provider/index.tsx#L53","type":"undefined | false | true"},{"documentation":{"contents":["<p>Global tooltip options</p>\\n"],"contentsRaw":"Global tooltip options","metadata":{}},"fileName":"src/provider/index.tsx","flags":{"isExported":true,"isExternal":false,"isOptional":true,"isPrivate":false,"isProtected":false,"isPublic":false,"isRest":false,"isStatic":false},"kind":"property","name":"tooltip","sourceUrl":"https://github.com/jamesmfriedman/rmwc/blob/master/src/provider/index.tsx#L57","type":"Partial<TooltipOptions>"},{"documentation":{"contents":["<p>Global typography options</p>\\n"],"contentsRaw":"Global typography options","metadata":{}},"fileName":"src/provider/index.tsx","flags":{"isExported":true,"isExternal":false,"isOptional":true,"isPrivate":false,"isProtected":false,"isPublic":false,"isRest":false,"isStatic":false},"kind":"property","name":"typography","sourceUrl":"https://github.com/jamesmfriedman/rmwc/blob/master/src/provider/index.tsx#L59","type":"Partial<TypographyOptions>"}]}}}')},963:function(e,t,o){"use strict";o.r(t);var i=o(0),s=o.n(i),n=o(1),a=o(958),r=o(957),l=o(42);t.default=function(){return s.a.createElement(n.b,{title:"Provider",lead:"A component that provides global configuration for RMWC.",module:"@rmwc/provider",styles:[],examples:r},s.a.createElement(n.e,null,"You can wrap your top level App component with RMWC provider to set global configuration options. Just pass the options in as props."),s.a.createElement(n.c,{codeOnly:!0},"\n          import * as React from 'react';\n          import * as ReactDOM from 'react-dom';\n          import App from './App'; // your main app component\n          import { RMWCProvider } from '@rmwc/provider';\n\n          // This example disables ripples globally by default\n          ReactDOM.render(\n            <RMWCProvider\n              // Globally disable ripples\n              ripple={false}\n              // Global options for icons\n              // Takes the same options as the icon component\n              icon={{\n                basename: 'material-icons'\n              }}\n              // Global options for typography\n              // allows mapping of a defaultTag or specific classes\n              // See the Typography docs for more info\n              typography={{\n                defaultTag: 'div',\n                headline1: 'h1'\n              }}\n              // Global options for tooltips\n              // Takes most of the options for tooltips\n              // See the Tooltip docs for more info\n              tootlip={{\n                align: 'right'\n              }}\n            >\n              <App />\n            </RMWCProvider>,\n            document.getElementById('root'),\n          );\n        "),s.a.createElement(n.a,{src:a,components:[{displayName:"RMWCProvider",component:l.b}]}))}}}]);
//# sourceMappingURL=4.35d72f33.chunk.js.map