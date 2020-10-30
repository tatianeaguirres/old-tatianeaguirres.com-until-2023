---
title: '8 Landmark Roles That Every Front-end Should Know'
tags: ['Accessibility', 'Semantic', 'HTML']
author: 'Tatiane Aguirres Nogueira'
date: '2020-10-30'
featured: 'images/featured.jpg'
---

Landmarks provide a powerful way to identify the organization and structure of a web page. The structural information conveyed visually to users should be represented programmatically in the markup using landmark roles.

In this post, you will understand the importance of logical, usable, and accessible layout for assistive technologies using HTML sectioning elements and ARIA landmark roles.

### Table of Contents

1. <a class='u-link' href='#what-is'>What is Landmark Roles</a>
2. <a class='u-link' href='#banner'>The Banner role</a>
3. <a class='u-link' href='#complementary'>The Complementary role</a>
4. <a class='u-link' href='#contentinfo'>The Contentinfo role</a>
5. <a class='u-link' href='#form'>The Form role</a>
6. <a class='u-link' href='#main'>The Main role</a>
7. <a class='u-link' href='#navigation'>The Navigation role</a>
8. <a class='u-link' href='#region'>The Region role</a>
9. <a class='u-link' href='#search'>The Search role</a>
10. <a class='u-link' href='#how-to-use'>How to use it on your web page</a>

<section style="position: relative;" class="u-margin-bottom-xlg u-margin-top-xlg">
<span class="u-anchor" id="what-is"></span>

### 1. What is Landmark Roles

WAI-ARIA (Accessible Rich Internet Applications or ARIA) is a <a class='u-link' href='https://www.w3.org/WAI/standards-guidelines/aria/' target='_blank' rel='noreferrer noopener'>W3C specification</a> for enhancing accessibility in ways that plain HTML can't. <abbr title="Accessible Rich Internet Applications">ARIA</abbr> defines a way to make Web content and Web applications more accessible to people with disabilities.

One of the easiest <abbr title="Accessible Rich Internet Applications">ARIA</abbr> features to implement, and one that provides significant immediate benefits to screen reader users is **landmark roles**. There are eight of these roles, each representing a block of content that occurs commonly on web pages. Let's get to know each one of them.

</section>

<section style="position: relative;" class="u-margin-bottom-xlg u-margin-top-xlg">
<span class="u-anchor" id="banner"></span>

### 2. The Banner role

A **banner** landmark identifies site-oriented content at the beginning of each page within a website. Site-oriented content typically includes things such as the logo or identity of the site sponsor, and site-specific search tool. A banner usually appears at the top of the page and typically spans the full width.

A `role="banner"` attribute is used to define a banner landmark.

Good practices on banner usage:

- By default, the HTML5 `<header>` element has an identical meaning to the banner landmark.
- Each page may have one banner landmark.
- The banner landmark should be a top-level landmark.
- When a page contains nested document and/or application roles (typically through the use of iframe and frame elements), each document or application role may have one banner landmark.
- If a page includes more than one banner landmark, each should have a unique label.

Best usage:

```html{numberLines: true}
<body>
  <header> <!-- implicit use of the banner role -->
    <h1>Popcorn Factory<h1>
    <!-- header content -->
  </header>
  <!-- more content -->
</body>
```

In the example above, the use of the banner landmark is done through the `<header>` element (line 2). The header element defines a banner landmark when its context is the body element.

The HTML header element is not considered a banner landmark when it is descendant of any of following elements:

- `<article>`
- `<aside>`
- `<main>`
- `<nav>`
- `<section>`

If you want to use the banner landmark in the context cited above, you need to add the banner landmark through the role attribute. Example:

```html{numberLines: true}
<article>
  <header role="banner" aria-labelledby="popcorn"> <!-- explicit use of the banner role -->
    <h2 id="popcorn">Popcorn recipes<h2>
    <!-- header content -->
  </header>
  <!-- more content -->
</article>
```

</section>

<section style="position: relative;" class="u-margin-bottom-xlg u-margin-top-xlg">
<span class="u-anchor" id="complementary"></span>

### 3. The Complementary role

A **complementary** landmark is a supporting section of the document, designed to be complementary to the main content at a similar level in the DOM hierarchy, but remains meaningful when separated from the main content.

A `role="complementary"` attribute is used to define a complementary landmark.

