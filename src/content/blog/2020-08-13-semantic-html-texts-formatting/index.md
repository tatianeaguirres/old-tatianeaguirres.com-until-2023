---
title: 'Semantic HTML: Texts and Formatting - part 1'
tags: ['Semantic HTML', 'Accessibility', 'Formatting']
author: 'Tatiane Aguirres Nogueira'
date: '2020-08-13'
featured: 'images/featured.jpg'
---

Unfortunately, many websites are developed using an absurd amount of `<p>` and `<div>`. And that's a shame because HTML5 has about 100 tags. When we don't use all the power of semantic HTML, we only have to lose, in terms of accessibility and maintenance.

Thinking about text and formatting, I selected 24 HTML tags that will help you to boost your web application. However, as it is a lot of content, I will divide this post into two parts, each talking about 12 important tags for writing consistent HTML.

### Table of Contents

1. <a class='u-link' href='#abbreviation'>Abbreviation element</a>
2. <a class='u-link' href='#address'>Address element</a>
3. <a class='u-link' href='#article'>Article element</a>
4. <a class='u-link' href='#block-quotation'>Block Quotation element</a>
5. <a class='u-link' href='#citation'>Citation element</a>
6. <a class='u-link' href='#code'>Code element</a>
7. <a class='u-link' href='#content-division'>Content Division element</a>
8. <a class='u-link' href='#data'>Data element</a>
9. <a class='u-link' href='#emphasis'>Emphasis element</a>
10. <a class='u-link' href='#heading'>Heading elements</a>
11. <a class='u-link' href='#keyboard-input'>Keyboard Input element</a>
12. <a class='u-link' href='#keyboard-input'>Line Break element</a>

<section style="position: relative;" class="u-margin-bottom-xlg u-margin-top-xlg">
<span class="u-anchor" id="abbreviation"></span>

### 1. Abbreviation element

The Abbreviation element `<abbr>` represents an abbreviation or acronym. The title attribute is optional and can provide an expansion or description for the abbreviation. If present, the title must contain this full description and nothing else. Example:

```html
<blockquote>
  <abbr title="Cascading Style Sheets">CSS</abbr> is awesome!
</blockquote>
```

This description is often presented by browsers as a tooltip when the mouse cursor hovers over the element. Most browsers by default add a dotted underline and small caps to the text inside the abbreviation tag, but if you want to avoid small caps, I suggest you use the following CSS code:

```css
abbr {
  font-variant: none;
}
```

</section>

<section style="position: relative;" class="u-margin-bottom-xlg">
<span class="u-anchor" id="address"></span>

### 2. Address element

The Address element `<address>` indicates that the enclosed HTML provides contact information for a person, people, or organization. The address tag should provide any type of contact information, such as a physical address, URL, email address, phone number, social media handle, geographic coordinates, and so forth. It also needs to have the name of the person, people, or organization to which the contact information refers. Example:

```html
<address>
  You can contact the author, Tatiane Aguirres Nogueira, at
  <a href="https://www.tatianeaguirres.com">tatianeaguirres.com</a>. If you see
  any bugs, please <a href="mailto:aguirres.tati@gmail.com">contact her</a>. The
  author is currently based at: Utrecht, Netherlands
</address>
```

</section>

<section style="position: relative;" class="u-margin-bottom-xlg">
<span class="u-anchor" id="article"></span>

### 3. Article element

The Article element `<article>` represents a self-contained composition in an application, which is intended to be independently distributable or reusable. Examples include: a forum post, a magazine or newspaper article, or a blog entry.

```html
<article class="all-series">
  <h1>Most Popular Shows On Netflix (So Far) In 2020</h1>
  <article class="series">
    <h2>1. Tiger King: Murder, Mayhem and Madness</h2>
    <p>
      A zoo owner spirals out of control amid a cast of eccentric characters in
      this true murder-for-hire story from the underworld of big cat breeding.
    </p>
  </article>
  <article class="series">
    <h2>2. Ozark</h2>
    <p>
      A financial adviser drags his family from Chicago to the Missouri Ozarks,
      where he must launder $500 million in five years to appease a drug boss.
    </p>
  </article>
  <article class="series">
    <h2>3. Outer Banks</h2>
    <p>
      On an island of haves and have-nots, teen John B enlists his three best
      friends to hunt for a legendary treasure linked to his father's
      disappearance.
    </p>
  </article>
</article>
```

Tips and tricks about the article usage:

- Each article should be identified, typically by including a heading (<code>h1</code>-<code>h6</code> element) as a child of the article element.
- When an article element is nested, the inner element represents an article related to the outer element. For example, the comments of a blog post can be article elements nested in the article representing the blog post.
- Author information of an article element can be provided through the <code>address</code> element, but it doesn't apply to nested article elements.
- A given document can have multiple articles in it, for example, on a blog that shows the text of each article one after another as the reader scrolls, each post would be contained in an article element, possibly with one or more <code>section</code> elements within.

</section>

<section style="position: relative;" class="u-margin-bottom-xlg">
<span class="u-anchor" id="block-quotation"></span>

### 4. Block Quotation element

