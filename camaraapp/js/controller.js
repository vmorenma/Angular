angular.module('camaraController',[])
	
	.controller('camaraController', function($scope){
	    $scope.articulo = [
		    {
		      nombre:'FUJIFILM FinePix S8600 - negro - Cámara fotográfica digital',
		      descripcion: 'Su reducido tamaño hará que te cueste creer lo que la FinePix S8600 puede ofrecerte... Cuerpo reducido y ligero, cómodo agarre y prestaciones para todos los gustos.',
		      precio: 149.00,
		      img:"./img/2.jpg"
			
		    },
		    {
		      nombre:'Cámara Bridge - Canon PowerShot SX60 HS Negro, Zoom 65x, WiFi y NFC',
		      descripcion: '¡Fíjate bien en los detalles! Incluso los más lejanos son capturados con precisión con la PowerSHot SX60 HS de Canon.  ',
		      precio: 439.00,
		      img:"./img/3.jpg"
			
		    },
		    {
		      nombre:'Cámara bridge - Sony DSC-H300B Negra, 20.1 Mp, HD',
		      descripcion: 'Ligera y con un diseño elegante, la cámara digital Cyber-shot™ DSC-H300B con un cuerpo compacto, se ajustará cómodamente en tu mano y además los controles de la cámara se han colocado cuidadosamente.',
		      precio: 219.00,
		      img:"./img/1.jpg"
			
		    }

	    ];
	}
  )
