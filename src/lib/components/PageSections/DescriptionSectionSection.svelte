<script lang="ts">
    import type { WebPageSection } from "$lib/models/WebPage/WebPage";


    export let section: WebPageSection;
</script>

<style>
.description {
    margin-bottom: 20px;
}
</style>

<div class="description">
    {#if section.title != undefined }
    <h2>{section.title}</h2>
    {/if}
    <p>
        {@html section.description ?? ""}
    </p>
    {#if section.extra != undefined }
        {@html section.extra}
    {/if}
</div>
