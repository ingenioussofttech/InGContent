// Generated by CoffeeScript 1.6.3
(function() {
  var InGContent, cordova, exec;

  cordova = require("cordova");

  exec = require("cordova/exec");

  InGContent = (function() {
    var genericHandleError, trigger;

    function InGContent() {}

    trigger = function(evt, args) {
      return document.dispatchEvent(new CustomEvent(evt, {
        detail: args
      }));
    };

    genericHandleError = function(args) {
      return trigger("cordovaSetError", args);
    };

    InGContent.prototype.cordovaSetFileContents = function(pharse) {
      var success;
	  var genericHandleError;
      success = function(args) {
        return trigger("cordovaSetFileContents", args);
      };
	  
	   var success;
      genericHandleError = function(args) {
        return trigger("cordovaSetFileContents", 'error');
      };
      return exec(success, genericHandleError, "InGContent", "cordovaSetFileContents", [pharse]);
    };
	
	 InGContent.prototype.cordovaGetFileContents = function() {
      var success;
	  var genericHandleError;
      success = function(args) {
        return trigger("cordovaGetFileContents", args);
      };
	   genericHandleError = function(args) {
        return trigger("cordovaGetFileContents", 'error');
      };
	  
      return exec(success, genericHandleError, "InGContent", "cordovaGetFileContents", []);
    };

    


    return InGContent;

  })();

  InGContent = new InGContent();

  module.exports = InGContent;

}).call(this);
