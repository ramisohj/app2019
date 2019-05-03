define("7ba349b2-d1a8-49f4-9eb7-5d138ebcbc3f_0.0.1",["react","react-dom","@microsoft/sp-core-library","@microsoft/sp-webpart-base","App2019WebPartStrings","@microsoft/sp-lodash-subset","@microsoft/sp-http"],function(e,t,n,r,o,i,a){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(t,n){t.exports=e},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=(n.n(r),n(2)),i=(n.n(o),n(3)),a=(n.n(i),n(4)),c=(n.n(a),n(5)),s=(n.n(c),n(6)),l=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.render=function(){var e=r.createElement(s.a,{description:this.properties.description,context:this.context});o.render(e,this.domElement)},t.prototype.onDispose=function(){o.unmountComponentAtNode(this.domElement)},Object.defineProperty(t.prototype,"dataVersion",{get:function(){return i.Version.parse("1.0")},enumerable:!0,configurable:!0}),t.prototype.getPropertyPaneConfiguration=function(){return{pages:[{header:{description:c.PropertyPaneDescription},groups:[{groupName:c.BasicGroupName,groupFields:[Object(a.PropertyPaneTextField)("description",{label:c.DescriptionFieldLabel})]}]}]}},t}(a.BaseClientSideWebPart);t.default=d},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t,n){"use strict";var r=n(0),o=(n.n(r),n(7)),i=n(13),a=(n.n(i),n(14)),c=(n.n(a),this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}()),s=function(e){function t(t){var n=e.call(this,t)||this;return n.state={url:"",title:""},n}return c(t,e),t.prototype._getName=function(){var e=this,t=this.props.context.pageContext.web.absoluteUrl,n=t+"/_api/web?$select=Title";this.setState({url:t}),this.props.context.spHttpClient.get(n,a.SPHttpClient.configurations.v1).then(function(e){return e.json()}).then(function(t){e.setState({title:t.Title})})},t.prototype.componentDidMount=function(){this._getName()},t.prototype.render=function(){return r.createElement("div",{className:o.a.app2019},r.createElement("div",{className:o.a.container},r.createElement("div",{className:o.a.row},r.createElement("div",{className:o.a.column},r.createElement("span",{className:o.a.title},"Welcome to SharePoint!"),r.createElement("p",{className:o.a.subTitle},"Customize SharePoint experiences using Web Parts."),r.createElement("p",{className:o.a.description}," TITTLE PAGE :  ",this.state.title),r.createElement("p",{className:o.a.description}," LINK PAGE :  ",this.state.url),r.createElement("p",{className:o.a.description},Object(i.escape)(this.props.description)),r.createElement("a",{href:"https://aka.ms/spfx",className:o.a.button},r.createElement("span",{className:o.a.label},"Learn more"))))))},t}(r.Component);t.a=s},function(e,t,n){"use strict";n(8);var r={app2019:"app2019_c4044d5d",container:"container_c4044d5d",row:"row_c4044d5d",column:"column_c4044d5d","ms-Grid":"ms-Grid_c4044d5d",title:"title_c4044d5d",subTitle:"subTitle_c4044d5d",description:"description_c4044d5d",button:"button_c4044d5d",label:"label_c4044d5d"};t.a=r},function(e,t,n){var r=n(9),o=n(11);"string"==typeof r&&(r=[[e.i,r]]);for(var i=0;i<r.length;i++)o.loadStyles(r[i][1],!0);r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(10)(!1),t.push([e.i,'.app2019_c4044d5d .container_c4044d5d{max-width:700px;margin:0 auto;box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.app2019_c4044d5d .row_c4044d5d{margin:0 -8px;box-sizing:border-box;color:"[theme:white, default: #ffffff]";background-color:"[theme:themeDark, default: #005a9e]";padding:20px}.app2019_c4044d5d .row_c4044d5d:after,.app2019_c4044d5d .row_c4044d5d:before{display:table;content:"";line-height:0}.app2019_c4044d5d .row_c4044d5d:after{clear:both}.app2019_c4044d5d .column_c4044d5d{position:relative;min-height:1px;padding-left:8px;padding-right:8px;box-sizing:border-box}[dir=ltr] .app2019_c4044d5d .column_c4044d5d{float:left}[dir=rtl] .app2019_c4044d5d .column_c4044d5d{float:right}.app2019_c4044d5d .column_c4044d5d .ms-Grid_c4044d5d{padding:0}@media (min-width:640px){.app2019_c4044d5d .column_c4044d5d{width:83.33333333333334%}}@media (min-width:1024px){.app2019_c4044d5d .column_c4044d5d{width:66.66666666666666%}}@media (min-width:1024px){[dir=ltr] .app2019_c4044d5d .column_c4044d5d{left:16.66667%}[dir=rtl] .app2019_c4044d5d .column_c4044d5d{right:16.66667%}}@media (min-width:640px){[dir=ltr] .app2019_c4044d5d .column_c4044d5d{left:8.33333%}[dir=rtl] .app2019_c4044d5d .column_c4044d5d{right:8.33333%}}.app2019_c4044d5d .title_c4044d5d{font-size:21px;font-weight:100;color:"[theme:white, default: #ffffff]"}.app2019_c4044d5d .description_c4044d5d,.app2019_c4044d5d .subTitle_c4044d5d{font-size:17px;font-weight:300;color:"[theme:white, default: #ffffff]"}.app2019_c4044d5d .button_c4044d5d{text-decoration:none;height:32px;min-width:80px;background-color:"[theme:themePrimary, default: #0078d7]";border-color:"[theme:themePrimary, default: #0078d7]";color:"[theme:white, default: #ffffff]";outline:transparent;position:relative;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;border-width:0;text-align:center;cursor:pointer;display:inline-block;padding:0 16px}.app2019_c4044d5d .button_c4044d5d .label_c4044d5d{font-weight:600;font-size:14px;height:32px;line-height:32px;margin:0 4px;vertical-align:top;display:inline-block}',""])},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){"use strict";(function(e){function n(e){var t=T();e();var n=T();S.perf.duration+=n-t}function r(e,t){void 0===t&&(t=!1),n(function(){var n=Array.isArray(e)?e:h(e);void 0===v&&(v=_());var r=S.runState,o=r.mode,i=r.buffer,a=r.flushTimer;t||1===o?(i.push(n),a||(S.runState.flushTimer=c())):s(n)})}function o(e){S.loadStyles=e}function i(e){S.runState.mode=e}function a(){n(function(){var e=S.runState.buffer.slice();S.runState.buffer=[];var t=[].concat.apply([],e);t.length>0&&s(t)})}function c(){return setTimeout(function(){S.runState.flushTimer=0,a()},0)}function s(e,t){S.loadStyles?S.loadStyles(m(e).styleString,e):v?g(e,t):y(e)}function l(e){S.theme=e,u()}function d(e){void 0===e&&(e=3),3!==e&&2!==e||(p(S.registeredStyles),S.registeredStyles=[]),3!==e&&1!==e||(p(S.registeredThemableStyles),S.registeredThemableStyles=[])}function p(e){e.forEach(function(e){var t=e&&e.styleElement;t&&t.parentElement&&t.parentElement.removeChild(t)})}function u(){if(S.theme){for(var e=[],t=0,n=S.registeredThemableStyles;t<n.length;t++){var r=n[t];e.push(r.themableStyle)}e.length>0&&(d(1),s([].concat.apply([],e)))}}function f(e){return e&&(e=m(h(e)).styleString),e}function m(e){var t=S.theme,n=!1;return{styleString:(e||[]).map(function(e){var r=e.theme;if(r){n=!0;var o=t?t[r]:void 0,i=e.defaultValue||"inherit";return t&&!o&&console,o||i}return e.rawString}).join(""),themable:n}}function h(e){var t=[];if(e){for(var n=0,r=void 0;r=w.exec(e);){var o=r.index;o>n&&t.push({rawString:e.substring(n,o)}),t.push({theme:r[1],defaultValue:r[2]}),n=w.lastIndex}t.push({rawString:e.substring(n)})}return t}function y(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("style"),r=m(e),o=r.styleString,i=r.themable;n.type="text/css",n.appendChild(document.createTextNode(o)),S.perf.count++,t.appendChild(n);var a={styleElement:n,themableStyle:e};i?S.registeredThemableStyles.push(a):S.registeredStyles.push(a)}function g(e,t){var n=document.getElementsByTagName("head")[0],r=S.registeredStyles,o=S.lastStyleElement,i=o?o.styleSheet:void 0,a=i?i.cssText:"",c=r[r.length-1],s=m(e).styleString;(!o||a.length+s.length>E)&&(o=document.createElement("style"),o.type="text/css",t?(n.replaceChild(o,t.styleElement),t.styleElement=o):n.appendChild(o),t||(c={styleElement:o,themableStyle:e},r.push(c))),o.styleSheet.cssText+=f(s),Array.prototype.push.apply(c.themableStyle,e),S.lastStyleElement=o}function _(){var e=!1;if("undefined"!=typeof document){var t=document.createElement("style");t.type="text/css",e=!!t.styleSheet}return e}var b=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e};Object.defineProperty(t,"__esModule",{value:!0});var v,x="undefined"==typeof window?e:window,S=function(){var e=x.__themeState__||{theme:void 0,lastStyleElement:void 0,registeredStyles:[]};return e.runState||(e=b({},e,{perf:{count:0,duration:0},runState:{flushTimer:0,mode:0,buffer:[]}})),e.registeredThemableStyles||(e=b({},e,{registeredThemableStyles:[]})),x.__themeState__=e,e}(),w=/[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g,E=1e4,T=function(){return"undefined"!=typeof performance&&performance.now?performance.now():Date.now()};t.loadStyles=r,t.configureLoadStyles=o,t.configureRunMode=i,t.flush=a,t.loadTheme=l,t.clearStyles=d,t.detokenize=f,t.splitStyles=h}).call(t,n(12))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=i},function(e,t){e.exports=a}])});