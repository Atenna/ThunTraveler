'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.travel'));

  describe('travel controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('TravelViewController');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});