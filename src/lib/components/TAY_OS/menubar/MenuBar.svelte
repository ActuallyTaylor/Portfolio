<script lang="ts">
    import type { TaylorOS } from "$lib/models/TAY_OS/TaylorOS";
    import MenuBarIcon from "$lib/components/TAY_OS/menubar/MenuBarIcon.svelte";
    import { MenuBarItem } from "$lib/models/TAY_OS/MenuBarItem";
    import { createEventDispatcher } from "svelte";
    
    export let screen: TaylorOS
    export let focusedMenuBarItem: (MenuBarItem | null) = null;

    function currentApp(): string {
        return screen.currentlyFocusedApp.name
    }

    const dispatch = createEventDispatcher();

    function focusItem(event: CustomEvent) {
        focusedMenuBarItem = event.detail.item
    }

    function defocusItem() {
        focusedMenuBarItem = null
    }

    function openAbout() {
        dispatch("openWindow", {
            name: "About TaylorOS"
        })
    }

    function openCurrentAppAbout() {
        dispatch("openWindow", {
            name: `About ${currentApp()}`
        })
    }
</script>

<style>
.menuBar {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: white;
    
    height: 30px;
    width: 100%;

    border-bottom: 1px solid #4E5253;
    display: flex;
    flex-direction: row;
    align-items: center;
    
    z-index: 1000;
}

.menuBar button {
    border-style: none;
    background-color: white;
    text-align: left;
    padding: 0px;
    padding-left: 10px;
    padding-right: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin: 0px;
}

.menuBar button:hover {
    filter: invert();
}
</style>

<div class="menuBar">
    <MenuBarIcon screen={screen} item={new MenuBarItem(null, "taybot.svg")} focusedMenuBarItem={focusedMenuBarItem} on:focusMenuItem={focusItem} on:defocusMenuItem={defocusItem}>
        <button on:click={openAbout}>
            About TaylorOS
        </button>  
        <button>
            Shutdown
        </button>  
    </MenuBarIcon>
    <MenuBarIcon screen={screen} item={new MenuBarItem(currentApp(), null)} focusedMenuBarItem={focusedMenuBarItem} on:focusMenuItem={focusItem} on:defocusMenuItem={defocusItem}>
        <button on:click={openCurrentAppAbout}>
            About {currentApp()}
        </button>  
    </MenuBarIcon>
    {#each screen.currentlyFocusedApp.menuBarItems as item }
        <MenuBarIcon screen={screen} item={item} on:focusMenuItem={focusItem} focusedMenuBarItem={focusedMenuBarItem} on:defocusMenuItem={defocusItem}>

        </MenuBarIcon>
    {/each}
</div>