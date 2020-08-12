---
title: 'Semantic HTML: Images'
tags: ['Semantic', 'HTML', 'Images', 'Web', 'Accessibility']
author: 'Tatiane Aguirres Nogueira'
date: '2020-08-04'
featured: 'images/featured.jpg'
---

The HTML `<img>` tag represents an image in an HTML document. It's used for embedding the image into the document.

In most of the cases, images are used to make the website's content more pleasant or to demonstrate an impression or emotion to the user. However, there are other factors besides "visually pleasing" that contribute to your user having a great experience on your website. In this post, you will learn in 6 steps how we use the image element semantically for all users, from the user of mobile devices to the user of screen readers.

### Table of Contents

<ol class='u-ordered-list'>
  <li>
    <a class='u-link' href='#html-img-element'>
      HTML img Element
    </a>
  </li>
  <li>
    <a class='u-link' href='#accessibility'>
      Accessibility
    </a>
  </li>
  <li>
    <a class='u-link' href='#attributes'>
      Attributes Specific to the img Element
    </a>
  </li>
  <li>
    <a class='u-link' href='#background-images'>
      Background Images
    </a>
  </li>
  <li>
    <a class='u-link' href='#linked-images'>
      Linked Images
    </a>
  </li>
  <li>
    <a class='u-link' href='#responsive-images'>
      Responsive Images
    </a>
  </li>
</ol>

<section style="position: relative;" class="u-margin-bottom-sm">
<span class="u-anchor" id="html-img-element"></span>

### 1. HTML img Element

The basic syntax of an image element is:

```html
<img src="" alt="" />
```

Where the <code>src</code> attribute is required and contains the path to the image you want to embed.

The <code>alt</code> attribute holds an alternative text of the image, which isn't mandatory but is incredibly helpful for users who need to use a screen reader to navigate websites. This descriptive text is also displayed when the image can't be displayed or if someone views your website with images disabled in their web browser - common for users using data-roaming on mobile devices.

</section>

<section style="position: relative;" class="u-margin-bottom-sm">
<span class="u-anchor" id="attributes"></span>

### 2. Attributes Specific to the img Element

There are 7 specific attributes for the img tag:

<ul class="u-unordered-list">
  <li>
    <code>src</code> is required and specifies the URL of the image to be embedded into the image.
  </li>
  <li>
    <code>alt</code> isn't required because there are few cases when you don't need to use it (as in the case of decorative images), but in most cases, it's very important in terms of accessibility and you must describe the image clearly.
  </li>
  <li>
    <code>crossorigin</code> isn't required and is a CORS settings attribute. The purpose of the crossorigin attribute is to allow you to configure the CORS requests for the element's fetched data. If this attribute is not specified, CORS is not used at all. An invalid keyword and an empty string will be handled as the anonymous value.
  </li>
  <li>
    <code>ismap</code> and <code>usemap</code> aren't required and are for image maps. See more about the map tag on <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map" class="u-link" target="_blank" rel="noreferrer noopener">Mozilla Web Docs</a>.
  </li>
  <li>
    <code>width</code> isn't required and specifies the width of the image.
  </li>
  <li>
    <code>height</code> isn't required and specifies the height of the image.
  </li>
</ul>

You can also see the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes" class="u-link" target="_blank" rel="noreferrer noopener">full list of the Global Attributes</a>, which contains attributes accepted in the img tag and all HTML 5 tags.

</section>

<section style="position: relative;" class="u-margin-bottom-sm">
<span class="u-anchor" id="accessibility"></span>

### 3. Accessibility

Images make the content of the site more pleasant and help people with cognitive and learning disabilities to understand more easily. However, images can be a barrier for users with low vision or blind, who use screen readers. Accessible images are essential to ensure a good experience for users of screen readers or speech input software, as well as to help users of mobile devices that can disable images when using data-roaming.

You can find tips and tricks to make your images really accessible on the previous <a href="https://www.tatianeaguirres.com/blog/2020-07-27-web-accessibility-2/#images" class="u-link" target="_blank" rel="noreferrer noopener">post about Accessibility to Screen Readers Users</a> on this blog.

