import{a as p,S as m,i}from"./assets/vendor-C2ySes1p.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const d="55217883-a145003b8f3fe15b3b9351ee8",y="https://pixabay.com/api/";function g(a){return p.get(y,{params:{key:d,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),f=new m(".gallery a",{captionsData:"alt",captionDelay:250});f.refresh();function h(a){const n=a.map(t=>`
      <li class="gallery__item">
        <a href="${t.largeImageURL}">
          <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
        </a>
        <div class="info">
  <p class="info-item">
    <span class="info-title">Likes</span>
    <span class="info-value">${t.likes}</span>
  </p>
  <p class="info-item">
    <span class="info-title">Views</span>
    <span class="info-value">${t.views}</span>
  </p>
  <p class="info-item">
    <span class="info-title">Comments</span>
    <span class="info-value">${t.comments}</span>
  </p>
  <p class="info-item">
    <span class="info-title">Downloads</span>
    <span class="info-value">${t.downloads}</span>
  </p>
</div>
      </li>
    `).join("");c.innerHTML=n,f.refresh()}function L(){c.innerHTML=""}function v(){u.classList.add("active")}function w(){u.classList.remove("active")}const l=document.querySelector(".form");l.addEventListener("submit",async a=>{a.preventDefault();const n=l.querySelector('input[name="search-text"]').value.trim();if(!n){i.warning({message:"Please enter a search term!"});return}L(),v();try{const e=(await g(n)).hits;if(e.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(e)}catch{i.error({message:"Something went wrong. Please try again later!"})}finally{w()}});
//# sourceMappingURL=index.js.map
