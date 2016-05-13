(function(angular) {
	angular.module('states', [])
	.factory('statesService', ["$http", function($http) {
		return {
			getJson: function(){
				return $http.get('js/DATA/data.json');
			}
		};
	}]);
})(window.angular);