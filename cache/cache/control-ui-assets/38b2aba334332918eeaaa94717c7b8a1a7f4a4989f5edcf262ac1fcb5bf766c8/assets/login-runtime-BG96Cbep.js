import{n as e,r as t}from"./rolldown-runtime-8BhlS34s.js";import{Au as n,Ci as r,Gt as i,Gu as a,Kt as o,Nu as s,Pu as c,Us as l,Ut as u,Vt as d,Ws as f,Wt as ee,Wu as te,_u as p,zu as m}from"./control-ui-core-BPT563ol.js";import{Ca as h,Ha as g,Ui as ne,Wa as _,Xi as v,Yi as re,ca as ie,go as y,ha as b,ma as ae,qi as x,sa as S,xa as C}from"./control-ui-core-0Azpklii.js";import{G as w,J as T,W as oe,Z as se,at as ce,rt as le}from"./lit-runtime-QehuX6Ya.js";import{At as E,jt as D,kt as O}from"./control-ui-boot-shared-CiOpN1Pb.js";import{Ra as k,Zr as A,dn as j,hn as M,jo as N}from"./ui-Bn9bGZWF.js";import{T as P,Xi as F,Yi as I,w as L}from"./control-ui-boot-shared-DwsH2Ox4.js";import{cl as R,sl as z}from"./control-ui-boot-shared-BaEz5UC2.js";var B,V;function H(){return(H=e((()=>{a(),B={login:{heading:`Connect to OpenClaw`,lede:`Enter the Gateway URL and secret, or open the one-time link that openclaw dashboard prints on the Gateway host.`,gatewayUrl:`Gateway URL`,gatewaySettings:`Gateway settings`,secret:`Gateway secret`,setupCodeHint:`This is a device setup code for the OpenClaw mobile app, not the Gateway secret. Paste it in the app's Gateway settings instead; the Gateway secret comes from openclaw gateway auth-token --show on the Gateway host.`,secretPlaceholder:`Paste the token or type the password`,runOnHost:`Run on the Gateway host`,connection:{target:`Connecting to {host}`,secretEntered:`secret entered`,noSecret:`no secret`,change:`Change`},showSecret:`Show Gateway secret`,hideSecret:`Hide Gateway secret`,toggleSecretVisibility:`Toggle Gateway secret visibility`,failure:{rawError:`Raw error`,busy:{title:`Gateway busy, retrying…`,summary:`The Gateway is reachable, but the connection could not be opened. This page will retry automatically.`,countdown:`Retrying in {seconds}s…`,retrying:`Retrying now…`},profileUnavailable:{title:`Couldn't verify your account`,summary:`OpenClaw couldn't check your account right now. Please try again shortly.`,stepRetry:`Retry shortly.`,stepAdmin:`If this continues, ask the person who manages OpenClaw to check account access.`},verifiedUserRequired:{title:`Verified identity required`,summary:`This Gateway has named roles enabled. Device and setup tokens cannot identify a person.`,stepIdentity:`Reconnect through the trusted proxy or Tailscale so the Gateway can verify your identity.`,stepSharedSecret:`For trusted local operator access, use the shared Gateway token or password.`},accessDenied:{title:`No access to this Gateway`,summary:`You're signed in, but this Gateway hasn't granted your account access, or that access has ended.`,stepAdmin:`Ask a Gateway administrator to assign your profile a role, or to grant or restore your access.`,stepFindProfile:`Administrators can find your profile with openclaw users list --json, then assign a role with users.setRole.`,stepReconnect:`This page reconnects on its own once access is granted.`},authRequired:{title:`This Gateway expects its token`,passwordTitle:`This Gateway expects its password`,summary:`The Gateway at {host} is reachable, but it needs a matching token or password before this browser can connect.`,stepPaste:`Paste the token from openclaw gateway auth-token --show into Gateway secret.`,stepPassword:`Type the configured Gateway password into Gateway secret.`,stepGenerate:`If no token is configured, run openclaw doctor --generate-gateway-token on the gateway host.`,stepConnect:`Click Connect again after updating the Gateway secret.`},authFailed:{title:`Gateway secret rejected`,summary:`{host} rejected the supplied Gateway secret. Check that it belongs to this Gateway and try again.`,stepDashboard:`Run openclaw dashboard --no-open for a fresh URL, or openclaw gateway auth-token --show to recover the token.`,stepReplace:`Replace the Gateway secret with the token for this Gateway URL.`},bootstrapInvalid:{title:`Pairing link is no longer valid`,summary:`This one-time dashboard link may have expired or already been used. Request a fresh link instead of changing the Gateway secret.`,stepOpen:`Open the fresh link that the command opens or copies in this browser. Pairing links can be used only once and expire after ten minutes.`,stepJson:`If the browser or clipboard is unavailable, run openclaw dashboard --json on the Gateway host and open its browserUrl in this browser.`},trustedProxy:{title:`Proxy authentication required`,summary:`The Gateway is reachable, but it rejected the proxy identity or forwarding information.`,stepSignIn:`Open the configured authenticated proxy or SSO dashboard URL and sign in there, rather than visiting the Gateway directly.`,stepHeaders:`Ask the Gateway administrator to check for missing identity headers and required-header forwarding on WebSocket upgrade requests, and confirm your account is permitted.`,stepNoToken:`A Gateway token cannot replace proxy authentication.`},rateLimited:{title:`Too many failed attempts`,summary:`The Gateway is temporarily limiting authentication attempts for this client.`,stepStop:`Stop retrying from this tab for a moment.`,stepWait:`Wait for the auth limiter to cool down, then reconnect with the corrected credential.`,stepCheckClients:`If this is a shared host, check other clients for repeated bad retries.`},pairing:{title:`Approve this browser`,scopeTitle:`Approve the new access level`,roleTitle:`Approve the new role`,metadataTitle:`Re-approve this browser`,summary:`This browser passed Gateway auth at {host}, but the Gateway has not seen it before. A one-time approval on the Gateway host finishes pairing.`,upgradeSummary:`This browser is already paired with {host}, but it asked for access it was not approved for. Approve the new request on the Gateway host.`,stepDashboard:`Prefer a link? Run openclaw dashboard on the Gateway host and open the one-time URL it prints in this browser.`,stepLatest:`That command prints the exact approve command for the newest pending request; run that one as well.`,stepReconnect:`Once approved, click Connect.`,waiting:`Waiting for approval… this page connects on its own once the request is approved.`,checkNow:`Check now`,declinedTitle:`Access request declined`,declinedSummary:`The operator declined this browser's access request. Automatic retries have stopped. You can request approval again when you are ready.`,expiredTitle:`Access request expired`,expiredSummary:`This browser's access request timed out without approval. Request approval again to continue.`,requestAgain:`Request again`},insecure:{title:`Secure browser context required`,summary:`This page is running over plain HTTP, so the browser cannot create the device identity the Gateway expects.`,stepHttps:`Use HTTPS/Tailscale Serve, or open http://127.0.0.1:18789 on the Gateway host.`,stepAvoidDisable:`Do not use a remote plain-HTTP URL; a token or password cannot replace browser device identity.`},origin:{title:`Browser origin not allowed`,summary:`The Gateway rejected this page origin before accepting the Control UI connection.`,stepAllowedOrigins:`Add this browser origin to gateway.controlUi.allowedOrigins.`,stepFullOrigin:`Use full origins such as http://localhost:5173, not wildcard patterns.`,stepRestart:`Restart or reload the Gateway after changing allowed origins.`},protocol:{title:`Protocol mismatch`,summary:`The served Control UI and the running Gateway do not agree on the supported connection protocol.`,refresh:`Refresh page`,stepDashboard:`Reopen the served dashboard with openclaw dashboard so the UI and Gateway come from the same install.`,stepDevUi:`If using pnpm ui:dev, rebuild or restart the dev UI against the current checkout.`,stepRestart:`Restart the Gateway after updating OpenClaw so it serves the current protocol.`},network:{title:`Gateway unreachable`,summary:`The browser could not reach {host}. Check the address and transport before retrying credentials.`,stepGateway:`Confirm the Gateway is running with openclaw status or openclaw gateway run.`,stepUrl:`Check the Gateway URL and use wss:// when the Gateway is behind HTTPS/Tailscale Serve.`,stepDashboard:`Reopen the dashboard with openclaw dashboard --no-open to recopy the current URL and auth details.`}}}},V=Object.assign(()=>{Object.assign(te.login,B.login)},{catalog:B})})))()}function U(e){let t=e.trim(),n=t.toLowerCase().startsWith(`oc-pair://`)?t.slice(10):t;if(!/^[A-Za-z0-9_-]+$/u.test(n))return`unknown`;try{let e=r(n.replace(/-/g,`+`).replace(/_/g,`/`)),t=JSON.parse(new TextDecoder().decode(e));return typeof t==`object`&&t&&`url`in t&&typeof t.url==`string`&&t.url.trim()!==``&&`bootstrapToken`in t&&typeof t.bootstrapToken==`string`&&t.bootstrapToken.trim()!==``?`setup-code`:`unknown`}catch{return`unknown`}}function W(){return(W=e((()=>{})))()}function ue(e){return e===j.AUTH_PASSWORD_MISSING||e===j.AUTH_PASSWORD_MISMATCH||e===j.AUTH_PASSWORD_NOT_CONFIGURED}function G(e,t){let n=t.docsHref??`https://docs.openclaw.ai/web/dashboard`,r=u(e);return{kind:t.kind,placement:t.placement??`status`,tone:t.tone??`danger`,field:t.field,title:m(t.titleKey,t.stepParams),summary:t.summaryKey?m(t.summaryKey,t.stepParams):r,primaryCommand:t.primaryCommand,refreshAction:t.refreshAction,steps:t.stepKeys.map(e=>typeof e==`string`?{text:m(e,t.stepParams),commands:[]}:{text:m(e.key,t.stepParams),commands:e.commands}),docsHref:n,rawError:r}}function K(e){if(e.connected||!e.lastError)return null;let t=e.lastError,n=e.lastErrorCode??null,r=N(t),a=l(e.gatewayUrl);if(n===`GATEWAY_BUSY`&&e.reconnectPending)return G(t,{kind:`busy`,tone:`pending`,titleKey:`login.failure.busy.title`,summaryKey:`login.failure.busy.summary`,stepKeys:[]});if(n===j.AUTH_BOOTSTRAP_TOKEN_INVALID)return G(t,{kind:`bootstrap-invalid`,tone:`warn`,titleKey:`login.failure.bootstrapInvalid.title`,summaryKey:`login.failure.bootstrapInvalid.summary`,primaryCommand:`openclaw dashboard`,stepKeys:[`login.failure.bootstrapInvalid.stepOpen`,{key:`login.failure.bootstrapInvalid.stepJson`,commands:[`openclaw dashboard --json`]}],docsHref:`https://docs.openclaw.ai/cli/dashboard`});if(n===j.AUTHENTICATED_PROFILE_UNAVAILABLE)return G(t,{kind:`profile-unavailable`,tone:`pending`,titleKey:`login.failure.profileUnavailable.title`,summaryKey:`login.failure.profileUnavailable.summary`,stepKeys:[`login.failure.profileUnavailable.stepRetry`,`login.failure.profileUnavailable.stepAdmin`],docsHref:`https://docs.openclaw.ai/concepts/user-model#gateway-profile-and-github-credit`});if(n===j.AUTH_VERIFIED_USER_REQUIRED)return G(t,{kind:`verified-user-required`,titleKey:`login.failure.verifiedUserRequired.title`,summaryKey:`login.failure.verifiedUserRequired.summary`,stepKeys:[`login.failure.verifiedUserRequired.stepIdentity`,`login.failure.verifiedUserRequired.stepSharedSecret`],docsHref:`https://docs.openclaw.ai/gateway/operator-scopes`});if(n===j.OPERATOR_ACCESS_DENIED)return G(t,{kind:`access-denied`,tone:`warn`,titleKey:`login.failure.accessDenied.title`,summaryKey:`login.failure.accessDenied.summary`,stepKeys:[`login.failure.accessDenied.stepAdmin`,{key:`login.failure.accessDenied.stepFindProfile`,commands:[`openclaw users list --json`]},`login.failure.accessDenied.stepReconnect`],docsHref:`https://docs.openclaw.ai/gateway/operator-scopes#named-operator-roles`});if(n===j.CONTROL_UI_BUILD_MISMATCH)return G(t,{kind:`build-mismatch`,tone:`pending`,titleKey:`chat.sidebar.serverUpdatedTitle`,summaryKey:`chat.sidebar.serverUpdatedRefresh`,refreshAction:{label:m(`login.failure.protocol.refresh`)},stepKeys:[],docsHref:`https://docs.openclaw.ai/web/control-ui`});if(n===j.PAIRING_REJECTED||n===j.PAIRING_EXPIRED){let e=n===j.PAIRING_REJECTED;return G(t,{kind:e?`pairing-rejected`:`pairing-expired`,tone:`warn`,titleKey:e?`login.failure.pairing.declinedTitle`:`login.failure.pairing.expiredTitle`,summaryKey:e?`login.failure.pairing.declinedSummary`:`login.failure.pairing.expiredSummary`,stepKeys:[],docsHref:`https://docs.openclaw.ai/web/control-ui/connect-and-pair`})}let s=i(!1,t,n);if(s)return G(t,{kind:`pairing-required`,tone:`pending`,docsHref:`https://docs.openclaw.ai/web/control-ui#device-pairing-first-connection`,titleKey:s.kind===`scope-upgrade-pending`?`login.failure.pairing.scopeTitle`:s.kind===`role-upgrade-pending`?`login.failure.pairing.roleTitle`:s.kind===`metadata-upgrade-pending`?`login.failure.pairing.metadataTitle`:`login.failure.pairing.title`,summaryKey:s.kind===`pairing-required`?`login.failure.pairing.summary`:`login.failure.pairing.upgradeSummary`,primaryCommand:s.requestId?`openclaw devices approve ${s.requestId}`:`openclaw devices approve --latest`,stepKeys:[...s.requestId?[]:[`login.failure.pairing.stepLatest`],{key:`login.failure.pairing.stepDashboard`,commands:[`openclaw dashboard`]},...e.reconnectPending?[]:[`login.failure.pairing.stepReconnect`]],stepParams:{host:a}});if(n===j.AUTH_RATE_LIMITED||r.includes(`too many failed authentication attempts`)||r.includes(`rate limit`))return G(t,{kind:`auth-rate-limited`,tone:`warn`,titleKey:`login.failure.rateLimited.title`,summaryKey:`login.failure.rateLimited.summary`,stepKeys:[`login.failure.rateLimited.stepStop`,`login.failure.rateLimited.stepWait`,`login.failure.rateLimited.stepCheckClients`]});if(o(!1,t,n))return G(t,{kind:`insecure-context`,docsHref:`https://docs.openclaw.ai/web/control-ui#insecure-http`,titleKey:`login.failure.insecure.title`,summaryKey:`login.failure.insecure.summary`,stepKeys:[`login.failure.insecure.stepHttps`,`login.failure.insecure.stepAvoidDisable`]});if(n===j.CONTROL_UI_ORIGIN_NOT_ALLOWED||r.includes(`origin not allowed`))return G(t,{kind:`origin-not-allowed`,docsHref:`https://docs.openclaw.ai/web/control-ui/development#debugging%2Ftesting%3A-dev-server-%2B-remote-gateway`,titleKey:`login.failure.origin.title`,summaryKey:`login.failure.origin.summary`,stepKeys:[`login.failure.origin.stepAllowedOrigins`,`login.failure.origin.stepFullOrigin`,`login.failure.origin.stepRestart`]});if(r.includes(`protocol mismatch`))return G(t,{kind:`protocol-mismatch`,docsHref:`https://docs.openclaw.ai/web/control-ui/development#debugging%2Ftesting%3A-dev-server-%2B-remote-gateway`,titleKey:`login.failure.protocol.title`,summaryKey:`login.failure.protocol.summary`,refreshAction:{label:m(`login.failure.protocol.refresh`)},stepKeys:[{key:`login.failure.protocol.stepDashboard`,commands:[`openclaw dashboard`]},{key:`login.failure.protocol.stepDevUi`,commands:[`pnpm ui:dev`]},`login.failure.protocol.stepRestart`]});let c=ee(e),u=ue(n);if(c===`trusted-proxy`)return G(t,{kind:`trusted-proxy`,titleKey:`login.failure.trustedProxy.title`,summaryKey:`login.failure.trustedProxy.summary`,stepKeys:[`login.failure.trustedProxy.stepSignIn`,`login.failure.trustedProxy.stepHeaders`,`login.failure.trustedProxy.stepNoToken`],docsHref:`https://docs.openclaw.ai/gateway/trusted-proxy-auth`});if(c===`required`||c===`failed`){let r=c===`required`;return G(t,{kind:r?`auth-required`:`auth-failed`,placement:`form`,tone:r?`warn`:`danger`,field:`credential`,titleKey:u?`login.failure.authRequired.passwordTitle`:r||n===j.AUTH_TOKEN_MISMATCH?`login.failure.authRequired.title`:`login.failure.authFailed.title`,summaryKey:r?`login.failure.authRequired.summary`:(n===j.AUTH_TOKEN_MISMATCH||n===j.AUTH_PASSWORD_MISMATCH)&&U(e.secret??``)===`setup-code`?`login.setupCodeHint`:`login.failure.authFailed.summary`,stepKeys:u?[`login.failure.authRequired.stepPassword`,`login.failure.authRequired.stepConnect`]:r?[{key:`login.failure.authRequired.stepPaste`,commands:[`openclaw gateway auth-token --show`]},{key:`login.failure.authRequired.stepGenerate`,commands:[`openclaw doctor --generate-gateway-token`]},`login.failure.authRequired.stepConnect`]:[{key:`login.failure.authFailed.stepDashboard`,commands:[`openclaw dashboard --no-open`,`openclaw gateway auth-token --show`]},`login.failure.authFailed.stepReplace`],stepParams:{host:a}})}return G(t,{kind:`network`,placement:`form`,tone:`warn`,field:`url`,titleKey:`login.failure.network.title`,summaryKey:`login.failure.network.summary`,stepKeys:[{key:`login.failure.network.stepGateway`,commands:[`openclaw status`,`openclaw gateway run`]},`login.failure.network.stepUrl`,{key:`login.failure.network.stepDashboard`,commands:[`openclaw dashboard --no-open`]}],stepParams:{host:a}})}function q(){return(q=e((()=>{M(),c(),d(),f(),W()})))()}var de=t({});function fe({text:e,commands:t}){let n=new Set(t),r=[...n].map(t=>[t,e.indexOf(t)]).toSorted(([e,t],[n,r])=>t-r||n.length-e.length),i=[],a=0;for(let[t,o]of r)o<a||(i.push(e.slice(a,o),P(t)),n.delete(t),a=o+t.length);i.push(e.slice(a));for(let e of n)i.push(` `,P(e));return i}function J(e){return e.steps.length===0?w:T`
    <ol class="login-gate__failure-steps">
      ${e.steps.map(e=>T`<li>${fe(e)}</li>`)}
    </ol>
  `}function Y(e){return T`
    <footer class="login-gate__foot">
      <details class="login-gate__failure-detail">
        <summary>${m(`login.failure.rawError`)}</summary>
        <div class="login-gate__failure-raw mono">${e.rawError}</div>
      </details>
      <a
        class="session-link login-gate__failure-docs"
        href=${e.docsHref}
        target=${O}
        rel=${E()}
        >${m(`common.learnMore`)}</a
      >
    </footer>
  `}function pe(e,t){return e.refreshAction?T`
    <button
      type="button"
      class="btn primary login-gate__failure-refresh"
      ?disabled=${t.state===`pending`}
      @click=${t.onRefresh}
    >
      ${t.state===`pending`?m(`common.refreshing`):t.state===`failed`?m(`common.retry`):e.refreshAction.label}
    </button>
  `:w}function X(e){let{props:t,feedback:n}=e,r=U(t.secret)===`setup-code`,i=n?.placement===`form`?n.field:void 0,a=e=>{e.key===`Enter`&&t.onConnect()};return T`
    <div class="login-gate__form">
      <div class="field">
        <label for="login-gate-url">${m(`login.gatewayUrl`)}</label>
        <input
          id="login-gate-url"
          inputmode="url"
          autocapitalize="none"
          autocorrect="off"
          autocomplete="off"
          spellcheck="false"
          enterkeyhint="go"
          aria-invalid=${i===`url`?`true`:w}
          .value=${t.gatewayUrl}
          @input=${e=>{t.onGatewayUrlChange(e.target.value)}}
          @keydown=${a}
          placeholder="wss://gateway.example:443"
        />
      </div>
      <div class="field">
        <label for="login-gate-credential">${m(`login.secret`)}</label>
        <span class="settings-secret">
          <input
            id="login-gate-credential"
            type=${t.showGatewaySecret?`text`:`password`}
            autocomplete="off"
            spellcheck="false"
            enterkeyhint="go"
            aria-invalid=${i===`credential`?`true`:w}
            aria-describedby=${r?`login-gate-secret-hint`:w}
            .value=${t.secret}
            @input=${e=>{t.onSecretChange(e.target.value)}}
            @keydown=${a}
            placeholder=${m(`login.secretPlaceholder`)}
          />
          <openclaw-tooltip
            .content=${m(t.showGatewaySecret?`login.hideSecret`:`login.showSecret`)}
          >
            <button
              type="button"
              class="settings-secret__toggle"
              aria-label=${m(`login.toggleSecretVisibility`)}
              aria-pressed=${t.showGatewaySecret}
              @click=${t.onToggleGatewaySecret}
            >
              ${t.showGatewaySecret?S.eye:S.eyeOff}
            </button>
          </openclaw-tooltip>
        </span>
        ${r?T`<p id="login-gate-secret-hint" class="muted" role="status">${m(`login.setupCodeHint`)}</p>`:w}
      </div>
      ${e.withSubmit?T`
              <button class="btn primary login-gate__connect" @click=${t.onConnect}>
                ${m(`common.connect`)}
              </button>
            `:w}
    </div>
  `}function me(e){let t=l(e.gatewayUrl),n=e.secret.trim()?m(`login.connection.secretEntered`):m(`login.connection.noSecret`);return T`
    <summary>
      <span class="login-gate__connection-target">
        ${S.server}
        <span>${m(`login.connection.target`,{host:t})}</span>
      </span>
      <span class="login-gate__connection-cred">· ${n}</span>
      <span class="login-gate__connection-change">${m(`login.connection.change`)}</span>
    </summary>
  `}function he(e){let{props:t,feedback:n}=e,r=n.kind===`pairing-required`&&t.reconnectPending,i=Math.max(0,Math.ceil(((t.reconnectAt??0)-Date.now())/1e3));return T`
    <section
      class="login-gate__body login-gate__failure"
      role="status"
      aria-live="polite"
      data-kind=${n.kind}
      data-tone=${n.tone}
    >
      <div class="login-gate__status-head">
        <span class="login-gate__status-icon" aria-hidden="true">${Z[n.tone]}</span>
        <div class="login-gate__status-text">
          <h1 class="login-gate__failure-title">${n.title}</h1>
          <p class="login-gate__failure-summary">${n.summary}</p>
        </div>
      </div>
      ${n.primaryCommand?T`
              <div class="login-gate__hero">
                <span class="login-gate__hero-label">${m(`login.runOnHost`)}</span>
                ${P(n.primaryCommand,`hero`)}
              </div>
            `:w}
      ${J(n)}
      ${n.kind===`busy`?T`
              <p class="login-gate__retry" aria-live="off">
                ${i>0?m(`login.failure.busy.countdown`,{seconds:String(i)}):m(`login.failure.busy.retrying`)}
              </p>
            `:w}
      ${r?T`<p class="login-gate__failure-summary">
              <span class="session-run-spinner" aria-hidden="true"></span>
              ${m(`login.failure.pairing.waiting`)}
            </p>`:w}
      <div class="login-gate__actions">
        ${pe(n,e.refreshAction)}
        <button class="btn login-gate__connect" @click=${t.onConnect}>
          ${n.kind===`pairing-rejected`||n.kind===`pairing-expired`?m(`login.failure.pairing.requestAgain`):m(r?`login.failure.pairing.checkNow`:`common.connect`)}
        </button>
      </div>
      <details class="login-gate__connection">
        ${me(t)} ${X({...e,withSubmit:!1})}
      </details>
      ${Y(n)}
    </section>
  `}function ge(e){let{feedback:t}=e;return T`
    <section
      class=${t?`login-gate__body login-gate__failure`:`login-gate__body`}
      role=${t?`status`:w}
      aria-live=${t?`polite`:w}
      data-kind=${t?.kind??w}
      data-tone=${t?.tone??w}
    >
      <div class="login-gate__status-text">
        <h1 class=${t?`login-gate__failure-title`:`login-gate__heading`}>
          ${t?.title??m(`login.heading`)}
        </h1>
        <p class=${t?`login-gate__failure-summary`:`login-gate__lede`}>
          ${t?.summary??m(`login.lede`)}
        </p>
      </div>
      ${X({...e,withSubmit:!0})}
      ${t?T`${J(t)} ${Y(t)}`:T`
              <details class="login-gate__help">
                <summary class="login-gate__help-title">${m(`connection.help.title`)}</summary>
                <ol class="login-gate__steps">
                  <li>
                    ${m(`connection.help.step1`)}${P(`openclaw gateway run`)}
                  </li>
                  <li>
                    ${m(`connection.help.step2`)} ${P(`openclaw dashboard`)}
                  </li>
                  <li>${m(`connection.help.step3`)}</li>
                </ol>
                <div class="login-gate__docs">
                  <a
                    class="session-link"
                    href="https://docs.openclaw.ai/web/dashboard"
                    target=${O}
                    rel=${E()}
                    >${m(`connection.help.docsLink`)}</a
                  >
                </div>
              </details>
            `}
    </section>
  `}function _e(e,t){let n=k(e.resourceBasePath),r=g(`favicon.svg`,n),i=K(e),a=i?.placement===`status`?he({props:e,feedback:i,refreshAction:t}):ge({props:e,feedback:i});return T`
    <div
      class="login-gate"
      @mousedown=${e=>{e.target===e.currentTarget&&C(e)}}
    >
      <openclaw-toast-host></openclaw-toast-host>
      <div class="login-gate__card" data-mode=${i?.placement??`form`}>
        <header class="login-gate__brand">
          ${(e.branding?.brandIcon??(e.mascot===`none`?`mark`:`claw`))===`claw`?T`<img class="login-gate__logo" src=${r} alt="" />`:T`<span class="login-gate__logo login-gate__logo--neutral" aria-hidden="true"
                  >${F(S.mark,e.branding)}</span
                >`}
          <span class="login-gate__brand-name"
            >${e.branding?.brandName??ae().brandName}</span
          >
        </header>
        ${a}
        ${e.onOpenGatewaySettings?T`<footer class="login-gate__recovery">
                <button type="button" class="btn btn--ghost" @click=${e.onOpenGatewaySettings}>
                  ${m(`login.gatewaySettings`)}
                </button>
              </footer>`:w}
      </div>
    </div>
  `}var Z,Q;function $(){return($=e((()=>{oe(),se(),y(),v(),h(),_(),ne(),b(),c(),H(),p(),D(),f(),W(),s(),R(),L(),ie(),q(),I(),V(),Z={pending:S.shieldEllipsis,warn:S.clock,danger:S.shieldAlert},Q=class extends n{constructor(...e){super(...e),this.refreshState=`idle`,this.retryCountdown=new z(this,1e3,()=>this.requestUpdate(),!1,`visible`)}ownsRefresh(e){let t=this.props;return this.refreshAttempt===e&&this.isConnected&&t!==void 0&&!t.connected&&!t.reconnectPending&&[`lastError`,`lastErrorCode`,`lastErrorAuthReason`,`gatewayUrl`,`resourceBasePath`,`secret`].every(n=>t[n]===e.props[n])}cancelRefresh(){this.refreshAttempt=void 0,this.refreshState=`idle`}willUpdate(){this.props?.reconnectPending&&this.props.lastErrorCode===`GATEWAY_BUSY`&&(this.props.reconnectAt??0)>Date.now()?this.retryCountdown.start():this.retryCountdown.stop(),this.refreshAttempt&&!this.ownsRefresh(this.refreshAttempt)&&this.cancelRefresh()}disconnectedCallback(){this.cancelRefresh(),super.disconnectedCallback()}async refreshPage(){let e=this.props;if(!e||this.refreshAttempt||this.refreshState===`pending`||!this.isConnected||e.connected||e.reconnectPending||!K(e)?.refreshAction||!re(!0))return;let t={props:e};this.refreshAttempt=t,this.refreshState=`pending`;try{let e=await x({canReload:()=>this.ownsRefresh(t)});this.ownsRefresh(t)&&!e&&(this.refreshState=`failed`)}catch{this.ownsRefresh(t)&&(this.refreshState=`failed`)}finally{this.refreshAttempt===t&&(this.ownsRefresh(t)?this.refreshAttempt=void 0:this.cancelRefresh())}}render(){let e=this.props;return e?_e({...e,onConnect:()=>{this.cancelRefresh(),e.onConnect()},onGatewayUrlChange:t=>{this.cancelRefresh(),e.onGatewayUrlChange(t)},onSecretChange:t=>{this.cancelRefresh(),e.onSecretChange(t)}},{state:this.refreshState,onRefresh:()=>void this.refreshPage()}):w}},A([ce({attribute:!1})],Q.prototype,`props`,void 0),A([le()],Q.prototype,`refreshState`,void 0),customElements.get(`openclaw-login-gate`)||customElements.define(`openclaw-login-gate`,Q)})))()}export{H as a,W as i,de as n,V as o,U as r,$ as t};