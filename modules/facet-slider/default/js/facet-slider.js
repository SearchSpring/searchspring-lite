this.importer.include('facet-slider');

this.on('afterSearch', function($scope) {
	// Remove slider if ranges are the same
	for (var i = $scope.facets.length - 1; i >= 0; i--) {
		if ($scope.facets[i].type == 'slider' && $scope.facets[i].range[0] == $scope.facets[i].range[1]) {
			$scope.facets.splice(i, 1);
		}
	}
	
	// Update slider layout
	$scope.updateSlider = function(type) {
		if (type == 'slider') {
			setTimeout(function() {
				$scope.$broadcast('rzSliderForceRender');
			});
		}
	}
});
