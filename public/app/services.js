(function(){
  angular
    .module('main-app')
    .service('httpRequest', httpRequest);

  httpRequest.$inject = ['$http', '$q'];
  function httpRequest($http, $q) {
    $http.defaults.useXDomain = true;

    this.send = function (method, url, data) {
      var defer = $q.defer();
      $http({
        method: method,
        url: url,
        timeout: 20000,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        data: data
      })
      .success(function (response) {
        defer.resolve(response);
      })
      .error(function (response) {
        defer.reject(response);
      });

      return defer.promise;
    };
  }


})()
