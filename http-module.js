const httpModule = function() {
  this.post = function(/*string*/ url, /*{ body: {} }*/ options) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.onreadystatechange = function(response) {
        if (req.status > 200 && req.status < 300) {
          resolve(response);
        } else {
          reject({ error: true, reason: response });
        }
      };
      req.open('POST', url, true);
      req.setRequestHeader('Content-Type', 'application/json');
      req.send(options.body || null);
    });
  };

  this.get = function(/*string*/ url, /*{ params: {} }*/ options) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.onreadystatechange = function(response) {
        if (req.status > 200 && req.status < 300) {
          resolve(response);
        } else {
          reject({ error: true, reason: response });
        }
      };
      req.open('GET', url, true);
      req.setRequestHeader('Content-Type', 'application/json');
      req.send(options.params || null);
    });
  };
};
module.exports = httpModule;
