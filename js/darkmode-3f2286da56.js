try { 
var light="light",dark="dark",HTML_KEY_DATA_MODE="data-mode",LS_KEY_DARKMODE="dark-mode";function elemAttribute(e,t,r){if(!r)return(r=e.getAttribute(t))||!1;e.setAttribute(t,r)}function isDarkmodeActivated(){return"true"==window.localStorage.getItem(LS_KEY_DARKMODE)||!1}function toggleDarkmodeLS(){var e=this.isDarkmodeActivated();window.localStorage.setItem(LS_KEY_DARKMODE,!e)}function refreshDarkmodeAttrs(){var e=this.isDarkmodeActivated();elemAttribute(document.documentElement,HTML_KEY_DATA_MODE,e?dark:light)}function refreshIcon(){var e=document.getElementById("darkmode-switcher");void 0!==e&&null!=e&&(isDarkmodeActivated()?(e.classList.remove("sun"),e.classList.add("moon")):(e.classList.remove("moon"),e.classList.add("sun")))}function refreshDarkmode(){refreshIcon(),refreshDarkmodeAttrs()}function toggleDarkmode(){toggleDarkmodeLS(),refreshDarkmode()}refreshDarkmode(),document.addEventListener("DOMContentLoaded",function(e){refreshIcon()});
 }
 catch (e) { 
 // pass 
 }