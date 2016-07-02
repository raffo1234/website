(function() {
  'use strict';

  angular
    .module('main-app')
     .directive("onClickShowMenu", onClickShowMenu)

    onClickShowMenu.$inject = ['$state', '$timeout'];
    function onClickShowMenu($state, $timeout){
      return {
        restrict: "AE",
        scope: {},
        link: function(scope, el, attr){
        	var html = angular.element('html');
        	el.on('click', function(e){
            
            if(typeof attr.openClose !== 'undefined'){
          		if(!html.hasClass('isMenuOpened')){
          			html.addClass('isMenuOpened');
          		}else{
          			html.removeClass('isMenuOpened');
          		}
            }
            if(attr.uiHref){
              angular.element('html').addClass('isStateChanging');
              $timeout(function(){
                $state.go(attr.uiHref);
                $timeout(function(){
                  angular.element('html').removeClass('isStateChanging');
                }, 360);
              }, 360);
            }
        	});
        }
      }
    }

})();
