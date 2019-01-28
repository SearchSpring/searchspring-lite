this.on('afterBootstrap', function($scope) {
	$scope.utilities = $scope.utilities || {};

	// Toggle dropdowns
	$scope.utilities.dropdown = {
		open: false,
		show: function(field, ev) {
			ev.stopPropagation();
			this.open = this.open == field ? false : field;
		}
	};

	// Close elements if clicked outside
	angular.element(document).on('click', function() {
		if ($scope.utilities.dropdown.open) {
			$scope.$evalAsync(function() {
				$scope.utilities.dropdown.open = false;
			});
		}
	});
});

this.on('afterSearch', function($scope) {
	angular.forEach($scope.facets, function(facet) {
		// Create color palette classes
		if (facet.type == 'palette') {
			angular.forEach(facet.values, function(value) {
				value.paletteClass = value.value.replace(/\&/, '').replace(/\//, '-').replace(/\s+/g, '-').toLowerCase();
			});
		}
	});
});

// Remove HTML and shorten content
function formatContent(content, limit) {
	if (content) {
		var regexContent = /(<([^>]+)>)/ig;
		var cleanContent = content.replace(regexContent, '');

		if (cleanContent.length > (limit + 3)) {
			content = cleanContent.substring(0, limit) + '...';
		} else {
			content = cleanContent;
		}

		return content;
	}
}