The Block Quotation element `<blockquote>` indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation. A URL for the source of the quotation may be given using the cite attribute. Example:

```html
<blockquote cite="https://overreacted.io/what-are-the-react-team-principles/">
  <p>
    Sometimes as we work backwards, we realize we need to change the whole
    approach to enable the right user experience. We can’t see that if we start
    with the API. So we put UI before API.
  </p>
</blockquote>
```

Some tips and tricks about the Block Quotation element:

- To change the indentation applied to the quoted text, use the CSS margin-left and/or margin-right properties, or the margin shorthand property.
- To include shorter quotes inline rather than in a separate block, use the <code>q</code> (Quotation) element.
- The cite attribute must contain a URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote.

</section>

<section style="position: relative;" class="u-margin-bottom-xlg">
<span class="u-anchor" id="citation"></span>

### 5. Citation element

The Citation element `<cite>` is used to describe a reference to a cited creative work and must include the title of that work. The reference may be in an abbreviated form according to context-appropriate conventions related to citation metadata. Example:

```html
<blockquote>
  <p>"Nitwit! Blubber! Oddment! Tweak!" - Albus Dumbledore</p>
  <footer>
    <cite>
      <a href="https://www.jkrowling.com/book/harry-potter-philosophers-stone/">
        Harry Potter and the Philosopher's Stone
      </a>
    </cite>
    by J.K. Rowling (Chapter 7, The Sorting Hat).
  </footer>
</blockquote>
```

The content of the citation element could be a book (as above), a song, a film, a tweet, a website, a blog post, among many others. You can see the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite#Usage_notes" class="u-link" target="_blank" rel="noreferrer noopener">full list of creative work</a> that might be cited for further understanding.

Usually, browsers style the contents of a cite element in italics by default. You can easily avoid this by adding the following style:

```css
cite {
  font-style: normal;
}
```

</section>

<section style="position: relative;" class="u-margin-bottom-xlg">
<span class="u-anchor" id="code"></span>

### 6. Code element

The Code element `<code>` displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code. By default, the content text is displayed using the monospace font. Example:

```html
<p>
  The <code>map()</code> method creates a new array populated with the results
  of calling a provided function on every element in the calling array.
</p>
```

Result: The <code>map()</code> method creates a new array populated with the results of calling a provided function on every element in the calling array.

To represent multiple lines of code, wrap the `<code>` element within a `<pre>` element. The code element by itself only represents a single phrase of code or line of code.

</section>

<section style="position: relative;" class="u-margin-bottom-xlg">
<span class="u-anchor" id="content-division"></span>

### 7. Content Division element

The Content Division element `<div>` is the generic container for flow content. It doesn't affect on the content or layout until styled using CSS. As a "pure" container, the div element does not inherently represent anything. Instead, it's used to group content so it can be easily styled using the class attribute. Example:

```html
<div>
  <img src="cat.jpg" alt="white and black cat sitting on the couch" />
  <p>My cat Felicia likes to sit on the couch like a human.</p>
</div>
```

The above code will have no sign of using a div element, see below:

<div>
  <img src="https://gpfg6w.ch.files.1drv.com/y4mukj9ZJqoLqe3_lhAdbxGfGroNa1gSvvkYSvOIJ2KJp9kop00uOu5LHoHpWh007rzaqRfMNWMUjy-EywGYPyxg0cuOX4z-alFa87wsl3AT_SSFFlixR9bDL8SXdqsTTxjARLvaNLf-_Ym3rJjxaQbl9HoyN8aH5XaMPDSmreJ9JwOquiwO0IyVw13VyrWxLTAsHLRwHL7yNFdNian5bhKSA?width=495&height=660&cropmode=none" alt="white and black cat sitting on the couch" height="auto" width="100%" style="max-width:150px;" />
  <p>My cat Felicia likes to sit on the couch like a human.</p>
</div>

⚠️ **Warning**: The div element should be used only when no other semantic element (such as `<article>`, `<section>` or `<nav>`) is appropriate.

</section>

<section style="position: relative;" class="u-margin-bottom-xlg">
<span class="u-anchor" id="data"></span>

### 8. Data element

The Data element `<data>` links a given piece of content with a machine-readable translation. Example:

```html
<p>Delivery order:</p>
<ul>
  <li><data value="003">Pizza margherita</data></li>
  <li><data value="009">Sparkling water</data></li>
  <li><data value="012">Tiramisù</data></li>
</ul>
```

In the example above, each data element receives a distinct product, and the attribute <code>value</code> assigns the product code with it.

⚠️ **Warning**: As I'm Brazilian, I have seen many cases of the `<data>` element being used incorrectly for dates, because in Brazil the word "data" means "date", so this error ends up going unnoticed. So stay tuned, if the content is a date, you must use the `<time>` element.

</section>

<section style="position: relative;" class="u-margin-bottom-xlg">
<span class="u-anchor" id="emphasis"></span>

### 9. Emphasis element

The Emphasis element `<em>` is used to define emphasized text. The content inside is typically displayed in italic. A screen reader will pronounce the words in <code>em</code> with an emphasis, using verbal stress. Examples:

```html
<p>
  When mysterious letters start arriving on his doorstep, Harry Potter has
  <em>never</em> heard of Hogwarts School of Witchcraft and Wizardry.
</p>
```

When should we <em>emphasize</em>?

- When you just want to emphasize a certain word or phrase in a sentence should use <code>em</code>. Example: You <em>can't</em> go to the beach without sunscreen!
- Titles of works such as books, movies, magazines, newspapers, plays, works of art, TV/radio programs or CD/Album should use <code>cite</code>. Example: <cite>The Simpsons</cite>.
- Foreign words, technical terms, and unfamiliar words should use <code>i</code>. Example: <i>pneumoultramicroscopicossilicovulcanoconiótico</i> is the largest word in the Brazilian Portuguese language, and it means "person suffering from a lung disease, pneumoconiosis, caused by the aspiration of volcanic ash".

</section>

<section style="position: relative;" class="u-margin-bottom-xlg">
<span class="u-anchor" id="heading"></span>

### 10. Heading elements

The Section Heading `<h1>`-`<h6>` elements represent six levels of section headings. <code>h1</code> is the highest section level and <code>h6</code> is the lowest. Example:

```html
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
<h5>Heading level 5</h5>
<h6>Heading level 6</h6>
```

<h1 style="font-style: normal; font-family: 'Rubik', sans-serif; text-transform: none; margin-bottom: 10px; font-weight: 600;">Heading level 1</h1>
<h2 style="font-style: normal; font-family: 'Rubik', sans-serif; text-transform: none; margin-bottom: 10px; font-weight: 600;">Heading level 2</h2>
<h3 style="font-style: normal; font-family: 'Rubik', sans-serif; text-transform: none; margin-bottom: 10px; font-weight: 600;">Heading level 3</h3>
<h4 style="font-style: normal; font-family: 'Rubik', sans-serif; text-transform: none; margin-bottom: 10px; font-weight: 600;">Heading level 4</h4>
<h5 style="font-style: normal; font-family: 'Rubik', sans-serif; text-transform: none; margin-bottom: 10px; font-weight: 600;">Heading level 5</h5>
<h6 style="font-style: normal; font-family: 'Rubik', sans-serif; text-transform: none; font-weight: 600; margin-bottom: 30px;">Heading level 6</h6>

Tips and tricks about heading usage:

- Don't skip heading levels, such as <code>h1</code> to <code>h3</code>, because screen reader software users often jump from heading to heading to quickly determine the content of the page. This will confuse them.
- Your application should contain just one <code>h1</code>, and its content is usually the same as the <code>title</code> element.
- Don't use a heading <code>h1</code> several times in the content just because of its style. Instead of it, create a CSS class to style this text. Don't use headlines just for visual purposes.

</section>

<section style="position: relative;" class="u-margin-bottom-xlg">
<span class="u-anchor" id="keyboard-input"></span>

### 11. Keyboard Input element

The Keyboard Input element `<kbd>` represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device. By default, browsers render the contents of a <code>kbd</code> element using its default <i>monospace</i> font. Example:

```html
<p>Use the <kbd>tab</kbd> key to navigate the website.</p>
```

Result: Use the <kbd style="background-color: #eee; border-radius: 3px; border: 1px solid #b4b4b4; box-shadow: 0 1px 1px rgba(0, 0, 0, .2), 0 2px 0 0 rgba(255, 255, 255, .7) inset; color: #333; display: inline-block; font-size: .85em; font-weight: 700; line-height: 1; padding: 2px 4px; white-space: nowrap;">tab</kbd> key to navigate the website.

</section>

<section style="position: relative;" class="u-margin-bottom-xlg">
<span class="u-anchor" id="line-break"></span>

### 12. Line Break element

The Line Break element `<br>` produces a line break in the text. It's useful for writing a poem or an address, where the division of lines is significant.

```html
<address>
  Anne Frank House<br />
  Westermarkt 20,<br />
  1016 GV<br />
  Amsterdam<br />
  The Netherlands
</address>
```

⚠️ **Warning**: there are some common bad practices that you should avoid when using the line break element:

- Don't use <code>br</code> to create margins between paragraphs. Wrap them in <code>p</code> elements and use the CSS <code>margin</code> property to control their size.
- Don't use margin on <code>br</code> elements themselves to increase the spacing between the lines of text in the block. Use the <code>line-height</code> property that was designed for that purpose.
- Separate paragraphs of text using <code>br</code> is problematic for screen reader users, because the screen reader may announce the presence of the element, but not any content contained. This can be a confusing and frustrating experience for the user. Use <code>p</code> elements, and use CSS properties like margin to control their spacing.

</section>

### References:

- <a class='u-link' href='https://developer.mozilla.org/en-US/docs/Web/HTML' class='u-link' target='_blank' rel='noreferrer noopener'>MDN Web Docs</a>
- <a class='u-link' href='https://www.w3.org/WAI/' class='u-link' target='_blank' rel='noreferrer noopener'>W3C Web Accessibility Initiative (WAI)</a>

The next post will talk about paragraphs, sections, and 10 other elements that will help you write amazing pages with Semantic HTML. I'll see you there.

Happy coding!
