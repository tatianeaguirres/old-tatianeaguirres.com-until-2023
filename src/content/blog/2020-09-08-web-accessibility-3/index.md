---
title: 'Web Accessibility II: Make Your Website Accessible to Low Vision Users'
tags: ['Web', 'Accessibility', 'Low Vision Users']
author: 'Tatiane Aguirres Nogueira'
date: '2020-09-08'
featured: 'images/featured.jpg'
---

This is the third post of the "Web Accessibility Series". You will learn what low vision users need for web content, tools, and technologies to be accessible in six steps. It includes an overview of types of low vision and describes specific user needs.

<blockquote cite="https://www.w3.org/TR/low-vision-needs/#incidence">
    <p>In a fact sheet on visual impairment and blindness, the World Health Organization (WHO) estimates that there are 246 million people worldwide who have low vision and 39 million people are blind, indicating that 86% of the people with visual impairments have low vision.</p>
    <footer>— 
      <cite>
        <a class='u-link' href='https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment' target='_blank' rel='noreferrer noopener'>World Health Organization (WHO)</a>
      </cite>
    </footer>
</blockquote>

"Low vision" refers to visual impairments other than blindness. In many contexts, the low vision includes only disabilities that are not corrected with normal glasses, contact lenses, medication, or surgery. Most of the low vision is caused by eye diseases and health problems, such as cataracts, glaucoma, and diabetes. These are more prevalent in older people, and some vision problems are caused by injuries or birth conditions.

If you missed the two previous posts in this series, you can check out and learn more about accessibility for <a class='u-link' href='https://www.tatianeaguirres.com/blog/2020-07-20-web-accessibility-1/'>keyboard users</a> and <a class='u-link' href='https://www.tatianeaguirres.com/blog/2020-07-27-web-accessibility-2/'>screen reader users</a>.

### Table of Contents

<ol class='u-ordered-list'>
  <li>
    <a class='u-link' href='#types'>
      Types of Visual Impairments
    </a>
  </li>
  <li>
    <a class='u-link' href='#brightness'>
      Brightness
    </a>
  </li>
  <li>
    <a class='u-link' href='#text-contrast'>
      Text Contrast
    </a>
  </li>
  <li>
    <a class='u-link' href='#tracking'>
      Tracking
    </a>
  </li>
  <li>
    <a class='u-link' href='#text-readability'>
      Text Readability
    </a>
  </li>
  <li>
    <a class='u-link' href='#spacing-reading'>
      Spacing for Reading
    </a>
  </li>
</ol>

<section style="position: relative;" class="u-margin-bottom-lg">
<span class="u-anchor" id="types"></span>

### 1. Types of Visual Impairments

There are 5 types of visual impairment that affect the use of the web, not including total blindness:

<ul class='u-unordered-list'>
  <li><b>Visual acuity (clarity)</b>: Visual acuity is the clarity or sharpness of the vision. It usually depends on the functioning of the retinal part of the eye and the interpretation of the brain. Some low visual acuity can be corrected with glasses, contact lenses, or surgery - and some can't. Therefore, some people will have the blurry vision (low visual acuity), no matter what.</li>
  <li><b>Light sensitivity</b>: Many people with low vision have extreme sensitivity to light (called photophobia). The strong light makes it difficult or impossible to see and causes pain in the eyes and headaches. For some people, the normal brightness of a computer screen with a bright background is not readable and causes pain. They need to change the background to a darker color.</li>
  <li><b>Contrast sensitivity</b>: Contrast sensitivity is the ability to distinguish light and dark areas from images, for example, to discern text in the background, such as gray text on a light background.</li>
  <li><b>Field of vision</b>: The area from which a person's eye is able to collect visual information when looking straight ahead is called the field of view or visual field. People generally have a field of view of approximately 180 degrees and some people have a smaller field of view, called field loss. They may have reduced or absent in the middle of vision, only see in the central portion of the visual field (tunnel vision), or have scattered patches of obscured vision.</li>
  <li><b>Color vision</b>: Some people can't see certain colors well or can't see at all, but it's very rare for a person to be unable to see any color. This usually happens because of deficiencies in the cone receptors in their eyes, which are responsible for color perception. This is commonly called "color blindness".</li>
</ul>

</section>

<section style="position: relative;" class="u-margin-bottom-lg">
<span class="u-anchor" id="brightness"></span>

### 2. Brightness

The bright light from a screen or other sources prevents some people with low vision (including those with photophobia and with reading disabilities such as dyslexia) from reading and causes pain for some people. Some people turn down the brightness of their screen or use an overlay.

A good solution that can help people with sensitivity to light is to enable them to set the overall brightness of a display or make dark mode functionality available to your application. For the second one, I recommend that you read the article <a class='u-link' href='https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/' target='_blank' rel='noreferrer noopener'>A Complete Guide to Dark Mode on the Web</a> from Adhuham in <a class='u-link' href='https://css-tricks.com/' target='_blank' rel='noreferrer noopener'>css-tricks</a>. There you will find everything you need to know about toggling themes and dark mode.

</section>

<section style="position: relative;" class="u-margin-bottom-lg">
<span class="u-anchor" id="text-contrast"></span>

### 3. Text Contrast

Some users need high contrast between text and background to have a good reading experience, mainly older people who lose contrast sensitivity from aging. Most of these people prefer and read better with dark text on a light background.

Using the right contrast is especially important for text. Using the wrong colors can decrease the readability drastically, and it will quickly tire the reader's eyes. We already know that black text on a white background has the highest readability, but there are other options that also work well together, such as black and yellow or blue and white. See the examples below:

