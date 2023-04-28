<script lang="ts">
    import DescriptionSection from "$lib/components/PageSections/DescriptionSection.svelte";
    import LeftAlignedDescriptionSection from "$lib/components/PageSections/LeftAlignedDescriptionSection.svelte";
    import VideoSection from "$lib/components/PageSections/VideoSection.svelte";
    import ProjectPageHeader from "$lib/components/ProjectPage/ProjectPageHeader.svelte";
    import ProjectPageNav from "$lib/components/ProjectPage/ProjectPageNav.svelte";
</script>
<svelte:head>
  <title>Manny Privacy Policy</title>
  <meta name="description" content="Learn how your data is used in Manny">
</svelte:head>
<span>
    <ProjectPageNav id={"manny"} name={"Manny Privacy"}/>
    <DescriptionSection title="Your Data Inside of Manny">
        <span slot="description">
            When you use Manny, you are directly talking to the Mastodon instance that your account resides on. All requests go directly to the instances with no middle man. Images and request data are cached on device to reduce the load on instances. When the app is started a packet of analytics is sent to Telemetry Deck. This is used to allow the developer to better understand what features need the most attention. This data is not linked to you in any way and can not be used to track you, nor is it sold to any Third Parties.
            <br>
            <br>
            When you start a Sponsorship / Subscription inside of Manny, a UUID representing your purchasing account is sent to RevenueCat to keep track and manage purchases. This data is purely used to track if you currently have a subscription. There are plans to remove RevenueCat from the app in the future, in favor of a more lightweight alternative.
        </span>
    </DescriptionSection>
    <DescriptionSection title="Your Data Outside of Manny">
        <span slot="description">
            When you sign up for notifications, we register our APNS routing server with your instance. This routing server takes incoming connections from your instance, these connections send WebPush notifications to our server. From there our server redirects the WebPush subscriptions to your device using the Apple Push Notifications Service. These notifications are encrypted throughout the entire process and are never saved at any point.
        </span>
    </DescriptionSection>
</span>