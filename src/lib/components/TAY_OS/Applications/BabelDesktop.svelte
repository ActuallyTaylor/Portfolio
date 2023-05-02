<script lang="ts">
    import FileArea from "$lib/components/TAY_OS/files/FileArea.svelte"
    import type { TaylorOS } from "$lib/models/TAY_OS/TaylorOS"
    import { TayFile } from "$lib/models/TAY_OS/FileSystem"
    import { ApplicationDatabase } from "$lib/models/TAY_OS/ApplicationDatabase"
    import { createEventDispatcher } from 'svelte'
    import FileIcon from "$lib/components/TAY_OS/files/FileIcon.svelte"

    const dispatch = createEventDispatcher()

    export let screen: TaylorOS
    export let innerWidth: number = 0
    export let innerHeight: number = 0

    export let focusedFile: (TayFile | null) = null

    function openWindow(event: CustomEvent) {
        dispatch("openWindow", {
            file: event.detail.file
        })
    }

    function selectFile(event: CustomEvent) {
        focusedFile = event.detail.file
    }

    function deselectFile() {
        focusedFile = null
    }
</script>

<style>
    .background {
        position: absolute;
        z-index: -100;
        height: 100%;
        width: 100%;
    }
</style>

<svelte:window bind:innerWidth bind:innerHeight/>

<img style="width:{innerWidth}px;height:{innerHeight - 30}px;" class="background" src="{screen.background}" alt="Desktop Background">
<FileArea direction={"flex-end"}>
    <FileIcon file={new TayFile("TaylorOS", "A new way to look through my projects!", "TaylorOS", ApplicationDatabase.babel, "taybot.svg")} focusedFile={focusedFile} on:openWindow={openWindow} on:selectFile={selectFile} on:deselectFile={deselectFile}/>
</FileArea>