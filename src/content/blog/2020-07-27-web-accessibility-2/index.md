---
title: 'Web Accessibility II: Make Your Website Accessible to Screen Readers Users'
tags: ['Web', 'Accessibility', 'Screen Readers']
author: 'Tatiane Aguirres Nogueira'
date: '2020-07-27'
featured: 'images/featured.jpg'
---

This is the second post of the "Web Accessibility Series", and here you will learn what your application needs to be accessible to screen readers users in 8 steps.

Screen readers convert digital text into synthesized speech, and they allow users to listen to the website content and navigate with the keyboard. This technology helps people with special needs to have independence and privacy to surf the internet, and our duty - as front-end developers - is to develop an accessible application for these users.

According to <a class="u-link" href="https://webaim.org/projects/screenreadersurvey8/" target="_blank" rel="noreferrer noopener">WebAIM Screen Reader User Survey</a> conducted in 2019, 87.6% of respondents use a screen reader due to a disability. And among those who have a disability, 76% have blindness and 18.5% have low vision (visually impaired). There were also respondents with cognitive impairment (3.3%), deafness or hard of hearing (6%), motor impairment (2%), and others (3.7%).

This shows us that the vast majority of screen reader users have some kind of visual impairment, but they are not the only ones who use this technology.

A screen reader user normally uses his keyboard to navigate the website, so I recommend you <a class="u-link" href="https://www.tatianeaguirres.com/blog/2020-07-20-web-accessibility-1/" target="_blank" rel="noreferrer noopener">read my first post of the Web Accessibility Series</a>, which talks about accessibility for keyboard users and complements this post.

<h3>Table of Contents</h3>
<ol class='u-ordered-list'>
  <li>
    <a class='u-link' href='#language'>
      Language
    </a>
  </li>
  <li>
    <a class='u-link' href='#keyboard-support'>
      Links
    </a>
  </li>
  <li>
    <a class='u-link' href='#headings'>
      Headings
    </a>
  </li>
  <li>
    <a class='u-link' href='#aria'>
      ARIA - Accessible Rich Internet Applications
    </a>
  </li>
  <ol class='u-ordered-list--sublist'>
    <li>
      <a class='u-link' href='#roles'>
        Roles
      </a>
    </li>
    <li>
      <a class='u-link' href='#states-properties'>
        States and Properties
      </a>
    </li>
    <li>
      <a class='u-link' href='#labels-descriptions'>
        Labels and Descriptions
      </a>
    </li>
  </ol>
  <li>
    <a class='u-link' href='#images'>
      Images
    </a>
  </li>
  <li>
    <a class='u-link' href='#svg'>
      SVG - Scalable Vector Graphics
    </a>
  </li>
  <li>
    <a class='u-link' href='#invisible-content'>
      Invisible Content
    </a>
  </li>
  <li>
    <a class='u-link' href='#testing'>
      Testing the Screen Reader
    </a>
  </li>
</ol>

<section style="position: relative;" class="u-margin-bottom-lg">
<span class="u-anchor" id="language"></span>
<h3>1. Language</h3>

As each language has its particularities, the screen reader needs to know which language it will speak, to guarantee a good experience of the content read to the user. If the screen reader doesn't know what is the language of the website, it will use the default operating system's language, which may cause mispronunciations.

You can easily solve this by adding the attribute <code>lang</code> to your HTML tag. Example:

```html
<html lang="en"></html>
```

See the <a href="https://www.w3schools.com/tags/ref_language_codes.asp" class="u-link" target="_blank" rel="noreferrer noopener">full list of lang codes</a> for further understanding.

If your application has a quote or similar in another language, you will also need to indicate it using a `<span>` tag. Example:

```html
<blockquote>
  <span lang="es"
    >Es tan corto el amor y tan largo el olvido - Pablo Neruda</span
  >
</blockquote>
```

A good practice is to italicize foreign phrases. You can easily do this via CSS:

