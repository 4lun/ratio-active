Ratioactive
===

Ratioactive is a jQuery plugin that actively resizes an element to fill it's container while keeping it's ratio intact


Usage
---
Ratioactive works by working out the total available width available to the targeted element, then resizing it based on the element's original ratio.

$('.embed iframe').ratioActive();


Tips & Notes
---
* Horizontal padding and/or margins should not be present on the targeted element, use a parent element instead
* Ratioactive binds to the window resize event, but uses a timeout reset and delay to ennsure it fires at *most* every 150 ms
* Binding to a large amount of elements may result in tears (at least with flash)

To Do
---
* Add options for whether to listen to resize event and also the ability to bind to a custom event
* Look into only binding once per element, although function works with mutiple rebinds it's far from ideal