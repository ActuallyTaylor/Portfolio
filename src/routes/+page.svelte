<script lang="ts">
    import { Project } from "$lib/models/Project";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import BlogCard from "$lib/components/BlogCard.svelte";
    import { BlogEntry } from "$lib/models/BlogEntry";
    import { Data } from "$lib/data";
    import { dataset_dev } from "svelte/internal";

    // MARK: My Work
    let selectedWork = "allWork"

    function handleAllWorkClick() {
        selectedWork = "allWork"
    }

    function handleiOSClick() {
        selectedWork = "ios"
    }

    function handleSoftwareClick() {
        selectedWork = "software"
    }

    function handleSimulationClick() {
        selectedWork = "simulations"
    }

    let selectedInterest = "allInterests"

    function handleAllInterests() {
        selectedInterest = "allInterests"
    }

    function handlePhotography() {
        selectedInterest = "photography"
    }

    function handleinfrared() {
        selectedInterest = "infraredPhotography"
    }
</script>

<svelte:head>
    <link rel="stylesheet" href="/css/cssLibrary.css" />
    <link rel="stylesheet" href="/css/index.css" />
</svelte:head>

<style>
/*
    Header
*/

header {
    display: flex;
    justify-content: center;
    align-items: center;
}

header img {
    width: 128px;
    height: 128px;
    border-radius: 7px;
    margin: 10px;
}
.headerTitle {
    margin: 0px;
}

.headerTitle h1 {
    font-weight: 700;
    margin: 10px;
    padding: 0px;
}

.headerTitle h2 {
    font-weight: 600;
    margin: 10px;
    padding: 0px;
}
/*
Work Stack
*/
.WorkStack {
    display: flex;
}

.WorkStack img {
    padding-left: 30px;
    padding-top: 10px;
}

.WorkStack h4 {
    display: flex;
    align-items: center;
    padding-left: 30px;
}

.WorkStack h4 img {
    padding: 5px;
}

.WorkStack button {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

.underlinedHeader {
    text-decoration: underline;
}

.WorkCards {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
}
</style>

<header>
    <img src="/assets/icon.png" alt="User Icon" />
    <div class="headerTitle">
        <h1 class="headerTitle">Zachary Lineman</h1>
        <h2 class="headerTitle">Freelance iOS Development</h2>
    </div>
</header>
<!-- About Me -->
<section>
    <h1>About Me</h1>
    <p>
        Hey 👋 I am a New York based independent Developer. I have been working
        on iOS Apps since 2018. I started my jounrney of making iOS apps with
        simple one use apps for Journaling, To-Do and Financial tracking. From
        there I began to branch out into other areas. The first app that I
        released on the app store was in partnership with a business partner.
    </p>
</section>

<!-- My Work -->
<section>
    <div class="WorkStack HorizontalStack VerticallyCentered">
        <h1>My Work</h1>
        <img src="/assets/element/VerticalDivider.svg" alt="" height="32px" />
        <button on:click={handleAllWorkClick} id="allWork" class:underlinedHeader="{selectedWork == "allWork"}">
            <h4>
                All Work
                <img
                    src="/assets/design/headerShapes/hexagon.svg"
                    alt="iOS Apps Hexagon"
                    width="18"
                    height="18"
                />
                <img
                    src="/assets/design/headerShapes/diamond.svg"
                    alt="Software Diamond"
                    width="18"
                    height="18"
                />
                <img
                    src="/assets/design/headerShapes/circle.svg"
                    alt="Simulations Circle"
                    width="18"
                    height="18"
                />
            </h4>
        </button>
        <button on:click={handleiOSClick} id="iOS" class:underlinedHeader="{selectedWork == "ios"}">
            <h4>
                iOS Apps
                <img
                    src="/assets/design/headerShapes/hexagon.svg"
                    alt="iOS Apps Hexagon"
                    width="18"
                    height="18"
                />
            </h4>
        </button>
        <button on:click={handleSoftwareClick} id="software" class:underlinedHeader="{selectedWork == "software"}">
            <h4>
                Software
                <img
                    src="/assets/design/headerShapes/diamond.svg"
                    alt="Software Diamond"
                    width="18"
                    height="18"
                />
            </h4>
        </button>
        <button on:click={handleSimulationClick} id="simulations" class:underlinedHeader="{selectedWork == "simulations"}">
            <h4>
                Simulations
                <img
                    src="/assets/design/headerShapes/circle.svg"
                    alt="Simulations Circle"
                    width="18"
                    height="18"
                />
            </h4>
        </button>
    </div>
    <div class="WorkCards" id="WorkCards">
        {#each Data.works as project}
            {#if selectedWork == project.category || selectedWork == "allWork" }
                <ProjectCard project={project}/>
            {/if}
        {/each}
    </div>
</section>

<!-- My Interests -->
<section>
    <div class="WorkStack HorizontalStack VerticallyCentered">
        <h1>My Interests</h1>
        <img src="/assets/element/VerticalDivider.svg" alt="" height="32px" />
        <button id="allInterests" on:click={handleAllInterests}  class:underlinedHeader="{selectedInterest == "allInterests"}">
            <h4>
                All Interests
                <!-- <img src="/assets/design/headerShapes/diamond.svg" width="18" height="18"/>  -->
                <img
                    src="/assets/design/headerShapes/circle.svg"
                    alt="Photograpy Circle"
                    width="18"
                    height="18"
                />
                <img
                    src="/assets/design/headerShapes/hexagon.svg"
                    alt="infrared Hexagon"
                    width="18"
                    height="18"
                />
            </h4>
        </button>
        <button id="photography" on:click={handlePhotography}  class:underlinedHeader="{selectedInterest == "photography"}">
            <h4>
                Photography
                <img
                    src="/assets/design/headerShapes/circle.svg"
                    alt="Photograpy Circle"
                    width="18"
                    height="18"
                />
            </h4>
        </button>
        <button id="infraredPhotography" on:click={handleinfrared}  class:underlinedHeader="{selectedInterest == "infraredPhotography"}">
            <h4>
                infrared Photography
                <img
                    src="/assets/design/headerShapes/hexagon.svg"
                    alt="infrared Hexagon"
                    width="18"
                    height="18"
                />
            </h4>
        </button>
    </div>
    <div class="WorkCards" id="InterestsCards">
        {#each Data.interests as project}
            {#if selectedInterest == project.category || selectedInterest == "allInterests" }
                <ProjectCard project={project}/>
            {/if}
        {/each}
    </div>
</section>

<!-- My Skills -->
<!-- <section>
    <div class="WorkStack HorizontalStack VerticallyCentered">
        <h1>My Skills</h1>
    </div>
    <div>
        <progress id="file" value="10" max="10"> 32% </progress>
    </div>
</section> -->

<!-- Blog -->
<section>
    <div class="HorizontalStack VerticallyCentered">
        <h1>Blog</h1>
    </div>
    <div class="BlogCards" id="blogArray">
        {#each Data.blogs as blog}
            <BlogCard blog={blog}/>
        {/each}
    </div>
</section>
