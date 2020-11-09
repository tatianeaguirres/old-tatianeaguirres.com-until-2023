---
title: '10 Tips to Improve the Readability of your Website'
tags: ['Web', 'Accessibility', 'Tips']
author: 'Tatiane Aguirres Nogueira'
date: '2020-11-09'
featured: 'images/featured.jpg'
---

Ensuring a great reading experience is essential to retain our users, after all, we want them to read and consume the content on our website, right?

And our role, as front-end developers, is to ensure that all users will have the best experience possible when using our applications. Regardless of whether they are disabled users or not.

That's why I decided to share these ten short, effective tips on how to improve your website's reading:

<span class="u-sr-only">Tip</span> 1 - Support zoom screen: ensure that if the user is using the zoomed browser when accessing your application, the layout will grow fluidly. When people with low vision increase the text size and the text doesn't "reflow", they sometimes have to scroll horizontally several screens to read a single line of text.

<span class="u-sr-only">Tip</span> 2 - Give preference to fonts optimized for reading for the main content. <a class='u-link' href='https://fonts.google.com/' target='_blank' rel='noreferrer noopener'>Google Fonts</a> has good (and free) fonts like "Open Sans", "Quicksand", "Roboto", "Lato" and "Ubuntu".

<span class="u-sr-only">Tip</span> 3 - Consider dividing longer sentences into two. Long blocks of unbroken paragraph text are not only hard for dyslexic users to read, but for non-dyslexic users too. Use short paragraphs that express one idea per time.

<span class="u-sr-only">Tip</span> 4 - Some users need high contrast between text and background to have a good reading experience, mainly older people who lose contrast sensitivity from ageing. Most of these people prefer and read better with dark text on a light background. I recommend the using of the <a class='u-link' href='https://snook.ca/technical/colour_contrast/colour.html' target='_blank' rel='noreferrer noopener'>snook.ca</a> color contrast check tool, which will also indicate if the colors pass the newer <a class='u-link' href='https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast' target='_blank' rel='noreferrer noopener'>WCAG 2.0 contrast ratio formula</a>.

<span class="u-sr-only">Tip</span> 5 - Avoid using pure black text (#000000) with pure white background (#FFFFFF). Many low vision users and dyslexic users are sensitive to the brightness the high contrast colors cause. It can cause the words to swirl or blur together.

<span class="u-sr-only">Tip</span> 6 - Sometimes full justification makes reading more difficult because extra space between words causes "<a class='u-link' href='https://en.wikipedia.org/wiki/River_(typography)' target='_blank' rel='noreferrer noopener'>rivers of white</a>". People see white patterns flowing through text more prominent than the text itself. It makes it hard to track along with a line of text, or less space between words makes it difficult to distinguish separate words. Give preference to the left-aligned pattern.

<span class="u-sr-only">Tip</span> 7 - Replace long or unfamiliar words with shorter, more common terms and remove complex words or phrases that could be replaced with more commonly used words without changing the meaning of the sentence.

<span class="u-sr-only">Tip</span> 8 - Always expand the first occurrence of any abbreviation on a page. For subsequent occurrences, consider use of `<acronym>` and `<abbr>` elements to aid understanding.

<span class="u-sr-only">Tip</span> 9 - Use names and labels consistently, principally in forms. Use `<label>` wherever possible. It has a universal browser and screen reader support, and mouse users can click the label to focus its form control. Important: Placeholder text is not a substitute for a label.

<span class="u-sr-only">Tip</span> 10 - Use the "lang" attribute to specify the language of your application on the `<html>` element, it will help especially screen reader users, who use a default language different from the webpage. If your app has content in more than one language, use the "lang" attribute in other HTML elements, such as `<span>`, to indicate to the user that this word or phrase is written in another language.

### References:

- <a class='u-link' href='https://www.w3.org/WAI/' target='_blank' rel='noreferrer noopener'>W3C Web Accessibility Initiative (WAI)</a>
- <a class="u-link" href="https://webaim.org/" target="_blank" rel="noreferrer noopener">WebAIM (Web Accessibility In Mind)</a>

Now let's start applying these tips to improve the readability of your website!

Happy coding!
