(function() {
  'use strict';

  angular
    .module('main-app')
    .run(runBlock);

  runBlock.$inject = ['$log', '$rootScope', '$state', '$location', '$window'];
  function runBlock($log, $rootScope, $state, $location, $window) {
    var nextState;

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){


    });



    /* ---------------------------------------- */
    /* UI-ROUTE, SET ACTIVE TO NAV LINKS */
    /* ---------------------------------------- */
    $rootScope.$state = $state;


  }



  // FUNCTION PARA OBTENER PARAMETROS DE LA URL
  function getSearchParameters() {
      var prmstr = window.location.search.substr(1);
      return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
  }

  function transformToAssocArray( prmstr ) {
      var params = {};
      var prmarr = prmstr.split("&");
      for ( var i = 0; i < prmarr.length; i++) {
          var tmparr = prmarr[i].split("=");
          params[tmparr[0]] = tmparr[1];
      }
      return params;
  }


})();
