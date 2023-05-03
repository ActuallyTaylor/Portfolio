<script lang="ts">
    import type { TayFS_Program, TayFS_Unit } from '$lib/models/TAY_OS/FileSystem'
    import { OSAlert } from '$lib/models/TAY_OS/OSAlert';
    import { createEventDispatcher } from 'svelte'

    export let file: TayFS_Unit
    export let focusedFile: (TayFS_Unit | null)

    const dispatch = createEventDispatcher()

    function openWindow() {
        dispatch("openWindow", {
            file: file
        })
    }

    function selected() {
        if(focusedFile == file) {
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

<div class="file" style="{focusedFile == file ? "filter: invert(1);" : ""}" on:click={selected} on:dblclick={openWindow}>
    <img src="/assets/images/TayOS/icons/{file.icon}" width=70 height=70 alt="file icon">
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
        border-radius: 7px;
    }
    
    .file p {
        margin: 0;
        margin-top: 5px;
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
