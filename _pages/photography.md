---
layout: default
permalink: /photography/
title: 📷
description: A wall of photographs.
nav: false
sitemap: false
bonus: true
search_title: 📷 Photography
# Exact words that reveal this page in search (case-insensitive).
search_terms: [photography, photo, photos]
# Same pattern as _pages/cat.md: the wall is driven from this list so the body
# stays a single loop. Order is chosen so portrait and landscape alternate along
# each justified row, not by date. `ratio` is the photo's width divided by its
# height; the row layout uses it to size each photo, so it must be updated if a
# file is ever recropped. Files live in assets/img/photography/.
photos:
  - file: matterhorn-milky-way.jpg
    alt: The Milky Way arching over the Matterhorn, the peak silhouetted against a dense star field.
    ratio: 0.6669
  - file: eclipse-corona.jpg
    alt: A total solar eclipse at totality, the sun's corona flaring around a black disc.
    ratio: 1.0
  - file: columbus-skyline.jpg
    alt: The Columbus skyline at golden hour, mirrored in the Scioto River below a low arched bridge.
    ratio: 1.9632
  - file: sagrada-familia.jpg
    alt: The interior of the Sagrada Família, branching stone columns lit amber by stained glass.
    ratio: 0.75
  - file: glacier-lagoon.jpg
    alt: Icebergs drifting across a glacial lagoon, with a glacier and dark mountains behind.
    ratio: 1.4995
  - file: church-milky-way.jpg
    alt: A small stone church on open grassland beneath the Milky Way and a sky thick with stars.
    ratio: 0.7863
  - file: world-cup-celebration.jpg
    alt: Fans wrapped in Argentine flags celebrating in a floodlit city street at night.
    ratio: 0.6669
  - file: lisbon-rooftops.jpg
    alt: Tiled rooftops and church towers stacked down a hillside toward the water at dusk.
    ratio: 1.4995
  - file: eclipse-diamond-ring.jpg
    alt: The diamond ring effect as a total solar eclipse ends, one bright bead on the moon's edge.
    ratio: 1.0
  - file: coast-skyline-mist.jpg
    alt: A line of high-rise towers fading into sea mist above a long empty beach.
    ratio: 0.8
  - file: beach-houses-dusk.jpg
    alt: Beachfront houses and palm trees at dusk, snow-capped mountains on the horizon beyond.
    ratio: 1.9324
  - file: matterhorn-twilight.jpg
    alt: The Matterhorn in deep blue twilight, its ridges picked out against a clear sky.
    ratio: 0.6669
  - file: snowy-bicycles.jpg
    alt: A row of bicycles parked under falling snow beside a ribbed concrete building.
    ratio: 1.7897
  - file: tent-under-stars.jpg
    alt: A lit canvas tent glowing on a dark hillside under the Milky Way.
    ratio: 0.6587
  - file: surf-lifesavers.jpg
    alt: Two surf lifesavers in red and yellow watching swimmers from the sand beside their flag.
    ratio: 1.4995
  - file: milky-way-field.jpg
    alt: The Milky Way rising over an open field, a lone utility pole in the foreground.
    ratio: 0.6244
  - file: snowy-panorama.jpg
    alt: A wide, near-monochrome panorama of a snow-covered plaza under flat winter light.
    ratio: 3.0651
  - file: porcelain-pile.jpg
    alt: A heap of discarded sinks and toilets piled against a bare concrete wall.
    ratio: 1.7798
---

<div class="post">
  <header class="post-header">
    <h1 class="post-title"><span class="bonus-title">📷</span></h1>
  </header>

  <article>
    <p class="photo-wall-intro">Photography is one of the things I do when I am not doing research.</p>

    <div class="photo-wall photo-wall--rows">
      {% for photo in page.photos %}
        {% if forloop.index <= 3 %}
          {% assign loading = 'eager' %}
        {% else %}
          {% assign loading = 'lazy' %}
        {% endif %}
        {% capture photo_path %}assets/img/photography/{{ photo.file }}{% endcapture %}
        {% comment %}
          In a justified row a photo's width tracks its aspect ratio: measured
          against the live layout it settles at about ratio x 198px, so 200 is a
          close upper bound. A single shared hint would make the browser fetch a
          panorama-sized file for a narrow portrait. Below 576px the wall drops
          to one photo per row, hence the viewport-width fallback.
        {% endcomment %}
        {% capture sizes %}(min-width: 576px) {{ photo.ratio | times: 200 | round }}px, 95vw{% endcapture %}
        <div class="photo-wall-item" style="--ratio: {{ photo.ratio }}">
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
