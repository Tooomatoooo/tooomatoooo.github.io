---
layout: default
permalink: /eight-oddities/
title: The Eight Oddities of Columbus
# The Chinese sits in the description so ninja-keys' own matcher, which scores
# against title plus description, keeps this result when 八大怪 is typed.
description: 八大怪 — the eight oddities of Columbus, illustrated.
nav: false
sitemap: false
bonus: true
# Exact words that reveal this page in search (case-insensitive).
search_terms: [八大怪, eight oddities, oddities]
---

<div class="post">
  <header class="post-header">
    <h1 class="post-title">The Eight Oddities of Columbus</h1>
    <p class="post-description">八大怪</p>
  </header>

  <article>
    <div class="oddities-figure">
      {% capture sizes %}(min-width: {{ site.max_width }}) {{ site.max_width | minus: 30 }}px, 95vw{% endcapture %}
      {%
        include figure.liquid
        loading="eager"
        path="assets/img/image_8oddity.png"
        class="img-fluid rounded z-depth-1"
        sizes=sizes
        alt="Eight illustrated panels of Columbus life in Ohio State colours: a student nursing a sore foot, two horses in Ohio State blankets smoking pipes, someone reclining on a barbell bench, a child glaring at a plate of lettuce, a figure brooding over a broken heart, someone devouring a burger and fries, a monkey eating takeout surrounded by delivery bags, and a macaw contemplating a brain."
        cache_bust=true
      %}
    </div>

    <p class="bonus-back">
      <a href="{{ '/' | relative_url }}">← back to the serious pages</a>
    </p>

  </article>
</div>
