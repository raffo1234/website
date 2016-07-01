(function () {
	'use strict';

	angular
    .module('main-app')
    .controller('AboutController', AboutController);

	AboutController.$inject = ['$scope'];
    function AboutController ($scope) {
  		console.log("about");

    }

})();
