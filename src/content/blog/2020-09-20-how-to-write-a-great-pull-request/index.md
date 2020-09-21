---
title: 'How to Write a Great Pull Request in 10 Minutes (or less)'
tags: ['Pull Request', 'Tools', 'Tips']
author: 'Tatiane Aguirres Nogueira'
date: '2020-09-21'
featured: 'images/featured.jpg'
---

Pull Requests let you tell others about changes you've pushed to a branch in a repository on GitHub, for example. And when we work in teams, we know that the time it takes to create and review a Pull Request can profoundly impact the productivity of the entire team. After all, no one likes to spend half an hour writing or reviewing a Pull Request.

When you write a Pull Request with just one line, you are giving a lot of trouble to your reviewers, who will need to ask lots of questions to understand the context and the code.

During my journey as a developer, I have always received great feedbacks from reviewers on how I write my PRs. I always try to provide all the information necessary for reviewers to get their work done quickly and easily.

In this way, I created a "cake recipe" that helps me write my Pull Requests in 10 minutes (and sometimes in less time). And now I will share this knowledge with you.

### Table of Contents

1. <a class='u-link' href='#small-prs'>Make small PRs</a>
2. <a class='u-link' href='#self-describing-titles'>Self-describing titles</a>
3. <a class='u-link' href='#description'>Short and accurate description</a>
4. <a class='u-link' href='#screenshots'>Provide screenshots</a>
5. <a class='u-link' href='#how-did-you-test'>How did you test?</a>
6. <a class='u-link' href='#how-can-reviewers-test'>How can the reviewers test?</a>
7. <a class='u-link' href='#bonus-sample-template'>Bonus: sample template</a>

<section style="position: relative;" class="u-margin-bottom-xlg u-margin-top-xlg">
<span class="u-anchor" id="small-prs"></span>

### 1. Make small PRs

The first thing you should think about writing an accurate Pull Request is that it needs to be **short**. The longer your Pull Request is, the more it will cost you to write and your colleagues to review it.

So when you get a ticket (or task) you can already think about if you need to divide it into one or more PRs. And believe me, there is no problem in doing a PR just to add or remove a dependency. On the contrary, your colleagues will love these super short and accurate PRs, and you won't have to wait too long asking for a review.

</section>

<section style="position: relative;" class="u-margin-bottom-xlg">
<span class="u-anchor" id="self-describing-titles"></span>

### 2. Self-describing titles

The title needs to describe clearly and precisely what this Pull Request will add to the project's repository.

A Pull Request can have one or more commits, so I always avoid using the same commit text, as I may be excluding the content of other commits when doing this. The format I like to use is as follows:

[this Pull Request] adds the carousel images component.

You can also be explicit about when you want feedback, if the Pull Request is work in progress, say so. A prefix of "[WIP]" in the title is a simple, common pattern to indicate that state.

</section>

<section style="position: relative;" class="u-margin-bottom-xlg">
<span class="u-anchor" id="description"></span>

### 3. Short and accurate description

The description doesn't have to be long to be considered good, it just needs to contain the information needed to contextualize the reviewer.

The essential information of the description is:

- **Don't assume reviewers' familiarity with the story:** Remember that anyone in the company could be reading this Pull Request, so the content and tone may inform people other than those taking part, now or later. So it's important to provide a quick overview of why the work is taking place.
- **Ticket number:** You don't need to repeat all the information from the ticket into the description, you can simply give a quick context about the problem and the proposed solution, and add the ticket number and link so that the reviewer can find more information on the ticket itself if needed.
- **@mention the people involved:** You can involve key people (or teams) in the discussion and say why for better contextualization. ("/cc @maryfromdesign for clarification on this behavior").
- **Did you update the documentation?** If your project has documentation and/or changelog, you definitely need to let the reviewers know that you've updated them.

Example:

This PR adds the carousel images component to the project. See ticket #123 for more information. We are using the library XYZ, result of the POC<sup>1</sup> that can be viewed on ticket #122. We changed the color of the arrows because the original color provided in the Zeplin tool did not have AAA contrast. The new color was agreed with @maryfromdesign.

<sup>1</sup> Proof of concept.

</section>

<section style="position: relative;" class="u-margin-bottom-xlg">
<span class="u-anchor" id="screenshots"></span>

### 4. Provide screenshots

If your task includes interface development, consider including a screenshot of your final result in the description. Especially if the ticket is a visual bug, in this case, you can add a "before" and "after" screenshot to demonstrate how you solved the problem.

</section>

<section style="position: relative;" class="u-margin-bottom-xlg">
<span class="u-anchor" id="how-did-you-test"></span>

### 5. How did you test?

According to the test coverage adopted in your project, you must notify reviewers if you have added the appropriate test coverage in your code.

Example:

```
I have added the following test coverage:

- [x] Unit testing with Jasmine.
- [x] Functional testing with Cypress.
- [x] Visual regression testing with PhantomCSS.
- [x] Accessibility testing with Wave.
- [x] Cross-browser testing with BrowserStack.
- [ ] This change did not require testing.
```

This test checklist format even helps you remember some tests you may have missed. It's very helpful.

</section>

<section style="position: relative;" class="u-margin-bottom-xlg">
<span class="u-anchor" id="how-can-reviewers-test"></span>

### 6. How can the reviewers test?

This is the moment when you must inform everything the reviewer needs to know to test the functioning of your code. For example, how to reproduce some behavior, how to find the right component, if they need to use any specific code or key, or add some environment variable locally.

Example:

```
Go to URL localhost:8000/login and do the login with the following credentials:

User: localuser
Password: P@ssw0rd!

Then you will be able to see the dashboard on the home page.
```

</section>

<section style="position: relative;" class="u-margin-bottom-xlg">
<span class="u-anchor" id="bonus-sample-template"></span>

### 7. Bonus: sample template

In this template, I have picked the most relevant information, which you can modify according to the needs of your project.

I personally like the checkbox format very much, as you only need to select the alternatives that correspond with your changes, greatly improving productivity. And for items that don't make sense for this change, you can just remove them.

```
# Description

Include a summary of the change, relevant motivation, and context.
List any dependencies that are required for this change.

Fixes # (ticket number)

## Type of Change

- [ ] Bug fix.
- [ ] New feature.
- [ ] Docs update.

# Screenshots (if applicable)

Screenshot of expected behavior.

Screenshot of current behavior.

# How Has This Been Tested?

- [ ] Unit testing with Jasmine.
- [ ] Functional testing with Cypress.
- [ ] Visual regression testing with PhantomCSS.
- [ ] Accessibility testing with Wave.
- [ ] Cross-browser testing with BrowserStack.
- [ ] This change did not require testing.

# How Can This Be Tested?

Add relevant instructions for the reviewer to test the changes.

# Checklist:

- [ ] My code follows the style guidelines of this project.
- [ ] I have performed a self-review of my code.
- [ ] This change requires a documentation update.
- [ ] I have made corresponding changes to the documentation.
- [ ] I have updated the changelog.
- [ ] My changes generate no new warnings.
- [ ] I have added tests that prove my fix is effective or that my feature works.
- [ ] New and existing tests pass locally with my changes.
```

</section>

I'm sure that after you start using these tips and this template, your team's productivity about the time of writing and reviewing of Pull Requests will improve a lot!

Do you know of any other Pull Request information that should be on this list? Write in the comments.

Happy coding!
