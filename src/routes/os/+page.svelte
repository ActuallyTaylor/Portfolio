<script>

    import AboutContainer from "$lib/components/PortOS/About/AboutContainer.svelte";
    import AboutImageButtonStack from "$lib/components/PortOS/About/AboutImageButtonStack.svelte";
import Window from "$lib/components/PortOS/Window.svelte";

</script>
<svelte:head>
    <link href='https://fonts.googleapis.com/css?family=Rubik' rel='stylesheet'>
    <link href='https://fonts.googleapis.com/css?family=Karla' rel='stylesheet'>

    <link rel="stylesheet" href="/css/PortOS.css" />
</svelte:head>

<Window windowName="ABOUT_ME" height={"627px"} width={"1194px"} top={100} left={100} isDraggable={true}>
    <div class="AboutContainer HorizontalStack">
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
        <AboutImageButtonStack></AboutImageButtonStack>
        <AboutImageButtonStack></AboutImageButtonStack>
    </div>
</Window>


<style>
:global().HorizontalStack {
    display: flex;
    align-items: flex-start;
    justify-content: left;
}

:global().HorizontallyCentered {
    display: flex;
    justify-content: center;
}

:global().VerticallyCentered {
    display: flex;
    align-items: center;
}

.AboutContainer {
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