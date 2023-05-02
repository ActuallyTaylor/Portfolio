<script lang="ts">
    import File from "$lib/components/TAY_OS/files/FileIcon.svelte";
    import FileArea from "$lib/components/TAY_OS/files/FileArea.svelte";
    import { TaylorOS } from "$lib/models/TAY_OS/TaylorOS";
    import { WindowReference } from "$lib/models/TAY_OS/WindowReference";
    import { TayFile } from "$lib/models/TAY_OS/TayFile";
    import MenuBar from "$lib/components/TAY_OS/menubar/MenuBar.svelte";
    import { ApplicationDatabase } from "$lib/models/TAY_OS/ApplicationDatabase";
    import Babel from "$lib/components/TAY_OS/Applications/Babel.svelte";
    import About from "$lib/components/TAY_OS/Applications/About.svelte";
    import BabelDesktop from "$lib/components/TAY_OS/Applications/BabelDesktop.svelte";

    export let screen: TaylorOS = new TaylorOS();
    export let innerWidth: number;
    export let innerHeight: number;

    function openWindow(event: CustomEvent) {
        if (event.detail.file != null) {
            screen.openWindows.push(new WindowReference(event.detail.file.name, screen.id, event.detail.file.handlingApplication, event.detail.file))
        } else {
            console.log(event.detail.name)
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

    function focusWindow(event: CustomEvent) {
        let window = event.detail.reference

        const index = screen.openWindows.findIndex(wind => {
            return wind.id == window.id
        })

        screen.focusedWindow = screen.openWindows[index]
    }
</script>

<svelte:window bind:innerWidth bind:innerHeight/>

<MenuBar screen={screen} on:openWindow={openWindow}/>
<div class="AppWrapper" style="width:{innerWidth}px;height:{innerHeight - 30}px;">    
    <BabelDesktop screen={screen} on:openWindow={openWindow}/>

    <!-- Route all of the open windows to their respective applications -->
    {#each screen.openWindows as window}
        <!-- Route Babel Pages -->
        {#if window.application == ApplicationDatabase.babel }
            <Babel reference={window} screen={screen} on:closeWindow={closeWindow} on:focusWindow={focusWindow} on:openWindow={openWindow}/>
        {/if}

        <!-- Route About Pages -->
        {#if window.application == ApplicationDatabase.about }
            <About reference={window} screen={screen} on:closeWindow={closeWindow} on:focusWindow={focusWindow}/>
        {/if}
    {/each}

</div>


<style>
.AppWrapper {
    padding-top: 30px;
    background-image: url("/assets/images/TayOS/pixels.svg");
    background-repeat: repeat;
}
</style>