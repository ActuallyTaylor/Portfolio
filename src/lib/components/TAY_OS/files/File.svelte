<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    export let name: string;
    export let windowToOpen: string;
    export let description: string;
    export let isSelected: boolean = false;

    const dispatch = createEventDispatcher();

    function openWindow() {
        isSelected = false;
        dispatch("openWindow", {
            name: windowToOpen
        })
    }

    function selected() {
        if (isSelected) {
            isSelected = false;
            dispatch("deselectFile", {
                name: name,
                description: description
            })
        } else {
            isSelected = true;
            dispatch("selectFile", {
                name: name,
                description: description
            })
        }
    }
</script>

<div class="file" style="{isSelected ? "border: solid var(--sky) 3px;" : ""}" on:click={selected} on:dblclick={openWindow}>
    <p>{name}</p>
</div>

<style>
    .file {
        width: 75px;
        height: 85px;
        background-color: antiquewhite;
        margin: 10px;

        display: flex;
        align-items: center;
        text-align: center;
    }
</style>
