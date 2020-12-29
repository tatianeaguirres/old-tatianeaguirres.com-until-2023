---
title: '10 Bad Front-end Practices to Let Go Before the New Year'
tags: ['Improvement', 'Developer', 'Tips']
author: 'Tatiane Aguirres Nogueira'
date: '2020-12-28'
featured: 'images/featured.jpg'
---

The year is almost over but there is still time to leave behind everything that keeps you from being a fantastic developer.

Take advantage of these tips to learn a better and more affordable way to develop front-end applications and let these 10 bad practices die along with 2020.

<section style="position: relative;" class="u-margin-bottom-xlg u-margin-top-xlg">

### 1. "Tabindex" values greater than zero

The tabindex attribute of 1+ explicitly defines the navigation order for focusable elements (typically links and form controls) within a page. However, it's always a bad idea because these elements will receive keyboard focus before elements with no tabindex value (or tabindex="0") resulting in a navigation order that is different from the visual and/or screen reader order.

**Solution**: Instead of using tabindex, simply adjust the page's source code order to support logical navigation and reading order, then use CSS to adjust the visual presentation.

**Resources**: You can find more info on the correct usage of tabindex at <a class='u-link' href='https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex' target='_blank' rel='noreferrer noopener'>MDN Web Docs</a> and <a class='u-link' href='https://webaim.org/techniques/keyboard/tabindex' target='_blank' rel='noreferrer noopener'>WebAIM</a>.

</section>

<section style="position: relative;" class="u-margin-bottom-xlg u-margin-top-xlg">

### 2. Using too many div's

The `<div>` element is an element of last resort, for when no other element is suitable. This element has no special meaning at all. It just represents its children. It can be used with the `class`, `lang`, and `title` attributes to mark up semantics common to a group of consecutive elements.

**Solution**: Use of more appropriate elements instead of the div element leads to better accessibility for readers and easier maintainability for authors. I suggest you access the <a class='u-link' href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element' target='_blank' rel='noreferrer noopener'>HTML elements list</a> from MDN Web Docs to learn more about the hundred elements you can use instead of the div.

**Resources**: You can find more info on the correct usage of the div element at the <a class='u-link' href='https://www.w3.org/TR/html52/grouping-content.html#the-div-element' target='_blank' rel='noreferrer noopener'>W3C</a> (World Wide Web Consortium) docs.

![Buzz Lightyear and Woody from Toy Story, Woody is terrified and Buzz is pointing forward and saying "Look at all those divs, divs everywhere!"](/images/posts/divs.jpg)

</section>

<section style="position: relative;" class="u-margin-bottom-xlg u-margin-top-xlg">

### 3. Anchor link with onClick function

The `<a>` elements are often abused as fake buttons by setting their `href` to "#" or "javascript:void(0)" to prevent the page from refreshing, then listening for their `click` events. These bogus href values cause unexpected behavior and also convey incorrect semantics to assistive technologies, like screen readers.

**Solution**: If you want to add click behavior to trigger a function on your anchor element, use an `<button>` instead. You should only use a hyperlink for navigation to a real URL.

**Resources**: You can find more info on the correct usage of the anchor element at the <a class='u-link' href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a' target='_blank' rel='noreferrer noopener'>MDN Web Docs</a>.

</section>

<section style="position: relative;" class="u-margin-bottom-xlg u-margin-top-xlg">

### 4. Using the words "image", "icon" or "picture" in the text alternative

There's no need to include words like "image", "icon", or "picture" in the alt text. People who can see will know this already, and screen readers announce the presence of an image. It's redundant.

**Solution**: Think that someone will describe an image to you by phone, if you can see this image in your mind just by its description, then this is a good text alternative. There are some exceptions where you should use an empty alt text (alt=""), such as in the case of background images or decorative images (eye-candy), but in most cases you'll need to write a simple and accurate description of the image, always using punctuation.

**Resources**: You can find more info on the correct usage of the alternative text and img element at the <a class='u-link' href='https://www.w3.org/WAI/tutorials/images/' target='_blank' rel='noreferrer noopener'>W3C</a> (World Wide Web Consortium) Web Accessibility Tutorial.

</section>

<section style="position: relative;" class="u-margin-bottom-xlg u-margin-top-xlg">

### 5. Not providing a label to "section" elements

The `<section>` HTML element represents a generic section of a document or application. A section, in this context, is a thematic grouping of content. The section must have a unique label to help the user to identify the content of the section.

**Solution**: Each section should be identified, typically by including a heading (h1-h6 element) as a child. Example:

```html
<section aria-labelledby="region1">
  <h2 id="region1">Title for region area 1</h2>
  ...
</section>
```

If your section doesn't has a heading element, you can use an `aria-label` to describe it. Example:

```html
<section aria-label="title for region area 1">
  ...
</section>
```

**Resources**: You can find more info on the correct usage of the section element at the <a class='u-link' href='https://www.w3.org/TR/html51/sections.html#the-section-element' target='_blank' rel='noreferrer noopener'>W3C</a> (World Wide Web Consortium).

</section>

<section style="position: relative;" class="u-margin-bottom-xlg u-margin-top-xlg">

### 6. Removing CSS outlines

Using the CSS rule `*:focus { outline: none; }` to remove an outline on an object causes the link or control to be focusable, but removes any visible indication of focus for keyboard users.

**Solution**: If you don't like the default focus outline that is displayed when a user clicks on an interactive element, you have 3 accessible solutions: style the outline, style the element itself or remove outlines for mouse users only.

