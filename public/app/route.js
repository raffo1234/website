(function() {
  'use strict';


  angular
    .module('main-app')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function routeConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
       .state('intro',{
         url: '/',
         abstract: false,
         data: {
           'needAuth': false,
           'title': 'Intro'
         },
         views: {
           web: {
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
           'title': 'About'
         },
         views: {
           web: {
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
           web: {
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
           web: {
             templateUrl: 'app/contact/contact.html',
             controller: 'ContactController'
           }
         }
       })
  }

})();
