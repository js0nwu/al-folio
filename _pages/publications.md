---
layout: page
permalink: /publications/
title: publications
description: Check out my <a href="https://scholar.google.com/citations?user=aKqh7zIAAAAJ">Google Scholar</a> for my latest publications
years: [2018, 2016]
---

{% for y in page.years %}
  <h3 class="year">{{y}}</h3>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}