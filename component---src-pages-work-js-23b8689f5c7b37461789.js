(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return u});var o=n(0),r=n.n(o),i=n(153),a=n(152),l=n(156),c=a.b.div.withConfig({displayName:"work__Projects",componentId:"gpa2ih-0"})(["display:flex;flex-flow:row wrap;justify-content:center;"," "," > div{background:rgba(32,32,32,0.1);border-radius:8px;margin:5px;width:250px;padding:10px;> h3{text-align:center;}> img{max-width:100%;margin:2px auto;}}"],"","");t.default=function(e){var t=e.data;return console.log("DATA",t),r.a.createElement(l.a,null,r.a.createElement("h2",null,"Look what I can do"),r.a.createElement("p",null,"Here's some of my work. You can click on the title to read more details about the project or view the source code."),r.a.createElement(c,null,t.allMarkdownRemark.edges.map(function(e){var t=e.node;return r.a.createElement("div",{key:t.id},r.a.createElement("h3",null,r.a.createElement(i.a,{to:t.fields.slug},t.frontmatter.title)),r.a.createElement("img",{src:t.frontmatter.image,alt:t.frontmatter.title}),r.a.createElement("p",null,t.frontmatter.description),r.a.createElement("a",{href:t.frontmatter.sourceCode},"GitHub"))})))};var u="1600803751"},153:function(e,t,n){"use strict";var o=n(0),r=n.n(o),i=n(4),a=n.n(i),l=n(33),c=n.n(l);n.d(t,"a",function(){return c.a});n(154),r.a.createContext({});a.a.object,a.a.string.isRequired,a.a.func,a.a.func},154:function(e,t,n){var o;e.exports=(o=n(155))&&o.default||o},155:function(e,t,n){"use strict";n.r(t);n(34);var o=n(0),r=n.n(o),i=n(4),a=n.n(i),l=n(55),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};u.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},t.default=u},156:function(e,t,n){"use strict";var o=n(74),r=n.n(o),i=n(0),a=n.n(i),l=n(157),c=n(152),u=Object(i.createContext)(null),d=function(e){var t=e.children,n=Object(i.useState)({width:"undefined"!=typeof window?window.innerWidth:1025,height:"undefined"!=typeof window?window.innerHeight:1025}),o=n[0],r=n[1];return Object(i.useEffect)(function(){var e=function(){r({width:"undefined"!=typeof window?window.innerWidth:1025,height:"undefined"!=typeof window?window.innerHeight:1025})};return"undefined"!=typeof window&&window.addEventListener("resize",e),function(){"undefined"!=typeof window&&window.removeEventListener("resize",e)}},[]),a.a.createElement(u.Provider,{value:o},t)},m=n(153),s=Object(c.b)(m.a).withConfig({displayName:"title-link__TitleLink",componentId:"nmrvbb-0"})(["text-decoration:none;text-transform:uppercase;"]),f=function(e){var t=e.to,n=e.children;return a.a.createElement("h1",null,a.a.createElement(s,{to:t,activeStyle:{color:"#2dd5c9"}},n))},h=(n(34),function(e){var t=e.to,n=e.children,o=e.activeStyle;return a.a.createElement(m.a,{to:t,activeStyle:o,activeClassName:"active-link",partiallyActive:!0},n)}),p=a.a.forwardRef(function(e,t){var n=e.routes,o=e.activeStyle,i=r()(e,["routes","activeStyle"]);return a.a.createElement("nav",Object.assign({ref:t},i),a.a.createElement("ul",null,n.map(function(e,t){return a.a.createElement("li",{key:t},a.a.createElement(h,{to:"/"+e,activeStyle:o},e))})))}),g=c.b.div.withConfig({displayName:"mobile-header__HeaderTopBar",componentId:"sc-15s53wn-0"})(["align-items:center;background:",";color:",";display:flex;flex-flow:row nowrap;height:3em;justify-content:space-between;position:fixed;width:100%;z-index:998;> h1{padding-left:1.5em;transition:color 0.2s ease-in-out;&:hover{color:",";}}> button{background:transparent;border:0;color:inherit;cursor:pointer;display:inline-block;font:inherit;height:100%;margin:0;outline:0;padding:0 1.5em 0 0;text-transform:uppercase;vertical-align:baseline;width:auto;}"],function(e){return e.theme.primaryColor},function(e){return e.theme.secondaryColor},function(e){return e.theme.actionColor}),w=c.b.header.withConfig({displayName:"mobile-header__Header",componentId:"sc-15s53wn-1"})(["margin-bottom:3em;> nav{background-color:rgba(32,32,32,0.9);color:",";display:flex;position:fixed;width:100%;z-index:997;> ul{display:inline-block;margin-top:3em;padding:0.5em 0;width:100%;> li{list-style:none;margin:0 0 0.5em;padding:0;text-align:center;&:last-child{margin:0;}> a{display:block;opacity:1;padding:0.5em 1em;text-decoration:none;text-transform:uppercase;transition:background 0.2s ease-in-out,color 0.2s ease-in-out;width:100%;&.active-link{background-color:rgba(45,213,201,0.65);}&:hover{background:",";color:"," !important;}}}}}"],function(e){return e.theme.secondaryColor},function(e){return e.theme.actionColor},function(e){return e.theme.primaryColor}),y={},b=function(e){var t=e.routes,n=Object(i.useState)(!1),o=n[0],r=n[1],l=Object(i.useRef)(),c=function(e){l.current.contains(e.target)||r(!1)},u=(document.addEventListener("click",c),document.removeEventListener("click",c));Object(i.useEffect)(function(){return function(){return u}},[o]);return a.a.createElement(w,null,a.a.createElement(g,null,a.a.createElement(f,{to:"/"},"Billy Bunn"),a.a.createElement("button",{onClick:function(){return r(!o)}},"Menu")),a.a.createElement(p,{activeStyle:y,ref:l,routes:t,style:{display:o?"flex":"none"}}))},x=c.b.header.withConfig({displayName:"desktop-header__DesktopHeader",componentId:"acssiq-0"})(["align-items:center;background:",";color:",";display:flex;flex-flow:row nowrap;height:3em;justify-content:space-between;width:100%;> h1{align-items:center;display:flex;height:100%;justify-content:center;padding:0 1.5em;transition:color 0.2s ease-in-out;&:hover{color:",";}}> nav{flex:1;height:100%;max-width:1240px;padding:0 1.5em 0 0;> ul{align-items:center;display:flex;height:100%;justify-content:space-evenly;> li{display:inline;flex:1;height:100%;text-align:center;> a{align-items:center;display:flex;flex:0 1 auto;height:100%;justify-content:center;text-decoration:none;text-transform:uppercase;transition:color 0s;&:hover{background:",";color:",";font-weight:600;transition:color 0.3s ease-out;}}}}}> span{display:none;}"],function(e){return e.theme.primaryColor},function(e){return e.theme.secondaryColor},function(e){return e.theme.actionColor},function(e){return e.theme.secondaryColor},function(e){return e.theme.primaryColor}),v={background:"#f5f5f5",color:"#2dd5c9",fontWeight:600},E=function(e){var t=e.routes;return a.a.createElement(x,null,a.a.createElement(f,{to:"/"},"Billy Bunn"),a.a.createElement(p,{routes:t,activeStyle:v}))},k=function(){var e=["about","work","contact"];return Object(i.useContext)(u).width<768?a.a.createElement(b,{routes:e}):a.a.createElement(E,{routes:e})},C=c.b.footer.withConfig({displayName:"footer__Footer",componentId:"gs0xs3-0"})(["background:",";display:flex;flex-flow:column nowrap;> ul{display:flex;padding:1rem 0 1rem 0;justify-content:space-evenly;> li{color:",";display:inline;> a{text-decoration:none;transition:color 0.2s ease-in-out;&:hover{color:",";}}}}> p{color:",";font-size:80%;margin-bottom:0.2rem;text-align:center;}"],function(e){return e.theme.primaryColor},function(e){return e.theme.secondaryColor},function(e){return e.theme.actionColor},function(e){return e.theme.secondaryColor}),S=function(){return a.a.createElement(C,null,a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:"https://github.com/billybunn"},"GitHub")),a.a.createElement("li",null,a.a.createElement("a",{href:"https://www.linkedin.com/in/billybunn/"},"LinkedIn")),a.a.createElement("li",null,a.a.createElement("a",{href:"https://twitter.com/billybunn"},"Twitter"))),a.a.createElement("p",null,"© 2019 Billy Bunn"))},F=c.b.div.withConfig({displayName:"layout__Layout",componentId:"sc-1ltfv7w-0"})(["display:flex;flex-flow:column nowrap;flex-grow:1;background:",";color:",";font-family:",";font-size:",";font-weight:",";line-height:",";text-rendering:optimizeLegibility;a,a:visited{color:inherit;text-decoration-color:",";transition:color 0.2s ease-in-out;&:hover{color:",";}}h1{font-size:",";font-weight:",";}> header{flex:0 0 auto;}> main{flex:1 0 auto;max-width:80vw;margin:0 auto;padding:2rem 0;width:100%;h1,h2,h3,h4,h5{font-size:",";font-weight:",";letter-spacing:",";line-height:",";text-transform:",";}p,li{margin-bottom:1em;}}hr{border:0;height:2px;background:#333;background-image:linear-gradient( to right,",","," );}> footer{flex:0 0 auto;}@media all and (max-width:768px){font-size:",";> main{max-width:none;width:calc(304px + (614 - 304) * ((100vw - 320px) / (768 - 320)));}}@media all and (min-width:1024px){font-size:",";> main{max-width:calc(1024px * 0.8);}}"],function(e){return e.theme.secondaryColor},function(e){return e.theme.primaryColor},function(e){return e.theme.fontFamily},function(e){return e.theme.baseFontSize},function(e){return e.theme.baseFontWeight},function(e){return e.theme.baseLineHeight},function(e){return e.theme.actionColor},function(e){return e.theme.actionColor},function(e){return e.theme.titleFontSize},function(e){return e.theme.boldFontWeight},function(e){return e.theme.headingFontSize},function(e){return e.theme.headingFontWeight},function(e){return e.theme.headingLetterSpacing},function(e){return e.theme.baseLineHeight},function(e){return e.theme.headingTextTransform},function(e){return e.theme.actionColor},function(e){return e.theme.secondaryColor},function(e){return e.theme.mobileFontSize},function(e){return e.theme.maxFontSize}),j={textColor:"#202020",backgroundColor:"#f5f5f5",headerBackground:"#202020",headerColor:"#d8d8d8",primaryColor:"#202020",secondaryColor:"#f5f5f5",actionColor:"#2dd5c9",fontFamily:'"Fira Sans", sans-serif',baseFontSize:"2.03vw",mobileFontSize:"1.13em",maxFontSize:"1.3em",baseLineHeight:"1.45",baseFontWeight:"400",boldFontWeight:"600",titleFontSize:"150%",headingFontSize:"109%",headingFontWeight:"600",headingLetterSpacing:"0.09em",headingTextTransform:"uppercase"};t.a=function(e){var t=e.children,n=r()(e,["children"]);return a.a.createElement(d,null,a.a.createElement(c.a,{theme:j},a.a.createElement(F,n,a.a.createElement(l.Helmet,null,a.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Fira+Sans:400,400i,600,600i,900&display=swap",rel:"stylesheet"})),a.a.createElement(k,null),a.a.createElement("main",null,t),a.a.createElement(S,null))))}}}]);
//# sourceMappingURL=component---src-pages-work-js-23b8689f5c7b37461789.js.map