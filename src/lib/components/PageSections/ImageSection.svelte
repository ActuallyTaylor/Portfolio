<script lang="ts">
    export let title: string | undefined;
    export let imagePath: string;
</script>

<div class="image">
    {#if title}
        <h2>{title}</h2>
    {/if}

    <div class="imageWrapper">
        <img src={imagePath}/>
    </div>
    <p>
        <slot name="description"></slot>
    </p>

    <slot name="extras"></slot>
</div>

<style>
    .image {
        margin-bottom: 20px;
    }

    .videoWrapper {
        position: relative;
        margin: 2em;
        padding-bottom: 56.25%;
        height: 0;
    }

    .videoWrapper iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>
