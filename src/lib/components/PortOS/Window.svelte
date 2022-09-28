<script lang="ts">
    import WindowChrome from "./chrome/WindowChrome.svelte";
    import DraggableResize from "./DraggableResize.svelte";

    export let windowName: string
    export let width: string
    export let height: string
    export let top: number
    export let left: number
    export let isDraggable = true
</script>

<style>
.Window {
    background-color: #ffffff;    
    padding-top: 10px;
    border-color: #4E5253;

    box-shadow: 6px 6px 0 0 rgba(0, 0, 0, 0.2);
}
</style>

<DraggableResize left={left} top={top} isDraggable={isDraggable}>
    <div class="Window" style="width:{width};height:{height}">
        <WindowChrome windowName={windowName}></WindowChrome>
        <slot>
        
        </slot>
    </div>    
</DraggableResize>
