<script lang="ts">
    import DescriptionSection from "$lib/components/PageSections/DescriptionSection.svelte";
    import LeftAlignedDescriptionSection from "$lib/components/PageSections/LeftAlignedDescriptionSection.svelte";
    import VideoSection from "$lib/components/PageSections/VideoSection.svelte";
    import ProjectPageHeader from "$lib/components/ProjectPage/ProjectPageHeader.svelte";
    import ProjectPageNav from "$lib/components/ProjectPage/ProjectPageNav.svelte";

    import { Data } from "$lib/data";
    import { Project } from "$lib/models/Project";

    const id = "manny"
    export let project: Project = Data.works.find((obj: Project) => {
        return obj.id == id
    }) ?? new Project("undefined", "undefined", "undefined", "undefined")
</script>
<svelte:head>
  <title>{project.name} - Project</title>
  <meta name="description" content="The cutest Mastodon Client!">
</svelte:head>
<span>
    <ProjectPageNav id={id} name={project.name}/>
    <ProjectPageHeader projectID={id} name={project.name} subtitle="The cutest Mastodon Client!" headerColor="#F0DAFD"/>

    <DescriptionSection title="What is Manny?">
        <span slot="description">
            Manny is a brand new Mastodon Client focused on making experiences the largest decentralized social network easy and fun! 
        </span>
        <span slot="extras">
            <a href="https://apps.apple.com/us/app/manny-for-mastodon/id1668409667" target="_blank">
                <img alt="iOS AppStore Badge" srcset="/assets/badges/appBadge.png 1x, /assets/badges/appBadge@2x.png 2x" class="appstoreButton" />
            </a>
        </span>
    </DescriptionSection>
</span>