'use strict';


/**
 * Create checkout
 * This can only be done by the logged in checkout.
 *
 * body Checkout Created checkout object
 * no response value expected for this operation
 **/
exports.createcheckout = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Creates list of checkouts with given input array
 * 
 *
 * body List List of checkout object
 * no response value expected for this operation
 **/
exports.createcheckoutsWithArrayInput = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Creates list of checkouts with given input array
 * 
 *
 * body List List of checkout object
 * no response value expected for this operation
 **/
exports.createcheckoutsWithListInput = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete checkout
 * This can only be done by the logged in checkout.
 *
 * checkoutname String The name that needs to be deleted
 * no response value expected for this operation
 **/
exports.deletecheckout = function(checkoutname) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get checkout by checkout name
 * 
 *
 * checkoutname String The name that needs to be fetched. Use checkout1 for testing. 
 * returns checkout
 **/
exports.getcheckoutByName = function(checkoutname) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "password" : "password",
  "phone" : "phone",
  "id" : 0,
  "checkoutname" : "checkoutname",
  "checkoutStatus" : 6,
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Logs checkout into the system
 * 
 *
 * checkoutname String The checkout name for login
 * password String The password for login in clear text
 * returns String
 **/
exports.logincheckout = function(checkoutname,password) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Logs out current logged in checkout session
 * 
 *
 * no response value expected for this operation
 **/
exports.logoutcheckout = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Updated checkout
 * This can only be done by the logged in checkout.
 *
 * checkoutname String name that need to be updated
 * body Checkout Updated checkout object
 * no response value expected for this operation
 **/
exports.updatecheckout = function(checkoutname,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

