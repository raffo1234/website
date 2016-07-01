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

        		if(!html.hasClass('isMenuOpened')){
        			html.addClass('isMenuOpened');
        		}else{
        			html.removeClass('isMenuOpened');
        		}
            if(attr.uiHref){
              $timeout(function(){
                $state.go(attr.uiHref);
              }, 600);
            }
        	});
        }
      }
    }

})();
