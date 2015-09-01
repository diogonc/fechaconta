appServices.factory("WebApi", function($http, $q){
	var myService = {
    	abrirComanda: function(mesa) {
    		var promise = $http.post(homeUrl+'api/comanda?numeroDaMesa=' + mesa).then(function (response) {
	        	return response.data;
    	  	});

      		return promise;
    	}
  	};
  	
  	return myService;
})