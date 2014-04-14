[hamburgerMenu](http://www.scottwillcode.com/hamburgerMenu/)
=================
HamburgerMenu is a simple jQuery plugin to handle the drop down menus associated with hamburger style menus.

[Check out the demo here](http://www.scottwillcode.com/hamburgerMenu/).

## Easy to use Hamburger Style Menus
When you click on the hamburger icon (or any container you set), the associated dropdown menu will either slide down or fade in depending on your preference.

## Dependancies
hamburgerMenu requires:
[JQuery](http://jquery.com/download/)

## Installation
Include script after the jQuery library:
```html
<script src="/path/to/jquery.hamburgermenu.js"></script>
```

## Usage
Using hamburgerMenu is easy, simply call the function on the main "hamburger" container. Make sure the drop-down menu is inside of the hamburger container.

### Calling hamburgerMenu
```html
$(function() { 
	$('.hamburgerMenu').hamburgerMenu(); 
});
```

### Setting up your HTML
```html
<div class="hamburgerMenu">
	<ul>
      <li><a href="link1.html">Link1</a></li>
      <li><a href="link2.html">Link2</a></li>
    </ul>
</div>
```

## Configuration

### Speed
Change how quickly or slowly the slide or fade occurs (default: 'fast').
```html
$(function() { 
	$('.menuContainer').hamburgerMenu({
    	speed: 200
    }); 
});
```

### Easing
Change which easing function to use for the transition. (default: 'swing').
```html
$(function() { 
	$('.menuContainer').hamburgerMenu({
    	easing: 'linear'
    }); 
});
```

### Type
Change whether the drop down slides or fades. (default: 'slide').
```html
$(function() { 
	$('.menuContainer').hamburgerMenu({
    	type: 'fade'
    }); 
});
```