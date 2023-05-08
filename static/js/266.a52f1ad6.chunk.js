"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[266],{266:function(A,t,e){e.r(t);var r=e(439),n=e(791),a=e(689),c=e(87),s=e(713),u=e(634),i=e(184);t.default=function(){var A=(0,a.TH)(),t=(0,n.useState)([]),e=(0,r.Z)(t,2),o=e[0],l=e[1];return(0,n.useEffect)((function(){s.Z.getTrendMovies().then((function(A){return l(A)})).catch((function(A){return console.log(A)}))}),[]),(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{className:"home-title",children:"The most popular of last week"}),(0,i.jsx)("ul",{className:"movies-gallery",children:o.map((function(t){var e=t.id,r=t.title,n=t.poster_path;return(0,i.jsx)("li",{className:"movies-gallery-item",children:(0,i.jsxs)(c.rU,{className:"movies-gallery-link",to:"/movies/".concat(e),state:{from:A},children:[(0,i.jsx)("img",{className:"movies-gallery-img",src:n?"https://image.tmdb.org/t/p/w300".concat(n):u,alt:r}),(0,i.jsx)("p",{children:r})]})},e)}))})]})}},713:function(A,t,e){e.d(t,{Z:function(){return L}});var r=e(861),n=e(757),a=e.n(n),c=e(243),s=function(A){return A.map((function(A){return{id:A.id,title:A.title,poster_path:A.poster_path}}))},u=function(A){return{original_title:A.original_title,poster_path:A.poster_path,genres:A.genres,vote_average:A.vote_average,overview:A.overview}},i=function(A){return A.map((function(A){return{original_name:A.original_name,character:A.character,profile_path:A.profile_path,credit_id:A.credit_id}}))},o=function(A){return A.map((function(A){return{author:A.author,content:A.content,id:A.id}}))},l="5436fbaf6b3dd7d125e5fbc4adba788b",f="https://api.themoviedb.org/3";function p(){return(p=(0,r.Z)(a().mark((function A(){var t,e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.Z.get("".concat(f,"/trending/movie/week?api_key=").concat(l));case 2:return t=A.sent,e=t.data.results,A.abrupt("return",s(e));case 5:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function A(t){var e,r,n,u;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.Z.get("".concat(f,"/search/movie?api_key=").concat(l,"&language=en-US&page=1&query=").concat(t));case 2:return e=A.sent,r=e.data,n=r.results,u=r.total_results,A.abrupt("return",{movies:s(n),totalResults:u});case 7:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function A(t){var e,r;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.Z.get("".concat(f,"/movie/").concat(t,"?api_key=").concat(l,"&append_to_response=videos&language=en-US"));case 2:return e=A.sent,r=e.data,A.abrupt("return",u(r));case 5:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function A(t){var e,r;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.Z.get("".concat(f,"/movie/").concat(t,"/credits?api_key=").concat(l,"&language=en-US"));case 2:return e=A.sent,r=e.data.cast,A.abrupt("return",i(r));case 5:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function b(){return(b=(0,r.Z)(a().mark((function A(t){var e,r;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.Z.get("".concat(f,"/movie/").concat(t,"/reviews?api_key=").concat(l,"&language=en-US"));case 2:return e=A.sent,r=e.data.results,A.abrupt("return",o(r));case 5:case"end":return A.stop()}}),A)})))).apply(this,arguments)}var y={getTrendMovies:function(){return p.apply(this,arguments)},getMovieById:function(A){return d.apply(this,arguments)},getMovieCredits:function(A){return m.apply(this,arguments)},getMovieReviews:function(A){return b.apply(this,arguments)},getMoviesByQuery:function(A){return v.apply(this,arguments)}},L=y},634:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=266.a52f1ad6.chunk.js.map