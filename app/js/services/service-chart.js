(function(angular) {
	angular.module('chart', [])
	.factory('chartService', [function() {
		return {
			config: {
				"type": "AreaChart",
				"displayed": false,
				"data": {
					"cols": [
						{
							"id": "day",
							"label": "Dia",
							"type": "string",
							"p": {}
						},
						{
							"id": "min",
							"label": "Min",
							"type": "number",
							"p": {}
						},
						{
							"id": "max",
							"label": "Max",
							"type": "number",
							"p": {}
						}
					],
					"rows": []
				},
				"options": {
					"title": "Variações",
					"isStacked": "true",
					"fill": 20,
					"displayExactValues": true,
					"vAxis": {
						"title": "Temperatura",
						"gridlines": {
						"count": 3
					}
				},
				"hAxis": {
					"title": "Data"
				}
			},
			"formatters": {}
			}
		};
	}]);
})(window.angular);