"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[681],{681:function(e,t,n){n.r(t);var r=n(439),a=n(689),c=n(791),u=n(207),o=n(184);t.default=function(){var e=(0,a.UO)().movieId,t=(0,c.useState)([]),n=(0,r.Z)(t,2),i=n[0],s=n[1];(0,c.useEffect)((function(){u.Z.getMovieReviews(e).then((function(e){var t=e.data.results;return s(p(t))})).catch((function(e){return console.log(e)}))}),[e]);var p=function(e){return e.map((function(e){return{author:e.author,content:e.content,id:e.id}}))};return(0,o.jsx)("div",{children:i.length>0&&(0,o.jsx)("ul",{className:"actors-gallery",children:i.map((function(e){var t=e.author,n=e.content,r=e.id;return(0,o.jsxs)("li",{children:[(0,o.jsx)("p",{children:t}),(0,o.jsx)("p",{children:n})]},r)}))})||(0,o.jsx)("p",{children:"We don't have any reviews for this movie"})})}},207:function(e,t,n){var r=n(861),a=n(757),c=n.n(a),u=n(243),o="5436fbaf6b3dd7d125e5fbc4adba788b",i="https://api.themoviedb.org/3";function s(){return(s=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/trending/movie/week?api_key=").concat(o));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/movie/").concat(t,"?api_key=").concat(o,"&append_to_response=videos&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/search/movie?api_key=").concat(o,"&language=en-US&page=1&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var l={getTrendMovies:function(){return s.apply(this,arguments)},getMovieById:function(e){return p.apply(this,arguments)},getMovieCredits:function(e){return f.apply(this,arguments)},getMovieReviews:function(e){return v.apply(this,arguments)},getMoviesByQuery:function(e){return h.apply(this,arguments)}};t.Z=l}}]);
//# sourceMappingURL=681.ddbd080e.chunk.js.map