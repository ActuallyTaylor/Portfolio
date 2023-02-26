---
title: Xcode Cloud Workflow
slug: xcodeCloudWorkflow
description: How I use Xcode Cloud
author: Zachary Lineman
date: 2023-25-04T00:00:00.000Z
hex: f48d55
---
## Opening
When I started working on [Manny for Mastodon](/manny), I quickly ran into issues with clean architecture. Especially on the deployment and source control side of things. I knew that I needed a solution to this problem, one that would be simple to setup and also work really well with my development style and pipeline.

## Where it started
One of the first clubs that I joined after coming to college was the RIT Electric Vehicle team. I am on the firmware sub-team for the club, so we use a lot of git and continuous integration to ensure interoperability and to make our lives easier. When I started Manny, I realized that this type of approach was exactly what I needed to increase the rate of my development and testing pipeline.

I started by searching around for existing solutions for iOS app CI. I first took a look at GitHub actions but ended up going with Xcode Cloud. Apple gives developers a certain amount of build time per year to work with. This is really nice because it comes packaged in with the $99 dollar a year subscription to a developer account, which is already necessary.

## Getting Started With Xcode Cloud
Getting started was not too bad, overall it was pretty simple to add actions and pipelines directly inside of Xcode and have them automatically sync with my already existing repository on GitHub. I do really wish that the GitHub integration was better. Maybe I am doing something wrong but I could not for the life of me get merge blocking working. But everything else works beautifully.

## My Setup
### Workflows
So to start off, here are all of my Xcode Cloud Workflows. I have three workflows that make up my entire workflow of publishing and checking builds.

![Workflows](/assets/blogs/Workflows.png)

#### Check Development
The check development workflow is a catch all workflow. It will check any branch that is tagged as development. This ensures that all of my commits to my repository in development branches are caught by an Xcode Cloud workflow and are built in the cloud.

The purpose for this workflow is to allow me to constantly know if my current working product is a buildable app for both iOS and macOS. This allows me to focus most of my attention on one platform at a time, and ensure that the app stays buildable on both platforms throughout the process.

#### Main Release
The Main Release workflow manages all of my release builds to the App Store. This is the most in depth Workflow. It starts off by building for all of the platforms, the analyzing all built packages. After that it archives and uploads the releases to internal and external test flight users. After that I can easily submit the build for review on the App Store.

#### Nightly Release
If you are a beta tester for Manny this Workflow is your best friend. This release takes the main branch of my Manny repository and uploads it to all Test Flight users whenever there is a change. This allows me to keep the Test Flight builds of the app coming out extremely regularly and up to date with what I am currently working on.

### Branches
Xcode cloud does make up a large part of my testing and distribution pipeline, however the branches that I organize my code into also plays a large part in it. For the most part my development is all done on the `development`  branch. Whenever I finalize what I am currently working on, I make a pull request into the `main` branch. This allows me to review all of the changes I made throughout a development cycle and confirm that I didn't leave any leftover test code or anything that shouldn't be in a release version. Once the pull requests are completed the `Nightly Release` workflow runs and builds are sent out to iOS and macOS testers both external and internal

![Workflows](/assets/blogs/GitHubBranches.png)
