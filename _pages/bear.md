---
layout: default
permalink: /bear/
title: 🐻
description: You found the bear.
nav: false
sitemap: false
_styles: >
  .secret-bear-title {
    display: inline-block;
    font-size: 1.6em;
    line-height: 1.2;
    animation: bear-bob 3s ease-in-out infinite;
  }
  @keyframes bear-bob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  @media (prefers-reduced-motion: reduce) {
    .secret-bear-title { animation: none; }
  }
  .secret-bear-back {
    margin-top: 2rem;
    font-size: 0.9rem;
  }
---

{% if page._styles %}
  <style type="text/css">
    {{ page._styles }}
  </style>
{% endif %}

<div class="post">
  <header class="post-header">
    <h1 class="post-title"><span class="secret-bear-title">🐻</span></h1>
  </header>

  <article>
    <div class="profile float-right">
      {% capture sizes %}(min-width: {{ site.max_width }}) {{ site.max_width | minus: 30 | times: 0.3 }}px, (min-width: 576px) 30vw, 95vw{% endcapture %}
      {%
        include figure.liquid
        loading="eager"
        path="assets/img/bear_katmai.jpg"
        class="img-fluid z-depth-1 rounded"
        sizes=sizes
        alt="Yicheng Liu in a blue rain jacket at Brooks Falls, Katmai National Park, with brown bears and leaping salmon at the waterfall behind."
        cache_bust=true
        avoid_scaling=true
      %}
    </div>

    <div class="clearfix">
      <p>You clicked the bear in the footer. Not many people do.</p>

      <p>Here is a picture of me with bears at Katmai National Park.</p>

      <p>
        When I am not doing research, I enjoy photography, traveling, reading
        (I love Kazuo Ishiguro and Mario Vargas Llosa), weight-lifting, and
        running (I am about to run my first half marathon in October).
      </p>

      <p>Hope to meet you in person one day!</p>

      <p class="secret-bear-back">
        <a href="{{ '/' | relative_url }}">← back to the serious pages</a>
      </p>
    </div>
  </article>
</div>