```css
span[lang] {
  font-style: italic;
}
```

</section>
<section style="position: relative;" class="u-margin-bottom-lg">
<span class="u-anchor" id="links"></span>
<h3>2. Links</h3>

The screen reader user generally uses the keyboard to navigate the website, going from link to link using the <kbd>tab</kbd> key, and pressing the <kbd>enter</kbd> key to select this link. Links and form controls receive focus by default when the tab key is used, but if you want to assign focus to another element, you need to use the <code>tabindex</code> attribute into this (you can find <a class="u-link" href="https://www.tatianeaguirres.com/blog/2020-07-20-web-accessibility-1/" target="_blank" rel="noreferrer noopener">more info about tabindex on the previous post</a>).

The link must be self-explanatory, that is, the user does not want to read the same thing twice or read obvious things like "click here" because they already know that this is a link. It needs to be understandable by the context of the link. Examples:

```html
<p>
  See
  <a
    href="www.youtube.com"
    target="_blank"
    aria-label="Open youtube in a new window"
  >
    our youtube page
  </a>
</p>

<a href="/products">products</a>
```

The links must be used to go somewhere, so if your link executes a function, it shouldn't be a link, but a button. Example:

```html
<button onmouseover="showProducts()">products</button>
```

</section>
<section style="position: relative;" class="u-margin-bottom-lg">
<span class="u-anchor" id="headings"></span>
<h3>3.Headings </h3>

Screen reader users usually jump from heading to heading to get an idea of the content and then return to the most interesting topics. Therefore, the header needs to be self-explanatory, describing the content that follows.

It's important to follow some indispensable patterns of Semantic HTML for this:

<ul class="u-unordered-list">
  <li>
    The <code>h1</code> tag must describe the page and have content similar to the <code>title</code> tag.
  </li>
  <li>The page must have only one <code>h1</code>.</li>
  <li>
    Don't skip heading levels, such as from <code>h2</code> to <code>h4</code>.
  </li>
  <li>
    To highlight or emphasize text that is not a heading, use CSS to style it, and not heading tags to achieve visual results.
  </li>
  <li>
    Headings from <code>h2</code> through <code>h6</code> represent increasing degrees of indentation.
  </li>
</ul>

Example:

```html
<h1>Italian Restaurant Menu (just one h1, describing the whole content)</h1>
<h2>Pasta (first item level, the most important after the main title)</h2>
<h3>Carbonara (subitem of heading 2)</h3>
<h3>Pesto (subitem of heading 2)</h3>
<h3>Lasagna (subitem of heading 2)</h3>
<h4>Four Cheese (subitem of heading 3)</h4>
<h4>Bolognese (subitem of heading 3)</h4>
<h2>Risotto (first item level, the most important after the main title)</h2>
<h3>Mushroom (subitem of heading 2)</h3>
<h3>Garlic Parmesan (subitem of heading 2)</h3>
```

</section>
<section style="position: relative;" class="u-margin-bottom-lg">
<span class="u-anchor" id="aria"></span>
<h3>4. ARIA - Accessible Rich Internet Applications</h3>

ARIA is a set of attributes you can add to HTML elements that define ways to make web content and applications accessible to users with special needs. When accessibility issues cannot be managed with native HTML, ARIA can help bridge those gaps.

There are three main components used in ARIA: <strong>Roles</strong>, <strong>States</strong>, and <strong>Properties</strong>.

</section>
<section style="position: relative;" class="u-margin-bottom-lg">
<span class="u-anchor" id="roles"></span>
<h4>4.1. ARIA - Roles</h4>

HTML elements have a default role that is presented to assistive technology, like the `<button>` tag, that has a default role of <code>button</code>. Roles are used to defining a type of user interface (UI) element, and ARIA can define roles that are not available in HTML.

You can see the <a href="https://www.w3.org/WAI/PF/aria-1.1/roles" class="u-link" target="_blank" rel="noreferrer noopener">full list of ARIA Roles</a> to go deeper into it.

