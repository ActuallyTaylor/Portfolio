<script lang="ts">
    import type { OSAlert } from "$lib/models/TAY_OS/OSAlert";
    import DraggableResize from "$lib/components/TAY_OS/window/DraggableResize.svelte";
    import { WindowPosition } from "$lib/models/TAY_OS/WindowPosition";

    export let alert: OSAlert
    export let callback: () => void
    export let windowPosition = new WindowPosition(200, 200, 0, 0, true, false, false)

    function mouseDown() {
        windowPosition.isMoving = true
    }

    function mouseUp() {
        windowPosition.isMoving = false
    }
</script>

<DraggableResize windowPosition={windowPosition} zIndex={100}>
    <div class="alert" on:mousedown={mouseDown} on:mouseup={mouseUp}>
        <h1>{alert.title}</h1>
        <p>{alert.message}</p>

        <div class="HorizontallyCentered">
            <button on:click={callback}>
                Close
            </button>    
        </div>
    </div>
</DraggableResize>

<style>
.alert {
    position: absolute;
    z-index: 1001;

    background-color: #ffffff;    
    padding-top: 10px;

    border: 1px solid;
    border-color: #4E5253;
    
    box-shadow: 6px 6px 0 0 rgba(0, 0, 0, 0.2);
    width: max-content;
    max-width: 400px;
    padding: 10px;
}

.alert button {
    background-color: white;
    box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.2);
    width: max-content;
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
}

.alert h1 {
    margin-top: 5px;
}

.alert button:active {
    translate: 3px 3px;
    box-shadow: 0px 0px 0 0 rgba(0, 0, 0, 0.2);
}
</style>

