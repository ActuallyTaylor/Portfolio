<script lang="ts">
    import DescriptionSection from "$lib/components/PageSections/DescriptionSection.svelte"
    import ProjectPageHeader from "$lib/components/ProjectPage/ProjectPageHeader.svelte"
    import ProjectPageNav from "$lib/components/ProjectPage/ProjectPageNav.svelte"

    import { Data } from "$lib/data"
    import { Project } from "$lib/models/Project"

    const id = "dungoenofepsilon"
    export let project: Project = Data.works.find((obj: Project) => {
        return obj.id == id
    }) ?? new Project("undefined", "undefined", "undefined", "undefined")
</script>
<svelte:head>
  <title>{project.name.replaceAll("<br>", "")} - Project</title>
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
            Dungeon of Epsilon is my 2020 submission to <a href="https://developer.apple.com/wwdc22/swift-student-challenge/">Apple's Swift Student Challenge</a>. This was my first year submitting a project to the challenge and my first year being one of the 350 winners.
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
