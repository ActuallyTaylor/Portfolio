<script lang="ts">
    import WindowChrome from "./chrome/WindowChrome.svelte";
    import DraggableResize from "./DraggableResize.svelte";

    export let windowName: string
    export let width: string = "max-content"
    export let height: string = "max-content"
    export let top: number
    export let left: number
    export let isDraggable: boolean = true
    export let centerAnchor: boolean = false
 </script>

<style>
.Window {
    background-color: #ffffff;    
    padding-top: 10px;

    border: 1px solid;
    border-color: #4E5253;
    
    box-shadow: 6px 6px 0 0 rgba(0, 0, 0, 0.2);
}
</style>

<DraggableResize left={left} top={top} isDraggable={isDraggable} centerAnchor={centerAnchor}>
    <div class="Window" style="width:{width};height:{height}">
        <WindowChrome windowName={windowName}></WindowChrome>
        <slot>
        
        </slot>
    </div>    
</DraggableResize>
