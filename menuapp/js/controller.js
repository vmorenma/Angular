angular.module('menuController',[])
	
	.controller('menuController', function($scope){
	    $scope.menu = {
	      primero:['sopa','paella','calamares'] ,
	      segundo: ['carne','pescado','tortilla'],
	      postre:['fruta','yogur']
	    };

	    $scope.updatePlato=function (){

			var select= document.getElementById('plato');
			if (select.value=='primero'){
			$scope.menu.primero.push($scope.cambiarPlato);
			}else if(select.value=='segundo'){
			$scope.menu.segundo.push($scope.cambiarPlato);
			}else{
			$scope.menu.postre.push($scope.cambiarPlato);
			}
	    }
	}
  )