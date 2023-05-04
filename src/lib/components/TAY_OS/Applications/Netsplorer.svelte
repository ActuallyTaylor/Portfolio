<script lang="ts">
    import type { WindowReference } from "$lib/models/TAY_OS/WindowReference"
    import Window from "$lib/components/TAY_OS/window/Window.svelte"
    import type { TaylorOS } from "$lib/models/TAY_OS/TaylorOS"
    import { createEventDispatcher, onMount } from 'svelte'
    import { WindowPosition } from "$lib/models/TAY_OS/WindowPosition"
    import { TayFS_Datatype, type TayFS_File } from "$lib/models/TAY_OS/FileSystem";

    const dispatch = createEventDispatcher()

    export let reference: WindowReference
    export let os: TaylorOS
    export let url: string = "./"

    export let sourceFile = reference.sourceFile as TayFS_File

    export let innerWidth: number = 0
    export let innerHeight: number = 0

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

    function openWindow(event: CustomEvent) {
        dispatch("openWindow", {
            file: os.fileSystem.root()
        })
        dispatch("openWindow", {
            file: event.detail.file
        })
    }

    function systemApp(event: CustomEvent) {
        os.addAlert(event.detail.alert)
    }

    onMount(() => {
        if (sourceFile.dataType == TayFS_Datatype.url) {
            url = sourceFile.data ?? "./"
        }

        if (reference.name != "Netsplorer") {
            reference.name = "Netsplorer | " + reference.name
        }
    })
</script>

<svelte:window bind:innerWidth bind:innerHeight/>

<Window on:focusWindow={focusWindow} on:closeWindow={closeWindow} reference={reference} windowPosition={
    new WindowPosition(innerWidth - (innerWidth / 3), innerHeight - (innerHeight / 3), innerHeight / 2 - 250, innerWidth / 2 - 250, true, false, true)}
    isFocused={os.focusedWindow == reference}>
    <div class="searchbar">
        <p><b>Search:</b></p>
        <input bind:value={url}>
    </div>
    <iframe class="browserWindow"
        title="Netsplorer"
        src={url}>
    </iframe>
</Window>

<style>
    .browserWindow {
        width: 100%;   
        height: 100%;
    }

    .searchbar {
        height: 40px;
        width: 100%;
        color: white;
        padding: 0px;
        margin: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .searchbar p {
        margin-right: 20px;
    }

    .searchbar input {
        width: 60%;
    }
</style>