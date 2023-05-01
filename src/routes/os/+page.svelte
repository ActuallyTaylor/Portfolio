<script lang="ts">
    import Window from "$lib/components/TAY_OS/Window.svelte"
    import File from "$lib/components/TAY_OS/files/FileIcon.svelte";
    import FileArea from "$lib/components/TAY_OS/files/FileArea.svelte";
    import { Screen } from "$lib/models/TAY_OS/Screen";
    import { WindowPosition } from "$lib/models/TAY_OS/WindowPosition";
    import { WindowReference } from "$lib/models/TAY_OS/WindowReference";
    import FileIcon from "$lib/components/TAY_OS/files/FileIcon.svelte";
    import { TayFile } from "$lib/models/TAY_OS/TayFile";

    export let screen: Screen = new Screen();
    export let innerWidth: number;
    export let innerHeight: number;

    export let selectedName: string = "Taylor OS"
    export let selectedDescription: string = "A new way to look through my projects!"

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
</script>

<svelte:window bind:innerWidth bind:innerHeight/>

<svelte:head>
    <link href='https://fonts.googleapis.com/css?family=Rubik' rel='stylesheet'>
    <link href='https://fonts.googleapis.com/css?family=Karla' rel='stylesheet'>
</svelte:head>

<div class="AppWrapper">
    <FileArea>
        <File screen={screen} file={new TayFile("TAY_OS", "A new way to look through my projects", "TAY_OS")} on:openWindow={openWindow} on:selectFile={selectFile} on:deselectFile={deselectFile}/>
    </FileArea>

    {#each screen.openWindows as window}
        {console.log("Loop ", window)}
        {#if window.name == "TAY_OS"}
            <Window on:focusWindow={focusWindow} on:openWindow={openWindow} on:closeWindow={closeWindow} reference={window} windowPosition={
                new WindowPosition(500, 500, innerHeight / 2 - 250, innerWidth / 2 - 250, true, false)}
                isFocused={screen.focusedWindow == window}
            >
                <div class="HorizontalStack">
                    <div class="FileSideBar VerticalStack">
                        <h1>{screen.focusedFile?.name ?? "Taylor OS"}</h1>
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
        {#if window.name == "PHOTOGRAPHY"}
        <Window on:focusWindow={focusWindow} on:openWindow={openWindow} on:closeWindow={closeWindow} reference={window} windowPosition={
            new WindowPosition(500, 500, innerHeight / 2 - 250, innerWidth / 2 - 250, true, false)}
            isFocused={screen.focusedWindow == window}
            >
            <div class="HorizontalStack">
                <div class="FileSideBar VerticalStack">
                    <h1>{screen.focusedFile?.name ?? "Taylor OS"}</h1>
                    <hr>
                    <p>{screen.focusedFile?.description ?? "A new way to look through my projects!"}</p>
                </div>
                <FileArea>
                    
                </FileArea>
            </div>
        </Window>
    {/if}

    {/each}

</div>


<style>
.AppWrapper {
    width: 100vw;
    height: 100vh;
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