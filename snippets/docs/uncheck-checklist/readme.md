---
title: 'Uncheck a checklist'
date: '2021-07-09'
description: 'Check/uncheck the entire checklist in Google Documents.'
tags: ['docs']
categories: ['snippets']
images: ['./snippets/sheets/uncheck-checklist/screenshot.png']
---

## Check/uncheck the entire checklist in Google Documents

{{< toc >}}

<video controls width="100%" height="350px" autoplay="true" loop="true">
    <source src="./screenrecord.mp4"  type="video/mp4">
    Sorry, your browser doesn't support embedded videos.
</video>

Currently it is unknown if the checklist can be manipulated in Docs. [Clark Lind](https://groups.google.com/g/google-apps-script-community/c/Gl0hcbM0xM8/m/cqsL1krtAAAJ) suggests to replace a list item with a copy of one of them (which is in expected state -- check/uncheck). We need to know the `id` -- see `printListIds()` -- of the list in order to be able to change it. And also we need to know which element is in the right state. The code used the last one.

> **Important**. The code does not support paragraph deep copying.

### Snippet

- {{< externalLink >}}
- {{< commentLink >}}
- {{< scrvizLink >}}

{{< codeFromFile "index.js" >}}

### Run it

{{< codeFromFile "run.js" >}}

### Ui triggers

{{< codeFromFile "triggerActions.js" >}}

{{< clipboard >}}
