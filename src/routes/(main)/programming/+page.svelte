<script lang="ts">
    import type { PageProps } from './$types';

	let { data }: PageProps = $props();
    
    // Deconstruct data from page laod.
    let {
        currentProjects,
        currentTeamProjects,
        pastProjects,
        currentOpenSource,
        pastOpenSource
    }  = data;

</script>

<h1>👾 Programming</h1>
<p>
    I work on a lot of different programming projects. A lot stem from personal
    projects but some also stem from clubs I do at school. My personal projects
    usually focus on Apple Centric development and my school projects focus on
    firmware and hardware!
</p>
<section>
    <h2>What I'm working on now.</h2>
    <p>
        These projects are what I currently spend most of my time on. Most of
        the proejcts are Apple Platform based projects, many being iOS Apps or
        Swift Packages.
    </p>
    <h3>Projects</h3>
    {#if (!currentProjects || currentProjects.length === 0)}
        I am not working on any public personal projects at the moment... I will be soon so stay
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
    <h2>What I've worked on in the past.</h2>
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
