(window.webpackJsonp=window.webpackJsonp||[]).push([["0af5"],{"4l3W":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n("q1tI")),o=i(n("17x9")),l=i(n("sHtH"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){s(e,t,n[t])})}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,y(t).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r.Component),n=t,(o=[{key:"mergeNotificationStyle",value:function(e){return e?f({},l.default.eventType,{color:e,borderColor:e}):l.default.eventType}},{key:"iconStyle",value:function(e){return f({},l.default.materialIcons,e)}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.iconStyle,o=e.icon,i=e.orientation,a=e.iconColor,s=e.style,d=c(e,["title","iconStyle","icon","orientation","iconColor","style"]),p=f({},"right"===i?l.default["event--right"]:l.default["event--left"]);return r.default.createElement("div",{style:f({},l.default.event,{marginBottom:50},s)},r.default.createElement("div",{style:this.mergeNotificationStyle(a)},r.default.createElement("span",{style:this.iconStyle(n)},o)),r.default.createElement("div",u({},d,{style:f({},l.default.blipStyle,p)}),r.default.createElement("div",null,t)),r.default.createElement("div",{style:l.default.eventAfter}))}}])&&d(n.prototype,o),i&&d(n,i),t}();g.propTypes={title:o.default.node.isRequired,icon:o.default.node,iconColor:o.default.string,iconStyle:o.default.object,style:o.default.object,orientation:o.default.string},g.defaultProps={iconStyle:{},style:{}};var h=g;t.default=h},"9wHG":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/experiences",function(){var e=n("KKXz");return{page:e.default||e}}])},KKXz:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),l=n("m/Pd"),i=n.n(l),a=n("vOnD"),u=n("Y9NL"),c=n("b0oO"),f=n("F/tj"),s=n("obyI").a.color,d=a.b.h4.withConfig({displayName:"experiences__CenteredHeader",componentId:"kibeeo-0"})(["text-align:center;margin-bottom:1.25em;"]),p=a.b.ul.withConfig({displayName:"experiences__DetailRow",componentId:"kibeeo-1"})(["li{list-style-type:square;}"]);t.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,null,o.a.createElement("title",null,"Nawin Kim - Experiences")),o.a.createElement(c.a,null),o.a.createElement("section",null,o.a.createElement(d,null,"Experiences"),o.a.createElement(u.Timeline,null,f.a.experiences.map(function(e,t){return o.a.createElement(u.TimelineEvent,{key:t,title:e.rightContent,subtitle:e.title,container:"card",bubbleStyle:{background:"#1d1f21"},titleStyle:{color:"white",fontSize:"0.8rem"},subtitleStyle:{color:"white",fontSize:"0.7rem"},style:{borderRadius:"10px"},cardHeaderStyle:{borderTopRightRadius:"8px",borderTopLeftRadius:"8px",background:s.tertiary},contentStyle:{background:s.quaternary,borderBottomLeftRadius:"8px",borderBottomRightRadius:"8px"}},o.a.createElement(p,null,e.bullets.map(function(e,t){return o.a.createElement("li",{key:t},e)})))}))))}},SlU0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("17x9")),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n("q1tI")),l=i(n("sHtH"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){f(e,t,n[t])})}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var b=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=d(t).call(this,e))||"object"!==a(o)&&"function"!=typeof o?y(r):o).state={showContent:n.props.showContent},n.toggleContent=n.toggleContent.bind(y(y(n))),n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o.Component),n=t,(r=[{key:"componentDidUpdate",value:function(e){this.props.showContent!==e.showContent&&this.state({showContent:this.props.showContent})}},{key:"mergeNotificationStyle",value:function(e,t,n){var r=e?c({},l.default.eventType,{color:e,borderColor:e}):l.default.eventType,o=c({},"right"===n?l.default["eventType--right"]:l.default["eventType--left"]);return c({},r,o,t)}},{key:"mergeContentStyle",value:function(e){var t=this.showAsCard()?l.default.cardBody:l.default.message;return e?c({},t,e):t}},{key:"timeStyle",value:function(){return this.showAsCard()?l.default.time:c({},l.default.time,{color:"#303e49"})}},{key:"showAsCard",value:function(){return"card"===this.props.container}},{key:"containerStyle",value:function(){var e=this.props.style,t=c({},l.default.eventContainer,e);return this.showAsCard()?c({},l.default.card,t):t}},{key:"toggleStyle",value:function(){var e=this.props,t=e.container,n=e.cardHeaderStyle,r=e.collapsible,o="card"===t?c({},l.default.cardTitle,n):{};return r?c({},l.default.toggleEnabled,o):o}},{key:"toggleContent",value:function(){this.setState({showContent:!this.state.showContent})}},{key:"renderChildren",value:function(){var e=this.props,t=e.collapsible,n=e.contentStyle;return t&&this.state.showContent||!t?o.default.createElement("div",{style:this.mergeContentStyle(n)},this.props.children,o.default.createElement("div",{style:l.default.messageAfter})):o.default.createElement("span",{style:{fontWeight:500,fontSize:16,cursor:"pointer"},onClick:this.toggleContent},"…")}},{key:"render",value:function(){var e=this.props,t=e.createdAt,n=e.title,r=e.subtitle,i=e.iconStyle,a=e.bubbleStyle,f=e.buttons,s=e.icon,d=e.iconColor,p=e.titleStyle,y=e.subtitleStyle,b=e.orientation,g=e.collapsible,h=e.onClick,m=e.onIconClick,v=e.className,O=c({},"right"===b?l.default["event--right"]:l.default["event--left"]),w=c({},"left"===b?l.default["actionButtons--right"]:l.default["actionButtons--left"]);return o.default.createElement("div",{style:c({},l.default.event,O)},o.default.createElement("div",{style:this.mergeNotificationStyle(d,a,b)},o.default.createElement("span",{style:c({},l.default.materialIcons,i),onClick:m},s)),o.default.createElement("div",u({style:this.containerStyle()},{onClick:h,className:v}),o.default.createElement("div",{style:l.default.eventContainerBefore}),o.default.createElement("div",{style:this.toggleStyle(),onClick:g&&this.toggleContent},t&&o.default.createElement("div",{style:this.timeStyle()},t),o.default.createElement("div",{style:p},n),r&&o.default.createElement("div",{style:c({},l.default.subtitle,y)},r),o.default.createElement("div",{style:c({},l.default.actionButtons,w)},f)),this.props.children&&this.renderChildren()),o.default.createElement("div",{style:l.default.eventAfter}))}}])&&s(n.prototype,r),i&&s(n,i),t}();b.propTypes={title:r.default.node.isRequired,subtitle:r.default.node,createdAt:r.default.node,children:r.default.node,buttons:r.default.node,container:r.default.string,icon:r.default.node,iconColor:r.default.string,iconStyle:r.default.object,bubbleStyle:r.default.object,orientation:r.default.string,contentStyle:r.default.object,cardHeaderStyle:r.default.object,style:r.default.object,titleStyle:r.default.object,subtitleStyle:r.default.object,collapsible:r.default.bool,showContent:r.default.bool,className:r.default.string,onClick:r.default.func,onIconClick:r.default.func},b.defaultProps={createdAt:void 0,iconStyle:{},bubbleStyle:{},contentStyle:{},cardHeaderStyle:{},style:{},titleStyle:{},subtitleStyle:{},orientation:"left",showContent:!1,className:"",onClick:function(){},onIconClick:function(){}};var g=b;t.default=g},Y9NL:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Timeline",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"TimelineEvent",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"TimelineBlip",{enumerable:!0,get:function(){return l.default}});var r=i(n("qCih")),o=i(n("SlU0")),l=i(n("4l3W"));function i(e){return e&&e.__esModule?e:{default:e}}},qCih:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n("q1tI")),o=i(n("17x9")),l=i(n("sHtH"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){f(e,t,n[t])})}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,y(t).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.orientation,n=void 0===t?"left":t,o=e.children,i=e.lineColor,a=e.lineStyle,f=e.style,d=s(e,["orientation","children","lineColor","lineStyle","style"]),p=r.default.Children.map(o,function(e){return r.default.cloneElement(e,{orientation:n})}),y=c({},"right"===n?l.default["containerBefore--right"]:l.default["containerBefore--left"]),b=c({},y,a);return b=i?c({},b,{background:i}):b,r.default.createElement("div",null,r.default.createElement("section",u({style:c({},l.default.container,f)},d),r.default.createElement("div",{style:c({},l.default.containerBefore,b)}),p,r.default.createElement("div",{style:l.default.containerAfter})))}}])&&d(n.prototype,o),i&&d(n,i),t}();g.propTypes={children:o.default.node.isRequired,orientation:o.default.string,style:o.default.object,lineColor:o.default.string,lineStyle:o.default.object},g.defaultProps={style:{},lineStyle:{}};var h=g;t.default=h},sHtH:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={container:{position:"relative",fontSize:"80%",fontWeight:300,padding:"10px 0",width:"95%",margin:"0 auto"},containerBefore:{content:"",position:"absolute",top:0,height:"100%",width:2,background:"#a0b2b8"},"containerBefore--left":{left:"16px"},"containerBefore--right":{right:"14px"},containerAfter:{content:"",display:"table",clear:"both"},event:{position:"relative",margin:"10px 0"},"event--left":{paddingLeft:45,textAlign:"left"},"event--right":{paddingRight:45,textAlign:"right"},eventAfter:{clear:"both",content:"",display:"table"},eventType:{position:"absolute",top:0,borderRadius:"50%",width:30,height:30,marginLeft:1,background:"#e9f0f5",border:"2px solid #6fba1c",display:"flex"},"eventType--left":{left:0},"eventType--right":{right:0},materialIcons:{display:"flex",width:32,height:32,position:"relative",justifyContent:"center",cursor:"pointer",alignSelf:"center",alignItems:"center"},eventContainer:{position:"relative"},eventContainerBefore:{top:24,left:"100%",borderColor:"transparent",borderLeftColor:"#ffffff"},time:{marginBottom:3},subtitle:{marginTop:2,fontSize:"85%",color:"#777"},message:{width:"98%",backgroundColor:"#ffffff",boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1)",marginTop:"1em",marginBottom:"1em",lineHeight:1.6,padding:"0.5em 1em"},messageAfter:{clear:"both",content:"",display:"table"},actionButtons:{marginTop:-20},"actionButtons--left":{float:"left",textAlign:"left"},"actionButtons--right":{float:"right",textAlign:"right"},card:{boxShadow:"rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px",backgroundColor:"rgb(255, 255, 255)"},cardTitle:{backgroundColor:"#7BB1EA",padding:10,color:"#fff"},cardBody:{backgroundColor:"#ffffff",marginBottom:"1em",lineHeight:1.6,padding:10,minHeight:40},blipStyle:{position:"absolute",top:"50%",marginTop:"9px"},toggleEnabled:{cursor:"pointer"}};t.default=r}},[["9wHG","5d41","9da1"]]]);