---
title: 'Web Accessibility IV: Make Your Website Accessible to Users with Dyslexia'
tags: ['Web', 'Accessibility', 'Dyslexia']
author: 'Tatiane Aguirres Nogueira'
date: '2020-10-19'
featured: 'images/featured.jpg'
---

Do you know what Albert Einstein, Steven Spielberg and Leonardo da Vinci have in common? Yes, dyslexia. Usually, when people hear the word **dyslexia** they think only of reading or math problems a child is having in school, or of slow learners. Almost everyone considers it some form of a learning disability, but the learning disability is only one face of dyslexia.

As for front-end developers, we have the power to build a better world through technology. And to achieve this goal together, I will share with you what dyslexia is, what the needs of these users are and how to build accessible front-end applications for them.

If you missed the three previous posts in this series, you can check out and learn more about web accessibility for <a class='u-link' href='https://www.tatianeaguirres.com/blog/2020-07-20-web-accessibility-1/'>keyboard users</a>, <a class='u-link' href='https://www.tatianeaguirres.com/blog/2020-07-27-web-accessibility-2/'>screen reader users</a> and <a class='u-link' href='https://www.tatianeaguirres.com/blog/2020-09-08-web-accessibility-3/'>low vision users</a>.

### Table of Contents

1. <a class='u-link' href='#what-is-dyslexia'>What is Dyslexia</a>
2. <a class='u-link' href='#text'>Text readability</a>
3. <a class='u-link' href='#typography'>Typography</a>
4. <a class='u-link' href='#time'>Enough Time</a>
5. <a class='u-link' href='#navigation'>Navigation</a>
6. <a class='u-link' href='#input'>Input Assistance</a>
7. <a class='u-link' href='#illustrations'>Illustrations</a>

<section style="position: relative;" class="u-margin-bottom-xlg u-margin-top-xlg">
<span class="u-anchor" id="what-is-dyslexia"></span>

### 1. What is Dyslexia

Worldwide, around 15-20% of the population has a language-based learning disability. Likely, 70-80% of them have dyslexia, a specific learning disability that is neurobiological in origin. It's characterized by difficulties with accurate and/or fluent word recognition and by poor spelling and decoding abilities. The basic abilities dyslexics share are higher than normal intelligence, and extraordinary creative abilities.

<blockquote cite="https://www.dyslexia.com/question/disability/">
  <p>Dyslexia reflects a different way of thinking and learning and not a mental defect. When provided with the proper tools for learning, dyslexic people can succeed in school and at the workplace, and they should not be stigmatized or discriminated against because of their dyslexic characteristics.</p>
  <footer>— 
    <cite>
      <a class='u-link' href='https://www.dyslexia.com/' target='_blank' rel='noreferrer noopener'>Davis Dyslexia Association International (DDAI)</a>
    </cite>
  </footer>
</blockquote>

A dyslexic person can be able to read very well, yet find it extremely difficult or impossible to write or spell. When a dyslexic person "sees" letters or words reversed or mixed up, there is usually nothing wrong with their eyes. The problem is in the way the mind interprets what the eyes see — like an optical illusion, except this mismatch between what illusion and reality happens with ordinary print on a page.

Dyslexia is divided into developmental and acquired forms. Developmental dyslexia begins in early childhood, and it's believed to be caused by the interaction of genetic and environmental factors. The acquired dyslexia occurs after neurological insults, such as traumatic brain injury or stroke. People with acquired dyslexia exhibit some of the signs or symptoms of the developmental disorder, but requiring different assessment strategies and treatment approaches.

</section>

<section style="position: relative;" class="u-margin-bottom-xlg u-margin-top-xlg">
<span class="u-anchor" id="text"></span>

### 2. Text readability

There are some bad practices regarding text readability that you, as a front-end developer, should avoid to help dyslexic users read text better. Some tips and tricks:

- Don't use moving text. It creates problems for dyslexic users and users with other visual impairments.
- Italicize text makes letters hard to read for dyslexic users. When the text size is small, italicized text is even more illegible. A better way to highlight is to use bold text because the letters are clearer and give better contrast.
- Use left-aligned text. The fully-justified text has an effect known as "<a class='u-link' href='https://en.wikipedia.org/wiki/River_(typography)' target='_blank' rel='noreferrer noopener'>rivers of white</a>". People see white patterns flowing through text more prominent than the text itself.
- Avoid double spacing after periods at the end of a sentence. Single spacing after periods is enough, after all, we don't need "rivers" in our texts.
- Long blocks of unbroken paragraph text are not only hard for dyslexic users to read, but for non-dyslexic users too. It's easy for dyslexic readers to get lost with long paragraphs. That's why it's better to use short paragraphs that express one idea per time. Because dyslexic users need more breaks between ideas.
- Don't use pure black text (#000000) with pure white background (#FFFFFF). Many dyslexic users are sensitive to the brightness the high contrast colors cause. It can cause the words to swirl or blur together.
- Always expand the first occurrence of any abbreviation on a page. For subsequent occurrences, consider use of `<acronym>` and `<abbr>` elements to aid understanding.

</section>

<section style="position: relative;" class="u-margin-bottom-xlg u-margin-top-xlg">
<span class="u-anchor" id="text"></span>

### 3. Typography

Font types have a significant impact on the readability of people with dyslexia. So it's good to always keep in mind that your website can be accessed by people from all over the world, including people with low vision and dyslexia, who need legible types of fonts to have a good reading experience.

