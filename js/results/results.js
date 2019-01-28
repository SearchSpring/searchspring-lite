// Directive for seeing if an image has loaded
angular.module('SearchSpringCatalog').directive('imageLoad', ['$parse', function($parse) {
	return {
		restrict: 'A',
		link: function(scope, elem, attrs) {
			var fn = $parse(attrs.imageLoad);
			elem.on('load', function(event) {
				scope.$apply(function() {
					fn(scope, {
						$event: event
					});
				});
			});
		}
	};
}]);

this.on('afterSearch', function($scope) {
	// Check if there is more than one page (for head title logic)
	$scope.multiplePages = true;
	if ($scope.pagination.totalResults <= $scope.pagination.perPage) {
		$scope.multiplePages = false;
	}

	angular.forEach($scope.results, function(result) {
		// Remove HTML and shorten description
		if (result.description) {
			result.formattedDescription = formatContent(result.description, 400);
		}
	});

	// Add image classes based on width and height of element
	$scope.addImageClass = function(e) {
		var currentImage = e.target || e.srcElement;
		var imageWidth = currentImage.clientWidth;
		var imageHeight = currentImage.clientHeight;
		var parentWidth = currentImage.parentNode.clientWidth;
		var parentHeight = currentImage.parentNode.clientHeight;
		var centerThreshold = Math.round((imageWidth / parentWidth) * 100); // Determine when images should be centered

		if (parentHeight > imageHeight) {
			angular.element(currentImage).addClass('ss-image-fit-height');
		} else {
			angular.element(currentImage).addClass('ss-image-fit-width');
			if (centerThreshold >= 90) {
				angular.element(currentImage).addClass('ss-image-centered');
			}
		}
	}
});
