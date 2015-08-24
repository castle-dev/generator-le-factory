/* jshint undef:false*/
(function() {
  'use strict';
  describe('common.factories.<%= pascalCaseFactoryName %> module', function() {
    var controller;
    beforeEach(module('common.factories.<%= pascalCaseFactoryName %>'));


    describe('<%= pascalCaseFactoryName %>', function() {
      it('should exist', function( <%= pascalCaseFactoryName %> ) {
        expect( <%= pascalCaseFactoryName %> ).toBeDefined();
      });
    });
  });
})();