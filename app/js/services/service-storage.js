(function(angular) {
	angular.module('storage', [])
	.factory('storageService', [function() {
		return {
			save: function(item, data){
				localStorage.setItem(item, data);
			},
			get: function(item){
				return localStorage.getItem(item);
			}
		};
	}]);
})(window.angular);