Good practices on complementary usage:

- The complementary landmarks should be top-level landmarks (not contained within any other landmarks).
- If the complementary content is not related to the main content, a more general role should be assigned (region).
- If a page includes more than one complementary landmark, each should have a unique label.
- When only one complementary landmark on a page, a label is optional.
- When there is more than one complementary landmark on a page, each should have a unique label.

Best usage:

```html{numberLines: true}
<aside> <!-- implicit use of the complementary role -->
  <h2>Related recipes<h2>
  <!-- complementary content -->
</aside>
```

In the example above, the use of the complementary landmark is done through the `<aside>` element (line 1). The aside element defines a complementary landmark.

When not using the aside element, you need use the role attribute (line 1):

```html{numberLines: true}
<section role="complementary"> <!-- explicit use of the complementary role -->
  <h2>Title for complementary area<h2>
  <!-- complementary content area -->
</section>
```

When there is more than one complementary landmark on a page, each should have a unique label:

```html{numberLines: true}
<aside aria-labelledby="related-recipes"> <!-- implicit use of the complementary role -->
  <h2 id="related-recipes">Related recipes<h2>
  <!-- complementary content -->
</aside>
<aside aria-labelledby="related-posts"> <!-- implicit use of the complementary role -->
  <h2 id="related-recipes">Related posts</h2>
  <!-- complementary content -->
</aside>
```

</section>

<section style="position: relative;" class="u-margin-bottom-xlg u-margin-top-xlg">
<span class="u-anchor" id="contentinfo"></span>

### 4. The Contentinfo role

A **contentinfo** landmark is a way to identify common information at the bottom of each page within a website, typically called the "footer" of the page, including information such as copyrights and links to privacy and accessibility statements.

A `role="contentinfo"` attribute is used to define a contentinfo landmark.

Good practices on contentinfo usage:

- Each page may have one contentinfo landmark.
- The contentinfo landmark should be a top-level landmark.
- When a page contains nested document and/or application roles (typically through the use of iframe and frame elements), each document or application role may have one contentinfo landmark.
- If a page includes more than one contentinfo landmark, each should have a unique label.

Best usage:

```html{numberLines: true}
<body>
  <!-- webpage content -->
  <footer> <!-- implicit use of the contentinfo role -->
    <h2>Contact, Policies and Legal<h2>
    <!-- contentinfo area content -->
  </footer>
</body>
```

In the example above, the use of the contentinfo landmark is done through the `<footer>` element (line 3), because using the footer element will automatically communicate a section has a role of contentinfo (when its context is the body element). Developers should always prefer using the correct semantic HTML element over using ARIA.

The HTML footer element is not considered a contentinfo landmark when it is descendant of any of following elements:

- `<article>`
- `<aside>`
- `<main>`
- `<nav>`
- `<section>`

If you want to use the contentinfo landmark in the context cited above, you need to add the contentinfo landmark through the role attribute (line 3). Example:

```html{numberLines: true}
<article>
  <!-- article content -->
  <footer role="contentinfo"> <!-- explicit use of the contentinfo role -->
    <h2>Terms of Use<h2>
    <!-- content -->
  </footer>
</article>
```

</section>

<section style="position: relative;" class="u-margin-bottom-xlg u-margin-top-xlg">
<span class="u-anchor" id="form"></span>

### 5. The Form role

A form landmark identifies a region that contains a collection of items and objects that, as a whole, combine to create a form when no other named landmark is appropriate, as main or search roles.

The `role="form"` attribute defines a form landmark.

Good practices on form usage:

- Use the form role to identify a region of the page; do not use it to identify every form field.
- Use the search landmark instead of the form landmark when the form is used for search functionality.
- A form landmark should have a label to help users understand the purpose of the form.
- A label for the form landmark should be identified using aria-labelledby to visible heading element (`<h1>` to `<h6>` element).
- If a page includes more than one form landmark, each should have a unique label.

Best usage:

```html{numberLines: true}
<form aria-labelledby="contact">
  <!-- implicit use of the form role -->
  <fieldset>
    <legend id="contact">Add Contact</legend>
    <!-- form controls add contact -->
  </fieldset>
</form>
```

