'use strict';

var utils = require('../utils/writer.js');
var Checkout = require('../service/CheckoutService');

module.exports.createcheckout = function createcheckout (req, res, next) {
  var body = req.swagger.params['body'].value;
  Checkout.createcheckout(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createcheckoutsWithArrayInput = function createcheckoutsWithArrayInput (req, res, next) {
  var body = req.swagger.params['body'].value;
  Checkout.createcheckoutsWithArrayInput(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createcheckoutsWithListInput = function createcheckoutsWithListInput (req, res, next) {
  var body = req.swagger.params['body'].value;
  Checkout.createcheckoutsWithListInput(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletecheckout = function deletecheckout (req, res, next) {
  var checkoutname = req.swagger.params['checkoutname'].value;
  Checkout.deletecheckout(checkoutname)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getcheckoutByName = function getcheckoutByName (req, res, next) {
  var checkoutname = req.swagger.params['checkoutname'].value;
  Checkout.getcheckoutByName(checkoutname)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.logincheckout = function logincheckout (req, res, next) {
  var checkoutname = req.swagger.params['checkoutname'].value;
  var password = req.swagger.params['password'].value;
  Checkout.logincheckout(checkoutname,password)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.logoutcheckout = function logoutcheckout (req, res, next) {
  Checkout.logoutcheckout()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatecheckout = function updatecheckout (req, res, next) {
  var checkoutname = req.swagger.params['checkoutname'].value;
  var body = req.swagger.params['body'].value;
  Checkout.updatecheckout(checkoutname,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
