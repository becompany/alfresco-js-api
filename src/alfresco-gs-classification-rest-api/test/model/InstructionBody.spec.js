

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AlfrescoGovernanceServicesSecurityControls);
  }
}(this, function(expect, AlfrescoGovernanceServicesSecurityControls) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AlfrescoGovernanceServicesSecurityControls.InstructionBody();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InstructionBody', function() {
    it('should create an instance of InstructionBody', function() {
      // uncomment below and update the code to test InstructionBody
      //var instane = new AlfrescoGovernanceServicesSecurityControls.InstructionBody();
      //expect(instance).to.be.a(AlfrescoGovernanceServicesSecurityControls.InstructionBody);
    });

    it('should have the property classificationInformation (base name: "classificationInformation")', function() {
      // uncomment below and update the code to test the property classificationInformation
      //var instane = new AlfrescoGovernanceServicesSecurityControls.InstructionBody();
      //expect(instance).to.be();
    });

    it('should have the property securityMarkInformation (base name: "securityMarkInformation")', function() {
      // uncomment below and update the code to test the property securityMarkInformation
      //var instane = new AlfrescoGovernanceServicesSecurityControls.InstructionBody();
      //expect(instance).to.be();
    });

  });

}));