"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{3387:function(e,n,t){t.r(n),t.d(n,{Cast:function(){return W},default:function(){return Q}});var r,a,c,u,i,s,o=t(5861),p=t(9439),f=t(7757),l=t.n(f),h=t(966),d=t(2791),v=t(7689),g=t(4390),Z=t(168),m=t(6444),x=m.ZP.ul(r||(r=(0,Z.Z)(["\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n"]))),w=m.ZP.li(a||(a=(0,Z.Z)(["\n  display: flex;\n  gap: 10px;\n  align-items: center;\n"]))),b=m.ZP.div(c||(c=(0,Z.Z)(["\n  display: block;\n  border-radius: 10px;\n  overflow: hidden;\n"]))),y=m.ZP.img(u||(u=(0,Z.Z)(["\n  object-fit: cover;\n"]))),j=m.ZP.span(i||(i=(0,Z.Z)(["\n  font-weight: 700;\n"]))),k=m.ZP.span(s||(s=(0,Z.Z)(["\n  font-style: italic;\n  color: #bd7c15;\n"]))),I=t(8092),J=t(184),W=function(){var e=(0,d.useState)(!1),n=(0,p.Z)(e,2),t=n[0],r=n[1],a=(0,d.useState)([]),c=(0,p.Z)(a,2),u=c[0],i=c[1],s=(0,d.useState)(null),f=(0,p.Z)(s,2),Z=f[0],m=f[1],W=(0,v.UO)().movie_id;return(0,d.useEffect)((function(){var e=function(){var e=(0,o.Z)(l().mark((function e(){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(!0),e.next=4,(0,g.IQ)(W);case 4:n=e.sent,i(n),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),m(e.t0.message),console.log(e.t0.message);case 12:return e.prev=12,r(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[W]),(0,J.jsxs)(J.Fragment,{children:[t&&(0,J.jsx)(h.Z,{}),Z&&(0,J.jsx)("p",{children:Z}),!Z&&(null===u||void 0===u?void 0:u.length)>0?(0,J.jsx)(x,{children:u.map((function(e){var n=e.id,t=e.name,r=e.character,a=e.profile_path;return(0,J.jsxs)(w,{children:[(0,J.jsx)(b,{children:(0,J.jsx)(y,{style:{width:"100px"},src:a?"https://image.tmdb.org/t/p/w300/".concat(a):I,alt:t})}),(0,J.jsx)(j,{children:t}),(0,J.jsx)(k,{children:r&&'- "'.concat(r,'"')})]},n)}))}):(0,J.jsx)("p",{children:"We don't have any cast info for this movie"})]})},Q=W},4390:function(e,n,t){t.d(n,{Hg:function(){return s},IQ:function(){return f},Jh:function(){return l},Pg:function(){return p},XT:function(){return o}});var r=t(5861),a=t(7757),c=t.n(a),u=t(1243),i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWZhNzQ0ZDAxNDY4ZGQ0MWZhYzQ0ZWFhODU5ZTgzNCIsInN1YiI6IjY0NzBkZWQyMzM2ZTAxMDBhYWUwZDAwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kj3f9MgwcJwqZWcXrgfWqjiiEMuo7IcJ2XaoXJsAKQw"}},s=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/trending/all/day?language=en-US",i);case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(n,"&include_adult=false&language=en-US&page=1"),i);case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?language=en-US"),i);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?language=en-US"),i);case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?language=en-US&page=1"),i);case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},8092:function(e,n,t){e.exports=t.p+"static/media/poster-placeholder.5ed52dd9ba109c67f160.png"}}]);
//# sourceMappingURL=387.7d0daaca.chunk.js.map