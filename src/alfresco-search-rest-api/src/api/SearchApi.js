/**
 * Alfresco Content Services REST API
 * **Search API**  Provides access to the search features of Alfresco Content Services.
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
    define(['../../../alfrescoApiClient', '../model/Error', '../model/SearchRequest', '../model/ResultSetPaging'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/Error'), require('../model/SearchRequest'), require('../model/ResultSetPaging'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoContentServicesRestApi) {
      root.AlfrescoContentServicesRestApi = {};
    }
    root.AlfrescoContentServicesRestApi.SearchApi = factory(root.AlfrescoContentServicesRestApi.ApiClient, root.AlfrescoContentServicesRestApi.Error, root.AlfrescoContentServicesRestApi.SearchRequest, root.AlfrescoContentServicesRestApi.ResultSetPaging);
  }
}(this, function(ApiClient, Error, SearchRequest, ResultSetPaging) {
  'use strict';

  /**
   * Search service.
   * @module api/SearchApi
   * @version 1
   */

  /**
   * Constructs a new SearchApi.
   * @alias module:api/SearchApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the search operation.
     * @callback module:api/SearchApi~searchCallback
     * @param {string} error Error message, if any.
     * @param {module:model/ResultSetPaging} data The data returned by the service call.
     * @param {string} response The complete HTTP response.
     */

    /**
     * Searches Alfresco
     * @param {module:model/SearchRequest} SearchRequest Generic query API
     * @param {module:api/SearchApi~searchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultSetPaging}
     */
    this.search = function(SearchRequest) {
      var postBody = SearchRequest;

      // verify the required parameter 'SearchRequest' is set
      if (SearchRequest == undefined || SearchRequest == null) {
        throw new Error("Missing the required parameter 'SearchRequest' when calling search");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ResultSetPaging;

      return this.apiClient.callApi(
        '/search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
