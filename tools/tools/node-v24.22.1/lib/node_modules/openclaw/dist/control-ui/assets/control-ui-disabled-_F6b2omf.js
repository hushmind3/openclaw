import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{Hs as t,Pu as n,zu as r}from"./control-ui-core-BPT563ol.js";import{go as i,wo as a}from"./control-ui-core-0Azpklii.js";import{J as o,W as s}from"./lit-runtime-QehuX6Ya.js";function c(e,n){if(e?.plugins.errors.some(e=>e.pluginId===n&&e.code===`custom-plugin-ui-disabled`))return o`<div class="card-title">${r(`pluginUi.customPluginsDisabled`)}</div>
    <p class="card-sub">${r(`pluginUi.customPluginsEnableHint`)}</p>
    <a
      class="btn btn--sm"
      href=${a(`labs`,e.basePath)}
      @click=${n=>{t(n)&&(n.preventDefault(),e.navigate(`labs`))}}
      >${r(`pluginUi.openLabs`)}</a
    >`}function l(){return(l=e((()=>{s(),i(),n()})))()}export{c as n,l as t};