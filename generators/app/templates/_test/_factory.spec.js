/* jshint undef:false*/
(function() {
  'use strict';
  describe('common.factories.<%= pascalCaseFactoryName %> module', function() {
    var controller;
    beforeEach(module('common.controllers.<%= controllerName %>'));


    describe('<%= pascalCaseFactoryName %>', function() {
      it('should exist', function( <%= pascalCaseFactoryName %> ) {
        expect( <%= pascalCaseFactoryName %> ).toBeDefined();
      });
    });
  });
})();