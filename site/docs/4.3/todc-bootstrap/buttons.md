---
layout: docs
title: Buttons
description: Use TODC Bootstrap's custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
group: todc-bootstrap
toc: true
---

## Legacy

For additional flexibility, we've also included the button style from v3 of
TODC Bootstrap.

{% capture example %}
{% for color in site.data.theme-colors %}
<button type="button" class="btn btn-legacy-{{ color.name }}">{{ color.name | capitalize }}</button>
{% endfor %}
{% endcapture %}
{% include example.html content=example %}

## Raised

{% capture example %}
{% for color in site.data.theme-colors %}
<button type="button" class="btn btn-raised-{{ color.name }}">{{ color.name | capitalize }}</button>
{% endfor %}
{% endcapture %}
{% include example.html content=example %}

## Flat

In need of a button, but you'd like something flatter? Replace the default modifier classes with the <code>.btn-flat-*</code> ones to remove all background images, borders, and colors on any button.

{% capture example %}
{% for color in site.data.theme-colors %}
<button type="button" class="btn btn-flat-{{ color.name }}">{{ color.name | capitalize }}</button>
{% endfor %}
{% endcapture %}
{% include example.html content=example %}

## Pill

In need of a pill shaped button? Use the <code>.btn-pill</code> modifier class
with the <code>.btn</code>, <code>.btn-*</code>, <code>.btn-outline-*</code>, or
<code>.btn-flat-*</code> classes.

{% capture example %}
<button type="button" class="btn btn-pill">Button</button>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
{% for color in site.data.theme-colors %}
<button type="button" class="btn btn-{{ color.name }} btn-pill">{{ color.name | capitalize }}</button>
{% endfor %}
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
{% for color in site.data.theme-colors %}
<button type="button" class="btn btn-outline-{{ color.name }} btn-pill">{{ color.name | capitalize }}</button>
{% endfor %}
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
{% for color in site.data.theme-colors %}
<button type="button" class="btn btn-flat-{{ color.name }} btn-pill">{{ color.name | capitalize }}</button>
{% endfor %}
{% endcapture %}
{% include example.html content=example %}

## Floating Action

A floating action button is used for a promoted action.

Shaped like a circled icon floating above the UI, it changes color upon focus and lifts upon selection. When pressed, it may contain more related actions.

### Usage

Only one floating action button is recommended per screen to represent the most common action.

{% capture example %}
{% for color in site.data.theme-colors %}
<button type="button" class="btn btn-fab-{{ color.name }}"><span class="material-icons">add</span></button>
{% endfor %}
{% endcapture %}
{% include example.html content=example %}

{% capture callout %}
**Heads up!** The [Material Icons](https://material.io/icons/) are not included in the project. Please read the [Material Icons Guide](https://google.github.io/material-design-icons/) for an overview and how to include them with your project.
{% endcapture %}
{% include callout.html content=callout type="info" %}

### Sizes

Fancy smaller buttons? Add `.btn-sm`.

{% capture callout %}
**Heads up!** Floating Action Buttons do not support `.btn-lg`.
{% endcapture %}
{% include callout.html content=callout type="info" %}

{% capture example %}
<button type="button" class="btn btn-fab-primary"><span class="material-icons">add</span></button>
<button type="button" class="btn btn-fab-primary btn-sm"><span class="material-icons">add</span></button>
{% endcapture %}
{% include example.html content=example %}

### Disabled

No disabled styles are defined for FABs. The FAB promotes action, and should not be displayed in a disabled state. If you want to present a FAB that does not perform an action, you should also present an explanation to the user.

## Icon

{% capture example %}
{% for color in site.data.theme-colors %}
<button type="button" class="btn btn-icon-{{ color.name }}"><span class="material-icons">close</span></button>
{% endfor %}
{% endcapture %}
{% include example.html content=example %}

### Sizes

Fancy larger or smaller buttons? Add `.btn-lg` or `.btn-sm` for additional sizes.

{% capture example %}
<button type="button" class="btn btn-icon-primary btn-lg"><span class="material-icons">menu</span></button>
<button type="button" class="btn btn-icon-secondary btn-lg"><span class="material-icons">menu</span></button>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<button type="button" class="btn btn-icon-primary btn-sm"><span class="material-icons">menu</span></button>
<button type="button" class="btn btn-icon-secondary btn-sm"><span class="material-icons">menu</span></button>
{% endcapture %}
{% include example.html content=example %}
