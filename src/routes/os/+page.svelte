<script>
    import AboutContainer from "$lib/components/PortOS/About/AboutContainer.svelte";
    import AboutImageButtonStack from "$lib/components/PortOS/About/AboutImageButtonStack.svelte";
    import Window from "$lib/components/PortOS/Window.svelte";

    let innerWidth = 0
    let innerHeight = 0

    function openMyWorkWindow() {

    }
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<svelte:head>
    <link href='https://fonts.googleapis.com/css?family=Rubik' rel='stylesheet'>
    <link href='https://fonts.googleapis.com/css?family=Karla' rel='stylesheet'>

    <link rel="stylesheet" href="/css/PortOS.css" />
</svelte:head>

<div class="AppWrapper">
    <Window windowName="ABOUT_ME" top={innerHeight/2} left={innerWidth/2} isDraggable={false} centerAnchor={true} >
        <div class="AboutContainer HorizontalStack">
            <div>
                <AboutContainer width={"fit-content"} height={"fit-content"}>
                    <div class="MeOuterStack">
                        <div class=" HorizontalStack VerticallyCentered">
                            <img src="/assets/images/me.png" alt="Zachary Lineman" height="200" width="200"/>
                            <div class="MeStack">
                                <h1>Zachary Lineman</h1>
                                <h3>Freelance Development</h3>
                                <div class="MeInfoStack">
                                    <h3>🗺 Rochester New York</h3>
                                    <h3>🐦 @LinemanZachary</h3>
                                    <h3><img src="/assets/images/linkedin.svg" alt="Linkedin Logo" width="20" height="20"/>Rochester New York</h3>
                                </div>    
                            </div>
                        </div>    
                    </div>
                </AboutContainer>
                <AboutContainer width={"fit-content"} height={"fit-content"}>
                    <h1>About Me</h1>
                </AboutContainer>    
            </div>
            <div>
                <div class="HorizontalStack">
                    <AboutImageButtonStack name={"My Work"} buttonName={"View"} imagePath={"/assets/images/porty.png"} buttonCallback={openMyWorkWindow}></AboutImageButtonStack>
                    <AboutImageButtonStack name={"Contact"} buttonName={"Contact"} imagePath={"/assets/images/info.png"} buttonCallback={openMyWorkWindow}></AboutImageButtonStack>        
                </div>
                <div class="HorizontalStack">
                    <AboutImageButtonStack name={"Interests"} buttonName={"View"} imagePath={"/assets/images/porty.png"} buttonCallback={openMyWorkWindow}></AboutImageButtonStack>
                    <AboutImageButtonStack name={"Resume"} buttonName={"View"} imagePath={"/assets/images/info.png"} buttonCallback={openMyWorkWindow}></AboutImageButtonStack>        
                </div>
                <div class="HorizontalStack">
                    <AboutImageButtonStack name={"Blog"} buttonName={"Read"} imagePath={"/assets/images/porty.png"} buttonCallback={openMyWorkWindow}></AboutImageButtonStack>
                    <AboutImageButtonStack name={"Games"} buttonName={"Play"} imagePath={"/assets/images/info.png"} buttonCallback={openMyWorkWindow}></AboutImageButtonStack>        
                </div>

            </div>
        </div>
    </Window>
</div>


<style>
:global().HorizontalStack {
    display: flex;
    align-items: flex-start;
    justify-content: left;
}

:global().VerticallyCentered {
    display: flex;
    align-items: center;
}

:global(body) {
    background-image: url("/assets/images/backgrounds/bg_1.jpg");
    /* background-size:cover; */
    background-repeat: repeat;
    /* background-position: center; */
}

.AppWrapper {
    width: 100vw;
    height: 100vh;
    background-image: url("/assets/images/pixels.svg");
    /* background-size: contain; */
    background-repeat: repeat;
    /* background-position: center; */
}


.AboutContainer {
    display: flex;
    align-items: flex-start;
    justify-content: left;

    margin-left: 10px;
}

.MeOuterStack {
    margin-left: 30px;
    margin-right: 30px;
}

.MeStack {
    margin-left: 30px;
}

.MeStack h1 {
    padding: 0px;
    margin: 0px;
    font-weight: 400;
}

.MeStack h3 {
    padding: 0px;
    margin: 0px;
    font-weight: 400;
}

.MeInfoStack h3 {
    padding: 0px;
    margin-top: 10px;

    display: flex;
    align-items: center;

    font-weight: 400;
}


.MeInfoStack h3 img {
    padding-right: 5px;
}

</style>