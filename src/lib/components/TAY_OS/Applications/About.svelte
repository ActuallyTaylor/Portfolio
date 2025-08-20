<script lang="ts">
    import type { WindowReference } from "$lib/models/TAY_OS/WindowReference"
    import Window from "$lib/components/TAY_OS/window/Window.svelte"
    import AboutTaylorOS from "$lib/components/TAY_OS/Applications/AboutTaylorOS.svelte"
    import AboutBuilder from "$lib/components/TAY_OS/Applications/AboutBuilder.svelte"
    import { WindowPosition } from "$lib/models/TAY_OS/WindowPosition"
    import type { TaylorOS } from "$lib/models/TAY_OS/TaylorOS"
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()

    export let reference: WindowReference
    export let os: TaylorOS
    console.log(reference)

    function closeWindow(event: CustomEvent) {
        dispatch("closeWindow", {
            reference: event.detail.reference
        })
    }

    function focusWindow(event: CustomEvent) {
        dispatch("focusWindow", {
            reference: event.detail.reference
        })
    }
</script>

{#if reference.name == "About TaylorOS"}
<Window on:focusWindow={focusWindow} on:closeWindow={closeWindow} reference={reference} windowPosition={
    new WindowPosition(375, 225, innerHeight / 2 - 112.5, innerWidth / 2 - 187.5, true, false, false)}
    isFocused={os.focusedWindow == reference}>
    <AboutTaylorOS/>
</Window>
{:else}
<Window on:focusWindow={focusWindow} on:closeWindow={closeWindow} reference={reference} windowPosition={
    new WindowPosition(475, 250, innerHeight / 2 - 125, innerWidth / 2 - 225, true, false, false)}
    isFocused={os.focusedWindow == reference}>
    <AboutBuilder application={os.getApplicationByName(reference.name.replace("About ", ""))}/>
</Window>
{/if}

