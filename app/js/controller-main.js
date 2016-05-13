(function(angular) {
	angular.module('main', ["googlechart", "storage", "chart", "states", "location"])
	.controller('mainCtrl', ['$http', '$scope', 'storageService', 'chartService', 'statesService', 'locationService', function($http, $scope, storageService, chartService, statesService, locationService) {
		var self = this;

		// States
		statesService.getJson()
		.then(function(res){
			self.data = res.data;
		});

		self.addFavorites = function(){
			storageService.save("state", self.selectedState.initials);
			storageService.save("city", self.selectedCity);
			alert("Adicionado com sucesso!");
		};

		// Weather
		$scope.$watch(
			"ctrl.selectedState",
			function() {
				self.selectedCity = null;
			}
		);

		self.getWeather = function(city,state) {
			$http.get('http://developers.agenciaideias.com.br/tempo/json/'+city+'-'+state)
			.then(function(res){
				self.weather = res.data;

				self.insertData(res.data);
			});
		};

		self.insertData = function(data){
			var weather = data.previsoes;

			self.chartConfig.data.rows = [];

			for (var i = 0; i < weather.length; i++){
				if(i == 0){
					var first = true;
				};

				if(weather[i].data.split(' - ')[0] == "Sábado" && first == true){
					if(weather[i].descricao == "Tempo Bom (dia)" && weather[i].temperatura_max > 25){
						self.beachAlert = "No final de semana o tempo estará bom para ir a praia.";
					}else{
						self.beachAlert = "No final de semana o tempo não estará bom para ir a praia.";
					};
					var first = false;
				};

				self.chartConfig.data.rows.push({
					"c": [
						{
							"v": weather[i].data.split(' - ')[1]
						},
						{
							"v": weather[i].temperatura_min,
							"f": " "+weather[i].temperatura_min+"º"
						},
						{
							"v": weather[i].temperatura_max,
							"f": " "+weather[i].temperatura_max+"º"
						}
					]
				});
			};
		};
		
		self.chartConfig = chartService.config;

		locationService.getJson()
		.then(function(res){
			self.location = res.data;

			self.favoriteState = storageService.get("state") || self.location.region;
			self.favoriteCity = storageService.get("city") || self.location.city;

			self.getWeather(self.favoriteCity, self.favoriteState);
		});
	}]);
})(window.angular);