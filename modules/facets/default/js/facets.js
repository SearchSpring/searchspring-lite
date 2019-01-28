this.on('afterSearch', function($scope) {
	angular.forEach($scope.facets, function(facet) {
		// Create different limits for different facet types
		// For palette and grid types, this makes sure boxes fill the last row
		if (facet.type == 'palette' || facet.type == 'grid') {
			facet.limitCount = 15;
		} else {
			facet.limitCount = 10;
		}
	});
});
