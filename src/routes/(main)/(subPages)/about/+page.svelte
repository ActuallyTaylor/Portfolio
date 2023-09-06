<script lang="ts">
    import ProjectCard from "$lib/components/ProjectCard.svelte"
    import { Data } from "$lib/data"

    export let currentProjects = Data.works.filter((project) => {
        return project.category == "current"
    })

    export let currentTeamProjects = Data.works.filter((project) => {
        return project.category == "currentTeam"
    })

    export let pastProjects = Data.works.filter((project) => {
        return project.category == "past"
    })

    export let currentOpenSource = Data.openSource.filter((project) => {
        return project.category == "current"
    })

    export let pastOpenSource = Data.openSource.filter((project) => {
        return project.category == "past"
    })

</script>

<style>
.cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

}
</style>

<section class="alwaysUnderlinedLink">
    <h1>👋 Hey!</h1>
    <p>
        I am Taylor Lineman, programmer, weekly writer, photographer and a student!
        You may know me as <i>ActuallyTaylor</i> on <a href="https://mastodon.social/@TaylorLineman">Mastodon</a>,  <a href="https://github.com/ActuallyTaylor">GitHub</a>, and <a href="https://twitter.com/TaylorLineman">Twitter</a>.
    </p>
    <p>
        Currently, I am studying Software Engineering at <a href="https://www.rit.edu/">Rochester Institute of Technology 🐅</a>.
        You can find me mostly working on my iOS Apps and Open Source projects, however recently
        I have ventured into Firmware development and started to love the challenge that comes with it.
    </p>
</section>

<section>
    <h2>What I am working on now</h2>
    <p>These projects are what I currently spend most of my time on. Most of the proejcts are Apple Platform based projects, many being iOS Apps or Swift Packages.</p>
    <h3>Projects</h3>
    <ul class="alwaysUnderlinedLink">
    {#each currentProjects as project}
        <li>
            <p>
                <a href="{project.url}">{project.name}</a>{@html project.description}
            </p>
        </li>
    {/each}
    </ul>
    <h3>Team Projects</h3>
    <ul class="alwaysUnderlinedLink">
    {#each currentTeamProjects as project}
        <li>
            <p>
                <a href="{project.url}">{project.name}</a>{@html project.description}
            </p>
        </li>
    {/each}
    </ul>
    <h3>Open Source</h3>
    <ul class="alwaysUnderlinedLink">
    {#each currentOpenSource as project}
        <li>
            <p>
                <a href="{project.url}">{project.name}</a>{@html project.description}
            </p>
        </li>
    {/each}
    </ul>
</section>


<section>
    <h2>What I have worked on in the past</h2>
    <h3>Projects</h3>
    <ul class="alwaysUnderlinedLink">
    {#each pastProjects as project}
        <li>
            <p>
                <a href="{project.url}">{project.name}</a>{@html project.description}
            </p>
        </li>
    {/each}
    </ul>
    <h3>Open Source</h3>
    <ul class="alwaysUnderlinedLink">
    {#each pastOpenSource as project}
        <li>
            <p>
                <a href="{project.url}">{project.name}</a>{@html project.description}
            </p>
        </li>
    {/each}
    </ul>
</section>
