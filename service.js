const HttpModule = require('./http-module');
const DataService = function() {
  const httpModule = new HttpModule();

  this.paggingSupport = function() {
    this.getOrders = function(
      /*{     
        "page":number,
        "itemsOnPage": number,
        "archivedToo": boolean 
      }*/ data,
      /*Function*/ successCb,
      /*Function*/ errorCb,
    ) {
      const { onSuccess, onError } = validateCallbacks(successCb, errorCb);
      return httpModule
        .post('http://localhost:4210/api/orders/', { data: data })
        .then(onSuccess(response))
        .catch(onError(response));
    };
  };

  this.getOrders = function(/*Function*/ successCb, /*Function*/ errorCb) {
    const { onSuccess, onError } = validateCallbacks(successCb, errorCb);
    return httpModule
      .get('http://localhost:4210/api/orders/')
      .then(onSuccess(response))
      .catch(onError(response));
  };

  const validateCallbacks = function(successCb, errorCb) {
    if (!successCb instanceof Function) {
      console.warn(`successCb param is not a Function...`);
      successCb = function(response) {
        console.log(response);
      };
    }
    if (!errorCb instanceof Function) {
      console.warn(`errorCb param is not a Function...`);
      errorCb = function(response) {
        console.error(response);
      };
    }
    return {
      onSuccess: successCb,
      onError: errorCb,
    };
  };
};
module.exports = DataService;
