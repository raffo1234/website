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
            angular.element('html').addClass('isStateChanging');
        		if(!html.hasClass('isMenuOpened')){
        			html.addClass('isMenuOpened');
        		}else{
        			html.removeClass('isMenuOpened');
        		}
            if(attr.uiHref){
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
