# Slideout Module

The module <i>will</i> create a slideout container. To target this, use a standard v3 template and add the 'slideout' directive.

|Option|Description|
|------|-----------|
|*width*|width the slideout should be enabled|

```js
this.importer.include('slideout', { width: 767 });
```

Additionally, any elements inside your templates that use the 'slideout' directive will gain the click action to 'toggle' the slideout open/close.
Target the element inside the slideout template (in this case ".ss-facets") with your facets template.

```html
<!-- Slideout Button -->
<script type="text/ss-template" name="Slideout Button" target=".ss-slideout-button">
	<span class="ss-slideout-button-icon"></span>
	<span class="ss-slideout-button-label">Filter Options</span>
</script>
```

```html
<!-- Slideout Menu -->
<script type="text/ss-template" name="Slideout Menu" slideout>
	<div ng-if="facets.length > 0" class="ss-slideout-header">
		<h4 class="ss-title">Filter Options</h4><a class="ss-close" slideout></a>
	</div>

	<div ng-if="facets.length > 0 && slideout.triggered" class="ss-slideout-facets" ng-swipe-left="slideout.toggleSlideout()">
		<div class="ss-facets"></div>
	</div>
</script>
```
