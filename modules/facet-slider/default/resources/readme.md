# Facet Slider Module

Add ability to use a slider for facets.

|Option|Description|
|------|-----------|
|no options| - |

```js
this.importer.include('facet-slider');
```

Use the directive 'ss-facet-slider' as shown below.

```html
<!-- Facet Slider Example -->
<div ng-repeat="facet in facets" ng-switch="facet.type">
	<div ng-switch-when="slider" class="ss-range-slider">
		<div ng-if="facet.range[0] != facet.range[1]" ss-facet-slider="facet" class="ss-range-slider-container"></div>
	</div>
</div>
```
