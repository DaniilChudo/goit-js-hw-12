import{a as g,S as L,i as E}from"./assets/vendor-BEwOiNz3.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const w="45168431-de79dc5356fbae8131b712894",v="https://pixabay.com/api/",b=15;async function p(s,a){try{return(await g.get(`${v}`,{params:{key:w,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:b}})).data}catch(r){throw console.error("Error fetching images:",r),r}}let l;function f(s){const a=document.querySelector(".gallery");if(s.length===0){i("Sorry, there are no images matching your search query. Please try again!");return}s.forEach(r=>{const o=document.createElement("a");o.classList.add("card"),o.href=r.largeImageURL,o.setAttribute("data-caption",r.tags);const e=document.createElement("img");e.src=r.webformatURL,e.alt=r.tags;const t=document.createElement("div");t.classList.add("card-info");const n=document.createElement("p");n.textContent=`Likes: ${r.likes}`;const u=document.createElement("p");u.textContent=`Views: ${r.views}`;const h=document.createElement("p");h.textContent=`Comments: ${r.comments}`;const m=document.createElement("p");m.textContent=`Downloads: ${r.downloads}`,t.appendChild(n),t.appendChild(u),t.appendChild(h),t.appendChild(m),o.appendChild(e),o.appendChild(t),a.appendChild(o)}),l?l.refresh():l=new L(".gallery a",{captionsData:"data-caption",captionDelay:250})}function i(s){E.error({title:"Error",message:s,position:"topRight"})}const C=15;let d="",y=0,c=1;document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".search-form"),a=document.querySelector(".search-input"),r=document.querySelector(".loader"),o=document.querySelector(".load-more-btn");s.addEventListener("submit",async e=>{if(e.preventDefault(),d=a.value.trim(),!d){i("Please enter a search query.");return}c=1,r.classList.remove("hidden"),o.classList.add("hidden");try{const{hits:t,totalHits:n}=await p(d,c);y=n,f(t),o.classList.remove("hidden"),window.scrollTo({top:0,behavior:"smooth"})}catch{i("An error occurred while fetching images.")}finally{r.classList.add("hidden")}}),o.addEventListener("click",async()=>{if(c*C>=y){i("We're sorry, but you've reached the end of search results."),o.classList.add("hidden");return}r.classList.remove("hidden"),c+=1;try{const{hits:e}=await p(d,c);f(e);const t=document.querySelector(".card");if(t){const n=t.getBoundingClientRect().height;window.scrollBy({top:n*2,behavior:"smooth"})}}catch{i("An error occurred while fetching images.")}finally{r.classList.add("hidden")}})});
//# sourceMappingURL=commonHelpers.js.map