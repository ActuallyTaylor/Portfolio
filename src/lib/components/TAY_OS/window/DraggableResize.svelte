<script lang="ts">
    import type { WindowPosition } from "$lib/models/TAY_OS/WindowPosition";
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

	function resized(width: number, height: number, movementY: number, movementX: number, resizeMode: string) {
        dispatch('resized', {
			width: width,
			height: height,
			movementY: movementY,
			movementX: movementX,
			mode: resizeMode
		});
    }

	export let windowPosition: WindowPosition
	export let zIndex: number
    export let translateAmount = "0px"

    if (windowPosition.centerAnchor) {
        translateAmount = "-50%"
    }
    
	let moving: boolean = false
	let resizing: boolean = false
	let resizeMode: string = "none"
    
	function onMouseDown() {
        if (windowPosition.isDraggable) {
            moving = true;
        }
		dispatch("focusedWindow")
	}
	
	function onMouseMove(event: MouseEvent) {
		if (moving && !resizing) {
			windowPosition.left += event.movementX;
			windowPosition.top += event.movementY;
			windowPosition = windowPosition;
		} else if (resizing) {
			resized(event.pageX, event.pageY, event.movementY, event.movementX, resizeMode)
		}
	}
	
	function onMouseUp() {
		moving = false;
		resizing = false;
	}

	function onBottomLeftResizableDown() {
		if (windowPosition.isResizable) {
			resizeMode = "bottomLeft";
            resizing = true;
        }
	}

	function onBottomRightResizableDown() {
        if (windowPosition.isResizable) {
			resizeMode = "bottomRight";
            resizing = true;
        }
	}

	function onTopLeftResizableDown() {
		if (windowPosition.isResizable) {
			resizeMode = "topLeft";
            resizing = true;
        }
	}

	function onTopRightResizableDown() {
        if (windowPosition.isResizable) {
			resizeMode = "topRight";
            resizing = true;
        }
	}

	function onTopResizableDown() {
        if (windowPosition.isResizable) {
			resizeMode = "top";
            resizing = true;
        }
	}

	function onBottomResizableDown() {
		if (windowPosition.isResizable) {
			resizeMode = "bottom";
            resizing = true;
        }
	}

	function onLeftResizableDown() {
		if (windowPosition.isResizable) {
			resizeMode = "left";
            resizing = true;
        }
	}

	function onRightResizableDown() {
		if (windowPosition.isResizable) {
			resizeMode = "right";
            resizing = true;
        }
	}

</script>

<style>
	.draggable {
		user-select: none;
		position: absolute;
	}

	.resizer {
		user-select: none;
		position: absolute;
		-webkit-user-select: none;
  	}

	.bottomRightResizer {
		right: 3px;
		bottom: 3px;
		cursor: nwse-resize;
		width: 15px;
		height: 15px;
	}
	
	.bottomLeftResizer {
		left: 0px;
		bottom: 0px;
		cursor: nesw-resize;
		width: 15px;
		height: 15px;
	}

	.topLeftResizer {
		left: 0px;
		top: 0px;
		cursor: nwse-resize;
		width: 15px;
		height: 15px;
	}

	.topRightResizer {
		right: 0px;
		top: 0px;
		cursor: nesw-resize;
		width: 15px;
		height: 15px;
	}

	.topResizer {
		top: 0px;
		left: 0px;
		width: 100%;
		height: 10px;
		cursor: ns-resize;
	}

	.bottomResizer {
		bottom: 0px;
		left: 0px;
		width: 100%;
		height: 10px;
		cursor: ns-resize;
	}

	.leftResizer {
		top: 0px;
		left: 0px;
		height: 100%;
		width: 10px;
		cursor: ew-resize;
	}

	.rightResizer {
		top: 0px;
		right: 0px;
		height: 100%;
		width: 10px;
		cursor: ew-resize;
	}
</style>

<div 
	on:mousedown={onMouseDown} 
	style="z-index: {zIndex}; left: {windowPosition.left}px; top: {windowPosition.top}px; transform: translate({translateAmount}, {translateAmount}); " class="draggable">
	<slot>
		
    </slot>
	<!-- Side based resizers -->
	<div class="resizer topResizer" on:mousedown={onTopResizableDown} ></div>
	<div class="resizer bottomResizer" on:mousedown={onBottomResizableDown} ></div>
	<div class="resizer leftResizer" on:mousedown={onLeftResizableDown} ></div>
	<div class="resizer rightResizer" on:mousedown={onRightResizableDown} ></div>

	<!-- Corner Based Resizer -->
	<div class="resizer topLeftResizer" on:mousedown={onTopLeftResizableDown} ></div>
	<div class="resizer topRightResizer" on:mousedown={onTopRightResizableDown} ></div>
	<div class="resizer bottomLeftResizer" on:mousedown={onBottomLeftResizableDown} ></div>
	<img
		src="/assets/design/resizer.svg"
		alt="resize window"
		width="15"
		height="15"
		class="resizer bottomRightResizer" 
		on:mousedown={onBottomRightResizableDown}
	/>
</div>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />