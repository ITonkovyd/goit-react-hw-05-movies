"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[412],{174:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,i,a,c,o,s,u=t(439),l=t(791),p=t(243),h=t(689),d=t(57),f=t.p+"static/media/noimage.bf08049bc30cabfc6be6.png",v=t(168),x=t(87),m=t(444),g=(0,m.ZP)(x.rU)(r||(r=(0,v.Z)(["\n  display: block;\n  max-width: 120px;\n  height: 35px;\n  border: 2px solid black;\n  border-radius: 6px;\n  font-weight: 600;\n  font-size: 24px;\n  margin-bottom: 15px;\n  text-decoration: none;\n  color: black;\n\n  &:hover {\n    cursor: pointer;\n    background-color: #5690a3;\n  }\n"]))),j=m.ZP.div(i||(i=(0,v.Z)(["\n  display: flex;\n"]))),b=m.ZP.div(a||(a=(0,v.Z)(["\n  margin-left: 15px;\n"]))),w=m.ZP.div(c||(c=(0,v.Z)(["\n  margin: 0 15px;\n"]))),y=m.ZP.ul(o||(o=(0,v.Z)(["\n  display: flex;\n"]))),k=(0,m.ZP)(x.rU)(s||(s=(0,v.Z)(["\n  text-decoration: none;\n  color: black;\n  border: 1px solid black;\n  padding: 5px;\n  border-radius: 4px;\n\n  &:last-child {\n    margin-left: 20px;\n  }\n\n  &:hover,\n  & active {\n    background-color: #5690a3;\n  }\n"]))),Z=t(184),U=function(){var n,e,t,r=(0,h.TH)(),i=(0,h.UO)().movieId,a=(0,l.useState)(!1),c=(0,u.Z)(a,2),o=c[0],s=c[1],v=(0,l.useState)(!1),x=(0,u.Z)(v,2),m=x[0],U=x[1],S=(0,l.useState)([]),I=(0,u.Z)(S,2),N=I[0],_=I[1],C=(0,l.useState)(null),J=(0,u.Z)(C,2),P=J[0],G=J[1],L=(0,l.useRef)(null!==(n=null===(e=r.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies");(0,l.useEffect)((function(){(0,d.Hj)(i).then((function(n){_(n)})).catch((function(n){U(n)})).finally((function(){return s(!1)}))}),[i]);var Y=N.name,z=N.title,E=N.original_title,O=N.overview,T=N.genres,M=N.poster_path,R=N.vote_average,W=N.success;if(N){if(o)return(0,Z.jsx)(p.FF,{color:"#5690a3"});if(!1===W)return(0,Z.jsx)("p",{children:"We have no information about this fiml :c"});m&&console.log(m);var A=function(n){G(n)};return(0,Z.jsxs)(w,{children:[(0,Z.jsx)(g,{to:L.current,children:" \u2190 Go back"}),(0,Z.jsxs)(j,{style:{display:"flex"},children:[(0,Z.jsx)("img",{width:"300",src:M?"https://image.tmdb.org/t/p/w300"+M:f,alt:Y||z||E}),(0,Z.jsxs)(b,{children:[(0,Z.jsx)("h1",{children:null!==(t=null!==Y&&void 0!==Y?Y:z)&&void 0!==t?t:E}),R&&0!==R?(0,Z.jsxs)("p",{children:["User Score: ",(10*R).toFixed(2),"%"]}):(0,Z.jsx)("p",{children:"Users have not rated this movie"}),(0,Z.jsx)("h2",{children:"Overview"}),(0,Z.jsx)("p",{children:O}),(0,Z.jsx)("h2",{children:"Genres"}),(0,Z.jsx)("ul",{children:T?T.map((function(n){var e=n.id,t=n.name;return(0,Z.jsx)("li",{children:t},e)})):(0,Z.jsx)("span",{children:"Unavaliable"})})]})]}),(0,Z.jsx)("h3",{children:"Additional information"}),(0,Z.jsxs)(y,{style:{listStyle:"none"},children:[(0,Z.jsx)("li",{children:(0,Z.jsx)(k,{className:"CastLink ".concat("CastLink"===P?"active":"inactive"),onClick:function(){return A("CastLink")},to:"cast",children:"Cast"})}),(0,Z.jsx)("li",{children:(0,Z.jsx)(k,{className:"ReviewsLink ".concat("ReviewsLink"===P?"active":"inactive"),onClick:function(){return A("ReviewsLink")},to:"reviews",children:"Reviews"})})]}),(0,Z.jsx)(l.Suspense,{fallback:(0,Z.jsx)("div",{children:"LOADING..."}),children:(0,Z.jsx)(h.j3,{})})]})}}},57:function(n,e,t){function r(n,e,t,r,i,a,c){try{var o=n[a](c),s=o.value}catch(u){return void t(u)}o.done?e(s):Promise.resolve(s).then(r,i)}function i(n){return function(){var e=this,t=arguments;return new Promise((function(i,a){var c=n.apply(e,t);function o(n){r(c,i,a,o,s,"next",n)}function s(n){r(c,i,a,o,s,"throw",n)}o(void 0)}))}}t.d(e,{Hj:function(){return f},Hq:function(){return h},PI:function(){return g},Bt:function(){return x},Tg:function(){return l}});var a=t(757),c=t.n(a),o={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzAyMjMxNGZlNmNmMjVlZmYyOTBkZDkxYjUxOTAzZiIsInN1YiI6IjY0NmZhMDQyYzVhZGE1MDBkZWU2Njc4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uIxfSgTwNgRYS5UWjwvghZ01EYEFs3x2JVSyeT6FUHE"}};function s(n){return u.apply(this,arguments)}function u(){return(u=i(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch(e,o);case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",r);case 10:throw n.prev=10,n.t0=n.catch(0),new Error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function l(){return p.apply(this,arguments)}function p(){return(p=i(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://api.themoviedb.org/3/trending/all/day?language=en-US",n.abrupt("return",s("https://api.themoviedb.org/3/trending/all/day?language=en-US"));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return d.apply(this,arguments)}function d(){return(d=i(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1"),n.abrupt("return",s(t));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return v.apply(this,arguments)}function v(){return(v=i(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(e,"?language=en-US"),n.abrupt("return",s(t));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=i(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(e,"/reviews?language=en-US&page=1"),n.abrupt("return",s(t));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return j.apply(this,arguments)}function j(){return(j=i(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(e,"/credits?language=en-US"),n.abrupt("return",s(t));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=412.fd8407e1.chunk.js.map