(function() {
  'use strict';

  angular
    .module('main-app')
     .directive("onClickShowMenu", onClickShowMenu)

    onClickShowMenu.$inject = ['$state'];
    function onClickShowMenu($state){
      return {
        restrict: "AE",
        scope: {},
        link: function(scope, el, attr){
        	var html = angular.element('html');
        	el.on('click', function(e){
        		var self = angular.element(this);
        		if(!html.hasClass('isMenuOpened')){
        			html.addClass('isMenuOpened');
        		}else{
        			html.removeClass('isMenuOpened');
        		}
        	});
        }
      }
    }

})();
