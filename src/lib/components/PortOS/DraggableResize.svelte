<script lang="ts">
    export let isDraggable: boolean = true
	export let left: number = 100
	export let top: number = 100
    export let centerAnchor: boolean = false

    export let translateAmount = "0px"
    if (centerAnchor) {
        translateAmount = "-50%"
    }
    
	
	let moving: boolean = false
    
	function onMouseDown() {
        if (isDraggable) {
            moving = true;
        }
	}
	
	function onMouseMove(event: MouseEvent) {
		if (moving) {
			left += event.movementX;
			top += event.movementY;
		}
	}
	
	function onMouseUp() {
		moving = false;
	}
</script>

<style>
	.draggable {
		user-select: none;
		position: absolute;
	}
</style>

<section on:mousedown={onMouseDown} style="left: {left}px; top: {top}px;cursor: {isDraggable ? "move" : ""};transform: translate({translateAmount}, {translateAmount}); " class="draggable">
	<slot>

    </slot>
</section>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />