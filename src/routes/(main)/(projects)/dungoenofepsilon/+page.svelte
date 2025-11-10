<script lang="ts">
    import DescriptionSection from "$lib/components/PageSections/DescriptionSection.svelte"
    import ProjectPageHeader from "$lib/components/ProjectPage/ProjectPageHeader.svelte"

    import { Project } from "$lib/models/Project"

    let project: Project = $props();
</script>
<svelte:head>
  <title>{project.name} - Project</title>
  <meta name="description" content="Hello Adventurer, don't get lost.">

  <script
  src="https://cdn.telemetrydeck.com/websdk/telemetrydeck.min.js"
  data-app-id="246FDFED-E311-4B6E-B80A-5187ACA4DF8F"
  ></script>
</svelte:head>
<span>
    <ProjectPageHeader name={project.name} subtitle="Hello Adventurer, don't get lost."/>

    <DescriptionSection title={undefined}>
        <span slot="description">
            Dungeon of Epsilon is my winning 2020 submission to <a href="https://developer.apple.com/wwdc22/swift-student-challenge/">Apple's Swift Student Challenge</a>.
        </span>
    </DescriptionSection>
    <DescriptionSection title={"About"}>
        <span slot="description">
            The Dungeon of Epsilon is a text based random dungeon adventure game. It is modeled after the original text based video games alongside Dungeons and Dragons. In the game you are able to fight monsters, trade with merchants and manage your inventory.
            As you explore the dungeon you will come upon enemies, friends and treasure. In every room you are allowed to pick your next direction of travel. Depending on what you pick, you will get a different room. As you fight more monsters, the difficulty of the
            dungeon will scale.
        </span>
        <span slot="extras">
            <a href="https://github.com/ActuallyZach/Dungeon-of-Epsilon-WWDC20" target="_blank">
              <img alt="Dungeon of Epsilon WWDC20 GitHub" srcset="/assets/badges/GithubBadge.png 1x, /assets/badges/GithubBadge@2x.png 2x" class="appstoreButton" />
            </a>
        </span>
    </DescriptionSection>
</span>
