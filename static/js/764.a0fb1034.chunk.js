"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[764],{764:function(e,t,r){r.r(t);var n=r(439),a=r(791),c=r(689),s=r(87),o=r(596),i=r(713),u=r(184);t.default=function(){var e=(0,c.TH)(),t=(0,s.lr)(),r=(0,n.Z)(t,2),p=r[0],l=r[1],f=(0,a.useState)([]),h=(0,n.Z)(f,2),v=h[0],m=h[1];return(0,a.useEffect)((function(){var e=p.get("query");e&&i.Z.getMoviesByQuery(e).then((function(e){var t=e.movies;if(0===e.totalResults)return o.Am.error("There are no movies on your searchquery"),l({}),void m([]);m(t)})).catch((function(e){return console.log(e)}))}),[p,l]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("form",{className:"search-form",onSubmit:function(e){e.preventDefault();var t=e.currentTarget.searchQuery.value.trim();if(""===t)return o.Am.error("Fill in the search field");t===p.get("query")&&o.Am.success("Movies on your serchquery are already loaded"),l({query:t}),e.currentTarget.reset()},children:[(0,u.jsx)("button",{className:"search-btn",type:"submit",children:"search"}),(0,u.jsx)("input",{className:"search-input",type:"text",name:"searchQuery",autoFocus:!0,placeholder:"Search movies..."})]}),(0,u.jsx)("ul",{className:"movies-gallery",children:v.map((function(t){var r=t.id,n=t.title,a=t.poster_path;return(0,u.jsx)("li",{className:"movies-gallery-item",children:(0,u.jsxs)(s.rU,{className:"movies-gallery-link",to:"/movies/".concat(r),state:{from:e},children:[(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(a),alt:n}),(0,u.jsx)("p",{children:n})]})},r)}))})]})}},713:function(e,t,r){r.d(t,{Z:function(){return _}});var n=r(861),a=r(757),c=r.n(a),s=r(243),o=function(e){return e.map((function(e){return{id:e.id,title:e.title,poster_path:e.poster_path}}))},i=function(e){return{original_title:e.original_title,poster_path:e.poster_path,genres:e.genres,vote_average:e.vote_average,overview:e.overview}},u=function(e){return e.map((function(e){return{original_name:e.original_name,character:e.character,profile_path:e.profile_path,credit_id:e.credit_id}}))},p=function(e){return e.map((function(e){return{author:e.author,content:e.content,id:e.id}}))},l="5436fbaf6b3dd7d125e5fbc4adba788b",f="https://api.themoviedb.org/3";function h(){return(h=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(f,"/trending/movie/week?api_key=").concat(l));case 2:return t=e.sent,r=t.data.results,e.abrupt("return",o(r));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function e(t){var r,n,a,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(f,"/search/movie?api_key=").concat(l,"&language=en-US&page=1&query=").concat(t));case 2:return r=e.sent,n=r.data,a=n.results,i=n.total_results,e.abrupt("return",{movies:o(a),totalResults:i});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(f,"/movie/").concat(t,"?api_key=").concat(l,"&append_to_response=videos&language=en-US"));case 2:return r=e.sent,n=r.data,e.abrupt("return",i(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(f,"/movie/").concat(t,"/credits?api_key=").concat(l,"&language=en-US"));case 2:return r=e.sent,n=r.data.cast,e.abrupt("return",u(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(f,"/movie/").concat(t,"/reviews?api_key=").concat(l,"&language=en-US"));case 2:return r=e.sent,n=r.data.results,e.abrupt("return",p(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y={getTrendMovies:function(){return h.apply(this,arguments)},getMovieById:function(e){return m.apply(this,arguments)},getMovieCredits:function(e){return d.apply(this,arguments)},getMovieReviews:function(e){return g.apply(this,arguments)},getMoviesByQuery:function(e){return v.apply(this,arguments)}},_=y}}]);
//# sourceMappingURL=764.a0fb1034.chunk.js.map