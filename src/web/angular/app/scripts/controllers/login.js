'use strict';

angular.module('angularApp')
  .controller('LoginCtrl', function ($scope) {
  	var self = $scope;
    self.usuario = {login: 'teste', senha: 'teste'};

    self.logar = function(usuario){
    	console.log(usuario);
    	
    	if(usuario.login == '')
    			console.log('usuario invalido');
    	if(usuario.senha == '')
    			console.log('usuario invalido');
    };
  });
