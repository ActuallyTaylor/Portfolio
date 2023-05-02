<script lang="ts">
    import type { WindowReference } from "$lib/models/TAY_OS/WindowReference";
    import Window from "$lib/components/TAY_OS/window/Window.svelte"
    import FileArea from "$lib/components/TAY_OS/files/FileArea.svelte";
    import FileIcon from "$lib/components/TAY_OS/files/FileIcon.svelte";
    import type { TaylorOS } from "$lib/models/TAY_OS/TaylorOS";
    import { TayFile } from "$lib/models/TAY_OS/TayFile";
    import { ApplicationDatabase } from "$lib/models/TAY_OS/ApplicationDatabase";
    import { createEventDispatcher } from 'svelte';
    import { WindowPosition } from "$lib/models/TAY_OS/WindowPosition";

    const dispatch = createEventDispatcher();

    export let reference: WindowReference
    export let screen: TaylorOS

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
            file: event.detail.file
        })
    }

    function selectFile(event: CustomEvent) {
        dispatch("selectFile", {
            file: event.detail.file
        })
    }

    function deselectFile(event: CustomEvent) {
        dispatch("deselectFile", {
            file: event.detail.file
        })
    }
</script>

<Window on:focusWindow={focusWindow} on:closeWindow={closeWindow} reference={reference} windowPosition={
    new WindowPosition(500, 500, innerHeight / 2 - 250, innerWidth / 2 - 250, true, false, true)}
    isFocused={screen.focusedWindow == reference}>
    <div class="HorizontalStack">
        <div class="FileSideBar VerticalStack">
            <h1>{screen.focusedFile?.name ?? "TaylorOS"}</h1>
            <hr>
            <p>{screen.focusedFile?.description ?? "A new way to look through my projects!"}</p>
        </div>
        <FileArea>
            <FileIcon screen={screen} file={new TayFile("My Projects", "View all of my different projects!", "MY_PROJECTS", ApplicationDatabase.babel)} on:openWindow={openWindow} on:selectFile={selectFile} on:deselectFile={deselectFile}/>
            <FileIcon screen={screen} file={new TayFile("Photography", "See my photography in action!", "PHOTOGRAPHY", ApplicationDatabase.babel)} on:openWindow={openWindow} on:selectFile={selectFile}/>
            <FileIcon screen={screen} file={new TayFile("Blogs", "Read my blog!", "BLOG", ApplicationDatabase.babel)} on:openWindow={openWindow} on:selectFile={selectFile}/>
            <FileIcon screen={screen} file={new TayFile("Passes", "Grab some of my World Wide Developer Conference wallet passes!", "WALLET", ApplicationDatabase.babel)} on:openWindow={openWindow} on:selectFile={selectFile}/>
        </FileArea>        
    </div>
</Window>
