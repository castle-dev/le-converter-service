/**
 * Builds converter objects
 * @constructor
 * @returns {Object} converter
 * @returns {Function} converter.escape
 * @returns {Function} converter.unescape
 */
var ConverterService = function () {
  this.escape = function(html) {
    return String(html)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  };
  this.unescape = function(html) {
    return String(html)
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, '\'')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
  };
};

module.exports = ConverterService;