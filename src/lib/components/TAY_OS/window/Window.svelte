<script lang="ts">
    import WindowChrome from "$lib/components/TAY_OS/window/chrome/WindowChrome.svelte";
    import DraggableResize from "./DraggableResize.svelte";
    import type { WindowPosition } from "$lib/models/TAY_OS/WindowPosition";
    import { createEventDispatcher } from 'svelte';
    import type { WindowReference } from "$lib/models/TAY_OS/WindowReference";
    const dispatch = createEventDispatcher();

    export let reference: WindowReference
    export let windowPosition: WindowPosition
    export let isFocused: boolean
    export let innerWidth: number = 0;
    export let innerHeight: number = 0;

    let beforeExpandWidth: number = 0;
    let beforeExpandHeight: number = 0;
    let beforeExpandTop: number = 0;
    let beforeExpandLeft: number = 0;
    let beforeExpandDraggable: boolean = true;
    let beforeExpandCenterAnchor: boolean = false;

    function closeWindow() {
        dispatch("closeWindow", {
            reference: reference
        })
    }

    function focusWindow() {
        dispatch("focusWindow", {
            reference: reference
        })
    }

    function expandWindow() {
        if (windowPosition.isExpanded) {
            windowPosition.height = beforeExpandHeight;
            windowPosition.width = beforeExpandWidth;
            windowPosition.top = beforeExpandTop;
            windowPosition.left = beforeExpandLeft;
            windowPosition.isDraggable = beforeExpandDraggable;
            windowPosition.centerAnchor = beforeExpandCenterAnchor;

            windowPosition.isExpanded = false;
        } else {
            beforeExpandHeight = windowPosition.height;
            beforeExpandWidth = windowPosition.width;
            beforeExpandTop = windowPosition.top;
            beforeExpandLeft = windowPosition.left;
            beforeExpandDraggable = windowPosition.isDraggable;
            beforeExpandCenterAnchor = windowPosition.centerAnchor;

            windowPosition.isExpanded = true;
            windowPosition.isDraggable = false;
            windowPosition.centerAnchor = false;
            windowPosition.top = 40;
            windowPosition.left = 10;
            windowPosition.height = innerHeight - 60;
            windowPosition.width = innerWidth - 20;
        }
    }

    function resized(event: CustomEvent) {
        if (event.detail.mode == "bottomRight") {
            windowPosition.width = event.detail.width - windowPosition.left
            windowPosition.height = event.detail.height - windowPosition.top
        } else if (event.detail.mode == "top") {
            if(windowPosition.height > windowPosition.minHeight || event.detail.movementY < 0) {
                windowPosition.top += event.detail.movementY
                windowPosition.height -= event.detail.movementY
            }
        } else if (event.detail.mode == "bottom") {	
            windowPosition.height += event.detail.movementY
		} else if (event.detail.mode == "left") {
            if(windowPosition.width > windowPosition.minWidth || event.detail.movementX < 0) {
                windowPosition.left += event.detail.movementX
                windowPosition.width -= event.detail.movementX
            }
        } else if (event.detail.mode == "right") {
            windowPosition.width += event.detail.movementX
        } else if (event.detail.mode == "bottomLeft") {
            if(windowPosition.width > windowPosition.minWidth || event.detail.movementX < 0) {
                windowPosition.width -= event.detail.movementX
                windowPosition.left += event.detail.movementX
            }
            windowPosition.height = event.detail.height - windowPosition.top
        } else if (event.detail.mode == "topLeft") {
            if(windowPosition.height > windowPosition.minHeight || event.detail.movementY < 0) {
                windowPosition.top += event.detail.movementY
                windowPosition.height -= event.detail.movementY
            }

            if(windowPosition.width > windowPosition.minWidth || event.detail.movementX < 0) {
                windowPosition.left += event.detail.movementX
                windowPosition.width -= event.detail.movementX
            }
        } else if (event.detail.mode == "topRight") {
            if(windowPosition.height > windowPosition.minHeight || event.detail.movementY < 0) {
                windowPosition.top += event.detail.movementY
                windowPosition.height -= event.detail.movementY
            }
            windowPosition.width += event.detail.movementX
        }

        if (windowPosition.height < windowPosition.minHeight) {
            windowPosition.height = windowPosition.minHeight;
        }
        if (windowPosition.width < windowPosition.minWidth) {
            windowPosition.width = windowPosition.minWidth;
        }

        windowPosition = windowPosition;
    }

    function chromeMouseUp() {
        windowPosition.isMoving = false;
    }

    function chromeMouseDown() {
        windowPosition.isMoving = true;
    }
</script>

<style>
.Window {
    background-color: #ffffff;    
    padding-top: 10px;

    border: 1px solid;
    border-color: #4E5253;
    
    box-shadow: 6px 6px 0 0 rgba(0, 0, 0, 0.2);
    overflow: hidden;
    position: relative;
}

.WindowContainer {
    margin: 0px;
    padding: 0px;
    overflow: scroll;
}
</style>

<svelte:window bind:innerWidth bind:innerHeight/>

<DraggableResize windowPosition={windowPosition} on:resized={resized} on:focusedWindow={focusWindow} zIndex={isFocused ? 10 : 0}>
    <div class="Window" style="width:{windowPosition.width}px; height:{windowPosition.height}px;">
        <WindowChrome windowName={reference.name} windowPosition={windowPosition} on:closeWindow={closeWindow} on:expandWindow={expandWindow} on:chromeMouseUp={chromeMouseUp} on:chromeMouseDown={chromeMouseDown}></WindowChrome>
        <div class="WindowContainer" style="max-height:{windowPosition.height - 64}px;">
            <slot>

            </slot>    
        </div>
    </div>    
</DraggableResize>
