var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequire7bc7;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequire7bc7=r);var n=r("iQIUW");const l=document.querySelector(".form"),i=document.querySelector(".fieldset"),u=document.querySelector('[name="delay"]'),a=document.querySelector('[name="step"]'),s=document.querySelector('[name="amount"]'),d=document.querySelector('[type="submit"]');l.addEventListener("submit",(e=>e.preventDefault())),d.addEventListener("click",(()=>{if(!(u.value>=0&&a.value>=0&&s.value>0))return;i.setAttribute("disabled",!0);let e=1;const t=setTimeout((function o(){var r,d;e<=s.value&&((r=e,d=+u.value+a.value*(e-1),new Promise(((e,t)=>{Math.random()>.3?e({position:r,delay:d}):t({position:r,delay:d})}))).then((({position:e,delay:t})=>{n.Notify.success(`Fulfilled promise ${e} in ${t}ms`,{clickToClose:!0,pauseOnHover:!1})})).catch((({position:e,delay:t})=>{n.Notify.failure(`Rejected promise ${e} in ${t}ms`,{clickToClose:!0,pauseOnHover:!1})})),e+=1,setTimeout(o,a.value)),e>s.value&&(clearInterval(t),l.reset(),i.removeAttribute("disabled"))}),u.value)}));
//# sourceMappingURL=03-promises.ec2b8c0c.js.map