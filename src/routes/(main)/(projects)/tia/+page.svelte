<script lang="ts">
    import DescriptionSection from "$lib/components/PageSections/DescriptionSection.svelte"
    import VideoSection from "$lib/components/PageSections/VideoSection.svelte"
    import ProjectPageHeader from "$lib/components/ProjectPage/ProjectPageHeader.svelte"

    import { Project } from "$lib/models/Project"

    let project: Project = $props();
</script>

<svelte:head>
  <title>{project.name} - Project</title>
  <meta name="description" content="Watch the world evolve.">

  <script
  src="https://cdn.telemetrydeck.com/websdk/telemetrydeck.min.js"
  data-app-id="246FDFED-E311-4B6E-B80A-5187ACA4DF8F"
  ></script>
</svelte:head>

<span>
    <ProjectPageHeader name={project.name} subtitle="Watch the world evolve."/>

    <DescriptionSection title={undefined}>
        <span slot="description">
            Terran Integration Application (or T.I.A. for short) is my winning 2021 submission to <a href="https://developer.apple.com/wwdc22/swift-student-challenge/">Apple's Swift Student Challenge</a>.
        </span>
    </DescriptionSection>
    <DescriptionSection title={"About"}>
        <span slot="description">
            T.I.A is an application that allows the user to create a genetic simulation. The user can create different species with different sets of genes.
            These species will then live together in a randomly generated environment. Based on the species genes, the genetic algorithm backing the application will
            simulate the species evolving and changing to better fit their environments.

            <br>
            <br>

            On top of the genetic algorithm, TIA also has a small storyline built into the application. The storyline puts you in the place of a person who has been discovered an other worldly being.
            This being has put you down in front of a genetic simulation to see how you would perform as a species ruling over an environment. The storyline can be discovered through interacting with
            the floating TIA ball.
        </span>
        <span slot="extras">
            <a href="https://github.com/ActuallyZach/Terran-Integration-Application-WWDC21" target="_blank">
                <img alt="TIA WWDC21 GitHub" srcset="/assets/badges/GithubBadge.png 1x, /assets/badges/GithubBadge@2x.png 2x" class="appstoreButton" />
            </a>
        </span>
    </DescriptionSection>
    <VideoSection title={"Expo Video"} youtubeEmbedID={"qPPdZWZiEEY"}>

    </VideoSection>
</span>
