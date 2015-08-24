(function() {
  'use strict';

  /**
   * @name  <%= pascalCaseFactoryName %>
   * @description Factory
   */
  function <%= pascalCaseFactoryName %> (storage, $q) {
    return {
      exampleMethod: function(param) {
        console.log(param);
      }
    };
  }
  angular.module('<%= pascalCaseFactoryName %>', [])
    .factory('<%= pascalCaseFactoryName %>', <%= pascalCaseFactoryName %> );
})();