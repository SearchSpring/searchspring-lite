# Results Module

Adds results, no results, and  boilerplate for other templates.

|Option|Description|
|------|-----------|
|no options| - |

To target facet container change the target on the "Results & No Results" template:

```html
<!-- Results & No Results -->
<script type="text/ss-template" name="Results & No Results" module="search" target="#searchspring-content">
```

To apply grid and list styles via scss, you must have the appropriate classes applied.

```html
<ul class="ss-item-container"></ul>
<ul class="ss-item-container ss-item-container-list"></ul>
```
