<script lang="ts">
    import { works, openSource } from "$lib/data";

    export let currentProjects = works.filter((project) => {
        return project.category == "current";
    });

    export let currentTeamProjects = works.filter((project) => {
        return project.category == "currentTeam";
    });

    export let pastProjects = works.filter((project) => {
        return project.category == "past";
    });

    export let currentOpenSource = openSource.filter((project) => {
        return project.category == "current";
    });

    export let pastOpenSource = openSource.filter((project) => {
        return project.category == "past";
    });
</script>

<h1>👾 Programming</h1>
<p>
    I work on a lot of different programming projects. A lot stem from personal
    projects but some also stem from clubs I do at school. My personal projects
    usually focus on Apple Centric development and my school projects focus on
    firmware and hardware!
</p>
<section>
    <h2>What I am working on now</h2>
    <p>
        These projects are what I currently spend most of my time on. Most of
        the proejcts are Apple Platform based projects, many being iOS Apps or
        Swift Packages.
    </p>
    <h3>Projects</h3>
    {#if (currentProjects = [])}
        I am not working on anything at the moment... I will be soon so stay
        tuned!
    {/if}
    <ul class="alwaysUnderlinedLink">
        {#each currentProjects as project}
            <li>
                <p>
                    <a href={project.url}>{project.name}</a
                    >{@html project.description}
                </p>
            </li>
        {/each}
    </ul>
    <h3>Team Projects</h3>
    <ul class="alwaysUnderlinedLink">
        {#each currentTeamProjects as project}
            <li>
                <p>
                    <a href={project.url}>{project.name}</a
                    >{@html project.description}
                </p>
            </li>
        {/each}
    </ul>
    <h3>Open Source</h3>
    <ul class="alwaysUnderlinedLink">
        {#each currentOpenSource as project}
            <li>
                <p>
                    <a href={project.url}>{project.name}</a
                    >{@html project.description}
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
                    <a href={project.url}>{project.name}</a
                    >{@html project.description}
                </p>
            </li>
        {/each}
    </ul>
    <h3>Open Source</h3>
    <ul class="alwaysUnderlinedLink">
        {#each pastOpenSource as project}
            <li>
                <p>
                    <a href={project.url}>{project.name}</a
                    >{@html project.description}
                </p>
            </li>
        {/each}
    </ul>
</section>
