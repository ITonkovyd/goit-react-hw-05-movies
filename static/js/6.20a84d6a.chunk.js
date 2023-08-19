"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[6],{6:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var r,i,a,u=e(439),o=e(791),c=e(243),s=e(689),p=e(87),l=e(57),h=e(168),f=e(444),d=f.ZP.form(r||(r=(0,h.Z)(["\ndisplay: flex;\nalign-items: center;\n"]))),v=f.ZP.input(i||(i=(0,h.Z)(["\nmargin: 20px;\nmargin-right: 0px;\nborder: none;\noutline: 2px solid black;\nborder-radius: 4px;\nheight: 30px;\nwidth: 500px;\nfont-weight: 600;\nfont-size: 24px;\n\n&:focus{\n  border: none;\n  outline: 2px solid orange;\n}\n"]))),g=f.ZP.button(a||(a=(0,h.Z)(["\n  height: 35px; \n  border: 2px solid black;\n  border-radius: 6px;\n  font-weight: 600;\n  font-size: 24px;\n  margin-left: 15px;\n\n  &:hover{\n    cursor: pointer;\n    background-color: orange;\n  }\n"]))),m=e(184),x=function(){var n,t=(0,o.useState)(""),e=(0,u.Z)(t,2),r=e[0],i=e[1],a=(0,o.useState)([]),h=(0,u.Z)(a,2),f=h[0],x=h[1],y=(0,o.useState)(!1),b=(0,u.Z)(y,2),w=b[0],j=b[1],Z=(0,o.useState)(null),k=(0,u.Z)(Z,2),S=k[0],I=k[1],U=(0,s.TH)(),J=(0,p.lr)(),_=(0,u.Z)(J,2),N=_[0],z=_[1],Y=null!==(n=N.get("movie"))&&void 0!==n?n:"",E=function(){(0,l.Hq)(Y).then((function(n){x(n.results)})).catch((function(n){I(n)})).finally((function(){j(!1),i(Y)}))};(0,o.useEffect)((function(){E()}),[]);return S&&console.log(S),(0,m.jsxs)("div",{children:[(0,m.jsxs)(d,{action:"",onSubmit:function(n){if(n.preventDefault(),""===Y)return alert("Input the movie name.");r!==Y&&(j(!0),E())},children:[(0,m.jsx)(v,{placeholder:"Input the movie name here.",type:"text",name:"film",value:Y,onChange:function(n){var t=n.target.value;z(""!==t?{movie:t}:{})}}),(0,m.jsx)(g,{type:"submit",children:"Search"})]}),w?(0,m.jsx)(c.FF,{color:"orange"}):(0,m.jsx)("div",{children:(0,m.jsx)("ul",{children:f.map((function(n){var t=n.id,e=n.name,r=n.title,i=n.original_title;return(0,m.jsx)("li",{children:(0,m.jsx)(p.rU,{to:"".concat(t),state:{from:U},children:e||r||i})},t)}))})})]})}},57:function(n,t,e){function r(n,t,e,r,i,a,u){try{var o=n[a](u),c=o.value}catch(s){return void e(s)}o.done?t(c):Promise.resolve(c).then(r,i)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(i,a){var u=n.apply(t,e);function o(n){r(u,i,a,o,c,"next",n)}function c(n){r(u,i,a,o,c,"throw",n)}o(void 0)}))}}e.d(t,{Hj:function(){return d},Hq:function(){return h},PI:function(){return x},Bt:function(){return g},Tg:function(){return p}});var a=e(757),u=e.n(a),o={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzAyMjMxNGZlNmNmMjVlZmYyOTBkZDkxYjUxOTAzZiIsInN1YiI6IjY0NmZhMDQyYzVhZGE1MDBkZWU2Njc4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uIxfSgTwNgRYS5UWjwvghZ01EYEFs3x2JVSyeT6FUHE"}};function c(n){return s.apply(this,arguments)}function s(){return(s=i(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch(t,o);case 3:return e=n.sent,n.next=6,e.json();case 6:return r=n.sent,n.abrupt("return",r);case 10:throw n.prev=10,n.t0=n.catch(0),new Error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function p(){return l.apply(this,arguments)}function l(){return(l=i(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://api.themoviedb.org/3/trending/all/day?language=en-US",n.abrupt("return",c("https://api.themoviedb.org/3/trending/all/day?language=en-US"));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return f.apply(this,arguments)}function f(){return(f=i(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.themoviedb.org/3/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"),n.abrupt("return",c(e));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return v.apply(this,arguments)}function v(){return(v=i(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US"),n.abrupt("return",c(e));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return m.apply(this,arguments)}function m(){return(m=i(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(t,"/reviews?language=en-US&page=1"),n.abrupt("return",c(e));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return y.apply(this,arguments)}function y(){return(y=i(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(t,"/credits?language=en-US"),n.abrupt("return",c(e));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=6.20a84d6a.chunk.js.map