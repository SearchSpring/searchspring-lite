# Autocomplete Module

Autocomplete default drop down.

|Option|Description|
|------|-----------|
|*input*|css selector to determine what inputs to watch|
|*action*|to override the default form action, or to direct elsewhere|
|*autoPosition*|enable auto-positioning of autocomplete dropdown|
|*limit*|number of products to display (hard limit from API)|

```js
this.importer.include('autocomplete', '.searchbox');

or

this.importer.include('autocomplete', { input: '.searchbox' });
```
