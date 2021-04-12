---
title: 'Unlink all URLs in the range'
date: '2021-04-12'
description: 'Using the RichTextValues for clearing a specific range'
tags: ['sheets', 'Sheets advanced service']
categories: ['snippets']
images: ['./snippets/sheets/unlink_urls/screenrecord.gif']
---

{{< toc >}}

## Unlink all URLs in the range

![Snippet of Unlink all URLs in the range](./screenrecord.gif)

### Snippet

- {{< externalLink >}}
- {{< commentLink >}}
- {{< scrvizLink >}}

{{< codeFromFile "index.js" >}}

### Run it

{{< codeFromFile "run.js" >}}

### Issues

This code does not remove links if they are the only content in the cell. See [google apps script - Unlink all hyperlinks from a sheet - Stack Overflow](https://stackoverflow.com/questions/62271646/unlink-all-hyperlinks-from-a-sheet/62275201#62275201)
