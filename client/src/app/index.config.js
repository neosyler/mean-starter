//global PAGE_DATA
(function () {
  'use strict';

  /** @ngInject */
  function config($logProvider, $httpProvider, $compileProvider, $windowProvider) {
    var $window = $windowProvider.$get();

    // Enable log
    $logProvider.debugEnabled(true);

    // Debug Info
    $compileProvider.debugInfoEnabled($window.location.port === '8081'); //set to false for production

    // Enable Credentials on the XHR object
    $httpProvider.defaults.withCredentials = true;
  }

  angular
    .module('MEANSTARTER')
    .config(config);

})();
