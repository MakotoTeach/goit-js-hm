(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{BbZ8:function(e,n,a){var t=a("mp5j");e.exports=(t.default||t).template({1:function(e,n,a,t,r){e.propertyIsEnumerable;var l,s=null!=n?n:e.nullContext||{},o=e.hooks.helperMissing,i="function",c=e.escapeExpression;return'<li class="gallery__item"><div class="photo-card">\r\n  <a href="'+c(typeof(l=null!=(l=a.largeImageURL||(null!=n?n.largeImageURL:n))?l:o)===i?l.call(s,{name:"largeImageURL",hash:{},data:r}):l)+'">\r\n<img class="gallery__image" src="'+c(typeof(l=null!=(l=a.webformatURL||(null!=n?n.webformatURL:n))?l:o)===i?l.call(s,{name:"webformatURL",hash:{},data:r}):l)+'" alt="'+c(typeof(l=null!=(l=a.tags||(null!=n?n.tags:n))?l:o)===i?l.call(s,{name:"tags",hash:{},data:r}):l)+'" data-href="'+c(typeof(l=null!=(l=a.largeImageURL||(null!=n?n.largeImageURL:n))?l:o)===i?l.call(s,{name:"largeImageURL",hash:{},data:r}):l)+'"/>\r\n  </a>\r\n\r\n  <div class="stats">\r\n    <p class="stats-item">\r\n      <i class="material-icons">thumb_up</i>\r\n     '+c(typeof(l=null!=(l=a.likes||(null!=n?n.likes:n))?l:o)===i?l.call(s,{name:"likes",hash:{},data:r}):l)+'\r\n    </p>\r\n    <p class="stats-item">\r\n      <i class="material-icons">visibility</i>\r\n      '+c(typeof(l=null!=(l=a.views||(null!=n?n.views:n))?l:o)===i?l.call(s,{name:"views",hash:{},data:r}):l)+'\r\n    </p>\r\n    <p class="stats-item">\r\n      <i class="material-icons">comment</i>\r\n      '+c(typeof(l=null!=(l=a.comments||(null!=n?n.comments:n))?l:o)===i?l.call(s,{name:"comments",hash:{},data:r}):l)+'\r\n    </p>\r\n    <p class="stats-item">\r\n      <i class="material-icons">cloud_download</i>\r\n      '+c(typeof(l=null!=(l=a.downloads||(null!=n?n.downloads:n))?l:o)===i?l.call(s,{name:"downloads",hash:{},data:r}):l)+"\r\n    </p>\r\n  </div>\r\n</div>\r\n</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,n,a,t,r){var l;return"\r\n"+(null!=(l=a.each.call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r}))?l:"")},useData:!0})},L1EO:function(e,n,a){},QfWi:function(e,n,a){"use strict";a.r(n);a("JBxO"),a("FdtR");var t={page:1,query:"",fetchImages:function(){var e=this,n="?q="+this.query+"&page="+this.page+"&per_page=12&image_type=photo&key=";return fetch("https://pixabay.com/api/"+n+"14239053-7da15a6cef2814c1860b92e83").then((function(e){return e.json()})).then((function(n){return e.incrementPage(),n.hits}))},get searchQuery(){return this.query},set searchQuery(e){this.query=e},incrementPage:function(){this.page+=1},resetPage:function(){this.page=1}},r=a("BbZ8"),l=a.n(r),s=document.querySelector(".spinner-overlay"),o={show:function(){s.classList.remove("is-hidden")},hide:function(){s.classList.add("is-hidden")}},i=a("dcBu"),c={searchForm:document.querySelector("#search-form"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector('button[data-action="load-more"]')};function u(e){return l()(e)}function h(e){c.gallery.insertAdjacentHTML("beforeend",e)}c.searchForm.addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget.elements.query.value;c.gallery.innerHTML="",t.resetPage(),t.searchQuery=n,o.show(),t.fetchImages().then((function(e){h(u(e)),o.hide()})).catch((function(e){console.warn(e)}))})),c.loadMoreBtn.addEventListener("click",(function(){o.show(),t.fetchImages().then((function(e){h(u(e)),o.hide()})).then((function(){return e=document.querySelector(".gallery__item"),void window.scrollTo({left:0,top:window.scrollY+2*e.clientHeight,behavior:"smooth"});var e}))})),c.gallery.addEventListener("click",(function(e){e.preventDefault(),console.log(e.target.parentNode.href);var n=e.target.parentNode.href;n&&(a=n,i.create('<img width="1400" height="900" src="'+a+'">').show());var a;return}));a("L1EO"),a("PzF0")}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.3b8668a090c92b29fa6f.js.map