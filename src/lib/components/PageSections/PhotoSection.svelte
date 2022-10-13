<script lang="ts">
    import type { WebPageSection } from "$lib/models/WebPage/WebPage";


    export let section: WebPageSection;
</script>

<style>
.photo {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.image {
    border-radius: 20px;
}

.sectionTitle {
    margin-bottom: 20px;
}

.stack {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>

<div class="photo">
    <div class="stack">
        <h2 class="sectionTitle">{section.title}</h2>
        <img class="image" src="{section.photoURL}" alt="Section"/>    
        {#if section.extra != undefined}
            {@html section.extra}
        {/if}
    </div>
</div>
