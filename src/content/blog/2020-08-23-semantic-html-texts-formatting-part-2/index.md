---
title: 'Semantic HTML: Texts and Formatting - part 2'
tags: ['Semantic HTML', 'Accessibility', 'Formatting']
author: 'Tatiane Aguirres Nogueira'
date: '2020-08-23'
featured: 'images/featured.jpg'
---

And here is the second part of the **Semantic HTML: Texts and Formatting**, where you will learn about paragraphs, sections, and 10 other elements that will help you write amazing HTML structures.

If you missed the previous part, I strongly recommend you visit <a href="https://www.tatianeaguirres.com/blog/2020-08-13-semantic-html-texts-formatting/" class="u-link" target="_blank" rel="noreferrer noopener">part 1 of this post</a>, which talked about the other 12 semantic HTML elements.

### Table of Contents

<ol class='u-ordered-list'>
  <li>
    <a class='u-link' href='#mark'>
      Mark Text element
    </a>
  </li>
  <li>
    <a class='u-link' href='#paragraph'>
      Paragraph element
    </a>
  </li>
  <li>
    <a class='u-link' href='#preformatted'>
      Preformatted Text element
    </a>
  </li>
  <li>
    <a class='u-link' href='#section'>
      Section element
    </a>
  </li>
  <li>
    <a class='u-link' href='#small'>
      Small: side comment element
    </a>
  </li>
  <li>
    <a class='u-link' href='#span'>
      Span element
    </a>
  </li>
  <li>
    <a class='u-link' href='#strong'>
      Strong Importance element
    </a>
  </li>
  <li>
    <a class='u-link' href='#subscript'>
      Subscript element
    </a>
  </li>
  <li>
    <a class='u-link' href='#superscript'>
      Superscript element
    </a>
  </li>
  <li>
    <a class='u-link' href='#time'>
      Time element
    </a>
  </li>
  <li>
    <a class='u-link' href='#thematic-break'>
      Thematic Break (Horizontal Rule) element
    </a>
  </li>
  <li>
    <a class='u-link' href='#variable'>
      Variable element
    </a>
  </li>
</ol>

<section style="position: relative;" class="u-margin-bottom-lg">
<span class="u-anchor" id="mark"></span>

### 1. Mark Text element

The Mark Text element `<mark>` represents the text that is **marked** or **highlighted** for reference or notation purposes, due to the relevance or importance of the passage marked in the surrounding context. Example:

```html
<p>Search results for "waffle":</p>
<hr />
<p>
  This Homemade Belgian <mark>Waffle</mark> Recipe is easy and makes delicious,
  authentic, Belgian waffles.
</p>
<p>
  A <mark>waffle</mark> is a dish made from leavened batter or dough that is
  cooked between two plates that are patterned to give a characteristic size,
  shape, and surface impression.
</p>
```

Tips and tricks about the mark text usage:

<ul class="u-unordered-list">
  <li>When used in a citation (<code>q</code>) or a block quote (<code>blockquote</code>), it usually indicates a text of special interest, but not marked in the original source material. Think of it like using a highlighter pen in a book to mark passages you find interesting.</li>
  <li>The <code>mark</code> element can indicate a part of the content that is relevant to the user at that moment, such as the result of a search.</li>
  <li>Don't use <code>mark</code> for syntax highlighting purposes, instead use a <code>span</code> element styled with CSS.</li>
  <li>Don't use <code>mark</code> to indicate that its contents have strong importance, instead use the <code>strong</code> element for this purpose.</li>
</ul>

The presence of the <code>mark</code> element is not advertised by most screen readers in their default configuration. You can easily change it by adding the following CSS style with the <code>::before</code> and <code>::after</code> pseudo-elements.

```css
mark::before,
mark::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

mark::before {
  content: ' [highlight start] ';
}

mark::after {
  content: ' [highlight end] ';
}
```

⚠️ **Warning**: Some screen reader users deliberately disable announcing content that creates extra verbosity. Therefore, it is important not to abuse this technique and only apply it in situations where the lack of knowledge of the content was highlighted can negatively affect the understanding.

</section>

<section style="position: relative;" class="u-margin-bottom-lg">
<span class="u-anchor" id="paragraph"></span>

### 2. Paragraph element

The Paragraph element `<p>` defines a paragraph. Browsers automatically add a single blank line before and after each <code>p</code> element. Example:

```html
<p>This is the first paragraph of text.</p>
<p>This is the second paragraph of text.</p>
```

Divide the content into paragraphs helps make the page more accessible. Screen readers and other assistive technologies provide shortcuts to allow your users to skip to the next or the previous paragraph.

⚠️ **Warning**: Use empty <code>p</code> elements to add space between paragraphs is a problem for screen reader users: the screen reader will announce the presence of the paragraph but without any content. It will confuse and frustrate the user. So, if you want to add extra space after the paragraph, do it with CSS:

```css
p {
  margin-bottom: 2rem; // increase white space after a paragraph
}
```

</section>

<section style="position: relative;" class="u-margin-bottom-lg">
<span class="u-anchor" id="preformatted"></span>

