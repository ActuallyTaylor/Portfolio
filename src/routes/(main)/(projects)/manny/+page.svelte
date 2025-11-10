<script lang="ts">
    import LeftAlignedDescriptionSection from "$lib/components/PageSections/LeftAlignedDescriptionSection.svelte"
    import ProjectPageHeader from "$lib/components/ProjectPage/ProjectPageHeader.svelte"

    import { Project } from "$lib/models/Project"

    let project: Project = $props();
</script>
<svelte:head>
  <title>{project.name} - Project</title>
  <meta name="description" content="Simplicity is back!">

  <script
  src="https://cdn.telemetrydeck.com/websdk/telemetrydeck.min.js"
  data-app-id="246FDFED-E311-4B6E-B80A-5187ACA4DF8F"
  ></script>
</svelte:head>
<span>
    <ProjectPageHeader name={project.name} subtitle="The cutest Mastodon Client!"/>

    <LeftAlignedDescriptionSection title="What is Manny" path="/assets/images/manny/manny.png">
        <span slot="description">
            Manny is a brand new Mastodon Client focused on making experiences the largest decentralized social network easy and fun!
            Manny allows you to access any Mastodon server, you can create statuses, view your lists and tons of other features!
        </span>
        <span slot="extras">
            <a href="https://apps.apple.com/us/app/manny-for-mastodon/id1668409667" target="_blank">
                <img alt="Scum AppStore Badge" srcset="/assets/badges/appBadge.png 1x, /assets/badges/appBadge@2x.png 2x" class="appstoreButton" />
            </a>
        </span>
    </LeftAlignedDescriptionSection>
</span>
