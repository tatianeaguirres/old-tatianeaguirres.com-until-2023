---
title: 'Web Accessibility I: Make Your Website Accessible to Keyboard Users'
tags: ['Web', 'Accessibility', 'Keyboard Users']
author: 'Tatiane Aguirres Nogueira'
date: '2020-07-20'
featured: 'images/featured.jpg'
---

This is the first post of the "Web Accessibility Series", and here you will learn what your application needs to be accessible to keyboard users in 6 steps.

Keyboard accessibility is one of the most important and fundamental practices within web accessibility, because users with motor disabilities, low vision, or blindness mainly use only the keyboard to surf the internet. This includes people with tremors, little or no use of their hands, or without hands, which may result from an accident, amputation, or birth condition.

As front-enders, we must use the best accessibility practices and techniques to improve the experience of these users in our applications.

<h3>Table of Contents</h3>
<ol class='u-ordered-list'>
  <li>
    <a class='u-link' href='#navigation'>
      Navigation
    </a>
  </li>
  <li>
    <a class='u-link' href='#keyboard-support'>
      Keyboard Support
    </a>
  </li>
  <li>
    <a class='u-link' href='#focus'>
      Focus
    </a>
  </li>
  <li>
    <a class='u-link' href='#tabindex'>
      Tabindex
    </a>
  </li>
  <li>
    <a class='u-link' href='#skip-navigation'>
      Skip Navigation Links
    </a>
  </li>
  <li>
    <a class='u-link' href='#testing'>
      Testing with the Keyboard
    </a>
  </li>
</ol>

<section style="position: relative;">
<span class="u-anchor" id="navigation"></span>
<h3>1. Navigation</h3>

A keyboard user usually uses the <kbd>tab</kbd> key to navigate the website, going through interactive elements, such as links, buttons, and forms. In addition to traditional keyboards, some users may use modified keyboards or other hardware that mimics the functionality of a keyboard.

The default keyboard navigation must be logical and intuitive. This generally means that it follows the visual flow of the page: left to right, top to bottom - header first, then main navigation, then page navigation (if present), and finally the footer.

</section>

<section style="position: relative;">
<span class="u-anchor" id="keyboard-support"></span>
<h3>2. Keyboard Support</h3>

Main keys used for navigation:

<ul class="u-unordered-list">
<li><kbd>Tab</kbd>: Moves focus to the next focusable element.</li>
<li><kbd>Shift</kbd> + <kbd>Tab</kbd>: Moves focus to the previous focusable element.</li>
<li><kbd>Enter</kbd> or <kbd>Space</kbd>: Buttons can be activated with both key commands.</li>
<li><kbd>Enter</kbd>: Access the link's destination of an anchor element, expand the menu (optional) and select an option.</li>
<li><kbd>Spacebar</kbd>:</li> 
<ul>
<li>Checkboxes should be used when one or more options can be selected.</li>
<li>Expands the dropdown menus.</li>
<li>Minimize horizontal scrolling.</li>
</ul>
<li><kbd>Esc</kbd>: Close modals.</li>
<li><kbd>Arrows</kbd>: Used to navigate between menu options or to scroll the page.</li>
</ul>
</section>

<section style="position: relative;">
<span class="u-anchor" id="focus"></span>
<h3>3. Focus</h3>
<span>

The most common browsers, such as Chrome, Firefox, Safari, and Internet Explorer, have <code>:focus</code> on almost all (if not all) interactive elements by default, usually adding the <a class="u-link" href="https://developer.mozilla.org/en-US/docs/Web/CSS/outline" target="_blank" rel="noreferrer noopener">outline CSS property</a>. You can see an outline example by clicking on the input below.

<input class="u-outline" placeholder="Click here" /><br>

The rule is clear: everything which is clickable for a mouse user needs to be focusable to a keyboard user, usually, these interactive elements are the followings:

<ul class="u-unordered-list">
<li>Links</li>
<li>Buttons</li>
<li>Form Fields / Controls (text fields, select boxes, radio buttons, etc.)</li>
<li>Menu items</li>
<li>Things triggered by hover, like tooltips</li>
<li>Widgets, like a calendar picker</li>
</ul>

A good practice is to provide for these interactive elements the same style of <code>:hover</code>, so that the keyboard user has the same experience as the mouse user. Example:

```css
button:hover,
button:focus {
  background-color: aqua;
}
```

</section>
<section style="position: relative;">
<span class="u-anchor" id="tabindex"></span>
<h3>4. Tabindex</h3>

The tabindex attribute defines the navigation order for focusable elements (typically links and form controls) within a page. It can also be used to define whether elements should be focusable or not.

Links and form controls have tabindex by default, but it can be used when the default tab order is not ideal or when you need to give focus to elements that are not natively focusable, such as `<div>`, `<span>`, `<p>`, and `<a>` with no href.

The three distinct uses of tabindex:

<ul  class="u-unordered-list">
<li><code>tabindex="1"</code> (or any number greater than 1) defines an explicit tab order. WARNING: This is almost always a bad idea, the better solution is to fix the navigation order by restructuring the HTML.</li>
<li><code>tabindex="0"</code> allows elements besides links and form elements to receive keyboard focus. It does not change the tab order but places the element in the logical navigation flow as if it were a link on the page.</li>
<li><code>tabindex="-1"</code> allows things besides links and form elements to receive "programmatic" focus, meaning focus can be set to the element through scripting, links, etc.</li>
</ul>
</section>
<section style="position: relative;">
<span class="u-anchor" id="skip-navigation"></span>
<h3>5. Skip Navigation Links</h3>

The main content is not normally the first thing on a web page. Keyboard users usually need to navigate a long list of navigation links and other elements before arriving at the main content. This is quite difficult for users with some forms of motor disabilities.

A good and inclusive solution for this is to include a skip navigation link at the top of the web page which jumps the user down at the beginning of the main content. Example:

```html
<body>
  <div class="skip">
    <a href="#maincontent">Skip to main content</a>
  </div>
  ...
  <main id="maincontent">
    <h1>Heading</h1>
    <p>This is the first paragraph.</p>
    <p>This is the second paragraph.</p>
  </main>
</body>
```

And if you're thinking that maybe this will destroy your beautiful layout, you can hide them off screen, then cause them to be positioned on screen when they receive keyboard focus. That way it will only be visible to those who really need them.

```css
.skip a {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
.skip a:focus {
  position: static;
  width: auto;
  height: auto;
}
```

</section>
<section style="position: relative;">
<span class="u-anchor" id="testing"></span>
<h3>6. Testing with the Keyboard</h3>

There is no special secret to testing with the keyboard, except unplugging the mouse and leaving it in the drawer while you navigate the entire website using just the keyboard. Look at item <a class='u-link' href='#keyboard-support'>Keyboard Support</a> again and try to navigate using these keys.

This is also a great empathy exercise, which will help you understand the challenges that a keyboard user faces daily on the internet.

</section>

The next post of the "Web Accessibility Series" will talk about accessibility to Screen Readers. See you there!
