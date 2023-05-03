<script lang="ts">
    import { TaylorOS } from "$lib/models/TAY_OS/TaylorOS"
    import { WindowReference } from "$lib/models/TAY_OS/WindowReference"
    import MenuBar from "$lib/components/TAY_OS/menubar/MenuBar.svelte"
    import { ApplicationDatabase } from "$lib/models/TAY_OS/ApplicationDatabase"
    import Babel from "$lib/components/TAY_OS/Applications/Babel.svelte"
    import About from "$lib/components/TAY_OS/Applications/About.svelte"
    import BabelDesktop from "$lib/components/TAY_OS/Applications/BabelDesktop.svelte"
    import Alert from "$lib/components/TAY_OS/Alert/Alert.svelte";
    import { WindowPosition } from "$lib/models/TAY_OS/WindowPosition";
    import type { OSAlert } from "$lib/models/TAY_OS/OSAlert";
    import Netsplorer from "$lib/components/TAY_OS/Applications/Netsplorer.svelte";

    export let os: TaylorOS = new TaylorOS()
    export let innerWidth: number = 0
    export let innerHeight: number = 0

    function openWindow(event: CustomEvent) {
        if (event.detail.file != null) {
            os.openWindows.push(new WindowReference(event.detail.file.name, os.id, event.detail.file.application, event.detail.file))
        } else {
            os.openWindows.push(new WindowReference(event.detail.name, os.id, ApplicationDatabase.about, null))
        }
        os.focusedWindow = os.openWindows[os.openWindows.length - 1]
        os.id += 1
        os.openWindows = os.openWindows
    }

    function closeWindow(event: CustomEvent) {
        let window = event.detail.reference

        const index = os.openWindows.findIndex(wind => {
            return wind.id == window.id
        })

        if (index != -1) {
            os.openWindows.splice(index, 1)
            os.openWindows = os.openWindows
        }
    }

    function focusWindow(event: CustomEvent) {
        let window = event.detail.reference

        const index = os.openWindows.findIndex(wind => {
            return wind.id == window.id
        })

        os.focusedWindow = os.openWindows[index]
    }

    function clearAlert(alert: OSAlert): boolean {
        let index = os.alerts.indexOf(alert)
        if (index == -1) {
            return false
        }

        os.alerts.splice(index, 1)
        os.alerts = os.alerts
        return true
    }
</script>

<svelte:window bind:innerWidth bind:innerHeight/>

<MenuBar os={os} on:openWindow={openWindow}/>
<div class="AppWrapper" style="width:{innerWidth}px;height:{innerHeight - 30}px;">    
    <div class="AlertWrapper">
        <!-- Display all of the alerts -->
        {#each os.alerts as alert}
            <Alert alert={alert} callback={() =>
                clearAlert(alert)
            } windowPosition={new WindowPosition(200, 200, innerHeight / 2 - 150, innerWidth / 2 - 200, true, false, false)}/>
        {/each}
    </div>
    
    <BabelDesktop os={os} on:openWindow={openWindow}/>

    <!-- Route all of the open windows to their respective applications -->
    {#each os.openWindows as window}
        <!-- Route Babel Pages -->
        {#if window.application == ApplicationDatabase.babel }
            <Babel reference={window} os={os} on:closeWindow={closeWindow} on:focusWindow={focusWindow} on:openWindow={openWindow}/>
        {/if}

        <!-- Route About Pages -->
        {#if window.application == ApplicationDatabase.about }
            <About reference={window} os={os} on:closeWindow={closeWindow} on:focusWindow={focusWindow}/>
        {/if}

        <!-- Route Netsplorer Pages -->
        {#if window.application == ApplicationDatabase.netsplorer }
            <Netsplorer reference={window} os={os} on:closeWindow={closeWindow} on:focusWindow={focusWindow} on:openWindow={openWindow}/>
        {/if}
    
    {/each}
</div>


<style>
.AppWrapper {
    padding-top: 30px;
    background-image: url("/assets/images/TayOS/pixels.svg");
    background-repeat: repeat;
}

.AlertWrapper {
    position: absolute;
    z-index: 1001;
}
</style>