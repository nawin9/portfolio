(window.webpackJsonp=window.webpackJsonp||[]).push([["f496"],{"1TCz":function(n,t,e){"use strict";e.r(t);var r=e("ln6h"),a=e.n(r),o=e("O40h"),i=e("0iUn"),u=e("sLSF"),c=e("MI3g"),l=e("a7VT"),s=e("Tit0"),f=e("2Eek"),p=e.n(f),d=e("FbiP"),h=e.n(d);var m=e("q1tI"),b=e.n(m),g=e("8Bbg"),v=e.n(g),y=e("vOnD"),x=e("obyI");function k(){var n,t,e=(n=["\n    *,\n    *:before,\n    *:after {\n        box-sizing: border-box;\n    }\n    html {\n        margin: 0;\n        padding: 0;\n        height: 100%;\n        -webkit-text-size-adjust: 100%;\n        -ms-text-size-adjust: 100%;\n    }\n    body {\n        height: 100%;\n        background-color: #1d1f21;\n        color: #c9cacc;\n        font-weight: 400;\n        font-size: 14px;\n        font-family: 'Quicksand', monospace, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        line-height: 1.725;\n        text-rendering: geometricPrecision;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-font-smoothing: antialiased;\n        margin: 0 auto;\n        max-width: 48rem;\n        padding: 0 2rem;\n\n        @media "," {\n            padding: 0 1rem;\n            margin: 2rem auto;\n        }\n    }\n\n    @font-face {\n        font-family: 'Quicksand';\n        src: url('/static/fonts/Quicksand-Regular.ttf');\n        font-weight: normal;\n        font-display: auto;\n        font-style: normal;\n    }\n\n    @font-face {\n        font-family: 'QuicksandBold';\n        src: url('/static/fonts/Quicksand-Bold.ttf');\n        font-weight: bold;\n        font-display: auto;\n        font-style: normal;\n    }\n\n    @media "," {\n        p {\n            text-align: justify;\n        }\n    }\n\n"],t||(t=n.slice(0)),h()(p()(n,{raw:{value:h()(t)}})));return k=function(){return e},e}e.d(t,"default",function(){return O});var w=x.a.device,P=Object(y.a)(k(),w.mobile,w.mobile),O=function(n){function t(){return Object(i.default)(this,t),Object(c.default)(this,Object(l.default)(t).apply(this,arguments))}return Object(s.default)(t,n),Object(u.default)(t,[{key:"render",value:function(){var n=this.props,t=n.Component,e=n.pageProps;return b.a.createElement(g.Container,null,b.a.createElement(P,null),b.a.createElement(t,e))}}],[{key:"getInitialProps",value:function(){var n=Object(o.default)(a.a.mark(function n(t){var e,r,o;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.Component,r=t.ctx,o={},!e.getInitialProps){n.next=6;break}return n.next=5,e.getInitialProps(r);case 5:o=n.sent;case 6:return n.abrupt("return",{pageProps:o});case 7:case"end":return n.stop()}},n)}));return function(t){return n.apply(this,arguments)}}()}]),t}(v.a)},"2Eek":function(n,t,e){n.exports=e("W7oM")},"4bdI":function(n,t,e){e("Ui4e"),n.exports=e("WEpk").Object.freeze},"8Bbg":function(n,t,e){n.exports=e("B5Ud")},B5Ud:function(n,t,e){"use strict";var r=e("KI45"),a=r(e("eVuF")),o=r(e("UXZV")),i=r(e("/HRN")),u=r(e("WaGi")),c=r(e("ZDA2")),l=r(e("/+P4")),s=r(e("N9n2")),f=function(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t.default=n,t},p=function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(t,"__esModule",{value:!0});var d=f(e("q1tI")),h=p(e("lgD3")),m=e("Bu4q"),b=e("nOHt"),g=function(n){function t(){return(0,i.default)(this,t),(0,c.default)(this,(0,l.default)(t).apply(this,arguments))}return(0,s.default)(t,n),(0,u.default)(t,[{key:"getChildContext",value:function(){return{router:b.makePublicRouterInstance(this.props.router)}}},{key:"componentDidCatch",value:function(n){throw n}},{key:"render",value:function(){var n=this.props,t=n.router,e=n.Component,r=n.pageProps,a=x(t);return d.default.createElement(v,null,d.default.createElement(e,(0,o.default)({},r,{url:a})))}}],[{key:"getInitialProps",value:function(n){var t=n.Component,e=(n.router,n.ctx);try{return a.default.resolve(m.loadGetInitialProps(t,e)).then(function(n){return{pageProps:n}})}catch(r){return a.default.reject(r)}}}]),t}(d.Component);g.childContextTypes={router:h.default.object},t.default=g;var v=function(n){function t(){return(0,i.default)(this,t),(0,c.default)(this,(0,l.default)(t).apply(this,arguments))}return(0,s.default)(t,n),(0,u.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var n=window.location.hash;if(n=!!n&&n.substring(1)){var t=document.getElementById(n);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(d.Component);t.Container=v;var y=m.execOnce(function(){0});function x(n){var t=n.pathname,e=n.asPath,r=n.query;return{get query(){return y(),r},get pathname(){return y(),t},get asPath(){return y(),e},back:function(){y(),n.back()},push:function(t,e){return y(),n.push(t,e)},pushTo:function(t,e){y();var r=e?t:null,a=e||t;return n.push(r,a)},replace:function(t,e){return y(),n.replace(t,e)},replaceTo:function(t,e){y();var r=e?t:null,a=e||t;return n.replace(r,a)}}}t.createUrl=x},FbiP:function(n,t,e){n.exports=e("4bdI")},GcxT:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){var n=e("1TCz");return{page:n.default||n}}])},Ui4e:function(n,t,e){var r=e("93I4"),a=e("6/1s").onFreeze;e("zn7N")("freeze",function(n){return function(t){return n&&r(t)?n(a(t)):t}})},W7oM:function(n,t,e){e("nZgG");var r=e("WEpk").Object;n.exports=function(n,t){return r.defineProperties(n,t)}},nZgG:function(n,t,e){var r=e("Y7ZC");r(r.S+r.F*!e("jmDH"),"Object",{defineProperties:e("fpC5")})},obyI:function(n,t,e){"use strict";var r="325px",a="480px",o="768px",i="1024px",u="1440px",c="2560px";t.a={color:{primary:"#2bbc8a",secondary:"#c9cacc",tertiary:"#2e8b57"},device:{mobileS:"(max-width: ".concat(r,")"),mobile:"(max-width: ".concat(a,")"),tablet:"(min-width: ".concat(o,")"),laptop:"(min-width: ".concat(i,")"),laptopL:"(min-width: ".concat(u,")"),desktop:"(min-width: ".concat(c,")")}}}},[["GcxT","5d41","9da1"]]]);