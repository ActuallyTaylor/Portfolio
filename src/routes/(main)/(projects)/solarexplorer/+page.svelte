<script lang="ts">
    import DescriptionSection from "$lib/components/PageSections/DescriptionSection.svelte"
    import ProjectPageHeader from "$lib/components/ProjectPage/ProjectPageHeader.svelte"
    import ProjectPageNav from "$lib/components/ProjectPage/ProjectPageNav.svelte"

    import { Data } from "$lib/data"
    import { Project } from "$lib/models/Project"

    const id = "solarexplorer"
    export let project: Project = Data.works.find((obj: Project) => {
        return obj.id == id
    }) ?? new Project("undefined", "undefined", "undefined", "undefined")
</script>
<svelte:head>
  <title>{project.name} - Project</title>
  <meta name="description" content="Welcome Explorer, the universe is your sandbox.">

  <script
  src="https://cdn.telemetrydeck.com/websdk/telemetrydeck.min.js"
  data-app-id="246FDFED-E311-4B6E-B80A-5187ACA4DF8F"
  ></script>
</svelte:head>
<span>
    <ProjectPageHeader name={project.name} subtitle="Welcome Explorer, the universe is your sandbox" />

    <DescriptionSection title={undefined}>
        <span slot="description">
            Solar Explorer is my winning 2022 submission to <a href="https://developer.apple.com/wwdc22/swift-student-challenge/">Apple's Swift Student Challenge</a>. The experience is a universe sandbox based game that allows you to create an entire universe. You can spawn in planets, change their mass, and velocity and then watch how they change the universe. On each of the planets there is an entire genetic simulation of an ecosystem that is based on my project from 2021
        </span>
        <span slot="extras">
            <a href="https://github.com/ActuallyZach/Solar-Explorer-WWDC22" target="_blank">
                <img alt="Solar Explorer WWDC22 GitHub" srcset="/assets/badges/GithubBadge.png 1x, /assets/badges/GithubBadge@2x.png 2x" class="appstoreButton" />
            </a>
        </span>
    </DescriptionSection>
</span>