Examples:

```html
<div role="tab"><h2>heading tab</h2></div>

<form role="search">...</form>

<div role="region" aria-label="filters">...</div>
```

</section>
<section style="position: relative;" class="u-margin-bottom-lg">
<span class="u-anchor" id="states-properties"></span>
<h4>4.2. ARIA - States and Properties</h4>

ARIA States are attributes that define the current condition of an element. They generally change based on user interaction or some dynamic variable. An example is <code>aria-invalid="true"</code> in an input. This property will cause a screen reader to read this input as currently being invalid (meaning it needs to be corrected), but this state value could easily be changed to false dynamically based on user input. While ARIA Properties define additional semantics not supported in standard HTML. An example is <code>aria-haspopup="true"</code> in a button. This property extends the standard button to announce to the screen reader that the button, if activated, will trigger a pop-up.

See also the <a href="https://www.w3.org/WAI/PF/aria-1.1/states_and_properties" class="u-link" target="_blank" rel="noreferrer noopener">full list of States and Properties</a> for further knowledge.

Examples:

```html
<input aria-required="true" aria-autocomplete="on" />

<button role="submit" aria-pressed="false"></button>
```

</section>
<section style="position: relative;" class="u-margin-bottom-lg">
<span class="u-anchor" id="labels-descriptions"></span>
<h4>4.3. ARIA - Labels and Descriptions</h4>

HTML facilitates associations that support accessibility. When HTML cannot create the necessary associations, ARIA can be used. This helps to avoid confusion mainly during the input process. Examples:

```html
<div aria-describedby="tooltip_id">text</div>
<div id="tooltip_id" role="tooltip">tooltip text</div>

<label for="password">Password:</label>
<input type="password" id="password" aria-describedby="requirements" />
<p id="requirements">Your password must be at least 6 characters</p>

<input type="text" id="search" aria-label="search" />
```

</section>
<section style="position: relative;" class="u-margin-bottom-lg">
<span class="u-anchor" id="images"></span>
<h3>5. Images</h3>

The first thing you need to do about accessible images is to write
an appropriate alternative text. Image tags should almost always
contain alternative text so that screen readers can interpret their
content. Think that someone will describe an image to you by phone,
if you can see this image in your mind just by its description then
this is a good text alternative.

What you should do to make your image accessible:

<ul class="u-unordered-list">
  <li>
    As for any text, using punctuation in the text alternative makes the information easier to understand, especially for screen readers.
  </li>
  <li>
    If you use a null (empty) text alternative (<code>alt=""</code>) to hide decorative images, make sure that there is no space character in between the quotes. If a space character is present, the image may not be effectively hidden from assistive technologies.
  </li>
  <li>
    There's no need to include words such as 'image', 'icon', or 'picture' in the alt text, this is redundant.
  </li>
  <li>
    Prioritize the most important information about this image and write a concise description. If it is not possible, consider adding a long description to it (see example below).
  </li>
  <li>
    If your image is an information icon, it's okay to describe it with the icon's name only. Example: 'Telephone' or 'Address'.
  </li>
  <li>
    When you are using a decorative image, that is, an image that is being used just to make the website more visually attractive, you do not need to describe it. Example: visual stylings such as borders or dividers, or image used for ambiance (eye-candy).
  </li>
  <li>
    If the purpose of your image is to demonstrate an impression or emotion to the user, then you can use an alternative text that best represents the desired impression.
  </li>
  <li>
    When you have format icons within text links used to indicate download, you need to use the alternative text to describe what the format is. Example: 'PDF' or 'Word document'.
  </li>
  <li>
    It's a bad practice to have images of text, nowadays you can easily add text in front of your image using CSS. But if for some odd reason you need to keep an image of text, then add the same content as the image in the alternative text.
  </li>
</ul>

Some good examples:

