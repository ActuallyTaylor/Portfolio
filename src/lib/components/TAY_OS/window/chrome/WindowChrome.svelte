<script lang="ts">
    import type { WindowPosition } from "$lib/models/TAY_OS/WindowPosition";
    import WindowButton from "./WindowButton.svelte";
    import WindowChromeLines from "./WindowChromeLines.svelte";
    import { createEventDispatcher } from 'svelte';

    export let windowName: string;
	export let windowPosition: WindowPosition

    const dispatch = createEventDispatcher();

    function closeWindow() {
        dispatch('closeWindow');
    }

    function expandWindow() {
        dispatch('expandWindow');
    }

    function mouseDown() {
        dispatch('chromeMouseDown');
    }

    function mouseUp() {
        dispatch('chromeMouseUp');
    }
</script>

<style>
    .WindowChrome { 
        position: sticky;
        top: 0px;

        display: flex;
        justify-content: center;
        align-items: center;

        height: 34px;

        background-color: #EEEEEE;

        box-shadow: 6px 6px 0 0 rgba(0, 0, 0, 0.2);

        margin: 10px;
        margin-top: 0px;
    }

    .WindowChrome h1 {
        /* text-transform: uppercase; */
        white-space: nowrap;
        text-align: center;
        padding-left: 10px;
        padding-right: 10px;
        margin: 0px;
        margin-top: auto;
        margin-bottom: auto;
        
        font-size: 1.2em;
    }

    .WindowChrome img {
        image-rendering: pixelated;
    }
</style>


<div class="WindowChrome" style="{windowPosition.isDraggable ? `cursor: ${windowPosition.isMoving ? "grabbing" : "grab"}` : ""}" on:mouseup={mouseUp} on:mousedown={mouseDown}>
    <WindowChromeLines width={"10%"}></WindowChromeLines>
    <WindowButton callback={closeWindow}>
        <img src="/assets/images/TayOS/xmark.png" alt="close window" width="15px" height="15px">
    </WindowButton>
    <WindowChromeLines></WindowChromeLines>
    <h1>{windowName}</h1>
    <WindowChromeLines></WindowChromeLines>
    <WindowButton callback={expandWindow}>
        <img src="/assets/images/TayOS/expand.png" alt="expand window" width="15px" height="15px">
    </WindowButton>
    <WindowChromeLines width={"10%"}></WindowChromeLines>
</div>