**Resources**: You can find more info on how to apply the 3 accessible solutions above at the <a class='u-link' href='https://www.a11yproject.com/posts/2013-01-25-never-remove-css-outlines/' target='_blank' rel='noreferrer noopener'>A11y Project</a>.

</section>

<section style="position: relative;" class="u-margin-bottom-xlg u-margin-top-xlg">

### 7. Using (and skipping) heading levels for visual purposes

The HTML `<h1>`–`<h6>` elements represent six levels of section headings. Heading information can be used by user agents, such as screen readers, to construct a table of contents for a document automatically. That's why using headings to achieve visual purposes and skip levels can prejudice these users.

**Solution**: Avoid skipping heading levels: always start from `<h1>`, followed by `<h2>` and so on. Using more than one `<h1>` will not result in an error, but is not considered a best practice. It is beneficial for screenreader users, and <a class='u-link' href='https://developer.mozilla.org/en-US/docs/Glossary/SEO' target='_blank' rel='noreferrer noopener'>SEO</a>. Avoid using heading elements to resize text. Instead, use the CSS font-size property.

**Resources**: You can find more info on the correct usage of the heading elements at the <a class='u-link' href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements' target='_blank' rel='noreferrer noopener'>MDN Web Docs</a>.

</section>

<section style="position: relative;" class="u-margin-bottom-xlg u-margin-top-xlg">

### 8. Showing form errors only through colors and icons

For a colorblind user, it doesn't matter if the input border is green for successful and red for unsuccessful submission, just as a "thumbs-up icon" will not help a screen reader user.

**Solution**: The best practice is to always show to the user what the error is through a text explanation.

**Resources**: You can find more info on how to alert the user to the presence of the error in an apparent and accessible manner at the <a class='u-link' href='https://webaim.org/techniques/formvalidation/#error' target='_blank' rel='noreferrer noopener'>WebAIM</a> "Usable and Accessible Form Validation and Error Recovery" article.

</section>

<section style="position: relative;" class="u-margin-bottom-xlg u-margin-top-xlg">

### 9. Using icon buttons without a label

Images used to label other information need to have a way to inform the user and assistive technologies what that icon means. It's very common to see buttons with the "X" icon to close a modal or menu. However, if this button does not have a label saying that this button calls the close function, the screen reader may announce this element as "multiplication x" or "times" button, which does not mean or explain anything to the user.

**Solution**: A good practice to develop icon buttons is by using a span with the label inside (line 2) and adding a class to hide the label visually but making it accessible to screen readers. The icon is the opposite, it must be available visually and hidden from screen readers through the attribute `aria-hidden="true"` (line 3).

```html{numberLines: true}
<button type="button" onclick="close();">
  <span class="screen-reader-only">Close</span>
  <span aria-hidden="true">×</span>
</button>
```

```css
.screen-reader-only {
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
}
```

Another way would be by using the attribute `aria-label="Close"` (line 1) instead of the span:

```html{numberLines: true}
<button type="button" onclick="close();" aria-label="Close">
  <span aria-hidden="true">×</span>
</button>
```

**Resources**: You can find more info on the correct usage of the icon buttons at the <a class='u-link' href='https://www.htmhell.dev/20-close-buttons/' target='_blank' rel='noreferrer noopener'>Htmhell</a> website.

</section>

<section style="position: relative;" class="u-margin-bottom-xlg u-margin-top-xlg">

### 10. Not providing the app language for screen readers

Since every language has its own pronunciation rules, the screen reader needs to know which language it should "speak". Web pages specify document language with a `lang` attribute on the `<html>` element. If the language is not provided through the HTML element, the screen reader will use its own default language. Now imagine, a user who uses screen reader with Russian as the default language accessing an English website without language definition in the HTML. Will he or she be able to understand anything? I don't think so.

**Solution**: Always provide the correct language of your app in the HTML element. You can access the <a class='u-link' href='https://gist.github.com/JamieMason/3748498' target='_blank' rel='noreferrer noopener'>full list of ISO language code</a> to discover the right one for your app.

```html
<html lang="pt-BR">
  // Brazilian Portuguese
</html>
```

It's also considered good practice to indicate the language using a `<span>` element when the text is interspersed with foreign phrases. Example:

```html
<p>
  <span lang="fr">Mademoiselle Fleur Delacour</span>
  was a French witch and a student of
  <span lang="fr">Beauxbatons</span> Academy of Magic in France.
</p>
```

You can also easily add the standard italic style to these foreign phrases:

```css
span[lang] {
  font-style: italic;
}
```

**Resources**: You can find more info on the correct usage of the lang attribute at the <a class='u-link' href='https://webaim.org/techniques/screenreader/#language' target='_blank' rel='noreferrer noopener'>WebAIM</a> "Designing for Screen Reader Compatibility" article.

</section>

<section style="position: relative;" class="u-margin-bottom-xlg u-margin-top-xlg">

### Bonus: HTMHell

<a class='u-link' href='https://www.htmhell.dev/' target='_blank' rel='noreferrer noopener'>HTMHell</a> is a collection of bad practices in HTML, copied from real websites. They publish the bad code with tips on how to fix it and examples of good code. They also add resources with links for you to learn more about the subject. Perfect for learning how to avoid bad practices, right?

</section>

Now let's stop using these bad practices and start 2021 in the best possible way: improving your code and becoming a better developer.

Do you know any other bad practices that should be on that list? Leave it here in the comments!

Happy coding!
