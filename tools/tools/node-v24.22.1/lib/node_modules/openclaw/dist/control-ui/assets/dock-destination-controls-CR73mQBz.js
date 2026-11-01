import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{Fi as t}from"./control-ui-core-0Azpklii.js";import{G as n,J as r,W as i}from"./lit-runtime-QehuX6Ya.js";function a(e){let t=e.destinations.filter(t=>t.dock!==e.current);return t.length===0?n:r`<span class=${e.groupClass} role="group" aria-label=${e.groupLabel}>
    ${t.map(t=>r`<openclaw-tooltip .content=${t.label}>
        <button
          class=${`rail-header__action ${t.className??``}`}
          type="button"
          aria-label=${t.label}
          ?disabled=${e.disabled}
          @click=${()=>e.onSelect(t.dock)}
        >
          ${t.icon}
        </button>
      </openclaw-tooltip>`)}
  </span>`}function o(){return(o=e((()=>{i(),t()})))()}export{a as n,o as t};