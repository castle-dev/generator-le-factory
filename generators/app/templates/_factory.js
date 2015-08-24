(function() {
  'use strict';

  /**
   * @name  <%= camelCaseFactoryName %>
   * @description Factory
   */
  function <%= camelCaseFactoryName %> () {
    return {
      exampleMethod: function(param) {
        console.log(param);
      }
    };
  }
  angular.module('common.factories.<%= camelCaseFactoryName %>', [])
    .factory('<%= camelCaseFactoryName %>', <%= camelCaseFactoryName %> );
})();