### 3. Preformatted Text element

The Preformatted Text element `<pre>` represents preformatted text which is to be presented exactly as written in the HTML file. The text is typically rendered using a non-proportional Monospace font. Whitespace inside this element is displayed as written. Example:

```
<pre>
   |\---/|
   | ,_, |
    \_`_/-..----.
 ___/ `   ' ,""+ \  sk
(__...'   __\    |`.___.';
  (_,...'(_,.`__)/'.....+
</pre>
```

As you can see below, the <code>pre</code> element keeps the whitespaces, making it possible to create an ASCII art drawing.

<pre style="margin-bottom: 30px;">
   |\---/|
   | ,_, |
    \_`_/-..----.
 ___/ `   ' ,""+ \  sk
(__...'   __\    |`.___.';
  (_,...'(_,.`__)/'.....+
</pre>

The <code>pre</code> element is also very useful when we need to add some code demonstration:

```html
<pre>
p {
  color: blue;
  font-size: 16px;
}
</pre>
```

⚠️ **Warning**: The only concern with using the preformatted text element is accessibility because users with low vision impairments who use screen readers will not understand what the preformatted text characters are representing when they are read out in sequence. A good solution for this is using a combination of the `<figure>` and `<figcaption>` elements, supplemented by a combination of <code>id</code> and the ARIA <code>role</code> and <code>aria-labelledby</code>. Example:

```html
<figure role="img" aria-labelledby="cat-caption">
  <pre>
   |\---/|
   | ,_, |
    \_`_/-..----.
 ___/ `   ' ,""+ \  sk
(__...'   __\    |`.___.';
  (_,...'(_,.`__)/'.....+
  </pre>
  <figcaption id="cat-caption">
    A cat lying. The cat is illustrated using preformatted text characters.
  </figcaption>
</figure>
```

</section>

<section style="position: relative;" class="u-margin-bottom-lg">
<span class="u-anchor" id="section"></span>

### 4. Section element

The Section element `<section>` represents a standalone section — which doesn't have a more specific semantic element to represent it — contained within an HTML document. Generally, sections have a heading. Example:

```html
<h1>How to take great photos</h1>

<section>
  <h2>Introduction</h2>
  <p>This is a very short introduction.</p>
</section>

<section>
  <h2>Using the cellphone</h2>
  <p>This is an explanation of how to take great photos using the cellphone.</p>
</section>
```

Tips and tricks about the section usage:

<ul class="u-unordered-list">
  <li>Each <code>section</code> should be identified by adding a heading (<code>h1</code>-<code>h6</code> element) as a first section child.</li>
  <li>If it makes sense to distribute the content of a <code>section</code>, then use the <code>article</code> element instead.</li>
  <li>Don't use a <code>section</code> as a generic element, as for styling purposes, use a <code>div</code> instead, which was made for this.</li>
</ul>

</section>

<section style="position: relative;" class="u-margin-bottom-lg">
<span class="u-anchor" id="small"></span>

### 5. Small: side comment element

The Small element `<small>` represents smaller text, like copyright, other side-comments, disclaimers, caveats, legal restrictions, or for satisfying licensing requirements. Example:

```html
<dl>
  <dt>Standard room</dt>
  <dd>80 € <small>breakfast included, VAT not included</small></dd>
</dl>
```

Tips and tricks about the small element usage:

<ul class="u-unordered-list">
  <li>The <code>small</code> element doesn't "de-emphasize" or lower the importance of the text. To mark text as not emphasized or important, simply do not mark it up with the <code>em</code> or <code>strong</code> elements respectively.</li>
  <li>Don't use the <code>small</code> element for subheadings, for that purpose, use the <code>hgroup</code> element.</li>
  <li>The <code>small</code> element is only intended for short runs of text. Don't use it for extended spans of text, such as multiple paragraphs, lists, or sections of text.</li>
</ul>

</section>

<section style="position: relative;" class="u-margin-bottom-lg">
<span class="u-anchor" id="span"></span>

### 6. Span element

The Span element `<span>` doesn’t mean anything on its own but can be useful when used together with the global attributes <code>class</code>, <code>lang</code>, or <code>dir</code>. It should be used only when no other semantic element is appropriate. Example:

```html
<blockquote>
  <span lang="es"
    >Es tan corto el amor y tan largo el olvido - Pablo Neruda</span
  >
</blockquote>
```

</section>

<section style="position: relative;" class="u-margin-bottom-lg">
<span class="u-anchor" id="strong"></span>

### 7. Strong Importance element

The Strong element `<strong>` represents strong importance, seriousness, or urgency for its contents. It can be used in a heading, caption, or paragraph to distinguish the part that matters from other parts that might be more detailed, more jovial, or merely boilerplate. Browsers typically render the contents in bold type. Example:

```html
<p><strong>Important:</strong> Some very important warning.</p>
```

Tips and tricks about the strong element usage:

<ul class="u-unordered-list">
  <li>Don't use the <code>strong</code> element just to apply bold styling. Use the CSS <code>font-weight</code> property for that purpose.</li>
  <li>If you want to draw attention to text without indicating that it's more important, use the <code>b</code> element instead.</li>
  <li>If you want to mark text that has stress emphasis, use the <code>em</code> element instead.</li>
</ul>

</section>

<section style="position: relative;" class="u-margin-bottom-lg">
<span class="u-anchor" id="subscript"></span>

### 8. Subscript element

The Subscript element `<sub>` specifies inline text which should be displayed as subscript for solely typographical reasons. Subscripts are typically rendered with a lowered baseline using smaller text. Example:

```html
<p>
  A water molecule (H<sub>2</sub>O) consists of three atoms: an oxygen atom and
  two hydrogen atoms.
</p>
```

Result:

A water molecule (H<sub>2</sub>O) consists of three atoms: an oxygen atom and two hydrogen atoms.

</section>

<section style="position: relative;" class="u-margin-bottom-lg">
<span class="u-anchor" id="superscript"></span>

### 9. Superscript element

The Superscript element `<sup>` specifies inline text which is to be displayed as superscript for solely typographical reasons. Superscripts are usually rendered with a raised baseline using smaller text. Examples:

```html
<p>
  The smartest students are
  <span lang="fr"
    ><abbr>M<sup>lle</sup></abbr> Gwendoline</span
  >
  and
  <span lang="fr"
    ><abbr>M<sup>me</sup></abbr> Denise</span
  >.
</p>

<p>
  A quadratic equation is a second-order <b>polynomial equation</b> in a single
  variable <var>x</var>
</p>
<p><var>ax</var><sup>2</sup> + <var>bx</var> + <var>c</var> = <var>0</var></p>
```

Result:

The smartest students are <span lang="fr"><abbr>M<sup>lle</sup></abbr> Gwendoline</span> and <span lang="fr"><abbr>M<sup>me</sup></abbr> Denise</span>.

A quadratic equation is a second-order <b>polynomial equation</b> in a single variable <var>x</var>: <br/>
<var>ax</var><sup>2</sup> + <var>bx</var> + <var>c</var> = <var>0</var>

</section>

<section style="position: relative;" class="u-margin-bottom-lg">
<span class="u-anchor" id="time"></span>

### 10. Time element

The Time element `<time>` represents a specific period in time. It may include the <code>datetime</code> attribute to translate dates into a machine-readable format, allowing for better search engine results or custom features such as reminders. Example:

```html
<footer>
  Published
  <time property="published" datetime="2020-08-22">two days ago</time>.
</footer>
```

The kind of content is limited to various kinds of dates, times, time-zone offsets, and durations. For further understanding see the <a href="https://www.w3.org/TR/html52/textlevel-semantics.html#the-time-element" class="u-link" target="_blank" rel="noreferrer noopener" >full list of contexts at W3C.org</a> in which this element can be used.

Tips and tricks about the time element usage:

<ul class="u-unordered-list">
  <li>If the <code>datetime</code> attribute is present, its value must be a representation of the element’s contents in a machine-readable format.</li>
  <li>If the <code>time</code> element doesn't have a datetime content attribute must not have any element descendants.</li>
</ul>

</section>

<section style="position: relative;" class="u-margin-bottom-lg">
<span class="u-anchor" id="thematic-break"></span>

### 11. Thematic Break (Horizontal Rule) element

The `<hr>` element is used for horizontal rules that act as dividers between sections. The horizontal rule or line has a semantic purpose, and although it's displayed as a horizontal rule in visual browsers, if you want to draw a horizontal line, you should do so using appropriate CSS. Example:

```html
<section>Content of the first section</section>
<hr />
<section>Content of the second section</section>
```

```css
hr {
  border: 0;
  border-bottom: 6px dotted orchid;
  width: 200px;
}
```

Result:

Content of the first section

<hr style="border: 0; border-bottom: 6px dotted orchid; width: 200px;" />
Content of the second section

</section>

<section style="position: relative;" class="u-margin-bottom-lg">
<span class="u-anchor" id="variable"></span>

### 12. Variable element

The `<var>` element represents a variable. This could be an actual variable in a mathematical expression or programming context, an identifier representing a constant, a symbol identifying a physical quantity, a function parameter, or just be a term used as a placeholder in prose. Example:

```html
<p>
  When I add <var>n</var> to <var>7</var> and then divide my answer by
  <var>4</var>, I get <var>5</var>.
</p>
<p>What is the value of <var>n</var>?</p>
```

</section>

### References:

<ul class='u-unordered-list'>
  <li>
    <a class='u-link' href='https://developer.mozilla.org/en-US/docs/Web/HTML' class='u-link' target='_blank' rel='noreferrer noopener'>
      MDN Web Docs
    </a>
  </li>
  <li>
    <a class='u-link' href='https://www.w3.org/WAI/' class='u-link' target='_blank' rel='noreferrer noopener'>
      W3C Web Accessibility Initiative (WAI)
    </a>
  </li>
  <li>
    <a class='u-link' href='https://www.asciiart.eu/' class='u-link' target='_blank' rel='noreferrer noopener'>
      ASCII Art Archive
    </a>
  </li>
</ul>

Happy coding!
