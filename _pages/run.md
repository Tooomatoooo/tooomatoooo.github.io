---
layout: default
permalink: /run/
title: 🏃‍♀️
description: You found the runner.
nav: false
sitemap: false
bonus: true
# No search_terms: this page stays out of search and is reached only through
# the footer emoji.
---

<div class="post">
  <header class="post-header">
    <h1 class="post-title"><span class="bonus-title">🏃‍♀️</span></h1>
  </header>

  <article>
    <div class="profile float-right">
      {% capture sizes %}(min-width: {{ site.max_width }}) {{ site.max_width | minus: 30 | times: 0.3 }}px, (min-width: 576px) 30vw, 95vw{% endcapture %}
      {%
        include figure.liquid
        loading="eager"
        path="assets/img/half_marathon_2026.jpg"
        class="img-fluid z-depth-1 rounded"
        sizes=sizes
        alt="Yicheng Liu running the 2026 Columbus half marathon in sunglasses and a black long-sleeve top, wearing race bib 14832."
        cache_bust=true
        avoid_scaling=true
      %}
    </div>

    <div class="clearfix">
      <p>You clicked the runner in the footer. Not many people do.</p>

      <p>Here is a picture of me running the half marathon in 2026.</p>

      <p>
        When I am not doing research, I enjoy photography, traveling, reading
        (I love Kazuo Ishiguro and Mario Vargas Llosa), weight-lifting, and
        running.
      </p>

      <p>Hope to meet you in person one day!</p>

      <p class="bonus-back">
        <a href="{{ '/' | relative_url }}">← back to the serious pages</a>
      </p>
    </div>

  </article>
</div>
