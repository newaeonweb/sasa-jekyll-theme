---
layout: post
title: Sample Post Title
date: 2014-01-02 15:27:31
---

I am a placeholder post. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

> Boom. I am a blockquote.
> 
> Say something really clever here.

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

### Code Examples:
{% highlight scss %}
// SCSS Highlight
@import "compass/reset";
// variables
$colorGreen: #008000;
$colorGreenDark: darken($colorGreen, 10);
@mixin container {
		max-width: 980px;
}
// mixins with parameters
@mixin button($color:green) {
		@if ($color == green) {
				background-color: #008000;
		}
		@else if ($color == red) {
				background-color: #B22222;
		}
}
button {
		@include button(red);
}
{% endhighlight %}

Syntax Hightlight for many languages, with **highlightjs**.