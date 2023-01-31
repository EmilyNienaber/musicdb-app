This is an app created for a tech assessment and is for private use only.

Please run yarn or npm install before testing the functionality

# Assessment questions

### 1. Inline elements

Which of the following HTML element(s) are inline elements? Choose all that apply.
Pick ONE OR MORE options

- [x] label
- [ ] h2
- [x] button
- [x] a
- [ ] p

### 2. Block elements

Which of the following HTML element(s) are block elements? Choose all that apply.
Pick ONE OR MORE options

- [x] div
- [ ] a
- [ ] img
- [x] h1
- [ ] textarea

### 3. Presentational markup

Which of the following HTML element(s) is presentational markup? Choose all that apply.
Pick ONE OR MORE options

- [ ] em
- [x] b
- [ ] font
- [ ] strong
- [x] center

### 4. Hyperlinks

Which of the following are valid declaration(s) for a link? Choose all that apply.
Pick ONE OR MORE options

- [ ] ```<link type="email" src="mailto:careers@dvt.co.za">careers@dvt.co.za</link>```
- [x] ```<a id="link" href="tel:+27 (11) 759-5930">0117595930</a>```
- [ ] ```<link href="about.html">About</link>```
- [ ] ```<a target="_blank" src="/pages/about.html">About</a>```

### 5. Images

Which of the following are valid declaration(s) for an image? Choose all that apply.

Pick ONE OR MORE options

- [x] ```<img src="profile.jpg" title="Profile" style="width: 50vw; height: 50vw" />```
- [ ] ```<img href="profile.jpg" alt="Profile" style="width: 50px; height: 50px" />```
- [ ] ```<img href="logo.ico" alt="image/x-icon" />```
- [x] ```<img src="/images/logo.svg" width="50%" height="50%" />```

### 6. Doctype

Which of the following statement(s) are true about this declaration? Choose all that apply.

```<!DOCTYPE html>```

Pick ONE OR MORE options

- [ ] Malformed contents should be specifically treated and displayed in a consistent manner.
- [ ] This is not an html document type.
- [x] What follows may contain <audio> or <video> elements.
- [x] What follows will not directly contain CSS. Any stylesheets will be linked separately.
- [x] This document is the index.html page.

### 7. Inheritance (CSS)

Which of the following statement(s) are true about this rule-set? Choose all that apply.

```
body {
    font-family: Helvetica, Arial;
    background-color: blue;
    margin: 0 2px;
}
```

Pick ONE OR MORE options

- [x] When supported, the browser must prefer rendering all text in the <body> using Helvetica. Otherwise, using Arial.
- [ ] Any nested elements within the <body> must have 2 pixels of open space, horizontally on either side, outside them.
- [ ] The browser determines which font is used for rendering and changing the order of values for font-family has no effect.
- [x] Any nested elements within the <body> will not inherit its background-color. Instead, they will remain transparent.

### 8. Flexbox

What layout does this markup render?

```
<nav></nav>
<article></article>

<style>
  body {
    display: flex;
    flex-direction: column;
  }

  nav {
    flex-basis: 50%;
    order: 1;
    background-color: lime;
  }

  article {
    flex: 1;
    background-color: lime;
  }
</style>
```

Flexbox

Pick ONE option

- [ ] Green on top, lime on bottom
- [ ] Green on right, lime on left
- [x] green on bottom, lime on top
- [ ] green on left, lime on right

### 9. Font Size

What is the rendered font-size of this heading?

```
<main>
  <h1>About</h1>
</main>

<style>
  body {
    font: 16px "Times New Roman
  }

  main {
    font-size: 0.75rem;
  }

  h1 {
    font-size: 1.5em;
  }
</style>

```

Pick ONE option

- [ ] 12px
- [ ] 24px
- [x] 18px
- [ ] 20px

### 10. Selectors

Which of the following name(s) are rendered in red? Choose all that apply.

```
<ol reversed>
  <li>
    Amogelang
    
    <ol attr="*">
      <li id="first-child">SiyaBonga</li>
      <li id="1">Thandolwethu</li>
      <li class="child">Bandile</li>
    </ol>
  </li>
  
  <li>Lesedi</li>

  <li class="parent">
    Omphile

    <ol>
      <li class="first-child">Bokamoso</li>
      <li>Junior</li>
      <li class="last">Mpho</li>
    </ol>
  </li>
</ol>

<style>
  *:first-child li.parent:last-child > :nth-child(1) {
    color: red;
  }
</style>
```

Pick ONE OR MORE options

- [ ] Amogelang
- [ ] Siyabonga
- [ ] Thandolwethu
- [ ] Bandile
- [ ] Lesedi
- [ ] Omphile
- [x] Bokamoso
- [x] Junior
- [x] Mpho

### 11. Equivalence Testing in JS

Which of the following is a difference between == and === in Javascript? Select the most accurate answer.
Pick ONE option

- [ ] == compares type and value. === compares type.
- [ ] == compares value. === compares type
- [x] == compares value. === compares value and type
- [ ] == and === are equivalent

### 12. Which of the following is considered an object in Javascript?

Which of the following is considered an object in Javascript?
Pick ONE OR MORE options

- [x] function
- [ ] true
- [ ] 10
- [ ] string

### 13. What is the data type of null in Javascript?

What is the data type of null in Javascript?
Pick ONE option

- [ ] undefined
- [ ] integer
- [x] object
- [ ] none

### 14. Read-Only HTTP Method(s)

Identify all read only HTTP method(s) in REST architecture:
Pick ONE OR MORE options

- [ ] PUT
- [ ] HEAD
- [x] GET
- [ ] DELETE
- [ ] OPTIONS
- [ ] POST
- [ ] PATCH

### 15. REST: HTTP Status Codes

Which of the HTTP response codes describe(s) an attempt to access restricted resources?
Pick ONE OR MORE options

- [x] 401
- [ ] 402
- [x] 403
- [ ] 404
- [ ] None of these
