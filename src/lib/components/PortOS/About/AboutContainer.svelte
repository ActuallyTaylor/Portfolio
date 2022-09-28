<script lang="ts">
    export let width: string
    export let height: string
</script>

<style>
    .Container {
        background-color: #F8F8F8;
        border-color: #4E5253;

        box-shadow: 6px 6px 0 0 rgba(0, 0, 0, 0.2);
        padding: 10px;
    }
</style>

<div class="Container" style="height:{height};width:{width};">
    <slot>
        
    </slot>
</div>