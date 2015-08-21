angular.module('starter.services', [])

.factory('Cardapio', function($http) {

  return {
    all: function() {
      $http.get('http://fechaconta.azurewebsites.net/api/cardapio', function(data){
        return data;
      });
    }    
  };
});
