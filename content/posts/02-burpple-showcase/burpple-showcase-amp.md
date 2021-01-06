---
template: "post"
slug: "posts/adopting-amp-to-build-great-experience"
thumbnail:
featuredImage:
title: "Adopting AMP to build great experience"
date: "2020-10-29"
published: true
categories:
  - AMP
  - rails
  - html
  - css
  - web
---

## Implement AMP

> [AMP (Accelerated Mobile Pages)](https://amp.dev/) is a web component framework for easily creating user-first websites, stories, ads, emails, and more.

Burpplers share their favorite reviews every day. Our marketing team curates those food reviews into a list or article, as well as partnership collaboration. We have good contents and we want to make more viewer to our website. Most of the content viewer come from google search or other social medial platforms on mobile. So speedup the loading page on mobile browser and improve our website's ranking is the main goal. Instead of refactoring all of the pages to the modern front-end framework, we decide to implement AMP for some key pages.

There are some rules, the AMP HTML documents must:

- Start with the `<!doctype html>` doctype.
- Contain a top-level `<html ⚡>` tag (`<html amp>` is accepted as well).
- ...follow more rules at [here](https://amp.dev/documentation/guides-and-tutorials/start/create/basic_markup/?format=websites#required-mark-up)

In **Ruby on Rails**, create a `application.amp.erb` for layout and copy the page you want to import AMP and change it to `.amp.erb` (such as `app/views/articles/show.amp.erb`)

Add at the end of controller which the imported AMP page belongs to

```ruby
respond_to do |format|
  format.html
  format.amp
end
```

We need to set up `mime_types.rb` file and add

```ruby
Mime::Type.register_alias "text/html", :amp
```

The `<img>` tag are replaced with custom AMP HTML tags

```html
<amp-img src="welcome.jpg" alt="Welcome" height="400" width="800"></amp-img>
```

AMP page can be styled, just add CSS in `<style amp-custom>` tag in the `<head>`

```html
<style amp-custom>
  body {
    background-color: white;
  }
  amp-img {
    background-color: gray;
    border: 1px solid black;
  }
</style>
```

Search from Google in mobile, and open an AMP page (those items with ⚡ icon behind) is super fast!

![Search from google in mobile, open an AMP page is super fast!](amp-search-google.gif#width=280px;margin=auto)

AMP cannot directly help us improve website's ranking, but its purpose is to indirectly improve your website's ranking, but this indirect can also be achieved through other ways.
