(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"5ssx":function(e,t,a){},"6cd6":function(e,t,a){"use strict";a.r(t),a.d(t,"ComponentsPageTemplate",(function(){return b})),a.d(t,"pageQuery",(function(){return h}));a("E5k/");var n=a("q1tI"),r=a.n(n),c=a("As+U"),o=a("KE4F"),l=a("7oih"),i=(a("y7hu"),a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("sc67"),a("4DPX"),a("17x9")),s=a.n(i);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,c=e.size,o=void 0===c?24:c,l=u(e,["color","size"]);return r.a.createElement("svg",m({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.a.createElement("polyline",{points:"6 9 12 15 18 9"}))}));p.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},p.displayName="ChevronDown";var d=p,f=a("N1om"),v=a.n(f);a("R69D");var g=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).handleClick=function(e){return e.target.classList.toggle("active")},t}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this,t=this.props,a=t.items,n=t.className;return r.a.createElement("div",{className:"Accordion "+n},!!a&&a.map((function(t,a){return r.a.createElement("div",{className:"Accordion--item ",key:"accordion-item-"+v()(t.title)+"-"+a,onClick:e.handleClick},r.a.createElement("h2",{className:"flex"},r.a.createElement("span",null,t.title),r.a.createElement(d,null)),r.a.createElement("div",{className:"description"},t.description," ",r.a.createElement("br",null),t.link&&r.a.createElement("div",{href:t.link,className:"button"},t.linkTitle)))})))},n}(r.a.Component);g.defaultProps={items:[],className:""};var E=a("unmI"),y=a("wHH0");a("UXgX");n.Component;var b=function(e){var t=e.title,a=e.subtitle,n=e.featuredImage,l=e.section1,i=e.section2,s=e.accordion,m=(e.body,e.gallery);return r.a.createElement("main",null,r.a.createElement(c.a,{title:t,subtitle:a,backgroundImage:n}),r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement(o.a,{source:l}))),r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"New pieces for sell"),r.a.createElement(E.a,{images:m}))),r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement(o.a,{source:i}))),r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement(g,{items:s}))))},h=(t.default=function(e){var t=e.data.page;return r.a.createElement(l.a,{meta:t.frontmatter.meta||!1,title:t.frontmatter.title||!1},r.a.createElement(b,Object.assign({},t,t.frontmatter,{body:t.html})))},"1727565039")},"As+U":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("5Epl"),o=a("KE4F");a("5ssx");t.a=function(e){var t=e.title,a=e.subtitle,n=e.backgroundImage,l=e.large,i=e.className,s=void 0===i?"":i;return l&&(s+=" PageHeader-large"),r.a.createElement("div",{className:"PageHeader relative "+s},n&&r.a.createElement(c.a,{background:!0,resolutions:"large",src:n,alt:t,size:"cover"}),r.a.createElement("div",{className:"container relative"},r.a.createElement("h1",{className:"PageHeader--Title"},t),a&&r.a.createElement(o.a,{className:"PageHeader--Subtitle",src:a})))}},R69D:function(e,t,a){},UXgX:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-components-page-js-49bd767a08a1ad7a759e.js.map