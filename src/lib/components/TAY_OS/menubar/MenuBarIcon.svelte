<script lang="ts">
    import type { MenuBarItem } from '$lib/models/TAY_OS/MenuBarItem'
    import type { TaylorOS } from '$lib/models/TAY_OS/TaylorOS'
    import { createEventDispatcher } from 'svelte'

    export let screen: TaylorOS
    export let item: MenuBarItem

    export let focusedMenuBarItem: (MenuBarItem | null)
    
    const dispatch = createEventDispatcher()

    function toggleFocus() {
        if (focusedMenuBarItem == item) {
            dispatch("defocusMenuItem", {
                item: item
            })
        } else {
            dispatch("focusMenuItem", {
                item: item
            })
        }
    }

    function defocusItem() {
        dispatch("defocusMenuItem", {
                item: item
        })
    }
</script>

<style>
    .iconContainer {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-left: 10px;
        padding-right: 10px;
        height: 100%;
    }

    .iconContainer p {
        margin: 0px;
        padding: 0px;
        color: black;
    }

    .iconMenu {
        position: absolute;
        top: 28px;
    }

    .iconMenuBackground {
        display: flex;
        flex-direction: column;
        width: max-content;
        background-color: white;
        padding-left: 5px;
        padding-right: 5px;
        padding-top: 2px;
        padding-bottom: 2px;
        margin: 0px;

        border: 1px solid #4E5253;
        border-color: #4E5253;
        
        box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.2);
    }
</style>

<div class="iconContainer" on:click={toggleFocus} on:focusout={defocusItem} style="{focusedMenuBarItem == item ? "filter: invert(); background: white;" : ""}">
    {#if (item.icon != null)}
    <img src="/assets/images/TayOS/{item.icon}" alt="{item.name} Icon" width="25px" height="25px">
    {/if}
    {#if (item.name != null)}
    {#if item.name == screen.currentlyFocusedApp.name }
    <p><b>{item.name}</b></p>
    {:else}
    <p>{item.name}</p>
    {/if}
    {/if}

    {#if (focusedMenuBarItem == item)}
    <div class="iconMenu" style="{focusedMenuBarItem == item ? "filter: invert(); background: white;" : ""}">
        <div class="iconMenuBackground">
            <slot>
            
            </slot>    
        </div>
    </div>
    {/if}
</div>
