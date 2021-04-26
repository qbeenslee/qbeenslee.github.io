try { 
function drawECharts(eleIID,txt){var ele=document.getElementById(eleIID);try{eval(txt);var myoption=option;myoption.animation=!1,void 0!==myoption.width?ele.style.width=myoption.width+10+"px":ele.style.width="100%",void 0!==myoption.height?ele.style.height=myoption.height+10+"px":ele.style.height="350px";var myChart=echarts.init(ele);myChart.setOption(myoption)}catch(e){}}function insertAfter(e,t){e.parentNode.insertBefore(t,e.nextSibling)}var init=function(){for(var e=[[".language-echarts",drawECharts]],t=0,n=0;n<e.length;n++)for(var i=e[n][0],o=e[n][1],r=document.querySelectorAll(i),a=0;a<r.length;a++){var l=r[a],d=l.innerText||l.textContent;l=l.parentElement;var h=document.createElement("div"),m="chart-ele-"+t;t++,h.innerHTML='<div id="'+m+'"></div>',insertAfter(l,h),l.parentElement.removeChild(l),o(m,d)}};document.addEventListener("DOMContentLoaded",function(e){init()});
 }
 catch (e) { 
 // pass 
 }