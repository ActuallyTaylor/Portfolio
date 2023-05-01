<script lang="ts">
    import WindowButton from "./WindowButton.svelte";
    import WindowChromeLines from "./WindowChromeLines.svelte";
    import { createEventDispatcher } from 'svelte';

    export let windowName: string;

    const dispatch = createEventDispatcher();

    function closeWindow() {
        dispatch('closeWindow');
    }

    function expandWindow() {
        dispatch('expandWindow');
    }
</script>

<style>
    .WindowChrome {        
        display: flex;
        justify-content: center;
        align-items: center;

        height: 44px;

        background-color: #EEEEEE;

        box-shadow: 6px 6px 0 0 rgba(0, 0, 0, 0.2);

        margin: 10px;
        margin-top: 0px;


    }

    .WindowChrome h1 {
        text-transform: uppercase;
        white-space: nowrap;
        text-align: center;
        padding-left: 20px;
        padding-right: 20px;
        margin: 0px;
        margin-top: auto;
        margin-bottom: auto;
        
        font-size: 1.3em;
    }

    .WindowChrome img {
        image-rendering: pixelated;
    }
</style>

<div class="WindowChrome">
    <WindowChromeLines width={"10%"}></WindowChromeLines>
    <WindowButton callback={closeWindow}>
        <img src="/assets/images/TayOS/xmark.png" alt="close window" width="20px" height="20px">
    </WindowButton>
    <WindowChromeLines></WindowChromeLines>
    <h1>{windowName}</h1>
    <WindowChromeLines></WindowChromeLines>
    <WindowButton callback={expandWindow}>
        <img src="/assets/images/TayOS/expand.png" alt="expand window" width="20px" height="20px">
    </WindowButton>
    <WindowChromeLines width={"10%"}></WindowChromeLines>
</div>
