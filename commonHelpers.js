import{a as h,i as y}from"./assets/vendor-1c96f17f.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function c(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(s){if(s.ep)return;s.ep=!0;const t=c(s);fetch(s.href,t)}})();h.defaults.baseURL="https://portfolio-js.b.goit.study/api";y.settings({position:"center",transitionIn:"bounceInLeft",transitionOut:"fadeOutLeft",timeout:3e3});const o=document.querySelector(".contacts-email"),j=document.querySelector(".form"),m=document.querySelector(".invalid-email"),g=document.querySelector(".invalid-text"),n=document.querySelector(".contacts-message"),x=document.querySelector(".modal-window"),f=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,w=document.querySelector(".modal-header"),k=document.querySelector(".modal-text"),S=function(){return f.test(o.value)},E=function(e){e.preventDefault();const i=e.target.user_email.value.trim(),c=e.target.user_message.value.trim();if(S()){if(c.length<10){g.classList.add("invalid");return}}else{o.classList.add("invalid"),m.classList.add("invalid");return}o.classList.remove("valid"),n.classList.remove("valid"),o.classList.remove("invalid"),m.classList.remove("invalid"),g.classList.remove("invalid"),h.post("/requests",{email:i,comment:c||"I`m interested in cooperation!"}).then(r=>{x.classList.remove("is-hidden"),w.innerHTML=`${r.data.title}`,k.innerHTML=`${r.data.message}`,j.reset()}).catch(r=>{y.error({title:r.code,message:r.message})})};n.addEventListener("input",e=>{if(e.target.value.trim().length<10){n.classList.remove("valid");return}n.classList.remove("invalid"),g.classList.remove("invalid"),n.classList.add("valid")});o.addEventListener("input",e=>{if(!f.test(e.target.value)){o.classList.remove("valid");return}o.classList.add("valid"),o.classList.remove("invalid"),m.classList.remove("invalid")});j.addEventListener("submit",E);const d=document.querySelector(".modal-window"),q=document.querySelector(".close");q.addEventListener("click",()=>{d.classList.add("is-hidden")});window.addEventListener("click",e=>{e.target===d&&d.classList.add("is-hidden")});window.addEventListener("keydown",e=>{e.key==="Escape"&&d.classList.add("is-hidden")});(()=>{const e=document.querySelector(".js-menu-container"),i=document.querySelector(".js-open-menu"),c=document.querySelectorAll('a[href^="#"]'),r=()=>{const t=i.getAttribute("aria-expanded")==="true"||!1;i.setAttribute("aria-expanded",!t),i.classList.toggle("burger-active"),e.classList.toggle("is-open"),document.body.classList.toggle("modal-open")};i.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(e.classList.remove("is-open"),i.setAttribute("aria-expanded",!1))});for(let t of c)t.addEventListener("click",function(a){a.preventDefault();const b=t.getAttribute("href");document.querySelector(b).scrollIntoView({behavior:"smooth",block:"start"})});document.querySelectorAll(".menu-box-link").forEach(t=>{t.addEventListener("click",r)})})();const J="/tech-titans/assets/chego-2x-72392c33.jpg",u=[{img:{src:J,srcset:"/img/my-projects/wallet.jpg 1x, /img/my-projects/wallet-2x.jpg 2x",alt:"wallet webservice"},stack:"React, JavaScript, Node JS, Git",title:"wallet webservice",link:"https://github.com/Fovardell/tech-titans"},{img:{src:"/img/my-projects/green.jpg",srcset:"/img/my-projects/green.jpg 1x, /img/my-projects/green-2x.jpg 2x",alt:"green harvest webservice"},stack:"React, JavaScript, Node JS, Git",title:"green harvest webservice",link:"https://github.com/Fovardell/tech-titans"},{img:{src:"/img/my-projects/english.jpg",srcset:"/img/my-projects/english.jpg 1x, /img/my-projects/english-2x.jpg 2x",alt:"English excellence webservice"},stack:"React, JavaScript, Node JS, Git",title:"English excellence webservice",link:"https://github.com/Fovardell/tech-titans"},{img:{src:"/img/my-projects/power.jpg",srcset:"/img/my-projects/power.jpg 1x, /img/my-projects/power-2x.jpg 2x",alt:"power pulse webservice"},stack:"React, JavaScript, Node JS, Git",title:"power pulse webservice",link:"https://github.com/Fovardell/tech-titans"},{img:{src:"/img/my-projects/mimino.jpg",srcset:"/img/my-projects/mimino.jpg 1x, /img/my-projects/mimino-2x.jpg 2x",alt:"mimino website"},stack:"React, JavaScript, Node JS, Git",title:"mimino website",link:"https://github.com/Fovardell/tech-titans"},{img:{src:"/img/my-projects/vyshyvanka.jpg",srcset:"/img/my-projects/vyshyvanka.jpg 1x, /img/my-projects/vyshyvanka-2x.jpg 2x",alt:"vyshyvanka vibes Landing Page"},stack:"React, JavaScript, Node JS, Git",title:"vyshyvanka vibes Landing Page",link:"https://github.com/Fovardell/tech-titans"},{img:{src:"/img/my-projects/chego.jpg",srcset:"/img/my-projects/chego.jpg 1x, /img/my-projects/chego-2x.jpg 2x",alt:"chego jewelry website"},stack:"React, JavaScript, Node JS, Git",title:"chego jewelry website",link:"https://github.com/Fovardell/tech-titans"},{img:{src:"/img/my-projects/energy.jpg",srcset:"/img/my-projects/energy.jpg 1x, /img/my-projects/energy-2x.jpg 2x",alt:"energy flow webservice"},stack:"React, JavaScript, Node JS, Git",title:"energy flow webservice",link:"https://github.com/Fovardell/tech-titans"},{img:{src:"/img/my-projects/fruit.jpg",srcset:"/img/my-projects/fruit.jpg 1x, /img/my-projects/fruit-2x.jpg 2x",alt:"fruitbox online store"},stack:"React, JavaScript, Node JS, Git",title:"fruitbox online store",link:"https://github.com/Fovardell/tech-titans"},{img:{src:"/img/my-projects/starlight.jpg",srcset:"/img/my-projects/starlight.jpg 1x, /img/my-projects/starlight-2x.jpg 2x",alt:"starlight studio landing page"},stack:"React, JavaScript, Node JS, Git",title:"starlight studio landing page",link:"https://github.com/Fovardell/tech-titans"}],v=3;let l=0;const p={projectsList:document.querySelector(".projects-list"),loadMoreBtn:document.querySelector(".projects-load")};function M(e){return`<li class="my-projects-card">
    <img class="my-projects-card-img" srcset="${e.img.srcset}" src="${e.img.src}" alt="${e.img.alt}" />
    <p class="my-projects-card-stack">${e.stack}</p>
    <div class="projects-card-container">
      <h3 class="projects-card-title">${e.title}</h3>
      <a class="projects-card-link" href="${e.link}" target="_blank">
        <span class="projects-card-link-span">VISIT</span>
        <svg class="projects-card-link-svg" width="24" height="24">
          <use href="/img/svg/spriteForEachOpt.svg#MyProjectVector"></use>
        </svg>
      </a>
    </div>
  </li>`}function L(){const i=u.slice(l,l+v).map(M).join("");p.projectsList.insertAdjacentHTML("beforeend",i);const c=document.querySelectorAll(".my-projects-card:not(.loaded)");setTimeout(function(){c.forEach(function(r){r.classList.add("loaded")})},10),l+=v,l>=u.length&&(p.loadMoreBtn.style.display="none")}p.loadMoreBtn.addEventListener("click",L);L();
//# sourceMappingURL=commonHelpers.js.map
