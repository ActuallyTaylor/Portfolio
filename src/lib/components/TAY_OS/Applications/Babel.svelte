<script lang="ts">
    import type { WindowReference } from "$lib/models/TAY_OS/WindowReference"
    import Window from "$lib/components/TAY_OS/window/Window.svelte"
    import FileArea from "$lib/components/TAY_OS/files/FileArea.svelte"
    import FileIcon from "$lib/components/TAY_OS/files/FileIcon.svelte"
    import type { TaylorOS } from "$lib/models/TAY_OS/TaylorOS"
    import { TayFS_Filetype, TayFS_Directory, type TayFS_Unit } from "$lib/models/TAY_OS/FileSystem";
    import { createEventDispatcher } from 'svelte'
    import { WindowPosition } from "$lib/models/TAY_OS/WindowPosition"

    const dispatch = createEventDispatcher()

    export let reference: WindowReference
    export let os: TaylorOS

    export let focusedFile: (TayFS_Unit | null) = null
    export let directory: (TayFS_Directory | null) = reference.sourceFile as TayFS_Directory

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
        // Check to see if we are opening Babel itself
        if (event.detail.file.name == "Babel" && event.detail.file.fileType == TayFS_Filetype.program) {
            focusedFile = null
            dispatch("openWindow", {
                file: os.fileSystem.root()
            })
        } else {
            focusedFile = null
            dispatch("openWindow", {
                file: event.detail.file
            })
        }
    }

    function selectFile(event: CustomEvent) {
        focusedFile = event.detail.file
    }

    function deselectFile() {
        focusedFile = null
    }

    function systemApp(event: CustomEvent) {
        os.addAlert(event.detail.alert)
    }
</script>

<Window on:focusWindow={focusWindow} on:closeWindow={closeWindow} reference={reference} windowPosition={
    new WindowPosition(500, 500, innerHeight / 2 - 250, innerWidth / 2 - 250, true, false, true)}
    isFocused={os.focusedWindow == reference}>
    <div class="HorizontalStack">
        <div class="FileSideBar VerticalStack">
            <h2>{focusedFile?.name ?? directory?.name ?? "Babel"}</h2>
            <hr>
            <p>{focusedFile?.description ?? directory?.description ?? "Select a file to view it's properties"}</p>
        </div>

        {#if directory != null && reference.sourceFile?.fileType == TayFS_Filetype.directory }
        <FileArea>
            {#each directory.units as file }
                <FileIcon file={file} focusedFile={focusedFile} on:openWindow={openWindow} on:selectFile={selectFile} on:deselectFile={deselectFile} on:systemApp={systemApp}/>
            {/each}
        </FileArea>   
        {:else}
        <p>Babel does not support opening files directly.</p>
        {/if}
    </div>
</Window>

<style>
    .FileSideBar {
        min-width: 30%;
        max-width: 30%;
        margin-left: 10px;
        margin-right: 10px;
        overflow: hidden;
        word-wrap: break-word;
    }
</style>    