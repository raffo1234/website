(function() {
  'use strict';


  angular
    .module('main-app')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function routeConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('public', {
      abstract: true,
      })
       .state('public.intro',{
         url: '/',
         abstract: false,
         data: {
           'needAuth': false,
           'title': 'Intro'
         },
         views: {
           content: {
             templateUrl: 'app/intro/intro.html',
             controller: 'IntroController'
           }
         }
       })
       .state('public.about',{
         url: '/about',
         abstract: false,
         data: {
           'needAuth': false,
           'title': 'About'
         },
         views: {
           content: {
             templateUrl: 'app/about/about.html',
             controller: 'AboutController'
           }
         }
       })
       .state('public.portfolio',{
         url: '/portfolio',
         abstract: false,
         data: {
           'needAuth': false,
           'title': 'Portfolio'
         },
         views: {
           content: {
             templateUrl: 'app/portfolio/portfolio.html',
             controller: 'PortfolioController'
           }
         }
       })
       .state('public.contact',{
         url: '/contact',
         abstract: false,
         data: {
           'needAuth': false,
           'title': 'Contact'
         },
         views: {
           content: {
             templateUrl: 'app/contact/contact.html',
             controller: 'ContactController'
           }
         }
       })
  }

})();
