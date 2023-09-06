<script lang="ts">
    import type { Project } from "$lib/models/Project"

    export let project: Project
</script>

<style>

.card {
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 125px;
    min-height: 175px;

    border-radius: 7px;

    margin: 10px;
}

.shape {
    width: 100px;
    height: 100px;

    border-radius: 7px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.shape h5 {
    font-family: 'Avenir Next', 'HelveticaNeue-Light', 'Helvetica Neue', Helvetica, Arial, sans-serif;

    text-transform: uppercase;
    font-weight: 500;
    padding: 0px;
    margin: 0px;
    font-size: 0.78em;
    color: var(--shapePrimaryFontColor);

    z-index: 2;
}

.shape h6 {
    font-family: 'Avenir Next', 'HelveticaNeue-Light', 'Helvetica Neue', Helvetica, Arial, sans-serif;

    text-transform: uppercase;
    color: var(--shapeSecondaryFontColor);
    font-weight: 400;
    padding: 0px;
    margin: 0px;
    font-size: 0.62em;

    z-index: 2;
}

.nodec {
    text-decoration: none;
}

a:hover {
    color: var(--text);
}
</style>

<a href="{project.url}" class="nodec">
    <div style='background: url("/assets/design/{project.id}/background.png"); background-size: contain; background-repeat: no-repeat; background-position: center;' class="card" >
        <div style='background: url("/assets/design/{project.id}/shape.svg"); background-size: contain; background-repeat: no-repeat; background-position: center;' class="shape" >
            <h5>{@html project.name}</h5>
            <h6>{project.subtitle}</h6>
        </div>
    </div>
</a>

