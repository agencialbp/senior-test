(function(angular) {
	angular.module('location', [])
	.factory('locationService', ["$http", function($http) {
		return {
			getJson: function(){
				return $http.get('http://ip-api.com/json');
			}
		};
	}]);
})(window.angular);