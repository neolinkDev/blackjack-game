const module=(()=>{"use strict";let e=[],t=[];const l=document.getElementById("btn-pedirCarta"),n=document.getElementById("btn-nuevoJuego"),r=document.getElementById("btn-detener"),a=["C","H","D","S"],d=["A","J","Q","K"],s=document.querySelectorAll("small"),o=document.querySelectorAll("[data-divCards]"),c=()=>{e=[];for(let t=2;t<=10;++t)for(let l of a)e.push(t+l);for(let t of a)for(let l of d)e.push(l+t);return _.shuffle(e)},i=()=>{if(0===e.length)throw"No hay cartas en la baraja";return e.shift()},u=(e,l)=>(t[l]+=(e=>{const t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:Number(t)})(e),s[l].innerText=t[l],t[l]),m=(e,t)=>{const l=document.createElement("img");l.classList.add("card"),l.src=`assets/cartas/${e}.png`,o[t].appendChild(l)},f=e=>{let l=0;do{const e=i();l=u(e,t.length-1),m(e,t.length-1)}while(l<e&&e<=21);(()=>{const[e,l]=t;setTimeout(()=>{l===e?alert("¡NO HAY UN GANADOR!"):e>21?alert("¡PERDISTE!"):l>21?alert("¡GANASTE!"):alert("¡PERDISTE!")},800)})()};document.addEventListener("click",a=>{if(a.target===l){const e=i(),t=u(e,0);m(e,0),t>21?(l.disabled=!0,r.disabled=!0,f(t)):21===t&&(l.disabled=!0,r.disabled=!0,f(t))}a.target===r&&(l.disabled=!0,r.disabled=!0,f(t[0])),a.target===n&&((n=2)=>{e=c(),t=[];for(let e=0;e<n;e++)t.push(0);s.forEach(e=>e.innerText=0),o.forEach(e=>e.innerHTML=""),l.disabled=!1,r.disabled=!1})()})})();