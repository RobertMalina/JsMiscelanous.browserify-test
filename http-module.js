const httpModule = function() {
  this.post = function(/*string*/ url, /*{ body: {} }*/ options) {
    options = options || {};
    const req = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
      req.onreadystatechange = function() {
        if (req.readyState === 4) {
          if (req.status >= 200 && req.status < 300) {
            resolve(req.response);
          } else {
            reject({ error: true, reason: req.response });
          }
        }
      };
      req.open('POST', url, true);
      req.setRequestHeader('Content-Type', 'application/json');
      req.send(JSON.stringify(options.data));
    });
  };

  this.get = function(/*string*/ url, /*{ params: {} }*/ options) {
    const req = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
      req.onreadystatechange = function() {
        if (req.readyState === 4) {
          if (req.status >= 200 && req.status < 300) {
            resolve(req.response);
          } else {
            reject({ error: true, reason: req.response });
          }
        }
      };
      req.open('GET', url, true);
      req.setRequestHeader('Content-Type', 'application/json');
      req.send(options.params || null);
    });
  };
};
module.exports = httpModule;