```html
<img src="phone_icon.png" alt="Telephone:" /> 0123 456 7890

<img src="couple_picture.jpg" alt="We are a happy couple." />

<a href="..." download="...">
  <img src="pdf_icon.png" alt="PDF" />
</a>

<a href="javascript:print()">
  <img src="print.png" alt="Print this page." />
</a>

<img src="blue_background.jpg" alt="" />

<img src="divider-line.png" alt="" />

<img src="logo.png" alt="" /> Tatiane Aguirres Nogueira

<img src="logo.png" alt="Tatiane Aguirres Nogueira." />

<img
  src="chart.png"
  alt="Bar chart showing monthly and total visitors for the first quarter 2020 for sites 1 to 3."
  longdesc="#chart-longdesc"
/>
...
<div id="chart-longdesc">...</div>
```

</section>
<section style="position: relative;" class="u-margin-bottom-lg">
<span class="u-anchor" id="svg"></span>
<h3>6. SVG - Scalable Vector Graphics</h3>

ARIA can be used to ensure the content in SVG elements is accessible. The addition of the <code>role="img"</code> attribute defines the element as an image, and the accessible name (alternative text) can be defined using aria-labeledby, which references the `<title>` element in the SVG. Example:

```html
<svg role="img" aria-labelledby="title">
  <title id="title">Network</title>
  <desc>An example of a computer network based on a hub</desc>
  ...
</svg>
```

</section>
<section style="position: relative;" class="u-margin-bottom-lg">
<span class="u-anchor" id="invisible-content"></span>
<h3>7. Invisible Content</h3>

The <code>aria-hidden="true"</code> attribute hides certain types of content from screen readers. I think there are very few use cases for aria-hidden because if something is visible on the page, it should almost always be presented to screen reader users. But a good example of aria-hidden usage is to avoid significant repetition of content or for elements that should not be presented to screen reader users.

The <code>display: none;</code> and <code>visibility: hidden;</code> styles will hide the content from all users. The item is removed from the visual flow of the page and is ignored by screen readers as well. So do not use this CSS if you want the content to be read by a screen reader.

But if your goal is to hide text visually and keep it accessible for screen readers, you should use the following style:

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
```

</section>
<section style="position: relative;" class="u-margin-bottom-lg">
<span class="u-anchor" id="testing"></span>
<h3>8. Testing the Screen Reader</h3>

Testing your application with a screen reader will give you the chance to evaluate the content from an entirely different perspective: from the perspective of a blind person. Probably you will find mistakes that would have been hard to catch visually. For example, spelling mistakes become very obvious when you hear words mispronounced by the screen reader. Screen readers are also very good for checking the accuracy and quality of image alternative text. Screen readers can also help you identify problems with reading order, table markup, form elements, and many other aspects of accessibility.

Different screen readers tend to be optimized to work with different browsers. Until the publication date of this post, the following combinations work best together:

<ul class="u-unordered-list">
  <li>Windows: Internet Explorer and JAWS for Windows (JFW)</li>
  <li>Windows: Firefox and NVDA</li>
  <li>Mac: Safari and VoiceOver</li>
  <li>Mac and Windows: Chrome and ChromeVox</li>
</ul>

The free combinations that are easiest to test with and are quite standards-compliant are NVDA and Firefox (on Windows) and VoiceOver and Safari (on Mac). If you want to learn how to use them, there are two articles from WebAIM that I recommend for you:

<ul class="u-unordered-list">
  <li><a class="u-link" href="https://webaim.org/articles/nvda/" target="_blank" rel="noreferrer noopener">Using NVDA to Evaluate Web Accessibility</a></li>
  <li><a class="u-link" href="https://webaim.org/articles/voiceover/" target="_blank" rel="noreferrer noopener">Using VoiceOver to Evaluate Web Accessibility</a></li>
</ul>

</section>

The next post of the "Web Accessibility Series" will talk about accessibility to users with low vision. See you there!
