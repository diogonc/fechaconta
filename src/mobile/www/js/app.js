// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

var homeUrl = 'http://fechaconta.azurewebsites.net/';
//var homeUrl = 'http://localhost:17357/';

angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.comanda', {
    url: '/comanda',
    views: {
      'tab-comanda': {
        templateUrl: 'templates/tab-comanda.html',
        controller: 'ComandaCtrl'
      }
    }
  })

  .state('tab.mesa', {
      url: '/mesa',
      views: {
        'tab-mesa': {
          templateUrl: 'templates/tab-mesa.html',
          controller: 'MesaCtrl'
        }
      }
    })

   .state('tab.confirmar', {
      url: '/confirmar',
      views: {
        'tab-confirmar': {
          templateUrl: 'templates/tab-confirmar.html',
          controller: 'ConfirmarCtrl'
        }
      }
    })

    .state('tab.volteSempre', {
      url: '/volteSempre',
      views: {
        'tab-volte-sempre': {
          templateUrl: 'templates/tab-volte-sempre.html',
          controller: 'VolteSempreCtrl'
        }
      }
    })

  .state('tab.menu', {
      url: '/menu',
      views: {
        'tab-menu': {
          templateUrl: 'templates/tab-menu.html',
          controller: 'MenuCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/mesa');
});

var appControllers = angular.module('starter.controllers', []);
var appServices = angular.module("starter.services", []);