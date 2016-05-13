(function(angular) {
	angular.module('components', [])
	.directive('day', function() {
		return {
			restrict: 'E',
			transclude: true,
			scope: {
				imagem: "@",
				data: "@",
				descricao: "@",
				max: "@",
				min: "@"
			},
			templateUrl: 'js/directives/day.html',
			link: function (scope) {

			}
		};
	});
})(window.angular);