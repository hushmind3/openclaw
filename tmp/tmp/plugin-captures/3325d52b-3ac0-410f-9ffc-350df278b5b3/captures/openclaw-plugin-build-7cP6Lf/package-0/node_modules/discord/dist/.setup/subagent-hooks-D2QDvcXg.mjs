import { t as __exportAll } from "./rolldown-runtime-B4FMCO8f.mjs";
import { x as ensureBindingsLoadedAsync } from "./thread-bindings.session-updates-DGSljVf6.mjs";
import { o as listThreadBindingsBySessionKey, u as unbindThreadBindingsBySessionKeyAsync } from "./thread-bindings-Blhv7XV8.mjs";
import { normalizeOptionalLowercaseString, normalizeOptionalStringifiedId } from "openclaw/plugin-sdk/string-coerce-runtime";
//#region extensions/discord/src/subagent-hooks.ts
var subagent_hooks_exports = /* @__PURE__ */ __exportAll({
	handleDiscordSubagentDeliveryTarget: () => handleDiscordSubagentDeliveryTarget,
	handleDiscordSubagentDeliveryTargetAsync: () => handleDiscordSubagentDeliveryTargetAsync,
	handleDiscordSubagentEnded: () => handleDiscordSubagentEnded
});
async function handleDiscordSubagentEnded(event) {
	const targetKind = normalizeOptionalLowercaseString(event.targetKind);
	await unbindThreadBindingsBySessionKeyAsync({
		targetSessionKey: event.targetSessionKey,
		accountId: event.accountId,
		targetKind: targetKind === "subagent" || targetKind === "acp" ? targetKind : void 0,
		reason: event.reason,
		sendFarewell: event.sendFarewell
	});
}
function shouldResolveDiscordDeliveryTarget(event) {
	return Boolean(event.expectsCompletionMessage && normalizeOptionalLowercaseString(event.requesterOrigin?.channel) === "discord");
}
function handleDiscordSubagentDeliveryTarget(event) {
	return shouldResolveDiscordDeliveryTarget(event) ? resolveDiscordDeliveryTarget(event) : void 0;
}
async function handleDiscordSubagentDeliveryTargetAsync(event) {
	if (!shouldResolveDiscordDeliveryTarget(event)) return;
	await ensureBindingsLoadedAsync();
	return resolveDiscordDeliveryTarget(event);
}
function resolveDiscordDeliveryTarget(event) {
	const requesterAccountId = event.requesterOrigin?.accountId?.trim();
	const requesterThreadId = normalizeOptionalStringifiedId(event.requesterOrigin?.threadId);
	const bindings = listThreadBindingsBySessionKey({
		targetSessionKey: event.childSessionKey,
		...requesterAccountId ? { accountId: requesterAccountId } : {},
		targetKind: "subagent"
	});
	const binding = (requesterThreadId ? bindings.find((entry) => entry.threadId === requesterThreadId && (!requesterAccountId || entry.accountId === requesterAccountId)) : void 0) ?? (bindings.length === 1 ? bindings[0] : void 0);
	if (!binding) return;
	return { origin: {
		channel: "discord",
		accountId: binding.accountId,
		to: `channel:${binding.threadId}`,
		threadId: binding.threadId
	} };
}
//#endregion
export { handleDiscordSubagentEnded as n, subagent_hooks_exports as r, handleDiscordSubagentDeliveryTarget as t };
