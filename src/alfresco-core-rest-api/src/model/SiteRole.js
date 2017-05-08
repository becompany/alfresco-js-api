/**
 * Alfresco Content Services REST API
 * **Core API**  Provides access to the core features of Alfresco Content Services.
 *
 * OpenAPI spec version: 1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Site'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Site'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.SiteRole = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Site);
  }
}(this, function(ApiClient, Site) {
  'use strict';




  /**
   * The SiteRole model module.
   * @module model/SiteRole
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SiteRole</code>.
   * @alias module:model/SiteRole
   * @class
   * @param site {module:model/Site}
   * @param id {String}
   * @param guid {String}
   * @param role {module:model/SiteRole.RoleEnum}
   */
  var exports = function(site, id, guid, role) {
    var _this = this;

    _this['site'] = site;
    _this['id'] = id;
    _this['guid'] = guid;
    _this['role'] = role;
  };

  /**
   * Constructs a <code>SiteRole</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SiteRole} obj Optional instance to populate.
   * @return {module:model/SiteRole} The populated <code>SiteRole</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('site')) {
        obj['site'] = Site.constructFromObject(data['site']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('guid')) {
        obj['guid'] = ApiClient.convertToType(data['guid'], 'String');
      }
      if (data.hasOwnProperty('role')) {
        obj['role'] = ApiClient.convertToType(data['role'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Site} site
   */
  exports.prototype['site'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} guid
   */
  exports.prototype['guid'] = undefined;
  /**
   * @member {module:model/SiteRole.RoleEnum} role
   */
  exports.prototype['role'] = undefined;


  /**
   * Allowed values for the <code>role</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RoleEnum = {
    /**
     * value: "SiteConsumer"
     * @const
     */
    "SiteConsumer": "SiteConsumer",
    /**
     * value: "SiteCollaborator"
     * @const
     */
    "SiteCollaborator": "SiteCollaborator",
    /**
     * value: "SiteContributor"
     * @const
     */
    "SiteContributor": "SiteContributor",
    /**
     * value: "SiteManager"
     * @const
     */
    "SiteManager": "SiteManager"  };


  return exports;
}));

