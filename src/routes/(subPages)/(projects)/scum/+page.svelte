<script lang="ts">
    import LeftAlignedDescriptionSection from "$lib/components/PageSections/LeftAlignedDescriptionSection.svelte"
    import ProjectPageHeader from "$lib/components/ProjectPage/ProjectPageHeader.svelte"
    import ProjectPageNav from "$lib/components/ProjectPage/ProjectPageNav.svelte"

    import { Data } from "$lib/data"
    import { Project } from "$lib/models/Project"

    const id = "scum"
    export let project: Project = Data.works.find((obj: Project) => {
        return obj.id == id
    }) ?? new Project("undefined", "undefined", "undefined", "undefined")
</script>
<svelte:head>
  <title>{project.name} - Project</title>
  <meta name="description" content="SCUM Map, Know the game">
</svelte:head>

<span>
    <ProjectPageNav id={id} name={project.name}/>
    <ProjectPageHeader projectID={id} name={project.name} subtitle="Know the game" headerColor="#D1FFCA"/>

    <LeftAlignedDescriptionSection title="SCUM Map App" path="/assets/images/scum/Screenshot.png">
        <span slot="description">
            Scum map is a map app for the game Scum. It has a modern and sleek design that allows for multiple sets of pins across the map and user-added fully customizable pins. User added pins can shared between you and your squad-mates. Pins sync instantly between you and your mates, making sure that you never miss a change in plans.
        </span>
        <span slot="extras">
            <a href="https://apps.apple.com/us/app/id1515805855" target="_blank">
                <img alt="Scum AppStore Badge" srcset="/assets/badges/appBadge.png 1x, /assets/badges/appBadge@2x.png 2x" class="appstoreButton" />
            </a>
        </span>
    </LeftAlignedDescriptionSection>
</span>