Good fonts for users with dyslexia are **Helvetica**, **Courier**, **Arial**, **Verdana** and **CMU**, taking into consideration reading performance
and subjective preferences. Also, **sans serif**, **monospaced**, and **roman** font types increased significantly the reading performance, while italic fonts decreased reading performance. In particular, **Arial It.** should be avoided since it significantly decreases readability.

</section>

<section style="position: relative;" class="u-margin-bottom-xlg u-margin-top-xlg">
<span class="u-anchor" id="time"></span>

### 4. Enough Time

People with disabilities such as dyslexia or cognitive limitations may require more time to read content or to perform functions such as filling out online forms. If Web functions are time-dependent, it will be difficult for some users to perform the required action before a time limit occurs. It may render the service inaccessible to them.

Designing functions that are not time-dependent will help people with disabilities succeed at completing these functions. It includes partial or full updates of content (for example, page refresh), changes to content, or the expiration of a window of opportunity for a user to react to a request for input.

Example: A Website uses a client-side time limit to help protect users who may step away from their computer. A good solution is, after a period of inactivity, the Webpage asks if the user needs more time. If it doesn't get a response – it times out.

</section>

<section style="position: relative;" class="u-margin-bottom-xlg u-margin-top-xlg">
<span class="u-anchor" id="navigation"></span>

### 5. Navigation

For finding, navigation, and orientation, it is important that the user can find out what the current location is. For navigation, information about the possible destinations needs to be available. Unusual user interface features or behaviours can also confuse people with dyslexia or cognitive disabilities.

As described in The Motive Web Design Glossary, navigation has two main functions:

- To tell the user where they are;
- To enable the user to go somewhere else.

There are some tips and tricks regarding accessible navigation:

- Even for web pages that are not in a set, if a web page has blocks of text that are repeated within the page it may be helpful (but not required) to provide a means to skip over them.
- People with cognitive limitations as well as people who use screen readers may benefit when links are grouped into lists.
- Self-describing page titles allow users to quickly and easily identify whether the information contained in the Web page is relevant to their needs.
- Focusable components need to receive focus in an order that preserves meaning and operability only when navigation sequences affect meaning and operability. People with disabilities that make reading difficult can become disoriented when tabbing takes focus someplace unexpected. They benefit from a logical focus order.
- Provide a link text that identifies the purpose of the link without needing additional context. Example: A link contains text that describes the information at that URL. A page contains the sentence "There was much bloodshed during the Medieval period of history." Where "Medieval period of history" is a link.
- Enable the user to know which element among multiple elements has the keyboard focus. Example: When a user interface control receives focus, a visible border is displayed around it.

</section>

<section style="position: relative;" class="u-margin-bottom-xlg u-margin-top-xlg">
<span class="u-anchor" id="input"></span>

### 6. Input Assistance

Everyone makes mistakes. However, people with some disabilities have more difficulty creating error-free input. Besides, it may be harder for them to detect that they have made an error. Typical error indication methods may not be obvious to them because of a limited field of view, limited color perception, or use of assistive technology.

- In the case of unsuccessful form submission, show the error message in the text as specific as possible. It may help who have difficulty understanding the meaning represented by icons and other visual cues.
- Providing clear and unambiguous labels and instructions (including examples of expected data formats) helps all users to enter information correctly. Example: A field for entering a date contains initial text which indicates the correct format for the date.
- Ensure that users receive appropriate suggestions for correction of an input error if it is possible. Example: An input field requires that a month name be entered. If the user enters "12", a suggestion may include "Please provide the name of the month." or "Do you mean 'December'?".
- Providing safeguards to avoid serious consequences resulting from mistakes helps users with all disabilities who may be more likely to make mistakes. It includes make submissions reversible, and verification of data entered by the user for input errors and the opportunity to correct them.

</section>

<section style="position: relative;" class="u-margin-bottom-xlg u-margin-top-xlg">
<span class="u-anchor" id="illustrations"></span>

### 7. Illustrations

Long passages of the text without images, graphs, or other illustrations to highlight the context may be a barrier for people with cognitive, learning, and neurological disabilities. They can experience visual distortion where letters and words get jumbled.

Walls of text on the web are major engagement killers not only for users with dyslexia but for all users. Breaking up walls of text with headings, lists, images, appropriate spacing, and other HTML formatting is important for visual purposes and serves an important technical purpose for SEO and screen readers.

Video, graphics and photos help to create a visual memory for these users, which helps to decrease the experience of anxiety about being able to read and retain the information given to them.

</section>

### References:

- <a class='u-link' href='https://www.w3.org/WAI/' target='_blank' rel='noreferrer noopener'>W3C Web Accessibility Initiative (WAI)</a>
- <a class='u-link' href='https://www.medicinenet.com/dyslexia/article.htm' target='_blank' rel='noreferrer noopener'>MedicineNet, Inc.</a>
- <a class='u-link' href='https://www.dyslexia.com/' target='_blank' rel='noreferrer noopener'>Davis Dyslexia Association International (DDAI)</a>
- <a class='u-link' href='http://dyslexiahelp.umich.edu/sites/default/files/good_fonts_for_dyslexia_study.pdf' target='_blank' rel='noreferrer noopener'>Good Fonts for Dyslexia</a>
- <a class='u-link' href='https://dyslexiaida.org/' target='_blank' rel='noreferrer noopener'>International Dyslexia Association</a>
- <a class='u-link' href='https://www.thepickards.co.uk/Articles/Designing_for_Dyslexia.cfm' target='_blank' rel='noreferrer noopener'>
  The Pickards - Designing for Dyslexia</a>

The next post of the "Web Accessibility Series" will talk about accessibility to users with auditory disabilities. See you there!

Happy coding!
