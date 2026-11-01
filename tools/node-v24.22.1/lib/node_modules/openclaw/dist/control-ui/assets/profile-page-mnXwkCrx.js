const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./user-prefs-request-Cj3Z3Vfl.js","./gateway-runtime-DlE37Duz.js","./session-snapshot-database-BOVmtMzx.js","./control-ui-core-DI-Q_yCI.css"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{Au as t,Gu as n,Ic as r,Lc as i,Nu as a,Pu as o,Wu as s,bl as c,dt as l,fu as u,g as d,hl as f,ju as p,ll as ee,lt as te,m as ne,ot as re,p as m,st as ie,uu as ae,wi as oe,xl as se,xu as h,yu as g,zu as _}from"./control-ui-core-BPT563ol.js";import{Aa as ce,Ai as v,Ba as le,Cr as y,Ft as ue,It as de,Lt as fe,Sr as pe,bo as me,go as he,ha as ge,jt as _e,ki as b,ma as ve,or as ye,sr as be,wr as x,yr as xe,za as Se}from"./control-ui-core-0Azpklii.js";import{G as S,J as C,W as w,Z as T,at as E,rt as D}from"./lit-runtime-QehuX6Ya.js";import{er as Ce,nr as we,rr as Te,tr as Ee}from"./control-ui-boot-shared-Cg0P1mOO.js";import{At as De,Ca as Oe,Sa as ke,jt as Ae,kt as je,o as O,s as k}from"./control-ui-boot-shared-CiOpN1Pb.js";import{Ur as A,Wr as j,Zr as M,ma as Me,pa as Ne,xa as Pe}from"./ui-Bn9bGZWF.js";import{B as N,Ci as Fe,Fi as Ie,G as Le,I as P,Li as Re,R as ze,Rr as Be,Si as Ve,Ti as He,U as Ue,V as F,W as We,X as Ge,Y as I,Z as L,dn as Ke,et as qe,fn as Je,l as Ye,q as R,tt as z,u as Xe}from"./control-ui-boot-shared-DwsH2Ox4.js";import{r as Ze,t as Qe}from"./wizard-step-controls-A1Yy4PDI.js";import{o as B,r as V}from"./settings-targets-BgMazYGm.js";import{a as $e,c as et,d as tt,i as nt,l as rt,n as it,r as at,s as ot,t as st,u as ct}from"./github-identity-view-Ey3Islcj.js";var H,U,W;function G(){return(G=e((()=>{n(),H=s.profilePage.identity,U={profilePage:{access:{title:`Your access`,admin:`You have permission to manage this server.`,write:`You have permission to send messages and make changes.`,read:`You have permission to view server information.`,sessionWrite:`You have permission to work in your own sessions.`,sessionRead:`You have permission to view your own sessions.`,limited:`This connection has a limited set of permissions.`,limits:`Sessions, browsers, and tools may have additional restrictions.`,help:`Missing something you need?`,nextStep:`Ask your server administrator to review your access. Reconnect after they make changes.`,reconnect:`Reconnect`,connecting:`Connecting… Your access will appear when the connection is ready.`,details:`Technical details`,description:`These permissions were granted when you connected. A role can limit them, but does not grant extra permissions.`,scopes:`Granted scopes`,unknown:`Your permissions could not be confirmed.`,none:`This connection has no permissions.`},identity:{title:H.title,menuLabel:H.menuLabel,menuButtonLabel:H.menuButtonLabel,description:H.description,loading:`Loading your identity…`,profileUnavailable:`Your identity profile could not be loaded.`,unidentified:`This connection has no personal profile; sign in through Cloudflare Access, Tailscale Serve, or a trusted proxy to set a name and avatar.`,writeRequired:`Your current access does not allow profile editing.`,avatar:H.avatar,avatarDescription:`PNG, JPEG, or WebP. Images are resized to 256 × 256 or smaller.`,chooseAvatar:H.chooseAvatar,processingAvatar:`Processing…`,displayName:H.displayName,displayNameDescription:`Shown to other people using this gateway.`,linkedEmails:H.linkedEmails,linkedEmailsDescription:`Email addresses connected to this profile.`,githubAccount:`GitHub account`,githubAccountDescription:`Verified sign-in identity, not permission to publish. Manage publishing access under GitHub connections below.`,githubVerified:`Verified from your GitHub-backed sign-in`,githubUnavailable:`Unavailable`,githubUnavailableDescription:`GitHub-backed sign-in is unavailable. Refresh to retry.`,ownerGithubDescription:`GitHub-backed sign-in through Cloudflare Access or Tailscale Serve provides this identity.`,gitCoauthor:`Git co-author credit`,gitCoauthorDescription:`Adds this account's public GitHub noreply address to commits created from shared sessions. Turning it off affects future commits only.`,gitCoauthorUnavailable:`Available after your GitHub-backed sign-in is verified. Refresh to retry.`,ownerGitCoauthorDescription:`Requires GitHub-backed sign-in through Cloudflare Access or Tailscale Serve.`,avatarErrors:{invalid:`That image could not be processed.`,sourceTooLarge:`Choose an image that is 10 MB or smaller.`,tooLarge:`The processed avatar is larger than 512 KB.`}}}},W=Object.assign(()=>{s.profilePage.access=U.profilePage.access,Object.assign(s.profilePage.identity,U.profilePage.identity)},{catalog:U})})))()}var K;function lt(){return(lt=e((()=>{j(),w(),T(),he(),v(),x(),P(),o(),ct(),se(),a(),B(),rt(),st(),K=class extends p{constructor(...e){super(...e),this.purpose=`personal`,this.setupOpen=!1,this.snapshot=null,this.revision=0,this.canRead=!1,this.canAdmin=!1,this.profileId=null,this.subscriptions=[],this.personal=new et({requestUpdate:()=>this.requestUpdate(),authorizationSucceeded:()=>{this.setupOpen=!1}}),this.system=new et({requestUpdate:()=>this.requestUpdate(),authorizationSucceeded:()=>{this.setupOpen=!1},runExternalMutation:(e,t)=>this.context.runtimeConfig.runExternalMutation(e,t)})}connectedCallback(){super.connectedCallback(),this.subscriptions=[this.context.gateway.subscribe(e=>this.applySnapshot(e)),this.context.agents.subscribe(()=>this.syncControllers()),this.context.settingsAgentSelection.subscribe(()=>this.syncControllers()),this.context.runtimeConfig.subscribe(()=>this.syncControllers())],this.applySnapshot(this.context.gateway.snapshot)}disconnectedCallback(){for(let e of this.subscriptions)e();this.subscriptions=[],this.personal.dispose(),this.system.dispose(),this.snapshot=null,this.revision+=1,super.disconnectedCallback()}applySnapshot(e){let t=this.snapshot,n=!t||t.client!==e.client||t.phase!==e.phase||t.hello!==e.hello||this.profileId!==(e.selfUser?.id??null);this.snapshot=e,this.profileId=e.phase===`connected`?e.selfUser?.id??null:null,this.canRead=e.phase===`connected`&&!!e.hello?.auth&&pe(e.hello?.auth??null),this.canAdmin=this.canRead&&xe(e.hello?.auth??null),n&&(this.revision+=1,this.setupOpen=!1,this.purpose=this.profileId?`personal`:`system`),this.syncControllers(),this.canAdmin&&this.context.runtimeConfig.ensureLoaded()}syncControllers(){let e=this.snapshot;if(!e)return;let t={client:e.client,connected:e.phase===`connected`,clientRevision:this.revision};this.personal.sync({...t,target:this.profileId?{kind:`personal`,profileId:this.profileId}:null,statusReadable:this.canRead&&this.profileId!==null,authorizable:this.canRead&&this.profileId!==null,configurable:!1});let n=this.context.settingsAgentSelection.state.selectedId;this.system.sync({...t,target:n?{kind:`shared`,scope:`system`,agentId:n,config:c(this.context.runtimeConfig.state)}:null,statusReadable:this.canAdmin,authorizable:this.canAdmin,configurable:this.canAdmin}),this.personal.statusReadable&&!this.personal.personal&&!this.personal.loading&&!this.personal.error&&this.personal.verify(),n&&this.canAdmin&&!this.system.status&&!this.system.loading&&!this.system.error&&this.system.verify(),this.requestUpdate()}get locked(){return this.personal.loading||this.system.loading||this.personal.authorizationActive||this.system.authorizationActive||this.personal.busy||this.system.busy}openSetup(e){this.locked||(e===`personal`?!this.profileId||!this.canRead:!this.canAdmin)||(this.purpose=e,this.setupOpen=!0)}render(){let e=this.personal.personal,t=this.system.status?.selected.identity??this.personal.system,n=this.context.settingsAgentSelection.state.selectedId,r=this.context.agents.state.agentsList?.agents?.find(e=>e.id===n),i=this.system.status?.effective??null,a=this.purpose===`personal`?this.personal:this.system,o=this.setupOpen||this.personal.authorizationActive||this.system.authorizationActive,s=e?.state===`connected`,c=e?.state===`unavailable`||e?.refreshState===`expired`||e?.refreshState===`failed`,l=this.profileId?_(c?`githubConnections.reconnectRequired`:s?`githubConnections.connected`:`githubConnections.disconnected`):_(`githubConnections.signInRequired`);return C`<div id=${V.githubConnections}>
      ${I({title:_(`githubConnections.title`),description:_(`githubConnections.description`),actions:this.canRead&&(this.profileId||this.canAdmin)?C`<button
                    class="btn btn--sm"
                    ?disabled=${this.locked||!this.profileId&&!this.system.status}
                    @click=${()=>this.openSetup(this.profileId?`personal`:`system`)}
                  >
                    ${_(`githubConnections.manage`)}
                  </button>
                  <button
                    class="btn btn--sm"
                    ?disabled=${this.locked}
                    @click=${()=>{this.personal.verify(),this.system.verify()}}
                  >
                    ${_(`agentTools.githubVerify`)}
                  </button>`:void 0},C`
          <div data-github-connection="personal">
            ${R({title:_(`githubConnections.mine`),description:this.profileId?C`${e?.account?`@${e.account.login} · `:``}${_(`githubConnections.personalDescription`)}`:_(`githubConnections.unboundDescription`),control:C`${this.profileId&&!e?ot(this.personal):L({kind:c?`warn`:s?`ok`:`muted`,label:l})}
              ${this.profileId&&this.canRead&&e?C`<button
                      class="btn btn--sm"
                      ?disabled=${this.locked}
                      @click=${()=>this.openSetup(`personal`)}
                    >
                      ${_(s?`githubConnections.changeMine`:`githubConnections.connectMine`)}
                    </button>`:S}`})}
          </div>
          <div data-github-connection="system">
            ${R({title:_(`githubConnections.system`),description:C`${t?.account?`@${t.account.login} · `:``}${_(`githubConnections.systemDescription`)}`,control:C`${$e(t,{loading:this.system.loading||this.personal.loading,error:this.system.error??this.personal.error})}${this.canAdmin?C`<button
                      class="btn btn--sm"
                      ?disabled=${this.locked||!this.system.status}
                      @click=${()=>this.openSetup(`system`)}
                    >
                      ${_(`githubConnections.changeSystem`)}
                    </button>`:z(_(`githubConnections.adminManaged`))}`})}
          </div>
          ${this.canAdmin&&n?C`<div data-github-connection="agent">
                  ${R({title:_(`githubConnections.agentFor`,{agent:r?.identity?.name??r?.name??n}),description:C`${i?.account?`@${i.account.login} · `:``}${i?_(i.source===`agent-override`?`githubConnections.agentOverride`:`githubConnections.system`):``}<br />${_(`githubConnections.agentDescription`)}`,control:C`${$e(i,this.system)}<button
                        class="btn btn--sm"
                        @click=${()=>this.context.navigate(`agents`,{pathname:me(n,`tools`,this.context.basePath)})}
                      >
                        ${_(`githubConnections.viewAgent`)}
                      </button>`})}
                </div>`:S}
          ${it(this.personal.error??this.system.error,C`<button
              class="btn btn--sm"
              ?disabled=${this.locked}
              @click=${()=>{this.personal.verify(),this.system.verify()}}
            >
              ${_(`common.retry`)}
            </button>`)}
          ${o?C`<div class="settings-subrows" data-github-setup>
                  ${R({title:_(`githubConnections.purpose`),control:this.profileId&&this.canAdmin&&this.system.status?Ge({value:this.purpose,options:[{value:`personal`,label:_(`githubConnections.forMe`)},{value:`system`,label:_(`githubConnections.forSystem`)}],disabled:this.locked,ariaLabel:_(`githubConnections.purpose`),onChange:e=>this.openSetup(e)}):z(this.purpose===`personal`?_(`githubConnections.forMe`):_(`githubConnections.forSystem`))})}
                  ${at(a)}
                  ${this.locked?S:R({title:_(`githubConnections.purposeHint`),control:C`<button
                            class="btn btn--sm"
                            @click=${()=>{this.setupOpen=!1,a.hidePatFallback()}}
                          >
                            ${_(`common.close`)}
                          </button>`})}
                </div>`:S}
          <details class="settings-row settings-row--stacked">
            <summary class="settings-row__title">${_(`githubConnections.usage`)}</summary>
            <div class="settings-row__desc">${_(`githubConnections.usageDescription`)}</div>
            ${nt(t)}
          </details>
          ${this.canAdmin&&this.system.status?.selected.configured?R({title:_(`agentTools.githubUseNativeNewRuns`),description:_(`agentTools.githubSystemMutationHint`),control:C`<button
                    class="btn btn--sm"
                    ?disabled=${this.locked}
                    @click=${()=>void this.system.inherit()}
                  >
                    ${_(`agentTools.githubUseNativeNewRuns`)}
                  </button>`}):S}
        `)}
      ${this.profileId&&this.canRead&&e&&e.state!==`disconnected`?I({danger:!0},R({title:_(`githubConnections.disconnectMine`),description:_(`githubConnections.disconnectDescription`),control:C`<button
                  class="btn btn--sm"
                  ?disabled=${this.locked}
                  @click=${()=>void this.personal.disconnect()}
                >
                  ${_(`githubConnections.disconnectMine`)}
                </button>`})):S}
    </div>`}},M([A({context:b,subscribe:!1})],K.prototype,`context`,void 0),M([D()],K.prototype,`purpose`,void 0),M([D()],K.prototype,`setupOpen`,void 0),customElements.get(`openclaw-github-connections`)||customElements.define(`openclaw-github-connections`,K),tt()})))()}function ut(e,t,n){return new Promise(r=>{e.toBlob(r,t,n)})}async function dt(e){if(![`image/png`,`image/jpeg`,`image/webp`].includes(e.type))throw new J(`invalid-image`);if(e.size>pt)throw new J(`source-too-large`);let t=URL.createObjectURL(e),n;try{n=new Image,n.decoding=`async`,n.src=t,await n.decode()}catch{throw new J(`invalid-image`)}finally{URL.revokeObjectURL(t)}let{naturalWidth:r,naturalHeight:i}=n;if(!Number.isFinite(r)||!Number.isFinite(i)||r<=0||i<=0)throw new J(`invalid-image`);let a=Math.min(r,i),o=Math.min(1,ft/a),s=Math.max(1,Math.round(a*o)),c=document.createElement(`canvas`);c.width=s,c.height=s;let l=c.getContext(`2d`);if(!l)throw new J(`invalid-image`);l.drawImage(n,Math.max(0,Math.round((r-a)/2)),Math.max(0,Math.round((i-a)/2)),a,a,0,0,s,s);let u=e.type===`image/webp`?`image/webp`:`image/png`,d=await ut(c,u,u===`image/webp`?.9:void 0);if((!d||d.type!==u||d.size>q)&&(u=`image/webp`,d=await ut(c,u,.82)),!d||d.type!==u)throw new J(`invalid-image`);if(d.size>q)throw new J(`too-large`);let f=new Uint8Array(await d.arrayBuffer());return{mime:u,avatarBase64:oe(f),byteLength:f.byteLength}}var ft,q,pt,J;function mt(){return(mt=e((()=>{ft=512,q=524288,pt=10485760,J=class extends Error{constructor(e){super(e),this.code=e,this.name=`ProfileAvatarError`}}})))()}function ht(e){let t=URL.parse(e);return t?`${t.origin}${t.pathname}`:_(`profilePage.modelAccounts.gatewayUnavailable`)}function gt(e,t){return e.some(e=>e.authProfileId!==t.authProfileId&&e.provider===t.provider&&e.label===t.label)?C` <code>${t.authProfileId}</code>`:``}function _t(e,t){let n=t.kind===`linked`,r=t.kind===`linked`?t.link:t.account,i=t.kind===`linked`?e.accounts.find(e=>e.authProfileId===t.link.authProfileId):t.account,a=t.kind===`linked`?i?.label??_(`profilePage.modelAccounts.gatewayAccount`):t.account.label,o=Fe(r.provider),s=_(n?`profilePage.modelAccounts.unlinkAction`:`profilePage.modelAccounts.selectAction`);return R({title:C`
      <span class="model-accounts__id">${a}</span>
      <span class="model-accounts__provider">${o}</span>
    `,description:C`${t.kind===`linked`?_(`profilePage.modelAccounts.linkedDescription`):_(`profilePage.modelAccounts.authTypes.${t.account.authType}`)}${i?gt(e.accounts,i):``}`,control:C`
      ${n?L({kind:`ok`,label:_(`profilePage.modelAccounts.linkedStatus`)}):S}
      <button
        type="button"
        class="btn btn--sm ${n?`profile-auth-link-unlink`:`profile-auth-account-select`}"
        data-auth-profile-id=${n?S:r.authProfileId}
        aria-label=${n?`${s}: ${o} · ${i?.label??r.authProfileId}`:`${s}: ${o} · ${a} (${r.authProfileId})`}
        ?disabled=${e.busy}
        @click=${()=>n?e.onUnlink(r.provider):e.onSelectAccount(r.authProfileId)}
      >
        ${s}
      </button>
    `})}function vt(e){let t=e.signIn;if(!t)return``;let n=t.providers.find(e=>e.id===t.provider),r=e.connectFlow,i=r?.step,a=C`<button
    type="button"
    class="btn btn--sm profile-auth-connect-cancel"
    ?disabled=${e.cancelBusy}
    @click=${r?e.onConnectCancel:e.onCloseSignIn}
  >
    ${_(`profilePage.modelAccounts.cancelAction`)}
  </button>`;return R({title:r?r.step?.title??n?.label??_(`profilePage.modelAccounts.connectAction`):_(`profilePage.modelAccounts.addAccount`),stacked:!0,control:r?C`<div class="model-accounts-flow">
          ${i?Ze({step:i,value:e.stepValue,busy:e.busy,inputId:`profile-account-auth-answer`,leadingAction:a,onValueChange:t=>e.onStepValueChange(i.id,t),onAnswer:t=>e.onStepAnswer(i.id,t)}):C`<span role="status">${_(`common.loading`)}</span>${a}`}
          ${e.statusUnavailable?C`<button
                  type="button"
                  class="btn btn--sm profile-auth-connect-check"
                  ?disabled=${e.cancelBusy}
                  @click=${e.onConnectCheck}
                >
                  ${_(`profilePage.modelAccounts.checkStatusAction`)}
                </button>`:``}
        </div>`:C`<div class="model-accounts-choice">
          ${Je({label:_(`profilePage.modelAccounts.provider`),className:`profile-auth-provider`,value:t.provider||null,options:t.providers.map(e=>({value:e.id,label:e.label})),disabled:e.busy,renderLeading:e=>He(e.value),onChange:e.onProviderChange})}
          ${n?Je({label:_(`profilePage.modelAccounts.method`),className:`profile-auth-method`,value:t.method||null,options:n.methods.map(e=>({value:e.id,label:e.label,description:e.hint})),disabled:e.busy,onChange:e.onMethodChange}):``}
          ${!e.busy&&!e.error&&t.providers.length===0?C`<span>${_(`profilePage.modelAccounts.noMethods`)}</span>`:``}
          <div class="wizard-step__actions">
            ${a}
            <button
              type="button"
              class="btn btn--sm primary profile-auth-connect-start"
              ?disabled=${e.busy||!t.method}
              @click=${e.onConnectStart}
            >
              ${_(`profilePage.modelAccounts.connectAction`)}
            </button>
          </div>
        </div>`})}function yt(e){return R({title:_(`profilePage.modelAccounts.inputLabel`),description:_(`profilePage.modelAccounts.inputDescription`),stackedOnNarrow:!0,control:C`
      <form
        class="model-accounts-form"
        @submit=${t=>{t.preventDefault(),e.onLink()}}
      >
        <input
          class="settings-input profile-auth-link-input"
          type="text"
          aria-label=${_(`profilePage.modelAccounts.inputLabel`)}
          .value=${e.linkDraft}
          placeholder=${_(`profilePage.modelAccounts.inputPlaceholder`)}
          ?disabled=${e.busy}
          @input=${t=>e.onLinkDraftInput(t.target.value)}
        />
        <button
          type="submit"
          class="btn btn--sm profile-auth-link-submit"
          ?disabled=${e.busy||!e.linkDraft.trim()}
        >
          ${_(`profilePage.modelAccounts.linkAction`)}
        </button>
      </form>
    `})}function bt(e){return C`
    ${e.links.length===0?N(_(`profilePage.modelAccounts.empty`)):e.links.map(t=>_t(e,{kind:`linked`,link:t}))}
    ${e.accounts.filter(e=>!e.selected).map(t=>_t(e,{kind:`saved`,account:t}))}
    ${e.hasMore?R({title:_(`profilePage.modelAccounts.savedAccounts`),control:C`<button
              type="button"
              class="btn btn--sm profile-auth-accounts-more"
              ?disabled=${e.busy}
              @click=${e.onLoadMore}
            >
              ${_(`profilePage.modelAccounts.loadMore`)}
            </button>`}):``}
    ${vt(e)} ${e.showManualLink?yt(e):``}
    ${[`notice`,`error`].map(t=>e[t]?C`<div
            class="settings-row model-accounts-${t}"
            role=${t===`notice`?`status`:`alert`}
          >
            <span class="settings-row__desc">${e[t]}</span>
          </div>`:``)}
    ${e.inventoryError?C`<div class="settings-row model-accounts-error" role="alert">
            ${_(`profilePage.modelAccounts.inventoryFailed`)} ${e.inventoryError}
          </div>`:``}
  `}function xt(e,t){let n=C`
    ${R({title:_(`profilePage.modelAccounts.gateway`),stackedOnNarrow:!0,control:z(ht(e.gatewayUrl),{mono:!0})})}
    ${R({title:_(`profilePage.modelAccounts.person`),stackedOnNarrow:!0,control:z(e.personLabel??_(`profilePage.modelAccounts.noPerson`))})}
    ${R({title:_(`profilePage.modelAccounts.scope`),description:_(`profilePage.modelAccounts.personalDescription`),control:z(_(`profilePage.modelAccounts.personal`))})}
    ${t?bt(t):R({title:_(`profilePage.modelAccounts.signInUnavailable`),description:_(`profilePage.modelAccounts.unavailable.${e.unavailableReason}`),stacked:!0,control:C`
              <button type="button" class="btn btn--sm" @click=${e.onConnectionSettings}>
                ${_(`profilePage.modelAccounts.connectionSettings`)}
              </button>
              ${ze(`https://docs.openclaw.ai/concepts/multi-user#per-person-model-accounts`)}
            `})}
  `;return I({title:_(`profilePage.modelAccounts.title`),description:_(`profilePage.modelAccounts.description`),actions:t?C`${t.signIn?``:C`<button
                    type="button"
                    class="btn btn--sm primary profile-auth-add-account"
                    ?disabled=${t.busy}
                    @click=${t.onAddAccount}
                  >
                    ${_(`profilePage.modelAccounts.addAccount`)}
                  </button>`}<button
              type="button"
              class="btn btn--sm profile-auth-accounts-refresh"
              ?disabled=${t.inventoryLoading}
              @click=${t.onRefresh}
            >
              ${_(`common.refresh`)}
            </button>`:void 0},n)}function St(){return(St=e((()=>{w(),Ve(),Ke(),P(),Qe(),o(),O(),k()})))()}var Y;function X(){return(X=e((()=>{j(),w(),T(),v(),x(),o(),O(),h(),te(),a(),St(),k(),Y=class extends t{constructor(...e){super(...e),this.identityId=null,this.profileId=null,this.personLabel=null,this.links=[],this.accounts=[],this.inventoryLoading=!1,this.inventoryError=null,this.action=null,this.error=null,this.notice=null,this.linkDraft=``,this.signIn=null,this.connectFlow=null,this.statusUnavailable=!1,this.target=null,this.generation=0,this.inventoryRequest=0,this.unsubscribe=null,this.unsubscribeEvents=null,this.pollTimer=null}connectedCallback(){super.connectedCallback(),this.unsubscribe=this.context.gateway.subscribe(e=>{this.applySnapshot(e),this.requestUpdate()}),this.unsubscribeEvents=this.context.gateway.subscribeEvents(e=>{l(e)&&this.loadAccounts()}),this.applySnapshot(this.context.gateway.snapshot)}disconnectedCallback(){this.unsubscribe?.(),this.unsubscribe=null,this.unsubscribeEvents?.(),this.unsubscribeEvents=null,this.generation+=1,this.target=null,this.stopPoll(),super.disconnectedCallback()}willUpdate(e){(e.has(`profileId`)||e.has(`identityId`))&&this.isConnected&&this.applySnapshot(this.context.gateway.snapshot)}applySnapshot(e){let t=e.phase===`connected`&&y(e.hello?.auth??null),n=t?e.client:null,r=e.selfUser?.id??null,i=n&&r===this.identityId?this.profileId:null,a=t&&xe(e.hello?.auth??null);(this.target?.client!==n||this.target?.identityId!==r||this.target?.profileId!==i||this.target?.canAdmin!==a)&&(this.generation+=1,this.stopPoll(),this.target=n&&r&&i?{client:n,identityId:r,profileId:i,canAdmin:a}:null,this.links=[],this.accounts=[],this.nextCursor=void 0,this.inventoryRequest+=1,this.inventoryLoading=!1,this.inventoryError=null,this.action=null,this.error=null,this.notice=null,this.linkDraft=``,this.signIn=null,this.connectFlow=null,this.stepValue=void 0,this.statusUnavailable=!1,this.target&&this.loadAccounts())}applyLinks(e){this.links=e,this.accounts=this.accounts.map(t=>({...t,selected:e.some(e=>e.authProfileId===t.authProfileId)}))}async loadAccounts(e){let t=this.target;if(!t)return;let n=++this.inventoryRequest,r=()=>this.isConnected&&this.target===t&&n===this.inventoryRequest;this.inventoryLoading=!0,this.inventoryError=null;try{let n=await t.client.request(`users.listModelAccounts`,{profileId:t.profileId,...e?{cursor:e}:{}});r()&&(this.accounts=e?[...this.accounts,...n.accounts]:n.accounts,this.nextCursor=n.nextCursor,this.applyLinks(n.links))}catch(e){r()&&(this.inventoryError=g(e))}finally{r()&&(this.inventoryLoading=!1)}}isCurrent(e,t){return this.isConnected&&this.target===e&&this.generation===t}async runAction(e,t,n){let r=this.target;if(!r||this.action&&(e!==`cancel`||this.action!==`answer`))return;let i=++this.generation;this.stopPoll(),this.action=e,this.error=null,this.notice=null,this.statusUnavailable=!1;try{let e=await t(r);this.isCurrent(r,i)&&n(e)}catch(e){this.isCurrent(r,i)&&(this.error=g(e,_(`profilePage.modelAccounts.actionFailed`)))}finally{this.isCurrent(r,i)&&(this.action=null,this.schedulePoll(this.connectFlow?.step?2e3:0))}}updateAccount(e,t){if(e===`link`&&(!t||!this.target?.canAdmin))return;let n={link:`users.linkAuthProfile`,unlink:`users.unlinkAuthProfile`,select:`users.selectModelAccount`};this.runAction(`request`,r=>r.client.request(n[e],{profileId:r.profileId,...e===`unlink`?{provider:t}:{authProfileId:t}}),t=>{this.applyLinks(t.links),e!==`select`&&(this.linkDraft=``),this.notice=e===`unlink`?`cleared`:`selected`,this.loadAccounts()})}openSignIn(){this.signIn={providers:[],provider:``,method:``},this.runAction(`request`,e=>e.client.request(`users.authConnect.catalog`,{profileId:e.profileId}),e=>{this.signIn={providers:e.providers,provider:``,method:``}})}selectProvider(e){let t=this.signIn,n=t?.providers.find(t=>t.id===e);t&&n&&!this.action&&!this.connectFlow&&(this.signIn={...t,provider:e,method:n.methods.length===1?n.methods[0]?.id??``:``})}startConnect(){let e=this.signIn;e?.providers.some(t=>t.id===e.provider&&t.methods.some(t=>t.id===e.method))&&this.runAction(`request`,t=>t.client.request(`users.authConnect.start`,{profileId:t.profileId,provider:e.provider,method:e.method}),e=>{this.connectFlow=e,this.stepValue=void 0})}applyConnectStatus(e){if(e.status===`pending`){e.error&&(this.error=g(e.error)),this.connectFlow&&=(this.connectFlow.step?.id!==e.step?.id&&(this.stepValue=e.step?.sensitive?void 0:e.step?.initialValue),{...this.connectFlow,step:e.step});return}if(this.error=null,this.statusUnavailable=!1,this.stopPoll(),this.signIn=null,this.connectFlow=null,this.stepValue=void 0,e.status===`failed`){this.error=_(`profilePage.modelAccounts.connectErrors.${e.reason}`);return}e.status===`connected`&&(this.applyLinks(e.links),this.loadAccounts()),this.notice=e.status}connectStatus(e){let t=this.connectFlow;t&&this.runAction(e===`status`?`request`:e,n=>n.client.request(`users.authConnect.${e}`,{profileId:n.profileId,connectId:t.connectId}),e=>this.applyConnectStatus(e))}answerStep(e,t){let n=this.connectFlow,r=n?.step;n&&r&&r.id===e&&r.type!==`progress`&&(r.sensitive&&(this.stepValue=void 0),this.runAction(`answer`,e=>e.client.request(`users.authConnect.answer`,{profileId:e.profileId,connectId:n.connectId,stepId:r.id,...t===void 0?{}:{value:t}}),e=>this.applyConnectStatus(e)))}stopPoll(){this.pollTimer!==null&&(clearTimeout(this.pollTimer),this.pollTimer=null)}schedulePoll(e=2e3){this.stopPoll();let t=this.connectFlow;if(!t||!this.target||this.action)return;let n=Math.max(0,Math.min(e,t.expiresAtMs-Date.now()));this.pollTimer=setTimeout(()=>{this.pollTimer=null,this.pollStatus()},n)}async pollStatus(){let e=this.target,t=this.connectFlow,n=this.generation;if(e&&t&&!this.action)try{let r=await e.client.request(`users.authConnect.status`,{profileId:e.profileId,connectId:t.connectId});if(!this.isCurrent(e,n)||this.connectFlow?.connectId!==t.connectId)return;this.applyConnectStatus(r),this.connectFlow&&(Date.now()>=t.expiresAtMs?(this.statusUnavailable=!0,this.error=_(`profilePage.modelAccounts.statusTimedOut`)):this.schedulePoll())}catch(t){this.isCurrent(e,n)&&(this.statusUnavailable=!0,this.error=g(t,_(`profilePage.modelAccounts.statusFailed`)))}}render(){let e=this.context.gateway.snapshot;if(e.phase!==`connected`||!e.client)return S;let t=e.selfUser?.id===this.identityId?e.selfUser:null;return xt({gatewayUrl:(this.target?.client??e.client).gatewayUrl,personLabel:t?this.personLabel||t.name||t.email||_(`profilePage.modelAccounts.currentPerson`):null,unavailableReason:t?y(e.hello?.auth??null)?`profile`:`write`:`identity`,onConnectionSettings:()=>this.context.navigate(`connection`)},this.target?{links:this.links,accounts:this.accounts,hasMore:!!this.nextCursor,inventoryLoading:this.inventoryLoading,inventoryError:this.inventoryError,showManualLink:this.target.canAdmin,busy:this.inventoryLoading||this.action!==null,cancelBusy:this.action!==null&&this.action!==`answer`,error:this.error,notice:this.notice?_(`profilePage.modelAccounts.notices.${this.notice}`):null,statusUnavailable:this.statusUnavailable,linkDraft:this.linkDraft,signIn:this.signIn,connectFlow:this.connectFlow,stepValue:this.stepValue,onLinkDraftInput:e=>{this.linkDraft=e},onLink:()=>this.updateAccount(`link`,this.linkDraft.trim()),onUnlink:e=>this.updateAccount(`unlink`,e),onSelectAccount:e=>this.updateAccount(`select`,e),onLoadMore:()=>void this.loadAccounts(this.nextCursor),onRefresh:()=>void this.loadAccounts(),onAddAccount:()=>this.openSignIn(),onProviderChange:e=>this.selectProvider(e),onMethodChange:e=>{this.signIn&&!this.action&&!this.connectFlow&&(this.signIn={...this.signIn,method:e})},onCloseSignIn:()=>{!this.action&&!this.connectFlow&&(this.signIn=null,this.error=null)},onConnectStart:()=>this.startConnect(),onStepValueChange:(e,t)=>{this.connectFlow?.step?.id===e&&(this.stepValue=t)},onStepAnswer:(e,t)=>this.answerStep(e,t),onConnectCancel:()=>this.connectStatus(`cancel`),onConnectCheck:()=>this.connectStatus(`status`)}:null)}},M([A({context:b,subscribe:!1})],Y.prototype,`context`,void 0),M([E({attribute:!1})],Y.prototype,`identityId`,void 0),M([E({attribute:!1})],Y.prototype,`profileId`,void 0),M([E({attribute:!1})],Y.prototype,`personLabel`,void 0),M([D()],Y.prototype,`links`,void 0),M([D()],Y.prototype,`accounts`,void 0),M([D()],Y.prototype,`nextCursor`,void 0),M([D()],Y.prototype,`inventoryLoading`,void 0),M([D()],Y.prototype,`inventoryError`,void 0),M([D()],Y.prototype,`action`,void 0),M([D()],Y.prototype,`error`,void 0),M([D()],Y.prototype,`notice`,void 0),M([D()],Y.prototype,`linkDraft`,void 0),M([D()],Y.prototype,`signIn`,void 0),M([D()],Y.prototype,`connectFlow`,void 0),M([D()],Y.prototype,`stepValue`,void 0),M([D()],Y.prototype,`statusUnavailable`,void 0),customElements.get(`openclaw-model-accounts`)||customElements.define(`openclaw-model-accounts`,Y)})))()}var Z,Ct;function wt(){return(wt=e((()=>{n(),Z={profilePage:{personalInstructions:{signIn:`Sign in with your personal profile to edit your instructions. This requires operator.read access.`,noAgents:`No agents are available on this connection.`,guidance:`{count} / 4,000 characters. Keep it brief: preferences, context, and working style.`,missing:`Your personal file will be created when you save.`,tooLong:`Shorten your instructions to 4,000 characters before saving.`,reload:`Reload`,dirty:`Unsaved changes`,saved:`Saved`,discard:`Discard your unsaved instructions and load the saved file?`,failureHint:`Your draft is unchanged. If the file changed elsewhere, copy your draft, then reload before saving again.`,contextChanged:`The returned file does not match this profile and agent. Reload before trying again.`}}},Ct=Object.assign(()=>{Object.assign(s.profilePage.personalInstructions,Z.profilePage.personalInstructions)},{catalog:Z})})))()}var Q;function Tt(){return(Tt=e((()=>{j(),w(),T(),v(),x(),P(),o(),wt(),h(),a(),B(),Ct(),Q=class extends p{constructor(...e){super(...e),this.agentId=``,this.file=null,this.draft=``,this.busy=null,this.error=null,this.saved=!1,this.client=null,this.profileId=null,this.connectionId=null,this.gatewayUrl=null,this.available=!1,this.multipleProfiles=!1,this.generation=0,this.subscriptions=[],this.drafts=new Map}connectedCallback(){super.connectedCallback(),this.subscriptions=[this.context.gateway.subscribe(()=>this.syncContext()),this.context.agents.subscribe(()=>this.syncContext()),this.context.settingsAgentSelection.subscribe(()=>this.syncContext())],this.syncContext(),this.context.agents.ensureList()}disconnectedCallback(){this.subscriptions.forEach(e=>e()),this.subscriptions=[],this.generation+=1,this.client=null,this.available=!1,super.disconnectedCallback()}get agents(){return this.context.agents.state?.agentsList?.agents??[]}get dirty(){return this.file!==null&&this.draft!==this.file.content}syncContext(){let e=this.context.gateway.snapshot,t=e.phase===`connected`,n=e.selfUser?.id??this.profileId,r=this.context.gateway.connection.gatewayUrl,i=e.hello?.server?.connId??null;this.multipleProfiles=e.hello?.policy?.hasMultipleSessionSharingIdentities===!0;let a=t&&this.multipleProfiles&&!!e.selfUser?.id&&pe(e.hello?.auth??null),o=n!==this.profileId||r!==this.gatewayUrl,s=o||e.client!==this.client||i!==this.connectionId||a!==this.available;s&&(this.client=e.client,this.connectionId=i,this.gatewayUrl=r,this.profileId=n,this.available=a,o&&(this.file=null,this.draft=``,this.agentId=``,this.drafts.clear()));let c=this.context.settingsAgentSelection.state.selectedId,l=this.agents.some(e=>e.id===c)?c:``,u=l!==this.agentId;if(u){this.dirty&&this.file?this.drafts.set(this.agentId,{file:this.file,content:this.draft}):this.drafts.delete(this.agentId),this.agentId=l;let e=this.drafts.get(l);this.drafts.delete(l),this.file=e?.file??null,this.draft=e?.content??``}(s||u)&&(this.generation+=1,this.busy=null,this.error=null,this.saved=!1),this.available&&this.agentId&&!this.dirty&&(s||u)&&this.load(),this.requestUpdate()}async load(){let e=this.client,t=this.agentId,n=this.profileId;e&&this.available&&t&&!this.busy&&await this.requestFile(`load`,{agentId:t,profileId:n},()=>e.request(`users.personalFile.get`,{agentId:t}))}async save(){let e=this.client,t=this.file;if(!e||!t||!this.available||this.busy||!this.dirty||t.agentId!==this.agentId||this.draft.length>4e3||!this.agents.some(e=>e.id===t.agentId))return;let n=this.draft;await this.requestFile(`save`,t,()=>e.request(`users.personalFile.set`,{agentId:t.agentId,content:n,expectedHash:t.hash}))}async requestFile(e,t,n){let r=++this.generation;this.busy=e,this.error=null,this.saved=!1;try{let i=await n();if(r!==this.generation)return;if(i.agentId!==t.agentId||i.profileId!==t.profileId)throw Error(_(`profilePage.personalInstructions.contextChanged`));this.file=i,this.draft=i.content,this.drafts.delete(i.agentId),this.saved=e===`save`}catch(e){r===this.generation&&(this.error=g(e))}finally{r===this.generation&&(this.busy=null)}}reload(){(!this.dirty||window.confirm(_(`profilePage.personalInstructions.discard`)))&&this.load()}render(){return this.multipleProfiles?C`<div id=${V.personalInstructions}>
      ${I({title:_(`profilePage.personalInstructions.title`),description:_(`profilePage.personalInstructions.description`)},this.available?this.agents.length?C`
                <div class="personal-instructions">
                  ${this.file?C`
                          <textarea
                            id="personal-instructions-content"
                            class="settings-input personal-instructions__editor"
                            rows="7"
                            .value=${this.draft}
                            ?disabled=${this.busy!==null}
                            aria-label=${_(`profilePage.personalInstructions.title`)}
                            aria-describedby="personal-instructions-guidance"
                            @input=${e=>{e.currentTarget instanceof HTMLTextAreaElement&&(this.draft=e.currentTarget.value,this.saved=!1)}}
                          ></textarea>
                          <div id="personal-instructions-guidance" class="settings-row__desc">
                            ${_(`profilePage.personalInstructions.guidance`,{count:String(this.draft.length)})}
                            ${this.file.missing?_(`profilePage.personalInstructions.missing`):S}
                          </div>
                          ${this.draft.length>4e3?C`<div role="alert">${_(`profilePage.personalInstructions.tooLong`)}</div>`:S}
                        `:S}
                  ${this.error?C`<div class="personal-instructions__error" role="alert">${this.error} ${_(`profilePage.personalInstructions.failureHint`)}</div>`:S}
                  <div class="personal-instructions__actions">
                    <button
                      class="btn"
                      ?disabled=${!this.file||!this.dirty||this.busy!==null||this.draft.length>4e3||!this.agents.some(e=>e.id===this.agentId)}
                      @click=${()=>void this.save()}
                    >
                      ${this.busy===`save`?_(`common.saving`):_(`common.save`)}
                    </button>
                    ${this.error?C`<button
                            class="btn"
                            ?disabled=${this.busy!==null}
                            @click=${()=>this.reload()}
                          >
                            ${_(`profilePage.personalInstructions.reload`)}
                          </button>`:S}
                    <span class="settings-row__desc" role="status"
                      >${this.dirty?_(`profilePage.personalInstructions.dirty`):this.saved?_(`profilePage.personalInstructions.saved`):S}</span
                    >
                  </div>
                </div>
              `:N(_(`profilePage.personalInstructions.noAgents`)):N(_(`profilePage.personalInstructions.signIn`)))}
    </div>`:S}},M([A({context:b,subscribe:!1})],Q.prototype,`context`,void 0),M([D()],Q.prototype,`agentId`,void 0),M([D()],Q.prototype,`file`,void 0),M([D()],Q.prototype,`draft`,void 0),M([D()],Q.prototype,`busy`,void 0),M([D()],Q.prototype,`error`,void 0),M([D()],Q.prototype,`saved`,void 0),customElements.get(`openclaw-personal-instructions`)||customElements.define(`openclaw-personal-instructions`,Q)})))()}function Et(e){let t=e.canWrite!==!1,n=e.profile.displayName??``,r=e.displayName.trim()!==n,i=e.profile.emails.join(`, `),a=e.profile.githubIdentity,o=e.profile.id===Ce;return C`<div id=${V.identity}>
    ${I({title:_(`profilePage.identity.title`),description:_(`profilePage.identity.description`)},C`
        ${t?S:R({title:_(`profilePage.identity.writeRequired`)})}
        ${R({title:_(`profilePage.identity.avatar`),description:_(`profilePage.identity.avatarDescription`),control:C`
            <span class="identity-avatar-control">
              <openclaw-viewer-avatar
                .user=${{id:e.profile.id,name:e.profile.displayName??void 0,email:e.profile.emails[0],avatarUrl:e.avatarUrl??void 0,watchedSessions:[]}}
                variant="profile"
              ></openclaw-viewer-avatar>
              ${t&&d(e.config)?C`<button
                        type="button"
                        class="btn btn--sm"
                        ?disabled=${e.busy!==null}
                        @click=${n=>{let r=n.currentTarget,i=r instanceof HTMLButtonElement?r.nextElementSibling:null;t&&d(e.config)&&i instanceof HTMLInputElement&&i.click()}}
                      >
                        ${e.busy===`avatar`?_(`profilePage.identity.processingAvatar`):_(`profilePage.identity.chooseAvatar`)}
                      </button>
                      <input
                        type="file"
                        accept="image/png,image/jpeg,image/webp"
                        hidden
                        ?disabled=${e.busy!==null}
                        @change=${n=>{let r=n.currentTarget,i=r.files?.[0];r.value=``,i&&t&&d(e.config)&&e.onAvatarSelect(i)}}
                      />`:S}
            </span>
          `})}
        ${R({title:_(`profilePage.identity.displayName`),description:_(`profilePage.identity.displayNameDescription`),control:C`
            <form
              class="identity-name-control"
              @submit=${t=>{t.preventDefault(),e.onSaveDisplayName()}}
            >
              <input
                class="settings-input"
                type="text"
                maxlength="256"
                aria-label=${_(`profilePage.identity.displayName`)}
                .value=${e.displayName}
                ?disabled=${!t||e.busy!==null}
                @input=${t=>e.onDisplayNameInput(t.currentTarget.value)}
              />
              <button
                type="submit"
                class="btn btn--sm"
                ?disabled=${!t||e.busy!==null||!r}
              >
                ${e.busy===`display-name`?_(`common.saving`):_(`common.save`)}
              </button>
            </form>
          `})}
        ${o?S:R({title:_(`profilePage.identity.linkedEmails`),description:_(`profilePage.identity.linkedEmailsDescription`),control:i?z(i):S})}
        ${R({title:_(`profilePage.identity.githubAccount`),description:_(o?`profilePage.identity.ownerGithubDescription`:a?`profilePage.identity.githubAccountDescription`:`profilePage.identity.githubUnavailableDescription`),control:a?C`
                <a
                  class="settings-account"
                  href=${a.profileUrl}
                  target=${je}
                  rel=${De()}
                >
                  <img class="settings-account__avatar" src=${a.avatarUrl} alt="" />
                  <span class="settings-row__value settings-row__value--mono"
                    >@${a.login}</span
                  >
                </a>
                ${L({kind:`ok`,label:_(`profilePage.identity.githubVerified`)})}
              `:L({kind:`muted`,label:_(`profilePage.identity.githubUnavailable`)})})}
        ${qe({title:_(`profilePage.identity.gitCoauthor`),description:_(o?`profilePage.identity.ownerGitCoauthorDescription`:a?`profilePage.identity.gitCoauthorDescription`:`profilePage.identity.gitCoauthorUnavailable`),checked:!!(a&&e.gitCoauthorEnabled),disabled:!t||e.busy!==null||!a,onChange:e.onGitCoauthorChange})}
        ${e.error?C`<div class="settings-row identity-error" role="alert">
                <span class="settings-row__desc">${e.error}</span>
              </div>`:S}
      `)}
  </div>`}function Dt(){return(Dt=e((()=>{w(),we(),P(),o(),G(),Ae(),Be(),ne(),B(),W()})))()}function Ot(e){let t=e.user?e.user.name?.trim()||e.user.email||_(`nav.owner`):e.identity?.name?.trim()||e.row.identity?.name?.trim()||e.row.name?.trim()||e.row.id,n=e.user?e.user.email:`@${e.row.id}`,r=e.user?null:u(e.row,e.identity),i=e.user?C`<openclaw-viewer-avatar
        .user=${{...e.user,name:t,watchedSessions:[]}}
        variant="profile"
      ></openclaw-viewer-avatar>`:Re({id:e.row.id,name:t,avatar:r?e.avatarLoader.resolve(r):null,textAvatar:f(e.row,e.identity)},``,r?e.avatarLoader.imageErrorHandler(r):void 0);return F(C`
    <section class="profile-hero">
      <div class="profile-hero__avatar">${i}</div>
      <div class="profile-hero__name">${t}</div>
      <div class="profile-hero__handle">
        ${n?C`<span class="profile-hero__email">${n}</span>`:S}
        <span class="profile-hero__badge">${ve().brandName}</span>
      </div>
    </section>
  `)}function kt(){return(kt=e((()=>{w(),ge(),Ie(),P(),o(),ee(),ae(),Be()})))()}var At,$;function jt(){return(jt=e((()=>{j(),w(),T(),we(),ce(),v(),x(),ye(),ue(),P(),Ye(),o(),O(),G(),h(),Oe(),ne(),a(),i(),B(),lt(),mt(),X(),Tt(),Dt(),re(),kt(),Me(),k(),W(),At=`https://docs.openclaw.ai/concepts/user-model`,$=class extends p{constructor(){super(),this.selfUser=null,this.ownProfile=null,this.displayName=``,this.gitCoauthorEnabled=!0,this.identityLoading=!1,this.identityBusy=null,this.identityError=null,this.client=null,this.connected=!1,this.connecting=!1,this.canWrite=!1,this.connectionScopes=null,this.heroAvatarLoader=new ke(this),this.identityRequestId=0,this.subscriptions=[],new r(this).watchStore(()=>this.context?.config).watchStore(()=>this.context?.theme)}connectedCallback(){super.connectedCallback(),this.subscriptions=[this.context.gateway.subscribe(e=>this.applyGatewaySnapshot(e)),this.context.gateway.subscribeEvents(e=>{!this.identityBusy&&e.event===`sessions.changed`&&Pe(e.payload)?.reason===`profile-identity`&&(this.identityRequestId+=1,this.identityLoading=!1,this.loadIdentity())}),this.context.agents.subscribe(()=>this.requestUpdate()),this.context.agentIdentity.subscribe(()=>this.requestUpdate())],this.applyGatewaySnapshot(this.context.gateway.snapshot)}disconnectedCallback(){for(let e of this.subscriptions)e();this.subscriptions=[],this.identityRequestId+=1,this.client=null,this.connected=!1,this.connecting=!1,this.canWrite=!1,this.connectionScopes=null,super.disconnectedCallback()}applyGatewaySnapshot(e){let t=e.client!==this.client,n=e.phase===`connected`,r=n&&y(e.hello?.auth??null),i=r!==this.canWrite,a=n!==this.connected,o=n?_e({snapshotUser:e.selfUser}):null,s=o?.id!==this.selfUser?.id||o?.identity?.id!==this.selfUser?.identity?.id,c=t||a||s||i;this.client=e.client,this.connected=n,this.connecting=e.phase===`connecting`||e.phase===`reconnecting`,this.canWrite=r,this.connectionScopes=n?e.hello?.auth?.scopes??null:null,this.selfUser=o,this.requestUpdate(),c&&(this.identityRequestId+=1,this.ownProfile=null,this.displayName=``,this.gitCoauthorEnabled=!0,this.identityLoading=!1,this.identityBusy=null,this.identityError=null),n&&e.client&&(c&&this.loadIdentity(),this.context.agents.ensureList().then(e=>{e&&this.context.agentIdentity.ensure([e.defaultId])}))}async loadIdentity(){let e=this.client;if(!e||!this.connected||this.identityLoading)return;let t=++this.identityRequestId,n=this.ownProfile,r=this.displayName,i=n!==null&&r.trim()!==(n.displayName??``);this.identityLoading=!0,this.identityError=null;try{let n=await this.context.gateway.loadSelfProfile();if(t!==this.identityRequestId||(this.ownProfile=n,!n))return;if(this.displayName=i?r:n.displayName??``,this.gitCoauthorEnabled=!0,n.githubIdentity){let{loadUserPreferences:r}=await Ne(async()=>{let{loadUserPreferences:e}=await import(`./user-prefs-request-Cj3Z3Vfl.js`).then(e=>(e.t(),e.r));return{loadUserPreferences:e}},__vite__mapDeps([0,1,2,3]),import.meta.url);if(t!==this.identityRequestId)return;let i=await r(e,n.id,{keys:[Ee]});if(t!==this.identityRequestId)return;this.gitCoauthorEnabled=i.status===`ok`&&Te(i.entries[`git.coauthor.enabled`])}}catch(e){t===this.identityRequestId&&(this.identityError=g(e,_(`profilePage.identity.profileUnavailable`)))}finally{t===this.identityRequestId&&(this.identityLoading=!1)}}async saveIdentity(e){let t=this.client,n=this.ownProfile;if(!t||!n||!this.canWrite||this.identityBusy||this.identityLoading||e.kind===`git-coauthor`&&!n.githubIdentity)return;this.identityBusy=e.kind,this.identityError=null;let r=this.identityRequestId,i=()=>t===this.client&&r===this.identityRequestId;try{switch(e.kind){case`display-name`:{let e=await t.request(`users.setDisplayName`,{profileId:n.id,displayName:this.displayName.trim()||null});if(!i())return;this.ownProfile=e.profile,this.displayName=e.profile.displayName??``,this.context.gateway.updateSelfUser?.({name:e.profile.displayName??void 0});break}case`avatar`:{m(this.context.config);let r=this.displayName,a=r.trim()!==(n.displayName??``),o=this.selfUser?.id===n.id?this.selfUser.avatarUrl:void 0,s=await dt(e.file);if(!i())return;m(this.context.config);let c=await t.request(`users.setAvatar`,{profileId:n.id,mime:s.mime,avatarBase64:s.avatarBase64});if(!i())return;this.ownProfile=c.profile,this.displayName=a?r:c.profile.displayName??``;let l=ie(this.context.gateway.connection.gatewayUrl,c.profile.id,c.avatarRevision,this.context.resourceBasePath),u=this.selfUser?.id===c.profile.id&&this.selfUser.avatarUrl!==o;l&&!u&&this.context.gateway.updateSelfUser?.({avatarUrl:l});break}case`git-coauthor`:{let n=await fe(t,{entries:{[Ee]:e.enabled}});if(!i())return;if(n.status!==`ok`)throw Error(_(`profilePage.identity.profileUnavailable`));this.gitCoauthorEnabled=e.enabled;return}}}catch(t){i()&&(this.identityError=e.kind===`avatar`&&t instanceof J?_(t.code===`too-large`?`profilePage.identity.avatarErrors.tooLarge`:t.code===`source-too-large`?`profilePage.identity.avatarErrors.sourceTooLarge`:`profilePage.identity.avatarErrors.invalid`):g(t,_(`profilePage.identity.profileUnavailable`)));return}finally{i()&&this.identityBusy===e.kind&&(this.identityBusy=null)}i()&&this.loadIdentity()}renderIdentity(){if(!this.selfUser||!this.ownProfile)return C`<div id=${V.identity}>
        ${I({title:_(`profilePage.identity.title`)},this.identityLoading?Ue({label:_(`profilePage.identity.loading`),rows:2}):N(this.identityError??_(this.selfUser?`profilePage.identity.profileUnavailable`:`profilePage.identity.unidentified`)))}
      </div>`;let e=this.selfUser?.id===this.ownProfile.id&&this.selfUser.avatarUrl?this.selfUser.avatarUrl:ie(this.context.gateway.connection.gatewayUrl,this.ownProfile.id,this.ownProfile.updatedAt,this.context.resourceBasePath);return Et({config:this.context.config,profile:this.ownProfile,canWrite:this.canWrite,avatarUrl:e,displayName:this.displayName,gitCoauthorEnabled:this.gitCoauthorEnabled,busy:this.identityLoading?`loading`:this.identityBusy,error:this.identityError,onDisplayNameInput:e=>{this.displayName=e},onSaveDisplayName:()=>void this.saveIdentity({kind:`display-name`}),onAvatarSelect:e=>void this.saveIdentity({kind:`avatar`,file:e}),onGitCoauthorChange:e=>void this.saveIdentity({kind:`git-coauthor`,enabled:e})})}renderConnectionAccess(){let e=this.connectionScopes,t=e===null?`unknown`:e.length===0?`none`:[[`operator.admin`,`admin`],[`operator.write`,`write`],[`operator.sessions.write`,`sessionWrite`],[`operator.read`,`read`],[`operator.sessions.read`,`sessionRead`]].find(([t])=>e.includes(t))?.[1]??`limited`;return C`<div id="settings-profile-access">
      ${I({title:_(`profilePage.access.title`)},C`
          ${R({title:_(`profilePage.access.${t}`),description:_(`profilePage.access.limits`)})}
          ${R({title:_(`profilePage.access.help`),description:_(`profilePage.access.nextStep`),stackedOnNarrow:!0,control:C`<button
              type="button"
              class="btn"
              ?disabled=${this.identityBusy!==null}
              @click=${()=>this.context.gateway.connect()}
            >
              ${_(`profilePage.access.reconnect`)}
            </button>`})}
          <details class="settings-row settings-row--stacked">
            <summary>${_(`profilePage.access.details`)}</summary>
            ${R({title:_(`profilePage.access.scopes`),description:_(`profilePage.access.description`),stacked:!0,control:z(e===null?_(`profilePage.access.unknown`):e.length===0?_(`profilePage.access.none`):e.join(`, `),{mono:e!==null&&e.length>0})})}
          </details>
        `)}
    </div>`}refreshManually(){this.connected&&!this.identityBusy&&!this.identityLoading&&(this.client&&de(this.client),this.loadIdentity())}renderHero(){let e=this.context.agents.state.agentsList,t=e?.defaultId??`main`;return Ot({row:e?.agents.find(e=>e.id===t)??{id:t},user:this.selfUser,identity:this.context.agentIdentity.get(t),avatarLoader:this.heroAvatarLoader})}renderBody(){let e=this.connected&&this.client!==null,t=this.context.gateway.snapshot.hello?.policy?.hasMultipleSessionSharingIdentities===!0;return Le(C`
      ${e?C`${this.renderHero()} ${this.renderConnectionAccess()} ${this.renderIdentity()}`:F(this.connecting?C`<div role="status">
                    ${N(_(`profilePage.access.connecting`))}
                  </div>`:N(_(`profilePage.offline`)))}
      <openclaw-personal-instructions
        ?hidden=${!e||!t}
      ></openclaw-personal-instructions>
      ${e?C`
              <openclaw-model-accounts
                .identityId=${this.selfUser?.id??null}
                .profileId=${this.ownProfile?.id??null}
                .personLabel=${this.ownProfile?this.ownProfile.displayName?.trim()||this.ownProfile.emails[0]||_(`profilePage.modelAccounts.currentPerson`):null}
              ></openclaw-model-accounts>
              <openclaw-github-connections></openclaw-github-connections>
              ${F(We({title:_(`profilePage.usageStatistics`),description:_(`profilePage.usageStatisticsDescription`),onClick:()=>this.context.navigate(`usage`)}))}
            `:S}
    `)}render(){return this.heroAvatarLoader.withActiveRoutes(()=>C`
        <section class="content-header" ${be({toolbarHeader:!0})}>
          <div>
            <h1 class="page-title">${le(`profile`)}</h1>
            <div class="page-subtitle">
              ${Se(`profile`)} ${ze(At)}
            </div>
          </div>
          ${this.connected?C`<button
                  class="btn profile-refresh"
                  ?disabled=${this.identityLoading||this.identityBusy!==null}
                  @click=${()=>this.refreshManually()}
                >
                  ${this.identityLoading?_(`common.refreshing`):_(`common.refresh`)}
                </button>`:S}
        </section>
        ${Xe(this.renderBody())}
      `)}},M([A({context:b,subscribe:!1})],$.prototype,`context`,void 0),M([D()],$.prototype,`selfUser`,void 0),M([D()],$.prototype,`ownProfile`,void 0),M([D()],$.prototype,`displayName`,void 0),M([D()],$.prototype,`gitCoauthorEnabled`,void 0),M([D()],$.prototype,`identityLoading`,void 0),M([D()],$.prototype,`identityBusy`,void 0),M([D()],$.prototype,`identityError`,void 0),customElements.get(`openclaw-profile-page`)||customElements.define(`openclaw-profile-page`,$)})))()}jt();