!function(){function n(n){return u(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||i(n)||o()}function t(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),e.push.apply(e,r)}return e}function e(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?t(Object(a),!0).forEach(function(t){r(n,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(a,t))})}return n}function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function a(n,t){return u(n)||function(n,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var e=[],r=!0,a=!1,o=void 0;try{for(var i,m=n[Symbol.iterator]();!(r=(i=m.next()).done)&&(e.push(i.value),!t||e.length!==t);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==m.return||m.return()}finally{if(a)throw o}}return e}(n,t)||i(n,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(n,t){if(n){if("string"==typeof n)return m(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?m(n,t):void 0}}function m(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function u(n){if(Array.isArray(n))return n}function c(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function P(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[3,63],{"99Un":function(n,t,e){"use strict";e.r(t),e.d(t,"HttpLoaderFactory",function(){return v}),e.d(t,"HomePageModule",function(){return g});var r=e("ofXK"),a=e("3Pt+"),o=e("TEn/"),i=e("tyNb"),m=e("ReVU"),u=e("Gi7S"),s=e("fXoL"),M=e("sYmb"),l=function(n){return[n]};function d(n,t){if(1&n&&(s.Kb(0),s.Mb(1,"ion-item",6),s.Ib(2,"ion-icon",7),s.Mb(3,"ion-label"),s.oc(4),s.Xb(5,"translate"),s.Lb(),s.Lb(),s.Jb()),2&n){var e=t.$implicit;s.xb(1),s.bc("routerDirection","root")("routerLink",s.dc(6,l,e.url)),s.xb(1),s.bc("name",e.icon),s.xb(2),s.pc(s.Yb(5,4,e.title))}}var f,p=((f=function(){function n(t,e,r){c(this,n),this.translate=t,this.cookie=e,this.menu=r,this.appPages=r.appPages}var t,e,r;return t=n,(e=[{key:"ionViewDidEnter",value:function(){this.translate.setDefaultLang("en");var n=this.cookie.get("language");n&&this.translate.use(n)}},{key:"ngOnInit",value:function(){}}])&&P(t.prototype,e),r&&P(t,r),n}()).\u0275fac=function(n){return new(n||f)(s.Hb(M.d),s.Hb(m.a),s.Hb(u.a))},f.\u0275cmp=s.Bb({type:f,selectors:[["app-home"]],decls:25,vars:13,consts:[["slot","start"],["lines","none"],[2,"padding","0"],[1,"welcome-card"],["src","/assets/musicbg2.jpg","alt",""],[4,"ngFor","ngForOf"],[3,"routerDirection","routerLink"],["slot","start","color","medium",3,"name"]],template:function(n,t){1&n&&(s.Mb(0,"ion-header"),s.Mb(1,"ion-toolbar"),s.Mb(2,"ion-buttons",0),s.Ib(3,"ion-menu-button"),s.Lb(),s.Mb(4,"ion-item",1),s.Mb(5,"ion-title",2),s.oc(6),s.Xb(7,"translate"),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(8,"ion-content"),s.Mb(9,"ion-card",3),s.Ib(10,"img",4),s.Mb(11,"ion-card-header"),s.Mb(12,"ion-card-subtitle"),s.oc(13),s.Xb(14,"translate"),s.Lb(),s.Mb(15,"ion-card-title"),s.oc(16),s.Xb(17,"translate"),s.Lb(),s.Lb(),s.Ib(18,"ion-card-content"),s.Lb(),s.Mb(19,"ion-list",1),s.Mb(20,"ion-list-header"),s.Mb(21,"ion-label"),s.oc(22),s.Xb(23,"translate"),s.Lb(),s.Lb(),s.mc(24,d,6,8,"ng-container",5),s.Lb(),s.Lb()),2&n&&(s.xb(6),s.qc(" ",s.Yb(7,5,"home.title")," "),s.xb(7),s.pc(s.Yb(14,7,"home.subtitle")),s.xb(3),s.pc(s.Yb(17,9,"home.title")),s.xb(6),s.pc(s.Yb(23,11,"home.pages")),s.xb(2),s.bc("ngForOf",t.appPages))},directives:[o.q,o.M,o.e,o.y,o.t,o.K,o.l,o.f,o.h,o.i,o.j,o.g,o.v,o.w,o.u,r.h,o.T,i.h,o.r],pipes:[M.c],encapsulation:2}),f),h=e("tk/3"),b=e("mqiu");function v(n){return new b.a(n,"./assets/i18n/",".json")}var y,g=((y=function n(){c(this,n)}).\u0275mod=s.Fb({type:y}),y.\u0275inj=s.Eb({factory:function(n){return new(n||y)},imports:[[r.b,a.a,M.b.forChild({loader:{provide:M.a,useFactory:v,deps:[h.a]}}),o.N,i.i.forChild([{path:"",component:p}])]]}),y)},"HU+/":function(n,t,e){"use strict";e.d(t,"a",function(){return o});var r=e("ofXK"),a=e("fXoL"),o=function(){var n=function n(){c(this,n)};return n.\u0275mod=a.Fb({type:n}),n.\u0275inj=a.Eb({factory:function(t){return new(t||n)},imports:[[r.b]]}),n}()},dy81:function(t,o,i){"use strict";i.d(o,"a",function(){return cn}),i.d(o,"b",function(){return bn});var m={};i.r(m),i.d(m,"accToAlt",function(){return g}),i.d(m,"altToAcc",function(){return y}),i.d(m,"coordToInterval",function(){return L}),i.d(m,"coordToNote",function(){return w}),i.d(m,"decode",function(){return p}),i.d(m,"deprecate",function(){return c}),i.d(m,"distance",function(){return E}),i.d(m,"encode",function(){return d}),i.d(m,"fillStr",function(){return u}),i.d(m,"interval",function(){return T}),i.d(m,"isNamed",function(){return P}),i.d(m,"isPitch",function(){return s}),i.d(m,"note",function(){return A}),i.d(m,"stepToLetter",function(){return v}),i.d(m,"tokenizeInterval",function(){return N}),i.d(m,"tokenizeNote",function(){return I}),i.d(m,"transpose",function(){return k});var u=function(n,t){return Array(Math.abs(t)+1).join(n)};function c(n,t,e){return function(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return console.warn("".concat(n," is deprecated. Use ").concat(t,".")),e.apply(this,a)}}function P(n){return null!==n&&"object"==typeof n&&"string"==typeof n.name}function s(n){return null!==n&&"object"==typeof n&&"number"==typeof n.step&&"number"==typeof n.alt}var M=[0,2,4,-1,1,3,5],l=M.map(function(n){return Math.floor(7*n/12)});function d(n){var t=n.step,e=n.alt,r=n.oct,a=n.dir,o=void 0===a?1:a,i=M[t]+7*e;return void 0===r?[o*i]:[o*i,o*(r-l[t]-4*e)]}var f=[3,0,4,1,5,2,6];function p(n){var t=a(n,3),e=t[0],r=t[1],o=t[2],i=f[function(n){var t=(n+1)%7;return t<0?7+t:t}(e)],m=Math.floor((e+1)/7);return void 0===r?{step:i,alt:m,dir:o}:{step:i,alt:m,oct:r+4*m+l[i],dir:o}}var h={empty:!0,name:"",pc:"",acc:""},b=new Map,v=function(n){return"CDEFGAB".charAt(n)},y=function(n){return n<0?u("b",-n):u("#",n)},g=function(n){return"b"===n[0]?-n.length:n.length};function A(n){var t=b.get(n);if(t)return t;var e="string"==typeof n?function(n){var t=I(n);if(""===t[0]||""!==t[3])return h;var e=t[0],r=t[1],a=t[2],o=(e.charCodeAt(0)+3)%7,i=g(r),m=a.length?+a:void 0,u=d({step:o,alt:i,oct:m}),c=e+r+a,P=e+r,s=void 0===m?((x[o]+i)%12+12)%12-1188:x[o]+i+12*(m+1),M=s>=0&&s<=127?s:null;return{empty:!1,acc:r,alt:i,chroma:(x[o]+i+120)%12,coord:u,freq:void 0===m?null:440*Math.pow(2,(s-69)/12),height:s,letter:e,midi:M,name:c,oct:m,pc:P,step:o}}(n):s(n)?A(function(n){var t=n.step,e=n.alt,r=n.oct,a=v(t);if(!a)return"";var o=a+y(e);return r||0===r?o+r:o}(n)):P(n)?A(n.name):h;return b.set(n,e),e}var j=/^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;function I(n){var t=j.exec(n);return[t[1].toUpperCase(),t[2].replace(/x/g,"##"),t[3],t[4]]}function w(n){return A(p(n))}var x=[0,2,4,5,7,9,11],D={empty:!0,name:"",acc:""},S=new RegExp("^([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})|(AA|A|P|M|m|d|dd)([-+]?\\d+)$");function N(n){var t=S.exec("".concat(n));return null===t?["",""]:t[1]?[t[1],t[2]]:[t[4],t[3]]}var O={};function T(n){return"string"==typeof n?O[n]||(O[n]=function(n){var t=N(n);if(""===t[0])return D;var e=+t[0],r=t[1],a=(Math.abs(e)-1)%7,o="PMMPPMM"[a];if("M"===o&&"P"===r)return D;var i="M"===o?"majorable":"perfectable",m=""+e+r,u=e<0?-1:1,c=8===e||-8===e?e:u*(a+1),P=function(n,t){return"M"===t&&"majorable"===n||"P"===t&&"perfectable"===n?0:"m"===t&&"majorable"===n?-1:/^A+$/.test(t)?t.length:/^d+$/.test(t)?-1*("perfectable"===n?t.length:t.length+1):0}(i,r),s=Math.floor((Math.abs(e)-1)/7);return{empty:!1,name:m,num:e,q:r,step:a,alt:P,dir:u,type:i,simple:c,semitones:u*(V[a]+P+12*s),chroma:(u*(V[a]+P)%12+12)%12,coord:d({step:a,alt:P,oct:s,dir:u}),oct:s}}(n)):s(n)?T((e=(t=n).step,r=t.alt,a=t.oct,o=void 0===a?0:a,(i=t.dir)?(i<0?"-":"")+(e+1+7*o)+function(n,t){return 0===t?"majorable"===n?"M":"P":-1===t&&"majorable"===n?"m":t>0?u("A",t):u("d","perfectable"===n?t:t+1)}("M"==="PMMPPMM"[e]?"majorable":"perfectable",r):"")):P(n)?T(n.name):D;var t,e,r,a,o,i}var V=[0,2,4,5,7,9,11];function L(n){var t=a(n,2),e=t[0],r=t[1],o=void 0===r?0:r;return T(p(7*e+12*o<0?[-e,-o,-1]:[e,o,1]))}function k(n,t){var e=A(n),r=T(t);if(e.empty||r.empty)return"";var a=e.coord,o=r.coord;return w(1===a.length?[a[0]+o[0]]:[a[0]+o[0],a[1]+o[1]]).name}function E(n,t){var e=A(n),r=A(t);if(e.empty||r.empty)return"";var a=e.coord,o=r.coord,i=o[0]-a[0];return L([i,2===a.length&&2===o.length?o[1]-a[1]:-Math.floor(7*i/12)]).name}function C(n,t){var e=t.length,r=(n%e+e)%e;return t.slice(r,e).concat(t.slice(0,r))}var q={empty:!0,name:"",setNum:0,chroma:"000000000000",normalized:"000000000000",intervals:[]},F=function(n){return Number(n).toString(2)},U=function(n){return parseInt(n,2)},z=/^[01]{12}$/;function X(n){return z.test(n)}var $=r({},q.chroma,q);function G(n){var t,e=X(n)?n:"number"==typeof(t=n)&&t>=0&&t<=4095?F(n):Array.isArray(n)?function(n){if(0===n.length)return q.chroma;for(var t,e=[0,0,0,0,0,0,0,0,0,0,0,0],r=0;r<n.length;r++)(t=A(n[r])).empty&&(t=T(n[r])),t.empty||(e[t.chroma]=1);return e.join("")}(n):function(n){return n&&X(n.chroma)}(n)?n.chroma:q.chroma;return $[e]=$[e]||function(n){var t=U(n),e=function(n){var t=n.split("");return t.map(function(n,e){return C(e,t).join("")})}(n).map(U).filter(function(n){return n>=2048}).sort()[0];return{empty:!1,name:"",setNum:t,chroma:n,normalized:F(e),intervals:Y(n)}}(e)}c("Pcset.pcset","Pcset.get",G);var H=["1P","2m","2M","3m","3M","4P","5d","5P","6m","6M","7m","7M"];function Y(n){for(var t=[],e=0;e<12;e++)"1"===n.charAt(e)&&t.push(H[e]);return t}function B(n){var t=G(n).setNum;return function(n){var e=G(n).setNum;return t&&t!==e&&(e|t)===e}}var K=e(e({},q),{},{name:"",quality:"Unknown",intervals:[],aliases:[]}),R=[],J={};function Q(n){return J[n]||K}function W(){return R.slice()}c("ChordType.chordType","ChordType.get",Q),c("ChordType.entries","ChordType.all",W),[["1P 3M 5P","major","M ^ "],["1P 3M 5P 7M","major seventh","maj7 \u0394 ma7 M7 Maj7 ^7"],["1P 3M 5P 7M 9M","major ninth","maj9 \u03949 ^9"],["1P 3M 5P 7M 9M 13M","major thirteenth","maj13 Maj13 ^13"],["1P 3M 5P 6M","sixth","6 add6 add13 M6"],["1P 3M 5P 6M 9M","sixth/ninth","6/9 69 M69"],["1P 3M 6m 7M","major seventh flat sixth","M7b6 ^7b6"],["1P 3M 5P 7M 11A","major seventh sharp eleventh","maj#4 \u0394#4 \u0394#11 M7#11 ^7#11 maj7#11"],["1P 3m 5P","minor","m min -"],["1P 3m 5P 7m","minor seventh","m7 min7 mi7 -7"],["1P 3m 5P 7M","minor/major seventh","m/ma7 m/maj7 mM7 mMaj7 m/M7 -\u03947 m\u0394 -^7"],["1P 3m 5P 6M","minor sixth","m6 -6"],["1P 3m 5P 7m 9M","minor ninth","m9 -9"],["1P 3m 5P 7M 9M","minor/major ninth","mM9 mMaj9 -^9"],["1P 3m 5P 7m 9M 11P","minor eleventh","m11 -11"],["1P 3m 5P 7m 9M 13M","minor thirteenth","m13 -13"],["1P 3m 5d","diminished","dim \xb0 o"],["1P 3m 5d 7d","diminished seventh","dim7 \xb07 o7"],["1P 3m 5d 7m","half-diminished","m7b5 \xf8 -7b5 h7 h"],["1P 3M 5P 7m","dominant seventh","7 dom"],["1P 3M 5P 7m 9M","dominant ninth","9"],["1P 3M 5P 7m 9M 13M","dominant thirteenth","13"],["1P 3M 5P 7m 11A","lydian dominant seventh","7#11 7#4"],["1P 3M 5P 7m 9m","dominant flat ninth","7b9"],["1P 3M 5P 7m 9A","dominant sharp ninth","7#9"],["1P 3M 7m 9m","altered","alt7"],["1P 4P 5P","suspended fourth","sus4 sus"],["1P 2M 5P","suspended second","sus2"],["1P 4P 5P 7m","suspended fourth seventh","7sus4 7sus"],["1P 5P 7m 9M 11P","eleventh","11"],["1P 4P 5P 7m 9m","suspended fourth flat ninth","b9sus phryg 7b9sus 7b9sus4"],["1P 5P","fifth","5"],["1P 3M 5A","augmented","aug + +5 ^#5"],["1P 3m 5A","minor augmented","m#5 -#5 m+"],["1P 3M 5A 7M","augmented seventh","maj7#5 maj7+5 +maj7 ^7#5"],["1P 3M 5P 7M 9M 11A","major sharp eleventh (lydian)","maj9#11 \u03949#11 ^9#11"],["1P 2M 4P 5P","","sus24 sus4add9"],["1P 3M 5A 7M 9M","","maj9#5 Maj9#5"],["1P 3M 5A 7m","","7#5 +7 7+ 7aug aug7"],["1P 3M 5A 7m 9A","","7#5#9 7#9#5 7alt"],["1P 3M 5A 7m 9M","","9#5 9+"],["1P 3M 5A 7m 9M 11A","","9#5#11"],["1P 3M 5A 7m 9m","","7#5b9 7b9#5"],["1P 3M 5A 7m 9m 11A","","7#5b9#11"],["1P 3M 5A 9A","","+add#9"],["1P 3M 5A 9M","","M#5add9 +add9"],["1P 3M 5P 6M 11A","","M6#11 M6b5 6#11 6b5"],["1P 3M 5P 6M 7M 9M","","M7add13"],["1P 3M 5P 6M 9M 11A","","69#11"],["1P 3m 5P 6M 9M","","m69 -69"],["1P 3M 5P 6m 7m","","7b6"],["1P 3M 5P 7M 9A 11A","","maj7#9#11"],["1P 3M 5P 7M 9M 11A 13M","","M13#11 maj13#11 M13+4 M13#4"],["1P 3M 5P 7M 9m","","M7b9"],["1P 3M 5P 7m 11A 13m","","7#11b13 7b5b13"],["1P 3M 5P 7m 13M","","7add6 67 7add13"],["1P 3M 5P 7m 9A 11A","","7#9#11 7b5#9 7#9b5"],["1P 3M 5P 7m 9A 11A 13M","","13#9#11"],["1P 3M 5P 7m 9A 11A 13m","","7#9#11b13"],["1P 3M 5P 7m 9A 13M","","13#9"],["1P 3M 5P 7m 9A 13m","","7#9b13"],["1P 3M 5P 7m 9M 11A","","9#11 9+4 9#4"],["1P 3M 5P 7m 9M 11A 13M","","13#11 13+4 13#4"],["1P 3M 5P 7m 9M 11A 13m","","9#11b13 9b5b13"],["1P 3M 5P 7m 9m 11A","","7b9#11 7b5b9 7b9b5"],["1P 3M 5P 7m 9m 11A 13M","","13b9#11"],["1P 3M 5P 7m 9m 11A 13m","","7b9b13#11 7b9#11b13 7b5b9b13"],["1P 3M 5P 7m 9m 13M","","13b9"],["1P 3M 5P 7m 9m 13m","","7b9b13"],["1P 3M 5P 7m 9m 9A","","7b9#9"],["1P 3M 5P 9M","","Madd9 2 add9 add2"],["1P 3M 5P 9m","","Maddb9"],["1P 3M 5d","","Mb5"],["1P 3M 5d 6M 7m 9M","","13b5"],["1P 3M 5d 7M","","M7b5"],["1P 3M 5d 7M 9M","","M9b5"],["1P 3M 5d 7m","","7b5"],["1P 3M 5d 7m 9M","","9b5"],["1P 3M 7m","","7no5"],["1P 3M 7m 13m","","7b13"],["1P 3M 7m 9M","","9no5"],["1P 3M 7m 9M 13M","","13no5"],["1P 3M 7m 9M 13m","","9b13"],["1P 3m 4P 5P","","madd4"],["1P 3m 5P 6m 7M","","mMaj7b6"],["1P 3m 5P 6m 7M 9M","","mMaj9b6"],["1P 3m 5P 7m 11P","","m7add11 m7add4"],["1P 3m 5P 9M","","madd9"],["1P 3m 5d 6M 7M","","o7M7"],["1P 3m 5d 7M","","oM7"],["1P 3m 6m 7M","","mb6M7"],["1P 3m 6m 7m","","m7#5"],["1P 3m 6m 7m 9M","","m9#5"],["1P 3m 5A 7m 9M 11P","","m11A"],["1P 3m 6m 9m","","mb6b9"],["1P 2M 3m 5d 7m","","m9b5"],["1P 4P 5A 7M","","M7#5sus4"],["1P 4P 5A 7M 9M","","M9#5sus4"],["1P 4P 5A 7m","","7#5sus4"],["1P 4P 5P 7M","","M7sus4"],["1P 4P 5P 7M 9M","","M9sus4"],["1P 4P 5P 7m 9M","","9sus4 9sus"],["1P 4P 5P 7m 9M 13M","","13sus4 13sus"],["1P 4P 5P 7m 9m 13m","","7sus4b9b13 7b9b13sus4"],["1P 4P 7m 10m","","4 quartal"],["1P 5P 7m 9m 11P","","11b9"]].forEach(function(n){var t=a(n,3),r=t[0],o=t[1],i=t[2];return function(n,t,r){var a=function(n){var t=function(t){return-1!==n.indexOf(t)};return t("5A")?"Augmented":t("3M")?"Major":t("5d")?"Diminished":t("3m")?"Minor":"Unknown"}(n),o=e(e({},G(n)),{},{name:r||"",quality:a,intervals:n,aliases:t});R.push(o),o.name&&(J[o.name]=o),J[o.setNum]=o,J[o.chroma]=o,o.aliases.forEach(function(n){return function(n,t){J[t]=n}(o,n)})}(r.split(" "),i.split(" "),o)}),R.sort(function(n,t){return n.setNum-t.setNum});var Z=e(e({},q),{},{intervals:[],aliases:[]}),_=[],nn={};function tn(n){return nn[n]||Z}function en(){return _.slice()}c("ScaleDictionary.scaleType","ScaleType.get",tn),c("ScaleDictionary.entries","ScaleType.all",en),[["1P 2M 3M 5P 6M","major pentatonic","pentatonic"],["1P 3M 4P 5P 7M","ionian pentatonic"],["1P 3M 4P 5P 7m","mixolydian pentatonic","indian"],["1P 2M 4P 5P 6M","ritusen"],["1P 2M 4P 5P 7m","egyptian"],["1P 3M 4P 5d 7m","neopolitan major pentatonic"],["1P 3m 4P 5P 6m","vietnamese 1"],["1P 2m 3m 5P 6m","pelog"],["1P 2m 4P 5P 6m","kumoijoshi"],["1P 2M 3m 5P 6m","hirajoshi"],["1P 2m 4P 5d 7m","iwato"],["1P 2m 4P 5P 7m","in-sen"],["1P 3M 4A 5P 7M","lydian pentatonic","chinese"],["1P 3m 4P 6m 7m","malkos raga"],["1P 3m 4P 5d 7m","locrian pentatonic","minor seven flat five pentatonic"],["1P 3m 4P 5P 7m","minor pentatonic","vietnamese 2"],["1P 3m 4P 5P 6M","minor six pentatonic"],["1P 2M 3m 5P 6M","flat three pentatonic","kumoi"],["1P 2M 3M 5P 6m","flat six pentatonic"],["1P 2m 3M 5P 6M","scriabin"],["1P 3M 5d 6m 7m","whole tone pentatonic"],["1P 3M 4A 5A 7M","lydian #5P pentatonic"],["1P 3M 4A 5P 7m","lydian dominant pentatonic"],["1P 3m 4P 5P 7M","minor #7M pentatonic"],["1P 3m 4d 5d 7m","super locrian pentatonic"],["1P 2M 3m 4P 5P 7M","minor hexatonic"],["1P 2A 3M 5P 5A 7M","augmented"],["1P 2M 3m 3M 5P 6M","major blues"],["1P 2M 4P 5P 6M 7m","piongio"],["1P 2m 3M 4A 6M 7m","prometheus neopolitan"],["1P 2M 3M 4A 6M 7m","prometheus"],["1P 2m 3M 5d 6m 7m","mystery #1"],["1P 2m 3M 4P 5A 6M","six tone symmetric"],["1P 2M 3M 4A 5A 7m","whole tone","messiaen's mode #1"],["1P 2m 4P 4A 5P 7M","messiaen's mode #5"],["1P 3m 4P 5d 5P 7m","minor blues","blues"],["1P 2M 3M 4P 5d 6m 7m","locrian major","arabian"],["1P 2m 3M 4A 5P 6m 7M","double harmonic lydian"],["1P 2M 3m 4P 5P 6m 7M","harmonic minor"],["1P 2m 3m 4d 5d 6m 7m","altered","super locrian","diminished whole tone","pomeroy"],["1P 2M 3m 4P 5d 6m 7m","locrian #2","half-diminished","aeolian b5"],["1P 2M 3M 4P 5P 6m 7m","mixolydian b6","melodic minor fifth mode","hindu"],["1P 2M 3M 4A 5P 6M 7m","lydian dominant","lydian b7","overtone"],["1P 2M 3M 4A 5P 6M 7M","lydian"],["1P 2M 3M 4A 5A 6M 7M","lydian augmented"],["1P 2m 3m 4P 5P 6M 7m","dorian b2","phrygian #6","melodic minor second mode"],["1P 2M 3m 4P 5P 6M 7M","melodic minor"],["1P 2m 3m 4P 5d 6m 7m","locrian"],["1P 2m 3m 4d 5d 6m 7d","ultralocrian","superlocrian bb7","\xb7superlocrian diminished"],["1P 2m 3m 4P 5d 6M 7m","locrian 6","locrian natural 6","locrian sharp 6"],["1P 2A 3M 4P 5P 5A 7M","augmented heptatonic"],["1P 2M 3m 5d 5P 6M 7m","romanian minor"],["1P 2M 3m 4A 5P 6M 7m","dorian #4"],["1P 2M 3m 4A 5P 6M 7M","lydian diminished"],["1P 2m 3m 4P 5P 6m 7m","phrygian"],["1P 2M 3M 4A 5A 7m 7M","leading whole tone"],["1P 2M 3M 4A 5P 6m 7m","lydian minor"],["1P 2m 3M 4P 5P 6m 7m","phrygian dominant","spanish","phrygian major"],["1P 2m 3m 4P 5P 6m 7M","balinese"],["1P 2m 3m 4P 5P 6M 7M","neopolitan major"],["1P 2M 3m 4P 5P 6m 7m","aeolian","minor"],["1P 2M 3M 4P 5P 6m 7M","harmonic major"],["1P 2m 3M 4P 5P 6m 7M","double harmonic major","gypsy"],["1P 2M 3m 4P 5P 6M 7m","dorian"],["1P 2M 3m 4A 5P 6m 7M","hungarian minor"],["1P 2A 3M 4A 5P 6M 7m","hungarian major"],["1P 2m 3M 4P 5d 6M 7m","oriental"],["1P 2m 3m 3M 4A 5P 7m","flamenco"],["1P 2m 3m 4A 5P 6m 7M","todi raga"],["1P 2M 3M 4P 5P 6M 7m","mixolydian","dominant"],["1P 2m 3M 4P 5d 6m 7M","persian"],["1P 2M 3M 4P 5P 6M 7M","major","ionian"],["1P 2m 3M 5d 6m 7m 7M","enigmatic"],["1P 2M 3M 4P 5A 6M 7M","major augmented","major #5","ionian augmented","ionian #5"],["1P 2A 3M 4A 5P 6M 7M","lydian #9"],["1P 2m 2M 4P 4A 5P 6m 7M","messiaen's mode #4"],["1P 2m 3M 4P 4A 5P 6m 7M","purvi raga"],["1P 2m 3m 3M 4P 5P 6m 7m","spanish heptatonic"],["1P 2M 3M 4P 5P 6M 7m 7M","bebop"],["1P 2M 3m 3M 4P 5P 6M 7m","bebop minor"],["1P 2M 3M 4P 5P 5A 6M 7M","bebop major"],["1P 2m 3m 4P 5d 5P 6m 7m","bebop locrian"],["1P 2M 3m 4P 5P 6m 7m 7M","minor bebop"],["1P 2M 3m 4P 5d 6m 6M 7M","diminished","whole-half diminished"],["1P 2M 3M 4P 5d 5P 6M 7M","ichikosucho"],["1P 2M 3m 4P 5P 6m 6M 7M","minor six diminished"],["1P 2m 3m 3M 4A 5P 6M 7m","half-whole diminished","dominant diminished","messiaen's mode #2"],["1P 3m 3M 4P 5P 6M 7m 7M","kafi raga"],["1P 2M 3M 4P 4A 5A 6A 7M","messiaen's mode #6"],["1P 2M 3m 3M 4P 5d 5P 6M 7m","composite blues"],["1P 2M 3m 3M 4A 5P 6m 7m 7M","messiaen's mode #3"],["1P 2m 2M 3m 4P 4A 5P 6m 6M 7M","messiaen's mode #7"],["1P 2m 2M 3m 3M 4P 5d 5P 6m 6M 7m 7M","chromatic"]].forEach(function(t){var r=n(t),a=r[0],o=r[1],i=r.slice(2);return function(n,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=e(e({},G(n)),{},{name:t,intervals:n,aliases:r});return _.push(a),nn[a.name]=a,nn[a.setNum]=a,nn[a.chroma]=a,a.aliases.forEach(function(n){return function(n,t){nn[t]=n}(a,n)}),a}(a.split(" "),o,i)});var rn={empty:!0,name:"",symbol:"",root:"",rootDegree:0,type:"",tonic:null,setNum:NaN,quality:"Unknown",chroma:"",normalized:"",aliases:[],notes:[],intervals:[]},an=/^(6|64|7|9|11|13)$/;function on(n){var t=a(I(n),4),e=t[0],r=t[1],o=t[2],i=t[3];return""===e?["",n]:"A"===e&&"ug"===i?["","aug"]:i||"4"!==o&&"5"!==o?an.test(o)?[e+r,o+i]:[e+r+o,i]:[e+r,o]}function mn(n){if(""===n)return rn;if(Array.isArray(n)&&2===n.length)return un(n[1],n[0]);var t=a(on(n),2),e=t[0],r=un(t[1],e);return r.empty?un(n):r}function un(n,t,r){var a=Q(n),o=A(t||""),i=A(r||"");if(a.empty||t&&o.empty||r&&i.empty)return rn;var m=E(o.pc,i.pc),u=a.intervals.indexOf(m)+1;if(!i.empty&&!u)return rn;for(var c=Array.from(a.intervals),P=1;P<u;P++){var s=c[0][1],M=parseInt(c[0][0],10)+7;c.push("".concat(M).concat(s)),c.shift()}var l=o.empty?[]:c.map(function(n){return k(o,n)});n=-1!==a.aliases.indexOf(n)?n:a.aliases[0];var d="".concat(o.empty?"":o.pc).concat(n).concat(i.empty||u<=1?"":"/"+i.pc),f="".concat(t?o.pc+" ":"").concat(a.name).concat(u>1&&r?" over "+i.pc:"");return e(e({},a),{},{name:f,symbol:d,type:a.name,root:i.name,intervals:c,rootDegree:u,tonic:o.name,notes:l})}var cn={getChord:un,get:mn,detect:function(n){var t=n.map(function(n){return A(n).pc}).filter(function(n){return n});return 0===A.length?[]:function(n,t){var e=n[0],r=A(e).chroma,a=function(n){var t=n.reduce(function(n,t){var e=A(t).chroma;return void 0!==e&&(n[e]=n[e]||A(t).name),n},{});return function(n){return t[n]}}(n),o=function(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=G(n).chroma.split("");return e.map(function(n,r){var a=C(r,e);return t&&"0"===a[0]?null:a.join("")}).filter(function(n){return 0===n||n})}(n,!1),i=[];return o.forEach(function(n,t){W().filter(function(t){return t.chroma===n}).forEach(function(n){var o=n.aliases[0],m=a(t);i.push(t!==r?{weight:.5,name:"".concat(m).concat(o,"/").concat(e)}:{weight:1,name:"".concat(m).concat(o)})})}),i}(t).filter(function(n){return n.weight}).sort(function(n,t){return t.weight-n.weight}).map(function(n){return n.name})},chordScales:function(n){var t=B(mn(n).chroma);return en().filter(function(n){return t(n.chroma)}).map(function(n){return n.name})},extended:function(n){var t=mn(n),e=B(t.chroma);return W().filter(function(n){return e(n.chroma)}).map(function(n){return t.tonic+n.aliases[0]})},reduced:function(n){var t=mn(n),e=function(n){var t=G(n).setNum;return function(n){var e=G(n).setNum;return t&&t!==e&&(e&t)===e}}(t.chroma);return W().filter(function(n){return e(n.chroma)}).map(function(n){return t.tonic+n.aliases[0]})},tokenize:on,transpose:function(n,t){var e=a(on(n),2),r=e[0],o=e[1];return r?k(r,t)+o:n},chord:c("Chord.chord","Chord.get",mn)},Pn=[];[[.125,"dl",["large","duplex longa","maxima","octuple","octuple whole"]],[.25,"l",["long","longa"]],[.5,"d",["double whole","double","breve"]],[1,"w",["whole","semibreve"]],[2,"h",["half","minim"]],[4,"q",["quarter","crotchet"]],[8,"e",["eighth","quaver"]],[16,"s",["sixteenth","semiquaver"]],[32,"t",["thirty-second","demisemiquaver"]],[64,"sf",["sixty-fourth","hemidemisemiquaver"]],[128,"h",["hundred twenty-eighth"]],[256,"th",["two hundred fifty-sixth"]]].forEach(function(n){var t=a(n,3);return function(n,t,e){Pn.push({empty:!1,dots:"",name:"",value:1/n,fraction:n<1?[1/n,1]:[1,n],shorthand:t,names:e})}(t[0],t[1],t[2])});var sn=T,Mn=[1,2,2,3,3,4,5,5,6,6,7,7],ln="P m M m M P d P m M m M".split(" "),dn=E,fn=hn(function(n,t){return[n[0]+t[0],n[1]+t[1]]}),pn=hn(function(n,t){return[n[0]-t[0],n[1]-t[1]]});function hn(n){return function(t,e){var r=T(t).coord,a=T(e).coord;if(r&&a)return L(n(r,a)).name}}var bn={names:function(){return"1P 2M 3M 4P 5P 6m 7m".split(" ")},get:sn,name:function(n){return T(n).name},num:function(n){return T(n).num},semitones:function(n){return T(n).semitones},quality:function(n){return T(n).q},fromSemitones:function(n){var t=n<0?-1:1,e=Math.abs(n),r=e%12,a=Math.floor(e/12);return t*(Mn[r]+7*a)+ln[r]},distance:dn,invert:function(n){var t=T(n);return t.empty?"":T({step:(7-t.step)%7,alt:"perfectable"===t.type?-t.alt:-(t.alt+1),oct:t.oct,dir:t.dir}).name},simplify:function(n){var t=T(n);return t.empty?"":t.simple+t.q},add:fn,addTo:function(n){return function(t){return fn(n,t)}},substract:pn,transposeFifths:function(n,t){var e=sn(n);if(e.empty)return"";var r=a(e.coord,3);return L([r[0]+t,r[1],r[2]]).name}};Math.log(2),Math.log(440),"C C# D D# E F F# G G# A A# B".split(" "),"C Db D Eb E F Gb G Ab A Bb B".split(" ");var vn={empty:!0,name:"",chordType:""},yn={};function gn(n){return"string"==typeof n?yn[n]||(yn[n]=function(n){var t=a(An.exec(n)||["","","",""],4),e=t[0],r=t[1],o=t[2],i=t[3];if(!o)return vn;var m=o.toUpperCase(),u=In.indexOf(m),c=g(r);return{empty:!1,name:e,roman:o,interval:T({step:u,alt:c,dir:1}).name,acc:r,chordType:i,alt:c,step:u,major:o===m,oct:0,dir:1}}(n)):"number"==typeof n?gn(In[n]||""):s(n)?gn(y((t=n).alt)+In[t.step]):P(n)?gn(n.name):vn;var t}c("RomanNumeral.romanNumeral","RomanNumeral.get",gn);var An=/^(#{1,}|b{1,}|x{1,}|)(IV|I{1,3}|VI{0,2}|iv|i{1,3}|vi{0,2})([^IViv]*)$/,jn="I II III IV V VI VII",In=jn.split(" ");jn.toLowerCase().split(" "),Object.freeze([]);var wn=function(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return t.map(function(t,r){return"".concat(n[r]).concat(e).concat(t)})};function xn(n,t,e,r){return function(a){var o=n.map(function(n){return gn(n).interval||""}),i=o.map(function(n){return k(a,n)});return{tonic:a,grades:n,intervals:o,scale:i,chords:wn(i,t),chordsHarmonicFunction:e.slice(),chordScales:wn(i,r," ")}}}xn("I II III IV V VI VII".split(" "),"maj7 m7 m7 maj7 7 m7 m7b5".split(" "),"T SD T SD D T D".split(" "),"major,dorian,phrygian,lydian,mixolydian,minor,locrian".split(",")),xn("I II bIII IV V bVI bVII".split(" "),"m7 m7b5 maj7 m7 m7 maj7 7".split(" "),"T SD T SD D SD SD".split(" "),"minor,locrian,major,dorian,phrygian,lydian,mixolydian".split(",")),xn("I II bIII IV V bVI VII".split(" "),"mMaj7 m7b5 +maj7 m7 7 maj7 o7".split(" "),"T SD T SD D SD D".split(" "),"harmonic minor,locrian 6,major augmented,lydian diminished,phrygian dominant,lydian #9,ultralocrian".split(",")),xn("I II bIII IV V VI VII".split(" "),"m6 m7 +maj7 7 7 m7b5 m7b5".split(" "),"T SD T SD D  ".split(" "),"melodic minor,dorian b2,lydian augmented,lydian dominant,mixolydian b6,locrian #2,altered".split(","));var Dn=[[0,2773,0,"ionian","","Maj7","major"],[1,2902,2,"dorian","m","m7"],[2,3418,4,"phrygian","m","m7"],[3,2741,-1,"lydian","","Maj7"],[4,2774,1,"mixolydian","","7"],[5,2906,3,"aeolian","m","m7","minor"],[6,3434,5,"locrian","dim","m7b5"]],Sn=e(e({},q),{},{name:"",alt:0,modeNum:NaN,triad:"",seventh:"",aliases:[]}),Nn=Dn.map(function(n){var t=a(n,7),e=t[0],r=t[1],o=t[2],i=t[3],m=t[4],u=t[5],c=t[6],P=c?[c]:[],s=Number(r).toString(2);return{empty:!1,intervals:Y(s),modeNum:e,chroma:s,normalized:s,name:i,setNum:r,alt:o,triad:m,seventh:u,aliases:P}}),On={};function Tn(n){return"string"==typeof n?On[n.toLowerCase()]||Sn:n&&n.name?Tn(n.name):Sn}function Vn(n){return function(t,e){var r=Tn(t);if(r.empty)return[];var a=C(r.modeNum,n),o=r.intervals.map(function(n){return k(e,n)});return a.map(function(n,t){return o[t]+n})}}Nn.forEach(function(n){On[n.name]=n,n.aliases.forEach(function(t){On[t]=n})}),c("Mode.mode","Mode.get",Tn),c("Mode.mode","Mode.all",function(){return Nn.slice()}),Vn(Dn.map(function(n){return n[4]})),Vn(Dn.map(function(n){return n[5]}));var Ln={empty:!0,name:"",type:"",tonic:null,setNum:NaN,chroma:"",normalized:"",aliases:[],notes:[],intervals:[]};c("Scale.scale","Scale.get",function(n){var t=Array.isArray(n)?n:function(n){if("string"!=typeof n)return["",""];var t=n.indexOf(" "),e=A(n.substring(0,t));if(e.empty){var r=A(n);return r.empty?["",n]:[r.name,""]}var a=n.substring(e.name.length+1);return[e.name,a.length?a:""]}(n),r=A(t[0]).name,a=tn(t[1]);if(a.empty)return Ln;var o=a.name,i=r?a.intervals.map(function(n){return k(r,n)}):[],m=r?r+" "+o:o;return e(e({},a),{},{name:m,type:o,tonic:r,notes:i})}),new Map}}])}();