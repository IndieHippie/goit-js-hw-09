const e=document.querySelector("body"),t=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]");let a=null;t.addEventListener("click",(t=>{a=setInterval((()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,t.target.disabled=!0,console.log(`random color  ${Math.random()}`)}),1e3)})),o.addEventListener("click",(()=>{clearInterval(a),t.disabled=!1,console.log(`Interval with id ${a} has stopped!`)}));
//# sourceMappingURL=01-color-switcher.e06c169c.js.map
