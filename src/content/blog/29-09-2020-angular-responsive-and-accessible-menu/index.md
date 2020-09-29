---
title: 'Angular: Responsive and Accessible Menu with just CSS & TypeScript (without CSS libraries)'
tags: ['Angular', 'CSS', 'Mobile First']
author: 'Tatiane Aguirres Nogueira'
date: '2020-09-29'
featured: 'images/featured.jpg'
---

Are you looking for how to build a responsive and accessible menu in Angular without CSS libraries? So today is your lucky day! 🍀

There are some skills that every front-ender needs to become a high skilled developer, and knowing how to develop things by hand, without using CSS libraries, is one of the most important among these skills. And I realize that we don't have posts with code examples of responsive menus in Angular with just CSS. It's why I'm sharing this knowledge with you.

### Table of Contents

1. <a class='u-link' href='#project'>The project</a>
2. <a class='u-link' href='#setup'>Setup and code example</a>
3. <a class='u-link' href='#github'>Full project at GitHub</a>

<section style="position: relative;" class="u-margin-bottom-xlg u-margin-top-xlg">
<span class="u-anchor" id="project"></span>

### 1. The project

I created a simple project to use as an example in this post. It contains a header and a navbar component with three menu items that act as anchor links to the sections on the application's home page.

This example project is already available on my GitHub, and the link will be available at the end of this post.

Mobile and desktop version:

