---
layout: default
permalink: /cat/
title: 🐈
description: A wall of cat photos.
nav: false
sitemap: false
bonus: true
search_title: 🐈 Cat
# Exact words that reveal this page in search (case-insensitive).
search_terms: [cat, cats]
# The wall is driven from this list so the body stays a single loop. Order is
# chosen for the masonry columns — portrait and landscape alternate — rather
# than by date. Files live in assets/img/cats/.
photos:
  - file: cats-2022-08-19.jpg
    alt: Close-up of the grey British Shorthair in dappled afternoon light, amber eyes wide open.
  - file: cats-2022-10-29.jpg
    alt: The orange tabby caught mid-yawn in close-up, whiskers fanned out.
  - file: cats-napping-pair.jpg
    alt: The orange tabby curled around the grey cat as the two of them nap on a bed.
  - file: cats-2021-06-14.jpg
    alt: Both cats asleep together inside a felt cat cave, the tabby's front paws stretched out.
  - file: cats-2022-11-09.jpg
    alt: The grey cat draped over a cat tree platform with one paw dangling off the edge.
  - file: cats-2025-03-16.jpg
    alt: Close-up of the orange tabby's face, ears slightly back.
  - file: cats-2021-05-31.jpg
    alt: The orange tabby and the grey cat sharing a window hammock at night, city lights below.
  - file: cats-2024-05-26.jpg
    alt: Both cats side by side, peering over the edge of a shelf at the camera.
  - file: cats-kitten-grey.jpg
    alt: The grey cat as a kitten, sitting upright on a wooden floor.
  - file: cats-2023-05-21.jpg
    alt: The orange tabby squinting contentedly while being held.
  - file: cats-2022-11-05.jpg
    alt: The grey cat sitting beside window blinds, backlit by the window.
  - file: cats-2021-09-21.jpg
    alt: The orange tabby sprawled full length on a patterned rug, mid-yawn.
  - file: cats-2024-11-07.jpg
    alt: Both cats settled together on a grey couch.
  - file: cats-2025-08-26.jpg
    alt: The grey cat loafing on a bed with both front paws tucked forward.
  - file: cats-2026-03-27.jpg
    alt: The orange tabby stretched out along the length of a standing desk.
  - file: cats-2021-11-14.jpg
    alt: The grey cat seen from behind, watching snow fall past a window.
  - file: cats-2024-06-15.jpg
    alt: The orange tabby loafing on a black office chair beside a window.
  - file: cats-2022-11-17.jpg
    alt: The grey cat curled in a window hammock, looking back at the camera.
  - file: cats-2023-07-01.jpg
    alt: The orange tabby peering out from underneath a desk.
  - file: cats-2025-08-21.jpg
    alt: The grey cat sitting on a white desk next to a monitor.
  - file: cats-2024-09-15.jpg
    alt: The grey cat sitting upright beneath a chair.
  - file: cats-illustration.png
    alt: A cartoon illustration of the orange tabby beside a person wearing round glasses.
---

<div class="post">
  <header class="post-header">
    <h1 class="post-title"><span class="bonus-title">🐈</span></h1>
  </header>

  <article>
    <p class="photo-wall-intro">You searched for cats. Good instinct.</p>

    {% comment %}
      Three columns at full width, so each image lands in roughly a third of the
      content column. Keep this in sync with the column count in _base.scss.
    {% endcomment %}
    {% capture sizes %}(min-width: {{ site.max_width }}) {{ site.max_width | minus: 30 | divided_by: 3 }}px, (min-width: 576px) 45vw, 95vw{% endcapture %}

    <div class="photo-wall photo-wall--columns">
      {% for photo in page.photos %}
        {% if forloop.index <= 3 %}
          {% assign loading = 'eager' %}
        {% else %}
          {% assign loading = 'lazy' %}
        {% endif %}
        {% capture photo_path %}assets/img/cats/{{ photo.file }}{% endcapture %}
        <div class="photo-wall-item">
          {%
            include figure.liquid
            path=photo_path
            class="img-fluid rounded z-depth-1"
            sizes=sizes
            alt=photo.alt
            loading=loading
            cache_bust=true
          %}
        </div>
      {% endfor %}
    </div>

    <p class="bonus-back">
      <a href="{{ '/' | relative_url }}">← back to the serious pages</a>
    </p>

  </article>
</div>
