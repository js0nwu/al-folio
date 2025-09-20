---
layout: page
permalink: /publications/
title: publications
nav: true
nav_order: 3
description: Check out my <a class="link-highlight" href="https://scholar.google.com/citations?user=aKqh7zIAAAAJ">Google Scholar</a> for my latest publications
years: [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2016]
---

<style>
  ol.bibliography,
  ol.bibliography > li {
    list-style: none !important;
    list-style-type: none !important;
    margin-left: 0;
    padding-left: 0;
  }

  ol.bibliography > li::marker {
    content: '' !important;
  }
</style>

{% for y in page.years %}
  <h3 class="year">{{y}}</h3>
{% bibliography -f papers --group_by none -q @*[year={{y}}]* %}
{% endfor %}
