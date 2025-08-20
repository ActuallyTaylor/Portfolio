<script lang="ts">
    export let title: string | undefined
</script>

<style>
.description {
    margin-bottom: 20px;
}
</style>

<div class="description">
    {#if title != undefined }
    <h2>{title}</h2>
    {/if}
    <p>
        <slot name="description">

        </slot>    
    </p>
    <slot name="extras">

    </slot>
</div>
