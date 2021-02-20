---
title: 'Column names to numbers and vice versa'
date: '2021-02-19'
description: 'Shows how to convert base 26 alphabet numbers and base 10 decimal numbers'
tags: ['js', 'common']
categories: ['snippets']
---

{{< toc >}}

## Column names to numbers and vice versa

### Define Base 26 ABC

- A<sub>26</sub> = a<sub>26</sub> = 1<sub>10</sub>
- B<sub>26</sub> = b<sub>26</sub> = 2<sub>10</sub>
- C<sub>26</sub> = c<sub>26</sub> = 3<sub>10</sub>
- ...
- Y<sub>26</sub> = y<sub>26</sub> = 25<sub>10</sub>
- Z<sub>26</sub> = z<sub>26</sub> = 26<sub>10</sub>
- AA<sub>26</sub> = aa<sub>26</sub> = 27<sub>10</sub>
- ...
- ZZ<sub>26</sub> = zz<sub>26</sub> = 702<sub>10</sub>

There are several **_base 26_** types. Apps Scripts works with Sheets. Therefore, let's add some rules:

1. A<sub>26</sub> is 1<sub>10</sub>
1. Z<sub>26</sub> is 26<sub>10</sub>
1. Ignore case: A<sub>26</sub> is equal a<sub>26</sub>

The code below shows how you can get **_base 10_** from **_base 26_** and vice versa. In other words it helps you know the column number by letters or column letters by number.

### Snippets

- {{< externalLink >}}
- {{< commentLink >}}

{{< codeFromFile "index.js" >}}

### Test

{{< codeFromFile "test.js" >}}

### The short list of the first 250 numbers

You can see the list for quick access [Conversion list of 250 first numbers](./first_250_column_to_number)

### Art

Some examples of relating column names and numbers are shown below

#### Column names to number

```js
[
  ['ABC', 731],
  ['AF', 32],
  ['ALEX', 25842],
  ['ALL', 1000],
  ['COFE', 63029],
  ['GAS', 4777],
  ['TEA', 13651],
  ['UI', 555],
];
```

#### Numbers to column name

```js
[
  [255, 'IU'],
  [1000, 'ALL'],
  [2048, 'BZT'],
  [1613808548650, 'GRXBSEBKL'],
];
```
