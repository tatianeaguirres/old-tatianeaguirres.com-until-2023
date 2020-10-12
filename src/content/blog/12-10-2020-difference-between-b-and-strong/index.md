---
title: 'Understanding the Difference Between <b> and <strong>'
tags: ['Semantic', 'HTML', 'Accessibility']
author: 'Tatiane Aguirres Nogueira'
date: '2020-10-12'
featured: 'images/featured.jpg'
---

Have you ever wondered if you should use `<b>` or `<strong>`? Or have you wasted time googling to see which one is the most suitable? So I will save your time and share with you the formula that made me understand when to use and when not to use these HTML elements.

### Table of Contents

1. <a class='u-link' href='#use-b'>When to Use Bring Attention To element</a>
2. <a class='u-link' href='#use-strong'>When to Use Strong element</a>
3. <a class='u-link' href='#dont-use-any'>When Don't Use Any</a>

<section style="position: relative;" class="u-margin-bottom-xlg u-margin-top-xlg">
<span class="u-anchor" id="use-b"></span>

### 1. When to Use Bring Attention To element

<blockquote cite="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-b-element">
  <p>The <b>b</b> element represents a span of text to which attention is being drawn for utilitarian purposes without conveying any extra importance and with no implication of an alternate voice or mood, such as keywords in a document abstract, product names in a review, actionable words in interactive text-driven software, or an article lede.</p>
</blockquote>

The HTML Bring Attention To element is used to draw the reader's attention to the element's contents, which are not otherwise granted special importance. Historically, the `<b>` element was meant to make text boldface. Styling information has been deprecated since HTML4, so the meaning of this element has been changed.

Example:

```html
<p>
  The most expensive music videos in history are
  <b class="song-title">Scream</b> by Michael Jackson and Janet Jackson, and
  <b class="song-title">Die Another Day</b> by Madonna.
</p>
```

**Tip**: Imagine you are on a phone call, will you change the tone of your voice to emphasize the songs name in the example above? No, of course not. It's the same experience that a screen reader user will have because they don't need to hear these words emphasized if it doesn't have a strong emphasis on the phrase.

</section>

<section style="position: relative;" class="u-margin-bottom-xlg u-margin-top-xlg">
<span class="u-anchor" id="use-strong"></span>

### 2. When to Use Strong element

<blockquote cite="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-b-element">
  <p>The <b>strong</b> element represents strong importance, seriousness, or urgency for its contents. The strong element can be used in a heading, caption, or paragraph to distinguish the part that really matters from other parts that might be more detailed, more jovial, or merely boilerplate.</p>
</blockquote>

Examples:

**Seriousness**: the strong element can be used to mark up a warning or caution notice.

```html
<p>
  <strong><strong>Warning.</strong> Never feed it after midnight.</strong>
</p>
```

**Urgency**: the strong element can be used to denote contents that the user needs to see sooner than other parts of the document.

```html
<p><strong>Preheat the oven for 10 minutes at 180°.</strong></p>
<p>Mix all ingredients in a blender.</p>
<p>Place in a greased pan, and bake for 30 minutes.</p>
```

</section>

<section style="position: relative;" class="u-margin-bottom-xlg u-margin-top-xlg">
<span class="u-anchor" id="dont-use-any"></span>

### 3. When don't use any

There are some cases where you shouldn't use any of the elements mentioned above:

- If there is no semantic purpose to using the `<b>` element, you should use the CSS font-weight property with the value "bold" instead of making text bold.
- Don't mark titles and headings using the `<b>` element. For this purpose, use the `<h1>` to `<h6>` tags.
- The `<b>` element should be used as a last resort when no other element is more appropriate. In particular, stress emphasis should use the `<em>` element, importance should be denoted with the `<strong>` element, and text marked or highlighted should use the `<mark>` element.

</section>

<section class="u-margin-bottom-xlg u-margin-top-xlg">

### References:

- <a class='u-link' href='https://html.spec.whatwg.org/multipage/text-level-semantics.html' target='_blank' rel='noreferrer noopener'>HTML Living Standard</a>
- <a class='u-link' href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element' target='_blank' rel='noreferrer noopener'>MDN Web Docs</a>
- <a class='u-link' href='https://www.w3.org/WAI/' target='_blank' rel='noreferrer noopener'>W3C Web Accessibility Initiative (WAI)</a>

</section>

After these tips and examples, you will never again be googling the difference between `<b>` and `<strong>` and will be able to develop semantic HTML that will help screen reader users to really understand the importance you want to give to words and phrases.

Happy coding!
