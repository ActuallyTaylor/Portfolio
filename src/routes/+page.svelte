<script lang="ts">
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import BlogCard from "$lib/components/BlogCard.svelte";
    import { Data } from "$lib/data";

    export let data;
    export const blogs = data.blogs;

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
    <html lang="en"/>
    <title>Taylor Lineman</title>
    <meta name="description" content="Taylor Lineman's Personal Website">  
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
@media screen and (max-width: 600px) {
    header {
        flex-direction: column;
        text-align: center;
    }
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

/* .linkStack img {
    width: 24px;
    height: 24px;
} */
/*
Work Stack
*/
.WorkStack {
    display: flex;
    align-items: center;
    justify-content: left;
}

@media screen and (max-width: 600px) {
    .FilterStack {
        display: flex;
        align-items: center;
        justify-content: left;
        overflow-x: scroll;
    }
}

.WorkStack h1 {
    min-width: fit-content;
}

.WorkStack img {
    padding-left: 30px;
    padding-top: 10px;
}

.WorkStack h4 {
    display: flex;
    align-items: center;
    padding-left: 30px;
    min-width: fit-content;
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
    min-width: fit-content;
}

.underlinedHeader {
    text-decoration: underline;
}

.WorkCards {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
}

.BlogCards {
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: columns: ;; */
}

@media screen and (max-width: 600px) {
    .WorkCards {
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
}
</style>

<header>
    <img src="/favicon.png" alt="User Icon" />
    <div class="headerTitle">
        <h1 class="headerTitle">Taylor Lineman</h1>
        <h2 class="headerTitle">Freelance iOS Development</h2>
        <div>
            <a href="https://twitter.com/TaylorLineman">
                <img src="assets/design/headerLinks/twitter.svg" style="height: 24px; width: 24px;" alt="Twitter Logo" title="My Twitter">
            </a>
            <a href="https://github.com/ActuallyTaylor">
                <img src="assets/design/headerLinks/github.svg" style="height: 24px; width: 24px;" alt="GitHub Logo" title="My GitHub">
            </a>
            <a href="https://www.linkedin.com/in/taylorlineman/">
                <img src="assets/design/headerLinks/linkedin.svg" style="height: 24px; width: 24px;" alt="LinkedIn Logo" title="My LinkedIn">
            </a>
            <a href="/files/TaylorLinemanResume.pdf">
                <img src="assets/design/headerLinks/doc.svg" style="height: 24px; width: 24px;" alt="Resume Logo" title="My Resume">
            </a>
            <a href="mailto://taylor.lineman@gmail.com">
                <img src="assets/design/headerLinks/mail.svg" style="height: 24px; width: 24px;" alt="Mail Logo" title="My Email">
            </a>
        </div>
    </div>
</header>
<!-- About Me -->
<section>
    <h1>About Me</h1>
    <p>
        Hey all 👋 My name is Taylor, I am an independent Developer based in New York! I mostly work in the world of iOS, but I have been venturing out into the other worlds of programming. Most recently my venture has taken me down the path of C++ and firmware development. Something that I have grown to love. 
    </p>

    <p>
        I started my journey into the world of iOS in 2018, with a simple trial and error apps for Journaling, To-Do and Financial tracking. From there I began to branch out into other areas. The <a href="./scum">first app</a> that I released on the app store was with a business partner, Ed Sarkissian. After releasing SCUM Map, I started to working on <a href="./jellycuts">Jellycuts</a>. After almost a year of developing Jellycuts and growing the community, I released it onto the App Store. As of late, I have been working hard on bring <a href="./manny">Manny for Mastodon</a> to life! Manny is a Mastodon client for iOS and macOS and has been a ton of fun to work on. On top of new development, I continue to support Jellycuts and SCUM Map.
    </p>
</section>

<!-- My Work -->
<section>
    <div class="WorkStack">
        <h1>My Work</h1>
        <img src="/assets/element/VerticalDivider.svg" alt="" height="32px" width="5px" />
        <div class="FilterStack">
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
        <div class="FilterStack">
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
    <div class="WorkStack HorizontalStack VerticallyCentered">
        <h1>Blog</h1>
        <img src="/assets/element/VerticalDivider.svg" alt="" height="32px" />
        <a href="https://actuallytaylor.com/blog/rss">
            <h4>
                https://actuallytaylor.com/blog/rss
            </h4>    
        </a>
    </div>
    <div class="BlogCards" id="blogArray">
        {#each blogs as blog}
            <BlogCard blog={blog}/>
        {/each}
    </div>
</section>