In the example above, the use of the contentinfo landmark is done through the `<form>` element (line 1). Using the form element will automatically communicate a section of content as a form landmark if it's provided with an accessible name. Developers should always prefer using the correct semantic HTML element over using ARIA.

Whenever possible, controls contained in a form landmark in an HTML document should use native host semantics:

- `<button>`
- `<input>`
- `<select>`
- `<textarea>`

When not using the form element, you need to use the role attribute (line 1), but this practice is not recommended:

```html{numberLines: true}
<div role="form" aria-labelledby="contact">
  <!-- explicit use of the form role -->
  <fieldset>
    <legend id="contact">Add Contact</legend>
    <!-- form controls add contact -->
  </fieldset>
</div>
```

⚠️ **Warning**: Use an HTML `<form>` element to contain your form controls, rather than the ARIA form role, unless you have a very good reason. The form element is sufficient to tell assistive technologies that there is a form.

</section>

<section style="position: relative;" class="u-margin-bottom-xlg u-margin-top-xlg">
<span class="u-anchor" id="main"></span>

### 6. The Main role

A **main** landmark identifies the primary content of the page.

A `role="main"` attribute is used to define a main landmark.

Good practices on the main usage:

- Each page should have one main landmark.
- The main landmark should be a top-level landmark.
- When a page contains nested document and/or application roles (typically through the use of iframe and frame elements), each document or application role may have one main landmark.
- If a page includes more than one main landmark, each should have a unique label.

Best usage:

```html{numberLines: true}
<main> <!-- implicit use of the main role -->
  <h1>Popcorn Factory<h1>
  <!-- main content area -->
</main>
```

In the example above, the use of the main landmark is done through the `<main>` element (line 1), because the main element has a role of main. Developers should always prefer using the correct semantic HTML element over using ARIA.

When not using the main element, you need to use the role attribute (line 1), but this practice is not recommended:

```html{numberLines: true}
<div role="main"> <!-- explicit use of the main role -->
  <h1>Popcorn Factory<h1>
  <!-- main content area -->
</div>
```

⚠️ **Warning**: Use an HTML `<main>` element to contain your main content, rather than the ARIA main role, unless you have a very good reason. The main element is sufficient to tell assistive technologies that there is a main.

</section>

<section style="position: relative;" class="u-margin-bottom-xlg u-margin-top-xlg">
<span class="u-anchor" id="navigation"></span>

### 7. The Navigation role

**Navigation** landmarks provide a way to identify groups or lists of links that are intended to be used for website or page content navigation.

A `role="navigation"` attribute is used to define a navigation landmark.

Good practices on navigation usage:

- Use the HTML `<nav>` element to define a navigation landmark.
- If a navigation landmark has an identical set of links as another navigation landmark on the page, use the same label for each navigation landmark.

Best usage:

```html{numberLines: true}
<nav aria-labelledby="main-menu"> <!-- implicit use of the navigation role -->
  <h2 id="main-menu">Main menu<h2>
  <ul>
    <li><a href="/home">Home</a></li>
    <li><a href="/recipes">Recipes</a></li>
    <!-- more menu items -->
  </ul>
</nav>
```

In the example above, the use of the navigation landmark is done through the `<nav>` element (line 1), because using the nav element will automatically communicate a section has a role of navigation. Developers should always prefer using the correct semantic HTML element over using ARIA.

If a page includes more than one navigation landmark, each should have a unique label:

```html{numberLines: true}
<nav id="main-nav" aria-label="Main">
  <!-- implicit use of the navigation role -->
  <!-- navigation content -->
</nav>

<nav id="footer-nav" aria-label="Footer">
  <!-- implicit use of the navigation role -->
  <!-- navigation content -->
</nav>
```

This label (lines 1 and 5) will allow an assistive technology user to be able to quickly understand the purpose of each landmark.

When not using the nav element, you need to use the role attribute (line 1), but this practice is not recommended:

```html{numberLines: true}
<div role="navigation" aria-label="Main">
  <!-- explicit use of the navigation role -->
  <!-- navigation content -->
</div>
```

⚠️ **Warning**: Use an HTML `<nav>` element to contain your navigation content, rather than the ARIA navigation role, unless you have a very good reason. The nav element is sufficient to tell assistive technologies that there is a navigation.

</section>

<section style="position: relative;" class="u-margin-bottom-xlg u-margin-top-xlg">
<span class="u-anchor" id="region"></span>

