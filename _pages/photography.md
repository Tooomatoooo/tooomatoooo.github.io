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
# stays a single loop. Order is chosen so portrait and landscape alternate in
# the masonry columns, not by date. Files live in assets/img/photography/.
photos:
  - file: matterhorn-milky-way.jpg
    alt: The Milky Way arching over the Matterhorn, the peak silhouetted against a dense star field.
  - file: eclipse-corona.jpg
    alt: A total solar eclipse at totality, the sun's corona flaring around a black disc.
  - file: columbus-skyline.jpg
    alt: The Columbus skyline at golden hour, mirrored in the Scioto River below a low arched bridge.
  - file: sagrada-familia.jpg
    alt: The interior of the Sagrada Família, branching stone columns lit amber by stained glass.
  - file: glacier-lagoon.jpg
    alt: Icebergs drifting across a glacial lagoon, with a glacier and dark mountains behind.
  - file: church-milky-way.jpg
    alt: A small stone church on open grassland beneath the Milky Way and a sky thick with stars.
  - file: world-cup-celebration.jpg
    alt: Fans wrapped in Argentine flags celebrating in a floodlit city street at night.
  - file: lisbon-rooftops.jpg
    alt: Tiled rooftops and church towers stacked down a hillside toward the water at dusk.
  - file: eclipse-diamond-ring.jpg
    alt: The diamond ring effect as a total solar eclipse ends, one bright bead on the moon's edge.
  - file: coast-skyline-mist.jpg
    alt: A line of high-rise towers fading into sea mist above a long empty beach.
  - file: beach-houses-dusk.jpg
    alt: Beachfront houses and palm trees at dusk, snow-capped mountains on the horizon beyond.
  - file: matterhorn-twilight.jpg
    alt: The Matterhorn in deep blue twilight, its ridges picked out against a clear sky.
  - file: snowy-bicycles.jpg
    alt: A row of bicycles parked under falling snow beside a ribbed concrete building.
  - file: tent-under-stars.jpg
    alt: A lit canvas tent glowing on a dark hillside under the Milky Way.
  - file: surf-lifesavers.jpg
    alt: Two surf lifesavers in red and yellow watching swimmers from the sand beside their flag.
  - file: milky-way-field.jpg
    alt: The Milky Way rising over an open field, a lone utility pole in the foreground.
  - file: snowy-panorama.jpg
    alt: A wide, near-monochrome panorama of a snow-covered plaza under flat winter light.
  - file: porcelain-pile.jpg
    alt: A heap of discarded sinks and toilets piled against a bare concrete wall.
---

<div class="post">
  <header class="post-header">
    <h1 class="post-title"><span class="bonus-title">📷</span></h1>
  </header>

  <article>
    <p class="photo-wall-intro">Photography is one of the things I do when I am not doing research.</p>

    {% comment %}
      Three columns at full width, so each image lands in roughly a third of the
      content column. Keep this in sync with the column count in _base.scss.
    {% endcomment %}
    {% capture sizes %}(min-width: {{ site.max_width }}) {{ site.max_width | minus: 30 | divided_by: 3 }}px, (min-width: 576px) 45vw, 95vw{% endcapture %}

    <div class="photo-wall">
      {% for photo in page.photos %}
        {% if forloop.index <= 3 %}
          {% assign loading = 'eager' %}
        {% else %}
          {% assign loading = 'lazy' %}
        {% endif %}
        {% capture photo_path %}assets/img/photography/{{ photo.file }}{% endcapture %}
        {% assign zoom_src = photo_path | relative_url %}
        <div class="photo-wall-item">
          {%
            include figure.liquid
            path=photo_path
            class="img-fluid rounded z-depth-1"
            sizes=sizes
            alt=photo.alt
            loading=loading
            zoomable=true
            zoom_src=zoom_src
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
