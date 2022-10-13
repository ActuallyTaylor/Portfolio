<script lang="ts">
    import type { WebPageSection } from "$lib/models/WebPage/WebPage";


    export let section: WebPageSection;
</script>

<style>
.rightAligned {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.image {
    border-radius: 20px;
    width: 40%;
}

.descriptionStack { 
    margin-left: 20px;
    display: block;
}
</style>

<div class="rightAligned">
    <img class="image" src="{section.photoURL}" alt="Section"/>
    <div class="descriptionStack">
        {#if section.title != undefined }
        <h2 class="sectionTitle">{section.title}</h2>
        {/if}

        <p>
            {@html section.description ?? ""}
        </p>    
        {#if section.extra != undefined}
            {@html section.extra}
        {/if}
    </div>
</div>