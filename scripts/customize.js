/* jshint unused: false */

(function (window, document, $, _, wp, api) {
  'use strict';

  /** @type {Object} */
  var wpApi = wp.customize;

  /**
   * Demo custom Control
   *
   * @constructor
   * @extends api.controls.Base
   * @augments wp.customize.Control
   * @augments wp.customize.Class
   */
  wpApi.controlConstructor.kkcp_demo_custom_control = api.controls.Base.extend({
    /**
     * On ready
     *
     * @override
     */
    ready: function() {
      // do something special
    }
  });

})(window, document, jQuery, _, wp, kkcp);
