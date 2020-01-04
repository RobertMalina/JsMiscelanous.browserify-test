const ElementFind = function() {
  this.apply = function() {
    Element.prototype.find = function(selector) {};
  };
};
