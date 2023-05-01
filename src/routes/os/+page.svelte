<script lang="ts">
    import Window from "$lib/components/TAY_OS/Window.svelte"
    import File from "$lib/components/TAY_OS/files/File.svelte";
    import FileArea from "$lib/components/TAY_OS/files/FileArea.svelte";
    import { Screen } from "$lib/models/TAY_OS/Screen";
    import { WindowPosition } from "$lib/models/TAY_OS/WindowPosition";
    import { WindowReference } from "$lib/models/TAY_OS/WindowReference";

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
        selectedName = event.detail.name
        selectedDescription = event.detail.description
    }

    function deselectFile(event: CustomEvent) {
        if (event.detail.name == selectedName) {
            selectedName = "Taylor OS"
            selectedDescription = "A new way to look through my projects"
        }
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

    <link rel="stylesheet" href="/css/PortOS.css" />
</svelte:head>

<div class="AppWrapper">
    <FileArea>
        <File name={"TAY_OS"} description="A new way to look through my projects" windowToOpen="TAY_OS" on:openWindow={openWindow}/>
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
                        <h1>{selectedName}</h1>
                        <hr>
                        <p>{selectedDescription}</p>
                    </div>
                    <FileArea>
                        <File name="My Projects" description="View all of my different projects!" windowToOpen="MY_PROJECTS" on:openWindow={openWindow} on:selectFile={selectFile} on:deselectFile={deselectFile}/>
                        <File name="Photography" description="See my photography in action!" windowToOpen="PHOTOGRAPHY" on:openWindow={openWindow} on:selectFile={selectFile}/>
                        <File name="Blogs" description="Read my blog!" windowToOpen="BLOG" on:openWindow={openWindow} on:selectFile={selectFile}/>
                        <File name="Passes" description="Grab some of my WWDC wallet passes!" windowToOpen="WALLET" on:openWindow={openWindow} on:selectFile={selectFile}/>
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
                    <h1>{selectedName}</h1>
                    <hr>
                    <p>{selectedDescription}</p>
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
    background-image: url("/assets/images/pixels.svg");
    /* background-size: contain; */
    background-repeat: repeat;
    /* background-position: center; */
}

.FileSideBar {
    min-width: 30%;
    max-width: 30%;
}
</style>