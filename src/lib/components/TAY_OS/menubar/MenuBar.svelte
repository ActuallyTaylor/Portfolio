<script lang="ts">
    import type { Screen } from "$lib/models/TAY_OS/Screen";
    import MenuBarIcon from "$lib/components/TAY_OS/menubar/MenuBarIcon.svelte";
    import { MenuBarItem } from "$lib/models/TAY_OS/MenuBarItem";
    import { createEventDispatcher } from "svelte";
    
    export let screen: Screen
    
    const dispatch = createEventDispatcher();

    function focusItem(event: CustomEvent) {
        dispatch("focusMenuItem", {
            item: event.detail.item
        })
    }

    function defocusItem(event: CustomEvent) {
        dispatch("defocusMenuItem", {
            item: event.detail.item
        })
    }

    function openAbout() {
        dispatch("openWindow", {
            name: "ABOUT"
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
    <MenuBarIcon screen={screen} item={new MenuBarItem(null, "taybot")} on:focusMenuItem={focusItem} on:defocusMenuItem={defocusItem}>
        <button on:click={openAbout}>
            About TayOS
        </button>  
        <button>
            Shutdown
        </button>  
    </MenuBarIcon>
</div>