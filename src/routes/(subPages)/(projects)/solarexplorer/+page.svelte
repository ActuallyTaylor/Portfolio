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
</svelte:head>
<span>
    <ProjectPageNav id={id} name={project.name}/>
    <ProjectPageHeader projectID={id} name={project.name} subtitle="Welcome Explorer, the universe is your sandbox" headerColor="#C9B6FF"/>

    <DescriptionSection title={undefined}>
        <span slot="description">
            Solar Explorer is my 2022 submission to <a href="https://developer.apple.com/wwdc22/swift-student-challenge/">Apple's Swift Student Challenge</a>. This is my third year submitting a project to the challenge and also my third year being one of the 350 winners.
        </span>
    </DescriptionSection>
    <DescriptionSection title={"About"}>
        <span slot="description">
            My submission this year is another sandbox based game that allows you to create an entire universe. You can spawn in planets, change their mass, and velocity and then watch how they change the universe. 
            On each of the planets there is an entire genetic simulation of an ecosystem that is based on my <a href="./tia">project last year</a>. The simulation for this year is greatly improved with a lot of new features and a much more accurate simulation.
        </span>
        <span slot="extras">
            <a href="https://github.com/ActuallyZach/Solar-Explorer-WWDC22" target="_blank">
                <img alt="Solar Explorer WWDC22 GitHub" srcset="/assets/badges/GithubBadge.png 1x, /assets/badges/GithubBadge@2x.png 2x" class="appstoreButton" />
            </a>        
        </span>
    </DescriptionSection>

</span>