![Screenshot of the project with responsive menu on desktop and mobile devices.](https://github.com/tatianeaguirres/angular-responsive-menu-app/blob/master/src/assets/preview-project.png?raw=true)

</section>

<section style="position: relative;" class="u-margin-bottom-xlg">
<span class="u-anchor" id="setup"></span>

### 2. Setup and code example

Development in Angular uses the Node environment to work. So we will download and install dependencies and software we need:

- <a class='u-link' href='https://nodejs.org/en/' target='_blank' rel='noreferrer noopener'>Nodejs</a> is the main software we will need. If you don’t have it installed on your machine, go to Nodejs page and download the binary for your machine's operating system.
- <a class='u-link' href='https://www.npmjs.com/' target='_blank' rel='noreferrer noopener'>Npm</a> is the most used Node Package manager in the world. You don’t need to install it separately, it comes with the Nodejs binary.
- <a class='u-link' href='https://cli.angular.io/' target='_blank' rel='noreferrer noopener'>Angular CLI</a> is a command-line interface for Angular for scaffolding projects. To install it, run the following command on your terminal:

```
$ npm install -g @angular/cli
```

Now let's create our project with Angular CLI:

```
$ ng new angular-menu-app
```

For this project, we will need to create only two new components:

```
$ ng generate component navbar
```

To build our mobile first menu, we will use the `<app-navbar>` to render as a modal with te following content:

```html{numberLines: true}
<nav aria-labelledby="main-menu-label">
  <!-- helps to distinguish between multiple menus on a web page.
  it's visible only for screen readers. -->
  <h2 id="main-menu-label" class="screen-reader-only">Main Menu</h2>
  <!-- button only visible on mobile devices. -->
  <button
    id="close-menu"
    class="mobile-only"
    (click)="onCloseOnMobile()"
    aria-label="close menu"
    [attr.aria-hidden]="isMobile ? false : true"
  >
    <img src="/assets/close.svg" alt="" />
  </button>
  <ul role="menubar">
    <li role="menuitem"><a href="#first-section">First</a></li>
    <li role="menuitem"><a href="#second-section">Second</a></li>
    <li role="menuitem"><a href="#third-section">Third</a></li>
  </ul>
</nav>
```

For the menu close icon (line 13), we use a button (line 6) to wrap it because buttons have default focus for keyboard navegation. The "aria-label" (line 10) substitute the text inside the button and indicates that it's for closing the menu. And we also use the "aria-hidden" (line 11) attribute for hidden the button from screen readers on desktop screen. If you want to learn more about attribute binding in Angular please <a class='u-link' href='https://angular.io/guide/accessibility#accessibility-attributes' target='_blank' rel='noreferrer noopener'>check the documentation</a>.

The Navbar Component will look like this:

```ts{numberLines: true}
import { Component, OnInit, ElementRef } from '@angular/core'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // boolean to add dynamically the 'aria-hidden' by attribute binding.
  isMobile = window.innerWidth <= 1023

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.onCloseWhenClickingOnMobile()
  }

  onCloseOnMobile() {
    // removes the visibility class and adds the hidden class.
    this.el.nativeElement.classList.remove('show-menu')
    this.el.nativeElement.classList.add('hide-menu')
  }

  onCloseWhenClickingOnMobile() {
    // just on mobile devices.
    if (window.innerWidth <= 1023) {
      // when the menu or backdrop is clicked the menu is closed.
      this.el.nativeElement.addEventListener('click', () => {
        this.onCloseOnMobile()
      })
    }
  }
}
```

We injected the ElementRef class (line 12) so we can have access to the component’s DOM in the browser. With reference to its DOM we can manipulate its visibility. `'show-menu'` (line 20) makes the navbar component visible. `'hide-menu'` (line 21) makes the navbar component invisible.

If we click on the close menu button the navbar component is removed from the screen. Looking into the click functions (line 18) run when the buttons are clicked. They simply get a reference to the modal component HTMLElement instance and use the classList methods add and remove to toggle its display on and off.

Now we need to add the `<app-navbar>` style:

```css{numberLines: true}
nav {
  background-color: #222;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-width: 250px;
  height: 100%;
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
}

ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
}

/* mobile */
@media screen and (max-width: 1023px) {
  nav {
    padding: 25px 15px;
  }
  ul {
    margin-top: 40px;
  }
}

/* desktop */
@media screen and (min-width: 1024px) {
  nav {
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 70px;
    position: relative;
  }
  ul {
    flex-direction: row;
  }
}

li {
  padding: 10px;
}

a {
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
}

a:hover,
a:focus {
  color: #0acce4;
  text-decoration: underline;
}
```

The `nav` HTML element has a column orientation and fixed position by default (line 1), because we are building a mobile-first app, and in the mobile version our menu is a modal component. In the desktop version, the `nav` element will no longer have the behavior of modal, but a normal component, having the style of row orientation and relative position (line 36).

Now, let’s create a component we will place the navbar on:

```
$ ng generate component header
```

Then add the following HTML structure:

```html{numberLines: true}
<header>
  <h1>Angular Menu</h1>
  <!-- button only visible on mobile devices by the class "mobile-only". -->
  <button
    id="open-menu"
    class="mobile-only"
    (click)="showMenu()"
    aria-label="open menu"
    [attr.aria-hidden]="isMobile ? false : true"
  >
    <img src="/assets/menu.svg" alt="" />
  </button>
  <app-navbar id="navbar" class="desktop-only"></app-navbar>
</header>
```

Initially the `<app-navbar>` is visible only on desktop screens (line 13). In mobile devices, it will only appear when the function `showMenu()` (line 7) is called, then the `<app-navbar>` component is displayed, showing high above the page content.

The Header Component structure:

```ts{numberLines: true}
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // boolean to add dynamically the 'aria-hidden' by attribute binding.
  isMobile = window.innerWidth <= 1023

  constructor() {}

  ngOnInit() {}

  showMenu() {
    // removes the hidden class and adds the visibility class.
    let navbar = document.getElementById('navbar')
    navbar.classList.remove('desktop-only')
    navbar.classList.remove('hide-menu')
    navbar.classList.add('show-menu')
  }
}
```

We just need to add the `<app-header>` style:

```css{numberLines: true}
header {
  background-color: #222;
  color: #fff;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  max-width: 800px;
  margin: 0 auto;
}

.hide-menu {
  display: none;
}

.show-menu {
  display: block;
}
```

And the global style of the project at "src/styles.css":

```css{numberLines: true}
/* If you want to see the full styles.css file,
please go to the project repository. The link 
is available at the end of this post.  */

@media screen and (min-width: 1024px) {
  .mobile-only {
    display: none;
  }
}

@media screen and (max-width: 1023px) {
  .desktop-only {
    display: none;
  }
}

.screen-reader-only {
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

With all this code, the `<navbar>` component will behave as a modal in mobile devices, opening and closing the menu through the functions on the buttons. And in the desktop version, the `<navbar>` will just be a normal component rendered on the screen with row orientation for the menu items. Thus, we use the same component for all screen sizes, changing only their behavior and style for each screen, which contributes a lot to the app optimization.

</section>

<section style="position: relative;" class="u-margin-bottom-xlg">
<span class="u-anchor" id="github"></span>

### 3. Full project at GitHub

This project is already available <a class='u-link' href='https://github.com/tatianeaguirres/angular-responsive-menu-app' target='_blank' rel='noreferrer noopener'>on my Github</a> with all the instructions necessary to run and modify it. Feel free to copy, edit, and improve this code.

</section>

Would you change anything in this code? Do you have any suggestions for improvement for it? I would love to hear your opinion! You can write here in the comments or send a Pull Request to the above repository.

Happy coding!
