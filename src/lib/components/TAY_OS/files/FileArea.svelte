<script lang="ts">
    export let direction: string = "flex-start"
</script>

<div class="fileWrapper" style="justify-content: {direction};">
    <slot>

    </slot>
</div>

<style>
    .fileWrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
    }
</style>