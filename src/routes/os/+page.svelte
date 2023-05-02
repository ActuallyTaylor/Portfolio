<script lang="ts">
    import Window from "$lib/components/TAY_OS/window/Window.svelte"
    import File from "$lib/components/TAY_OS/files/FileIcon.svelte";
    import FileArea from "$lib/components/TAY_OS/files/FileArea.svelte";
    import { TaylorOS } from "$lib/models/TAY_OS/TaylorOS";
    import { WindowPosition } from "$lib/models/TAY_OS/WindowPosition";
    import { WindowReference } from "$lib/models/TAY_OS/WindowReference";
    import FileIcon from "$lib/components/TAY_OS/files/FileIcon.svelte";
    import { TayFile } from "$lib/models/TAY_OS/TayFile";
    import MenuBar from "$lib/components/TAY_OS/menubar/MenuBar.svelte";
    import AboutTaylorOS from "$lib/components/TAY_OS/Applications/AboutTaylorOS.svelte";
    import AboutBuilder from "$lib/components/TAY_OS/Applications/AboutBuilder.svelte";
    import { ApplicationDatabase } from "$lib/models/TAY_OS/ApplicationDatabase";
    import Babel from "$lib/components/TAY_OS/Applications/Babel.svelte";

    export let screen: TaylorOS = new TaylorOS();
    export let innerWidth: number;
    export let innerHeight: number;

    function openWindow(event: CustomEvent) {
        if (event.detail.file != null) {
            screen.openWindows.push(new WindowReference(event.detail.file.name, screen.id, event.detail.file.handlingApplication, event.detail.file))
        } else {
            screen.openWindows.push(new WindowReference(event.detail.name, screen.id, ApplicationDatabase.about, null))
        }
        screen.focusedWindow = screen.openWindows[screen.openWindows.length - 1]
        screen.id += 1;
        screen.openWindows = screen.openWindows
    }

    function closeWindow(event: CustomEvent) {
        let window = event.detail.reference

        const index = screen.openWindows.findIndex(wind => {
            return wind.id == window.id
        })

        if (index > -1) {
            screen.openWindows.splice(index, 1);
        }
        screen.openWindows = screen.openWindows;
    }

    function selectFile(event: CustomEvent) {
        screen.focusedFile = event.detail.file;
    }

    function deselectFile(event: CustomEvent) {
        screen.focusedFile = null;
    }

    function focusWindow(event: CustomEvent) {
        let window = event.detail.reference

        const index = screen.openWindows.findIndex(wind => {
            return wind.id == window.id
        })

        screen.focusedWindow = screen.openWindows[index]
    }

    function focusMenuItem(event: CustomEvent) {
        screen.focusedMenuBarItem = event.detail.item
    }

    function defocusMenuItem(event: CustomEvent) {
        screen.focusedMenuBarItem = null
    }
</script>

<svelte:window bind:innerWidth bind:innerHeight/>

<svelte:head>
    <link href='https://fonts.googleapis.com/css?family=Rubik' rel='stylesheet'>
    <link href='https://fonts.googleapis.com/css?family=Karla' rel='stylesheet'>
</svelte:head>

<MenuBar screen={screen} on:focusMenuItem={focusMenuItem} on:defocusMenuItem={defocusMenuItem} on:openWindow={openWindow}/>
<div class="AppWrapper" style="width:{innerWidth}px;height:{innerHeight - 30}px;">    
    <FileArea direction={"flex-end"}>
        <File screen={screen} file={new TayFile("TaylorOS", "A new way to look through my projects!", "TaylorOS", ApplicationDatabase.babel, "taybot.svg")} on:openWindow={openWindow} on:selectFile={selectFile} on:deselectFile={deselectFile}/>
    </FileArea>

    {#each screen.openWindows as window}
        <!-- Route Babel Pages -->
        {console.log(screen.openWindows)}
        {#if window.application == ApplicationDatabase.babel }
            <Babel window={window} screen={screen} on:closeWindow={closeWindow} on:focusWindow={focusWindow} on:deselectFile={deselectFile} on:openWindow={openWindow} on:selectFile={selectFile}/>
        {/if}

        <!-- Route About Pages -->
        {#if window.application == ApplicationDatabase.about }
            {#if window.name == "About TaylorOS"}
            <Window on:focusWindow={focusWindow} on:closeWindow={closeWindow} reference={window} windowPosition={
                new WindowPosition(375, 225, innerHeight / 2 - 112.5, innerWidth / 2 - 187.5, true, false, false)}
                isFocused={screen.focusedWindow == window}>
                <AboutTaylorOS/>
            </Window>
            {:else}
            <Window on:focusWindow={focusWindow} on:closeWindow={closeWindow} reference={window} windowPosition={
                new WindowPosition(475, 250, innerHeight / 2 - 125, innerWidth / 2 - 225, true, false, false)}
                isFocused={screen.focusedWindow == window}>
                <AboutBuilder application={screen.getApplicationByName(window.name.replace("About ", ""))}/>
            </Window>
            {/if}
        {/if}
    {/each}

</div>


<style>
.AppWrapper {
    padding-top: 30px;
    background-image: url("/assets/images/TayOS/pixels.svg");
    /* background-size: contain; */
    background-repeat: repeat;
    /* background-position: center; */
}

.FileSideBar {
    min-width: 30%;
    max-width: 30%;
    margin-left: 10px;
    margin-right: 10px;
}
</style>