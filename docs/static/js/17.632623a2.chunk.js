(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{192:function(e){e.exports={id:0,name:"@rmwc/grid-list",kind:0,flags:{},children:[{id:1,name:'"index"',kind:1,kindString:"External module",flags:{isExported:!0},originalName:"/Users/jamesmfriedman/Sites/rmwc/src/grid-list/index.tsx",children:[{id:2,name:"GridListProps",kind:256,kindString:"Interface",flags:{isExported:!0},children:[{id:4,name:"headerCaption",kind:1024,kindString:"Property",flags:{isExported:!0,isOptional:!0},comment:{shortText:"Move the caption to the top of the card."},sources:[{fileName:"index.tsx",line:10,character:15}],type:{type:"union",types:[{type:"intrinsic",name:"undefined"},{type:"intrinsic",name:"false"},{type:"intrinsic",name:"true"}]}},{id:7,name:"tileAspect",kind:1024,kindString:"Property",flags:{isExported:!0,isOptional:!0},comment:{shortText:"One of the following values: 1x1, 16x9, 2x3, 3x2, 4x3, 3x4."},sources:[{fileName:"index.tsx",line:16,character:12}],type:{type:"union",types:[{type:"stringLiteral",value:"1x1"},{type:"stringLiteral",value:"16x9"},{type:"stringLiteral",value:"2x3"},{type:"stringLiteral",value:"3x2"},{type:"stringLiteral",value:"4x3"},{type:"stringLiteral",value:"3x4"}]}},{id:3,name:"tileGutter1",kind:1024,kindString:"Property",flags:{isExported:!0,isOptional:!0},comment:{shortText:"Use a 1px gutter."},sources:[{fileName:"index.tsx",line:8,character:13}],type:{type:"union",types:[{type:"intrinsic",name:"undefined"},{type:"intrinsic",name:"false"},{type:"intrinsic",name:"true"}]}},{id:5,name:"twolineCaption",kind:1024,kindString:"Property",flags:{isExported:!0,isOptional:!0},comment:{shortText:"Make the caption two lines."},sources:[{fileName:"index.tsx",line:12,character:16}],type:{type:"union",types:[{type:"intrinsic",name:"undefined"},{type:"intrinsic",name:"false"},{type:"intrinsic",name:"true"}]}},{id:6,name:"withIconAlignStart",kind:1024,kindString:"Property",flags:{isExported:!0,isOptional:!0},comment:{shortText:"Leaves space for a start aligned icon."},sources:[{fileName:"index.tsx",line:14,character:20}],type:{type:"union",types:[{type:"intrinsic",name:"undefined"},{type:"intrinsic",name:"false"},{type:"intrinsic",name:"true"}]}}],groups:[{title:"Properties",kind:1024,children:[4,7,3,5,6]}],sources:[{fileName:"index.tsx",line:6,character:30}]},{id:8,name:"GridTileIconProps",kind:256,kindString:"Interface",flags:{isExported:!0},children:[{id:9,name:"icon",kind:1024,kindString:"Property",flags:{isExported:!0,isOptional:!0},comment:{shortText:"The icon to use. This can be a string for a font icon, a url, or whatever the selected strategy needs."},sources:[{fileName:"/Users/jamesmfriedman/Sites/rmwc/src/icon/index.tsx",line:50,character:6}],type:{type:"reference",name:"IconPropT"},inheritedFrom:{type:"reference",name:"IconProps.icon"}},{id:10,name:"iconOptions",kind:1024,kindString:"Property",flags:{isExported:!0,isOptional:!0},comment:{shortText:"DEPRECATED: Additional Icon Options. See the Icon component documentation."},sources:[{fileName:"/Users/jamesmfriedman/Sites/rmwc/src/icon/index.tsx",line:55,character:13}],type:{type:"reference",name:"IconOptions"},inheritedFrom:{type:"reference",name:"DeprecatedIconProps.iconOptions"}}],groups:[{title:"Properties",kind:1024,children:[9,10]}],sources:[{fileName:"index.tsx",line:86,character:34}],extendedTypes:[{type:"reference",name:"IconProps"}]},{id:11,name:"GridList",kind:32,kindString:"Variable",flags:{isExported:!0,isConst:!0},comment:{shortText:"Grid List Component"},sources:[{fileName:"index.tsx",line:20,character:21}],type:{type:"union",types:[{type:"reference",name:"ComponentClass",typeArguments:[{type:"intersection",types:[{type:"reference",name:"GridListProps",id:2},{type:"reference",name:"ComponentProps"}]},{type:"intrinsic",name:"any"}]},{type:"reference",name:"FunctionComponent",typeArguments:[{type:"intersection",types:[{type:"reference",name:"GridListProps",id:2},{type:"reference",name:"ComponentProps"}]}]}]},defaultValue:" componentFactory<GridListProps>({\n  displayName: 'GridList',\n  classNames: (props: GridListProps) => [\n    'mdc-grid-list',\n    {\n      'mdc-grid-list--tile-gutter-1': props.tileGutter1,\n      'mdc-grid-list--header-caption': props.headerCaption,\n      'mdc-grid-list--twoline-caption': props.twolineCaption,\n      'mdc-grid-list--with-icon-align-start': props.withIconAlignStart,\n      [`mdc-grid-list--tile-aspect-${props.tileAspect || ''}`]: props.tileAspect\n    }\n  ],\n  defaultProps: {\n    tileGutter1: false,\n    headerCaption: false,\n    twolineCaption: false,\n    withIconAlignStart: false,\n    tileAspect: '1x1'\n  },\n  consumeProps: [\n    'tileGutter1',\n    'headerCaption',\n    'twolineCaption',\n    'withIconAlignStart',\n    'tileAspect'\n  ],\n  render: (\n    { children, ...rest }: GridListProps & RMWC.ComponentProps,\n    ref: any,\n    Tag: any\n  ) => (\n    <Tag {...rest} ref={ref}>\n      <ul className=\"mdc-grid-list__tiles\">{children}</ul>\n    </Tag>\n  )\n})"},{id:14,name:"GridTile",kind:32,kindString:"Variable",flags:{isExported:!0,isConst:!0},comment:{shortText:"A grid tile"},sources:[{fileName:"index.tsx",line:73,character:21}],type:{type:"union",types:[{type:"reference",name:"ComponentClass",typeArguments:[{type:"reference",name:"ComponentProps"},{type:"intrinsic",name:"any"}]},{type:"reference",name:"FunctionComponent",typeArguments:[{type:"reference",name:"ComponentProps"}]}]},defaultValue:" componentFactory<{}>({\n  displayName: 'GridTile',\n  tag: 'li',\n  classNames: ['mdc-grid-tile']\n})"},{id:16,name:"GridTileIcon",kind:32,kindString:"Variable",flags:{isExported:!0,isConst:!0},comment:{shortText:"The icon for a Grid tile. This is an instance of Icon component."},sources:[{fileName:"index.tsx",line:89,character:25}],type:{type:"union",types:[{type:"reference",name:"ComponentClass",typeArguments:[{type:"intersection",types:[{type:"reference",name:"GridTileIconProps",id:8},{type:"reference",name:"ComponentProps"}]},{type:"intrinsic",name:"any"}]},{type:"reference",name:"FunctionComponent",typeArguments:[{type:"intersection",types:[{type:"reference",name:"GridTileIconProps",id:8},{type:"reference",name:"ComponentProps"}]}]}]},defaultValue:" componentFactory<GridTileIconProps>({\n  displayName: 'GridTileIcon',\n  tag: Icon,\n  classNames: ['mdc-grid-tile__icon']\n})"},{id:12,name:"GridTilePrimary",kind:32,kindString:"Variable",flags:{isExported:!0,isConst:!0},comment:{shortText:"The primary content for a Grid tile"},sources:[{fileName:"index.tsx",line:58,character:28}],type:{type:"union",types:[{type:"reference",name:"ComponentClass",typeArguments:[{type:"reference",name:"ComponentProps"},{type:"intrinsic",name:"any"}]},{type:"reference",name:"FunctionComponent",typeArguments:[{type:"reference",name:"ComponentProps"}]}]},defaultValue:" componentFactory<{}>({\n  displayName: 'GridTilePrimary',\n  classNames: ['mdc-grid-tile__primary']\n})"},{id:13,name:"GridTilePrimaryContent",kind:32,kindString:"Variable",flags:{isExported:!0,isConst:!0},sources:[{fileName:"index.tsx",line:63,character:35}],type:{type:"union",types:[{type:"reference",name:"ComponentClass",typeArguments:[{type:"reference",name:"ComponentProps"},{type:"intrinsic",name:"any"}]},{type:"reference",name:"FunctionComponent",typeArguments:[{type:"reference",name:"ComponentProps"}]}]},defaultValue:" componentFactory<{}>({\n  displayName: 'GridTilePrimaryContent',\n  tag: 'img',\n  classNames: ['mdc-grid-tile__primary-content']\n})"},{id:15,name:"GridTileSecondary",kind:32,kindString:"Variable",flags:{isExported:!0,isConst:!0},comment:{shortText:"The secondary content for a Grid tile"},sources:[{fileName:"index.tsx",line:80,character:30}],type:{type:"union",types:[{type:"reference",name:"ComponentClass",typeArguments:[{type:"reference",name:"ComponentProps"},{type:"intrinsic",name:"any"}]},{type:"reference",name:"FunctionComponent",typeArguments:[{type:"reference",name:"ComponentProps"}]}]},defaultValue:" componentFactory<{}>({\n  displayName: 'GridTileSecondary',\n  tag: 'span',\n  classNames: ['mdc-grid-tile__secondary']\n})"},{id:17,name:"GridTileTitle",kind:32,kindString:"Variable",flags:{isExported:!0,isConst:!0},comment:{shortText:"The title for a Grid tile"},sources:[{fileName:"index.tsx",line:96,character:26}],type:{type:"union",types:[{type:"reference",name:"ComponentClass",typeArguments:[{type:"reference",name:"ComponentProps"},{type:"intrinsic",name:"any"}]},{type:"reference",name:"FunctionComponent",typeArguments:[{type:"reference",name:"ComponentProps"}]}]},defaultValue:" componentFactory<{}>({\n  displayName: 'GridTileTitle',\n  tag: 'span',\n  classNames: ['mdc-grid-tile__title']\n})"},{id:18,name:"GridTileTitleSupportText",kind:32,kindString:"Variable",flags:{isExported:!0,isConst:!0},comment:{shortText:"Supporting Text for the Grid Tile"},sources:[{fileName:"index.tsx",line:103,character:37}],type:{type:"union",types:[{type:"reference",name:"ComponentClass",typeArguments:[{type:"reference",name:"ComponentProps"},{type:"intrinsic",name:"any"}]},{type:"reference",name:"FunctionComponent",typeArguments:[{type:"reference",name:"ComponentProps"}]}]},defaultValue:" componentFactory<{}>({\n  displayName: 'GridTileTitleSupportText',\n  tag: 'span',\n  classNames: ['mdc-grid-tile__support-text']\n})"}],groups:[{title:"Interfaces",kind:256,children:[2,8]},{title:"Variables",kind:32,children:[11,14,16,12,13,15,17,18]}],sources:[{fileName:"index.tsx",line:1,character:0}]}],groups:[{title:"External modules",kind:1,children:[1]}]}},228:function(e,a,t){"use strict";t.r(a),t.d(a,"attributes",function(){return d}),t.d(a,"default",function(){return y});var n=t(29),s=t(4),c=t(5),l=t(7),r=t(3),o=t(8),m=t(0),i=t.n(m),p=t(72),u=t(61),k=t(62),E=t(60),N=(t(192),t.t(192,1)),d={},y=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(l.a)(this,Object(r.a)(a).call(this,e))).state={},t}return Object(o.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("h1",null,"Grid Lists"),i.a.createElement("blockquote",null,i.a.createElement("p",null,"Grid lists are an alternative to standard list views.")),i.a.createElement("ul",null,i.a.createElement("li",null,"Module ",i.a.createElement("strong",null,"@rmwc/grid-list")),i.a.createElement("li",null,"Import styles:",i.a.createElement("ul",null,i.a.createElement("li",null,"import ",i.a.createElement("strong",null,"'@material/grid-list/dist/mdc.grid-list.css'"),";"))),i.a.createElement("li",null,"MDC Docs: ",i.a.createElement("a",{href:"https://material.io/components/web/catalog/grid-lists/"},"https://material.io/components/web/catalog/grid-lists/"))),i.a.createElement("div",{className:"example render-with-code"},i.a.createElement("div",{className:"run"},i.a.createElement(p.a,{tileGutter1:this.state.tileGutter1,headerCaption:this.state.headerCaption,twolineCaption:this.state.twolineCaption,withIconAlignStart:this.state.withIconAlignStart,tileAspect:this.state.tileAspect},Object(n.a)(Array(8)).map(function(e,a){return i.a.createElement(p.b,{key:a},i.a.createElement(p.d,null,i.a.createElement(p.e,{src:"https://material-components-web.appspot.com/images/1-1.jpg",alt:"test"})),i.a.createElement(p.f,null,i.a.createElement(p.c,{icon:"info"}),i.a.createElement(p.g,null,"Tile ",a+1)))})),i.a.createElement(u.a,{label:"tileGutter1",onClick:function(){return e.setState({tileGutter1:!e.state.tileGutter1})}}),i.a.createElement(u.a,{label:"headerCaption",onClick:function(){return e.setState({headerCaption:!e.state.headerCaption})}}),i.a.createElement(u.a,{label:"twolineCaption",onClick:function(){return e.setState({twolineCaption:!e.state.twolineCaption})}}),i.a.createElement(u.a,{label:"withIconAlignStart",onClick:function(){return e.setState({withIconAlignStart:!e.state.withIconAlignStart})}}),i.a.createElement(k.a,{value:this.state.tileAspect||"1x1",onChange:function(a){return e.setState({tileAspect:a.target.value})},label:"tileAspect",options:["1x1","16x9","2x3","3x2","4x3","3x4"]})),i.a.createElement("div",{className:"source"},i.a.createElement("pre",{className:"language-jsx"},i.a.createElement("code",{className:"language-jsx"},i.a.createElement("span",{className:"token keyword"},"import")," ",i.a.createElement("span",{className:"token punctuation"},"{"),"\n","  GridList",i.a.createElement("span",{className:"token punctuation"},","),"\n","  GridTile",i.a.createElement("span",{className:"token punctuation"},","),"\n","  GridTileIcon",i.a.createElement("span",{className:"token punctuation"},","),"\n","  GridTilePrimary",i.a.createElement("span",{className:"token punctuation"},","),"\n","  GridTilePrimaryContent",i.a.createElement("span",{className:"token punctuation"},","),"\n","  GridTileSecondary",i.a.createElement("span",{className:"token punctuation"},","),"\n","  GridTileTitle","\n",i.a.createElement("span",{className:"token punctuation"},"}")," ",i.a.createElement("span",{className:"token keyword"},"from")," ",i.a.createElement("span",{className:"token string"},"'@rmwc/grid-list'"),i.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",i.a.createElement("span",{className:"token keyword"},"import")," ",i.a.createElement("span",{className:"token punctuation"},"{")," Checkbox ",i.a.createElement("span",{className:"token punctuation"},"}")," ",i.a.createElement("span",{className:"token keyword"},"from")," ",i.a.createElement("span",{className:"token string"},"'@rmwc/checkbox'"),i.a.createElement("span",{className:"token punctuation"},";"),"\n",i.a.createElement("span",{className:"token keyword"},"import")," ",i.a.createElement("span",{className:"token punctuation"},"{")," Select ",i.a.createElement("span",{className:"token punctuation"},"}")," ",i.a.createElement("span",{className:"token keyword"},"from")," ",i.a.createElement("span",{className:"token string"},"'@rmwc/select'"),i.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",i.a.createElement("span",{className:"token tag"},i.a.createElement("span",{className:"token tag"},i.a.createElement("span",{className:"token punctuation"},"<"),"GridList"),"\n","  ",i.a.createElement("span",{className:"token attr-name"},"tileGutter1"),i.a.createElement("span",{className:"token script language-javascript"},i.a.createElement("span",{className:"token punctuation"},"="),i.a.createElement("span",{className:"token punctuation"},"{"),i.a.createElement("span",{className:"token keyword"},"this"),i.a.createElement("span",{className:"token punctuation"},"."),"state",i.a.createElement("span",{className:"token punctuation"},"."),"tileGutter1",i.a.createElement("span",{className:"token punctuation"},"}")),"\n","  ",i.a.createElement("span",{className:"token attr-name"},"headerCaption"),i.a.createElement("span",{className:"token script language-javascript"},i.a.createElement("span",{className:"token punctuation"},"="),i.a.createElement("span",{className:"token punctuation"},"{"),i.a.createElement("span",{className:"token keyword"},"this"),i.a.createElement("span",{className:"token punctuation"},"."),"state",i.a.createElement("span",{className:"token punctuation"},"."),"headerCaption",i.a.createElement("span",{className:"token punctuation"},"}")),"\n","  ",i.a.createElement("span",{className:"token attr-name"},"twolineCaption"),i.a.createElement("span",{className:"token script language-javascript"},i.a.createElement("span",{className:"token punctuation"},"="),i.a.createElement("span",{className:"token punctuation"},"{"),i.a.createElement("span",{className:"token keyword"},"this"),i.a.createElement("span",{className:"token punctuation"},"."),"state",i.a.createElement("span",{className:"token punctuation"},"."),"twolineCaption",i.a.createElement("span",{className:"token punctuation"},"}")),"\n","  ",i.a.createElement("span",{className:"token attr-name"},"withIconAlignStart"),i.a.createElement("span",{className:"token script language-javascript"},i.a.createElement("span",{className:"token punctuation"},"="),i.a.createElement("span",{className:"token punctuation"},"{"),i.a.createElement("span",{className:"token keyword"},"this"),i.a.createElement("span",{className:"token punctuation"},"."),"state",i.a.createElement("span",{className:"token punctuation"},"."),"withIconAlignStart",i.a.createElement("span",{className:"token punctuation"},"}")),"\n","  ",i.a.createElement("span",{className:"token attr-name"},"tileAspect"),i.a.createElement("span",{className:"token script language-javascript"},i.a.createElement("span",{className:"token punctuation"},"="),i.a.createElement("span",{className:"token punctuation"},"{"),i.a.createElement("span",{className:"token keyword"},"this"),i.a.createElement("span",{className:"token punctuation"},"."),"state",i.a.createElement("span",{className:"token punctuation"},"."),"tileAspect",i.a.createElement("span",{className:"token punctuation"},"}")),"\n",i.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",i.a.createElement("span",{className:"token punctuation"},"{"),i.a.createElement("span",{className:"token punctuation"},"["),i.a.createElement("span",{className:"token operator"},"..."),i.a.createElement("span",{className:"token function"},"Array"),i.a.createElement("span",{className:"token punctuation"},"("),i.a.createElement("span",{className:"token number"},"8"),i.a.createElement("span",{className:"token punctuation"},")"),i.a.createElement("span",{className:"token punctuation"},"]"),i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",{className:"token function"},"map"),i.a.createElement("span",{className:"token punctuation"},"("),i.a.createElement("span",{className:"token punctuation"},"("),"val",i.a.createElement("span",{className:"token punctuation"},",")," i",i.a.createElement("span",{className:"token punctuation"},")")," ",i.a.createElement("span",{className:"token operator"},"="),i.a.createElement("span",{className:"token operator"},">")," ",i.a.createElement("span",{className:"token punctuation"},"("),"\n","    ",i.a.createElement("span",{className:"token tag"},i.a.createElement("span",{className:"token tag"},i.a.createElement("span",{className:"token punctuation"},"<"),"GridTile")," ",i.a.createElement("span",{className:"token attr-name"},"key"),i.a.createElement("span",{className:"token script language-javascript"},i.a.createElement("span",{className:"token punctuation"},"="),i.a.createElement("span",{className:"token punctuation"},"{"),"i",i.a.createElement("span",{className:"token punctuation"},"}")),i.a.createElement("span",{className:"token punctuation"},">")),"\n","      ",i.a.createElement("span",{className:"token tag"},i.a.createElement("span",{className:"token tag"},i.a.createElement("span",{className:"token punctuation"},"<"),"GridTilePrimary"),i.a.createElement("span",{className:"token punctuation"},">")),"\n","        ",i.a.createElement("span",{className:"token tag"},i.a.createElement("span",{className:"token tag"},i.a.createElement("span",{className:"token punctuation"},"<"),"GridTilePrimaryContent"),"         ","\n","          ",i.a.createElement("span",{className:"token attr-name"},"src"),i.a.createElement("span",{className:"token attr-value"},i.a.createElement("span",{className:"token punctuation"},"="),i.a.createElement("span",{className:"token punctuation"},'"'),"https://material-components-web.appspot.com/images/1-1.jpg",i.a.createElement("span",{className:"token punctuation"},'"'))," ",i.a.createElement("span",{className:"token attr-name"},"alt"),i.a.createElement("span",{className:"token attr-value"},i.a.createElement("span",{className:"token punctuation"},"="),i.a.createElement("span",{className:"token punctuation"},'"'),"test",i.a.createElement("span",{className:"token punctuation"},'"'),"/"),i.a.createElement("span",{className:"token punctuation"},">")),"\n","      ",i.a.createElement("span",{className:"token tag"},i.a.createElement("span",{className:"token tag"},i.a.createElement("span",{className:"token punctuation"},"</"),"GridTilePrimary"),i.a.createElement("span",{className:"token punctuation"},">")),"\n","      ",i.a.createElement("span",{className:"token tag"},i.a.createElement("span",{className:"token tag"},i.a.createElement("span",{className:"token punctuation"},"<"),"GridTileSecondary"),i.a.createElement("span",{className:"token punctuation"},">")),"\n","        ",i.a.createElement("span",{className:"token tag"},i.a.createElement("span",{className:"token tag"},i.a.createElement("span",{className:"token punctuation"},"<"),"GridTileIcon")," ",i.a.createElement("span",{className:"token attr-name"},"icon"),i.a.createElement("span",{className:"token attr-value"},i.a.createElement("span",{className:"token punctuation"},"="),i.a.createElement("span",{className:"token punctuation"},'"'),"info",i.a.createElement("span",{className:"token punctuation"},'"'))," ",i.a.createElement("span",{className:"token punctuation"},"/>")),"\n","        ",i.a.createElement("span",{className:"token tag"},i.a.createElement("span",{className:"token tag"},i.a.createElement("span",{className:"token punctuation"},"<"),"GridTileTitle"),i.a.createElement("span",{className:"token punctuation"},">")),"Tile ",i.a.createElement("span",{className:"token punctuation"},"{"),"i ",i.a.createElement("span",{className:"token operator"},"+")," ",i.a.createElement("span",{className:"token number"},"1"),i.a.createElement("span",{className:"token punctuation"},"}"),i.a.createElement("span",{className:"token tag"},i.a.createElement("span",{className:"token tag"},i.a.createElement("span",{className:"token punctuation"},"</"),"GridTileTitle"),i.a.createElement("span",{className:"token punctuation"},">")),"\n","      ",i.a.createElement("span",{className:"token tag"},i.a.createElement("span",{className:"token tag"},i.a.createElement("span",{className:"token punctuation"},"</"),"GridTileSecondary"),i.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",i.a.createElement("span",{className:"token tag"},i.a.createElement("span",{className:"token tag"},i.a.createElement("span",{className:"token punctuation"},"</"),"GridTile"),i.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",i.a.createElement("span",{className:"token punctuation"},")"),i.a.createElement("span",{className:"token punctuation"},")"),i.a.createElement("span",{className:"token punctuation"},"}"),"\n",i.a.createElement("span",{className:"token tag"},i.a.createElement("span",{className:"token tag"},i.a.createElement("span",{className:"token punctuation"},"</"),"GridList"),i.a.createElement("span",{className:"token punctuation"},">")),"\n","\n",i.a.createElement("span",{className:"token tag"},i.a.createElement("span",{className:"token tag"},i.a.createElement("span",{className:"token punctuation"},"<"),"Checkbox")," ",i.a.createElement("span",{className:"token attr-name"},"label"),i.a.createElement("span",{className:"token attr-value"},i.a.createElement("span",{className:"token punctuation"},"="),i.a.createElement("span",{className:"token punctuation"},'"'),"tileGutter1",i.a.createElement("span",{className:"token punctuation"},'"'))," ",i.a.createElement("span",{className:"token attr-name"},"onClick"),i.a.createElement("span",{className:"token script language-javascript"},i.a.createElement("span",{className:"token punctuation"},"="),i.a.createElement("span",{className:"token punctuation"},"{"),i.a.createElement("span",{className:"token punctuation"},"("),i.a.createElement("span",{className:"token punctuation"},")")," ",i.a.createElement("span",{className:"token operator"},"="),i.a.createElement("span",{className:"token operator"},">")," ",i.a.createElement("span",{className:"token keyword"},"this"),i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",{className:"token function"},"setState"),i.a.createElement("span",{className:"token punctuation"},"("),i.a.createElement("span",{className:"token punctuation"},"{"),"tileGutter1",i.a.createElement("span",{className:"token punctuation"},":")," ",i.a.createElement("span",{className:"token operator"},"!"),i.a.createElement("span",{className:"token keyword"},"this"),i.a.createElement("span",{className:"token punctuation"},"."),"state",i.a.createElement("span",{className:"token punctuation"},"."),"tileGutter1",i.a.createElement("span",{className:"token punctuation"},"}"),i.a.createElement("span",{className:"token punctuation"},")"),i.a.createElement("span",{className:"token punctuation"},"}")),i.a.createElement("span",{className:"token punctuation"},"/>")),"\n",i.a.createElement("span",{className:"token tag"},i.a.createElement("span",{className:"token tag"},i.a.createElement("span",{className:"token punctuation"},"<"),"Checkbox")," ",i.a.createElement("span",{className:"token attr-name"},"label"),i.a.createElement("span",{className:"token attr-value"},i.a.createElement("span",{className:"token punctuation"},"="),i.a.createElement("span",{className:"token punctuation"},'"'),"headerCaption",i.a.createElement("span",{className:"token punctuation"},'"'))," ",i.a.createElement("span",{className:"token attr-name"},"onClick"),i.a.createElement("span",{className:"token script language-javascript"},i.a.createElement("span",{className:"token punctuation"},"="),i.a.createElement("span",{className:"token punctuation"},"{"),i.a.createElement("span",{className:"token punctuation"},"("),i.a.createElement("span",{className:"token punctuation"},")")," ",i.a.createElement("span",{className:"token operator"},"="),i.a.createElement("span",{className:"token operator"},">")," ",i.a.createElement("span",{className:"token keyword"},"this"),i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",{className:"token function"},"setState"),i.a.createElement("span",{className:"token punctuation"},"("),i.a.createElement("span",{className:"token punctuation"},"{"),"headerCaption",i.a.createElement("span",{className:"token punctuation"},":")," ",i.a.createElement("span",{className:"token operator"},"!"),i.a.createElement("span",{className:"token keyword"},"this"),i.a.createElement("span",{className:"token punctuation"},"."),"state",i.a.createElement("span",{className:"token punctuation"},"."),"headerCaption",i.a.createElement("span",{className:"token punctuation"},"}"),i.a.createElement("span",{className:"token punctuation"},")"),i.a.createElement("span",{className:"token punctuation"},"}")),i.a.createElement("span",{className:"token punctuation"},"/>")),"\n",i.a.createElement("span",{className:"token tag"},i.a.createElement("span",{className:"token tag"},i.a.createElement("span",{className:"token punctuation"},"<"),"Checkbox")," ",i.a.createElement("span",{className:"token attr-name"},"label"),i.a.createElement("span",{className:"token attr-value"},i.a.createElement("span",{className:"token punctuation"},"="),i.a.createElement("span",{className:"token punctuation"},'"'),"twolineCaption",i.a.createElement("span",{className:"token punctuation"},'"'))," ",i.a.createElement("span",{className:"token attr-name"},"onClick"),i.a.createElement("span",{className:"token script language-javascript"},i.a.createElement("span",{className:"token punctuation"},"="),i.a.createElement("span",{className:"token punctuation"},"{"),i.a.createElement("span",{className:"token punctuation"},"("),i.a.createElement("span",{className:"token punctuation"},")")," ",i.a.createElement("span",{className:"token operator"},"="),i.a.createElement("span",{className:"token operator"},">")," ",i.a.createElement("span",{className:"token keyword"},"this"),i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",{className:"token function"},"setState"),i.a.createElement("span",{className:"token punctuation"},"("),i.a.createElement("span",{className:"token punctuation"},"{"),"twolineCaption",i.a.createElement("span",{className:"token punctuation"},":")," ",i.a.createElement("span",{className:"token operator"},"!"),i.a.createElement("span",{className:"token keyword"},"this"),i.a.createElement("span",{className:"token punctuation"},"."),"state",i.a.createElement("span",{className:"token punctuation"},"."),"twolineCaption",i.a.createElement("span",{className:"token punctuation"},"}"),i.a.createElement("span",{className:"token punctuation"},")"),i.a.createElement("span",{className:"token punctuation"},"}")),i.a.createElement("span",{className:"token punctuation"},"/>")),"\n",i.a.createElement("span",{className:"token tag"},i.a.createElement("span",{className:"token tag"},i.a.createElement("span",{className:"token punctuation"},"<"),"Checkbox")," ",i.a.createElement("span",{className:"token attr-name"},"label"),i.a.createElement("span",{className:"token attr-value"},i.a.createElement("span",{className:"token punctuation"},"="),i.a.createElement("span",{className:"token punctuation"},'"'),"withIconAlignStart",i.a.createElement("span",{className:"token punctuation"},'"'))," ",i.a.createElement("span",{className:"token attr-name"},"onClick"),i.a.createElement("span",{className:"token script language-javascript"},i.a.createElement("span",{className:"token punctuation"},"="),i.a.createElement("span",{className:"token punctuation"},"{"),i.a.createElement("span",{className:"token punctuation"},"("),i.a.createElement("span",{className:"token punctuation"},")")," ",i.a.createElement("span",{className:"token operator"},"="),i.a.createElement("span",{className:"token operator"},">")," ",i.a.createElement("span",{className:"token keyword"},"this"),i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",{className:"token function"},"setState"),i.a.createElement("span",{className:"token punctuation"},"("),i.a.createElement("span",{className:"token punctuation"},"{"),"withIconAlignStart",i.a.createElement("span",{className:"token punctuation"},":")," ",i.a.createElement("span",{className:"token operator"},"!"),i.a.createElement("span",{className:"token keyword"},"this"),i.a.createElement("span",{className:"token punctuation"},"."),"state",i.a.createElement("span",{className:"token punctuation"},"."),"withIconAlignStart",i.a.createElement("span",{className:"token punctuation"},"}"),i.a.createElement("span",{className:"token punctuation"},")"),i.a.createElement("span",{className:"token punctuation"},"}")),i.a.createElement("span",{className:"token punctuation"},"/>")),"\n","\n",i.a.createElement("span",{className:"token tag"},i.a.createElement("span",{className:"token tag"},i.a.createElement("span",{className:"token punctuation"},"<"),"Select"),"\n","  ",i.a.createElement("span",{className:"token attr-name"},"value"),i.a.createElement("span",{className:"token script language-javascript"},i.a.createElement("span",{className:"token punctuation"},"="),i.a.createElement("span",{className:"token punctuation"},"{"),i.a.createElement("span",{className:"token keyword"},"this"),i.a.createElement("span",{className:"token punctuation"},"."),"state",i.a.createElement("span",{className:"token punctuation"},"."),"tileAspect ",i.a.createElement("span",{className:"token operator"},"||")," ",i.a.createElement("span",{className:"token string"},"'1x1'"),i.a.createElement("span",{className:"token punctuation"},"}")),"\n","  ",i.a.createElement("span",{className:"token attr-name"},"onChange"),i.a.createElement("span",{className:"token script language-javascript"},i.a.createElement("span",{className:"token punctuation"},"="),i.a.createElement("span",{className:"token punctuation"},"{"),"evt ",i.a.createElement("span",{className:"token operator"},"="),i.a.createElement("span",{className:"token operator"},">")," ",i.a.createElement("span",{className:"token keyword"},"this"),i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",{className:"token function"},"setState"),i.a.createElement("span",{className:"token punctuation"},"("),i.a.createElement("span",{className:"token punctuation"},"{"),"tileAspect",i.a.createElement("span",{className:"token punctuation"},":")," evt",i.a.createElement("span",{className:"token punctuation"},"."),"target",i.a.createElement("span",{className:"token punctuation"},"."),"value",i.a.createElement("span",{className:"token punctuation"},"}"),i.a.createElement("span",{className:"token punctuation"},")"),i.a.createElement("span",{className:"token punctuation"},"}")),"\n","  ",i.a.createElement("span",{className:"token attr-name"},"label"),i.a.createElement("span",{className:"token attr-value"},i.a.createElement("span",{className:"token punctuation"},"="),i.a.createElement("span",{className:"token punctuation"},'"'),"tileAspect",i.a.createElement("span",{className:"token punctuation"},'"')),"\n","  ",i.a.createElement("span",{className:"token attr-name"},"options"),i.a.createElement("span",{className:"token script language-javascript"},i.a.createElement("span",{className:"token punctuation"},"="),i.a.createElement("span",{className:"token punctuation"},"{"),i.a.createElement("span",{className:"token punctuation"},"["),i.a.createElement("span",{className:"token string"},"'1x1'"),i.a.createElement("span",{className:"token punctuation"},",")," ",i.a.createElement("span",{className:"token string"},"'16x9'"),i.a.createElement("span",{className:"token punctuation"},",")," ",i.a.createElement("span",{className:"token string"},"'2x3'"),i.a.createElement("span",{className:"token punctuation"},",")," ",i.a.createElement("span",{className:"token string"},"'3x2'"),i.a.createElement("span",{className:"token punctuation"},",")," ",i.a.createElement("span",{className:"token string"},"'4x3'"),i.a.createElement("span",{className:"token punctuation"},",")," ",i.a.createElement("span",{className:"token string"},"'3x4'"),i.a.createElement("span",{className:"token punctuation"},"]"),i.a.createElement("span",{className:"token punctuation"},"}")),"\n",i.a.createElement("span",{className:"token punctuation"},"/>")),"\n")))),i.a.createElement("div",{className:"example render-only"},i.a.createElement("div",{className:"run"},i.a.createElement(E.a,{src:N,components:["GridList","GridTile","GridTileIcon","GridTilePrimary","GridTileSecondary","GridTileTitleSupportText","GridTileTitle"]}))))}}]),a}(i.a.Component)}}]);
//# sourceMappingURL=17.632623a2.chunk.js.map