"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[681],{681:function(e,t,n){n.r(t);var r=n(439),a=n(689),c=n(791),i=n(713),o=n(184);t.default=function(){var e=(0,a.UO)().movieId,t=(0,c.useState)([]),n=(0,r.Z)(t,2),u=n[0],s=n[1];return(0,c.useEffect)((function(){i.Z.getMovieReviews(e).then((function(e){return s(e)})).catch((function(e){return console.log(e)}))}),[e]),(0,o.jsxs)("div",{children:[u.length>0&&(0,o.jsx)("ul",{className:"actors-gallery",children:u.map((function(e){var t=e.author,n=e.content,r=e.id;return(0,o.jsxs)("li",{children:[(0,o.jsx)("p",{children:t}),(0,o.jsx)("p",{children:n})]},r)}))}),0===u.length&&(0,o.jsx)("p",{children:"We don't have any reviews for this movie"})]})}},713:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(861),a=n(757),c=n.n(a),i=n(243),o=function(e){return e.map((function(e){return{id:e.id,title:e.title,poster_path:e.poster_path}}))},u=function(e){return{original_title:e.original_title,poster_path:e.poster_path,genres:e.genres,vote_average:e.vote_average,overview:e.overview}},s=function(e){return e.map((function(e){return{original_name:e.original_name,character:e.character,profile_path:e.profile_path,credit_id:e.credit_id}}))},p=function(e){return e.map((function(e){return{author:e.author,content:e.content,id:e.id}}))},f="5436fbaf6b3dd7d125e5fbc4adba788b",l="https://api.themoviedb.org/3";function h(){return(h=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(l,"/trending/movie/week?api_key=").concat(f));case 2:return t=e.sent,n=t.data.results,e.abrupt("return",o(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function e(t){var n,r,a,u;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(l,"/search/movie?api_key=").concat(f,"&language=en-US&page=1&query=").concat(t));case 2:return n=e.sent,r=n.data,a=r.results,u=r.total_results,e.abrupt("return",{movies:o(a),totalResults:u});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(l,"/movie/").concat(t,"?api_key=").concat(f,"&append_to_response=videos&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",u(r));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(l,"/movie/").concat(t,"/credits?api_key=").concat(f,"&language=en-US"));case 2:return n=e.sent,r=n.data.cast,e.abrupt("return",s(r));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(l,"/movie/").concat(t,"/reviews?api_key=").concat(f,"&language=en-US"));case 2:return n=e.sent,r=n.data.results,e.abrupt("return",p(r));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m={getTrendMovies:function(){return h.apply(this,arguments)},getMovieById:function(e){return d.apply(this,arguments)},getMovieCredits:function(e){return g.apply(this,arguments)},getMovieReviews:function(e){return _.apply(this,arguments)},getMoviesByQuery:function(e){return v.apply(this,arguments)}},w=m}}]);
//# sourceMappingURL=681.ca98f1fa.chunk.js.map