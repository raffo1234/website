(function() {
  'use strict';


  angular
    .module('main-app')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $stateProvider
       .state('intro',{
         url: '/',
         abstract: false,
         data: {
           'needAuth': false,
           'title': 'Rafael Meza'
         },
         views: {
           main: {
             templateUrl: 'app/intro/intro.html',
             controller: 'IntroController'
           }
         }
       })
       .state('about',{
         url: '/about',
         abstract: false,
         data: {
           'needAuth': false,
           'title': 'About me'
         },
         views: {
           main: {
             templateUrl: 'app/about/about.html',
             controller: 'AboutController'
           }
         }
       })
       .state('portfolio',{
         url: '/portfolio',
         abstract: false,
         data: {
           'needAuth': false,
           'title': 'Portfolio'
         },
         views: {
           main: {
             templateUrl: 'app/portfolio/portfolio.html',
             controller: 'PortfolioController'
           }
         }
       })
       .state('contact',{
         url: '/contact',
         abstract: false,
         data: {
           'needAuth': false,
           'title': 'Contact'
         },
         views: {
           main: {
             templateUrl: 'app/contact/contact.html',
             controller: 'ContactController'
           }
         }
       })
  }

})();
