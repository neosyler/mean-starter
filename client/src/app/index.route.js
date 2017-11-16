(function () {
  'use strict';

  /** @ngInject */
  function routerConfig($urlRouterProvider, $locationProvider, $windowProvider) {
    var $window = $windowProvider.$get();

    if (angular.element('body').hasClass('cache-page')) {
      $urlRouterProvider.deferIntercept();
    }

    $urlRouterProvider.otherwise('/');

    if ($window.navigator.userAgent.indexOf('MSIE 9') !== -1) {
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: false
      }).hashPrefix('');
    } else {
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: true,
        rewriteLinks: false
      });
    }
  }

  angular
    .module('MEANSTARTER')
    .config(routerConfig);

})();
