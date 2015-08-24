/* jshint undef:false*/
(function() {
  'use strict';
  describe('common.factories.<%= camelCaseFactoryName %> module', function() {
    beforeEach(module('common.factories.<%= camelCaseFactoryName %>'));

    describe('<%= camelCaseFactoryName %>', function() {
      it('should exist', inject(function( <%= camelCaseFactoryName %> ) {
        expect( <%= camelCaseFactoryName %> ).toBeDefined();
      }));
    });
  });
})();