</section>

<section style="position: relative;" class="u-margin-bottom-sm">
<span class="u-anchor" id="background-images"></span>

### 4. Background Images

Background image is a great solution when you want the image just to be a background, adding the content in front of the image. You can easily do this by using the CSS background-image property or the background property. To use these properties, you apply them to the HTML element that you wish to add the background image to. Example:

```html
<div class="imageBox">
  <p>Tatiane</p>
</div>
```

```css
.imageBox {
  background-image: url('https://www.tatianeaguirres.com/static/avatar-b5737f697355efa946435c1559c581cf.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 200px;
  height: 200px;
  color: black;
}
```

Warning: Browsers don't provide any special information on background images to assistive technology. The screen reader will not announce the background image to the user, so if the image contains information critical to understanding the page's overall purpose, it's better to describe it semantically in the document.

</section>

<section style="position: relative;" class="u-margin-bottom-sm">
<span class="u-anchor" id="linked-images"></span>

### 5. Linked Images

Linked images, when clicked on, open another web page or URL. You can place the link code around an image when your goal is to implicitly take the user to another place. A good example is using an image as a link to social networks, to the website's logo, or to indicate a file's download.

Examples:

```html
<a href="https://twitter.com/tatianeaguirres" target="_blank">
  <img src="twitter.png" alt="Open Tatiane's Twitter in a new tab." />
</a>
```

```html
<a href="https://www.tatianeaguirres.com/">
  <img src="logo.png" alt="Tatiane's Website." />
</a>
```

```html
<a href="..." download="...">
  <img src="pdf_icon.png" alt="PDF" />
</a>
```

</section>

<section style="position: relative;" class="u-margin-bottom-sm">
<span class="u-anchor" id="responsive-images"></span>

### 6. Responsive Images

You can easily make your image responsive using CSS:

```css
img {
  width: 100%;
  height: auto;
}
```

With the style above, the image will be scaled according to the browser window's size. Example:

<img src="https://cest7g.ch.files.1drv.com/y4mt0wHp2Tcga8Sa-_I8Qaf2vVesUJQ5KCBwn4XGA2d3IgSkSGEBi2w-IrYvvFbowsmgzzhyisR8Wil8nD8qTGJ_Ibxcs9gMCH1YVABSik1E2pF6EudGCVPBn-xMu_B4I-5ny9TIBnfOIqJIwmbH_aABbnNRzUuhOPaByVrkJKaaERTwb-gSQZMVgV5Fw3MjmO4p0Vl7rP9eqqUUYnceB5n3g?width=768&height=1024&cropmode=none" alt="city center of Utrecht, Netherlands, at night showing a canal illuminated in blue." width="100%" height="auto" style="max-height: 300px; object-fit: cover; margin-bottom: 20px;" />

```html
<img
  src="https://cest7g.ch.files.1drv.com/y4mt0wHp2Tcga8Sa-_I8Qaf2vVesUJQ5KCBwn4XGA2d3IgSkSGEBi2w-IrYvvFbowsmgzzhyisR8Wil8nD8qTGJ_Ibxcs9gMCH1YVABSik1E2pF6EudGCVPBn-xMu_B4I-5ny9TIBnfOIqJIwmbH_aABbnNRzUuhOPaByVrkJKaaERTwb-gSQZMVgV5Fw3MjmO4p0Vl7rP9eqqUUYnceB5n3g?width=768&height=1024&cropmode=none"
  alt="City center of Utrecht, Netherlands, at night showing a canal illuminated in blue."
  width="100%"
  height="auto"
  style="max-height: 300px; object-fit: cover;"
/>
```

Resize the browser window to see how the image will scale. Even on the smallest mobile screen, it will be fully responsive.

You can see that I also used the CSS property <code>object-fit</code>, which specifies how an image should be resized to fit its container. See the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit" class="u-link" target="_blank" rel="noreferrer noopener">Mozilla Web Docs</a> to learn more about the object-fit property.

</section>

Do you have a question about this subject or do you have another semantic HTML practice for images that you would like to share? Write in the comments, I will be happy to talk more about it with you.

Happy coding!
