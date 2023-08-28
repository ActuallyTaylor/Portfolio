<script lang="ts">
    import DescriptionSection from "$lib/components/PageSections/DescriptionSection.svelte"
    import LeftAlignedDescriptionSection from "$lib/components/PageSections/LeftAlignedDescriptionSection.svelte"
    import RightAlignedDescriptionSection from "$lib/components/PageSections/RightAlignedDescriptionSection.svelte"
    import ProjectPageHeader from "$lib/components/ProjectPage/ProjectPageHeader.svelte"
    import ProjectPageNav from "$lib/components/ProjectPage/ProjectPageNav.svelte"

    import { Data } from "$lib/data"
    import { Project } from "$lib/models/Project"

    const id = "hephaestus"
    export let project: Project = Data.works.find((obj: Project) => {
        return obj.id == id
    }) ?? new Project("undefined", "undefined", "undefined", "undefined")
</script>
<svelte:head>
  <title>{project.name} - Project</title>
  <meta name="description" content="An open source C++ game engine.">

  <script
  src="https://cdn.telemetrydeck.com/websdk/telemetrydeck.min.js"
  data-app-id="246FDFED-E311-4B6E-B80A-5187ACA4DF8F"
  ></script>
</svelte:head>
<span>
    <ProjectPageNav id={id} name={project.name}/>
    <ProjectPageHeader projectID={id} name={project.name} subtitle="A C++ Game Engine" headerColor="#CFFFEE"/>

    <DescriptionSection title={undefined}>
        <span slot="description">
            Hephaestus is a game engine that I wrote for my senior project in High School. Alongside creating the engine, I also started work on a game console to go with it.
            The game console's sole purpose was to run the game engine, and the games that went with it. I am still looking to finish both as the only parts left for the actual game console
            are the 3D printing of the shell and installing of the parts.
            <br>
            <br>
            If you want to view the progress of the Hephaestus game engine, you can view it below on GitHub.
        </span>
        <span slot="extras">
            <a href="https://github.com/ActuallyZach/Hephaestus" target="_blank">
                <img alt="Hephaestus Github" srcset="/assets/badges/GithubBadge.png 1x, /assets/badges/GithubBadge@2x.png 2x" class="appstoreButton" />
            </a>        
        </span>
    </DescriptionSection>

    <LeftAlignedDescriptionSection title={"Why Hephaestus?"} path={"assets/images/hephaestus/lookingForANameForTheEngine.png"}>
        <span slot="description">
            I chose the name Hephaestus after a good bit of deliberation. Included in this screenshot, you can see the different names that I first thought of using.
            I knew I wanted to use the name of a Greek God from the beginning so I didn't look much past there.

        </span>
    </LeftAlignedDescriptionSection>

    <RightAlignedDescriptionSection title={"Olympus Launcher"} path={"assets/images/hephaestus/olympus.png"}>
        <span slot="description">
            The Olympus Launcher is a game launcher made with the Hephaestus engine. The launcher allows you to launch the physics demo, the Game Of Life game and the start of Low Data.
            The Olympus Launcher will be the first thing to open when the console opens.
        </span>
    </RightAlignedDescriptionSection>


    <DescriptionSection title={"Where is the project?"}>
        <span slot="description">
            The project currently sits in limbo. I am a full-time student at the moment so I have not had a lot of time to dedicate to bringing the project back up after the end of High School.
            I am looking forward to taking advantage of all of the maker spaces on campus to finish off the project once I get more stable in school. For now though, the project is just going to sit
            until I have the time to fully dedicate to finishing it.
        </span>
    </DescriptionSection>

</span>