<span span style="padding:10px;background-color:black;color:yellow;">Yellow on black is easy to read.</span>

<span style="padding:10px;background-color:darkblue;color:white;">And so is white on dark blue.</span>

However, there are combinations, such as red and green, that are particularly hard for many people to read. A combination of red and blue creates a vibrating effect that can also make reading very difficult. Example:

<span style="padding:10px;background-color:red;color:green;">Green on red is hard to read.</span>

<span style="padding:10px;background-color:darkblue;color:red;">And so is red on blue.</span>

Low-contrast colors also detract the user experience and tire their eyes easily. Example:

<span style="padding:10px;background-color:lightgray;color:gray;">Low contrast between light background and gray text.</span>

<span style="padding:10px;background-color:darkgreen;color:green;">Also in the combination of two very similar colors.</span>

You can easily identify bad combinations and test all possibilities of contrast between text and background using a contrast color checking tool. I recommend the <a class='u-link' href='https://snook.ca/technical/colour_contrast/colour.html' target='_blank' rel='noreferrer noopener'>snook.ca</a> tool, which will also indicate if the colors pass the newer <a class='u-link' href='https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast' target='_blank' rel='noreferrer noopener'>WCAG 2.0 contrast ratio formula</a>.

</section>

<section style="position: relative;" class="u-margin-bottom-lg">
<span class="u-anchor" id="tracking"></span>

### 4. Tracking

Tracking is following along lines of text, including getting from the end of one line to the beginning of the next line of text. It is also impacted by leading, justification, and margins and borders, especially when blocks of text are in columns or near other text.

For many people, with and without disabilities, it's difficult to read when they have to scroll back and forth to read a line of text. When people with low vision increase the text size and the text doesn't "reflow", they sometimes have to scroll horizontally several screens to read a single line of text. The same happens with columns, making it harder to scroll from the bottom of a column of text to the top of another column or to read very long lines of text than shorter lines.

Tips for creating an accessible application for tracking:

<ul class='u-unordered-list'>
  <li>Blocks of text rewrap so that only one direction of scrolling is required (usually vertical scrolling).</li>
  <li>Reflow to blocks of text in one continuous block, instead of in multiple columns.</li>
  <li>Avoid using very long lines.</li>
  <li>Support zoom screen: ensure that if the user is using the zoomed browser when accessing your application, the layout will grow fluidly.</li>
  <li>Turn off hyphenation by default (the same doesn't apply to very long words).</li>
</ul>

</section>

<section style="position: relative;" class="u-margin-bottom-lg">
<span class="u-anchor" id="text-readability"></span>

### 5. Text Readability

Text readability impacts how hard it is to perceive letters and includes text size, font, style, capitalization, and size of all elements. All of these factors are essential to ensure a good reading experience for a user with low vision.

Some people need a larger text in order to perceive letters. Although increasing size is most common, some people with tunnel vision and good visual acuity may prefer smaller letters so they can see more words at a time.

Tips for creating an accessible application with readable texts:

<ul class='u-unordered-list'>
  <li>Support zoom screen: ensure that if the user is using the zoomed browser when accessing your application, the layout will grow fluidly.</li>
  <li>Give preference to fonts optimized for reading for the main content. <a class='u-link' href='https://fonts.google.com/' target='_blank' rel='noreferrer noopener'>Google Fonts</a> has good (and free) fonts like "Open Sans", "Quicksand", "Roboto", "Lato" and "Ubuntu".</li>
  <li>Avoid using bold, underline, or italics too often.</li>
  <li>Text in all capital letters is more difficult to read for most people, avoid using too much.</li>
</ul>

</section>

<section style="position: relative;" class="u-margin-bottom-lg">
<span class="u-anchor" id="spacing-reading"></span>

### 6. Spacing for Reading

Spacing such as space between lines and space between words impacts readability. Line height, letter spacing, word spacing, justification, margins and borders, and spacing between elements, also directly affect the reading experience of the low vision user.

Sometimes full justification makes reading more difficult because extra space between words causes "<a class='u-link' href='https://en.wikipedia.org/wiki/River_(typography)' target='_blank' rel='noreferrer noopener'>rivers of white</a>" making it difficult to track along with a line of text, or less space between words makes it difficult to distinguish separate words.

If text is close to the edges, it is hard for low vision users to distinguish letters and it negatively impacts readability. Having wide margins around blocks of text helps some people focus on the text and not get distracted by surrounding text. This is especially important for tracking when blocks of text are in columns or near other text. However, for people with tunnel vision, wide margins could make it hard to track text.

Tips on good usage of spacing for reading:

<ul class='u-unordered-list'>
  <li>Use enough space for leading (line spacing, line height), letter spacing, and word spacing in the text blocks.</li>
  <li>Avoid using justify text as indentation, give preference to the left-aligned pattern.</li>
  <li>Use margin around blocks of text that are large enough to separate the content, as wide margins make it more difficult for people with tunnel vision to experience.</li>
  <li>Spacing groups related elements and separates less related elements. For example, having more space above a heading and less space below it helps associate the heading with the text below.</li>
</ul>

</section>

### References:

<ul class='u-unordered-list'>
  <li>
    <a class='u-link' href='https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment' target='_blank' rel='noreferrer noopener'>
      World Health Organization (WHO)
    </a>
  </li>
  <li>
    <a class='u-link' href='https://www.w3.org/WAI/' target='_blank' rel='noreferrer noopener'>
      W3C Web Accessibility Initiative (WAI)
    </a>
  </li>
</ul>

The next post of the "Web Accessibility Series" will talk about accessibility to users with dyslexia. See you there!

Happy coding!
