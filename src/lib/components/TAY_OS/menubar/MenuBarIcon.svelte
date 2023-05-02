<script lang="ts">
    import type { MenuBarItem } from '$lib/models/TAY_OS/MenuBarItem';
    import type { Screen } from '$lib/models/TAY_OS/Screen';
    import { createEventDispatcher } from 'svelte';

    export let screen: Screen
    export let item: MenuBarItem
    
    const dispatch = createEventDispatcher();

    function toggleFocus() {
        if (screen.focusedMenuBarItem == item) {
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

<div class="iconContainer" on:click={toggleFocus} on:focusout={defocusItem}>
    <img src="/assets/images/TayOS/{item.icon}.png" alt="Tay OS" width="25px" height="25px">
    {#if (item.name != null)}
    <p>{item.name}</p>
    {/if}
    {#if (screen.focusedMenuBarItem == item)}
    <div class="iconMenu">
        <div class="iconMenuBackground">
            <slot>
            
            </slot>    
        </div>
    </div>
    {/if}
</div>
