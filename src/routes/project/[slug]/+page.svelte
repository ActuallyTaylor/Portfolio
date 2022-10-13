<script lang="ts">
    import DescriptionSection from "$lib/components/PageSections/DescriptionSectionSection.svelte";
    import LeftAlignedDescriptionSection from "$lib/components/PageSections/LeftAlignedDescriptionSection.svelte";
    import PhotoSection from "$lib/components/PageSections/PhotoSection.svelte";
    import RightAlignedDescriptionSection from "$lib/components/PageSections/RightAlignedDescriptionSection.svelte";

    import type { ProjectPageData } from "$lib/interfaces/ProjectPageData";
    import type { Project } from "$lib/models/Project";
    import { WebPage, WebPageSectionType } from "$lib/models/WebPage/WebPage";


    export let data: ProjectPageData;
    export let webpage: WebPage = data.webpage;
</script>

<svelte:head>
    <link rel="stylesheet" href="/css/cssLibrary.css" />
    <link rel="stylesheet" href="/css/index.css" />
</svelte:head>

<style>
    .smallerBody {
        max-width: 85%;
        margin-right: auto;
        margin-left: auto;
        margin-top: 0px;
        margin-bottom: 0px;
    }

    header {
        margin-right: auto;
        margin-left: auto;
        margin-top: 20px;
        margin-bottom: 20px;
        width: 100%;
        height: 300px;

        border-radius: 20px;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .headerContainer {
        width: 80%;
        height: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        border-radius: 20px;
    }

    .headerContainer h1 {
        font-weight: 500;
        padding: 0px;
        margin: 0px;
        color: var(--shapePrimaryFontColor);
    }

    .headerContainer h2 {
        color: var(--shapeSecondaryFontColor);
        font-weight: 400;
        padding: 0px;
        margin: 0px;
    }
</style>

<div class="smallerBody">
    <header style='background: url("/assets/design/{webpage.id}/background.png"); background-size: cover; background-repeat: no-repeat; background-position: center;'>
        <div class="headerContainer" style="background-color: {webpage.headerColor};">
            <h1 class="headerTitle">{webpage.title}</h1>
            <h2 class="headerTitle">{webpage.subtitle}</h2>    
        </div>
    </header>
    
    {#each webpage.sections as section}
        {#if section.sectionType == WebPageSectionType.description}
            <DescriptionSection section={section}/>
        {:else if section.sectionType == WebPageSectionType.leftAlignedDescription}
            <LeftAlignedDescriptionSection section={section}/>
        {:else if section.sectionType == WebPageSectionType.rightAlignedDescription}
            <RightAlignedDescriptionSection section={section}/>
        {:else if section.sectionType == WebPageSectionType.photo}
            <PhotoSection section={section}/>
        {/if}
    {/each}
</div>
