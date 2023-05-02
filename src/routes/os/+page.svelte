<script lang="ts">
    import Window from "$lib/components/TAY_OS/window/Window.svelte"
    import File from "$lib/components/TAY_OS/files/FileIcon.svelte";
    import FileArea from "$lib/components/TAY_OS/files/FileArea.svelte";
    import { Screen } from "$lib/models/TAY_OS/Screen";
    import { WindowPosition } from "$lib/models/TAY_OS/WindowPosition";
    import { WindowReference } from "$lib/models/TAY_OS/WindowReference";
    import FileIcon from "$lib/components/TAY_OS/files/FileIcon.svelte";
    import { TayFile } from "$lib/models/TAY_OS/TayFile";
    import MenuBar from "$lib/components/TAY_OS/menubar/MenuBar.svelte";
    import AboutTaylorOS from "$lib/components/TAY_OS/Pages/AboutTaylorOS.svelte";

    export let screen: Screen = new Screen();
    export let innerWidth: number;
    export let innerHeight: number;

    function openWindow(event: CustomEvent) {
        screen.openWindows.push(new WindowReference(event.detail.name, screen.id))
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
        <File screen={screen} file={new TayFile("TaylorOS", "A new way to look through my projects!", "TaylorOS", "taybot.svg")} on:openWindow={openWindow} on:selectFile={selectFile} on:deselectFile={deselectFile}/>
    </FileArea>

    {#each screen.openWindows as window}
        {#if window.name == "TaylorOS"}
            <Window on:focusWindow={focusWindow} on:openWindow={openWindow} on:closeWindow={closeWindow} reference={window} windowPosition={
                new WindowPosition(500, 500, innerHeight / 2 - 250, innerWidth / 2 - 250, true, false, true)}
                isFocused={screen.focusedWindow == window}
            >
                <div class="HorizontalStack">
                    <div class="FileSideBar VerticalStack">
                        <h1>{screen.focusedFile?.name ?? "TaylorOS"}</h1>
                        <hr>
                        <p>{screen.focusedFile?.description ?? "A new way to look through my projects!"}</p>
                    </div>
                    <FileArea>
                        <FileIcon screen={screen} file={new TayFile("My Projects", "View all of my different projects!", "MY_PROJECTS")} on:openWindow={openWindow} on:selectFile={selectFile} on:deselectFile={deselectFile}/>
                        <FileIcon screen={screen} file={new TayFile("Photography", "See my photography in action!", "PHOTOGRAPHY")} on:openWindow={openWindow} on:selectFile={selectFile}/>
                        <FileIcon screen={screen} file={new TayFile("Blogs", "Read my blog!", "BLOG")} on:openWindow={openWindow} on:selectFile={selectFile}/>
                        <FileIcon screen={screen} file={new TayFile("Passes", "Grab some of my World Wide Developer Conference wallet passes!", "WALLET")} on:openWindow={openWindow} on:selectFile={selectFile}/>
                    </FileArea>        
                </div>
            </Window>
        {/if}
        {#if window.name == "About TaylorOS"}
        <Window on:focusWindow={focusWindow} on:openWindow={openWindow} on:closeWindow={closeWindow} reference={window} windowPosition={
            new WindowPosition(375, 225, innerHeight / 2 - 250, innerWidth / 2 - 250, true, false, false)}
            isFocused={screen.focusedWindow == window}
            >
            <AboutTaylorOS/>
        </Window>
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