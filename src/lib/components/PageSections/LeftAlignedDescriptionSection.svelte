<script lang="ts">
    import type { WebPageSection } from "$lib/models/WebPage/WebPage";


    export let section: WebPageSection;
</script>

<style>
.leftAligned {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.image {
    border-radius: 20px;
    width: 40%;
}
.descriptionStack { 
    margin-right: 20px;
    display: block;
}
</style>

<div class="leftAligned">
    <div class="descriptionStack">
        <h2>{section.title}</h2>
        <p>
            {@html section.description ?? ""}
        </p>    
        {#if section.extra != undefined}
            {@html section.extra}
        {/if}
    </div>
    <img class="image" src="{section.photoURL}" alt="Section"/>
</div>
