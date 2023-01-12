(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(factory);
  } else if (typeof module === "Object" && module.exports) {
    module.exports = factory();
  } else {
    root.UMDLib = factory();
  }
}(this, function () {
  function UMDLib(opt) {
    console.log(opt);
  }

  UMDLib.version = "0.0.0";

  UMDLib.doSomething = function () {
    console.log("umd lib do something");
  };
  return UMDLib;
}));
