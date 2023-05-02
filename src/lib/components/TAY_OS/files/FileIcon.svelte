<script lang="ts">
    import type { Screen } from '$lib/models/TAY_OS/Screen';
    import type { TayFile } from '$lib/models/TAY_OS/TayFile';
    import { createEventDispatcher } from 'svelte';

    export let screen: Screen
    export let file: TayFile

    const dispatch = createEventDispatcher();

    function openWindow() {
        dispatch("openWindow", {
            name: file.windowToOpen
        })
    }

    function selected() {
        if(screen.focusedFile == file) {
            dispatch("deselectFile", {
                file: file
            })
        } else {
            dispatch("selectFile", {
                file: file
            })
        }
    }
</script>

<div class="file" style="{screen.focusedFile == file ? "filter: invert(1);" : ""}" on:click={selected} on:dblclick={openWindow}>
    <img src="/assets/images/TayOS/{file.icon}" width=70 height=70 alt="file icon">
    <p>{file.name}</p>
</div>

<style>
    .file {
        height: min-content;
        width: min-content;
        margin: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .file img {
        margin: 0;
        padding: 0;
    }
    
    .file p {
        margin: 0;
        padding: 0;
        background-color: white;
        color: black;
        font-weight: bold;
        font-size: 13px;
        padding: 1px;
        padding-left: 3px;
        padding-right: 3px;
    }
</style>
