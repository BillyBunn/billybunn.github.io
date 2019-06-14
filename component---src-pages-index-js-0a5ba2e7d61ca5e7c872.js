(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return u});var i=n(0),a=n.n(i),r=n(153),o=n(171),l=n.n(o),s=n(152),c=n(156),d=Object(s.b)(c.a).withConfig({displayName:"pages__IndexLayout",componentId:"i7qdj7-0"})(["> main{display:flex;flex-flow:column nowrap;justify-content:center;margin-bottom:10vw;div{align-items:center;display:flex;flex-flow:row nowrap;margin-bottom:1rem;> div{border-radius:50%;flex:1;}> h1{flex:2;font-size:calc(2.7em + (6 - 2.7) * ((100vw - 320px) / (1024 - 320)));line-height:1.2;margin-left:3rem;text-transform:none;> span{color:#2dd5c9;font-size:110%;text-transform:uppercase;white-space:nowrap;}}@media all and (max-width:768px){flex-flow:column nowrap;> div{flex:1;min-height:30vw;min-width:30vw;}> h1{flex:4;line-height:1;margin-left:1rem;text-align:center;}}}}"]);s.b.div.withConfig({displayName:"pages__TitleCard",componentId:"i7qdj7-1"})([""]);t.default=function(e){return console.log("DATA:",e.data),a.a.createElement(d,null,a.a.createElement("div",null,a.a.createElement(l.a,{fluid:e.data.imageOne.childImageSharp.fluid}),a.a.createElement("h1",null,"Hello, I'm ",a.a.createElement("span",null,"Billy Bunn"))),a.a.createElement("p",null,"I'm a Software Developer who left a career in finance to pursue my passion for code."),a.a.createElement("p",null,"I build front-end and full-stack applications with modern tools and libraries."),a.a.createElement("p",null,"Learn more ",a.a.createElement(r.a,{to:"/about"},"about me"),", see"," ",a.a.createElement(r.a,{to:"/work"},"my work"),", or"," ",a.a.createElement(r.a,{to:"/contact"},"get in touch.")))};var u="4165685372"},153:function(e,t,n){"use strict";var i=n(0),a=n.n(i),r=n(4),o=n.n(r),l=n(33),s=n.n(l);n.d(t,"a",function(){return s.a});n(154),a.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},154:function(e,t,n){var i;e.exports=(i=n(155))&&i.default||i},155:function(e,t,n){"use strict";n.r(t);n(34);var i=n(0),a=n.n(i),r=n(4),o=n.n(r),l=n(55),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return n?a.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},156:function(e,t,n){"use strict";var i=n(74),a=n.n(i),r=n(0),o=n.n(r),l=n(157),s=n(152),c=Object(r.createContext)(null),d=function(e){var t=e.children,n=Object(r.useState)({width:"undefined"!=typeof window?window.innerWidth:1025,height:"undefined"!=typeof window?window.innerHeight:1025}),i=n[0],a=n[1];return Object(r.useEffect)(function(){var e=function(){a({width:"undefined"!=typeof window?window.innerWidth:1025,height:"undefined"!=typeof window?window.innerHeight:1025})};return"undefined"!=typeof window&&window.addEventListener("resize",e),function(){"undefined"!=typeof window&&window.removeEventListener("resize",e)}},[]),o.a.createElement(c.Provider,{value:i},t)},u=n(153),f=Object(s.b)(u.a).withConfig({displayName:"title-link__TitleLink",componentId:"nmrvbb-0"})(["text-decoration:none;text-transform:uppercase;"]),m=function(e){var t=e.to,n=e.children;return o.a.createElement("h1",null,o.a.createElement(f,{to:t,activeStyle:{color:"#2dd5c9"}},n))},h=(n(34),function(e){var t=e.to,n=e.children,i=e.activeStyle;return o.a.createElement(u.a,{to:t,activeStyle:i,activeClassName:"active-link",partiallyActive:!0},n)}),p=o.a.forwardRef(function(e,t){var n=e.routes,i=e.activeStyle,r=a()(e,["routes","activeStyle"]);return o.a.createElement("nav",Object.assign({ref:t},r),o.a.createElement("ul",null,n.map(function(e,t){return o.a.createElement("li",{key:t},o.a.createElement(h,{to:"/"+e,activeStyle:i},e))})))}),g=s.b.div.withConfig({displayName:"mobile-header__HeaderTopBar",componentId:"sc-15s53wn-0"})(["align-items:center;background:",";color:",";display:flex;flex-flow:row nowrap;height:3em;justify-content:space-between;position:fixed;width:100%;z-index:998;> h1{padding-left:1.5em;transition:color 0.2s ease-in-out;&:hover{color:",";}}> button{background:transparent;border:0;color:inherit;cursor:pointer;display:inline-block;font:inherit;height:100%;margin:0;outline:0;padding:0 1.5em 0 0;text-transform:uppercase;vertical-align:baseline;width:auto;}"],function(e){return e.theme.primaryColor},function(e){return e.theme.secondaryColor},function(e){return e.theme.actionColor}),y=s.b.header.withConfig({displayName:"mobile-header__Header",componentId:"sc-15s53wn-1"})(["margin-bottom:3em;> nav{background-color:rgba(32,32,32,0.9);color:",";display:flex;position:fixed;width:100%;z-index:997;> ul{display:inline-block;margin-top:3em;padding:0.5em 0;width:100%;> li{list-style:none;margin:0 0 0.5em;padding:0;text-align:center;&:last-child{margin:0;}> a{display:block;opacity:1;padding:0.5em 1em;text-decoration:none;text-transform:uppercase;transition:background 0.2s ease-in-out,color 0.2s ease-in-out;width:100%;&.active-link{background-color:rgba(45,213,201,0.65);}&:hover{background:",";color:"," !important;}}}}}"],function(e){return e.theme.secondaryColor},function(e){return e.theme.actionColor},function(e){return e.theme.primaryColor}),b={},w=function(e){var t=e.routes,n=Object(r.useState)(!1),i=n[0],a=n[1],l=Object(r.useRef)(),s=function(e){l.current.contains(e.target)||a(!1)};Object(r.useEffect)(function(){return i?document.addEventListener("click",s):document.removeEventListener("click",s),function(){return document.removeEventListener("click",s)}},[i]);return o.a.createElement(y,null,o.a.createElement(g,null,o.a.createElement(m,{to:"/"},"Billy Bunn"),o.a.createElement("button",{onClick:function(){return a(!i)}},"Menu")),o.a.createElement(p,{activeStyle:b,ref:l,routes:t,style:{display:i?"flex":"none"}}))},v=s.b.header.withConfig({displayName:"desktop-header__DesktopHeader",componentId:"acssiq-0"})(["align-items:center;background:",";color:",";display:flex;flex-flow:row nowrap;height:3em;justify-content:space-between;width:100%;> h1{align-items:center;display:flex;height:100%;justify-content:center;padding:0 1.5em;transition:color 0.2s ease-in-out;&:hover{color:",";}}> nav{flex:1;height:100%;max-width:1240px;padding:0 1.5em 0 0;> ul{align-items:center;display:flex;height:100%;justify-content:space-evenly;> li{display:inline;flex:1;height:100%;text-align:center;> a{align-items:center;display:flex;flex:0 1 auto;height:100%;justify-content:center;text-decoration:none;text-transform:uppercase;transition:color 0s;&:hover{background:",";color:",";font-weight:600;transition:color 0.3s ease-out;}}}}}> span{display:none;}"],function(e){return e.theme.primaryColor},function(e){return e.theme.secondaryColor},function(e){return e.theme.actionColor},function(e){return e.theme.secondaryColor},function(e){return e.theme.primaryColor}),x={background:"#f5f5f5",color:"#2dd5c9",fontWeight:600},E=function(e){var t=e.routes;return o.a.createElement(v,null,o.a.createElement(m,{to:"/"},"Billy Bunn"),o.a.createElement(p,{routes:t,activeStyle:x}))},S=function(){var e=["about","work","contact"];return Object(r.useContext)(c).width>768?o.a.createElement(E,{routes:e}):o.a.createElement(w,{routes:e})},C=s.b.footer.withConfig({displayName:"footer__Footer",componentId:"gs0xs3-0"})(["background:",";display:flex;flex-flow:column nowrap;> ul{display:flex;padding:1rem 0 1rem 0;justify-content:space-evenly;> li{color:",";display:inline;> a{text-decoration:none;transition:color 0.2s ease-in-out;&:hover{color:",";}}}}> p{color:",";font-size:80%;margin-bottom:0.2rem;text-align:center;}"],function(e){return e.theme.primaryColor},function(e){return e.theme.secondaryColor},function(e){return e.theme.actionColor},function(e){return e.theme.secondaryColor}),L=function(){return o.a.createElement(C,null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"https://github.com/billybunn"},"GitHub")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.linkedin.com/in/billybunn/"},"LinkedIn")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://twitter.com/billybunn"},"Twitter"))),o.a.createElement("p",null,"© 2019 Billy Bunn"))},k=s.b.div.withConfig({displayName:"layout__Layout",componentId:"sc-1ltfv7w-0"})(["display:flex;flex-flow:column nowrap;flex-grow:1;background:",";color:",";font-family:",";font-size:",";font-weight:",";line-height:",";text-rendering:optimizeLegibility;a,a:visited{color:inherit;text-decoration-color:",";transition:color 0.2s ease-in-out;&:hover{color:",";}}h1{font-size:",";font-weight:",";}> header{flex:0 0 auto;}> main{flex:1 0 auto;max-width:80vw;margin:0 auto;padding:2rem 0;width:100%;h1,h2,h3,h4,h5{font-size:",";font-weight:",";letter-spacing:",";line-height:",";text-transform:",";}p,li{margin-bottom:1em;}}hr{border:0;height:2px;background:#333;background-image:linear-gradient( to right,",","," );}> footer{flex:0 0 auto;}@media all and (max-width:768px){font-size:",";> main{max-width:none;width:calc(304px + (614 - 304) * ((100vw - 320px) / (768 - 320)));}}@media all and (min-width:1024px){font-size:",";> main{max-width:calc(1024px * 0.8);}}"],function(e){return e.theme.secondaryColor},function(e){return e.theme.primaryColor},function(e){return e.theme.fontFamily},function(e){return e.theme.baseFontSize},function(e){return e.theme.baseFontWeight},function(e){return e.theme.baseLineHeight},function(e){return e.theme.actionColor},function(e){return e.theme.actionColor},function(e){return e.theme.titleFontSize},function(e){return e.theme.boldFontWeight},function(e){return e.theme.headingFontSize},function(e){return e.theme.headingFontWeight},function(e){return e.theme.headingLetterSpacing},function(e){return e.theme.baseLineHeight},function(e){return e.theme.headingTextTransform},function(e){return e.theme.actionColor},function(e){return e.theme.secondaryColor},function(e){return e.theme.mobileFontSize},function(e){return e.theme.maxFontSize}),z={textColor:"#202020",backgroundColor:"#f5f5f5",headerBackground:"#202020",headerColor:"#d8d8d8",primaryColor:"#202020",secondaryColor:"#f5f5f5",actionColor:"#2dd5c9",fontFamily:'"Fira Sans", sans-serif',baseFontSize:"2.03vw",mobileFontSize:"1.13em",maxFontSize:"1.3em",baseLineHeight:"1.45",baseFontWeight:"400",boldFontWeight:"600",titleFontSize:"150%",headingFontSize:"109%",headingFontWeight:"600",headingLetterSpacing:"0.09em",headingTextTransform:"uppercase"};t.a=function(e){var t=e.children,n=a()(e,["children"]);return o.a.createElement(d,null,o.a.createElement(s.a,{theme:z},o.a.createElement(k,n,o.a.createElement(l.Helmet,null,o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Fira+Sans:400,400i,600,600i,900&display=swap",rel:"stylesheet"})),o.a.createElement(S,null),o.a.createElement("main",null,t),o.a.createElement(L,null))))}},171:function(e,t,n){"use strict";var i=n(8);t.__esModule=!0,t.default=void 0;var a,r=i(n(7)),o=i(n(35)),l=i(n(74)),s=i(n(76)),c=i(n(0)),d=i(n(4)),u=function(e){var t=(0,s.default)({},e),n=t.resolutions,i=t.sizes,a=t.critical;return n&&(t.fixed=n,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),a&&(t.loading="eager"),t},f=Object.create({}),m=function(e){var t=u(e),n=t.fluid?t.fluid.src:t.fixed.src;return f[n]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,p="undefined"!=typeof window,g=p&&window.IntersectionObserver,y=new WeakMap;var b=function(e,t){var n=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),a);return n&&(n.observe(e),y.set(e,t)),function(){n.unobserve(e),y.delete(e)}},w=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+n+"/>":"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+i+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+l+s+n+a+t+o+r+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},v=c.default.forwardRef(function(e,t){var n=e.sizes,i=e.srcSet,a=e.src,r=e.style,o=e.onLoad,d=e.onError,u=e.loading,f=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return c.default.createElement("img",(0,s.default)({sizes:n,srcSet:i,src:a},f,{onLoad:o,onError:d,ref:t,loading:u,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))});v.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var x=function(e){function t(t){var n;(n=e.call(this,t)||this).seenBefore=p&&m(t),n.addNoScript=!(t.critical&&!t.fadeIn),n.useIOSupport=!h&&g&&!t.critical&&!n.seenBefore;var i=t.critical||p&&(h||!n.useIOSupport);return n.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&t.fadeIn},n.imageRef=c.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,o.default)((0,o.default)(n))),n.handleRef=n.handleRef.bind((0,o.default)((0,o.default)(n))),n}(0,r.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=b(e,function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=u(e),n=t.fluid?t.fluid.src:t.fixed.src,f[n]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=u(this.props),t=e.title,n=e.alt,i=e.className,a=e.style,r=void 0===a?{}:a,o=e.imgStyle,l=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,h=e.fluid,p=e.fixed,g=e.backgroundColor,y=e.durationFadeIn,b=e.Tag,x=e.itemProp,E=e.loading,S=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,s.default)({opacity:S?1:0,transition:C?"opacity "+y+"ms":"none"},l),k="boolean"==typeof g?"lightgray":g,z={transitionDelay:y+"ms"},I=(0,s.default)({opacity:this.state.imgLoaded?0:1},C&&z,l,f),j={title:t,alt:this.state.isVisible?"":n,style:I,className:m};if(h){var O=h;return c.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(O.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/O.aspectRatio+"%"}}),k&&c.default.createElement(b,{title:t,style:(0,s.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&z)}),O.base64&&c.default.createElement(v,(0,s.default)({src:O.base64},j)),O.tracedSVG&&c.default.createElement(v,(0,s.default)({src:O.tracedSVG},j)),this.state.isVisible&&c.default.createElement("picture",null,O.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),c.default.createElement(v,{alt:n,title:t,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:E})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:w((0,s.default)({alt:n,title:t,loading:E},O))}}))}if(p){var R=p,F=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},r);return"inherit"===r.display&&delete F.display,c.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:F,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},k&&c.default.createElement(b,{title:t,style:(0,s.default)({backgroundColor:k,width:R.width,opacity:this.state.imgLoaded?0:1,height:R.height},C&&z)}),R.base64&&c.default.createElement(v,(0,s.default)({src:R.base64},j)),R.tracedSVG&&c.default.createElement(v,(0,s.default)({src:R.tracedSVG},j)),this.state.isVisible&&c.default.createElement("picture",null,R.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),c.default.createElement(v,{alt:n,title:t,width:R.width,height:R.height,sizes:R.sizes,src:R.src,crossOrigin:this.props.crossOrigin,srcSet:R.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:E})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:w((0,s.default)({alt:n,title:t,loading:E},R))}}))}return null},t}(c.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var E=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),S=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});x.propTypes={resolutions:E,sizes:S,fixed:E,fluid:S,fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"])};var C=x;t.default=C}}]);
//# sourceMappingURL=component---src-pages-index-js-0a5ba2e7d61ca5e7c872.js.map