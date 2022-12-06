---
---
var products = [
  {% for prod in site.products %}
    {
      "name": "{{ prod.name }}",
      "price": {{ prod.price }},
      "photos": "{{ prod.photo }}",
      "description": "{{ prod.description }}",
      "type": "{{ prod.type }}"
    }
    {% unless forloop.last %},{% endunless %}
  {% endfor %}
];