### 8. The Region role

A **region** landmark is a perceivable section containing content that is relevant to a specific, author-specified purpose and sufficiently important that users will likely want to be able to navigate to the section easily and to have it listed in a summary of the page.

A `role="region"` attribute is used to define a region landmark.

Good practices on region usage:

- Use the HTML `<section>` element to define a region landmark.
- A region landmark must have a label.
- If a page includes more than one region landmark, each should have a unique label.
- The region landmark can be used to identify content that named landmarks do not appropriately describe.

Best usage:

```html{numberLines: true}
<main>
  <h1>Popcorn Factory<h1>

  <section aria-labelledby="recipes"> <!-- implicit use of the region role -->
    <h2 id="recipes">Popcorn Recipes</h2>
    <!-- content for region area -->
  </section>

  <section aria-labelledby="flavors"> <!-- implicit use of the region role -->
    <h2 id="flavors">Popcorn Flavors</h2>
    <!-- content for region area -->
  </section>
</main>
```

In the example above, the use of the region landmark is done through the `<section>` element (line 1), because using the section element will automatically communicate a section has a role of region if it is given an accessible name. Developers should always prefer using the correct semantic HTML element, in this case section, over using ARIA.

When not using the section element, you need to use the role attribute (line 1), but this practice is not recommended:

```html{numberLines: true}
<div role="region" aria-label="Recipes">
  <!-- explicit use of the region role -->
  <!-- region content -->
</div>
```

⚠️ **Warning**: Use an HTML `<section>` element to contain your region content, rather than the ARIA region role, unless you have a very good reason. The section element is sufficient to tell assistive technologies that there is a region.

</section>

<section style="position: relative;" class="u-margin-bottom-xlg u-margin-top-xlg">
<span class="u-anchor" id="search"></span>

### 9. The Search role

A **search** landmark contains a collection of items and objects that, as a whole, combine to create search functionality to content on the website.

A `role="search"` attribute is used to define a search landmark.

Good practices on search usage:

- Use the search landmark instead of the form landmark when the form is used for search functionality.
- If a page includes more than one search landmark, each should have a unique label.

Best usage:

```html{numberLines: true}
<form role="search">
  <!-- explicit use of the search role -->
  <input type="search" aria-label="search popcorns" size="20" />
  <input type="submit" value="Search" />
</form>
```

</section>

<section style="position: relative;" class="u-margin-bottom-xlg u-margin-top-xlg">
<span class="u-anchor" id="how-to-use"></span>

### 10. How to use it on your web page

According to <a class='u-link' href='https://www.w3.org/TR/wai-aria-practices/examples/landmarks/' target='_blank' rel='noreferrer noopener'>W3C ARIA Landmarks</a>, due to the complexity of today's web content, if using landmarks, all perceivable content should reside in a semantically meaningful landmark so that content is not missed by the user.

The steps to correctly use landmark roles on your web page are:

1. Identify the logical structure
   - Break the page into perceivable areas called "areas".
   - Typically, designers indicate areas visually using alignment and spacing of content.
   - Regions can be further defined into logical sub-areas as needed.
   - An example of a sub-area is a portlet in a portal application.
2. Assign landmark roles to each area
   - Assign landmark roles based on the type of content in the area.
   - banner, main, complementary and contentinfo landmarks should be top-level landmarks.
   - Landmark roles can be nested to identify parent/child relationships of the information being presented.
3. Label each area
   - If a specific landmark role is used more than once on a web page, it should have a unique label.
   - If an area begins with a heading element (`<h1>`-`<h6>`), it can be used as the label for the area using the aria-labelledby attribute.
   - If an area does not have a heading element, provide a label using the aria-label attribute.
   - Avoid using the landmark role as part of the label. For example, a navigation landmark with a label "Site Navigation" will be announced by a screen reader as "Site Navigation Navigation". The label should simply be "Site".

</section>

### References:

- <a class='u-link' href='https://www.w3.org/TR/wai-aria-practices/examples/landmarks/' target='_blank' rel='noreferrer noopener'>W3C ARIA Landmarks</a>
- <a class='u-link' href='https://www.washington.edu/accessibility/web/landmarks/' target='_blank' rel='noreferrer noopener'>University of Washington</a>

Now just start applying these landmark roles to your projects!

Happy coding!
