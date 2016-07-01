(function() {
  'use strict';

  angular
    .module('main-app')
    .config(config);

  /** @ngInject */
  config.$inject = ['$httpProvider', '$locationProvider', '$validatorProvider'];
  function config($httpProvider, $locationProvider, $validatorProvider) {
    // $httpProvider.interceptors.push('AuthInterceptor');
    /*     $locationProvider.html5Mode(true).hashPrefix('!') */




    // -----------------------------------
	// ADD RULE FOR REGEX VALIDATE
	// -----------------------------------
    $validatorProvider.addMethod("regex", function (value, element, regexp) {
        var re = new RegExp(regexp);
        return this.optional(element) || re.test(value);
    }, "");


  }
})();
