import{a as p,S as d,i as n}from"./assets/vendor-BJB9CV5g.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g=s=>p.get("https://pixabay.com/api/",{params:{key:"55193663-01ca752f3a3efdba5a4e579f6",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(i=>i.data),c=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const r=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:a,comments:f,downloads:m})=>`
            <li class="gallery-item">
                <a class="gallery-link" href="${i}">
                    <img class="gallery-image" src="${o}" alt="${e}" />
                </a>
                <div class="info">
                    <p class="info-item"><b>Likes</b> ${t}</p>
                    <p class="info-item"><b>Views</b> ${a}</p>
                    <p class="info-item"><b>Comments</b> ${f}</p>
                    <p class="info-item"><b>Downloads</b> ${m}</p>
                </div>
            </li>`).join("");c.innerHTML=r,h.refresh()}function b(){c.innerHTML=""}function L(){u.classList.add("is-visible")}function l(){u.classList.remove("is-visible")}const v=document.querySelector(".form");v.addEventListener("submit",s=>{s.preventDefault();const r=s.currentTarget.elements["search-text"].value.trim();if(!r){n.warning({message:"Please fill the search field",position:"topRight"});return}b(),L(),g(r).then(o=>{if(l(),o.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}else y(o.hits);s.target.reset()}).catch(o=>{console.log(o),l(),n.error({message:"Something went wrong. Please try again later.",position:"topRight"})})});
//# sourceMappingURL=index.js.map
